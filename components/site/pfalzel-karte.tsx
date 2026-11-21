"use client"

// Interaktive Karte des Großherzogtums: Staatsgebiet und Regionen auf OpenStreetMap,
// Regionen anklicken, Flächen, Standort prüfen („Bin ich in Pfalzel?“).

import Link from "next/link"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import type * as Leaflet from "leaflet"
import { ArrowRight, Crosshair, Maximize2, Minimize2, RotateCcw } from "lucide-react"
import { regions } from "@/lib/site-data"
import { pfalzelEinzeichnen } from "@/lib/karte/pfalzel-grenzen"
import { KennzeichenBild } from "./kennzeichen"

type Ring = [number, number][] // [länge, breite] wie in GeoJSON
type Feature = { properties: { art: "staat" | "region"; id?: string; code?: string; name: string }; geometry: { type: "Polygon" | "MultiPolygon"; coordinates: any } }

const GEBIET: Leaflet.LatLngBoundsExpression = [[49.7771, 6.6317], [49.8201, 6.7044]]
const flaechenRinge = (g: Feature["geometry"]): Ring[][] => (g.type === "Polygon" ? [g.coordinates] : g.coordinates)

/** Fläche in km² (sphärisch, Außenring minus Löcher) */
function flaeche(g: Feature["geometry"]) {
  const R = 6371.0088
  const ring = (r: Ring) => {
    let s = 0
    for (let i = 0; i < r.length - 1; i++) {
      const [x1, y1] = r[i], [x2, y2] = r[i + 1]
      s += ((x2 - x1) * Math.PI) / 180 * (2 + Math.sin((y1 * Math.PI) / 180) + Math.sin((y2 * Math.PI) / 180))
    }
    return Math.abs((s * R * R) / 2)
  }
  return flaechenRinge(g).reduce((sum, p) => sum + ring(p[0]) - p.slice(1).reduce((a, h) => a + ring(h), 0), 0)
}

/** Umfang in km */
function umfang(g: Feature["geometry"]) {
  const km = (a: [number, number], b: [number, number]) => {
    const r = Math.PI / 180, dLat = (b[1] - a[1]) * r, dLon = (b[0] - a[0]) * r
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a[1] * r) * Math.cos(b[1] * r) * Math.sin(dLon / 2) ** 2
    return 2 * 6371.0088 * Math.asin(Math.sqrt(h))
  }
  return flaechenRinge(g).reduce((s, p) => s + p[0].slice(1).reduce((t, pt, i) => t + km(p[0][i], pt), 0), 0)
}

function liegtIn(lon: number, lat: number, g: Feature["geometry"]) {
  const inRing = (r: Ring) => {
    let drin = false
    for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
      const [xi, yi] = r[i], [xj, yj] = r[j]
      if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) drin = !drin
    }
    return drin
  }
  return flaechenRinge(g).some((p) => inRing(p[0]) && !p.slice(1).some(inRing))
}

const zahl = (n: number, stellen = 2) => n.toLocaleString("de-DE", { minimumFractionDigits: stellen, maximumFractionDigits: stellen })

type Standort = { status: "suche" } | { status: "fehler"; text: string } | { status: "da"; lat: number; lon: number; region: string | null; drin: boolean; genau: number }

export function PfalzelKarte() {
  const router = useRouter()
  const params = useSearchParams()
  const box = useRef<HTMLDivElement>(null)
  const rahmen = useRef<HTMLDivElement>(null)
  const karte = useRef<Leaflet.Map | null>(null)
  const L = useRef<typeof Leaflet | null>(null)
  const flaechen = useRef<Record<string, Leaflet.GeoJSON>>({})
  const standortEbene = useRef<Leaflet.LayerGroup | null>(null)
  const [geo, setGeo] = useState<Feature[] | null>(null)
  const [bereit, setBereit] = useState(false)
  const [ueber, setUeber] = useState<string | null>(null)
  const [vollbild, setVollbild] = useState(false)
  const [standort, setStandort] = useState<Standort | null>(null)

  const gewaehlt = params.get("r")
  const aktiv = regions.find((r) => r.code === gewaehlt) ?? null
  const waehlen = useCallback((code: string | null) => router.replace(code ? `/karte?r=${code}` : "/karte", { scroll: false }), [router])

  useEffect(() => {
    fetch("/geo/pfalzel.json").then((r) => r.json()).then((d) => setGeo(d.features)).catch(() => setGeo([]))
  }, [])

  const kennzahlen = useMemo(() => {
    if (!geo?.length) return null
    const staat = geo.find((f) => f.properties.art === "staat")!
    const je: Record<string, { flaeche: number; umfang: number }> = {}
    geo.filter((f) => f.properties.art === "region").forEach((f) => (je[f.properties.code!] = { flaeche: flaeche(f.geometry), umfang: umfang(f.geometry) }))
    return { flaeche: flaeche(staat.geometry), grenze: umfang(staat.geometry), je }
  }, [geo])

  // Karte anlegen
  useEffect(() => {
    let aus = false
    import("leaflet").then((mod) => {
      if (aus || !box.current || karte.current) return
      const l = ((mod as any).default ?? mod) as typeof Leaflet
      L.current = l
      const k = l.map(box.current, { zoomControl: false, minZoom: 9 }).fitBounds(GEBIET, { padding: [24, 24] })
      l.control.zoom({ position: "bottomright" }).addTo(k)
      l.control.scale({ imperial: false, position: "bottomleft" }).addTo(k)
      l.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende',
      }).addTo(k)
      pfalzelEinzeichnen(l, k)
      standortEbene.current = l.layerGroup().addTo(k)
      karte.current = k
      setBereit(true)
    })
    return () => {
      aus = true
      setBereit(false)
      karte.current?.remove()
      karte.current = null
      flaechen.current = {}
    }
  }, [])

  // Regionen anklickbar machen
  useEffect(() => {
    const l = L.current, k = karte.current
    if (!bereit || !l || !k || !geo?.length) return
    const ebenen = geo.filter((f) => f.properties.art === "region").map((f) => {
      const code = f.properties.code!
      const ebene = l.geoJSON(f as any, { style: { stroke: false, fillColor: "#8d618b", fillOpacity: 0 } })
        .on("mouseover", () => setUeber(code))
        .on("mouseout", () => setUeber((u) => (u === code ? null : u)))
        .on("click", () => waehlen(code))
        .addTo(k)
      flaechen.current[code] = ebene
      return ebene
    })
    return () => ebenen.forEach((e) => e.remove())
  }, [bereit, geo, waehlen])

  // Hervorhebung und Ausschnitt
  useEffect(() => {
    Object.entries(flaechen.current).forEach(([code, e]) =>
      e.setStyle({ fillOpacity: code === aktiv?.code ? 0.28 : code === ueber ? 0.14 : 0 }),
    )
  }, [aktiv, ueber, geo, bereit])

  useEffect(() => {
    const k = karte.current
    if (!bereit || !k) return
    const e = aktiv ? flaechen.current[aktiv.code] : null
    if (e) k.flyToBounds(e.getBounds(), { padding: [40, 40], maxZoom: 16, duration: 0.8 })
    else if (!aktiv) k.flyToBounds(GEBIET, { padding: [24, 24], duration: 0.8 })
  }, [aktiv, bereit, geo])

  // Vollbild: Größe neu berechnen
  useEffect(() => {
    const t = setTimeout(() => karte.current?.invalidateSize(), 50)
    document.body.style.overflow = vollbild ? "hidden" : ""
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setVollbild(false)
    window.addEventListener("keydown", esc)
    return () => { clearTimeout(t); document.body.style.overflow = ""; window.removeEventListener("keydown", esc) }
  }, [vollbild])

  const ortung = () => {
    if (!navigator.geolocation) return setStandort({ status: "fehler", text: "Ihr Browser kann den Standort nicht bestimmen." })
    setStandort({ status: "suche" })
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const staat = geo?.find((f) => f.properties.art === "staat")
        const region = geo?.find((f) => f.properties.art === "region" && liegtIn(coords.longitude, coords.latitude, f.geometry))
        const drin = !!staat && liegtIn(coords.longitude, coords.latitude, staat.geometry)
        setStandort({ status: "da", lat: coords.latitude, lon: coords.longitude, region: region?.properties.code ?? null, drin, genau: coords.accuracy })
        const l = L.current, k = karte.current, g = standortEbene.current
        if (l && k && g) {
          g.clearLayers()
          l.circle([coords.latitude, coords.longitude], { radius: coords.accuracy, color: "#2563eb", weight: 1, fillOpacity: 0.12 }).addTo(g)
          l.circleMarker([coords.latitude, coords.longitude], { radius: 7, color: "#fff", weight: 3, fillColor: "#2563eb", fillOpacity: 1 }).addTo(g)
          k.flyTo([coords.latitude, coords.longitude], Math.max(k.getZoom(), 15), { duration: 0.8 })
        }
      },
      () => setStandort({ status: "fehler", text: "Der Standort konnte nicht ermittelt werden – bitte Freigabe im Browser erlauben." }),
      { enableHighAccuracy: true, timeout: 12000 },
    )
  }

  const info = aktiv && kennzahlen?.je[aktiv.code]
  const knopf = "inline-flex h-10 items-center gap-2 rounded-full border border-line bg-card/95 px-4 text-sm font-medium shadow-sm backdrop-blur transition-colors hover:border-ink/30"

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
      <div
        ref={rahmen}
        className={vollbild ? "fixed inset-0 z-[60] bg-paper" : "relative overflow-hidden rounded-2xl border border-line"}
      >
        <div ref={box} className="pfz-karte h-[62vh] min-h-[420px] w-full lg:h-[72vh]" style={vollbild ? { height: "100%" } : undefined} aria-label="Karte des Großherzogtums Pfalzel" role="region" />

        <div className="pointer-events-none absolute inset-x-3 top-3 z-[500] flex flex-wrap items-start justify-between gap-2">
          <div className="pointer-events-auto flex flex-wrap gap-2">
            <button type="button" onClick={() => waehlen(null)} className={knopf}><RotateCcw className="size-4" /> Ganzes Land</button>
            <button type="button" onClick={ortung} className={knopf}><Crosshair className="size-4" /> Bin ich in Pfalzel?</button>
          </div>
          <button type="button" onClick={() => setVollbild((v) => !v)} className={`${knopf} pointer-events-auto`} aria-label={vollbild ? "Vollbild verlassen" : "Vollbild"}>
            {vollbild ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
          </button>
        </div>

        {ueber && ueber !== aktiv?.code && (
          <div className="pointer-events-none absolute bottom-10 left-1/2 z-[500] -translate-x-1/2 rounded-full border border-line bg-card/95 px-4 py-1.5 text-sm font-medium shadow">
            {regions.find((r) => r.code === ueber)?.name} – zum Erkunden klicken
          </div>
        )}

        {standort && standort.status !== "suche" && (
          <div className="absolute inset-x-3 bottom-10 z-[500] mx-auto max-w-md rounded-xl border border-line bg-card/95 p-4 text-sm shadow-lg backdrop-blur sm:left-auto sm:right-14 sm:mx-0">
            <button type="button" onClick={() => setStandort(null)} className="float-right -mt-1 ml-2 text-ink-soft hover:text-ink" aria-label="Schließen">×</button>
            {standort.status === "fehler" ? standort.text : standort.drin ? (
              <><strong className="font-serif text-base">Willkommen im Großherzogtum!</strong><br />Sie befinden sich in der Region {regions.find((r) => r.code === standort.region)?.name ?? "des Großherzogtums"}.</>
            ) : (
              <><strong className="font-serif text-base">Sie sind im Ausland.</strong><br />Ihr Standort liegt außerhalb der Grenzen des Großherzogtums Pfalzel.</>
            )}
          </div>
        )}
        {standort?.status === "suche" && (
          <div className="absolute bottom-10 left-1/2 z-[500] -translate-x-1/2 rounded-full border border-line bg-card/95 px-4 py-1.5 text-sm shadow">Standort wird ermittelt …</div>
        )}
      </div>

      <aside className="grid content-start gap-4">
        {aktiv ? (
          <article className="overflow-hidden rounded-2xl border border-line bg-card">
            <div className="paper-grain bg-paper-2 p-6">
              <div className="mx-auto max-w-xs">
                <KennzeichenBild kennzeichen={{ region: aktiv.code, nummer: "123", buchstaben: "AB" }} />
              </div>
            </div>
            <div className="p-6">
              <p className="eyebrow">{aktiv.type}</p>
              <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight">{aktiv.name}</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{aktiv.description}</p>
              <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-5 text-sm">
                <div><dt className="text-ink-soft">Fläche</dt><dd className="mt-1 font-medium tabular-nums">{info ? `${zahl(info.flaeche)} km²` : "–"}</dd></div>
                <div><dt className="text-ink-soft">Umfang</dt><dd className="mt-1 font-medium tabular-nums">{info ? `${zahl(info.umfang, 1)} km` : "–"}</dd></div>
                <div><dt className="text-ink-soft">Kürzel</dt><dd className="mt-1 font-plate text-xl">{aktiv.code}</dd></div>
              </dl>
              <Link href={`/regionen?r=${aktiv.code}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-ink hover:underline">
                Mehr über {aktiv.name} <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>
        ) : (
          <article className="rounded-2xl border border-line bg-card p-6">
            <p className="eyebrow">Staatsgebiet</p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight">Großherzogtum Pfalzel</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">Wählen Sie eine Region auf der Karte oder in der Liste, um sie zu erkunden. Beim Hineinzoomen erscheinen die Namen entlang der Grenzen.</p>
            <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-5 text-sm">
              <div><dt className="text-ink-soft">Fläche</dt><dd className="mt-1 font-medium tabular-nums">{kennzahlen ? `${zahl(kennzahlen.flaeche)} km²` : "–"}</dd></div>
              <div><dt className="text-ink-soft">Grenze</dt><dd className="mt-1 font-medium tabular-nums">{kennzahlen ? `${zahl(kennzahlen.grenze, 1)} km` : "–"}</dd></div>
              <div><dt className="text-ink-soft">Regionen</dt><dd className="mt-1 font-medium tabular-nums">{regions.length}</dd></div>
            </dl>
          </article>
        )}

        <nav aria-label="Regionen" className="rounded-2xl border border-line bg-card p-2">
          <ul className="grid gap-1">
            {regions.map((r) => {
              const an = r.code === aktiv?.code
              return (
                <li key={r.code}>
                  <button
                    type="button"
                    onClick={() => waehlen(an ? null : r.code)}
                    onMouseEnter={() => setUeber(r.code)}
                    onMouseLeave={() => setUeber((u) => (u === r.code ? null : u))}
                    aria-pressed={an}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${an ? "bg-ink text-paper" : "hover:bg-paper-2"}`}
                  >
                    <span className={`flex h-8 min-w-10 items-center justify-center rounded-md border-2 px-1.5 font-plate text-lg ${an ? "border-gold bg-gold text-[#17130e]" : "border-ink/80 bg-white text-black"}`}>{r.code}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium">{r.name}</span>
                      <span className={`block text-xs ${an ? "text-paper/70" : "text-ink-soft"}`}>{r.type}</span>
                    </span>
                    <span className={`text-xs tabular-nums ${an ? "text-paper/70" : "text-ink-soft"}`}>{kennzahlen ? `${zahl(kennzahlen.je[r.code]?.flaeche ?? 0)} km²` : ""}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
    </div>
  )
}
