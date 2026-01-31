# Plan: WordPress -> Hugo (copia 100% fiel, sin usar edgarredondo.com en links/canonical)

## Objetivo
Clonar el sitio WordPress en Hugo con una **paridad visual muy cercana** (se vea igual o muy similar) de estructura, contenido, imagenes, layout y comportamiento visible. Cambios internos como rutas, slugs o nombres de archivos **son aceptables** si el resultado se ve igual y la navegacion funciona. Evitar por completo el dominio `edgarredondo.com` en links/canonical/metadata. La copia debe vivir con su propio `baseURL`.

## Definicion de fidelidad (visual)
- Lo que se ve debe ser muy similar al WordPress: tipografias, tamaños, espacios, colores, orden, textos, botones, iconos, thumbnails, sidebar, header, footer, etc.
- URLs internas o nombres de archivos pueden cambiar si el usuario no percibe diferencia visual y la navegacion funciona.
- Canonicals y metadata pueden diferir si no afectan al renderizado, pero **no pueden** apuntar a `edgarredondo.com`.
- Usar las ventajas de Hugo: contenido en Markdown limpio, templates bien estructurados, y evitar copiar HTML crudo salvo que sea necesario para preservar el diseño.

## Fuente de verdad (crawl)
- Crawl realizado via HTTP (HTTPS rechaza conexion).
- Sitemaps detectados:
  - `post-sitemap.xml`: 38 URLs (incluye home)
  - `page-sitemap.xml`: 2 URLs (home + /bio/)
  - `category-sitemap.xml`: 13 URLs
- Total URLs unicas: 52
- Snapshots HTML y resumen:
  - HTML: `/tmp/edgarredondo-crawl/*.html`
  - Resumen: `/tmp/edgarredondo-crawl/summary.json`

## Inventario actual (WordPress)
### URLs y estructura
- Home: `/`
- Posts: `/{slug}/` (sin `/posts/`)
- Pagina: `/bio/`
- Categorias: `/category/{slug}/` (slug sin acentos)
- Tags: `/tag/{slug}/`
- Paginacion: `/page/2/`, `/page/3/`, `/page/4/`
- Busqueda: `/?s=termino` (titulo: "Search Results for: ...")

### Categorias (13)
- biologia
- cine-y-series
- curiosidades
- educacion
- epistemologia
- filosofia
- fisica
- frases-celebres
- linguistica
- logica
- matematicas
- sin-categoria
- transhumanismo

### Tags
- 24 tags unicos en los posts (ej: filosofia, matematicas, epistemologia, literatura, logica, probabilidad, etc)

### Layout y widgets
- Header: email + telefono + social (Facebook/LinkedIn) + menu principal
- Menu: "MENU" con subitems (Filosofia -> Transhumanismo, Matematicas, Logica, Frases celebres) + item "Edgar Redondo" hacia `/bio/`
- Sidebar: imagen autor, buscador, categorias, "Ultimos articulos" (5), "Comentarios recientes" (5)
- Listado de posts: titulo + meta (autor, fecha, comentarios) + thumbnail + excerpt + "Read More"
- Single: bloque share al inicio del contenido, contenido, footer con categorias + tags, related posts placeholder, comentarios

### Plugins/elementos visibles
- AccessPress Social Share (bloque de compartir dentro del contenido)
- Contextual Related Posts (placeholder `#crp_related`)
- Comentarios incrustados en HTML + form de comentario

### SEO/metadata (no visual)
- Yoast: `description`, canonical, OG/Twitter completos, JSON-LD, `rel=next/prev` en paginacion
- Favicon set (32, 192, 180, 270)
- Google Analytics (ExactMetrics) con UA-104515460-1

### Assets
- Imagenes: 293 en `wp-content/uploads` (con `srcset` y multiples tamanos)
- CSS/JS:
  - Theme Rara Academic + meanmenu + owl carousel
  - AccessPress Social Share
  - Contextual Related Posts
  - jQuery + wp-embed

## Gap actual en Hugo
- URLs no coinciden: Hugo usa `/posts/` y `/categories/`
- No existe `/bio/`
- No hay tags ni paginas de tags
- Sidebar y menu no coinciden
- No hay share, related posts ni comentarios
- SEO/metadata no coincide con Yoast
- Assets (uploads + tema + plugins + favicons) no estan
- Links internos apuntan a `edgarredondo.com`

## Decisiones de la copia (intencionales)
- **Sin comentarios** (no se migran ni se muestran).
- **Sin bloque de compartir** (share).
- **Buscador local** con JavaScript (sin backend) y apariencia similar.
- **Fuentes e iconos locales** (sin dependencias externas).

## Plan de implementacion (paso a paso)
> Objetivo: ejecutar todo de forma reproducible y verificable, con paridad 100% y sin usar `edgarredondo.com` en links/canonical.

### Paso 0: Preparacion
1. Crear carpeta de trabajo para el crawl y assets:
   - `mkdir -p /tmp/edgarredondo-crawl /tmp/edgarredondo-assets`
2. Verificar que el sitio responde por HTTP:
   - `curl -I http://edgarredondo.com/`
3. Ejecutar el crawler y guardar resultados actualizados:
   - Generar `/tmp/edgarredondo-crawl/summary.json` y snapshots HTML.
4. Guardar un snapshot de sitemaps:
   - `curl -o /tmp/edgarredondo-crawl/sitemap_index.xml http://edgarredondo.com/sitemap_index.xml`
   - `curl -o /tmp/edgarredondo-crawl/post-sitemap.xml http://edgarredondo.com/post-sitemap.xml`
   - `curl -o /tmp/edgarredondo-crawl/page-sitemap.xml http://edgarredondo.com/page-sitemap.xml`
   - `curl -o /tmp/edgarredondo-crawl/category-sitemap.xml http://edgarredondo.com/category-sitemap.xml`

### Paso 1: Descarga de assets (a prueba de faltantes)
> Importante: no depender de directory listing del servidor. Se debe descargar TODO lo referenciado en HTML/CSS.
1. Descargar assets directos desde el crawl (HTML):
   - Extraer todas las URLs de `summary.json` (img/src/srcset, link rel=stylesheet, script src).
   - Descargar con una lista **preservando la ruta completa** del URL (para que existan `/wp-content/...` y `/wp-includes/...`).
   - **Validacion obligatoria:** comprobar que las rutas existen en disco exactamente bajo `/tmp/edgarredondo-assets/wp-content/...` y `/tmp/edgarredondo-assets/wp-includes/...`.
2. Descargar assets de CSS (url()):
   - Parsear CSS descargado y bajar todas las rutas `url(...)`.
3. Descargar `wp-content/uploads` (si el servidor lo permite) como verificacion adicional:
   - `wget -r -np -nH -P /tmp/edgarredondo-assets http://edgarredondo.com/wp-content/uploads/`
   - Si falla por falta de listado, este paso puede omitirse porque el paso 1 ya cubre todo lo usado.
4. Copiar assets a Hugo conservando rutas:
   - `mkdir -p static/wp-content static/wp-includes`
   - `rsync -a /tmp/edgarredondo-assets/wp-content/ static/wp-content/`
   - `rsync -a /tmp/edgarredondo-assets/wp-includes/ static/wp-includes/`
5. Verificacion:
   - Comparar conteo de assets descargados vs URLs unicas del crawl.

### Paso 2: Configuracion de URLs y taxonomias (solo para navegacion funcional)
1. En `config/_default/hugo.toml`:
   - Configurar permalinks/taxonomies **solo** en la medida en que la navegacion visible coincida con WP.
   - No es obligatorio que las URLs sean identicas, pero si debe navegarse a los mismos contenidos desde los menus y enlaces.
2. Normalizacion de slugs:
   - Definir un mapa exacto de categorias/tags -> slug estable para evitar duplicados.
   - Usar `slug` en front matter por termino si es necesario.
3. Definir `baseURL` del sitio nuevo (no usar `edgarredondo.com`).
4. Usar URLs relativas en templates y contenido (`relURL`, `absURL` solo cuando sea necesario).
5. Habilitar HTML crudo en Markdown **solo** si hay embeds o contenido que no se pueda representar bien con Markdown.

### Paso 3: Migracion de contenido
1. Posts (37) y paginas:
   - Crear `content/posts/<slug>/index.md` para cada post (excluir `/` y `/bio/`).
   - Crear `content/bio/index.md` para la pagina de biografia.
   - **Verificacion:** conteo final debe ser 37 posts + bio (contra sitemap).
2. Front matter por post (YAML):
   - `title`, `date`, `slug`, `description`, `categories`, `tags`, `featured_image`.
3. Excerpts:
   - Insertar `<!--more-->` en el mismo punto que WP para reproducir el excerpt exacto.
4. Reescritura de links internos:
   - Sustituir TODO `http://edgarredondo.com` y `//edgarredondo.com` en:
     - enlaces dentro del contenido
     - botones de compartir (data-url, share links)
     - canonical/OG/Twitter/JSON-LD
     - scripts/css si quedaran referencias
5. Comentarios:
   - **No se migran ni se muestran** comentarios en la copia Hugo.
6. Asegurar que **todas** las portadas (`featured_image`) coincidan con las del WordPress original.

### Paso 4: Layout y templates (paridad visual cercana)
1. `baseof.html` y `<head>`:
   - Replicar todo lo que afecta render (CSS/JS, fuentes, viewport, favicon).
   - Canonical/OG/Twitter/JSON-LD pueden diferir si no afectan lo visual, pero **no deben** contener `edgarredondo.com`.
2. Header:
   - Top bar (email/tel/social) y menu exacto (incluye `/bio/`).
3. Sidebar:
   - Imagen autor, search form **local** (JS) sin backend ni WP.
   - Lista de categorias con el orden de WP.
   - "Ultimos articulos" (5) con contenido real del crawl.
   - **Eliminar** la seccion de "Comentarios recientes".
4. Listados (home + categorias + tags + autor):
   - Meta (autor, fecha), thumbnail, excerpt, “Read More”.
   - Generar archivos para:
     - categorias `/category/<slug>/`
     - tags `/tag/<slug>/`
     - autor `/author/sadaga/` (mismo contenido que home si aplica)
5. Single:
   - **Eliminar** el bloque de compartir (share).
   - Placeholder `#crp_related` con lista real de relacionados extraida del crawl (o **fallback visual** con Hugo related si no existe en HTML).
   - Footer con categorias + tags + iconos.
   - **Sin comentarios**.
6. Search:
   - Implementar busqueda **local** (JS) sin backend; debe parecer dinamica y funcionar en el navegador.
   - Usar indice pre-generado (JSON) y definir comportamiento:
     - Orden por fecha descendente.
     - Busqueda en titulo + contenido.
     - Excerpt basado en `<!--more-->` o fallback a los primeros N caracteres.
   - Renderizar resultados con el mismo layout de listados (titulo, fecha, thumbnail, excerpt, “Read More”).

### Paso 5: CSS/JS y comportamiento
1. Usar CSS/JS locales (descargados) y ajustar rutas para que no apunten al dominio viejo.
2. Verificar que `srcset` y tamaños de imagen funcionan con los assets locales.
3. Solo aplicar overrides en `custom.css` si es estrictamente necesario.
4. Replicar body classes de WP para que los estilos apliquen igual.
5. Alojar Google Fonts/FontAwesome localmente y actualizar las referencias:
   - Descargar fuentes a `static/fonts/` y definir `@font-face` local.
   - Reescribir las URLs en CSS para apuntar a rutas locales.

### Paso 6: QA y validacion (bloqueante, enfoque visual)
1. Build: `HUGO_CACHEDIR=/tmp/hugo_cache hugo --gc --minify`.
2. Comparacion visual contra WP:
   - Home, categoria, post con comentarios, post sin comentarios, bio, tag, search.
   - Validar que se vea igual o muy similar en desktop y mobile.
3. Link check interno y de assets faltantes (solo para asegurar que lo visible carga).
4. Busqueda global: `rg edgarredondo.com` en repo y en `public/`.

### Paso 7: Cierre
1. Documentar diferencias restantes (si las hay).
2. Congelar version y publicar.

## Checklist final
- [ ] Paridad visual cercana (home, categoria, post, bio, tag, search)
- [ ] Navegacion funcional desde menus y enlaces (URLs pueden variar)
- [ ] Contenido, thumbnails y excerpts iguales
- [ ] Layout identico (header/sidebar/footer)
- [ ] Related posts visibles y con el mismo contenido
- [ ] Sin comentarios ni bloque de compartir (decision intencional)
- [ ] Assets completos y cargando desde local
- [ ] Fuentes e iconos alojados localmente
- [ ] Sin `edgarredondo.com` en HTML/canonical/links
