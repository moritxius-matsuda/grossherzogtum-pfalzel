import type { Metadata } from "next"
import { Mail, MapPin, Phone } from "lucide-react"
import { PageHero } from "@/components/site/section-heading"
import { imprint } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Impressum",
  description: "Anbieterkennzeichnung des Staatsportals des Großherzogtums Pfalzel.",
}

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-line bg-card p-6 sm:p-8">
            <h2 className="eyebrow">Angaben gemäß § 5 DDG</h2>
            <address className="mt-5 flex gap-4 not-italic leading-relaxed">
              <MapPin className="mt-1 size-5 shrink-0 text-gold-ink" />
              <span>
                <span className="block font-serif text-2xl font-medium tracking-tight">{imprint.name}</span>
                <span className="mt-2 block text-ink-soft">
                  {imprint.street}
                  <br />
                  {imprint.city}
                  <br />
                  {imprint.country}
                </span>
              </span>
            </address>
          </article>

          <article className="rounded-2xl border border-line bg-card p-6 sm:p-8">
            <h2 className="eyebrow">Kontakt</h2>
            <dl className="mt-5 space-y-4">
              <div className="flex gap-4">
                <Phone className="mt-0.5 size-5 shrink-0 text-gold-ink" />
                <div>
                  <dt className="text-sm text-ink-soft">Telefon</dt>
                  <dd>
                    <a href={`tel:${imprint.phone.replace(/\s/g, "")}`} className="font-medium hover:underline">
                      {imprint.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-0.5 size-5 shrink-0 text-gold-ink" />
                <div>
                  <dt className="text-sm text-ink-soft">E-Mail</dt>
                  <dd>
                    <a href={`mailto:${imprint.mail}`} className="font-medium hover:underline">
                      {imprint.mail}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </article>

          <article className="rounded-2xl border border-line bg-card p-6 sm:p-8 lg:col-span-2">
            <h2 className="eyebrow">Verbraucherstreitbeilegung (§ 36 VSBG)</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink-soft">
              Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
