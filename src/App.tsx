import { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  BehanceLogo,
  Circle,
  Command,
  Cube,
  EnvelopeSimple,
  Globe,
  Hexagon,
  Hourglass,
  Lightning,
  Moon,
  Plus,
  Sparkle,
  Square,
  StackSimple,
  Star,
  Sun,
  Triangle,
  TwitterLogo,
} from '@phosphor-icons/react'

const HERO_IMAGE =
  'https://cdn.sceneai.art/Hero%20section%20image/aae9fa10-5214-46ed-b9ef-39f2bed11ac1.avif'

const PORTRAIT_IMAGE =
  'https://cdn.sceneai.art/Image%20for%20any%20section/221a4527-acd0-49cd-bdcf-71f2819ce5b0.jpg'

const PROJECTS = [
  {
    title: 'Finance Dashboard',
    image:
      'https://cdn.sceneai.art/Image%20for%20any%20section/15e7a8dc-1a1e-4852-b773-0a301a2976b1.webp',
    badges: ['Web App', 'Dashboard'],
  },
  {
    title: 'SafeRide App',
    image:
      'https://cdn.sceneai.art/Image%20for%20any%20section/c7148f9a-b581-448b-a302-20d534028374.webp',
    badges: ['Mobile App', 'UI/UX'],
  },
  {
    title: 'E-Commerce Platform',
    image:
      'https://cdn.sceneai.art/Image%20for%20any%20section/b778c6ff-c598-49f1-9882-ce4ea3a6b729.webp',
    badges: ['Web Design', 'E-Commerce'],
  },
  {
    title: 'AI Virtual Assistant',
    image:
      'https://cdn.sceneai.art/Image%20for%20any%20section/f23ea357-810b-4d57-8a6f-42e14ee5e32c.webp',
    badges: ['AI', 'Product Design'],
  },
]

const BRANDS = [
  { name: 'Layers', Icon: StackSimple },
  { name: 'Spherule', Icon: Circle },
  { name: 'Cubix', Icon: Cube },
  { name: 'Command', Icon: Command },
  { name: 'Hourglass', Icon: Hourglass },
  { name: 'GlobalBank', Icon: Globe },
  { name: 'Triangular', Icon: Triangle },
  { name: 'Hexlab', Icon: Hexagon },
  { name: 'Squarestone', Icon: Square },
  { name: 'Sunrise', Icon: Sun },
  { name: 'Lunar', Icon: Moon },
  { name: 'Starline', Icon: Star },
]

const FAQS = [
  {
    question: 'What services do you offer?',
    answer:
      'I offer end-to-end product design services including UI/UX design, design systems, responsive web design, mobile app design, and prototyping.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Most projects take between 2 and 8 weeks depending on scope. A landing page can be done in days, while a full product design takes longer.',
  },
  {
    question: 'What is your design process like?',
    answer:
      'I start with research and discovery, move into wireframes and user flows, then create high-fidelity designs and interactive prototypes with regular feedback loops.',
  },
  {
    question: 'Do you work with development teams?',
    answer:
      'Yes. I collaborate closely with engineers, providing detailed specs, design tokens, and support throughout the build to ensure a faithful implementation.',
  },
  {
    question: 'How do you charge for projects?',
    answer:
      'I work on both fixed-price projects and monthly retainers. After understanding your requirements, I provide a clear proposal with no hidden costs.',
  },
  {
    question: 'Can you redesign an existing product?',
    answer:
      'Absolutely. I audit the current experience, identify friction points, and redesign it while preserving what already works for your users.',
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
        ABEL
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

function Hero() {
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
        <h1 className="max-w-3xl font-bold uppercase leading-tight text-white text-[42px]">
          EXPERIENCED UI/UX DESIGNER PASSIONATE ABOUT USER NEEDS
          <span className="ml-2 inline-block h-3 w-3 rounded-full bg-red-600" />
        </h1>
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
            <span className="text-6xl font-bold text-white">17</span>
            <span className="mt-2 text-neutral-400">Projects</span>
          </div>
          <div
            className="flex h-56 w-full flex-col items-center justify-center bg-neutral-800 sm:w-64"
            style={cardChamfer}
          >
            <span className="text-6xl font-bold text-white">15</span>
            <span className="mt-2 text-neutral-400">Clients</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
      {PROJECTS.map((project) => (
        <div key={project.title} className="sticky top-0 pb-8">
          <div className="relative h-[800px] w-full overflow-hidden rounded-2xl bg-neutral-900">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
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
          </div>
        </div>
      ))}
    </section>
  )
}

function AboutSection() {
  const socials = [
    { label: 'Contra', Icon: Globe },
    { label: 'Email', Icon: EnvelopeSimple },
    { label: 'Behance', Icon: BehanceLogo },
    { label: 'Twitter', Icon: TwitterLogo },
  ]

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
            className="h-auto w-full max-w-md rounded-2xl object-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-10">
          <p className="text-2xl leading-relaxed text-neutral-200">
            With over 3 years of experience in digital product design, I
            specialise in building scalable design systems and crafting
            responsive web experiences. I&apos;ve had the privilege of working
            with teams from early-stage startups to established tech giants.
          </p>
          <div className="flex flex-wrap gap-4">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#contact"
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

function BrandsSection() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-12">
      <div className="mb-12 text-left">
        <h2 className="font-bold uppercase text-white text-[36px]">
          TRUSTED BRANDS I&apos;VE PARTNERED WITH
        </h2>
        <p className="mt-4 text-neutral-400">
          I&apos;ve worked with amazing brands like...
        </p>
      </div>
      <div className="grid grid-cols-2 gap-px bg-neutral-800 sm:grid-cols-3 md:grid-cols-6">
        {BRANDS.map(({ name, Icon }) => (
          <div
            key={name}
            aria-label={name}
            title={name}
            className="flex aspect-square items-center justify-center bg-neutral-900"
          >
            <Icon size={42} className="text-neutral-300" />
          </div>
        ))}
      </div>
    </section>
  )
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            Book a call
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

function Footer() {
  const icons = [
    { label: 'Email', Icon: EnvelopeSimple },
    { label: 'Dribbble', Icon: Sparkle },
    { label: 'Twitter', Icon: TwitterLogo },
  ]

  return (
    <footer id="contact" className="w-full pt-24">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-8 px-6 pb-16 md:flex-row md:px-12">
        <div className="flex gap-4">
          {icons.map(({ label, Icon }) => (
            <a
              key={label}
              href="#contact"
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
          href="#contact"
          className="flex items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-medium text-white"
        >
          Book a call
          <ArrowUpRight size={16} weight="bold" />
        </a>
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
  return (
    <>
      <CustomCursor />
      <Hero />
      <div className="h-screen" aria-hidden="true" />
      <main className="relative z-10 bg-[#050505]">
        <StatsSection />
        <ProjectsSection />
        <AboutSection />
        <BrandsSection />
        <FaqSection />
        <Footer />
      </main>
    </>
  )
}

export default App
