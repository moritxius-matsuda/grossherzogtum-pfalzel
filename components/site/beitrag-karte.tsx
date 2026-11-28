import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { behoerde, bildUrl, datumLang, type Beitrag } from "@/lib/blog"

/** Kennzeichnung der zuständigen Behörde: Logo auf weißem Feld wie im Behördenverzeichnis */
export function BehoerdenMarke({ kuerzel, gross = false }: { kuerzel: string; gross?: boolean }) {
  const a = behoerde(kuerzel)
  if (!a) return <span className="text-xs font-bold tracking-wider text-gold-ink">{kuerzel}</span>
  return (
    <span className="inline-flex items-center gap-3">
      <span className={`flex shrink-0 items-center rounded-lg bg-white px-2 py-1 ring-1 ring-black/5 ${gross ? "w-40" : "w-24"}`}>
        <Image src={a.logo} alt={a.title} width={2500} height={666} className="h-auto w-full" />
      </span>
      {gross && (
        <span className="leading-tight">
          <span className="block text-xs font-bold tracking-wider text-gold-ink">{a.abbreviation}</span>
          <span className="block text-sm text-ink-soft">{a.title}</span>
        </span>
      )}
    </span>
  )
}

export function BeitragKarte({ b }: { b: Beitrag }) {
  const bild = bildUrl(b)
  const a = behoerde(b.behoerde)
  return (
    <Link
      href={`/aktuelles/${b.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card transition-colors hover:border-ink/30"
    >
      {bild ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={bild} alt="" className="aspect-[16/9] w-full object-cover" loading="lazy" />
      ) : (
        <div className="flag-rule" aria-hidden />
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <BehoerdenMarke kuerzel={b.behoerde} />
          <time dateTime={b.veroeffentlicht_am} className="text-sm tabular-nums text-ink-soft">{datumLang(b.veroeffentlicht_am)}</time>
        </div>
        <h3 className="mt-4 font-serif text-2xl font-medium leading-snug tracking-tight text-balance group-hover:underline">{b.titel}</h3>
        {b.teaser && <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{b.teaser}</p>}
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-ink">
          Weiterlesen <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
        <span className="sr-only">{a ? `– ${a.title}` : ""}</span>
      </div>
    </Link>
  )
}
