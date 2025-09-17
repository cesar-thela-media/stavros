const marketStats = [
  {
    label: "Average Home Value",
    value: "$685K",
    change: "+12.5%",
    trend: "up",
    description: "Year over year growth"
  },
  {
    label: "Days on Market",
    value: "28",
    change: "-15%",
    trend: "down",
    description: "Faster than last year"
  },
  {
    label: "Market Activity",
    value: "High",
    change: "+8%",
    trend: "up",
    description: "Active buyer demand"
  },
  {
    label: "Price per Sq Ft",
    value: "$245",
    change: "+9.2%",
    trend: "up",
    description: "Strong appreciation"
  }
]

const neighborhoods = [
  {
    name: "Downtown Austin",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Allendale",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Westlake Highlands - Austin",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Rollingwood",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Steiner Ranch",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Lakeway",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Bee Cave",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Dripping Springs",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Wimberley",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Cedar Park",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Liberty Hill",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Buda",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
]

export default function MarketInsights() {
  return (
    <section className="section-padding bg-primary-900 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-serif text-white">
            Central Texas Market Insights
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-300">
            Stay informed with the latest market trends and neighborhood data from your local experts
          </p>
        </div>

        {/* Market Statistics - Hidden but kept for future use */}
        {false && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-primary-800 rounded-lg p-6 text-center hover:bg-primary-700 transition-colors duration-200"
            >
              <div className="text-3xl font-bold text-gold-400 mb-2">
                {stat.value}
              </div>
              <div className="text-primary-200 font-medium mb-2">
                {stat.label}
              </div>
              <div className={`flex items-center justify-center space-x-1 text-sm ${
                stat.trend === 'up' ? 'text-green-400' : 'text-blue-400'
              }`}>
                <svg 
                  className={`w-4 h-4 ${stat.trend === 'up' ? 'rotate-0' : 'rotate-180'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
                <span className="font-semibold">{stat.change}</span>
              </div>
              <div className="text-primary-400 text-xs mt-1">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
        )}

        {/* Featured Neighborhoods */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gold-400">
            Popular Neighborhoods
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <a
                key={index}
                href={`https://stavrosrealtyteam.kw.com/search?q=${neighborhood.name.toLowerCase().replace(/\s+/g, '+')}+tx`}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer block"
              >
                <div className="relative overflow-hidden rounded-lg bg-primary-800 hover:shadow-2xl transition-all duration-300">
                  <img
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-semibold text-lg mb-3 group-hover:text-gold-300 transition-colors">
                      {neighborhood.name}
                    </h4>
                    <div className="flex items-center text-white/70 text-sm group-hover:text-gold-300 transition-colors">
                      <span>Search Properties</span>
                      <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gold-600 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              Want Detailed Market Analysis?
            </h3>
            <p className="text-primary-800 mb-6 text-lg">
              Get personalized market reports, neighborhood comparisons, and investment insights from cutting edge technology and Spero and his Team's years of expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="bg-primary-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors duration-200"
              >
                Request a Detailed Market Report on Any Neighborhood
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
