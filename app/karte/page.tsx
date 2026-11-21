import type { Metadata } from "next"
import "leaflet/dist/leaflet.css"
import { Suspense } from "react"
import { PageHero } from "@/components/site/section-heading"
import { PfalzelKarte } from "@/components/site/pfalzel-karte"

export const metadata: Metadata = {
  title: "Karte",
  description: "Interaktive Karte des Großherzogtums Pfalzel: Staatsgrenzen, die acht Regionen, Flächen und Standortprüfung.",
}

export default function KartePage() {
  return (
    <>
      <PageHero
        eyebrow="Karte"
        title="Das Großherzogtum entdecken"
        intro="Staatsgrenze und alle acht Regionen auf einer Karte. Klicken Sie eine Region an, zoomen Sie hinein oder prüfen Sie, ob Sie gerade auf pfalzelischem Boden stehen."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Suspense>
          <PfalzelKarte />
        </Suspense>
      </section>
    </>
  )
}
