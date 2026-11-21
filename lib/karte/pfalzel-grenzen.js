// @ts-nocheck – Leaflet-Geometrie, bewusst schlank gehalten
// Staatsgebiet des Großherzogtums Pfalzel für jede Leaflet-Karte:
// Außengrenze wie eine Staatsgrenze, Regionen wie Bundesländer – im Stil der
// Verwaltungsgrenzen von OpenStreetMap (openstreetmap-carto), mit Beschriftung entlang
// der Grenzlinien beim Hineinzoomen (innen der eigene Name, außen der Nachbar).
// Quelle: QGIS-Projekt „Großherzogtum von Pfalzel“ (GVP.qgz), als /geo/pfalzel.json abgelegt.
//
// Gleiche Darstellung wie auf mvb.pfalzel.gd (ministerien/components/pfalzelGrenzen.js).
// Verwendung:  pfalzelEinzeichnen(L, karte)   – nach dem Anlegen der Karte aufrufen

const OSM_GRENZE = '#8d618b'   // @admin-boundaries in openstreetmap-carto
const STAAT = 'Großherzogtum Pfalzel'
const NACHBAR = 'Deutschland'

/** Ab welcher Zoomstufe Regionsnamen in der Fläche bzw. Namen entlang der Grenzen erscheinen */
const NAMEN_AB = 13
const GRENZTEXT_AB = 15
const GRENZTEXT_ABSTAND = 420   // Pixel zwischen zwei Beschriftungen auf derselben Grenze

let daten = null                // einmal laden, für alle Karten der Seite
function laden() {
  if (!daten) daten = fetch('/geo/pfalzel.json').then(r => (r.ok ? r.json() : Promise.reject(r.status))).catch(e => { daten = null; throw e })
  return daten
}

/** äußere Ringe eines (Multi-)Polygons als [[breite, länge], …] */
const ringe = geometrie => (geometrie.type === 'Polygon' ? [geometrie.coordinates] : geometrie.coordinates).map(p => p[0].map(([x, y]) => [y, x]))

// ─── Bildschirmgeometrie ─────────────────────────────────────────────────────

function innen(p, ring) {
  let drin = false
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const a = ring[i], b = ring[j]
    if ((a.y > p.y) !== (b.y > p.y) && p.x < ((b.x - a.x) * (p.y - a.y)) / (b.y - a.y) + a.x) drin = !drin
  }
  return drin
}

function abstandZurLinie(p, linie) {
  let min = Infinity
  for (let i = 1; i < linie.length; i++) {
    const a = linie[i - 1], b = linie[i]
    const dx = b.x - a.x, dy = b.y - a.y
    const t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy || 1)))
    min = Math.min(min, Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy)))
  }
  return min
}

/** Stellen entlang eines Rings im Abstand `schritt`: Punkt, lesbarer Winkel und Normale nach innen */
function stellen(ring, schritt) {
  const laenge = [0]
  for (let i = 1; i < ring.length; i++) laenge[i] = laenge[i - 1] + ring[i].distanceTo(ring[i - 1])
  const gesamt = laenge[laenge.length - 1]
  const bei = d => {
    d = ((d % gesamt) + gesamt) % gesamt
    let i = 1
    while (i < laenge.length - 1 && laenge[i] < d) i++
    const f = (d - laenge[i - 1]) / ((laenge[i] - laenge[i - 1]) || 1)
    return ring[i - 1].add(ring[i].subtract(ring[i - 1]).multiplyBy(f))
  }
  const ergebnis = []
  if (gesamt < schritt * 0.6) return ergebnis
  for (let d = schritt / 2; d < gesamt; d += schritt) {
    const p = bei(d), v = bei(d + 25).subtract(bei(d - 25))
    const l = Math.hypot(v.x, v.y) || 1
    let winkel = (Math.atan2(v.y, v.x) * 180) / Math.PI
    if (winkel > 90) winkel -= 180
    if (winkel < -90) winkel += 180
    let n = { x: -v.y / l, y: v.x / l }
    if (!innen({ x: p.x + n.x * 6, y: p.y + n.y * 6 }, ring)) n = { x: -n.x, y: -n.y }
    ergebnis.push({ p, winkel, n })
  }
  return ergebnis
}

// ─── Einzeichnen ─────────────────────────────────────────────────────────────

export function pfalzelEinzeichnen(L, karte, { namen = true } = {}) {
  if (!karte.getPane('pfalzel')) {
    karte.createPane('pfalzel').style.zIndex = 350        // unter Linien und Markern (400+)
    karte.getPane('pfalzel').style.pointerEvents = 'none'
  }
  const gruppe = L.layerGroup().addTo(karte)
  const schrift = L.layerGroup().addTo(gruppe)

  laden().then(geo => {
    if (!karte.getContainer()?.isConnected) return
    const staat = geo.features.filter(f => f.properties.art === 'staat')
    const regionen = geo.features.filter(f => f.properties.art === 'region')
    const linie = (features, stil) => L.geoJSON({ type: 'FeatureCollection', features }, { pane: 'pfalzel', interactive: false, style: () => ({ fill: false, lineJoin: 'bevel', ...stil }) }).addTo(gruppe)

    // Regionen wie Landesgrenzen (admin_level 4): weißer Untergrund, Strich-Punkt
    linie(regionen, { color: '#fff', weight: 3.5, opacity: 0.6 })
    linie(regionen, { color: OSM_GRENZE, weight: 2, opacity: 0.85, dashArray: '18 3 2 3' })
    // Außengrenze wie Staatsgrenze (admin_level 2): breites Band, weißer Untergrund, Strich-Punkt-Punkt
    linie(staat, { color: OSM_GRENZE, weight: 12, opacity: 0.18 })
    linie(staat, { color: '#fff', weight: 5, opacity: 0.6 })
    linie(staat, { color: OSM_GRENZE, weight: 3.2, opacity: 0.95, dashArray: '18 3 2 3 2 3' })

    if (!namen) return
    const schild = (koord, text, klasse, winkel = 0) => L.marker(koord, {
      pane: 'pfalzel', interactive: false, keyboard: false,
      icon: L.divIcon({ className: `pfz-schrift ${klasse}`, html: `<span style="transform:translate(-50%,-50%) rotate(${winkel.toFixed(1)}deg)">${text}</span>`, iconSize: null }),
    })
    const mitten = regionen.map(f => schild(L.geoJSON(f).getBounds().getCenter(), f.properties.name, 'pfz-region'))

    const neu = () => {
      schrift.clearLayers()
      const z = karte.getZoom()
      if (z >= NAMEN_AB) mitten.forEach(m => m.addTo(schrift))
      if (z < GRENZTEXT_AB) return

      const sicht = karte.getPixelBounds().pad(0.15)
      const imBild = p => sicht.contains(p.add(karte.getPixelOrigin()))
      const pkt = ll => karte.latLngToLayerPoint(ll)
      const setzen = (p, n, abstand, text, klasse, winkel) => schild(karte.layerPointToLatLng(L.point(p.x + n.x * abstand, p.y + n.y * abstand)), text, klasse, winkel).addTo(schrift)
      const aussen = staat.flatMap(f => ringe(f.geometry)).map(r => r.map(pkt))

      // Staatsgrenze: innen „Großherzogtum Pfalzel“, außen „Deutschland“
      aussen.forEach(r => stellen(r, GRENZTEXT_ABSTAND).filter(s => imBild(s.p)).forEach(s => {
        setzen(s.p, s.n, 13, STAAT, 'pfz-staat', s.winkel)
        setzen(s.p, s.n, -13, NACHBAR, 'pfz-staat', s.winkel)
      }))
      // Regionsgrenzen: Name jeweils auf der eigenen Seite (nicht auf der Staatsgrenze)
      regionen.forEach(f => ringe(f.geometry).map(r => r.map(pkt)).forEach(r => {
        stellen(r, GRENZTEXT_ABSTAND * 0.8).filter(s => imBild(s.p) && aussen.every(a => abstandZurLinie(s.p, a) > 6))
          .forEach(s => setzen(s.p, s.n, 10, f.properties.name, 'pfz-land', s.winkel))
      }))
    }
    karte.on('zoomend moveend', neu)
    neu()
  }).catch(() => { /* Karte funktioniert auch ohne Grenzen */ })

  return gruppe
}
