"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, Search, X } from "lucide-react"
import { Crest } from "./crest"
import { ThemeToggle } from "./theme-toggle"
import { LanguageMenu } from "./language-menu"
import { CommandSearch } from "./command-search"
import { OfficialBanner } from "./official-banner"
import { GOVID_URL, nav } from "@/lib/site-data"

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // Tastenkürzel passend zum System anzeigen (⌘ K auf dem Mac)
  const [mac, setMac] = useState(false)
  useEffect(() => setMac(/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)), [])

  useEffect(() => setMenuOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <>
      <div className="flag-rule" aria-hidden />
      <OfficialBanner />
      <header
        className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] ${
          scrolled || menuOpen
            ? "border-line bg-paper/90 shadow-[0_1px_0_0_var(--line)] backdrop-blur-md"
            : "border-transparent bg-paper"
        }`}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3" aria-label="Großherzogtum Pfalzel – Startseite">
            <Crest variant="mono" className="h-9 w-auto shrink-0 text-ink transition-transform sm:h-10 group-hover:-rotate-3" />
            <span className="leading-none">
              <span className="block whitespace-nowrap font-serif text-[1.05rem] font-semibold tracking-tight sm:text-[1.15rem]">Großherzogtum Pfalzel</span>
              <span className="mt-1 block whitespace-nowrap text-[0.62rem] uppercase tracking-[0.2em] text-ink-soft sm:text-[0.68rem]">
                Grand Duchy of Pfalzel
              </span>
            </span>
          </Link>

          <nav className="ml-auto hidden lg:block" aria-label="Hauptnavigation">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="relative whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink aria-[current=page]:text-ink"
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold" aria-hidden />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-1 lg:ml-4">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="hidden h-9 items-center gap-2 rounded-full border border-line bg-card pl-3 pr-2 text-sm text-ink-soft transition-colors hover:border-ink/30 hover:text-ink xl:inline-flex"
            >
              <Search className="size-4" />
              Suchen
              <span className="ml-1 flex items-center gap-0.5" aria-hidden>
                <kbd className="inline-flex h-5 min-w-5 items-center justify-center whitespace-nowrap rounded border border-line bg-paper px-1 font-sans text-[10px] font-semibold leading-none">
                  {mac ? "⌘" : "Strg"}
                </kbd>
                <kbd className="inline-flex h-5 min-w-5 items-center justify-center rounded border border-line bg-paper px-1 font-sans text-[10px] font-semibold leading-none">
                  K
                </kbd>
              </span>
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="inline-flex size-9 items-center justify-center rounded-full text-ink-soft hover:bg-paper-2 xl:hidden"
              aria-label="Suchen"
            >
              <Search className="size-4" />
            </button>
            <div className="hidden items-center gap-1 sm:flex">
              <LanguageMenu />
              <ThemeToggle />
            </div>
            <a
              href={GOVID_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 hidden h-9 items-center gap-1.5 rounded-full bg-ink px-4 text-sm font-semibold text-paper transition-colors hover:bg-ink/85 sm:inline-flex"
            >
              GovID
              <ArrowUpRight className="size-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-full hover:bg-paper-2 lg:hidden"
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            id="mobile-nav"
            className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-4.5rem)] overflow-y-auto bg-paper px-4 pb-10 pt-6 animate-in fade-in slide-in-from-top-2 lg:hidden"
          >
            <nav aria-label="Mobile Navigation">
              <ol className="divide-y divide-line border-y border-line">
                {nav.map((item, i) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className="flex items-baseline gap-4 py-4 font-serif text-3xl tracking-tight aria-[current=page]:text-gold-ink"
                    >
                      <span className="font-sans text-xs tabular-nums text-ink-soft">0{i + 1}</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-line bg-card px-4 py-2 sm:hidden">
              <span className="text-sm text-ink-soft">Sprache &amp; Design</span>
              <span className="flex items-center gap-1">
                <LanguageMenu />
                <ThemeToggle />
              </span>
            </div>
            <a
              href={GOVID_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex h-12 items-center justify-center gap-2 rounded-full bg-ink font-semibold text-paper"
            >
              Mit GovID anmelden <ArrowUpRight className="size-4" />
            </a>
          </div>
        )}
      </header>
      <CommandSearch open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  )
}
