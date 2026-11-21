// Zentrale Inhalte des Staatsportals. Texte hier pflegen – alle Seiten lesen daraus.

export const nav = [
  { href: "/", label: "Start" },
  { href: "/staat", label: "Staat & Symbole" },
  { href: "/regierung", label: "Regierung" },
  { href: "/regionen", label: "Regionen & Karte" },
  { href: "/kennzeichen", label: "Kennzeichen" },
  { href: "/aktuelles", label: "Aktuelles" },
  { href: "https://justiz.pfalzel.gd", label: "Gesetzesportal" },
] as const

export const GOVID_URL = "https://govid.pfalzel.gd"
export const FOUNDING_DATE = { day: 9, month: 5, year: 2026 } // 9. Mai 2026

export const facts = [
  { label: "Gegründet", value: "9. Mai 2026" },
  { label: "Staatsform", value: "Konstitutionell-absolutistische Monarchie" },
  { label: "Staatsoberhaupt", value: "Großherzog Lukas Patrick Meier" },
  { label: "Regionen", value: "8" },
  { label: "Ministerien", value: "14" },
  { label: "Länderdomain", value: ".gd" },
]

/** Steckbrief auf „Staat & Symbole“ */
export const steckbrief = [
  { label: "Amtlicher Name", value: "Großherzogtum Pfalzel" },
  { label: "Staatsform", value: "Konstitutionell-absolutistische Monarchie" },
  { label: "Staatsoberhaupt", value: "Großherzog Lukas Patrick Meier" },
  { label: "Regierungschef", value: "Premierminister Moritz Béla Meier" },
  { label: "Parlament", value: "4 Sitze, gewählt für 4 Jahre" },
  { label: "Hauptstadt", value: "Pfalzeler Hauptstadt" },
  { label: "Amtssprache", value: "Deutsch" },
  { label: "Anerkannte Regionalsprachen", value: "Englisch, Französisch" },
  { label: "Einwohnerbezeichnung", value: "Pfalzeler" },
  { label: "Religion", value: "Säkularer Staat" },
  { label: "Hymne", value: "Hymne des Großherzogtums Pfalzel" },
  { label: "Währung", value: "Pfalzeler Krone (Kr)" },
  { label: "Unabhängigkeit", value: "9. Mai 2026" },
  { label: "Verfassung", value: "11. Mai 2026" },
  { label: "Zeitzone", value: "MEZ (UTC+1), Sommerzeit MESZ (UTC+2)" },
  { label: "Datumsformat", value: "TT.MM.JJJJ" },
  { label: "Straßenverkehr", value: "Rechtsverkehr" },
  { label: "Telefonvorwahl", value: "+49" },
  { label: "Länderdomain", value: ".gd" },
  { label: "Verwaltung", value: "8 Bezirke, 14 Ministerien" },
]

/** Kernpunkte der Verfassung vom 11. Mai 2026 */
export const verfassung = [
  {
    artikel: "Art. 2",
    titel: "Die Staatsgewalt",
    text: "Oberster Träger der Staatsgewalt ist der Großherzog. Alle Staatsorgane handeln in seinem Namen. Er kann Verordnungen mit Gesetzeskraft erlassen, die Regierung ernennen und entlassen, das Parlament auflösen und übt die letzte richterliche Überprüfung aus.",
  },
  {
    artikel: "Art. 3",
    titel: "Acht Bezirke",
    text: "Das Staatsgebiet gliedert sich in acht Bezirke – von der Pfalzeler Hauptstadt über die Waldgebiete bis zum Hafen und den Inselgebieten an der Mosel.",
  },
  {
    artikel: "Grundrechte",
    titel: "Freiheit und Würde",
    text: "Die Verfassung schützt die Würde des Menschen, die Meinungsfreiheit und die Privatsphäre und gewährt ausdrücklich das Recht auf reproduktive Selbstbestimmung (Art. 17).",
  },
  {
    artikel: "Parlament",
    titel: "Die Volksvertretung",
    text: "Das Parlament hat vier Sitze. Seine Mitglieder werden nach Wahl- und Parlamentsgesetz für vier Jahre in unmittelbarer, allgemeiner, gleicher und geheimer Wahl bestimmt. Parteien gibt es derzeit nicht.",
  },
  {
    artikel: "Art. 39, 40, 43",
    titel: "Sicherheit und Verteidigung",
    text: "Das Großherzogtum darf Sicherheits- und Streitkräfte für Zivilschutz und Landesverteidigung unterhalten; den Oberbefehl hat der Großherzog. Der Wehrdienst ist freiwillig.",
  },
  {
    artikel: "Gesetze",
    titel: "StAGP, WahlG, ParlG, StGB",
    text: "Das Staatsangehörigkeitsgesetz regelt Geburt, Abstammung und Einbürgerung. Das Strafgesetzbuch setzt vorrangig auf Geldbußen, gemeinnützige Arbeit und den Entzug von Rechten.",
  },
]

export const timeline = [
  {
    date: "9. Mai 2026",
    title: "Unabhängigkeitserklärung",
    text: "Das Großherzogtum Pfalzel erklärt seine Souveränität und beansprucht die gesamte historische Gemarkung Pfalzel. Der 9. Mai wird zum Nationalfeiertag.",
  },
  {
    date: "11. Mai 2026",
    title: "Verfassung",
    text: "Großherzog Lukas Patrick Meier setzt die Verfassung des Großherzogtums Pfalzel in Kraft – mit Grundrechten, der Ordnung der Staatsgewalt und den acht Bezirken. Der 11. Mai ist seitdem Tag der Verfassung.",
  },
  {
    date: "Juni 2026",
    title: "Staatsangehörigkeit, Wahlen, Parlament",
    text: "Mit dem Staatsangehörigkeitsgesetz (StAGP), dem Wahlgesetz (WahlG) und dem Parlamentsgesetz (ParlG) erhält der Staat seine wichtigsten Grundgesetze.",
  },
  {
    date: "2026",
    title: "Flagge und Wappen",
    text: "Das historische Pfalzeler Wappen – weißes Kreuz auf rotem Schild – wird Herzstück der neuen Nationalflagge.",
  },
  {
    date: "2026",
    title: "Staatsorgane und Ministerien",
    text: "Großherzog, Premierminister und Parlament bilden die Staatsspitze; 14 Ministerien nehmen ihre Arbeit auf.",
  },
  {
    date: "2026",
    title: "Kennzeichensystem",
    text: "Acht Regionalkürzel und drei Regierungskennzeichen ordnen den Fahrzeugverkehr des Großherzogtums.",
  },
  {
    date: "2026",
    title: "GovID",
    text: "Mit der GovID erhalten Bürgerinnen und Bürger einen digitalen Zugang zu staatlichen Diensten.",
  },
]

export const notices = [
  {
    date: "1. November 2026",
    tag: "Portal",
    title: "Neues Staatsportal ist online",
    text: "Neu gestaltet, schneller durchsuchbar (Strg + K) und mit Dunkelmodus.",
    href: "/",
  },
  {
    date: "1. November 2026",
    tag: "Verkehr",
    title: "Kennzeichen jetzt online prüfen",
    text: "Der neue Kennzeichen-Konfigurator zeigt sofort, ob eine Kombination gültig ist.",
    href: "/kennzeichen#konfigurator",
  },
  {
    date: "1. November 2026",
    tag: "Verwaltung",
    title: "Behördenverzeichnis mit Suche",
    text: "Alle Staatsorgane und Ministerien mit Zuständigkeiten und Webadressen auf einer Seite.",
    href: "/regierung",
  },
]

export const flagElements = [
  {
    id: "gold",
    name: "Gold",
    swatch: "#FFCB21",
    meaning: "Reichtum, Weisheit und die strahlende Zukunft des Großherzogtums.",
    spot: { x: 78, y: 18 },
  },
  {
    id: "rot",
    name: "Rot",
    swatch: "#FF0000",
    meaning: "Mut, Stärke und das Blut der Vorfahren, die das Land verteidigt haben.",
    spot: { x: 22, y: 84 },
  },
  {
    id: "band",
    name: "Schwarzes Band mit vier Sternen",
    swatch: "#000000",
    meaning: "Das diagonale Band trägt vier goldene Sterne – einen für jede der vier historischen Regionen.",
    spot: { x: 10, y: 29 },
  },
  {
    id: "wappen",
    name: "Das Wappen im Zentrum",
    swatch: "#E2001A",
    meaning: "Das Pfalzeler Wappen – weißes Kreuz auf rotem Schild – verbindet alle Elemente zur nationalen Einheit.",
    spot: { x: 58, y: 22 },
  },
]

export type Region = {
  code: string
  name: string
  type: string
  description: string
  plate: string
  /** Amtsträger der Region, soweit ernannt */
  officials?: string
}

export const regions: Region[] = [
  {
    code: "P",
    name: "Pfalzeler Hauptstadt",
    type: "Hauptstadt",
    description: "Administratives und kulturelles Zentrum des Großherzogtums. Sitz der Staatsorgane.",
    plate: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P-1-z6CON58GNheIiQAFkBT4YajlKCux8D.png",
  },
  {
    code: "PW",
    name: "Pfalzeler Wald",
    type: "Waldgebiet",
    description: "Ausgedehntes Waldgebiet im Herzen des Landes, bekannt für seine natürliche Schönheit und historische Forstwirtschaft.",
    plate: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PW-1-EGEBiZrbbiCAbD9V8k1jhSdcpwyUDK.png",
  },
  {
    code: "BW",
    name: "Bauscher Waldgebiete",
    officials: "Landgräfin des hohen Berges",
    type: "Waldgebiet",
    description: "Waldreiche Region im Norden des Großherzogtums mit bedeutender ökologischer Vielfalt.",
    plate: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BW-1-sjG4v9Gp09CEsApsszWZUY5qWHZl8X.png",
  },
  {
    code: "B",
    name: "Auf der Bausch",
    officials: "Landgräfin des hohen Berges",
    type: "Region",
    description: "Historisches Gebiet mit traditioneller Architektur und landwirtschaftlicher Bedeutung.",
    plate: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B-1-iwJHcskoO8oC4trc0ywikaem79sssr.png",
  },
  {
    code: "IT",
    name: "Inneres Territorium",
    officials: "Vogt der langen Straße",
    type: "Kerngebiet",
    description: "Kerngebiet des Großherzogtums mit wichtigen administrativen Einrichtungen.",
    plate: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IT-1-cSadUImPrgilnEb8YlvDh1K53Mom7D.png",
  },
  {
    code: "I",
    name: "Pfalzeler Inselgebiete",
    type: "Inselregion",
    description: "Die maritimen Territorien des Großherzogtums mit eigener Verwaltungsstruktur.",
    plate: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/I1-fetBiQzfZEDArFa9gBPFk2xG1uiHtf.png",
  },
  {
    code: "HA",
    name: "Hafen",
    type: "Hafenregion",
    description: "Das wirtschaftliche Tor des Großherzogtums mit Zugang zu internationalen Handelsrouten.",
    plate: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HA-1-Rabsa79tRUaLytWPVG3lS5FtCxQuSq.png",
  },
  {
    code: "LA",
    name: "Loricher Außengebiet",
    type: "Außengebiet",
    description: "Periphere Region mit eigenständiger kultureller Identität.",
    plate: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LA-1-ImhuNhvZLiJUXy8ZfLoOPmopfnp3Y6.png",
  },
]

export const governmentPlates = [
  {
    code: "1",
    holder: "Großherzog",
    text: "Ausschließlich dem Großherzog vorbehalten – Zeichen der höchsten staatlichen Autorität.",
    plate: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Kv9Lc1FotmAdevd36RjRmngumJUKAG.png",
  },
  {
    code: "2",
    holder: "Premierminister",
    text: "Kennzeichnet die Dienstfahrzeuge des Regierungschefs.",
    plate: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-HpCy039n09Kpj1RltR0NLS5piLMvfb.png",
  },
  {
    code: "3",
    holder: "Landgräfin des hohen Berges",
    text: "Vorbehalten für einen der ältesten Adelstitel des Großherzogtums.",
    plate: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-5e6iZ76wZpraHeSJE2nEWP33W8DAHG.png",
  },
]

export type Authority = {
  title: string
  abbreviation: string
  english: string
  description: string
  logo: string
  group: "Staatsorgan" | "Ministerium"
  area?: "Staat & Recht" | "Wirtschaft & Infrastruktur" | "Gesellschaft"
}

const logo = (file: string) => `/images/regierungsbehoerden/${file}`

export const authorities: Authority[] = [
  {
    title: "Großherzog von Pfalzel",
    abbreviation: "GD",
    english: "Grand Duke of Pfalzel",
    description: "Staatsoberhaupt und oberster Träger der Staatsgewalt (Art. 2 der Verfassung). Erlässt Verordnungen mit Gesetzeskraft, ernennt und entlässt die Regierung, kann das Parlament auflösen und hat den Oberbefehl über die Streitkräfte.",
    logo: logo("logo-grossherzog.png"),
    group: "Staatsorgan",
  },
  {
    title: "Premierminister",
    abbreviation: "PM",
    english: "Prime Minister",
    description: "Vom Großherzog ernannt. Führt die Staatsregierung, bestimmt die Richtlinien der Politik und koordiniert die Arbeit aller Ministerien.",
    logo: logo("logo-premierminister.png"),
    group: "Staatsorgan",
  },
  {
    title: "Großherzogliches Parlament",
    abbreviation: "GDPL",
    english: "Grand Ducal Parliament",
    description: "Gewählte Volksvertretung mit vier Sitzen, gewählt für vier Jahre in unmittelbarer, allgemeiner, gleicher und geheimer Wahl. Teilt sich die Gesetzgebung mit dem Großherzog und kontrolliert die Regierung.",
    logo: logo("logo-parlament.png"),
    group: "Staatsorgan",
  },
  {
    title: "Großherzogliches Ministerium des Inneren",
    abbreviation: "GMI",
    english: "Grand Ducal Ministry of the Interior",
    description: "Sorgt für innere Sicherheit und Ordnung, führt das Personenstandswesen, stellt Ausweise und Pässe aus und setzt das Staatsangehörigkeitsgesetz um.",
    logo: logo("Logo_GMI.png"),
    group: "Ministerium",
    area: "Staat & Recht",
  },
  {
    title: "Großherzogliches Ministerium für Auswärtige Angelegenheiten",
    abbreviation: "GMAA",
    english: "Grand Ducal Ministry of Foreign Affairs",
    description: "Vertritt das Großherzogtum mit einer friedlichen Außenpolitik, pflegt diplomatische Beziehungen und schließt internationale Verträge.",
    logo: logo("Logo_GMAA.png"),
    group: "Ministerium",
    area: "Staat & Recht",
  },
  {
    title: "Ministerium der Finanzen",
    abbreviation: "MF",
    english: "Ministry of Finance",
    description: "Verwaltet die Staatskasse, verantwortet Haushalt und Steuern und beaufsichtigt die Pfalzeler Staatsbank.",
    logo: logo("Logo_MF.png"),
    group: "Ministerium",
    area: "Wirtschaft & Infrastruktur",
  },
  {
    title: "Ministerium der Justiz",
    abbreviation: "MJ",
    english: "Ministry of Justice",
    description: "Führt das Rechtsregister mit allen Gesetzen, organisiert die Gerichte und wacht über den Rechtsstaat.",
    logo: logo("Logo_MJ.png"),
    group: "Ministerium",
    area: "Staat & Recht",
  },
  {
    title: "Ministerium der Verteidigung",
    abbreviation: "MV",
    english: "Ministry of Defence",
    description: "Verantwortet die Verteidigung und die Unversehrtheit des Staatsgebiets. Der Wehrdienst ist freiwillig.",
    logo: logo("Logo_MV.png"),
    group: "Ministerium",
    area: "Staat & Recht",
  },
  {
    title: "Ministerium für Verkehr und Bau",
    abbreviation: "MVB",
    english: "Ministry of Transport and Infrastructure",
    description: "Plant und baut Straßen und Schienen und gestaltet die Mobilität der Zukunft.",
    logo: logo("Logo_MVB.png"),
    group: "Ministerium",
    area: "Wirtschaft & Infrastruktur",
  },
  {
    title: "Ministerium für Bildung und Forschung",
    abbreviation: "MBF",
    english: "Ministry of Education and Research",
    description: "Fördert Bildung von der Schule bis zur Hochschule und treibt Innovationen voran.",
    logo: logo("Logo_MBF.png"),
    group: "Ministerium",
    area: "Gesellschaft",
  },
  {
    title: "Ministerium für Gesundheit",
    abbreviation: "MG",
    english: "Ministry of Health",
    description: "Sorgt für die medizinische Versorgung und das öffentliche Gesundheitswesen.",
    logo: logo("Logo_MG.png"),
    group: "Ministerium",
    area: "Gesellschaft",
  },
  {
    title: "Hofministerium",
    abbreviation: "GDC",
    english: "Ministry of the Grand Ducal Court",
    description: "Führt den großherzoglichen Haushalt, richtet Staatszeremonien aus und betreut die Ritterorden sowie das Hausgesetz des Hauses Meier.",
    logo: logo("Logo_GDC.png"),
    group: "Ministerium",
    area: "Staat & Recht",
  },
  {
    title: "Ministerium für Wirtschaft und Energie",
    abbreviation: "MWE",
    english: "Ministry of Economic Affairs and Energy",
    description: "Führt das Gewerberegister, stärkt die heimische Wirtschaft und sichert die Energieversorgung.",
    logo: logo("Logo_MWE.png"),
    group: "Ministerium",
    area: "Wirtschaft & Infrastruktur",
  },
  {
    title: "Ministerium für Heimat- und Zivilschutz",
    abbreviation: "MHZS",
    english: "Ministry of Homeland and Civil Protection",
    description: "Schützt die Bevölkerung vor Katastrophen, Notlagen und Störungen des öffentlichen Lebens.",
    logo: logo("Logo_MHZS.png"),
    group: "Ministerium",
    area: "Staat & Recht",
  },
  {
    title: "Ministerium für Umwelt und Landwirtschaft",
    abbreviation: "MUL",
    english: "Ministry of Environment and Agriculture",
    description: "Wahrt die natürlichen Lebensgrundlagen, betreut Forst und Landwirtschaft im Pfalzeler Wald und in den Bauscher Waldgebieten und fördert nachhaltige Landwirtschaft.",
    logo: logo("Logo_MUL.png"),
    group: "Ministerium",
    area: "Wirtschaft & Infrastruktur",
  },
  {
    title: "Ministerium für Arbeit und Soziales",
    abbreviation: "MAS",
    english: "Ministry of Labour and Social Affairs",
    description: "Kümmert sich um faire Arbeitsbedingungen, den Arbeitsmarkt und soziale Absicherung.",
    logo: logo("Logo_MAS.png"),
    group: "Ministerium",
    area: "Gesellschaft",
  },
  {
    title: "Ministerium für Familie und Jugend",
    abbreviation: "MFJ",
    english: "Ministry of Family and Youth",
    description: "Unterstützt Familien, fördert Kinder und schafft Rahmenbedingungen für die junge Generation.",
    logo: logo("Logo_MFJ.png"),
    group: "Ministerium",
    area: "Gesellschaft",
  },
]

export const authorityUrl = (a: Pick<Authority, "abbreviation">) =>
  `https://${a.abbreviation.toLowerCase()}.pfalzel.gd`

export const faq = [
  {
    q: "Was ist das Großherzogtum Pfalzel?",
    a: "Eine Mikronation in Form einer konstitutionell-absolutistischen Monarchie im Westen Deutschlands, gegründet am 9. Mai 2026. Sie umfasst die gesamte historische Gemarkung Pfalzel an der Mosel. Staatsoberhaupt ist Großherzog Lukas Patrick Meier.",
  },
  {
    q: "Wann ist der Nationalfeiertag?",
    a: "Jedes Jahr am 9. Mai, dem Tag der Unabhängigkeitserklärung. Zwei Tage später, am 11. Mai, folgt der Tag der Verfassung. Den Countdown finden Sie auf der Startseite.",
  },
  {
    q: "Wie werde ich Staatsbürger?",
    a: "Das Staatsangehörigkeitsgesetz (StAGP) regelt den Erwerb durch Geburt, durch Abstammung und durch Einbürgerung. Anträge stellen Sie über die GovID.",
  },
  {
    q: "Welche Sprachen werden gesprochen?",
    a: "Amtssprache ist Deutsch. Englisch und Französisch sind als Regionalsprachen anerkannt.",
  },
  {
    q: "Gibt es politische Parteien?",
    a: "Derzeit nicht. Das Parlament hat vier Sitze; seine Mitglieder werden für vier Jahre unmittelbar vom Volk gewählt.",
  },
  {
    q: "Wie sind die Kennzeichen aufgebaut?",
    a: "Nationalflagge, Regionalkürzel (z. B. P für die Hauptstadt), eine Buchstabenkombination und eine Nummer – etwa P-CM 74. Im Konfigurator können Sie Kombinationen prüfen.",
  },
  {
    q: "Wie erreiche ich eine Behörde?",
    a: "Jede Behörde hat eine eigene Adresse unter pfalzel.gd, zum Beispiel gmi.pfalzel.gd. Das vollständige Verzeichnis steht unter „Regierung“.",
  },
  {
    q: "Was ist die GovID?",
    a: "Die GovID ist der digitale Zugang zu staatlichen Diensten des Großherzogtums.",
  },
]

export const contact = {
  phone: "+49 651 63 5555 9000",
  mail: "info@pfalzel.gd",
}

// Angaben gemäß § 5 DDG (übernommen von mal.lu)
export const imprint = {
  name: "Moritz Béla Meier",
  street: "Pfalzeler Str. 5",
  city: "54293 Trier",
  country: "Deutschland",
  phone: "+49 651 6860593",
  mail: "moritz@mal.lu",
}
