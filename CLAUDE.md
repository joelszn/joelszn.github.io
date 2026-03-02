# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Joel Duran, an AI Product Manager. Built with Next.js 16, TypeScript, and Tailwind CSS v4. Deploys to GitHub Pages via static export at joelduran.com.

## Commands

```bash
npm run dev    # Local dev server (http://localhost:3000)
npm run build  # Static export to out/ directory
npx serve out  # Preview the production build locally
```

## Architecture

- **Static site** — `output: "export"` in next.config.ts, no server components with data fetching, no API routes
- **App Router** — all pages under `src/app/`, dynamic route `[slug]` for case studies
- **Content as data** — case study and press content lives in `src/data/` as TypeScript objects (no CMS, no markdown)
- **Tailwind v4** — uses `@import "tailwindcss"` with `@theme inline` in globals.css (no tailwind.config.ts)
- **Dark mode only** — hardcoded `className="dark"` on `<html>`, colors defined as CSS custom properties in globals.css

## Key Files

- `src/app/page.tsx` — homepage, assembles all sections
- `src/app/case-studies/[slug]/page.tsx` — case study detail pages with `generateStaticParams`
- `src/data/case-studies.ts` — all case study content (edit here to update case studies)
- `src/data/press.ts` — press mention data
- `src/app/globals.css` — color palette and theme variables
- `.github/workflows/deploy.yml` — GitHub Actions deployment to Pages
- `public/CNAME` — custom domain config

## Conventions

- Colors use CSS custom properties: `--background`, `--foreground`, `--muted`, `--surface`, `--border`, `--accent`
- Tailwind classes reference these as `text-foreground`, `bg-surface`, `border-border`, etc.
- Font is Inter, loaded via `next/font/google`
- `images: { unoptimized: true }` is required for static export — use `<img>` tags, not `next/image` optimization
- Content max-width is `max-w-4xl` (case study pages use `max-w-3xl`)
- Section padding follows `py-24 md:py-32`
