import type { Metadata } from "next"
import { Fraunces, Geist, Barlow_Condensed } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site/header"
import { SiteFooter } from "@/components/site/footer"
import "./globals.css"

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", axes: ["opsz", "SOFT"] })
const body = Geist({ subsets: ["latin"], variable: "--font-body" })
const plate = Barlow_Condensed({ subsets: ["latin"], weight: ["600"], variable: "--font-plate-face" })

export const metadata: Metadata = {
  title: {
    default: "Großherzogtum Pfalzel | Grand Duchy of Pfalzel",
    template: "%s · Großherzogtum Pfalzel",
  },
  description:
    "Offizielles Staatsportal des Großherzogtums Pfalzel – Staat, Symbole, Regierung, Regionen und Kennzeichen.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} ${plate.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a
            href="#inhalt"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
          >
            Zum Inhalt springen
          </a>
          <SiteHeader />
          <main id="inhalt">{children}</main>
          <SiteFooter />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
