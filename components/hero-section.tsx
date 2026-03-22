import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Großherzogtum Pfalzel
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-primary-foreground/80">
              Grand Duchy of Pfalzel
            </p>
            <p className="mt-2 text-lg text-primary-foreground/70">
              Grand-Duché de Pfalzel
            </p>
            <p className="mt-8 text-lg text-primary-foreground/80 max-w-xl">
              Willkommen auf der offiziellen Website des Großherzogtums Pfalzel. 
              Erfahren Sie mehr über unsere Regionen und das Kennzeichensystem.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wappen_Pfalzel-zKZ5zoehtW577lFxbZZ9qNKd12zBFV.png"
              alt="Wappen des Großherzogtums Pfalzel"
              width={200}
              height={240}
              className="drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
