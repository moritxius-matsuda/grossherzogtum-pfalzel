// Blogbeiträge aus dem Zentralregister (Verwaltung dort unter „Blogbeiträge“).
// Abruf serverseitig über die öffentliche Schnittstelle des Zentralregisters, jede Minute aktualisiert.
import { authorities, type Authority } from "@/lib/site-data"

const QUELLE = (process.env.BLOG_API_URL || "https://justiz.pfalzel.gd/api/blog/public").replace(/\/+$/, "")
const AKTUALISIEREN = 60

export type Beitrag = {
  slug: string
  titel: string
  teaser: string | null
  inhalt?: string | null
  behoerde: string
  veroeffentlicht_am: string
  hat_bild: boolean
  version: string | number
}

/**
 * Abrufadresse mit Minuten-Stempel: Weder der Daten-Cache von Next.js noch der CDN-Cache vor dem
 * Zentralregister können so eine alte Antwort (z. B. die leere Liste aus dem Build) länger als
 * eine Minute festhalten.
 */
const frisch = (url: string) => `${url}${url.includes("?") ? "&" : "?"}t=${Math.floor(Date.now() / (AKTUALISIEREN * 1000))}`

export async function beitraege(): Promise<Beitrag[]> {
  try {
    const res = await fetch(frisch(QUELLE), { next: { revalidate: AKTUALISIEREN } })
    if (!res.ok) {
      console.error(`Blogbeiträge: ${QUELLE} antwortet mit ${res.status}`)
      return []
    }
    const d = await res.json()
    return Array.isArray(d) ? d : []
  } catch (err) {
    console.error("Blogbeiträge nicht abrufbar:", err)
    return []
  }
}

export async function beitrag(slug: string): Promise<Beitrag | null> {
  try {
    const res = await fetch(frisch(`${QUELLE}/${encodeURIComponent(slug)}`), { next: { revalidate: AKTUALISIEREN } })
    if (!res.ok) return null
    return (await res.json()) as Beitrag
  } catch {
    return null
  }
}

export const bildUrl = (b: Pick<Beitrag, "slug" | "hat_bild" | "version">) =>
  b.hat_bild ? `${QUELLE}/${encodeURIComponent(b.slug)}/bild?v=${b.version}` : null

export const behoerde = (kuerzel: string): Authority | undefined => authorities.find((a) => a.abbreviation === kuerzel)

export const datumLang = (d: string) =>
  new Date(d).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Berlin" })
