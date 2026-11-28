import type { Metadata } from "next"
import { Crest } from "@/components/site/crest"
import { FlagExplorer } from "@/components/site/flag-explorer"
import { PageHero, SectionHeading } from "@/components/site/section-heading"
import { steckbrief, timeline, verfassung } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Staat & Symbole",
  description: "Steckbrief, Verfassung, Nationalflagge, Wappen und Chronik des Großherzogtums Pfalzel.",
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
            ["#steckbrief", "Steckbrief"],
            ["#verfassung", "Verfassung"],
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

      <section id="steckbrief" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading
              eyebrow="Steckbrief"
              title="Das Großherzogtum auf einen Blick"
              intro="Von der Staatsform bis zur Uhrzeit – die wichtigsten Angaben zum Staat."
            />
            <blockquote className="mt-10 border-l-4 border-gold pl-5">
              <p className="font-serif text-2xl leading-snug tracking-tight text-balance">„Ordnung, Stabilität, Freiheit, Gerechtigkeit und Wohlstand“</p>
              <footer className="mt-2 text-sm text-ink-soft">Wahlspruch des Großherzogtums</footer>
            </blockquote>
            <div className="mt-10 rounded-2xl border border-line bg-card p-6">
              <p className="eyebrow">Herkunft des Namens</p>
              <p className="mt-3 leading-relaxed text-ink-soft">
                „Pfalzel“ geht auf das lateinische <em>palatiolum</em> zurück – „kleiner Palast“. Der Name erinnert an die
                tiefen Wurzeln des Ortes im Rheinland und gibt der historischen Gemarkung Pfalzel, die das Großherzogtum
                vollständig umfasst, ihren Namen.
              </p>
            </div>
          </div>
          <dl className="grid content-start gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {steckbrief.map((e) => (
              <div key={e.label} className="bg-card px-5 py-4">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">{e.label}</dt>
                <dd className="mt-1 font-medium">{e.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="verfassung" className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Verfassung"
            title="Die Ordnung des Staates"
            intro="Am 11. Mai 2026 hat Großherzog Lukas Patrick Meier die Verfassung des Großherzogtums Pfalzel in Kraft gesetzt. Sie regelt Souveränität, Grundrechte und den Aufbau der Staatsgewalt."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {verfassung.map((v) => (
              <article key={v.titel} className="rounded-2xl border border-line bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">{v.artikel}</p>
                <h3 className="mt-2 font-serif text-xl font-medium tracking-tight">{v.titel}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{v.text}</p>
              </article>
            ))}
          </div>
          <a
            href="https://justiz.pfalzel.gd"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-paper transition-colors hover:bg-ink/85"
          >
            Verfassung und Gesetze im Gesetzesportal lesen ↗
          </a>
        </div>
      </section>

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
              <Crest dunklerGrund className="mx-auto h-56 w-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] sm:h-72" />
              <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-[#f1eadb]/60">Auf dunklem Grund</figcaption>
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
