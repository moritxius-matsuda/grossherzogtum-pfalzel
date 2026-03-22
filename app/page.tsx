import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LicensePlatesSection } from "@/components/license-plates-section"
import { PlateExampleSection } from "@/components/plate-example-section"
import { RegionsSection } from "@/components/regions-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <LicensePlatesSection />
      <PlateExampleSection />
      <RegionsSection />
      <Footer />
    </main>
  )
}
