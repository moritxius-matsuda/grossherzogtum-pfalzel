// Kennzeichen des Großherzogtums Pfalzel (wie im Zentralregister):
//   Regulär:  [Regionskürzel] [3 Ziffern] [2 Buchstaben], z. B. „P 611 IY“
//   Sonder:   [0–3 Buchstaben] [1–4 Ziffern] [0–2 Buchstaben], z. B. „M 213“ oder „1“
import { regions } from "@/lib/site-data"

export type Kennzeichen = { region: string; nummer: string; buchstaben: string }

export const istRegion = (code: string) => regions.some((r) => r.code === code)

export const formatKennzeichen = (k: Kennzeichen) => [k.region, k.nummer, k.buchstaben].filter(Boolean).join(" ")

/** Sonderkennzeichen (umfasst auch reguläre); null, wenn ungültig */
export function parseSonder(text: string): Kennzeichen | null {
  const m = /^\s*([A-Za-z]{1,3})?[\s-]*(\d{1,4})[\s-]*([A-Za-z]{1,2})?\s*$/.exec(text)
  if (!m || /^0+$/.test(m[2])) return null
  return { region: (m[1] ?? "").toUpperCase(), nummer: m[2], buchstaben: (m[3] ?? "").toUpperCase() }
}

const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export function zufallsKennzeichen(region?: string): Kennzeichen {
  const r = region ?? regions[Math.floor(Math.random() * regions.length)].code
  const b = () => ABC[Math.floor(Math.random() * ABC.length)]
  return { region: r, nummer: String(100 + Math.floor(Math.random() * 900)), buchstaben: b() + b() }
}
