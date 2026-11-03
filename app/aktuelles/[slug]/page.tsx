import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { BehoerdenMarke } from "@/components/site/beitrag-karte"
import { behoerde, beitrag, bildUrl, datumLang } from "@/lib/blog"

export const revalidate = 60

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const b = await beitrag((await params).slug)
  if (!b) return { title: "Beitrag nicht gefunden" }
  const bild = bildUrl(b)
  return {
    title: b.titel,
    description: b.teaser ?? undefined,
    openGraph: { title: b.titel, description: b.teaser ?? undefined, images: bild ? [bild] : undefined, type: "article" },
  }
}

export default async function BeitragPage({ params }: Props) {
  const b = await beitrag((await params).slug)
  if (!b) notFound()
  const bild = bildUrl(b)
  const a = behoerde(b.behoerde)

  return (
    <article>
      <header className="paper-grain border-b border-line">
        <div className="mx-auto max-w-3xl px-4 pb-12 pt-12 sm:px-6 sm:pt-16">
          <Link href="/aktuelles" className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink">
            <ArrowLeft className="size-4" /> Alle Beiträge
          </Link>
          <div className="mt-8">
            <BehoerdenMarke kuerzel={b.behoerde} gross />
          </div>
          <h1 className="mt-6 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-5xl">{b.titel}</h1>
          {b.teaser && <p className="mt-5 text-lg leading-relaxed text-ink-soft">{b.teaser}</p>}
          <p className="mt-6 text-sm text-ink-soft">
            <time dateTime={b.veroeffentlicht_am}>{datumLang(b.veroeffentlicht_am)}</time>
            {a && <> · {a.title}</>}
          </p>
        </div>
      </header>

      {bild && (
        <div className="mx-auto max-w-5xl px-4 pt-10 sm:px-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bild} alt="" className="w-full rounded-2xl border border-line object-cover" />
        </div>
      )}

      {/* Inhalt wird im Zentralregister beim Speichern bereinigt (nur Textformatierungen, keine Skripte oder Links) */}
      <div className="beitrag-text mx-auto max-w-3xl px-4 py-12 sm:px-6" dangerouslySetInnerHTML={{ __html: b.inhalt ?? "" }} />

      <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <div className="flag-rule rounded-full" aria-hidden />
        <Link href="/aktuelles" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-ink hover:underline">
          <ArrowLeft className="size-4" /> Weitere Nachrichten
        </Link>
      </div>
    </article>
  )
}
