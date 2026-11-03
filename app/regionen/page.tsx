import type { Metadata } from "next"
import { Suspense } from "react"
import { PageHero } from "@/components/site/section-heading"
import { RegionExplorer } from "@/components/site/region-explorer"

export const metadata: Metadata = {
  title: "Regionen",
  description: "Die acht Regionen des Großherzogtums Pfalzel und ihre Kennzeichenkürzel.",
}

export default function RegionenPage() {
  return (
    <>
      <PageHero
        eyebrow="Regionen"
        title="Acht Regionen, ein Großherzogtum"
        intro="Von der Hauptstadt über Wälder und Inseln bis zum Hafen: Jede Region hat ihren eigenen Charakter – und ihr eigenes Kennzeichenkürzel."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Suspense>
          <RegionExplorer />
        </Suspense>
      </section>
    </>
  )
}
