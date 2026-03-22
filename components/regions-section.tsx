import { MapPin } from "lucide-react"

const regions = [
  { code: "P", name: "Pfalzeler Hauptstadt", type: "Hauptstadt" },
  { code: "PW", name: "Pfalzeler Wald", type: "Waldgebiet" },
  { code: "BW", name: "Bauscher Waldgebiete", type: "Waldgebiet" },
  { code: "B", name: "Auf der Bausch", type: "Region" },
  { code: "IT", name: "Inneres Territorium", type: "Kerngebiet" },
  { code: "I", name: "Pfalzeler Inselgebiete", type: "Inselregion" },
  { code: "HA", name: "Hafen", type: "Hafenregion" },
  { code: "LA", name: "Loricher Außengebiet", type: "Außengebiet" }
]

export function RegionsSection() {
  return (
    <section id="regionen" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Regionen des Großherzogtums
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Das Großherzogtum Pfalzel gliedert sich in verschiedene administrative Regionen, 
            jede mit eigenem Kennzeichenkürzel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {regions.map((region) => (
            <div 
              key={region.code}
              className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-primary">{region.code}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{region.type}</span>
                </div>
                <p className="font-medium text-foreground">{region.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
