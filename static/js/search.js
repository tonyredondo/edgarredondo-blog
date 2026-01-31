(() => {
  const resultsEl = document.getElementById('search-results');
  if (!resultsEl) {
    return;
  }

  const queryEl = document.getElementById('search-query');
  const params = new URLSearchParams(window.location.search);
  const rawQuery = (params.get('q') || params.get('s') || '').trim();
  const indexUrl = resultsEl.dataset.indexUrl || '/index.json';

  if (queryEl) {
    queryEl.textContent = rawQuery ? `Resultados para: "${rawQuery}"` : '';
  }

  if (!rawQuery) {
    resultsEl.innerHTML = '<p>Introduce un término de búsqueda.</p>';
    return;
  }

  const normalize = (value) =>
    value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];

  const formatDate = (value) => {
    const date = new Date(`${value}T00:00:00`);
    if (Number.isNaN(date.getTime())) {
      return value;
    }
    return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
  };

  const makeExcerpt = (text) => {
    const trimmed = (text || '').trim();
    if (trimmed.length <= 220) {
      return trimmed;
    }
    return `${trimmed.slice(0, 217)}...`;
  };

  fetch(indexUrl)
    .then((response) => response.json())
    .then((pages) => {
      const query = normalize(rawQuery);
      const matches = pages
        .filter((page) => {
          const haystack = normalize(`${page.title} ${page.content}`);
          return haystack.includes(query);
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));

      if (!matches.length) {
        resultsEl.innerHTML = '<p>No se encontraron resultados.</p>';
        return;
      }

      const html = matches
        .map((page) => {
          const thumb = page.featured_image
            ? `<a class="post-thumbnail" href="${page.url}"><img alt="${page.title}" src="${page.featured_image}" class="attachment-rara-academic-with-sidebar size-rara-academic-with-sidebar wp-post-image" /></a>`
            : '';
          const excerpt = makeExcerpt(page.summary || page.content || '');
          return `
<article class="post type-post status-publish format-standard hentry">
  <header class="entry-header">
    <h2 class="entry-title" itemprop="headline"><a href="${page.url}" rel="bookmark">${page.title}</a></h2>
    <div class="entry-meta">
      <span class="byline" itemprop="author" itemscope itemtype="https://schema.org/Person">
        BY <span class="authors vcard"><span class="url fn n">Edgar Redondo</span></span>
      </span>
      <span class="posted-on">
        <a href="${page.url}" rel="bookmark">
          <time class="entry-date published updated" datetime="${page.date}">${formatDate(page.date)}</time>
        </a>
      </span>
    </div>
  </header>
  ${thumb}
  <div class="entry-content" itemprop="text">
    <p>${excerpt}</p>
  </div>
  <div class="entry-footer">
    <a href="${page.url}" class="read-more">Read More</a>
  </div>
</article>`;
        })
        .join('');

      resultsEl.innerHTML = html;
    })
    .catch(() => {
      resultsEl.innerHTML = '<p>No se pudieron cargar los resultados.</p>';
    });
})();
