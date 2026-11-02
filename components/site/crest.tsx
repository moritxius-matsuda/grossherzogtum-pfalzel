import { useId } from "react"

type CrestProps = {
  className?: string
  /** "color" = schwarzes Schild mit weißem Kreuz (wie die amtlichen Logos), "mono" = in Textfarbe */
  variant?: "color" | "mono"
  /** Auf dauerhaft dunklen Flächen: weißer Rand, damit sich das schwarze Schild abhebt */
  dunklerGrund?: boolean
  title?: string
  /** Farbe des Kreuzes in der Mono-Variante (Standard: Seitenhintergrund) */
  crossColor?: string
}

/** Das Pfalzeler Wappen als skalierbares SVG – immer schwarz-weiß. Im Dunkelmodus mit weißem Rand. */
export function Crest({ className, variant = "color", dunklerGrund = false, title = "Wappen des Großherzogtums Pfalzel", crossColor }: CrestProps) {
  const clip = useId()
  const shield = "M3 3H97L95 66C94 92 75 108 50 109C25 108 6 92 5 66Z"
  const mono = variant === "mono"
  const kreuz = mono ? (crossColor ?? "var(--paper)") : "#fff"
  const rand = mono ? undefined : dunklerGrund ? "stroke-white" : "stroke-[#1d1d1b] dark:stroke-white"

  return (
    <svg viewBox="0 0 100 112" className={className} role="img" aria-label={title}>
      <clipPath id={clip}>
        <path d={shield} />
      </clipPath>
      <g clipPath={`url(#${clip})`}>
        <rect width="100" height="112" fill={mono ? "currentColor" : "#1d1d1b"} />
        <rect x="42" y="0" width="16" height="112" fill={kreuz} />
        <rect x="0" y="26" width="100" height="17" fill={kreuz} />
      </g>
      <path d={shield} fill="none" stroke={mono ? "currentColor" : undefined} strokeWidth={dunklerGrund ? 3.5 : 2.5} className={rand} />
    </svg>
  )
}
