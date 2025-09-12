export default function About() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-serif">
              Meet Spero Stavros
            </h2>
            <p className="mt-6 text-lg text-primary-600">
              <strong>Experience • Integrity • Excellence</strong> - Spero brings over 26 years of award-winning experience in real estate, representing luxury, custom home buyers, sellers, and builders at any price point.
            </p>
            <p className="mt-4 text-lg text-primary-600">
              As a top-producing Keller Williams agent, Spero combines unmatched market knowledge with his unique background as VP of Business Operations and partial owner of a mortgage company, providing invaluable insights that save clients time, stress, and money.
            </p>
            <p className="mt-4 text-lg text-primary-600">
              Backed by Keller Williams' cutting-edge technology, comprehensive training, and global network of 170,000+ agents, Spero delivers world-class service with local expertise in Central Texas markets.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600">26+</div>
                <div className="text-sm text-primary-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600">170K+</div>
                <div className="text-sm text-primary-600">Agent Network</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600">Multi-Million</div>
                <div className="text-sm text-primary-600">Dollar Club</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600">Custom</div>
                <div className="text-sm text-primary-600">Home Expert</div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Schedule Your Consultation
              </a>
              <a 
                href="https://stavrosrealtyteam.kw.com/agent" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Full Profile
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
              alt="Luxury real estate office"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
