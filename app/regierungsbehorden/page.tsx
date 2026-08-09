import { Header } from "@/components/header"
import Image from "next/image"
import Link from "next/link"

const specialAuthorities = [
  {
    title: "Großherzog von Pfalzel",
    abbreviation: "GD",
    english: "Grand Duke of Pfalzel",
    description: "Dient als repräsentatives und konstitutives Staatsoberhaupt des Großherzogtums, wahrt die Kontinuität der Krone und verkörpert die Einheit des Staates.",
    logo: "/images/regierungsbehoerden/logo-grossherzog.png",
  },
  {
    title: "Premierminister",
    abbreviation: "PM",
    english: "Prime Minister",
    description: "Führt die Staatsregierung an, bestimmt die Richtlinien der Politik und koordiniert die Arbeit aller Ministerien.",
    logo: "/images/regierungsbehoerden/logo-premierminister.png",
  },
  {
    title: "Großherzogliches Parlament",
    abbreviation: "GDPL",
    english: "Grand Ducal Parliament",
    description: "Übt als gewählte Volksvertretung die gesetzgebende Gewalt aus, beschließt den Staatshaushalt und kontrolliert die Arbeit der Regierung.",
    logo: "/images/regierungsbehoerden/logo-parlament.png",
  },
]

const ministries = [
  {
    title: "Großherzogliches Ministerium des Inneren",
    abbreviation: "GMI",
    english: "Grand Ducal Ministry of the Interior",
    description: "Sorgt für die innere Sicherheit, Ordnung und die Verwaltung des Landes.",
    logo: "/images/regierungsbehoerden/Logo_GMI.png",
  },
  {
    title: "Großherzogliches Ministerium für Auswärtige Angelegenheiten",
    abbreviation: "GMAA",
    english: "Grand Ducal Ministry of Foreign Affairs",
    description: "Vertritt die Interessen des Großherzogtums auf der internationalen Bühne und pflegt diplomatische Beziehungen.",
    logo: "/images/regierungsbehoerden/Logo_GMAA.png",
  },
  {
    title: "Ministerium der Finanzen",
    abbreviation: "MF",
    english: "Ministry of Finance",
    description: "Verwaltet die Staatskasse und ist für den Haushalt, Steuern sowie die finanzielle Stabilität zuständig.",
    logo: "/images/regierungsbehoerden/Logo_MF.png",
  },
  {
    title: "Ministerium der Justiz",
    abbreviation: "MJ",
    english: "Ministry of Justice",
    description: "Garantiert die Einhaltung der Gesetze, leitet das Gerichtswesen und wacht über den Rechtsstaat.",
    logo: "/images/regierungsbehoerden/Logo_MJ.png",
  },
  {
    title: "Ministerium der Verteidigung",
    abbreviation: "MV",
    english: "Ministry of Defence",
    description: "Verantwortet die äußere Sicherheit des Landes und führt die Streitkräfte.",
    logo: "/images/regierungsbehoerden/Logo_MV.png",
  },
  {
    title: "Ministerium für Verkehr und Bau",
    abbreviation: "MVB",
    english: "Ministry of Transport and Infrastructure",
    description: "Plant und baut Straßen, Schienen sowie die physische Mobilität der Zukunft.",
    logo: "/images/regierungsbehoerden/Logo_MVB.png",
  },
  {
    title: "Ministerium für Bildung und Forschung",
    abbreviation: "MBF",
    english: "Ministry of Education and Research",
    description: "Fördert Bildung von der Schule bis zur Hochschule und treibt wissenschaftliche Innovationen voran.",
    logo: "/images/regierungsbehoerden/Logo_MBF.png",
  },
  {
    title: "Ministerium für Gesundheit",
    abbreviation: "MG",
    english: "Ministry of Health",
    description: "Sorgt für die medizinische Versorgung der Bevölkerung und das öffentliche Gesundheitswesen.",
    logo: "/images/regierungsbehoerden/Logo_MG.png",
  },
  {
    title: "Hofministerium",
    abbreviation: "GDC",
    english: "Ministry of the Grand Ducal Court",
    description: "Organisiert die Angelegenheiten des Großherzogs und verbindet die Krone mit den staatlichen Institutionen.",
    logo: "/images/regierungsbehoerden/Logo_GDC.png",
  },
  {
    title: "Ministerium für Wirtschaft und Energie",
    abbreviation: "MWE",
    english: "Ministry of Economic Affairs and Energy",
    description: "Stärkt die heimische Wirtschaft, fördert Unternehmen und sichert die Energieversorgung.",
    logo: "/images/regierungsbehoerden/Logo_MWE.png",
  },
  {
    title: "Ministerium für Heimat- und Zivilschutz",
    abbreviation: "MHZS",
    english: "Ministry of Homeland and Civil Protection",
    description: "Schützt die Bevölkerung vor Katastrophen, Notlagen und Störungen des öffentlichen Lebens.",
    logo: "/images/regierungsbehoerden/Logo_MHZS.png",
  },
  {
    title: "Ministerium für Umwelt und Landwirtschaft",
    abbreviation: "MUL",
    english: "Ministry of Environment and Agriculture",
    description: "Wahrt die natürlichen Lebensgrundlagen, schützt das Klima und fördert eine nachhaltige Landwirtschaft.",
    logo: "/images/regierungsbehoerden/Logo_MUL.png",
  },
  {
    title: "Ministerium für Arbeit und Soziales",
    abbreviation: "MAS",
    english: "Ministry of Labour and Social Affairs",
    description: "Kümmert sich um faire Arbeitsbedingungen, den Arbeitsmarkt und die soziale Absicherung.",
    logo: "/images/regierungsbehoerden/Logo_MAS.png",
  },
  {
    title: "Ministerium für Familie und Jugend",
    abbreviation: "MFJ",
    english: "Ministry of Family and Youth",
    description: "Unterstützt Familien, fördert Kinder und schafft Rahmenbedingungen für die jüngere Generation.",
    logo: "/images/regierungsbehoerden/Logo_MFJ.png",
  },
]

export default function RegierungsbehordenPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Regierungsbehörden des Großherzogtums</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Die zentrale Leitung des Großherzogtums Pfalzel gliedert sich in drei unabhängige Staatsorgane. Diese Karrieren bilden das Fundament unserer Staatsstruktur und sind gleichzeitig der direkte Draht zur Bevölkerung.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-14">
        <div className="grid gap-6 md:grid-cols-3">
          {specialAuthorities.map((authority) => (
            <article key={authority.abbreviation} className="rounded-[2rem] border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg">
              <div className="flex h-28 items-center justify-center rounded-3xl bg-muted p-4 mb-6">
                <Image
                  src={authority.logo}
                  alt={`Logo ${authority.title}`}
                  width={150}
                  height={150}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-semibold">{authority.title}</h2>
                <p className="text-sm text-muted-foreground">{authority.english}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{authority.description}</p>
              <Link
                href={`https://${authority.abbreviation.toLowerCase()}.pfalzel.gd`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/90"
                target="_blank"
                rel="noopener noreferrer"
              >
                {authority.abbreviation.toLowerCase()}.pfalzel.gd
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-base font-semibold uppercase tracking-[0.3em] text-primary">Weitere Ministerien</p>
          <h2 className="mt-3 text-3xl font-semibold">Unsere Verwaltung auf einen Blick</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ministries.map((agency) => (
            <article key={agency.abbreviation} className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg">
              <div className="flex items-center justify-between mb-4 gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-muted p-3">
                    <Image
                      src={agency.logo}
                      alt={`Logo ${agency.abbreviation}`}
                      width={56}
                      height={56}
                      className="h-full w-auto object-contain"
                      priority
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{agency.title}</h3>
                    <p className="text-sm text-muted-foreground">{agency.english}</p>
                  </div>
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
