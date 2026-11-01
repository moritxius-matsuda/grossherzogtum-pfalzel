import Link from "next/link"
import { ArrowUpRight, Mail, Phone } from "lucide-react"
import { Crest } from "./crest"
import { contact, GOVID_URL, nav } from "@/lib/site-data"

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-[#17130e] text-[#f1eadb]">
      <div className="flag-rule" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <Crest className="h-14 w-auto" />
            <div>
              <p className="font-serif text-2xl font-semibold tracking-tight">Großherzogtum Pfalzel</p>
              <p className="text-sm text-[#f1eadb]/60">Grand Duchy of Pfalzel · Grand-Duché de Pfalzel</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#f1eadb]/70">
            Offizielles Staatsportal des Großherzogtums Pfalzel. Souverän seit dem 9. Mai 2026.
          </p>
        </div>

        <nav className="md:col-span-3" aria-label="Fußnavigation">
          <p className="eyebrow !text-[#f2c54a]">Portal</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[#f1eadb]/75 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={GOVID_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#f1eadb]/75 hover:text-white"
              >
                GovID <ArrowUpRight className="size-3.5" />
              </a>
            </li>
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="eyebrow !text-[#f2c54a]">Kontakt</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-3 text-[#f1eadb]/75 hover:text-white">
                <Phone className="size-4 text-[#f2c54a]" /> {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.mail}`} className="inline-flex items-center gap-3 text-[#f1eadb]/75 hover:text-white">
                <Mail className="size-4 text-[#f2c54a]" /> {contact.mail}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-[#f1eadb]/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Großherzogtum Pfalzel. Alle Rechte vorbehalten.</p>
          <p className="flex gap-4">
            <span>Impressum</span>
            <span>Datenschutz</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
