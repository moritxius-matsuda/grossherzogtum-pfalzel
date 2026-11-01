"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const dark = mounted && resolvedTheme === "dark"
  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className={`inline-flex size-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink ${className}`}
      aria-label={dark ? "Helles Design aktivieren" : "Dunkles Design aktivieren"}
      title={dark ? "Helles Design" : "Dunkles Design"}
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}
