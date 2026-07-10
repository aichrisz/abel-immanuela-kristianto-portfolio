# Portfolio Conversion Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use $superpower-subagents (recommended) or $superpower-executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking via update_plan.

**Goal:** Make Abel's existing V2 portfolio communicate its value faster through sharper positioning, outcome-led project cards, compact credible case studies, and a useful prefilled inquiry flow without changing its established visual system or assets.

**Architecture:** Keep the current single-file React structure because the conversion pass changes one tightly connected content/state surface and does not justify a component migration. Extend the existing `COPY` and `PROJECTS` data in `src/App.tsx`, then render those fields through the current hero, proof, card, drawer, and contact components. Preserve current local image paths, state ownership, accessible drawer behavior, and static Vite deployment.

**Tech Stack:** React 19, TypeScript, Vite 8, Tailwind CSS 3, Phosphor Icons, existing local WebP assets.

---

## Scope and constraint resolution

The approved refinements take precedence over the older content wording in `docs/superpowers/specs/2026-07-08-abel-portfolio-v2-design.md`; the V2 note at the top of `CLAUDE.md` already establishes that newer portfolio content may replace the original clone copy. The following visual and technical constraints remain binding:

- body background stays `#050505`;
- hero stays fixed behind the scrolling page;
- hero heading stays exactly `42px` with the existing small red dot;
- non-hero/non-footer content stays within `max-w-[1440px]`;
- project cards remain sticky and exactly `800px` at `md` and above, `640px` at `sm`, and `520px` below `sm`;
- no glow, pulse, hover scale, new gradient, flashy color, backend, router, secret, environment variable, paid API, or animation library;
- deploy base remains `/abel-immanuela-kristianto-portfolio/`;
- no dependency, config, CSS, image, or image-generation changes are needed.

Asset truthfulness is explicit. The three public projects use existing local screenshots captured from their live sites. `kairo-kei-os.webp` and its mobile variant are an existing redacted private-concept preview produced by `scripts/capture-portfolio-assets.py`, not a live-site screenshot; label it as a private concept preview everywhere and do not imply that it is a public product screenshot. This is the only honest resolution that satisfies both “use existing assets only” and “do not invent proof.”

## File map

- Modify: `src/App.tsx:37-160` — localized positioning/CTA copy and truthful project narrative data.
- Modify: `src/App.tsx:279-410` — navbar, hero CTA hierarchy, and proof section.
- Modify: `src/App.tsx:413-596` — compact case-study drawer and outcome-led project cards.
- Modify: `src/App.tsx:698-818` — prefilled project inquiry and consistent contact CTA wording.
- Do not modify: `src/index.css`, `public/assets/portfolio/**`, `scripts/capture-portfolio-assets.py`, `scripts/mobile-qa.py`, `package.json`, lockfiles, Tailwind/Vite/TypeScript configs, or the approved V2 spec.

## Minimal test strategy

There is no project test framework, and this pass is dominated by copy hierarchy and browser behavior. Do not add Vitest, Testing Library, snapshots, or DOM-shape assertions. For each task, first record the current failing observable with a targeted source search or browser check, make the smallest change, then use `npm run lint`, `npm run build`, and semantic manual browser checks. Use the existing `scripts/mobile-qa.py` only as an optional geometry/image diagnostic; do not expand its hard-coded DOM-chain selectors into a pseudo-test suite.

Final browser coverage uses three widths: `1440×900` (desktop/800px cards), `700×900` (small/640px cards), and `390×844` (mobile/520px cards). Inspect via accessible names, visible text, computed styles, and link URLs rather than screenshots alone.

### Task 1: Define sharper localized positioning and truthful project narratives

**Files:**

- Modify: `src/App.tsx:37-160`
- Modify: `src/App.tsx:745,816` — migrate the two current generic `cta` consumers so the schema stays buildable.

- [ ] **Step 1: Record the current content failures before editing**

Run:

```bash
rg -n "CRAFTING CALM, USEFUL|10\+|highlights:|description:" src/App.tsx
```

Expected: the generic hero line, unsubstantiated `10+` proof, and list-like drawer fields are still present.

- [ ] **Step 2: Split generic CTA copy into explicit work and inquiry actions**

Replace `cta` in the `COPY` value type with `workCta`, `contactCta`, and `inquiryCta`. Keep `availability`, `about`, and `buildQuestion`. Use these exact values:

```tsx
en: {
  heading: 'CALM INTERFACES. MEMORABLE INTERACTIVE WORK.',
  positioning:
    'I shape calm interfaces, then build the memorable interactions that make the work stick.',
  availability: 'Available for freelance web projects',
  about:
    "I'm Abel Immanuela Kristianto, an Indonesian creative technologist based in Germany. I design and build clean digital experiences with a focus on clarity, usability, and emotional detail. My work sits between interface design, frontend prototypes, and small interactive products.",
  workCta: 'See selected work',
  contactCta: 'Start a project',
  inquiryCta: 'Start a project inquiry',
  buildQuestion: 'What do you want to build?',
},
de: {
  heading: 'RUHIGE INTERFACES. INTERAKTIVE ARBEIT, DIE IM GEDÄCHTNIS BLEIBT.',
  positioning:
    'Ich gestalte ruhige Interfaces und baue die interaktiven Details, die im Gedächtnis bleiben.',
  availability: 'Verfügbar für freie Webprojekte',
  about:
    'Ich bin Abel Immanuela Kristianto, ein indonesischer Creative Technologist in Deutschland. Ich gestalte und baue klare digitale Erlebnisse mit Fokus auf Klarheit, Usability und emotionale Details. Meine Arbeit liegt zwischen Interface-Design, Frontend-Prototypen und kleinen interaktiven Produkten.',
  workCta: 'Projekte ansehen',
  contactCta: 'Projekt starten',
  inquiryCta: 'Projekt anfragen',
  buildQuestion: 'Was willst du bauen?',
},
id: {
  heading: 'INTERFACE TENANG. KARYA INTERAKTIF YANG MEMBEKAS.',
  positioning:
    'Aku merancang interface yang tenang lalu membangun interaksi yang bikin karyanya membekas.',
  availability: 'Terbuka untuk proyek web freelance',
  about:
    'Aku Abel Immanuela Kristianto, creative technologist asal Indonesia yang sekarang tinggal di Jerman. Aku mendesain dan membangun pengalaman digital yang bersih, dengan fokus pada kejelasan, kegunaan, dan detail emosional. Karyaku ada di antara desain interface, prototipe frontend, dan produk interaktif kecil.',
  workCta: 'Lihat karya pilihan',
  contactCta: 'Mulai proyek',
  inquiryCta: 'Kirim detail proyek',
  buildQuestion: 'Mau bikin apa?',
},
```

- [ ] **Step 3: Migrate the two existing generic CTA consumers**

Change the FAQ CTA from `{copy.cta}` to `{copy.inquiryCta}` and the footer CTA from `{COPY[lang].cta}` to `{COPY[lang].contactCta}`. Task 5 will improve the mailto itself; this step exists so removing `cta` from the type does not leave a broken intermediate build.

- [ ] **Step 4: Extend project data with a compact narrative schema**

Add the new fields while temporarily retaining `description` and `highlights`, because the existing drawer still consumes those two legacy fields until Task 4:

```tsx
type Project = {
  title: string
  image: string
  mobileImage: string
  imageAlt: string
  badges: string[]
  cardOutcome: string
  summary: string
  challenge: string
  approach: string
  outcome: string
  role: string
  stack: string
  description: string
  highlights: string[]
  liveUrl?: string
  repoUrl?: string
}
```

Populate the four entries with the following exact narrative fields while retaining their current paths, badges, description, highlights, role, stack, and links:

```tsx
// Captcha Hell
imageAlt: 'Screenshot of the Captcha Hell browser game',
cardOutcome: 'Shipped as a playable browser game with escalating absurdity.',
summary: 'A satirical browser game about the familiar friction of proving you are human.',
challenge: 'CAPTCHA is universal friction, but the joke disappears if it only lands once.',
approach: 'Turn familiar verification patterns into increasingly unreasonable challenges while keeping every interaction legible.',
outcome: 'A deployed, replayable satire that shows interaction design, stateful frontend work, and a clear creative hook.',

// The Website That Slowly Dies
imageAlt: 'Screenshot of The Website That Slowly Dies experiment',
cardOutcome: 'Shipped as a time-based experiment where the interface becomes the story.',
summary: 'An experimental website that visibly decays the longer a visitor stays.',
challenge: 'Most websites reward attention; this concept needed time on page to feel increasingly unsettling.',
approach: 'Begin with a composed interface, then use timed deterioration of layout, type, and color as the central mechanic.',
outcome: 'A deployed web experiment where the interface carries the narrative without a tutorial or backend.',

// One Button Universe
imageAlt: 'Screenshot of the One Button Universe generative web toy',
cardOutcome: 'Shipped as a one-control generative toy built for instant play.',
summary: 'A generative web toy that turns one control into an evolving universe.',
challenge: 'Generative tools can become control-heavy before the first satisfying moment.',
approach: 'Reduce the interaction to one input and let every press add visible, cumulative change to the canvas.',
outcome: 'A lightweight deployed toy that is immediately understandable, repeatable, and easy to share.',

// Kairo / Kei OS
imageAlt: 'Redacted private concept preview for Kairo and Kei OS',
cardOutcome: 'Framed a minimum-first system for calmer daily planning.',
summary: 'A private life-dashboard concept for calm, shift-aware daily structure.',
challenge: 'Daily planning systems can punish low-energy days with more friction and guilt.',
approach: 'Design around minimum-first actions, limited focus lanes, shift-aware structure, and calm language.',
outcome: 'A coherent private product direction that makes a personal operating-system concept tangible without exposing private data.',
```

- [ ] **Step 5: Run static checks for schema consistency**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands pass; TypeScript reports no missing or stale `Project`/`COPY` fields.

### Task 2: Make selected work the unmistakable primary hero action

**Files:**

- Modify: `src/App.tsx:279-410`

- [ ] **Step 1: Verify the current hierarchy fails the approved direction**

At `1440×900`, load the page and confirm the navbar’s filled `Book a call` button is visually stronger than the hero’s outlined `Contact me` action and that no hero action says `See selected work`.

- [ ] **Step 2: Restore the approved identity label and demote the navbar contact control**

Keep `Navbar` stateless. Change its left label from the current handle to the V2-approved `ABEL`. Change the right control to `Contact`, keep `href="#contact"`, and use the same neutral outlined treatment as other secondary actions:

```tsx
<a
  href="#contact"
  className="rounded-full border border-white/60 px-5 py-2.5 text-sm font-medium text-white"
>
  Contact
</a>
```

- [ ] **Step 3: Render a primary work CTA and secondary contact CTA in the hero**

Replace the single hero contact link with this ordered group:

```tsx
<div className="flex shrink-0 flex-wrap items-center gap-3">
  <a
    href="#projects"
    className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
  >
    {copy.workCta}
  </a>
  <a
    href="#contact"
    className="rounded-full border border-white/60 px-6 py-3 text-sm font-medium text-white"
  >
    {copy.contactCta}
  </a>
</div>
```

Do not change the fixed hero wrapper, image/overlay, `text-[42px]`, language toggle, status pill, or red dot.

- [ ] **Step 4: Replace generic proof with evidence visible on this page**

Keep the `StatsSection` component and its two chamfered cards, but use:

```tsx
<h2 className="text-5xl font-bold text-white md:text-6xl">
  Selected work, built end to end.
</h2>
```

Change the left link label to `Explore the projects` and retain `href="#projects"`. Replace the cards with the exact proof below:

```tsx
<span className="text-6xl font-bold text-white">3</span>
<span className="mt-2 text-center text-neutral-400">Public interactive releases</span>

<span className="text-4xl font-bold text-white">End-to-end</span>
<span className="mt-2 text-center text-neutral-400">Interface concept to deployed frontend</span>
```

The count is grounded by the three live/repository pairs already in `PROJECTS`; Kairo remains separate as a private concept.

- [ ] **Step 5: Check language and layout behavior**

At `1440×900` and `390×844`, switch EN → DE → ID and confirm the heading, positioning, primary CTA, and secondary CTA change together; the default EN primary action reads exactly `See selected work`; and the longer German text neither clips nor covers the language/status controls.

- [ ] **Step 6: Commit the positioning slice**

```bash
git add src/App.tsx
git commit -m "feat: sharpen portfolio positioning"
```

### Task 3: Sell each project before opening the case study

**Files:**

- Modify: `src/App.tsx:550-596`

- [ ] **Step 1: Record the current card failure**

At each target width, scroll to `#projects` and confirm that a closed card exposes only badges and title—no outcome—and record computed heights of the first project button.

Expected before implementation: outcome absent; heights remain `800`, `640`, and `520` at widths `1440`, `700`, and `390` respectively.

- [ ] **Step 2: Preserve the existing local image source contract**

Keep `<picture>`, all eight current desktop/mobile project paths, lazy loading, decoding, `sizes`, `object-cover`, and sticky wrappers unchanged. Replace `alt={project.title}` with `alt={project.imageAlt}`. Do not run the asset-capture script or edit any file in `public/assets/portfolio/`.

- [ ] **Step 3: Turn the bottom title tab into a compact outcome panel**

Replace the current bottom tab with:

```tsx
<div className="absolute bottom-6 left-6 right-6 max-w-2xl rounded-lg bg-neutral-950/90 px-5 py-4 sm:px-6">
  <span className="block text-lg font-semibold text-white">
    {project.title}
  </span>
  <span className="mt-1 block max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base">
    {project.cardOutcome}
  </span>
</div>
```

Keep the card a single accessible button and retain `aria-label="Open … case study"`. Do not add a gradient, hover transform, scale, glow, or new color.

- [ ] **Step 4: Verify card sales content and geometry in the browser**

At all three widths, confirm each closed card visibly shows title and outcome, text remains inside the card without obscuring the central screenshot subject, all images have non-zero natural dimensions, and card computed heights are exactly `800/640/520`. Scroll through all four sticky transitions and confirm each next card covers the previous card without horizontal overflow.

### Task 4: Turn the drawer into a credible compact narrative

**Files:**

- Modify: `src/App.tsx:413-548`

- [ ] **Step 1: Verify the current narrative is a metadata list**

Open any card and confirm the drawer presents description, role, stack, and generic highlights but no explicit challenge → approach → outcome sequence.

- [ ] **Step 2: Render a compact narrative before metadata**

Keep the current dialog wrapper, backdrop button, focus trap, Escape handler, scroll lock, focus restoration, external links, and private-concept fallback. Replace the description/highlights rendering with:

```tsx
<p className="text-lg leading-relaxed text-neutral-200">{project.summary}</p>
<div className="grid gap-5">
  {[
    ['Challenge', project.challenge],
    ['Approach', project.approach],
    ['Outcome', project.outcome],
  ].map(([label, text]) => (
    <div key={label}>
      <h4 className="mb-2 text-sm uppercase tracking-wide text-neutral-500">
        {label}
      </h4>
      <p className="leading-relaxed text-neutral-200">{text}</p>
    </div>
  ))}
</div>
<div className="grid gap-5 border-t border-neutral-800 pt-6 sm:grid-cols-2">
  <div>
    <h4 className="mb-2 text-sm uppercase tracking-wide text-neutral-500">
      Role
    </h4>
    <p className="text-neutral-200">{project.role}</p>
  </div>
  <div>
    <h4 className="mb-2 text-sm uppercase tracking-wide text-neutral-500">
      Stack
    </h4>
    <p className="text-neutral-200">{project.stack}</p>
  </div>
</div>
```

Change the drawer width class from `max-w-lg` to `max-w-xl` so the narrative remains compact but the longer text has a readable line length. Preserve `w-full`, the full-height right edge placement, padding, overflow, border, and background.

- [ ] **Step 3: Remove the legacy drawer fields**

After the new rendering no longer consumes them, delete `description` and `highlights` from the `Project` type and from all four `PROJECTS` entries. Run `rg -n "description:|highlights:" src/App.tsx` and expect no matches.

- [ ] **Step 4: Verify all four narratives and links**

Open every card and confirm title, summary, Challenge, Approach, Outcome, Role, and Stack match that project. Public projects show both `Live site` and `Repository`; Kairo shows only `Private concept` and never claims a live link or public screenshot.

- [ ] **Step 5: Re-run drawer accessibility checks**

For the first and last cards: activate with keyboard, confirm the close button receives focus, Tab/Shift+Tab remain inside, Escape closes, backdrop click closes, body scrolling is restored, and focus returns to the invoking card. Confirm no console errors.

- [ ] **Step 6: Commit the project presentation slice**

```bash
git add src/App.tsx
git commit -m "feat: strengthen project case studies"
```

### Task 5: Make service chips prepare a useful project inquiry

**Files:**

- Modify: `src/App.tsx:31-31`
- Modify: `src/App.tsx:698-748`
- Verify: `src/App.tsx:812-818` — footer already uses `contactCta` after the Task 1 schema migration.

- [ ] **Step 1: Record the current inquiry failure**

Select `Interactive Web Game`, inspect the CTA URL, and confirm it contains only `subject=Portfolio%20inquiry%3A%20Interactive%20Web%20Game`, with no useful message body. Confirm the Task 1 wording already describes a project inquiry; the remaining failure is the empty email body and the fact that `#contact` still bypasses the selector by landing on the footer.

- [ ] **Step 2: Add one pure mailto builder near `CONTACT_EMAIL`**

```tsx
const buildInquiryMailto = (buildType: string) => {
  const subject = `Portfolio inquiry: ${buildType}`
  const body = [
    'Hi Abel,',
    '',
    `I am interested in discussing: ${buildType}.`,
    '',
    'Project / company:',
    'What I need:',
    'Ideal timing:',
    'Budget range (optional):',
    '',
    'Thanks,',
  ].join('\n')

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
```

Keep the existing default selection `Portfolio Website`; a valid inquiry is therefore ready before any chip interaction.

- [ ] **Step 3: Wire the selected chip to the inquiry link and make it the contact destination**

Replace the inline `mailto` construction with:

```tsx
const mailto = buildInquiryMailto(buildType)
```

Keep `aria-pressed` and the current selected/unselected neutral styles. Add `id="contact"` to the `FaqSection` `<section>` and remove `id="contact"` from `<footer>` so navbar/hero contact links land on the service selector. Confirm the Task 1 schema migration still renders `{copy.inquiryCta}` in the FAQ CTA and `{COPY[lang].contactCta}` in the footer, so no email link claims to book a call.

- [ ] **Step 4: Verify encoding and state changes without launching a mail client**

For `Portfolio Website`, `Interactive Web Game`, and `Something Weird`, inspect the CTA `href`, decode its `subject` and `body` query values, and confirm:

- the subject is exactly `Portfolio inquiry: <selected option>`;
- the body names the selected option and contains all four prompts once;
- changing language changes CTA wording but does not reset the selected service;
- the link contains no `undefined`, `[object Object]`, duplicated `?`, raw newline, or unescaped ampersand.

- [ ] **Step 5: Run static verification and commit the inquiry slice**

Run:

```bash
npm run lint
npm run build
```

Expected: both pass.

Then commit:

```bash
git add src/App.tsx
git commit -m "feat: prefill project inquiries"
```

### Task 6: Run final visual, interaction, and deployment-path verification

**Files:**

- Verify only: `src/App.tsx`
- Verify unchanged: `src/index.css`, `public/assets/portfolio/**`, `package.json`, `package-lock.json`, `vite.config.ts`

- [ ] **Step 1: Run the repository gates**

```bash
npm run lint
npm run build
npm audit --audit-level=moderate
```

Expected: all exit `0`. Do not change dependencies in this scope if the audit reports an upstream issue; report it rather than expanding the task.

- [ ] **Step 2: Verify the GitHub Pages base build**

```bash
GITHUB_PAGES=true npm run build
```

Expected: exit `0`; generated asset URLs retain `/abel-immanuela-kristianto-portfolio/` and all local portfolio images load without 404s when served under that base.

- [ ] **Step 3: Run the browser matrix**

Start the app with:

```bash
npm run dev -- --host 127.0.0.1 --port 5173
```

At `1440×900`, `700×900`, and `390×844`, verify:

- computed body background is `rgb(5, 5, 5)`;
- `#home` is fixed, hero heading is `42px`, and the content spacer/scrolling main preserve the fixed-hero effect;
- all non-hero/non-footer sections remain at or below `1440px`;
- EN primary hero CTA is `See selected work` and scrolls to `#projects`; contact is secondary;
- the language toggle updates the approved short copy without clipping;
- proof says `3 Public interactive releases` and `End-to-end`, with no `10+ Web Builds` or language-as-stat card;
- all four project cards use local `/assets/portfolio/` images, visibly show outcomes, remain sticky, and compute to `800/640/520px` at the matching widths;
- all four drawers pass content, link, keyboard, focus, backdrop, and scroll-restoration checks;
- navbar/hero contact links land on the service selector, and its chips update a correctly encoded subject and body;
- FAQ accordion and footer still work;
- there is no horizontal overflow, broken image, Vite error overlay, or console error;
- there is no glow, pulse, hover scale, new gradient, or flashy color.

- [ ] **Step 4: Review the final diff for scope**

```bash
git status --short
git diff --check
git diff -- src/App.tsx
```

Expected: implementation changes are limited to `src/App.tsx`; whitespace check is clean; assets, configs, dependencies, scripts, and the design spec are untouched.

## Acceptance criteria

- The default hero communicates “calm interfaces plus memorable interactive work” and makes `See selected work` the single strongest action; contact remains visible but secondary.
- The proof section contains only evidence supported on the page: three public interactive releases and an end-to-end interface-to-frontend practice.
- Before opening a drawer, every project card shows a concise outcome over its existing local visual; desktop, small, and mobile heights remain exactly `800px`, `640px`, and `520px`.
- The three public cards use their existing captured live-site screenshots. Kairo uses its existing redacted asset and is explicitly presented as a private concept preview, never as a public screenshot or release.
- Every drawer reads as a compact Challenge → Approach → Outcome story, retains truthful role/stack/link data, and preserves all existing accessible close/focus behavior.
- Selecting a service produces a mailto subject and useful editable body for that service; CTA wording accurately describes an email inquiry rather than a booking flow.
- `#050505`, fixed hero, `42px` hero heading, `1440px` content maximum, sticky project behavior, real/local imagery, deployment base, and the no-effects rules remain intact.
- No test framework, UI snapshot suite, asset, dependency, config, backend, route, or unrelated refactor is added.
- `npm run lint`, `npm run build`, the GitHub Pages base build, and `npm audit --audit-level=moderate` pass; the browser matrix has zero console errors and no broken assets.

## Next skill

Use `$superpower-subagents` for task-by-task implementation with review between slices, or `$superpower-executing-plans` for inline batch execution with checkpoints.
