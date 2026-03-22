import { Header } from "@/components/header"
import { FlagSection } from "@/components/flag-section"
import { LicensePlatesSection } from "@/components/license-plates-section"
import { PlateExampleSection } from "@/components/plate-example-section"
import { RegionsSection } from "@/components/regions-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <FlagSection />
      <LicensePlatesSection />
      <PlateExampleSection />
      <RegionsSection />
      <Footer />
    </main>
  )
}
