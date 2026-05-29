"use client"

import { useEffect } from "react"
import { shuffleAccentPalette } from "@/lib/accent-palette"

export function AccentColorProvider() {
  useEffect(() => {
    const shuffled = shuffleAccentPalette()
    const root = document.documentElement

    shuffled.forEach((item, index) => {
      root.style.setProperty(`--accent-palette-${index}`, item.color)
      root.style.setProperty(`--accent-palette-${index}-foreground`, item.foreground)
    })

    const primary = shuffled[Math.floor(Math.random() * shuffled.length)]
    root.style.setProperty("--accent", primary.color)
    root.style.setProperty("--accent-foreground", primary.foreground)
  }, [])

  return null
}
