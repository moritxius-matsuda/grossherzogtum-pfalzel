import type { Metadata } from "next"
import Link from "next/link"
import { Crown } from "lucide-react"
import { KennzeichenBild } from "@/components/site/kennzeichen"
import { PlateBuilder } from "@/components/site/plate-builder"
import { PageHero, SectionHeading } from "@/components/site/section-heading"
import { governmentPlates, regions } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Kennzeichen",
  description: "Aufbau, Regierungskennzeichen und Regionalkürzel des Pfalzeler Kennzeichensystems – mit Konfigurator.",
}

const anatomy = [
  { part: "PF", label: "Länderkennung mit der Nationalflagge" },
  { part: "P", label: "Regionalkürzel – hier die Hauptstadt" },
  { part: "Wappen", label: "Landeswappen mit dem Namen der Region" },
  { part: "611", label: "Dreistellige Nummer" },
  { part: "IY", label: "Zwei Buchstaben" },
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
        <SectionHeading eyebrow="Aufbau" title="Ein Kennzeichen in fünf Teilen" />
        <div className="mt-12 rounded-2xl border border-line bg-card p-6 sm:p-10">
          <div className="mx-auto max-w-3xl">
            <KennzeichenBild kennzeichen={{ region: "P", nummer: "611", buchstaben: "IY" }} />
          </div>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
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
            intro="Wählen Sie eine Region, drei Ziffern und zwei Buchstaben – oder ein Sonderkennzeichen wie „M 213“. Die Regeln werden live geprüft."
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
                <div className="w-full max-w-xs">
                  <KennzeichenBild kennzeichen={{ region: "", nummer: p.code, buchstaben: "" }} />
                </div>
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
