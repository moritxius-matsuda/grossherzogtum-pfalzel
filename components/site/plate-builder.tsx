"use client"

import { useMemo, useState } from "react"
import { Check, Copy, Shuffle, X } from "lucide-react"
import { Plate } from "./plate"
import { regions } from "@/lib/site-data"

const MAX_CHARS = 8

export function PlateBuilder() {
  const [region, setRegion] = useState("P")
  const [letters, setLetters] = useState("CM")
  const [number, setNumber] = useState("74")
  const [copied, setCopied] = useState(false)

  const rules = useMemo(() => {
    const total = region.length + letters.length + number.length
    return [
      { ok: regions.some((r) => r.code === region), label: "Gültiges Regionalkürzel" },
      { ok: /^[A-Z]{1,2}$/.test(letters), label: "1–2 Buchstaben (A–Z, ohne Umlaute)" },
      { ok: /^[1-9]\d{0,3}$/.test(number), label: "Nummer 1–9999, ohne führende Null" },
      { ok: total <= MAX_CHARS, label: `Höchstens ${MAX_CHARS} Zeichen insgesamt (aktuell ${total})` },
    ]
  }, [region, letters, number])

  const valid = rules.every((r) => r.ok)
  const text = `${region}-${letters} ${number}`
  const regionName = regions.find((r) => r.code === region)?.name

  const shuffle = () => {
    const r = regions[Math.floor(Math.random() * regions.length)].code
    const abc = "ABCDEFGHJKLMNPRSTUVWXYZ"
    const len = r.length === 2 ? 1 + Math.round(Math.random()) : 2
    const l = Array.from({ length: len }, () => abc[Math.floor(Math.random() * abc.length)]).join("")
    const maxDigits = Math.min(4, MAX_CHARS - r.length - l.length)
    const n = String(1 + Math.floor(Math.random() * (10 ** maxDigits - 1)))
    setRegion(r)
    setLetters(l)
    setNumber(n)
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
    <div className="grid overflow-hidden rounded-2xl border border-line bg-card lg:grid-cols-[1.1fr_1fr]">
      <div className="paper-grain flex flex-col items-center justify-center gap-6 bg-paper-2 p-6 sm:p-10">
        <div className="w-full overflow-x-auto text-center">
          <Plate
            region={region}
            letters={letters}
            number={number}
            className="text-[2.6rem] sm:text-[4.2rem] lg:text-[3.6rem] xl:text-[4.4rem]"
          />
        </div>
        <p
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
            valid ? "bg-emerald-600/10 text-emerald-700 dark:text-emerald-400" : "bg-crimson/10 text-crimson"
          }`}
          aria-live="polite"
        >
          {valid ? <Check className="size-4" /> : <X className="size-4" />}
          {valid ? `Gültig · zugelassen in ${regionName}` : "Diese Kombination ist nicht zulässig"}
        </p>
      </div>

      <div className="p-6 sm:p-8">
        <div className="grid grid-cols-[1.2fr_1fr_1.1fr] gap-3">
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
            Buchstaben
            <input
              value={letters}
              maxLength={2}
              onChange={(e) => setLetters(e.target.value.toUpperCase().replace(/[^A-ZÄÖÜ]/g, ""))}
              className={`${field} mt-1.5`}
              inputMode="text"
              autoCapitalize="characters"
            />
          </label>
          <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
            Nummer
            <input
              value={number}
              maxLength={4}
              onChange={(e) => setNumber(e.target.value.replace(/\D/g, ""))}
              className={`${field} mt-1.5`}
              inputMode="numeric"
            />
          </label>
        </div>

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
            className="inline-flex h-10 items-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-paper hover:bg-ink/85 disabled:opacity-40"
          >
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? "Kopiert" : "Kennzeichen kopieren"}
          </button>
        </div>
        <p className="mt-6 text-xs leading-relaxed text-ink-soft">
          Der Konfigurator dient nur der Information. Verbindlich ist allein die amtliche Zuteilung.
        </p>
      </div>
    </div>
  )
}
