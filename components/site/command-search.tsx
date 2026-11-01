"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { ArrowUpRight, Building2, Car, Flag, Landmark, MapPin, Moon, ShieldCheck } from "lucide-react"
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
  { href: "/impressum", label: "Impressum", icon: Landmark, keywords: "kontakt anbieter rechtliches" },
]

export function CommandSearch({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const router = useRouter()
  const { resolvedTheme, setTheme } = useTheme()

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
      description="Seiten, Behörden und Regionen finden"
    >
      <CommandInput placeholder="Wonach suchen Sie? z. B. „Finanzen“, „PW“, „Flagge“" />
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
