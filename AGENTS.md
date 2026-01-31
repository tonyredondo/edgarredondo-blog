# AGENTS.md

## Repo purpose
Static blog site built with Hugo. Content lives in Markdown, with a custom theme that mirrors a previous WordPress design.

## Requirements
- Hugo Extended v0.146.0+ (matches `.github/workflows/hugo.yml`).
- No JS toolchain required; the workflow only runs `npm ci` if a lockfile exists.

## Quick commands
- Dev server: `hugo server`
- Production build: `hugo --gc --minify --environment production`
- GitHub Pages build (matches workflow): `hugo --gc --minify --environment development`
- Tests: none (use the build as a smoke check)

## Structure
- `config/_default/hugo.toml`: base site config (dev baseURL, language, pagination, taxonomies).
- `config/production/hugo.toml`: production overrides (baseURL).
- `content/posts/`: all articles as Markdown.
- `static/images/`: all post images and author image (served at `/images/...`).
- `themes/edgarredondo/`: custom theme (layouts + CSS).
- `archetypes/default.md`: template used by `hugo new` (TOML front matter).
- `public/`: generated output (do not edit by hand).

## How to add a new blog post
1) Create the content folder:
   - `hugo new posts/<post-slug>/index.md`
2) Convert front matter to YAML (existing posts use YAML). Example:
   ```yaml
   ---
   title: "Titulo del post"
   date: 2026-01-31
   draft: true
   featured_image: "/images/<post-slug>/image_1.jpg"
   categories:
     - Filosofia
   ---
   ```
3) Add images under `static/images/<post-slug>/` and reference them in Markdown as `/images/<post-slug>/<file>`.
4) Add `<!--more-->` where you want the summary to break.
5) Set `draft: false` when ready to publish.
6) Preview with `hugo server`.

## Content conventions
- Existing posts use YAML front matter with keys like `title`, `date`, `draft`, `featured_image`, `categories`.
- Images: place under `static/images/<post-slug>/` and reference as `/images/<post-slug>/<file>` in Markdown.
- Summaries: home and list pages use `.Summary | truncate 200`; use `<!--more-->` in Markdown to control summary cut.
- Categories: taxonomy terms are derived from `categories` in front matter and rendered in the sidebar.

## Theme/layout map
- Base template: `themes/edgarredondo/layouts/_default/baseof.html` (loads CSS + partials).
- Home: `themes/edgarredondo/layouts/index.html` (paginator driven).
- Section/taxonomy lists: `themes/edgarredondo/layouts/_default/list.html` (no pagination).
- Single post: `themes/edgarredondo/layouts/_default/single.html`.
- Markdown image render hook: `themes/edgarredondo/layouts/_default/_markup/render-image.html`.
- Partials:
  - `themes/edgarredondo/layouts/partials/header.html` (site header, hard-coded menu + contact/social links).
  - `themes/edgarredondo/layouts/partials/sidebar.html` (author image, search form, categories list).
  - `themes/edgarredondo/layouts/partials/footer.html` (copyright).

## CSS/assets
- CSS lives in `themes/edgarredondo/static/css/`:
  - `style.css` (large, original theme styles)
  - `responsive.css` (media queries)
  - `custom.css` (local overrides; prefer editing here when possible)
- `style.css` references `css/images/*.png` assets that are currently missing; add them under `themes/edgarredondo/static/css/images/` or update URLs if needed.
- No JavaScript in this repo.

## Build/deploy
- Local build: `hugo --gc --minify`.
- GitHub Pages build (workflow): `hugo --gc --minify --baseURL "<pages-url>/"`.
- GitHub Actions: `.github/workflows/hugo.yml` installs Hugo Extended v0.146.0 and runs `hugo --gc --minify --baseURL`.
- Keep `baseURL` trailing slash because templates build absolute image URLs with `printf "%s%s" .Site.BaseURL ...`.

## Tests
- No automated tests. Use `hugo --gc --minify` or `hugo server` as a smoke check.

## Known pitfalls / gotchas
- Hard-coded menu links in `themes/edgarredondo/layouts/partials/header.html` use accented slugs; Hugo `urlize` removes diacritics, so taxonomy URLs may not match. Prefer building menu URLs with `urlize` or `.Site.GetPage` if adjusting.
- `archetypes/default.md` uses TOML front matter (`+++`), while existing content uses YAML (`---`). Align if you create new posts.
- Sidebar search posts to `/search/`, but there is no search page or JS implementation; remove or implement if needed.
- `public/` and `.hugo_build.lock` are generated; avoid manual edits.

## Privacy
- Contact info (email/phone) exists in `themes/edgarredondo/layouts/partials/header.html` and `README.md`. Treat as PII and change only with explicit intent.
