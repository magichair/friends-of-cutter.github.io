# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Community website for Friends of Cutter / Reinhart Park in Arlington, MA. Built with Jekyll using the Beautiful Jekyll theme (v6.0.1). Hosted on GitHub Pages at cutterreinhartpark.org.

## Development Commands

```bash
# Install dependencies
bundle install && bundle exec appraisal install

# Serve locally (http://localhost:4000)
bundle exec jekyll serve

# Build site
bundle exec jekyll build

# Build matching CI (with future-dated posts)
bundle exec appraisal jekyll build --future
```

## Architecture

- **Theme**: Beautiful Jekyll, installed as a gem via `beautiful-jekyll-theme.gemspec`. Layouts, includes, and assets are all in-repo (not gem-sourced), so edits take effect directly.
- **Config**: `_config.yml` has all site settings including navbar links, colors, analytics (gtag), and social links.
- **Posts**: Markdown files in `_posts/` using `YYYY-MM-DD-slug.md` naming. Front matter uses `layout: post` with optional `cover-img`, `thumbnail-img`, `share-img`, `subtitle`, and `author`.
- **Pages**: Top-level `.md`/`.html` files (`about.md`, `signup.html`, `index.html`, `tags.html`, `404.html`). Default layout is `page`.
- **Mailing list**: `signup.html` embeds a Mailchimp form.
- **CI**: `.github/workflows/ci.yml` builds with Ruby 3.3, uses `appraisal` to test against multiple Jekyll versions (3 and 4, see `gemfiles/`).

## Content Conventions

- Posts are authored by John Ibsen unless otherwise noted.
- Posts can be either Markdown (`.md`) or HTML (`.html`).
- The `--future` flag is needed during CI builds to include posts with future dates.
- Permalink format: `/:year-:month-:day-:title/`
