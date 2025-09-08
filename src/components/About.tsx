export default function About() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-serif">
              About Stavros Realty
            </h2>
            <p className="mt-6 text-lg text-primary-600">
              With over two decades of experience in Central Texas luxury real estate, Stavros Realty has established itself as the premier choice for discerning buyers and sellers.
            </p>
            <p className="mt-4 text-lg text-primary-600">
              Our deep understanding of the local market, combined with our commitment to exceptional service, ensures that every client receives personalized attention and expert guidance throughout their real estate journey.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600">500+</div>
                <div className="text-sm text-primary-600">Properties Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600">$2B+</div>
                <div className="text-sm text-primary-600">In Sales Volume</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600">20+</div>
                <div className="text-sm text-primary-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600">98%</div>
                <div className="text-sm text-primary-600">Client Satisfaction</div>
              </div>
            </div>

            <div className="mt-8">
              <button className="btn-primary">
                Meet Our Team
              </button>
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
