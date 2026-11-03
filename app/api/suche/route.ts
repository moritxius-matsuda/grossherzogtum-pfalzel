import { NextResponse } from "next/server"
import { beitraege } from "@/lib/blog"

// Suchindex für die Schnellsuche (Strg + K): Gesetze aus dem Gesetzesportal und Nachrichten.
// Serverseitig abgerufen und 1 Minute zwischengespeichert.
export const revalidate = 60

const JUSTIZ = (process.env.JUSTIZ_URL || "https://justiz.pfalzel.gd").replace(/\/+$/, "")

type Gesetz = { id: number; titel: string; kurztitel: string | null; gesetznummer: string | null; kategorie: string | null; geltung: string }

async function gesetze(): Promise<Gesetz[]> {
  try {
    const res = await fetch(`${JUSTIZ}/api/gesetze/public`, { next: { revalidate } })
    if (!res.ok) return []
    const d = await res.json()
    return Array.isArray(d) ? d : []
  } catch {
    return []
  }
}

export async function GET() {
  const [g, b] = await Promise.all([gesetze(), beitraege()])
  return NextResponse.json({
    gesetze: g.map((x) => ({
      titel: x.titel,
      kurztitel: x.kurztitel,
      nummer: x.gesetznummer,
      kategorie: x.kategorie,
      geltung: x.geltung,
      href: `${JUSTIZ}/gesetze/${encodeURIComponent(x.kurztitel || String(x.id))}`,
    })),
    beitraege: b.map((x) => ({
      titel: x.titel,
      teaser: x.teaser,
      behoerde: x.behoerde,
      datum: x.veroeffentlicht_am,
      href: `/aktuelles/${x.slug}`,
    })),
  })
}
