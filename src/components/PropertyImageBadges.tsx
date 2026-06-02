interface PropertyImageBadgesProps {
  ribbonText?: string
}

export default function PropertyImageBadges({
  ribbonText,
}: PropertyImageBadgesProps) {
  if (!ribbonText) {
    return null
  }

  return (
    <div className="absolute inset-x-[-20%] top-7 z-10 -rotate-12 pointer-events-none overflow-hidden">
      <span className="block bg-gradient-to-r from-black-900/95 via-champagne-600/95 to-black-900/95 px-8 py-2 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-white shadow-xl border-y border-white/15">
        {ribbonText}
      </span>
    </div>
  )
}