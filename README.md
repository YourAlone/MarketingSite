<img src="public/brand/logo-mark.svg" width="48" height="48" alt="" align="left" />

# YOURALONE — marketing site

<br clear="left"/>

Marketing site for **YOURALONE**, a non-profit that helps people bring their
data home: export it intact from the platforms that hold it (**Leave**), run
it on hardware they own (**Land**), and use it day to day without losing what
made the platforms convenient (**Live**).

Design language is sourced from `../Your Alone.pdf`: paper-white backgrounds,
a dot-matrix display font for headlines, monospace body/labels, terminal-style
telemetry panels, and a single red-orange accent against near-black sections.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Google Fonts: Silkscreen (display), JetBrains Mono (body)

## Structure

- `/` — landing page (hero, case, turn, tools, "what would you miss" picker, cost)
- `/leave`, `/land`, `/live` — module detail pages (`src/app/[module]/page.tsx`)
- `/start` — module picker / entry point
- `src/components/` — shared pieces (header, footer, module cards, telemetry panel, miss-picker)
- `public/brand/` — the YOURALONE mark (`logo-mark.svg`) and matching module icons; the same
  files are reused in [Leave](https://github.com/YourAlone/Leave)'s webUI, exported zip, and README

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```
