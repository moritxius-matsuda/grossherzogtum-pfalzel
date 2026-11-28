/** Hinweiszeile wie auf den Ministerienseiten (*.pfalzel.gd). */
export function OfficialBanner() {
  return (
    <div className="border-b border-line bg-paper-2/50 text-[0.78rem] text-ink-soft">
      <div className="mx-auto flex min-h-9 max-w-7xl items-center gap-2.5 px-4 sm:px-6 lg:px-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/pfalzel_flagge.png" alt="" className="h-3.5 w-auto rounded-[2px] ring-1 ring-black/10" />
        <span>
          Eine offizielle Website des Großherzogtums Pfalzel
          <span className="hidden opacity-75 sm:inline"> · An official website of the Grand Duchy of Pfalzel</span>
        </span>
      </div>
    </div>
  )
}
