const services = [
  {
    title: "Luxury Home Sales",
    description: "Expert guidance for buying and selling luxury properties with personalized attention to every detail.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: "Investment Properties",
    description: "Strategic investment opportunities and portfolio management for discerning real estate investors.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Market Analysis",
    description: "Comprehensive market insights and property valuations backed by local expertise and data.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Concierge Services",
    description: "Full-service support including staging, photography, legal assistance, and closing coordination.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
]

export default function Services() {
  return (
    <section className="section-padding bg-primary-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-serif">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-600">
            Comprehensive real estate services tailored to meet the unique needs of luxury property clients.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary-900">{service.title}</h3>
              <p className="mt-2 text-primary-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="btn-primary">
            Learn More About Our Services
          </button>
        </div>
      </div>
    </section>
  )
}
