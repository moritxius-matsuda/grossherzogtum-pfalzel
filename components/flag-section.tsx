import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function FlagSection() {
  return (
    <section id="flagge" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Die Nationalflagge
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Die Flagge des Großherzogtums Pfalzel symbolisiert die Geschichte, Einheit und Identität des Landes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/pfalzel_flagge.png"
                alt="Flagge des Großherzogtums Pfalzel"
                width={500}
                height={303}
                className="rounded-lg shadow-xl border border-border"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Bedeutung der Elemente
            </h3>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-l-[#FFCB21]">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Gold (Gelb)</h4>
                  <p className="text-sm text-muted-foreground">
                    Repräsentiert den Reichtum, die Weisheit und die strahlende Zukunft des Großherzogtums
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#FF0000]">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Rot</h4>
                  <p className="text-sm text-muted-foreground">
                    Steht für den Mut, die Stärke und das Blut der Vorfahren, die das Land verteidigt haben
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#000000]">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Schwarz mit goldenen Sternen</h4>
                  <p className="text-sm text-muted-foreground">
                    Das diagonale schwarze Band mit vier goldenen Sternen symbolisiert die vier historischen Regionen des Großherzogtums
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-foreground">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Das Wappen im Zentrum</h4>
                  <p className="text-sm text-muted-foreground">
                    Das Pfalzeler Wappen - ein weißes Kreuz auf rotem Schild - bildet das Herzstück der Flagge und verbindet alle Elemente zur nationalen Einheit
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
