"use client"

import Image from "next/image"
import { useState } from "react"
import { flagElements } from "@/lib/site-data"

/** Interaktive Flagge: Elemente anklicken oder in der Liste wählen. */
export function FlagExplorer() {
  const [active, setActive] = useState(flagElements[0].id)

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
      <div className="relative">
        <div className="relative overflow-hidden rounded-xl shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)] ring-1 ring-black/10">
          <Image
            src="/pfalzel_flagge.png"
            alt="Nationalflagge des Großherzogtums Pfalzel"
            width={2000}
            height={1201}
            className="h-auto w-full"
            priority
          />
          {flagElements.map((el, i) => (
            <button
              key={el.id}
              type="button"
              onClick={() => setActive(el.id)}
              style={{ left: `${el.spot.x}%`, top: `${el.spot.y}%` }}
              className={`absolute flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 text-xs font-bold transition-all sm:size-10 ${
                active === el.id
                  ? "scale-110 border-white bg-[#17130e] text-white"
                  : "border-[#17130e] bg-white/90 text-[#17130e] hover:scale-105"
              }`}
              aria-label={el.name}
              aria-pressed={active === el.id}
            >
              {active === el.id && (
                <span className="absolute inset-0 animate-ping rounded-full border-2 border-white/70" aria-hidden />
              )}
              {i + 1}
            </button>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-ink-soft">Seitenverhältnis 5 : 3 · Punkte antippen für Details</p>
      </div>

      <ol className="space-y-2">
        {flagElements.map((el, i) => {
          const open = active === el.id
          return (
            <li key={el.id}>
              <button
                type="button"
                onClick={() => setActive(el.id)}
                aria-expanded={open}
                className={`w-full rounded-xl border p-4 text-left transition-colors ${
                  open ? "border-ink/25 bg-card shadow-sm" : "border-transparent hover:bg-card/60"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="font-sans text-xs tabular-nums text-ink-soft">0{i + 1}</span>
                  <span
                    className="size-5 shrink-0 rounded-full ring-1 ring-black/15"
                    style={{ background: el.swatch }}
                    aria-hidden
                  />
                  <span className="font-serif text-lg font-medium">{el.name}</span>
                </span>
                <span
                  className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <span className="overflow-hidden">
                    <span className="block pl-[3.25rem] pt-2 text-sm leading-relaxed text-ink-soft">{el.meaning}</span>
                  </span>
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
