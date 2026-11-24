# vtorosyan.com

Personal site built with [Astro](https://astro.build). Posts live in `src/content/blog/` as Markdown.

## Local development

```bash
npm install
npm run dev
```

Opens at http://localhost:4321.

## Build

```bash
npm run build       # output in dist/
npm run preview     # serve the built site locally
```

## Writing

Create a new post at `src/content/blog/<slug>.md`:

```markdown
---
title: My new post
date: 2026-11-24
---

Body in Markdown.
```

The URL will be `/<slug>/`. Push to `master` → GitHub Actions builds and deploys to Pages.
