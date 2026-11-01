import { useId } from "react"

type CrestProps = {
  className?: string
  /** "color" = rotes Schild mit weißem Kreuz, "mono" = in Textfarbe (wie im Staatslogo) */
  variant?: "color" | "mono"
  title?: string
  /** Farbe des Kreuzes in der Mono-Variante (Standard: Seitenhintergrund) */
  crossColor?: string
}

/** Das Pfalzeler Wappen als skalierbares SVG. */
export function Crest({ className, variant = "color", title = "Wappen des Großherzogtums Pfalzel", crossColor }: CrestProps) {
  const clip = useId()
  const shield = "M3 3H97L95 66C94 92 75 108 50 109C25 108 6 92 5 66Z"
  const field = variant === "color" ? "#E2001A" : "currentColor"
  const cross = variant === "color" ? "#fff" : (crossColor ?? "var(--paper)")

  return (
    <svg viewBox="0 0 100 112" className={className} role="img" aria-label={title}>
      <clipPath id={clip}>
        <path d={shield} />
      </clipPath>
      <g clipPath={`url(#${clip})`}>
        <rect width="100" height="112" fill={field} />
        <rect x="42" y="0" width="16" height="112" fill={cross} />
        <rect x="0" y="26" width="100" height="17" fill={cross} />
      </g>
      <path d={shield} fill="none" stroke={variant === "color" ? "#1d1d1b" : "currentColor"} strokeWidth="2.5" />
    </svg>
  )
}
