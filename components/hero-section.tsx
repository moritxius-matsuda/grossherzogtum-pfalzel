import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Der Glanz von Pfalzel
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto lg:mx-0">
              Die Geschichte und die Zukunft des Großherzogtums Pfalzel – eine Mikronation mit Herz und Seele.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#ueber"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-semibold text-background shadow-lg hover:bg-foreground/90 transition-colors"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wappen_Pfalzel-zKZ5zoehtW577lFxbZZ9qNKd12zBFV.png"
              alt="Wappen des Großherzogtums Pfalzel"
              width={220}
              height={260}
              className="drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
