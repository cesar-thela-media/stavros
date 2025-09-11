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
    name: "West Lake Hills",
    avgPrice: "$1.2M",
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Tarrytown",
    avgPrice: "$950K",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Cedar Park",
    avgPrice: "$525K",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Leander",
    avgPrice: "$475K",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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

        {/* Market Statistics */}
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

        {/* Featured Neighborhoods */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gold-400">
            Popular Neighborhoods
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg bg-primary-800">
                  <img
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-semibold text-lg mb-1">
                      {neighborhood.name}
                    </h4>
                    <p className="text-gold-400 font-medium">
                      Avg: {neighborhood.avgPrice}
                    </p>
                  </div>
                </div>
              </div>
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
              Get personalized market reports, neighborhood comparisons, and investment insights from Spero's 26+ years of local expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://stavrosrealtyteam.kw.com/market-reports" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>View Market Reports</span>
              </a>
              <a 
                href="/contact"
                className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-primary-100 transition-colors duration-200"
              >
                Request Custom Analysis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
