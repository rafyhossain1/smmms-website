# SMMM School Website — smmms.org (Astro Version)

Website for **Siraj Mia Memorial Model School**, built with Astro + Tailwind CSS.

## Quick Start

```bash
npm install        # one time only
npm run dev        # start dev server at localhost:4321
```

## Deploy to Netlify (Manual)

```bash
npm run build      # generates dist/ folder
```

Then drag the `dist/` folder to [app.netlify.com](https://app.netlify.com).

## Project Structure

```
smmms-astro/
├── public/
│   ├── images/          # School photos go here
│   └── favicon.svg
├── src/
│   ├── components/      # Header.astro, Footer.astro (written ONCE)
│   ├── content/blog/    # Blog posts as Markdown
│   ├── layouts/         # BaseLayout.astro
│   ├── pages/           # All site pages
│   └── styles/          # global.css + Tailwind
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Pages

| URL | File |
|---|---|
| `/` | `src/pages/index.astro` |
| `/about` | `src/pages/about.astro` |
| `/academics` | `src/pages/academics.astro` |
| `/admissions` | `src/pages/admissions.astro` |
| `/campus-life` | `src/pages/campus-life.astro` |
| `/blog` | `src/pages/blog/index.astro` |
| `/alumni` | `src/pages/alumni.astro` |
| `/contact` | `src/pages/contact.astro` |

## Adding a Blog Post

Create a new `.md` file in `src/content/blog/`:

```md
---
title: "Post Title"
date: "2026-04-01"
excerpt: "Short description."
author: "SMMM School"
---

Content here in Markdown.
```

Then rebuild and re-upload.

## Why Astro?

- **Header & Footer written once** — shared across all pages via components
- **Markdown blog posts** — clean authoring, no HTML boilerplate
- **Ships zero JS** — pure static HTML output, blazing fast
- **Tailwind compiled** — only the CSS classes you use, not the full 300KB CDN
