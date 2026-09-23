# Architecture

## Stack

- Next.js 16, App Router, TypeScript
- Tailwind CSS v4
- Fonts: Silkscreen (display/headlines), JetBrains Mono (body) — loaded via `next/font/google` in `src/app/layout.tsx`

## Routing

| Route | File | Purpose |
|---|---|---|
| `/` | `src/app/page.tsx` | Landing page — hero, case, turn, tools, "what would you miss" picker, cost |
| `/mission` | `src/app/mission/page.tsx` | Mission and roadmap |
| `/start` | `src/app/start/page.tsx` | Module picker / entry point |
| `/leave`, `/land`, `/live` | `src/app/[module]/page.tsx` | Module detail pages, driven by a `COPY` map keyed on slug |
| `/tutorials` | `src/app/tutorials/page.tsx` | Tutorial index |
| `/tutorials/[slug]` | `src/app/tutorials/[slug]/page.tsx` | Individual tutorial, sourced from `src/lib/tutorials.ts` |

`[module]/page.tsx` uses `generateStaticParams()` to statically render `leave`, `land`, and `live` from the `MODULES` list in `src/components/module-card.tsx`; unknown slugs 404.

## Components (`src/components/`)

- `site-header.tsx`, `site-footer.tsx` — global chrome, included once in `layout.tsx`
- `module-card.tsx` — exports `MODULES` (the source of truth for the three modules: Leave, Land, Live) and the card UI used to link to them
- `kicker.tsx` — small label/eyebrow text component
- `telemetry-panel.tsx` — terminal-style status panel used on the landing page
- `miss-picker.tsx` — the "what would you miss" interactive picker on `/`

## Data

- `src/lib/tutorials.ts` — static list of tutorials, each tagged with a `module` (`leave` | `land` | `live`) so `/tutorials` and each module page can filter to relevant tutorials.
- Per-module copy (subhead + steps) lives inline in `src/app/[module]/page.tsx` as the `COPY` map — not in `tutorials.ts` or a CMS. Update it directly when module messaging changes.

## Design language

Sourced from `../Your Alone.pdf` in the repo root's parent directory: paper-white backgrounds, a dot-matrix display font for headlines, monospace body/labels, terminal-style telemetry panels, and a single red-orange accent against near-black sections. Global tokens/colors live in `src/app/globals.css`.

## Build & deploy

```bash
npm install
npm run dev     # local dev server
npm run build   # production build
npm start       # serve the production build
npm run lint    # eslint
```

No CI/deploy pipeline is configured in this repo yet — see `docs/deployment.md` (TODO) once one exists.
