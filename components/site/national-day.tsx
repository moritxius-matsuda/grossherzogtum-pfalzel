"use client"

import { useEffect, useState } from "react"
import { FOUNDING_DATE } from "@/lib/site-data"

function nextNationalDay(now: Date) {
  const { day, month } = FOUNDING_DATE
  const thisYear = new Date(now.getFullYear(), month - 1, day)
  const end = new Date(thisYear.getTime() + 24 * 3600 * 1000)
  if (now >= thisYear && now < end) return { date: thisYear, today: true }
  return { date: now < thisYear ? thisYear : new Date(now.getFullYear() + 1, month - 1, day), today: false }
}

/** Countdown bis zum nächsten Nationalfeiertag (9. Mai). */
export function NationalDay() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const target = now ? nextNationalDay(now) : null
  const diff = target && !target.today ? target.date.getTime() - now!.getTime() : 0
  const parts = [
    { label: "Tage", value: Math.floor(diff / 86_400_000) },
    { label: "Std", value: Math.floor(diff / 3_600_000) % 24 },
    { label: "Min", value: Math.floor(diff / 60_000) % 60 },
    { label: "Sek", value: Math.floor(diff / 1000) % 60 },
  ]
  const anniversary = target ? target.date.getFullYear() - FOUNDING_DATE.year : 0

  return (
    <div className="rounded-2xl border border-line bg-card p-6">
      <p className="eyebrow">Nationalfeiertag · 9. Mai</p>
      {target?.today ? (
        <p className="mt-3 font-serif text-3xl">Heute feiert Pfalzel seine Unabhängigkeit!</p>
      ) : (
        <>
          <p className="mt-2 text-sm text-ink-soft">
            {anniversary > 0 ? `${anniversary}. Jahrestag der Unabhängigkeit in` : "Unabhängigkeitstag in"}
          </p>
          <div className="mt-4 grid grid-cols-4 gap-2" aria-live="off">
            {parts.map((p) => (
              <div key={p.label} className="rounded-xl bg-paper-2 px-2 py-3 text-center">
                <span className="block font-serif text-3xl tabular-nums leading-none sm:text-4xl">
                  {now ? String(p.value).padStart(p.label === "Tage" ? 1 : 2, "0") : "–"}
                </span>
                <span className="mt-1.5 block text-[10px] font-semibold uppercase tracking-widest text-ink-soft">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
