import Link from 'next/link'

export default function ValuationCTA() {
  return (
    <section className="bg-gradient-to-r from-black to-charcoal py-16">
      <div className="max-w-3xl mx-auto text-center px-6">
        {/* Home icon */}
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-14 h-14 text-gold"
            aria-hidden="true"
          >
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-black mb-4 leading-tight">
          What&apos;s Your Home Worth?
        </h2>

        {/* Subtext */}
        <p className="text-black text-lg md:text-xl mb-8 leading-relaxed">
          Get a free, instant home valuation powered by Keller Williams real estate data.
        </p>

        {/* CTA Button */}
        <Link
          href="https://stavrosrealtyteam.kw.com/home-valuation"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block text-base md:text-lg px-8 py-4"
        >
          Get My Free Valuation
        </Link>

        {/* Secondary text */}
        <p className="mt-5 text-sm text-misty/60 tracking-wide uppercase">
          No obligation. No signup required.
        </p>

        {/* Real Estate Tools Link */}
        <div className="mt-8 pt-6 border-t border-gold-400/60">
          <a
            href="#kw-tools"
            className="inline-flex items-center text-misty/60 hover:text-gold-400 text-sm transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Real Estate Tools
          </a>
        </div>
      </div>
    </section>
  )
}
