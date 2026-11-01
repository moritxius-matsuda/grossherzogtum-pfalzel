import Link from "next/link"
import { ArrowRight, ArrowUpRight, Building2, Flag, MapPin, ShieldCheck } from "lucide-react"
import { Crest } from "@/components/site/crest"
import { Plate } from "@/components/site/plate"
import { NationalDay } from "@/components/site/national-day"
import { SectionHeading } from "@/components/site/section-heading"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { facts, faq, GOVID_URL, notices } from "@/lib/site-data"

export default function Home() {
  return (
    <>
      <Hero />
      <Facts />
      <Services />
      <NoticesAndCountdown />
      <GrandDuke />
      <Faq />
    </>
  )
}

function Hero() {
  return (
    <section className="paper-grain relative overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 md:pt-20 lg:grid-cols-[1.25fr_1fr] lg:px-8 lg:pb-28">
        <div>
          <p className="eyebrow animate-in fade-in slide-in-from-bottom-2 duration-700">
            Offizielles Staatsportal · Souverän seit 2026
          </p>
          <h1 className="mt-5 font-serif text-[clamp(2.9rem,8vw,6.2rem)] font-medium leading-[0.95] tracking-[-0.03em] text-balance animate-in fade-in slide-in-from-bottom-3 duration-700">
            Der Glanz von <em className="font-normal italic text-crimson">Pfalzel</em>.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft animate-in fade-in slide-in-from-bottom-4 duration-1000 sm:text-xl">
            Geschichte und Zukunft des Großherzogtums Pfalzel – eine Mikronation mit Herz und Seele, die Tradition
            und moderne Souveränität verbindet.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/staat"
              className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-ink px-7 font-semibold text-paper transition-colors hover:bg-ink/85"
            >
              Den Staat kennenlernen <ArrowRight className="size-4" />
            </Link>
            <a
              href={GOVID_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-ink/25 px-7 font-semibold transition-colors hover:bg-card"
            >
              <ShieldCheck className="size-4" /> Mit GovID anmelden
            </a>
          </div>
        </div>

        <Seal />
      </div>
    </section>
  )
}

/** Staatssiegel: Wappen im goldenen Ring mit umlaufender Inschrift. */
function Seal() {
  const text = "GROSSHERZOGTUM PFALZEL · GRAND DUCHY OF PFALZEL · GRAND-DUCHÉ DE PFALZEL · "
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem]" aria-hidden>
      <div className="absolute inset-0 rounded-full bg-gold shadow-[0_40px_80px_-40px_rgba(138,97,0,0.7)]" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 size-full animate-[spin_60s_linear_infinite] motion-reduce:animate-none">
        <defs>
          <path id="seal-circle" d="M200,200 m-165,0 a165,165 0 1,1 330,0 a165,165 0 1,1 -330,0" />
        </defs>
        <text className="fill-[#17130e] font-sans text-[15px] font-semibold tracking-[0.2em]">
          <textPath href="#seal-circle">{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-[16%] flex items-center justify-center rounded-full border-2 border-[#17130e]/80 bg-[#fbf8f1]">
        <div className="absolute inset-2 rounded-full border border-dashed border-[#17130e]/30" />
        <Crest className="h-[55%] w-auto drop-shadow-[0_10px_14px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-[#17130e] px-4 py-1.5 font-serif text-sm italic text-[#f6f1e6]">
        9. Mai 2026
      </div>
    </div>
  )
}

function Facts() {
  return (
    <section aria-label="Auf einen Blick" className="border-b border-line">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-line md:grid-cols-3 xl:grid-cols-6">
        {facts.map((f) => (
          <div key={f.label} className="bg-paper px-4 py-6 sm:px-6">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft">{f.label}</dt>
            <dd className="mt-2 font-serif text-lg leading-snug tracking-tight sm:text-xl">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function Services() {
  const tiles = [
    { href: "/regierung", icon: Building2, title: "Behördenverzeichnis", text: "3 Staatsorgane und 14 Ministerien – durchsuchbar." },
    { href: "/regionen", icon: MapPin, title: "Regionen", text: "Acht Gebiete von der Hauptstadt bis zu den Inseln." },
    { href: "/staat#flagge", icon: Flag, title: "Flagge & Wappen", text: "Was Gold, Rot, Schwarz und die vier Sterne bedeuten." },
  ]
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading eyebrow="Schnellzugriff" title="Was möchten Sie heute erledigen?" />
      <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
        <Link
          href="/kennzeichen#konfigurator"
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#17130e] p-7 text-[#f1eadb] lg:col-span-2 lg:row-span-2 lg:p-10"
        >
          <div>
            <p className="eyebrow !text-gold">Neu · Verkehr</p>
            <h3 className="mt-3 max-w-md font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              Kennzeichen-Konfigurator
            </h3>
            <p className="mt-3 max-w-md text-[#f1eadb]/70">
              Stellen Sie ein Pfalzeler Kennzeichen zusammen und prüfen Sie sofort, ob die Kombination zulässig ist.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
            <Plate region="P" letters="CM" number="74" className="text-[2.4rem] transition-transform duration-500 group-hover:-rotate-2 sm:text-[3.4rem]" />
            <span className="inline-flex items-center gap-2 font-semibold text-gold">
              Jetzt ausprobieren <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
        {tiles.slice(0, 2).map((t) => (
          <ServiceTile key={t.href} {...t} />
        ))}
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ServiceTile {...tiles[2]} />
        <a
          href={GOVID_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-5 rounded-2xl border border-gold/60 bg-gold/15 p-6 transition-colors hover:bg-gold/25"
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gold text-[#17130e]">
            <ShieldCheck className="size-5" />
          </span>
          <span>
            <span className="flex items-center gap-1.5 font-serif text-xl font-medium">
              GovID <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
            <span className="mt-1 block text-sm text-ink-soft">Ihr digitaler Zugang zu staatlichen Diensten.</span>
          </span>
        </a>
      </div>
    </section>
  )
}

function ServiceTile({ href, icon: Icon, title, text }: { href: string; icon: typeof Flag; title: string; text: string }) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-5 rounded-2xl border border-line bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-paper-2 text-ink">
        <Icon className="size-5" />
      </span>
      <span>
        <span className="flex items-center gap-1.5 font-serif text-xl font-medium">
          {title}
          <ArrowRight className="size-4 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
        </span>
        <span className="mt-1 block text-sm text-ink-soft">{text}</span>
      </span>
    </Link>
  )
}

function NoticesAndCountdown() {
  return (
    <section className="border-y border-line bg-paper-2/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:px-8">
        <div>
          <SectionHeading eyebrow="Amtliche Bekanntmachungen" title="Aktuelles aus dem Großherzogtum" />
          <ol className="mt-8 divide-y divide-line border-y border-line">
            {notices.map((n) => (
              <li key={n.title}>
                <Link href={n.href} className="group grid gap-2 py-5 sm:grid-cols-[9rem_1fr_auto] sm:items-baseline sm:gap-6">
                  <time className="text-sm tabular-nums text-ink-soft">{n.date}</time>
                  <span>
                    <span className="mr-2 rounded-full border border-line px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-gold-ink">
                      {n.tag}
                    </span>
                    <span className="font-serif text-xl font-medium group-hover:underline">{n.title}</span>
                    <span className="mt-1 block text-sm text-ink-soft">{n.text}</span>
                  </span>
                  <ArrowRight className="hidden size-4 text-ink-soft transition-transform group-hover:translate-x-1 sm:block" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
        <div className="lg:pt-16">
          <NationalDay />
        </div>
      </div>
    </section>
  )
}

function GrandDuke() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <p className="eyebrow">Staatsoberhaupt</p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            Seine Exzellenz Großherzog Lukas Meier von Pfalzel
          </h2>
          <p className="mt-6 leading-relaxed text-ink-soft">
            Der Großherzog verbindet die Werte von Ehre und Respekt mit einer modernen Vision für die Zukunft. Er
            engagiert sich für die Erhaltung der historischen Kulturlandschaft und die Förderung der künstlerischen und
            wissenschaftlichen Gemeinschaft.
          </p>
          <Link href="/regierung" className="mt-6 inline-flex items-center gap-2 font-semibold text-gold-ink hover:underline">
            Zum Staatsaufbau <ArrowRight className="size-4" />
          </Link>
        </div>
        <figure className="relative rounded-3xl bg-[#17130e] p-8 text-[#f1eadb] sm:p-12">
          <span className="absolute -top-8 left-8 font-serif text-[8rem] leading-none text-gold" aria-hidden>
            „
          </span>
          <blockquote className="relative font-serif text-2xl font-light leading-snug sm:text-3xl">
            Die Pfalzeler Geschichte ist die Geschichte der Freiheit und des unermüdlichen Willens, die Traditionen des
            Reiches zu bewahren.
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4 border-t border-[#f1eadb]/15 pt-6">
            <Crest className="h-10 w-auto" />
            <span className="text-sm text-[#f1eadb]/70">Leitgedanke des Großherzogtums</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 rounded-3xl border border-line bg-card p-6 sm:p-10 lg:grid-cols-[1fr_1.6fr] lg:p-14">
        <SectionHeading
          eyebrow="Häufige Fragen"
          title="Gut zu wissen"
          intro="Die wichtigsten Antworten rund um das Großherzogtum auf einen Blick."
        />
        <Accordion type="single" collapsible className="w-full">
          {faq.map((item, i) => (
            <AccordionItem key={item.q} value={`q${i}`} className="border-line">
              <AccordionTrigger className="py-5 text-left font-serif text-lg font-medium hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-ink-soft">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
