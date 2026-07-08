# Abel Portfolio V2 Design

## Goal
Turn the current strict dark portfolio clone into a real Abel Immanuela Kristianto portfolio while preserving the existing visual system: solid `#050505` background, fixed hero behind scrolling content, max-width `1440px` for content sections, stacked project cards, minimal dark UI, no extra glow/pulse/neon embellishment.

## Direction
V2 should feel like Abel's portfolio, not a renamed template. The page should sell Abel as an Indonesian creative technologist in Germany who designs and builds clear, useful digital products, interactive web experiences, and practical prototypes.

## Required Updates

### 1. Identity and positioning
- Keep navbar logo `ABEL`.
- Replace generic hero headline with a stronger Abel positioning line:
  `DESIGNER AND FRONTEND BUILDER CRAFTING CALM, USEFUL DIGITAL PRODUCTS`
- Keep the hero heading font-size exactly `42px` and the small red dot.
- Add a small availability/status pill near hero content: `Available for freelance web projects`.
- Preserve the fixed hero background image and subtle dark overlay.

### 2. Language microtoggle
- Add a compact `EN / DE / ID` toggle in the hero or top of the content area.
- The toggle changes short positioning copy, about copy, and contact CTA copy.
- Do not make this a full app router or multi-page system; simple React state is enough.
- Languages:
  - EN: professional international portfolio language.
  - DE: concise, work-ready German.
  - ID: casual but still portfolio-ready Indonesian.

### 3. Stats section
Replace fake client/project framing with believable Abel-focused stats:
- `10+ Web Builds`
- `DE / EN / ID`
Keep the existing two dark chamfered cards and split layout.

### 4. Real projects
Replace generic project titles with Abel's real deployed/known projects:
1. `Captcha Hell` — Satirical interactive web game about proving you are human.
2. `The Website That Slowly Dies` — Experimental web experience where a clean site decays.
3. `One Button Universe` — Minimal web toy where one button creates a universe.
4. `Kairo / Kei OS` — Personal companion and life-dashboard concept.

Keep the four provided background image URLs and stacked sticky card behavior. Add truthful badges such as `Interactive Game`, `React`, `Web Toy`, `Concept`, `Life OS`.

### 5. Case-study drawer
Clicking a project card opens a dark minimal drawer/modal with:
- project title
- one-sentence description
- role
- stack
- highlights
- live link where available
- repo link where available
Use safe external links:
- Captcha Hell live: `https://aichrisz.github.io/captcha-hell/`, repo: `https://github.com/aichrisz/captcha-hell`
- The Website That Slowly Dies live: `https://aichrisz.github.io/website-that-slowly-dies/`, repo: `https://github.com/aichrisz/website-that-slowly-dies`
- One Button Universe live: `https://aichrisz.github.io/one-button-universe/`, repo: `https://github.com/aichrisz/one-button-universe`
- Kairo / Kei OS: no public repo/live link unless already present; mark as private concept.

Drawer requirements:
- accessible close button
- backdrop click closes
- Escape key closes
- no animation requirement beyond minimal state change
- no extra glow effects

### 6. About rewrite
Replace generic about text with Abel's identity:
`I'm Abel Immanuela Kristianto, an Indonesian creative technologist based in Germany. I design and build clean digital experiences with a focus on clarity, usability, and emotional detail. My work sits between interface design, frontend prototypes, and small interactive products.`

Provide DE and ID variants for the language toggle.

### 7. Link and contact buttons
Update social/link pills to real Abel links:
- GitHub: `https://github.com/aichrisz`
- Website: `https://aichrisz.com`
- LinkedIn: `https://www.linkedin.com/in/aceztea`
- Instagram: `https://www.instagram.com/aichrisz_`

Keep dark pill shapes with white outlines.

### 8. Tools / stack grid
Replace `TRUSTED BRANDS I'VE PARTNERED WITH` with:
`TOOLS AND SYSTEMS I BUILD WITH`
Subtext:
`A focused stack for fast prototypes, polished frontends, and practical AI-assisted workflows.`

Static 2-row / 6-column grid with simple icons and labels:
- React
- TypeScript
- Tailwind
- Vite
- GitHub
- Figma
- Claude / Fable
- Playwright
- Obsidian
- Notion
- GitHub Pages
- API Integrations

Keep the square dark boxes and 1px gaps.

### 9. Signature section
Add one new content section before FAQ with max-width `1440px`:
Heading: `I like building websites that behave slightly alive.`
Three minimal cards:
- `Interfaces that guide` — Clear UI that helps people know what to do next.
- `Prototypes that feel real` — Fast builds with enough polish to test and show.
- `Small web games with strong hooks` — Interactive concepts people remember.

This section should be minimal, dark, and aligned with the current style.

### 10. Contact flow
Enhance the FAQ/contact area with a small `What do you want to build?` selector:
- Portfolio Website
- Interactive Web Game
- Frontend Prototype
- Design Polish
- Something Weird

Selection updates the mailto CTA subject:
`mailto:hello@aichrisz.com?subject=Portfolio inquiry: <selected option>`
If no real email is confirmed, use `mailto:hello@aichrisz.com` as a placeholder but keep it easy to replace.

### 11. Footer and metadata
- Footer SVG remains `ABEL IMMANUELA KRISTIANTO`, edge-to-edge via SVG viewBox/textLength.
- Add a link hub row or small resume/contact row if it fits without clutter.
- Keep the page title `ABEL IMMANUELA KRISTIANTO`.

## Constraints
- Do not introduce backend, routing, paid APIs, secrets, or environment variables.
- Preserve deploy path `/abel-immanuela-kristianto-portfolio/`.
- Keep `npm run lint`, `npm run build`, and `npm audit --audit-level=moderate` passing.
- Browser QA must verify hero fixed, project cards sticky/800px, language toggle, drawer open/close, contact selector, FAQ accordion, footer text, and zero console errors.

## Acceptance Criteria
- The live portfolio no longer feels like a generic designer clone.
- Real Abel projects are visible and clickable.
- The page has a clear sellable positioning for Abel.
- The page remains clean, dark, minimal, and close to the original reference style.
- GitHub Pages deployment succeeds and the live URL is verified after push.
