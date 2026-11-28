import type { Metadata } from "next"
import "leaflet/dist/leaflet.css"
import { Suspense } from "react"
import { PageHero } from "@/components/site/section-heading"
import { PfalzelKarte } from "@/components/site/pfalzel-karte"

export const metadata: Metadata = {
  title: "Regionen & Karte",
  description: "Die acht Regionen des Großherzogtums Pfalzel auf einer interaktiven Karte: Grenzen, Flächen, Kennzeichenkürzel und Standortprüfung.",
}

export default function RegionenPage() {
  return (
    <>
      <PageHero
        eyebrow="Regionen & Karte"
        title="Acht Regionen, ein Großherzogtum"
        intro="Von der Hauptstadt über Wälder und Inseln bis zum Hafen: Klicken Sie eine Region auf der Karte an, zoomen Sie hinein oder prüfen Sie, ob Sie gerade auf pfalzelischem Boden stehen."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Suspense>
          <PfalzelKarte />
        </Suspense>
      </section>
    </>
  )
}
