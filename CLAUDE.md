# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production static export → /out
npm run lint     # ESLint via next lint
npm start        # Serve production build (after build)
```

There are no tests in this project.

## Architecture

This is a **single-page marketing landing site** for Ouivi, built with Next.js 14 configured for **static HTML export** (`output: 'export'`). The `/out` directory is the deploy artifact for Cloudflare Pages.

**Key constraint**: No server-side rendering, no API routes, no runtime JS dependencies. Everything must work as static HTML/CSS/JS.

### Component structure

All content lives in `app/page.tsx`, which assembles section components in order:

```
Navbar → Hero → Platforms → Features → HowItWorks → Results →
Testimonials → Pricing → Comparison → FAQ → CTAFinal → Footer
```

`ScrollReveal.tsx` wraps the page and uses IntersectionObserver to trigger `.reveal` class animations on scroll.

### Styling conventions

- **Global CSS variables** in `app/globals.css` define the design system (colors, spacing, shadows). Edit here for brand changes.
- **Component styles** are written as `<style>` JSX tags inside each component file — not CSS modules, not Tailwind.
- Utility classes (`.container`, `.section`, `.btn`, `.btn-primary`, `.badge`) are defined in `globals.css`.
- Single responsive breakpoint at `768px`.

### State

All state is local React hooks. No global state management:
- `Navbar.tsx`: scroll detection + mobile menu toggle
- `Pricing.tsx`: monthly/annual billing toggle
- `FAQ.tsx`: native `<details>` elements (no JS state)

### Content editing

All copy, pricing, testimonials, and feature text is hard-coded in the respective component files. To update:
- **Prices/plans**: `components/Pricing.tsx` — `plans` array
- **Colors**: `app/globals.css` — `:root` CSS variables (`--blue`, `--green`)
- **SEO metadata**: `app/layout.tsx`
- **HTTP headers/cache**: `public/_headers` (Cloudflare-specific)

### Deploy

Cloudflare Pages deploys automatically on push to `main`. Build command: `npm run build`, output: `out/`. Node 20+ required.
