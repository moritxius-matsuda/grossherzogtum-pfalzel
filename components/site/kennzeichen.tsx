"use client"

// Kennzeichen-Darstellung nach der amtlichen Vorlage (2080 × 440 px), wie im Zentralregister:
// Grund (Streifen, Flagge, „PF“) und Regionsblock (Wappen + Regionsname) stammen aus der Vorlage,
// Kürzel, Ziffern und Buchstaben werden in DIN-ähnlicher Schrift gesetzt.
import { useEffect, useRef } from "react"
import { Barlow } from "next/font/google"
import { formatKennzeichen, istRegion, type Kennzeichen } from "@/lib/kennzeichen"

const schrift = Barlow({ weight: ["700"], subsets: ["latin"], display: "swap" })
const GEWICHT = 700

// Maße aus der Vorlage
const W = 2080
const H = 440
const GRUNDLINIE = 362
const VERSALHOEHE = 275
const MITTE = 1135 // Mitte der weißen Fläche rechts vom „PF“-Feld
const SLOT = 232 // Platz für den Regionsblock (Bild 240 px)
const LAUFWEITE = 0.94 // Barlow ist etwas breiter als die DIN-Schrift der Vorlage
const LUECKE = 120 // Abstand zwischen Ziffern und Buchstaben
const MAX_BREITE = 1780

const bilder = new Map<string, Promise<HTMLImageElement>>()
function bild(src: string) {
  if (!bilder.has(src)) {
    bilder.set(
      src,
      new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = () => {
          bilder.delete(src)
          reject(new Error(`Bild ${src} fehlt`))
        }
        img.src = src
      }),
    )
  }
  return bilder.get(src)!
}

/** Zeichnet das Kennzeichen in ein Canvas. Ohne bekanntes Regionskürzel steht nur das Wappen. */
export async function zeichneKennzeichen(canvas: HTMLCanvasElement, k: Kennzeichen) {
  const familie = schrift.style.fontFamily
  await document.fonts.load(`${GEWICHT} 100px ${familie}`)
  const mitRegion = istRegion(k.region)
  const [grund, block] = await Promise.all([
    bild("/kennzeichen/grund.png"),
    bild(mitRegion ? `/kennzeichen/region-${k.region}.png` : "/kennzeichen/wappen.png"),
  ])
  const wappenH = 190
  const wappenW = mitRegion ? 0 : (block.width * wappenH) / block.height
  const slot = mitRegion ? SLOT : wappenW + 110

  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext("2d")!
  ctx.clearRect(0, 0, W, H)
  ctx.drawImage(grund, 0, 0, W, H)

  // Schriftgröße so wählen, dass die Versalhöhe der Vorlage entspricht
  ctx.font = `${GEWICHT} 100px ${familie}`
  const groesse = (100 * VERSALHOEHE) / ctx.measureText("H").actualBoundingBoxAscent
  ctx.font = `${GEWICHT} ${groesse}px ${familie}`
  const sperrung = groesse * 0.02
  const breite = (s: string) => [...s].reduce((w, ch, i) => w + ctx.measureText(ch).width + (i ? sperrung : 0), 0)

  const luecke = k.buchstaben ? LUECKE : 0
  const text = breite(k.region) + breite(k.nummer) + luecke + breite(k.buchstaben)
  const f = Math.min(LAUFWEITE, (MAX_BREITE - slot) / text)
  let x = MITTE - (text * f + slot) / 2

  ctx.fillStyle = "#000"
  ctx.textBaseline = "alphabetic"
  const schreibe = (s: string) => {
    if (!s) return
    ctx.save()
    ctx.translate(x, GRUNDLINIE)
    ctx.scale(f, 1)
    let cx = 0
    for (const ch of s) {
      ctx.fillText(ch, cx, 0)
      cx += ctx.measureText(ch).width + sperrung
    }
    ctx.restore()
    x += (cx - sperrung) * f
  }

  schreibe(k.region)
  if (mitRegion) ctx.drawImage(block, x - (240 - SLOT) / 2, 88, 240, 270)
  else ctx.drawImage(block, x + (slot - wappenW) / 2, GRUNDLINIE - VERSALHOEHE / 2 - wappenH / 2, wappenW, wappenH)
  x += slot
  schreibe(k.nummer)
  x += luecke * f
  schreibe(k.buchstaben)
}

/** Kennzeichen als Bild, skaliert auf die Breite des Containers */
export function KennzeichenBild({ kennzeichen, className = "" }: { kennzeichen: Kennzeichen; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)
  const { region, nummer, buchstaben } = kennzeichen
  useEffect(() => {
    if (ref.current) zeichneKennzeichen(ref.current, { region, nummer, buchstaben }).catch(console.error)
  }, [region, nummer, buchstaben])
  return (
    <canvas
      ref={ref}
      width={W}
      height={H}
      role="img"
      aria-label={`Kennzeichen ${formatKennzeichen(kennzeichen)}`}
      data-no-translate
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      className={`block h-auto w-full select-none rounded-[0.4rem] shadow-[0_0.6rem_1.4rem_-0.6rem_rgba(0,0,0,0.35)] ${className}`}
      style={{ aspectRatio: `${W} / ${H}` }}
    />
  )
}
