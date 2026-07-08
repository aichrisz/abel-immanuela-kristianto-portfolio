import { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  Atom,
  Browsers,
  Diamond,
  EnvelopeSimple,
  FigmaLogo,
  FileTs,
  GithubLogo,
  Globe,
  InstagramLogo,
  Lightning,
  LinkedinLogo,
  Note,
  Plugs,
  Plus,
  Sparkle,
  TestTube,
  Wind,
  X,
} from '@phosphor-icons/react'

const HERO_IMAGE =
  'https://cdn.sceneai.art/Hero%20section%20image/aae9fa10-5214-46ed-b9ef-39f2bed11ac1.avif'

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`

const PORTRAIT_IMAGE = assetPath('assets/portfolio/abel-aichrisz-avatar.webp')

const CONTACT_EMAIL = 'hello@aichrisz.com'

type Language = 'en' | 'de' | 'id'

const LANGUAGES: Language[] = ['en', 'de', 'id']

const COPY: Record<
  Language,
  {
    heading: string
    positioning: string
    availability: string
    about: string
    cta: string
    buildQuestion: string
  }
> = {
  en: {
    heading: 'DESIGNER AND FRONTEND BUILDER CRAFTING CALM, USEFUL DIGITAL PRODUCTS',
    positioning:
      'Designer and frontend builder crafting calm, useful digital products.',
    availability: 'Available for freelance web projects',
    about:
      "I'm Abel Immanuela Kristianto, an Indonesian creative technologist based in Germany. I design and build clean digital experiences with a focus on clarity, usability, and emotional detail. My work sits between interface design, frontend prototypes, and small interactive products.",
    cta: 'Book a call',
    buildQuestion: 'What do you want to build?',
  },
  de: {
    heading: 'DESIGNER UND FRONTEND-ENTWICKLER FÜR RUHIGE, NÜTZLICHE DIGITALE PRODUKTE',
    positioning:
      'Designer und Frontend-Entwickler für ruhige, nützliche digitale Produkte.',
    availability: 'Verfügbar für freie Webprojekte',
    about:
      'Ich bin Abel Immanuela Kristianto, ein indonesischer Creative Technologist in Deutschland. Ich gestalte und baue klare digitale Erlebnisse mit Fokus auf Klarheit, Usability und emotionale Details. Meine Arbeit liegt zwischen Interface-Design, Frontend-Prototypen und kleinen interaktiven Produkten.',
    cta: 'Termin buchen',
    buildQuestion: 'Was willst du bauen?',
  },
  id: {
    heading: 'DESAINER DAN FRONTEND BUILDER YANG MEMBUAT PRODUK DIGITAL YANG TENANG DAN BERGUNA',
    positioning:
      'Desainer dan frontend builder yang bikin produk digital yang tenang dan berguna.',
    availability: 'Terbuka untuk proyek web freelance',
    about:
      'Aku Abel Immanuela Kristianto, creative technologist asal Indonesia yang sekarang tinggal di Jerman. Aku mendesain dan membangun pengalaman digital yang bersih, dengan fokus pada kejelasan, kegunaan, dan detail emosional. Karyaku ada di antara desain interface, prototipe frontend, dan produk interaktif kecil.',
    cta: 'Ngobrol yuk',
    buildQuestion: 'Mau bikin apa?',
  },
}

type Project = {
  title: string
  image: string
  mobileImage: string
  badges: string[]
  description: string
  role: string
  stack: string
  highlights: string[]
  liveUrl?: string
  repoUrl?: string
}

const PROJECTS: Project[] = [
  {
    title: 'Captcha Hell',
    image: assetPath('assets/portfolio/captcha-hell.webp'),
    mobileImage: assetPath('assets/portfolio/captcha-hell-mobile.webp'),
    badges: ['Interactive Game', 'React'],
    description:
      'Satirical interactive web game about proving you are human.',
    role: 'Concept, design, and frontend build',
    stack: 'React, TypeScript, Tailwind CSS, GitHub Pages',
    highlights: [
      'Escalating absurd captcha challenges with a strong comedic hook',
      'Fully client-side game state, no backend required',
      'Deployed and playable in the browser',
    ],
    liveUrl: 'https://aichrisz.github.io/captcha-hell/',
    repoUrl: 'https://github.com/aichrisz/captcha-hell',
  },
  {
    title: 'The Website That Slowly Dies',
    image: assetPath('assets/portfolio/website-that-slowly-dies.webp'),
    mobileImage: assetPath('assets/portfolio/website-that-slowly-dies-mobile.webp'),
    badges: ['Web Toy', 'Concept'],
    description:
      'Experimental web experience where a clean site decays the longer you stay.',
    role: 'Concept, design, and frontend build',
    stack: 'React, TypeScript, CSS effects, GitHub Pages',
    highlights: [
      'Time-driven decay system that degrades layout, type, and color',
      'A calm interface that turns unsettling by design',
      'Built as a small self-contained experiment',
    ],
    liveUrl: 'https://aichrisz.github.io/website-that-slowly-dies/',
    repoUrl: 'https://github.com/aichrisz/website-that-slowly-dies',
  },
  {
    title: 'One Button Universe',
    image: assetPath('assets/portfolio/one-button-universe.webp'),
    mobileImage: assetPath('assets/portfolio/one-button-universe-mobile.webp'),
    badges: ['Web Toy', 'React'],
    description:
      'Minimal web toy where one button creates a universe.',
    role: 'Concept, design, and frontend build',
    stack: 'React, TypeScript, Canvas, GitHub Pages',
    highlights: [
      'One-input interaction model with generative output',
      'Minimal UI that keeps focus on the toy itself',
      'Small, fast, and shareable',
    ],
    liveUrl: 'https://aichrisz.github.io/one-button-universe/',
    repoUrl: 'https://github.com/aichrisz/one-button-universe',
  },
  {
    title: 'Kairo / Kei OS',
    image: assetPath('assets/portfolio/kairo-kei-os.webp'),
    mobileImage: assetPath('assets/portfolio/kairo-kei-os-mobile.webp'),
    badges: ['Concept', 'Life OS'],
    description:
      'Personal companion and life-dashboard concept for calm daily structure.',
    role: 'Product concept, system design, and prototyping',
    stack: 'React, TypeScript, design systems, AI-assisted workflows',
    highlights: [
      'Calm companion OS concept with a no-shame, minimum-first approach',
      'Mobile-first, shift-aware daily structure',
      'Private concept — no public repo or live link yet',
    ],
  },
]

const TOOLS = [
  { name: 'React', Icon: Atom },
  { name: 'TypeScript', Icon: FileTs },
  { name: 'Tailwind', Icon: Wind },
  { name: 'Vite', Icon: Lightning },
  { name: 'GitHub', Icon: GithubLogo },
  { name: 'Figma', Icon: FigmaLogo },
  { name: 'Claude / Fable', Icon: Sparkle },
  { name: 'Playwright', Icon: TestTube },
  { name: 'Obsidian', Icon: Diamond },
  { name: 'Notion', Icon: Note },
  { name: 'GitHub Pages', Icon: Browsers },
  { name: 'API Integrations', Icon: Plugs },
]

const SIGNATURE_CARDS = [
  {
    title: 'Interfaces that guide',
    text: 'Clear UI that helps people know what to do next.',
  },
  {
    title: 'Prototypes that feel real',
    text: 'Fast builds with enough polish to test and show.',
  },
  {
    title: 'Small web games with strong hooks',
    text: 'Interactive concepts people remember.',
  },
]

const BUILD_OPTIONS = [
  'Portfolio Website',
  'Interactive Web Game',
  'Frontend Prototype',
  'Design Polish',
  'Something Weird',
]

const SOCIAL_LINKS = [
  { label: 'GitHub', Icon: GithubLogo, href: 'https://github.com/aichrisz' },
  { label: 'Website', Icon: Globe, href: 'https://aichrisz.com' },
  {
    label: 'LinkedIn',
    Icon: LinkedinLogo,
    href: 'https://www.linkedin.com/in/aceztea',
  },
  {
    label: 'Instagram',
    Icon: InstagramLogo,
    href: 'https://www.instagram.com/aichrisz_',
  },
]

const FAQS = [
  {
    question: 'What services do you offer?',
    answer:
      'I design and build portfolio websites, interactive web games, frontend prototypes, and small digital products — from first concept to deployed build.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Most projects take between 2 and 8 weeks depending on scope. A small web toy or landing page can be done in days, while a full product build takes longer.',
  },
  {
    question: 'What is your process like?',
    answer:
      'I start with a short discovery, sketch the concept, then move quickly into a working prototype. Real builds early, regular feedback loops throughout.',
  },
  {
    question: 'Do you both design and build?',
    answer:
      'Yes. I work across interface design and frontend implementation, so what you see in the design is what ships in the browser.',
  },
  {
    question: 'How do you charge for projects?',
    answer:
      'I work on both fixed-price projects and retainers. After understanding your requirements, I provide a clear proposal with no hidden costs.',
  },
  {
    question: 'Can you improve an existing site?',
    answer:
      'Absolutely. I audit the current experience, identify friction points, and polish or rebuild it while preserving what already works.',
  },
]

const rightChamfer = {
  clipPath:
    'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)',
}

const cardChamfer = {
  clipPath:
    'polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)',
}

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`
      }
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-5 w-5 rounded-full bg-white mix-blend-difference"
    />
  )
}

function Navbar() {
  return (
    <nav className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-6 md:px-12">
      <a href="#home" className="text-xl font-bold tracking-wide text-white">
        aichrisz
      </a>
      <div className="hidden items-center gap-8 text-sm text-white md:flex">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact me</a>
      </div>
      <a
        href="#contact"
        className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black"
      >
        Book a call
      </a>
    </nav>
  )
}

function LanguageToggle({
  lang,
  onChange,
}: {
  lang: Language
  onChange: (lang: Language) => void
}) {
  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center gap-1 rounded-full border border-white/40 p-1"
    >
      {LANGUAGES.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => onChange(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-3 py-1 text-xs font-medium uppercase ${
            lang === code ? 'bg-white text-black' : 'text-white'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  )
}

function Hero({
  lang,
  onLangChange,
}: {
  lang: Language
  onLangChange: (lang: Language) => void
}) {
  const copy = COPY[lang]

  return (
    <section id="home" className="fixed inset-0 h-screen w-full">
      <img
        src={HERO_IMAGE}
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <Navbar />
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-start justify-between gap-8 px-6 pb-10 md:flex-row md:items-end md:px-12">
        <div className="flex max-w-3xl flex-col items-start gap-5">
          <div className="flex flex-wrap items-center gap-4">
            <span className="rounded-full border border-white/40 px-4 py-1.5 text-xs text-white">
              {copy.availability}
            </span>
            <LanguageToggle lang={lang} onChange={onLangChange} />
          </div>
          <h1 className="font-bold uppercase leading-tight text-white text-[42px]">
            {copy.heading}
            <span className="ml-2 inline-block h-3 w-3 rounded-full bg-red-600" />
          </h1>
          <p className="text-sm text-neutral-300">{copy.positioning}</p>
        </div>
        <a
          href="#contact"
          className="shrink-0 rounded-full border border-white px-6 py-3 text-sm font-medium text-white"
        >
          Contact me
        </a>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-12">
      <div className="flex flex-col justify-between gap-12 md:flex-row">
        <div className="flex flex-col items-start gap-6">
          <span className="rounded-full border border-neutral-600 px-4 py-1.5 text-sm text-neutral-300">
            Selected Work
          </span>
          <h2 className="text-5xl font-bold text-white md:text-6xl">
            My best work
          </h2>
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-full bg-neutral-800 px-6 py-3 text-sm font-medium text-white"
          >
            Check all projects -&gt;
          </a>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row">
          <div
            className="flex h-56 w-full flex-col items-center justify-center bg-neutral-800 sm:w-64"
            style={cardChamfer}
          >
            <span className="text-6xl font-bold text-white">10+</span>
            <span className="mt-2 text-neutral-400">Web Builds</span>
          </div>
          <div
            className="flex h-56 w-full flex-col items-center justify-center bg-neutral-800 sm:w-64"
            style={cardChamfer}
          >
            <span className="text-4xl font-bold text-white">DE / EN / ID</span>
            <span className="mt-2 text-neutral-400">Working Languages</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectDrawer({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab' || !dialogRef.current) return
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement
      if (e.shiftKey) {
        if (active === first || !dialogRef.current.contains(active)) {
          e.preventDefault()
          last.focus()
        }
      } else if (active === last || !dialogRef.current.contains(active)) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus()
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[100]">
      <button
        type="button"
        aria-label="Close case study"
        onClick={onClose}
        tabIndex={-1}
        className="absolute inset-0 h-full w-full bg-black/70"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="absolute bottom-0 right-0 top-0 flex w-full max-w-lg flex-col gap-8 overflow-y-auto border-l border-neutral-800 bg-[#0a0a0a] p-8 md:p-10"
      >
        <div className="flex items-start justify-between gap-4">
          <h3
            id="case-study-title"
            className="text-3xl font-bold text-white"
          >
            {project.title}
          </h3>
          <button
            ref={closeRef}
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-neutral-600 text-white"
          >
            <X size={18} />
          </button>
        </div>
        <p className="text-lg text-neutral-200">{project.description}</p>
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
        <div>
          <h4 className="mb-2 text-sm uppercase tracking-wide text-neutral-500">
            Highlights
          </h4>
          <ul className="flex list-disc flex-col gap-2 pl-5 text-neutral-200">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
        <div className="mt-auto flex flex-wrap gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
            >
              Live site
              <ArrowUpRight size={16} weight="bold" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-medium text-white"
            >
              Repository
              <ArrowUpRight size={16} weight="bold" />
            </a>
          )}
          {!project.liveUrl && !project.repoUrl && (
            <span className="rounded-full border border-neutral-600 px-6 py-3 text-sm text-neutral-300">
              Private concept
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function ProjectsSection({
  onOpenProject,
}: {
  onOpenProject: (project: Project) => void
}) {
  return (
    <section id="projects" className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
      {PROJECTS.map((project) => (
        <div key={project.title} className="sticky top-0 pb-8">
          <button
            type="button"
            onClick={() => onOpenProject(project)}
            aria-label={`Open ${project.title} case study`}
            className="relative block h-[520px] w-full overflow-hidden rounded-2xl bg-neutral-900 text-left sm:h-[640px] md:h-[800px]"
          >
            <picture>
              <source media="(max-width: 767px)" srcSet={project.mobileImage} />
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 767px) calc(100vw - 48px), min(100vw - 96px, 1440px)"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </picture>
            <div className="absolute left-6 top-6 flex gap-3">
              {project.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-black/60 px-4 py-1.5 text-xs font-medium text-white"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="absolute bottom-6 left-6 rounded-lg bg-neutral-900/90 px-6 py-4">
              <span className="text-lg font-semibold text-white">
                {project.title}
              </span>
            </div>
          </button>
        </div>
      ))}
    </section>
  )
}

function AboutSection({ lang }: { lang: Language }) {
  return (
    <section id="about" className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-12">
      <div className="mb-12 flex flex-col items-start gap-6">
        <span className="flex items-center gap-2 rounded-full border border-neutral-600 px-4 py-1.5 text-sm text-neutral-300">
          <Lightning size={16} weight="fill" />
          About me
        </span>
        <h2 className="text-5xl font-bold text-white md:text-6xl">Who I am</h2>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <img
            src={PORTRAIT_IMAGE}
            alt="Portrait of Abel Immanuela Kristianto"
            className="aspect-square h-auto w-full max-w-md rounded-2xl object-cover object-center sm:aspect-[4/5]"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-10">
          <p className="text-2xl leading-relaxed text-neutral-200">
            {COPY[lang].about}
          </p>
          <div className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white bg-neutral-900 px-5 py-2.5 text-sm text-white"
              >
                <Icon size={18} />
                {label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-neutral-800 px-6 py-3 text-sm font-medium text-white"
          >
            Know more
            <ArrowUpRight size={16} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  )
}

function ToolsSection() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-12">
      <div className="mb-12 text-left">
        <h2 className="font-bold uppercase text-white text-[36px]">
          TOOLS AND SYSTEMS I BUILD WITH
        </h2>
        <p className="mt-4 text-neutral-400">
          A focused stack for fast prototypes, polished frontends, and
          practical AI-assisted workflows.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-px bg-neutral-800 sm:grid-cols-3 md:grid-cols-6">
        {TOOLS.map(({ name, Icon }) => (
          <div
            key={name}
            className="flex aspect-square flex-col items-center justify-center gap-3 bg-neutral-900"
          >
            <Icon size={42} className="text-neutral-300" />
            <span className="px-2 text-center text-sm text-neutral-400">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

function SignatureSection() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-12">
      <h2 className="mb-12 max-w-3xl text-5xl font-bold text-white">
        I like building websites that behave slightly alive.
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {SIGNATURE_CARDS.map(({ title, text }) => (
          <div
            key={title}
            className="flex flex-col gap-4 bg-neutral-900 p-8"
            style={cardChamfer}
          >
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-neutral-400">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function FaqSection({ lang }: { lang: Language }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [buildType, setBuildType] = useState(BUILD_OPTIONS[0])
  const copy = COPY[lang]
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Portfolio inquiry: ${buildType}`,
  )}`

  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-12">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <span className="flex items-center gap-2 rounded-full border border-neutral-600 px-4 py-1.5 text-sm text-neutral-300">
            <span className="flex h-4 w-4 items-center justify-center rounded-[3px] border border-neutral-400 text-[10px] leading-none">
              ?
            </span>
            FAQ&apos;S
          </span>
          <h2 className="max-w-md text-5xl font-bold text-white">
            Have a project in mind? Let&apos;s make it real.
          </h2>
          <div className="flex flex-col items-start gap-4">
            <span className="text-sm text-neutral-400">
              {copy.buildQuestion}
            </span>
            <div className="flex max-w-md flex-wrap gap-3">
              {BUILD_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setBuildType(option)}
                  aria-pressed={buildType === option}
                  className={`rounded-full border px-4 py-2 text-sm ${
                    buildType === option
                      ? 'border-white bg-white text-black'
                      : 'border-neutral-600 text-neutral-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <a
            href={mailto}
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            {copy.cta}
            <ArrowUpRight size={16} weight="bold" />
          </a>
        </div>
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => (
            <div key={faq.question} className="bg-neutral-800" style={rightChamfer}>
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-white">{faq.question}</span>
                <Plus
                  size={20}
                  className={`shrink-0 text-white transition-transform ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="px-6 pb-5 text-neutral-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer({ lang }: { lang: Language }) {
  const icons = [
    { label: 'Email', Icon: EnvelopeSimple, href: `mailto:${CONTACT_EMAIL}` },
    { label: 'GitHub', Icon: GithubLogo, href: 'https://github.com/aichrisz' },
    {
      label: 'Instagram',
      Icon: InstagramLogo,
      href: 'https://www.instagram.com/aichrisz_',
    },
  ]
  const external = (href: string) =>
    href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {}

  return (
    <footer id="contact" className="w-full pt-24">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-8 px-6 pb-16 md:flex-row md:px-12">
        <div className="flex gap-4">
          {icons.map(({ label, Icon, href }) => (
            <a
              key={label}
              href={href}
              {...external(href)}
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center border border-neutral-600 text-white"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-8 text-sm text-neutral-300">
          <a href="#home">Home</a>
          <a href="#projects">Work</a>
          <a href="#about">About</a>
        </div>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="flex items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-medium text-white"
        >
          {COPY[lang].cta}
          <ArrowUpRight size={16} weight="bold" />
        </a>
      </div>
      <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 pb-12 text-sm text-neutral-500 md:px-12">
        {SOCIAL_LINKS.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer">
            {label}
          </a>
        ))}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </div>
      <svg
        viewBox="0 0 1000 150"
        className="block w-full"
        role="img"
        aria-label="ABEL IMMANUELA KRISTIANTO"
      >
        <text
          x="500"
          y="120"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="112"
          fontWeight="700"
          fontFamily="Inter, system-ui, sans-serif"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
        >
          ABEL IMMANUELA KRISTIANTO
        </text>
      </svg>
    </footer>
  )
}

function App() {
  const [lang, setLang] = useState<Language>('en')
  const [openProject, setOpenProject] = useState<Project | null>(null)

  return (
    <>
      <CustomCursor />
      <Hero lang={lang} onLangChange={setLang} />
      <div className="h-screen" aria-hidden="true" />
      <main className="relative z-10 bg-[#050505]">
        <StatsSection />
        <ProjectsSection onOpenProject={setOpenProject} />
        <AboutSection lang={lang} />
        <ToolsSection />
        <SignatureSection />
        <FaqSection lang={lang} />
        <Footer lang={lang} />
      </main>
      {openProject && (
        <ProjectDrawer
          project={openProject}
          onClose={() => setOpenProject(null)}
        />
      )}
    </>
  )
}

export default App
