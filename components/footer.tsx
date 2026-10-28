import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-2">Großherzogtum Pfalzel</h3>
            <p className="text-primary-foreground/70">
              Offizielle Website des Großherzogtums Pfalzel.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <div className="space-y-2 text-primary-foreground/70 text-sm">
              <p></p>
              <p>+49 651 63 5555 9000</p>
              <p>info@pfalzel.gd</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <nav className="flex flex-col gap-2 text-primary-foreground/70 text-sm">
              <Link href="#ueber" className="hover:text-primary-foreground transition-colors">
                Über uns
              </Link>
              <Link href="#kennzeichen" className="hover:text-primary-foreground transition-colors">
                Kennzeichensystem
              </Link>
              <Link href="#regionen" className="hover:text-primary-foreground transition-colors">
                Regionen
              </Link>
              <span>Impressum | Datenschutz</span>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Großherzogtum Pfalzel. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
