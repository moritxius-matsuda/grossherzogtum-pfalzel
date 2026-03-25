export function MapSection() {
  return (
    <section id="karte" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Karte des Großherzogtums
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Erkunden Sie die Gebiete und Regionen des Großherzogtums Pfalzel
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-4xl rounded-lg overflow-hidden border border-border shadow-lg bg-card">
            <iframe
              src="https://pfalzel.nextgis.com/resource/32/display/tiny?angle=0&zoom=12&styles=24%2C22%2C20%2C18%2C16%2C14%2C12%2C10%2C8%2C6%2C4&linkMainMap=false&events=false&panel=none&controls=&panels=&base=basemap_0&lon=6.6945&lat=49.7759"
              className="w-full"
              style={{ height: '500px', border: 'none' }}
              title="Karte des Großherzogtums Pfalzel"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
