import Image from "next/image"

export function PlateExampleSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Aufbau der Kennzeichen
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Beispiel eines regulären Fahrzeugkennzeichens aus der Pfalzeler Hauptstadt
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-card rounded-lg shadow-xl p-8 max-w-3xl w-full">
            <div className="flex justify-center mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P-CM74-JeRaf4a2czzdGgUcvZ8QdAQ4DQkj1V.png"
                alt="Beispiel Kennzeichen P-CM74"
                width={500}
                height={125}
                className="rounded-lg max-w-md"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-secondary rounded-lg border border-border">
                <div className="text-xl font-bold text-foreground mb-2">Flagge</div>
                <p className="text-sm text-muted-foreground">
                  Die Nationalflagge mit dem Pfalzeler Wappen identifiziert das Fahrzeug als im Großherzogtum registriert
                </p>
              </div>
              <div className="p-4 bg-secondary rounded-lg border border-border">
                <div className="text-xl font-bold text-foreground mb-2">P</div>
                <p className="text-sm text-muted-foreground">
                  Regionskürzel für die Pfalzeler Hauptstadt
                </p>
              </div>
              <div className="p-4 bg-secondary rounded-lg border border-border">
                <div className="text-xl font-bold text-foreground mb-2">CM</div>
                <p className="text-sm text-muted-foreground">
                  Individuelle Buchstabenkombination des Fahrzeughalters
                </p>
              </div>
              <div className="p-4 bg-secondary rounded-lg border border-border">
                <div className="text-xl font-bold text-foreground mb-2">74</div>
                <p className="text-sm text-muted-foreground">
                  Fortlaufende Nummer zur eindeutigen Identifikation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
