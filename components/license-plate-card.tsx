import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface LicensePlateCardProps {
  code: string
  name: string
  description: string
  imageSrc: string
  isGovernment?: boolean
}

export function LicensePlateCard({ 
  code, 
  name, 
  description, 
  imageSrc,
  isGovernment = false 
}: LicensePlateCardProps) {
  return (
    <Card className={`overflow-hidden transition-all hover:shadow-lg ${isGovernment ? 'border-2 border-primary' : ''}`}>
      <CardContent className="p-0">
        <div className="bg-muted p-4 flex justify-center min-h-28 items-center">
          {imageSrc && imageSrc.length > 0 ? (
            <Image
              src={imageSrc}
              alt={`Kennzeichen ${code}`}
              width={400}
              height={100}
              className="object-contain"
              style={{ width: 'auto', height: '5rem' }}
            />
          ) : (
            <div className="h-20 flex items-center justify-center text-muted-foreground text-sm">
              Bild nicht verfügbar
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
              {code}
            </span>
            {isGovernment && (
              <span className="inline-flex items-center justify-center rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
                Regierung
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
