"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { ArrowUpRight, Search } from "lucide-react"
import { authorities, authorityUrl } from "@/lib/site-data"

const filters = ["Alle", "Staat & Recht", "Wirtschaft & Infrastruktur", "Gesellschaft"] as const

export function AuthorityDirectory() {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState<(typeof filters)[number]>("Alle")

  const ministries = useMemo(() => {
    const q = query.trim().toLowerCase()
    return authorities
      .filter((a) => a.group === "Ministerium")
      .filter((a) => filter === "Alle" || a.area === filter)
      .filter((a) => !q || [a.title, a.english, a.abbreviation, a.description].join(" ").toLowerCase().includes(q))
  }, [query, filter])

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Nach Bereich filtern">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className="h-9 rounded-full border border-line px-4 text-sm font-medium transition-colors hover:border-ink/30 aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-paper"
            >
              {f}
            </button>
          ))}
        </div>
        <label className="relative block md:w-80">
          <span className="sr-only">Ministerien durchsuchen</span>
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-ink-soft" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ministerium oder Kürzel suchen …"
            className="h-11 w-full rounded-full border border-line bg-card pl-10 pr-4 text-sm outline-none focus:border-gold-ink"
          />
        </label>
      </div>

      <p className="mt-6 text-sm text-ink-soft" aria-live="polite">
        {ministries.length} {ministries.length === 1 ? "Ministerium" : "Ministerien"}
      </p>

      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ministries.map((a) => (
          <li key={a.abbreviation} className="overflow-hidden rounded-2xl border border-line bg-card transition-shadow hover:shadow-lg">
            <a
              href={authorityUrl(a)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col p-6 transition-colors hover:bg-paper-2/60"
            >
              {/* Die Logos sind Querformate (ca. 15 : 4) – daher über die volle Kachelbreite */}
              <div className="flex items-center justify-center rounded-xl bg-white px-4 py-3 ring-1 ring-black/5">
                <Image src={a.logo} alt="" width={2500} height={666} className="h-auto w-full" />
              </div>
              <p className="mt-5 text-xs font-bold tracking-wider text-gold-ink">{a.abbreviation}</p>
              <h3 className="mt-1 font-serif text-xl font-medium leading-snug tracking-tight">{a.title}</h3>
              <p className="mt-1 text-xs text-ink-soft">{a.english}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{a.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-ink">
                {authorityUrl(a).replace("https://", "")}
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </li>
        ))}
        {ministries.length === 0 && (
          <li className="rounded-2xl border border-line bg-card p-10 text-center text-ink-soft sm:col-span-2 lg:col-span-3">
            Kein Ministerium gefunden.{" "}
            <button
              className="font-semibold text-ink underline"
              onClick={() => {
                setQuery("")
                setFilter("Alle")
              }}
            >
              Filter zurücksetzen
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}
