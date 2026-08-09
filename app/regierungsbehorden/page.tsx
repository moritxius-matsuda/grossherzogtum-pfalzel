import Link from "next/link"

const agencies = [
  {
    title: "Großherzogliches Ministerium des Inneren",
    abbreviation: "GMI",
    english: "Grand Ducal Ministry of the Interior",
    description: "Sorgt für die innere Sicherheit, Ordnung und die Verwaltung des Landes.",
  },
  {
    title: "Großherzogliches Ministerium für Auswärtige Angelegenheiten",
    abbreviation: "GMAA",
    english: "Grand Ducal Ministry of Foreign Affairs",
    description: "Vertritt die Interessen des Großherzogtums auf der internationalen Bühne und pflegt diplomatische Beziehungen.",
  },
  {
    title: "Ministerium der Finanzen",
    abbreviation: "MF",
    english: "Ministry of Finance",
    description: "Verwaltet die Staatskasse und ist für den Haushalt, Steuern sowie die finanzielle Stabilität zuständig.",
  },
  {
    title: "Ministerium der Justiz",
    abbreviation: "MJ",
    english: "Ministry of Justice",
    description: "Garantiert die Einhaltung der Gesetze, leitet das Gerichtswesen und wacht über den Rechtsstaat.",
  },
  {
    title: "Ministerium der Verteidigung",
    abbreviation: "MV",
    english: "Ministry of Defence",
    description: "Verantwortet die äußere Sicherheit des Landes und führt die Streitkräfte.",
  },
  {
    title: "Ministerium für Verkehr und Bau",
    abbreviation: "MVB",
    english: "Ministry of Transport and Infrastructure",
    description: "Plant und baut Straßen, Schienen sowie die physische Mobilität der Zukunft.",
  },
  {
    title: "Ministerium für Bildung und Forschung",
    abbreviation: "MBF",
    english: "Ministry of Education and Research",
    description: "Fördert Bildung von der Schule bis zur Hochschule und treibt wissenschaftliche Innovationen voran.",
  },
  {
    title: "Ministerium für Gesundheit",
    abbreviation: "MG",
    english: "Ministry of Health",
    description: "Sorgt für die medizinische Versorgung der Bevölkerung und das öffentliche Gesundheitswesen.",
  },
  {
    title: "Hofministerium",
    abbreviation: "GDC",
    english: "Ministry of the Grand Ducal Court",
    description: "Organisiert die Angelegenheiten des Großherzogs und verbindet die Krone mit den staatlichen Institutionen.",
  },
  {
    title: "Ministerium für Wirtschaft und Energie",
    abbreviation: "MWE",
    english: "Ministry of Economic Affairs and Energy",
    description: "Stärkt die heimische Wirtschaft, fördert Unternehmen und sichert die Energieversorgung.",
  },
  {
    title: "Ministerium für Heimat- und Zivilschutz",
    abbreviation: "MHZS",
    english: "Ministry of Homeland and Civil Protection",
    description: "Schützt die Bevölkerung vor Katastrophen, Notlagen und Störungen des öffentlichen Lebens.",
  },
  {
    title: "Ministerium für Umwelt und Landwirtschaft",
    abbreviation: "MUL",
    english: "Ministry of Environment and Agriculture",
    description: "Wahrt die natürlichen Lebensgrundlagen, schützt das Klima und fördert eine nachhaltige Landwirtschaft.",
  },
  {
    title: "Ministerium für Arbeit und Soziales",
    abbreviation: "MAS",
    english: "Ministry of Labour and Social Affairs",
    description: "Kümmert sich um faire Arbeitsbedingungen, den Arbeitsmarkt und die soziale Absicherung.",
  },
  {
    title: "Ministerium für Familie und Jugend",
    abbreviation: "MFJ",
    english: "Ministry of Family and Youth",
    description: "Unterstützt Familien, fördert Kinder und schafft Rahmenbedingungen für die jüngere Generation.",
  },
  {
    title: "Großherzog von Pfalzel",
    abbreviation: "GD",
    english: "Grand Duke of Pfalzel",
    description: "Dient als repräsentatives und konstitutives Staatsoberhaupt des Großherzogtums, wahrt die Kontinuität der Krone und verkörpert die Einheit des Staates.",
  },
  {
    title: "Premierminister",
    abbreviation: "PM",
    english: "Prime Minister",
    description: "Führt die Staatsregierung an, bestimmt die Richtlinien der Politik und koordiniert die Arbeit aller Ministerien.",
  },
  {
    title: "Großherzogliches Parlament",
    abbreviation: "GDPL",
    english: "Grand Ducal Parliament",
    description: "Übt als gewählte Volksvertretung die gesetzgebende Gewalt aus, beschließt den Staatshaushalt und kontrolliert die Arbeit der Regierung.",
  },
]

export default function RegierungsbehordenPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Struktur der Verwaltung</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Die Verwaltungsstruktur des Großherzogtums Pfalzel basiert auf einer Synthese aus historischer Tradition und moderner Rechtsstaatlichkeit. Als zentrales Bindeglied zwischen Krone und Bürgerschaft fördern unsere Behörden die Bewahrung des kulturellen Erbes sowie die effiziente Gestaltung des öffentlichen Lebens. Jedes Ministerium agiert im Sinne der Souveränität und des Gemeinwohls.
          </p>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Die Behörden des Großherzogtums Pfalzel sichern die Verwaltung, Sicherheit und Entwicklung des Staates. Nachfolgend finden Sie eine Übersicht der großherzoglichen Ministerien.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agencies.map((agency) => (
            <article key={agency.abbreviation} className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg">
              <div className="flex items-center justify-between mb-4 gap-4">
                <div>
                  <h2 className="text-xl font-semibold">{agency.title}</h2>
                  <p className="text-sm text-muted-foreground">{agency.english}</p>
                </div>
                <span className="rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                  {agency.abbreviation}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{agency.description}</p>
              <Link
                href={`https://${agency.abbreviation.toLowerCase()}.pfalzel.gd`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/90"
                target="_blank"
                rel="noopener noreferrer"
              >
                {agency.abbreviation.toLowerCase()}.pfalzel.gd
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
