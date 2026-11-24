# vtorosyan.com

Personal site built with [Astro](https://astro.build). Posts are Markdown files, the site is fully static, and GitHub Actions deploys to GitHub Pages on every push to `master`.

## Local development

```bash
npm install     # one time
npm run dev     # http://localhost:4321 with hot reload
```

## Build and preview

```bash
npm run build       # produces dist/ (what gets deployed)
npm run preview     # serves dist/ locally — identical to production
```

## Project structure

```
src/
  content/blog/        Markdown posts — filename is the URL slug
  pages/
    index.astro        home (first page of post list)
    page/[page].astro  paginated /page/2/, /page/3/, …
    [...slug].astro    renders any post from src/content/blog/
    about.astro
    cv.astro
    404.astro
    feed.xml.ts        RSS at /feed.xml
  layouts/
    BaseLayout.astro   header, nav, Faro telemetry, footer
    PostLayout.astro   post title + date + body
  styles/global.css    design tokens, typography, layout
public/                static files copied verbatim to the site root
  images/              post images, referenced as /images/foo.png
  VardanTorosyan2025.pdf
  CNAME                tells GitHub Pages the custom domain
  robots.txt
.github/workflows/
  deploy.yml           CI: builds on push to master, deploys to Pages
astro.config.mjs       site URL, integrations, redirects
src/content/config.ts  post frontmatter schema
```

## Writing a new post

Create `src/content/blog/<slug>.md`:

```markdown
---
title: My new post
date: 2026-11-24
description: Optional — used for RSS and meta tags
---

Body in **Markdown**.
```

- The URL becomes `/<slug>/`
- Posts are sorted by `date` (newest first) in the home page and RSS feed
- Add images to `public/images/` and reference them as `/images/foo.png`
- Set `draft: true` in the frontmatter to hide a post from the build

## Adding a page

Create an `.astro` file in `src/pages/`. Example — `src/pages/contact.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Contact">
  <h1 class="post-title">Contact</h1>
  <p>…</p>
</BaseLayout>
```

The URL is `/contact/`. To show it in the header, edit the `<nav>` in `src/layouts/BaseLayout.astro`.

## Deploy

Push to `master`. `.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages. The custom domain (`vtorosyan.com`) comes from `public/CNAME`.
