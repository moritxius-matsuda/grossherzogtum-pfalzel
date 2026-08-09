"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#flagge" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
            Flagge
          </Link>
          <Link href="#kennzeichen" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
            Kennzeichen
          </Link>
          <Link href="#regionen" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
            Regionen
          </Link>
          <Link href="https://groherzogtum-pfalzel.vercel.app/regierungsbehorden" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
            Regierungsbehörden
          </Link>
          <Link href="#ueber" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
            Über uns
          </Link>
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
              href="#flagge" 
              className="text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Flagge
            </Link>
            <Link 
              href="#kennzeichen" 
              className="text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kennzeichen
            </Link>
            <Link 
              href="#regionen" 
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
              href="#ueber" 
              className="text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Über uns
            </Link>
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
