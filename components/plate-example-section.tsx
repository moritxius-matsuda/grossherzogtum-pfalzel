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
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P-CM74-JeRaf4a2czzdGgUcvZ8QdAQ4DQkj1V.png"
                alt="Beispiel Kennzeichen P-CM74"
                className="rounded-lg max-w-md w-full"
                style={{ height: 'auto' }}
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              <div className="flex flex-col items-center">
                <div className="w-full h-1 bg-primary rounded-full mb-3"></div>
                <div className="text-lg md:text-xl font-bold text-foreground mb-1">Flagge</div>
                <p className="text-xs md:text-sm text-muted-foreground text-center">
                  Nationalflagge
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full h-1 bg-primary rounded-full mb-3"></div>
                <div className="text-lg md:text-xl font-bold text-foreground mb-1">P</div>
                <p className="text-xs md:text-sm text-muted-foreground text-center">
                  Region
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full h-1 bg-primary rounded-full mb-3"></div>
                <div className="text-lg md:text-xl font-bold text-foreground mb-1">CM</div>
                <p className="text-xs md:text-sm text-muted-foreground text-center">
                  Buchstaben
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full h-1 bg-primary rounded-full mb-3"></div>
                <div className="text-lg md:text-xl font-bold text-foreground mb-1">74</div>
                <p className="text-xs md:text-sm text-muted-foreground text-center">
                  Nummer
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li><span className="font-semibold text-foreground">Flagge:</span> Nationalflagge mit dem Pfalzeler Wappen</li>
                <li><span className="font-semibold text-foreground">P:</span> Regionskürzel der Pfalzeler Hauptstadt</li>
                <li><span className="font-semibold text-foreground">CM:</span> Individuelle Buchstabenkombination</li>
                <li><span className="font-semibold text-foreground">74:</span> Fortlaufende Identifikationsnummer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
