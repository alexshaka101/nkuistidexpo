export type AccentPaletteItem = {
  color: string
  foreground: string
}

/** 展覽視覺輔色盤 */
export const ACCENT_PALETTE: AccentPaletteItem[] = [
  { color: "#CDD058", foreground: "#1a1a1a" },
  { color: "#C55DAC", foreground: "#ffffff" },
  { color: "#6BC294", foreground: "#ffffff" },
  { color: "#796FB3", foreground: "#ffffff" },
]

export function shuffleAccentPalette(
  palette: AccentPaletteItem[] = ACCENT_PALETTE,
): AccentPaletteItem[] {
  const shuffled = [...palette]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function accentPaletteVar(index: number, property: "color" | "foreground" = "color") {
  const slot = ((index % ACCENT_PALETTE.length) + ACCENT_PALETTE.length) % ACCENT_PALETTE.length
  return property === "color"
    ? `var(--accent-palette-${slot})`
    : `var(--accent-palette-${slot}-foreground)`
}

export function accentPaletteTintVar(index: number, opacity = 0.1) {
  return `color-mix(in srgb, ${accentPaletteVar(index)} ${opacity * 100}%, transparent)`
}
