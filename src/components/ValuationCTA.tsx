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
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          What&apos;s Your Home Worth?
        </h2>

        {/* Subtext */}
        <p className="text-misty text-lg md:text-xl mb-8 leading-relaxed">
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
      </div>
    </section>
  )
}
