"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [translateEnabled, setTranslateEnabled] = useState(false)
  const [translateLanguage, setTranslateLanguage] = useState("en")

  const handleTranslateToggle = () => {
    const nextState = !translateEnabled
    setTranslateEnabled(nextState)

    if (typeof window === "undefined") return

    const targetUrl = new URL("https://translate.google.com/translate")
    targetUrl.searchParams.set("sl", "auto")
    targetUrl.searchParams.set("tl", translateLanguage)
    targetUrl.searchParams.set("u", window.location.href)

    if (nextState) {
      window.open(targetUrl.toString(), "_blank", "noopener,noreferrer")
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-28 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-0sol1rS1T5nTvjzNvcCfjI7jZLMzip.png"
            alt="Großherzogtum Pfalzel Logo"
            width={300}
            height={80}
            className="h-20 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#flagge" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
            Flagge
          </Link>
          <Link href="/#kennzeichen" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
            Kennzeichen
          </Link>
          <Link href="/#regionen" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
            Regionen
          </Link>
          <Link href="/regierungsbehorden" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
            Regierungsbehörden
          </Link>
          <Link href="/#ueber" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
            Über uns
          </Link>

          <div className="ml-2 flex items-center gap-2 rounded-full border border-border bg-muted/60 px-2 py-1.5">
            <select
              value={translateLanguage}
              onChange={(event) => setTranslateLanguage(event.target.value)}
              className="rounded-full border-0 bg-transparent px-2 py-1 text-sm font-medium outline-none"
              aria-label="Sprache auswählen"
            >
              <option value="de">DE</option>
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="es">ES</option>
            </select>

            <button
              type="button"
              onClick={handleTranslateToggle}
              className="flex items-center gap-2 rounded-full bg-background px-2 py-1 text-sm font-medium text-foreground shadow-sm"
              aria-label="Seite automatisch übersetzen"
            >
              <span className={`relative h-5 w-9 rounded-full transition-colors ${translateEnabled ? "bg-primary" : "bg-muted-foreground/30"}`}>
                <span className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${translateEnabled ? "translate-x-4" : "translate-x-0"}`} />
              </span>
              <span>{translateEnabled ? "Auto" : "Off"}</span>
            </button>
          </div>

          <a
            href="https://govid.großherzogtum-pfalzel.de"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
          >
            GovID
          </a>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menü öffnen"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-6">
            <Link 
              href="/#flagge" 
              className="text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Flagge
            </Link>
            <Link 
              href="/#kennzeichen" 
              className="text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kennzeichen
            </Link>
            <Link 
              href="/#regionen" 
              className="text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Regionen
            </Link>
            <Link 
              href="https://groherzogtum-pfalzel.vercel.app/regierungsbehorden" 
              className="text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Regierungsbehörden
            </Link>
            <Link 
              href="/#ueber" 
              className="text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Über uns
            </Link>
            <div className="flex flex-col gap-3 rounded-2xl border border-border bg-muted/50 p-3">
              <div className="flex items-center justify-between gap-3">
                <label className="text-sm font-medium text-foreground">Auto-Übersetzung</label>
                <button
                  type="button"
                  onClick={handleTranslateToggle}
                  className="flex items-center gap-2 rounded-full bg-background px-2 py-1 text-sm font-medium text-foreground shadow-sm"
                >
                  <span className={`relative h-5 w-9 rounded-full transition-colors ${translateEnabled ? "bg-primary" : "bg-muted-foreground/30"}`}>
                    <span className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${translateEnabled ? "translate-x-4" : "translate-x-0"}`} />
                  </span>
                  <span>{translateEnabled ? "An" : "Aus"}</span>
                </button>
              </div>

              <select
                value={translateLanguage}
                onChange={(event) => setTranslateLanguage(event.target.value)}
                className="rounded-full border border-border bg-background px-3 py-2 text-sm outline-none"
              >
                <option value="de">Deutsch</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
              </select>
            </div>

            <a
              href="https://govid.großherzogtum-pfalzel.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              GovID
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
