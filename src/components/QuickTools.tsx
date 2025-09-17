const quickTools = [
  {
    title: "Get Your Home's Value",
    description: "Discover what your home is worth in today's market with our instant valuation tool",
    url: "https://stavrosrealtyteam.kw.com/home-valuation",
    buttonText: "Get Free Valuation",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    gradient: "from-charcoal-600 to-charcoal-700",
    bgColor: "bg-misty-100",
    textColor: "text-champagne-600"
  },
  {
    title: "Calculate Your Mortgage",
    description: "Estimate monthly payments, interest rates, and find the perfect loan for your budget",
    url: "https://stavrosrealtyteam.kw.com/mortgage-calculator",
    buttonText: "Calculate Now",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-champagne-600 to-champagne-700",
    bgColor: "bg-misty-100",
    textColor: "text-champagne-700"
  }
]

export default function QuickTools() {
  return (
    <section className="section-padding bg-gradient-to-br from-misty-50 to-misty-200">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-black-900 sm:text-4xl font-heading">
            Essential Real Estate Tools
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-600">
            Get instant access to the most important tools for your real estate journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {quickTools.map((tool, index) => (
            <div 
              key={index}
              className={`${tool.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-misty-300/50`}
            >
              <div className="flex items-start space-x-6">
                <div className={`${tool.textColor} flex-shrink-0`}>
                  {tool.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold ${tool.textColor} mb-3`}>
                    {tool.title}
                  </h3>
                  <p className="text-charcoal-700 mb-6 text-lg leading-relaxed">
                    {tool.description}
                  </p>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r ${tool.gradient} rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 group`}
                  >
                    {tool.buttonText}
                    <svg 
                      className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA Section */}
        <div className="mt-16">
            <div className="bg-gradient-to-r from-misty-50 to-white rounded-2xl p-12 shadow-xl border border-misty-300 mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-black-900 mb-6 font-heading">
                Need Expert Guidance?
              </h3>
              <p className="text-charcoal-700 mb-8 text-lg leading-relaxed">
                While our tools provide instant estimates, nothing replaces personalized advice from a seasoned professional. With over 26+ years of proven experience, Spero and his team will give you the personal advice online tools can't. Call today to discuss your real estate goals with confidence and comfort throughout the process.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="tel:+15126619404" 
                  className="btn-luxury flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Now</span>
                </a>
                <a 
                  href="#contact"
                  className="btn-secondary"
                >
                  Schedule a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
