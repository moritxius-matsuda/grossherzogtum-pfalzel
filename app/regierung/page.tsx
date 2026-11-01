import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { AuthorityDirectory } from "@/components/site/authority-directory"
import { PageHero, SectionHeading } from "@/components/site/section-heading"
import { authorities, authorityUrl } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Regierung & Behörden",
  description: "Staatsorgane und Ministerien des Großherzogtums Pfalzel mit Zuständigkeiten und Webadressen.",
}

export default function RegierungPage() {
  const [duke, pm, parliament] = authorities.filter((a) => a.group === "Staatsorgan")

  return (
    <>
      <PageHero
        eyebrow="Regierung & Behörden"
        title="So ist Pfalzel organisiert"
        intro="Die Staatsspitze gliedert sich in drei Staatsorgane. Ihnen folgen vierzehn Ministerien – jedes mit eigener Adresse unter pfalzel.gd."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Staatsaufbau" title="Drei Staatsorgane" />

        {/* Organigramm */}
        <div className="mt-12">
          <OrganCard organ={duke} highlight className="mx-auto max-w-md" />
          <div className="mx-auto h-10 w-px bg-line" aria-hidden />
          <div className="relative grid gap-4 md:grid-cols-2">
            <div className="absolute inset-x-1/4 -top-px hidden h-px bg-line md:block" aria-hidden />
            <OrganCard organ={pm} />
            <OrganCard organ={parliament} />
          </div>
          <div className="mx-auto h-10 w-px bg-line md:ml-[25%]" aria-hidden />
          <div className="rounded-2xl border border-dashed border-ink/25 p-5 text-center text-sm text-ink-soft md:mr-[50%]">
            <span className="font-serif text-lg text-ink">14 Ministerien</span> unter Leitung des Premierministers
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-2/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Behördenverzeichnis"
            title="Alle Ministerien"
            intro="Filtern Sie nach Bereich oder suchen Sie nach Name und Kürzel. Ein Klick öffnet die Website der Behörde."
          />
          <div className="mt-10">
            <AuthorityDirectory />
          </div>
        </div>
      </section>
    </>
  )
}

function OrganCard({
  organ,
  highlight = false,
  className = "",
}: {
  organ: (typeof authorities)[number]
  highlight?: boolean
  className?: string
}) {
  return (
    <a
      href={authorityUrl(organ)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-5 rounded-2xl border p-5 transition-shadow hover:shadow-lg ${
        highlight ? "border-gold bg-gold/15" : "border-line bg-card"
      } ${className}`}
    >
      <div className="flex size-20 shrink-0 items-center justify-center rounded-xl bg-white p-2 ring-1 ring-black/5">
        <Image src={organ.logo} alt="" width={80} height={80} className="h-full w-auto object-contain" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-bold tracking-wider text-gold-ink">{organ.abbreviation}</p>
        <h3 className="font-serif text-xl font-medium leading-tight">{organ.title}</h3>
        <p className="mt-1.5 text-sm leading-snug text-ink-soft">{organ.description}</p>
        <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-ink-soft group-hover:text-ink">
          {authorityUrl(organ).replace("https://", "")} <ArrowUpRight className="size-3.5" />
        </span>
      </div>
    </a>
  )
}
