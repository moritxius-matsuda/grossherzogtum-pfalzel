import type { Metadata } from "next"
import { Newspaper } from "lucide-react"
import { PageHero } from "@/components/site/section-heading"
import { BeitragKarte } from "@/components/site/beitrag-karte"
import { behoerde, beitraege } from "@/lib/blog"

export const revalidate = 300

export const metadata: Metadata = {
  title: "Aktuelles",
  description: "Nachrichten und Bekanntmachungen der Staatsorgane und Ministerien des Großherzogtums Pfalzel.",
}

export default async function AktuellesPage({ searchParams }: { searchParams: Promise<{ behoerde?: string }> }) {
  const { behoerde: filter } = await searchParams
  const alle = await beitraege()
  const vorhandene = [...new Set(alle.map((b) => b.behoerde))]
  const liste = filter ? alle.filter((b) => b.behoerde === filter) : alle

  return (
    <>
      <PageHero
        eyebrow="Aktuelles"
        title="Nachrichten aus dem Großherzogtum"
        intro="Bekanntmachungen und Neuigkeiten der Staatsorgane und Ministerien – jeweils mit der zuständigen Behörde gekennzeichnet."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {vorhandene.length > 1 && (
          <nav aria-label="Nach Behörde filtern" className="mb-10 flex flex-wrap gap-2">
            <a
              href="/aktuelles"
              aria-current={!filter ? "page" : undefined}
              className="rounded-full border border-line px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:text-ink aria-[current=page]:border-ink aria-[current=page]:bg-ink aria-[current=page]:text-paper"
            >
              Alle
            </a>
            {vorhandene.map((k) => (
              <a
                key={k}
                href={`/aktuelles?behoerde=${encodeURIComponent(k)}`}
                aria-current={filter === k ? "page" : undefined}
                title={behoerde(k)?.title}
                className="rounded-full border border-line px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:text-ink aria-[current=page]:border-ink aria-[current=page]:bg-ink aria-[current=page]:text-paper"
              >
                {k}
              </a>
            ))}
          </nav>
        )}

        {liste.length === 0 ? (
          <div className="flex flex-col items-center rounded-2xl border border-dashed border-line px-6 py-20 text-center">
            <Newspaper className="size-8 text-ink-soft" />
            <p className="mt-4 font-serif text-2xl">Noch keine Beiträge</p>
            <p className="mt-2 max-w-md text-ink-soft">Sobald Behörden Neuigkeiten veröffentlichen, erscheinen sie hier.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {liste.map((b) => (
              <BeitragKarte key={b.slug} b={b} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
