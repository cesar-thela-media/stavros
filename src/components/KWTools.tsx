const kwTools = [
  {
    title: "Property Search",
    description: "Browse our comprehensive MLS database with advanced search filters",
    url: "https://stavrosrealtyteam.kw.com/search",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Home Valuation",
    description: "Get an instant estimate of your home's current market value",
    url: "https://stavrosrealtyteam.kw.com/home-valuation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Mortgage Calculator",
    description: "Calculate monthly payments and explore financing options",
    url: "https://stavrosrealtyteam.kw.com/mortgage-calculator",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Market Reports",
    description: "Access detailed market analysis and neighborhood statistics",
    url: "https://stavrosrealtyteam.kw.com/market-reports",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "Saved Properties",
    description: "View and manage your favorite properties and saved searches",
    url: "https://stavrosrealtyteam.kw.com/saved",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Schedule Showing",
    description: "Book property tours and schedule appointments with our team",
    url: "https://stavrosrealtyteam.kw.com/schedule",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    title: "Selling Tools",
    description: "Access resources for selling your home including pricing analysis",
    url: "https://stavrosrealtyteam.kw.com/selling-tools",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    title: "Agent Profile",
    description: "Learn more about Spero Stavros and the Stavros Realty Team",
    url: "https://stavrosrealtyteam.kw.com/agent",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: "bg-gray-100 text-gray-600"
  }
]

export default function KWTools() {
  return (
    <section id="kw-tools" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-serif">
            Real Estate Tools & Resources
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-600">
            Access our comprehensive suite of real estate tools powered by Keller Williams technology
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {kwTools.map((tool, index) => (
            <a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white p-6 rounded-lg border border-primary-200 shadow-sm hover:shadow-lg transition-all duration-200 hover:border-gold-300"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${tool.color} group-hover:scale-110 transition-transform duration-200`}>
                {tool.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-900 group-hover:text-gold-700 transition-colors">
                {tool.title}
              </h3>
              <p className="mt-2 text-sm text-primary-600">
                {tool.description}
              </p>
              <div className="mt-4 flex items-center text-gold-600 group-hover:text-gold-700">
                <span className="text-sm font-medium">Access Tool</span>
                <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-primary-900 mb-4">Need Personal Assistance?</h3>
            <p className="text-primary-600 mb-6">
              Our expert team is here to help you navigate your real estate journey with personalized service and local expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1234567890" 
                className="btn-primary"
              >
                Call Spero Now
              </a>
              <a 
                href="https://stavrosrealtyteam.kw.com/contact" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
