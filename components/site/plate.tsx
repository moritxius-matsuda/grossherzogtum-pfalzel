/** Nachbau des Pfalzeler Kennzeichens in HTML – skaliert über die Schriftgröße (em). */
export function Plate({
  region,
  letters,
  number,
  className = "",
}: {
  region: string
  letters?: string
  number?: string
  className?: string
}) {
  return (
    <div
      className={`inline-flex items-stretch overflow-hidden rounded-[0.18em] border-[0.06em] border-black bg-white text-black shadow-[0_0.08em_0.3em_rgba(0,0,0,0.18)] ${className}`}
      role="img"
      aria-label={`Kennzeichen ${[region, letters].filter(Boolean).join("-")} ${number ?? ""}`.trim()}
      data-no-translate
    >
      <div className="flex w-[1.25em] items-center justify-center bg-white pl-[0.12em]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/pfalzel_flagge.png" alt="" className="h-[0.62em] w-auto" />
      </div>
      <div className="flex items-center gap-[0.18em] px-[0.22em] font-plate font-semibold uppercase leading-none tracking-[0.02em]">
        <span>{region || "–"}</span>
        <span className="flex h-full w-[0.38em] flex-col items-center justify-center gap-[0.06em]" aria-hidden>
          <span className="size-[0.3em] rounded-full border-[0.02em] border-black/40 bg-[#f5c6c6]" />
          <span className="size-[0.3em] rounded-full border-[0.02em] border-black/40" />
        </span>
        {letters ? <span>{letters}</span> : null}
        {number ? <span className="ml-[0.12em]">{number}</span> : null}
      </div>
    </div>
  )
}
