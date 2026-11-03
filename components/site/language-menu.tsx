"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { Check, Languages } from "lucide-react"

// Maschinelle Übersetzung der sichtbaren Texte (MyMemory). Deutsch ist die Originalsprache.
const STORAGE_KEY = "pfalzel-language"
const languages = [
  { code: "de", label: "Deutsch" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
] as const

const originalText = new WeakMap<Text, string>()
const cache = new Map<string, string>()

function textNodes(root: ParentNode) {
  const nodes: Text[] = []
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  while (walker.nextNode()) {
    const node = walker.currentNode as Text
    const parent = node.parentElement
    if (!node.textContent?.trim() || !parent) continue
    if (parent.closest("script, style, noscript, svg, code, pre, textarea, input, select, option, [data-no-translate]")) continue
    nodes.push(node)
  }
  return nodes
}

async function translate(text: string, lang: string) {
  const key = `${lang}:${text}`
  const hit = cache.get(key)
  if (hit) return hit
  const url = new URL("https://api.mymemory.translated.net/get")
  url.searchParams.set("q", text)
  url.searchParams.set("langpair", `de|${lang}`)
  try {
    const res = await fetch(url.toString())
    if (!res.ok) return text
    const data = await res.json()
    const out: string = data?.responseData?.translatedText || text
    cache.set(key, out)
    return out
  } catch {
    return text
  }
}

export function LanguageMenu() {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState("de")
  const [busy, setBusy] = useState(false)
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved) setLang(saved)
    } catch {}
  }, [])

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {}
    document.documentElement.lang = lang

    let cancelled = false
    const run = async () => {
      const nodes = textNodes(document.body)
      if (lang !== "de") setBusy(true)
      // In kleinen Paketen übersetzen, damit die Seite bedienbar bleibt
      for (let i = 0; i < nodes.length; i += 8) {
        if (cancelled) return
        await Promise.all(
          nodes.slice(i, i + 8).map(async (node) => {
            if (!originalText.has(node)) originalText.set(node, node.textContent ?? "")
            const source = originalText.get(node)!
            node.textContent = lang === "de" ? source : await translate(source, lang)
          }),
        )
      }
      if (!cancelled) setBusy(false)
    }
    // Nach Seitenwechsel kurz warten, bis der neue Inhalt gerendert ist
    const t = window.setTimeout(run, 150)
    return () => {
      cancelled = true
      window.clearTimeout(t)
    }
  }, [lang, pathname])

  useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", close)
    return () => document.removeEventListener("mousedown", close)
  }, [open])

  return (
    <div ref={ref} className="relative" data-no-translate>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 items-center gap-1.5 rounded-full px-2.5 text-xs font-semibold uppercase tracking-wider text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Sprache wählen"
      >
        <Languages className={`size-4 ${busy ? "animate-pulse text-gold-ink" : ""}`} />
        {lang}
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 top-11 z-50 w-56 rounded-xl border border-line bg-card p-1.5 shadow-xl"
        >
          {languages.map((l) => (
            <button
              key={l.code}
              role="menuitemradio"
              aria-checked={lang === l.code}
              onClick={() => {
                setLang(l.code)
                setOpen(false)
              }}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-paper-2"
            >
              {l.label}
              {lang === l.code && <Check className="size-4 text-gold-ink" />}
            </button>
          ))}
          <p className="px-3 pb-1.5 pt-2 text-[11px] leading-snug text-ink-soft">
            Maschinelle Übersetzung. Maßgeblich ist der deutsche Text.
          </p>
        </div>
      )}
    </div>
  )
}
