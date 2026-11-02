"use client"

import { useMemo, useState } from "react"
import { Check, Copy, Download, Shuffle, X } from "lucide-react"
import { KennzeichenBild, kennzeichenHerunterladen } from "./kennzeichen"
import { regions } from "@/lib/site-data"
import { formatKennzeichen, parseSonder, zufallsKennzeichen, type Kennzeichen } from "@/lib/kennzeichen"

type Modus = "regulaer" | "sonder"

export function PlateBuilder() {
  const [modus, setModus] = useState<Modus>("regulaer")
  const [region, setRegion] = useState("P")
  const [nummer, setNummer] = useState("611")
  const [buchstaben, setBuchstaben] = useState("IY")
  const [sonder, setSonder] = useState("M 213")
  const [copied, setCopied] = useState(false)

  const sonderTeile = parseSonder(sonder)
  const rules = useMemo(
    () =>
      modus === "regulaer"
        ? [
            { ok: regions.some((r) => r.code === region), label: "Gültiges Regionalkürzel" },
            { ok: /^\d{3}$/.test(nummer) && nummer !== "000", label: "Genau 3 Ziffern (nicht 000)" },
            { ok: /^[A-Z]{2}$/.test(buchstaben), label: "Genau 2 Buchstaben (A–Z, ohne Umlaute)" },
          ]
        : [
            { ok: /^\s*[A-Za-z]{0,3}[\s-]*\d/.test(sonder), label: "Vorne höchstens 3 Buchstaben" },
            { ok: /\d/.test(sonder) && !/\d{5}/.test(sonder) && !/^\D*0+\D*$/.test(sonder), label: "1–4 Ziffern (nicht nur Nullen)" },
            { ok: !!sonderTeile, label: "Hinten höchstens 2 Buchstaben – z. B. „M 213“, „1“ oder „PW 611 IY“" },
          ],
    [modus, region, nummer, buchstaben, sonder, sonderTeile],
  )

  const valid = rules.every((r) => r.ok)
  const kennzeichen: Kennzeichen | null = !valid ? null : modus === "regulaer" ? { region, nummer, buchstaben } : sonderTeile
  const text = kennzeichen ? formatKennzeichen(kennzeichen) : ""
  const regionName = kennzeichen ? regions.find((r) => r.code === kennzeichen.region)?.name : undefined

  const shuffle = () => {
    const k = zufallsKennzeichen()
    setModus("regulaer")
    setRegion(k.region)
    setNummer(k.nummer)
    setBuchstaben(k.buchstaben)
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  const field =
    "h-12 w-full rounded-lg border border-line bg-card px-3 font-plate text-xl uppercase tracking-wide outline-none transition-colors focus:border-gold-ink"

  return (
    <div className="grid overflow-hidden rounded-2xl border border-line bg-card lg:grid-cols-[1.25fr_1fr]">
      <div className="paper-grain flex flex-col items-center justify-center gap-6 bg-paper-2 p-6 sm:p-10">
        {kennzeichen ? (
          <KennzeichenBild kennzeichen={kennzeichen} />
        ) : (
          <div className="flex aspect-[2080/440] w-full items-center justify-center rounded-[0.4rem] border-2 border-dashed border-line text-sm text-ink-soft">
            Diese Kombination ist nicht zulässig
          </div>
        )}
        <p
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
            valid ? "bg-emerald-600/10 text-emerald-700 dark:text-emerald-400" : "bg-crimson/10 text-crimson"
          }`}
          aria-live="polite"
        >
          {valid ? <Check className="size-4" /> : <X className="size-4" />}
          {!valid
            ? "Diese Kombination ist nicht zulässig"
            : modus === "sonder"
              ? `Gültiges Sonderkennzeichen${regionName ? ` · ${regionName}` : ""}`
              : `Gültig · zugelassen in ${regionName}`}
        </p>
      </div>

      <div className="p-6 sm:p-8">
        <div className="inline-flex rounded-full border border-line bg-paper-2 p-1" role="radiogroup" aria-label="Art des Kennzeichens">
          {(
            [
              ["regulaer", "Regulär"],
              ["sonder", "Sonderkennzeichen"],
            ] as const
          ).map(([m, label]) => (
            <button
              key={m}
              type="button"
              role="radio"
              aria-checked={modus === m}
              onClick={() => setModus(m)}
              className="h-9 rounded-full px-4 text-sm font-medium text-ink-soft transition-colors hover:text-ink aria-checked:bg-ink aria-checked:text-paper"
            >
              {label}
            </button>
          ))}
        </div>

        {modus === "regulaer" ? (
          <div className="mt-6 grid grid-cols-[1.3fr_1fr_1fr] gap-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
              Region
              <select value={region} onChange={(e) => setRegion(e.target.value)} className={`${field} mt-1.5 pr-1`}>
                {regions.map((r) => (
                  <option key={r.code} value={r.code}>
                    {r.code}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
              Ziffern
              <input
                value={nummer}
                maxLength={3}
                onChange={(e) => setNummer(e.target.value.replace(/\D/g, ""))}
                className={`${field} mt-1.5`}
                inputMode="numeric"
              />
            </label>
            <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
              Buchstaben
              <input
                value={buchstaben}
                maxLength={2}
                onChange={(e) => setBuchstaben(e.target.value.toUpperCase().replace(/[^A-Z]/g, ""))}
                className={`${field} mt-1.5`}
                autoCapitalize="characters"
              />
            </label>
          </div>
        ) : (
          <label className="mt-6 block text-xs font-semibold uppercase tracking-wider text-ink-soft">
            Wunschkennzeichen
            <input
              value={sonder}
              maxLength={14}
              onChange={(e) => setSonder(e.target.value.toUpperCase().replace(/[^A-Z0-9 -]/g, ""))}
              className={`${field} mt-1.5`}
              autoCapitalize="characters"
              placeholder="z. B. M 213"
            />
          </label>
        )}

        <ul className="mt-6 space-y-2.5">
          {rules.map((rule) => (
            <li key={rule.label} className="flex items-start gap-2.5 text-sm">
              <span
                className={`mt-0.5 inline-flex size-4.5 shrink-0 items-center justify-center rounded-full ${
                  rule.ok ? "bg-emerald-600 text-white" : "bg-crimson text-white"
                }`}
              >
                {rule.ok ? <Check className="size-3" /> : <X className="size-3" />}
              </span>
              <span className={rule.ok ? "text-ink-soft" : "text-ink"}>{rule.label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={shuffle}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-line px-4 text-sm font-medium hover:bg-paper-2"
          >
            <Shuffle className="size-4" /> Zufallskennzeichen
          </button>
          <button
            type="button"
            onClick={copy}
            disabled={!valid}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-line px-4 text-sm font-medium hover:bg-paper-2 disabled:opacity-40"
          >
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? "Kopiert" : "Kopieren"}
          </button>
          <button
            type="button"
            onClick={() => kennzeichen && kennzeichenHerunterladen(kennzeichen)}
            disabled={!kennzeichen}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-paper hover:bg-ink/85 disabled:opacity-40"
          >
            <Download className="size-4" /> Als Bild
          </button>
        </div>
        <p className="mt-6 text-xs leading-relaxed text-ink-soft">
          {modus === "sonder"
            ? "Sonderkennzeichen werden nur auf Antrag zugeteilt. Steht vorne ein Regionalkürzel, erscheint die Region unter dem Wappen."
            : "Der Konfigurator dient nur der Information. Verbindlich ist allein die amtliche Zuteilung."}
        </p>
      </div>
    </div>
  )
}
