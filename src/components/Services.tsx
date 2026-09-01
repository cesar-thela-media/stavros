const services = [
  {
    title: "Luxury, Custom, & New Construction",
    description: "Expert guidance, experience, and valuable connections in building or buying luxury, custom, and/or any new construction home saving buyers, time and money as well as reducing challenges and stress.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Full Service Listing and Buyer Representation",
    description: "Proven strategies and skilled negotiation protect our clients investment at every step—delivering elevated service and exceptional value.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: "Mortgage & Financing Insights",
    description: "Get a unique advantage with VP-level mortgage company leadership experience providing invaluable financing guidance and solutions.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Global Network Access",
    description: "Cutting-edge technology, comprehensive market coverage with local, national and global luxury syndication options. Backed by a network of 170,000+ agents worldwide.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
]

export default function Services() {
  return (
    <section id="expertise" className="section-padding bg-misty-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black-900 sm:text-4xl font-heading">
            Spero's and The Stavros Realty Team's Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-600">
            From first-time buyers to luxury estates and custom home construction - comprehensive services backed by 28+ years of award-winning experience.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-champagne-100 text-champagne-600">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-black-900 font-heading">{service.title}</h3>
              <p className="mt-2 text-charcoal-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-misty-200 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="tel:+15126619404" 
                className="btn-primary"
              >
                Call Spero and His Team for a Consultation
              </a>
              <a 
                href="#kw-tools"
                className="btn-secondary"
              >
                Explore Our Tools
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
