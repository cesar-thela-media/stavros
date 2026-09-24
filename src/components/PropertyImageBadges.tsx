interface PropertyImageBadgesProps {
  ribbonText?: string
  variant?: 'ribbon' | 'banner'
}

export default function PropertyImageBadges({
  ribbonText,
  variant = 'ribbon',
}: PropertyImageBadgesProps) {
  if (!ribbonText) {
    return null
  }

  if (variant === 'banner') {
    return (
      <div className="relative z-30 pointer-events-none">
        <div className="bg-gradient-to-r from-black-900 via-champagne-600 to-black-900 px-4 py-3 text-center text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg border-b border-white/20">
          {ribbonText}
        </div>
      </div>
    )
  }

  // Long card ribbons clip when rotated; tighten type slightly so full text stays readable.
  const compactRibbon = ribbonText.length > 35

  return (
    <div className="absolute inset-x-[-20%] top-7 z-10 -rotate-12 pointer-events-none overflow-hidden">
      <span
        className={`block bg-gradient-to-r from-black-900/95 via-champagne-600/95 to-black-900/95 px-8 py-2 text-center font-bold uppercase text-white shadow-xl border-y border-white/15 ${
          compactRibbon
            ? 'text-[10px] tracking-[0.15em] -translate-x-4'
            : 'text-[11px] tracking-[0.3em]'
        }`}
      >
        {ribbonText}
      </span>
    </div>
  )
}
