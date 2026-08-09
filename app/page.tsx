import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FlagSection } from "@/components/flag-section"
import { LicensePlatesSection } from "@/components/license-plates-section"
import { PlateExampleSection } from "@/components/plate-example-section"
import { RegionsSection } from "@/components/regions-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <FlagSection />
      <LicensePlatesSection />
      <PlateExampleSection />
      <RegionsSection />
      <Footer />
    </main>
  )
}
