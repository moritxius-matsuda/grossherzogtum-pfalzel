import { LicensePlateCard } from "./license-plate-card"

const governmentPlates = [
  {
    code: "1",
    name: "Großherzog",
    description: "Das Kennzeichen \"1\" ist ausschließlich dem Großherzog von Pfalzel vorbehalten. Es symbolisiert die höchste staatliche Autorität und wird nur für offizielle Staatsfahrzeuge des Monarchen verwendet.",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Kv9Lc1FotmAdevd36RjRmngumJUKAG.png",
    isGovernment: true
  },
  {
    code: "2",
    name: "Premierminister",
    description: "Das Kennzeichen \"2\" ist dem Premierminister des Großherzogtums zugeteilt. Es kennzeichnet die Dienstfahrzeuge des Regierungschefs.",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-HpCy039n09Kpj1RltR0NLS5piLMvfb.png",
    isGovernment: true
  },
  {
    code: "3",
    name: "Landgräfin des hohen Berges",
    description: "Das Kennzeichen \"3\" ist der Landgräfin des hohen Berges vorbehalten. Diese adlige Position repräsentiert einen der ältesten Adelstitel des Großherzogtums.",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-5e6iZ76wZpraHeSJE2nEWP33W8DAHG.png",
    isGovernment: true
  }
]

const regionalPlates = [
  {
    code: "P",
    name: "Pfalzeler Hauptstadt",
    description: "Das Kürzel \"P\" steht für die Pfalzeler Hauptstadt, das administrative und kulturelle Zentrum des Großherzogtums. Fahrzeuge mit diesem Kennzeichen sind in der Hauptstadtregion registriert.",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P-1-z6CON58GNheIiQAFkBT4YajlKCux8D.png"
  },
  {
    code: "PW",
    name: "Pfalzeler Wald",
    description: "\"PW\" bezeichnet den Pfalzeler Wald, ein ausgedehntes Waldgebiet im Herzen des Großherzogtums. Diese Region ist bekannt für ihre natürliche Schönheit und historische Forstwirtschaft.",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PW-1-EGEBiZrbbiCAbD9V8k1jhSdcpwyUDK.png"
  },
  {
    code: "BW",
    name: "Bauscher Waldgebiete",
    description: "Das Kürzel \"BW\" repräsentiert die Bauscher Waldgebiete, eine waldreiche Region im nördlichen Teil des Großherzogtums mit bedeutender ökologischer Vielfalt.",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BW-1-sjG4v9Gp09CEsApsszWZUY5qWHZl8X.png"
  },
  {
    code: "B",
    name: "Auf der Bausch",
    description: "\"B\" steht für die Region \"Auf der Bausch\", ein historisches Gebiet mit traditioneller Architektur und landwirtschaftlicher Bedeutung.",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B-1-iwJHcskoO8oC4trc0ywikaem79sssr.png"
  },
  {
    code: "IT",
    name: "Inneres Territorium",
    description: "Das Kürzel \"IT\" bezeichnet das Innere Territorium, das Kerngebiet des Großherzogtums mit wichtigen administrativen Einrichtungen.",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IT-1-cSadUImPrgilnEb8YlvDh1K53Mom7D.png"
  },
  {
    code: "I",
    name: "Pfalzeler Inselgebiete",
    description: "\"I\" steht für die Pfalzeler Inselgebiete, die maritimen Territorien des Großherzogtums mit eigener Verwaltungsstruktur.",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/I1-fetBiQzfZEDArFa9gBPFk2xG1uiHtf.png"
  },
  {
    code: "HA",
    name: "Hafen",
    description: "Das Kürzel \"HA\" kennzeichnet die Hafenregion, das wirtschaftliche Tor des Großherzogtums mit Zugang zu internationalen Handelsrouten.",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HA-1-Rabsa79tRUaLytWPVG3lS5FtCxQuSq.png"
  },
  {
    code: "LA",
    name: "Loricher Außengebiet",
    description: "\"LA\" repräsentiert das Loricher Außengebiet, eine periphere Region des Großherzogtums mit eigenständiger kultureller Identität.",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LA-1-ImhuNhvZLiJUXy8ZfLoOPmopfnp3Y6.png"
  }
]

export function LicensePlatesSection() {
  return (
    <section id="kennzeichen" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Kennzeichensystem
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Das Großherzogtum Pfalzel verfügt über ein eigenes Kennzeichensystem, 
            das zwischen Regierungsfahrzeugen und regionalen Kennzeichen unterscheidet.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-12 h-1 bg-accent rounded-full"></span>
            Regierungskennzeichen
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {governmentPlates.map((plate) => (
              <LicensePlateCard key={plate.code} {...plate} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-12 h-1 bg-primary rounded-full"></span>
            Regionale Kennzeichen
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regionalPlates.map((plate) => (
              <LicensePlateCard 
                key={plate.code} 
                {...plate} 
                imageSrc={plate.imageSrc || ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
