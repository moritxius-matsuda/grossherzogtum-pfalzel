import type { Metadata } from "next"
import Link from "next/link"
import { Crown } from "lucide-react"
import { Plate } from "@/components/site/plate"
import { PlateBuilder } from "@/components/site/plate-builder"
import { PageHero, SectionHeading } from "@/components/site/section-heading"
import { governmentPlates, regions } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Kennzeichen",
  description: "Aufbau, Regierungskennzeichen und Regionalkürzel des Pfalzeler Kennzeichensystems – mit Konfigurator.",
}

const anatomy = [
  { part: "Flagge", label: "Nationalflagge mit dem Pfalzeler Wappen" },
  { part: "P", label: "Regionalkürzel – hier die Hauptstadt" },
  { part: "CM", label: "Individuelle Buchstabenkombination" },
  { part: "74", label: "Fortlaufende Identifikationsnummer" },
]

export default function KennzeichenPage() {
  return (
    <>
      <PageHero
        eyebrow="Verkehr"
        title="Das Pfalzeler Kennzeichensystem"
        intro="Ein eigenes System unterscheidet Regierungsfahrzeuge von regionalen Kennzeichen. So lesen Sie ein Kennzeichen – und so stellen Sie Ihr eigenes zusammen."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Aufbau" title="Ein Kennzeichen in vier Teilen" />
        <div className="mt-12 rounded-2xl border border-line bg-card p-6 sm:p-10">
          <div className="overflow-x-auto pb-2 text-center">
            <Plate region="P" letters="CM" number="74" className="text-[2.6rem] sm:text-[5rem]" />
          </div>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {anatomy.map((a, i) => (
              <li key={a.part} className="border-t-4 border-gold pt-4">
                <span className="text-xs tabular-nums text-ink-soft">0{i + 1}</span>
                <p className="font-plate text-3xl">{a.part}</p>
                <p className="mt-1 text-sm text-ink-soft">{a.label}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="konfigurator" className="border-y border-line bg-paper-2/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Konfigurator"
            title="Stellen Sie Ihr Kennzeichen zusammen"
            intro="Wählen Sie eine Region, Buchstaben und eine Nummer. Die Regeln werden live geprüft."
          />
          <div className="mt-10">
            <PlateBuilder />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sonderkennzeichen"
          title="Regierungskennzeichen"
          intro="Die Ziffern 1 bis 3 sind den höchsten Ämtern des Staates vorbehalten."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {governmentPlates.map((p) => (
            <article key={p.code} className="overflow-hidden rounded-2xl border border-line bg-card">
              <div className="flex h-36 items-center justify-center bg-ink p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.plate} alt={`Kennzeichen ${p.code}`} className="h-14 w-auto" />
              </div>
              <div className="p-6">
                <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-ink">
                  <Crown className="size-3.5" /> Nr. {p.code}
                </p>
                <h3 className="mt-2 font-serif text-xl font-medium">{p.holder}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Übersicht" title="Alle Regionalkürzel" />
        <div className="mt-8 overflow-hidden rounded-2xl border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-paper-2 text-xs uppercase tracking-wider text-ink-soft">
              <tr>
                <th scope="col" className="px-5 py-3 font-semibold">Kürzel</th>
                <th scope="col" className="px-5 py-3 font-semibold">Region</th>
                <th scope="col" className="hidden px-5 py-3 font-semibold sm:table-cell">Gebietstyp</th>
                <th scope="col" className="px-5 py-3"><span className="sr-only">Details</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-card">
              {regions.map((r) => (
                <tr key={r.code} className="hover:bg-paper-2/50">
                  <td className="px-5 py-3">
                    <span className="inline-flex min-w-11 justify-center rounded border-2 border-black bg-white px-1.5 font-plate text-xl text-black">
                      {r.code}
                    </span>
                  </td>
                  <td className="px-5 py-3 font-medium">{r.name}</td>
                  <td className="hidden px-5 py-3 text-ink-soft sm:table-cell">{r.type}</td>
                  <td className="px-5 py-3 text-right">
                    <Link href={`/regionen?r=${r.code}`} className="font-semibold text-gold-ink hover:underline">
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
