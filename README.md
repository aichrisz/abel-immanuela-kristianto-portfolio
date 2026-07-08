# Abel Immanuela Kristianto Portfolio

A strict dark single-page React + Tailwind portfolio for Abel Immanuela Kristianto — Indonesian creative technologist in Germany. V2 spec: `docs/superpowers/specs/2026-07-08-abel-portfolio-v2-design.md`.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Phosphor Icons

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Notes

- Solid page background: `#050505`
- Fixed hero sits behind scrolling content
- Non-hero, non-footer sections use `max-w-[1440px]`
- Project cards are sticky stacked cards with `800px` fixed height
- Custom cursor dot uses `mix-blend-difference`

## V2 Features

- Language microtoggle `EN / DE / ID` (positioning, about, and contact CTA copy)
- Real projects: Captcha Hell, The Website That Slowly Dies, One Button Universe, Kairo / Kei OS
- Accessible case-study drawer per project (Escape / backdrop / close button)
- Tools & systems grid (2 rows × 6 columns)
- Signature section with three minimal cards
- Contact build-type selector updating the `mailto:hello@aichrisz.com` subject
