import type { Metadata } from "next"
import { Crest } from "@/components/site/crest"
import { FlagExplorer } from "@/components/site/flag-explorer"
import { PageHero, SectionHeading } from "@/components/site/section-heading"
import { timeline } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Staat & Symbole",
  description: "Nationalflagge, Wappen und Chronik des Großherzogtums Pfalzel.",
}

export default function StaatPage() {
  return (
    <>
      <PageHero
        eyebrow="Staat & Symbole"
        title="Ein Erbe der Souveränität"
        intro="Das Großherzogtum Pfalzel vereint die Traditionen der Pfalzeler Region mit moderner Souveränität – um die Werte von Freiheit und Frieden für kommende Generationen zu bewahren."
      >
        <nav className="mt-10 flex flex-wrap gap-2 text-sm" aria-label="Auf dieser Seite">
          {[
            ["#flagge", "Nationalflagge"],
            ["#wappen", "Wappen"],
            ["#chronik", "Chronik"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="rounded-full border border-line bg-card px-4 py-2 font-medium hover:border-ink/30">
              {label}
            </a>
          ))}
        </nav>
      </PageHero>

      <section id="flagge" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Nationalflagge"
          title="Vier Elemente, eine Nation"
          intro="Die Flagge trägt die Farben des Mutterlandes und das historische Wappen in ihrer Mitte. Wählen Sie ein Element, um seine Bedeutung zu erfahren."
        />
        <div className="mt-12">
          <FlagExplorer />
        </div>
      </section>

      <section id="wappen" className="border-y border-line bg-[#17130e] text-[#f1eadb]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[auto_1fr] lg:px-8 lg:py-24">
          <div className="flex items-end justify-center gap-8">
            <figure className="text-center">
              <Crest className="mx-auto h-56 w-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] sm:h-72" />
              <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-[#f1eadb]/60">Farbig</figcaption>
            </figure>
            <figure className="text-center text-[#f1eadb]">
              <span className="block rounded-2xl bg-[#f1eadb] p-5 text-[#17130e]">
                <Crest variant="mono" crossColor="#f1eadb" className="mx-auto h-24 w-auto sm:h-32" />
              </span>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-[#f1eadb]/60">Einfarbig</figcaption>
            </figure>
          </div>
          <div className="max-w-xl">
            <p className="eyebrow !text-gold">Das Wappen</p>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">Weißes Kreuz auf rotem Schild</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#f1eadb]/75">
              Das historische Wappen Pfalzels steht für die Zusammenführung von Tradition und nationalem Stolz. In der
              einfarbigen Fassung – schwarz mit weißem Kreuz – bildet es das Zeichen des Staatslogos.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-[#f1eadb]/15 pt-6 text-sm">
              <div>
                <dt className="text-[#f1eadb]/60">Schildfarbe</dt>
                <dd className="mt-1 flex items-center gap-2 font-medium">
                  <span className="size-3 rounded-full bg-[#E2001A]" /> Rot
                </dd>
              </div>
              <div>
                <dt className="text-[#f1eadb]/60">Gemeine Figur</dt>
                <dd className="mt-1 font-medium">Durchgehendes Kreuz, silbern</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="chronik" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Chronik"
              title="Vom Gedanken zum Staat"
              intro="Mit der Erklärung der Unabhängigkeit begann ein neuer Abschnitt in der Geschichte Pfalzels – geprägt von Souveränität und historischen Wurzeln."
            />
          </div>
          <ol className="relative border-l-2 border-line pl-8 sm:pl-10">
            {timeline.map((t, i) => (
              <li key={t.title} className="relative pb-12 last:pb-0">
                <span
                  className={`absolute -left-[calc(2rem+9px)] top-1 size-4 rounded-full border-2 border-paper sm:-left-[calc(2.5rem+9px)] ${
                    i === 0 ? "bg-crimson ring-4 ring-crimson/20" : "bg-gold"
                  }`}
                  aria-hidden
                />
                <time className="text-sm font-semibold tabular-nums text-gold-ink">{t.date}</time>
                <h3 className="mt-1 font-serif text-2xl font-medium tracking-tight">{t.title}</h3>
                <p className="mt-2 max-w-xl leading-relaxed text-ink-soft">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
