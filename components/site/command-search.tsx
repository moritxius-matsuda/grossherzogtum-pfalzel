"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { ArrowUpRight, Building2, Car, Flag, Landmark, MapPin, Moon, Newspaper, Scale, ShieldCheck } from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { authorities, authorityUrl, GOVID_URL, regions } from "@/lib/site-data"

const pages = [
  { href: "/", label: "Startseite", icon: Landmark, keywords: "home start" },
  { href: "/staat", label: "Staat & Symbole", icon: Flag, keywords: "flagge wappen geschichte" },
  { href: "/staat#flagge", label: "Nationalflagge", icon: Flag, keywords: "farben sterne" },
  { href: "/staat#chronik", label: "Chronik", icon: Flag, keywords: "geschichte gründung unabhängigkeit" },
  { href: "/regierung", label: "Regierung & Behörden", icon: Building2, keywords: "ministerien parlament" },
  { href: "/regionen", label: "Regionen", icon: MapPin, keywords: "gebiete karte" },
  { href: "/kennzeichen", label: "Kennzeichensystem", icon: Car, keywords: "auto fahrzeug" },
  { href: "/kennzeichen#konfigurator", label: "Kennzeichen-Konfigurator", icon: Car, keywords: "prüfen erstellen" },
  { href: "/aktuelles", label: "Aktuelles", icon: Newspaper, keywords: "nachrichten news blog bekanntmachungen" },
  { href: "https://justiz.pfalzel.gd", label: "Gesetzesportal", icon: Scale, keywords: "gesetze recht verordnungen justiz" },
  { href: "/impressum", label: "Impressum", icon: Landmark, keywords: "kontakt anbieter rechtliches" },
]

type Index = {
  gesetze: { titel: string; kurztitel: string | null; nummer: string | null; kategorie: string | null; geltung: string; href: string }[]
  beitraege: { titel: string; teaser: string | null; behoerde: string; datum: string; href: string }[]
}

const GELTUNG: Record<string, string> = {
  in_kraft: "In Kraft",
  beschlossen: "Noch nicht in Kraft",
  ausser_kraft: "Außer Kraft",
  aufgehoben: "Aufgehoben",
}

export function CommandSearch({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const router = useRouter()
  const { resolvedTheme, setTheme } = useTheme()
  const [index, setIndex] = useState<Index | null>(null)

  // Gesetze und Nachrichten erst beim ersten Öffnen laden
  useEffect(() => {
    if (!open || index) return
    fetch("/api/suche")
      .then((r) => (r.ok ? r.json() : { gesetze: [], beitraege: [] }))
      .then(setIndex)
      .catch(() => setIndex({ gesetze: [], beitraege: [] }))
  }, [open, index])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !isTyping(e.target))) {
        e.preventDefault()
        onOpenChange(!open)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onOpenChange])

  const go = (href: string) => {
    onOpenChange(false)
    if (href.startsWith("http")) window.open(href, "_blank", "noopener,noreferrer")
    else router.push(href)
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Portal durchsuchen"
      description="Seiten, Gesetze, Nachrichten, Behörden und Regionen finden"
    >
      <CommandInput placeholder="Wonach suchen Sie? z. B. „Finanzen“, ein Gesetz oder eine Nachricht" />
      <CommandList className="max-h-[60vh]">
        <CommandEmpty>Keine Treffer.</CommandEmpty>
        <CommandGroup heading="Seiten">
          {pages.map((p) => (
            <CommandItem key={p.href} value={`${p.label} ${p.keywords}`} onSelect={() => go(p.href)}>
              <p.icon />
              {p.label}
            </CommandItem>
          ))}
        </CommandGroup>
        {!!index?.gesetze.length && (
          <>
            <CommandSeparator />
            <CommandGroup heading="Gesetze">
              {index.gesetze.map((g) => (
                <CommandItem
                  key={g.href}
                  value={`gesetz ${g.titel} ${g.kurztitel ?? ""} ${g.nummer ?? ""} ${g.kategorie ?? ""}`}
                  onSelect={() => go(g.href)}
                >
                  <Scale />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate">{g.titel}</span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {[g.kurztitel, g.nummer, GELTUNG[g.geltung]].filter(Boolean).join(" · ")}
                    </span>
                  </span>
                  <ArrowUpRight className="opacity-50" />
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
        {!!index?.beitraege.length && (
          <>
            <CommandSeparator />
            <CommandGroup heading="Nachrichten">
              {index.beitraege.map((b) => (
                <CommandItem key={b.href} value={`nachricht news ${b.titel} ${b.teaser ?? ""} ${b.behoerde}`} onSelect={() => go(b.href)}>
                  <Newspaper />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate">{b.titel}</span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {b.behoerde} · {new Date(b.datum).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
        <CommandSeparator />
        <CommandGroup heading="Behörden">
          {authorities.map((a) => (
            <CommandItem
              key={a.abbreviation}
              value={`${a.title} ${a.abbreviation} ${a.english}`}
              onSelect={() => go(authorityUrl(a))}
            >
              <Building2 />
              <span className="flex-1 truncate">{a.title}</span>
              <span className="text-xs font-semibold text-muted-foreground">{a.abbreviation}</span>
              <ArrowUpRight className="opacity-50" />
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Regionen">
          {regions.map((r) => (
            <CommandItem key={r.code} value={`${r.name} ${r.code} ${r.type}`} onSelect={() => go(`/regionen?r=${r.code}`)}>
              <MapPin />
              <span className="flex-1">{r.name}</span>
              <span className="font-plate text-sm">{r.code}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Aktionen">
          <CommandItem value="govid anmelden login" onSelect={() => go(GOVID_URL)}>
            <ShieldCheck />
            Mit GovID anmelden
            <ArrowUpRight className="ml-auto opacity-50" />
          </CommandItem>
          <CommandItem
            value="design dunkel hell theme modus"
            onSelect={() => {
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
              onOpenChange(false)
            }}
          >
            <Moon />
            Design umschalten
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}

function isTyping(target: EventTarget | null) {
  const el = target as HTMLElement | null
  return !!el && (el.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName))
}
