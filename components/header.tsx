"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const TRANSLATE_STORAGE_KEY = "pfalzel-translation-state"
const originalTextMap = new WeakMap<Node, string>()

function getTranslatableTextNodes(root: ParentNode | null) {
  if (!root) return [] as Text[]

  const nodes: Text[] = []
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)

  while (walker.nextNode()) {
    const node = walker.currentNode as Text
    const parent = node.parentElement

    if (!node.textContent?.trim()) continue
    if (!parent) continue
    if (parent.closest("script, style, noscript, svg, path, code, pre, textarea, input, select, option")) continue

    nodes.push(node)
  }

  return nodes
}

async function translateText(text: string, targetLanguage: string) {
  if (!text.trim() || targetLanguage === "de") return text

  const url = new URL("https://api.mymemory.translated.net/get")
  url.searchParams.set("q", text)
  url.searchParams.set("langpair", `de|${targetLanguage}`)

  const response = await fetch(url.toString())
  if (!response.ok) return text

  const data = await response.json()
  return data?.responseData?.translatedText || text
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [translateEnabled, setTranslateEnabled] = useState(false)
  const [translateLanguage, setTranslateLanguage] = useState("en")

  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      const saved = window.localStorage.getItem(TRANSLATE_STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (typeof parsed.enabled === "boolean") setTranslateEnabled(parsed.enabled)
        if (typeof parsed.language === "string") setTranslateLanguage(parsed.language)
      }
    } catch {
      // Ignore invalid stored data.
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      window.localStorage.setItem(
        TRANSLATE_STORAGE_KEY,
        JSON.stringify({ enabled: translateEnabled, language: translateLanguage }),
      )
    } catch {
      // Ignore storage errors.
    }

    const root = document.body
    if (!root) return

    const nodes = getTranslatableTextNodes(root)

    const applyTranslation = async () => {
      for (const node of nodes) {
        const originalText = originalTextMap.get(node) ?? node.textContent ?? ""
        if (!originalText.trim()) continue

        if (!originalTextMap.has(node)) {
          originalTextMap.set(node, originalText)
        }

        if (!translateEnabled) {
          node.textContent = originalTextMap.get(node) ?? originalText
          continue
        }

        if (translateLanguage === "de") {
          node.textContent = originalText
          continue
        }

        const translated = await translateText(originalText, translateLanguage)
        node.textContent = translated
      }
    }

    void applyTranslation()
  }, [translateEnabled, translateLanguage])

  const handleTranslateToggle = () => {
    setTranslateEnabled((value) => !value)
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
