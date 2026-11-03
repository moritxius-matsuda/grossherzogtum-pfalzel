type Props = {
  eyebrow: string
  title: React.ReactNode
  intro?: React.ReactNode
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({ eyebrow, title, intro, align = "left", className = "" }: Props) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl font-medium leading-[1.1] tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{intro}</p>}
    </div>
  )
}

export function PageHero({ eyebrow, title, intro, children }: Props & { children?: React.ReactNode }) {
  return (
    <section className="paper-grain border-b border-line">
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-medium leading-[1.02] tracking-tight text-balance sm:text-6xl">
          {title}
        </h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
