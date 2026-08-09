import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <>
      <section id="ueber" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-[0.32em] text-primary">
              Über das Großherzogtum
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Ein Erbe der Souveränität
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Der Unabhängigkeitstag des Großherzogtums Pfalzel feiert die Wiederherstellung der historischen Freiheit. Diese Mikronation vereint die Traditionen der Pfalzer Region mit moderner Souveränität, um die Werte der Freiheit und des Friedens für die kommende Generation zu bewahren.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Der Großherzog
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Seine Exzellenz Großherzog Lukas Meier von Pfalzel ist der führende Geist der Mikronation. Mit einer langjährigen Tradition in der Geschichte des Großherzogtums verbindet er die Werte der Ehre und des Respekts mit einer modernen Vision für die Zukunft.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    Als Vater der Pfalzeler Nachwelt engagiert er sich für die Erhaltung der historischen Kulturlandschaft und die Förderung der künstlerischen und wissenschaftlichen Gemeinschaft.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Unabhängigkeit
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Das Großherzogtum Pfalzel wurde am 9. Mai 2026 als Nation gegründet. Mit der Erklärung der Unabhängigkeit wurde ein neuer Abschnitt in der Geschichte Pfalzels eröffnet, der durch unerschütterliche Souveränität und historische Wurzeln geprägt ist.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Die Nationalflagge
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Die Nationalflagge des Großherzogtums in den Farben des Mutterlandes und dem historischen Wappen in seiner Mitte.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Das Wappen
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Das Wappen zeigt das historische Wappen Pfalzels in einem neuen schwarzen Glanz und steht für die Zusammenführung von Tradition und nationalem Stolz.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Die Symbolik
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Die Symbolik des Großherzogtums verbindet Tradition und Stolz, um die Werte der Freiheit und des Friedens zu bewahren.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="geschichte" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Souveränität in Pfalzel
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Ein Ort der Tradition, Geschichte und unabhängiger Mikronation im Herzen der Natur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-card p-8 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Die Geschichte der Pfalzel
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Entdecken Sie die Wurzeln, die Identität und die Zukunft des Großherzogtums Pfalzel. Unsere Geschichte ist ein Zeichen des Friedens, der Freiheit und eines neuen nationalen Selbstbewusstseins.
              </p>
            </div>

            <div className="rounded-3xl bg-card p-8 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Der Grand Duchy Geist
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                „Die Pfalzer Geschichte ist die Geschichte der Freiheit und des unermüdlichen Willens, die Traditionen des Reiches zu bewahren.“ Seine Exzellenz verbindet dieses Erbe mit einer modernen Vision für die kommenden Generationen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
