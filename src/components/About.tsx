export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-serif">
              Meet Spero Stavros
            </h2>
            <p className="mt-6 text-lg text-primary-600 max-w-3xl">
              <strong>Experience • Integrity • Excellence</strong> - Spero brings over 26 years of award-winning experience in real estate, representing luxury, custom home buyers, sellers, and builders at any price point. As a top-producing Keller Williams agent, Spero combines unmatched market knowledge with his unique background as VP of Business Operations and partial owner of a mortgage company, providing invaluable insights that save clients time, stress, and money. Backed by Keller Williams' cutting-edge technology, comprehensive training, and global network of 170,000+ agents, Spero delivers world-class service with local expertise in Central Texas markets.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Schedule a Consultation
              </a>
              <a 
                href="https://stavrosrealtyteam.kw.com/agent" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Full Profile
              </a>
              <a
                href="/team"
                className="btn-secondary whitespace-nowrap"
              >
                Meet Our Team
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="/assets/SSTAVROS.jpg"
              alt="Spero Stavros - REALTOR®"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
