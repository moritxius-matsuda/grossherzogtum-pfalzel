"use client"

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { regions } from "@/lib/site-data"
import { KennzeichenBild } from "./kennzeichen"

export function RegionExplorer() {
  const params = useSearchParams()
  const router = useRouter()
  const code = params.get("r") ?? regions[0].code
  const active = regions.find((r) => r.code === code) ?? regions[0]
  const index = regions.indexOf(active)

  const select = (c: string) => router.replace(`/regionen?r=${c}`, { scroll: false })

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
      <div role="tablist" aria-label="Regionen" aria-orientation="vertical" className="grid gap-2 sm:grid-cols-2">
        {regions.map((r) => {
          const selected = r.code === active.code
          return (
            <button
              key={r.code}
              role="tab"
              id={`tab-${r.code}`}
              aria-selected={selected}
              aria-controls="region-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => select(r.code)}
              onKeyDown={(e) => {
                const step = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0
                if (!step) return
                e.preventDefault()
                const next = regions[(regions.indexOf(r) + step + regions.length) % regions.length]
                select(next.code)
                document.getElementById(`tab-${next.code}`)?.focus()
              }}
              className={`group flex items-center gap-4 rounded-xl border p-4 text-left transition-colors ${
                selected ? "border-ink bg-ink text-paper shadow-lg" : "border-line bg-card hover:border-ink/30"
              }`}
            >
              <span
                className={`flex h-11 min-w-12 items-center justify-center rounded-md border-2 px-2 font-plate text-2xl ${
                  selected ? "border-gold bg-gold text-[#17130e]" : "border-ink/80 bg-white text-black"
                }`}
              >
                {r.code}
              </span>
              <span className="min-w-0">
                <span className="block truncate font-medium">{r.name}</span>
                <span className={`block text-xs ${selected ? "text-paper/70" : "text-ink-soft"}`}>{r.type}</span>
              </span>
            </button>
          )
        })}
      </div>

      <article
        id="region-panel"
        role="tabpanel"
        aria-labelledby={`tab-${active.code}`}
        className="relative flex flex-col overflow-hidden rounded-2xl border border-line bg-card lg:sticky lg:top-24 lg:self-start"
      >
        <div className="paper-grain flex min-h-48 items-center justify-center bg-paper-2 p-8">
          <div key={active.code} className="w-full max-w-md animate-in fade-in zoom-in-95">
            <KennzeichenBild kennzeichen={{ region: active.code, nummer: "123", buchstaben: "AB" }} />
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <p className="eyebrow">
            Region {String(index + 1).padStart(2, "0")} von {regions.length} · {active.type}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight sm:text-4xl">{active.name}</h2>
          <p className="mt-4 leading-relaxed text-ink-soft">{active.description}</p>
          <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-6 text-sm">
            <div>
              <dt className="text-ink-soft">Kennzeichenkürzel</dt>
              <dd className="mt-1 font-plate text-2xl">{active.code}</dd>
            </div>
            <div>
              <dt className="text-ink-soft">Gebietstyp</dt>
              <dd className="mt-1 text-lg font-medium">{active.type}</dd>
            </div>
          </dl>
          <Link
            href="/kennzeichen#konfigurator"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-ink hover:underline"
          >
            Kennzeichen für {active.code} zusammenstellen <ArrowRight className="size-4" />
          </Link>
        </div>
      </article>
    </div>
  )
}
