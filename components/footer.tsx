import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer id="ueber" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wappen_Pfalzel-zKZ5zoehtW577lFxbZZ9qNKd12zBFV.png"
              alt="Wappen Pfalzel"
              width={80}
              height={96}
              className="mb-4"
              style={{ width: '80px', height: 'auto' }}
            />
            <h3 className="text-xl font-bold mb-2">Großherzogtum Pfalzel</h3>
            <p className="text-primary-foreground/70">
              Offizielle Website der Regierung des Großherzogtums Pfalzel.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#kennzeichen" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Kennzeichensystem
              </Link>
              <Link href="#regionen" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Regionen
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-bold mb-4">Sprachen / Languages</h4>
            <div className="flex flex-col gap-1 text-primary-foreground/70">
              <span>Deutsch</span>
              <span>English</span>
              <span>Français</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Großherzogtum Pfalzel. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
