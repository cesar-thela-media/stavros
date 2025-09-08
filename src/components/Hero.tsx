import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-primary-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/60 z-10"></div>
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
          alt="Luxury home in Central Texas"
        />
      </div>
      
      <div className="relative z-20 mx-auto max-w-7xl px-4 py-24 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif">
            Luxury Real Estate in
            <span className="block text-gold-400">Central Texas</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Discover exceptional properties and personalized service with Stavros Realty. 
            Your dream home awaits in the heart of Texas.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/properties" className="btn-primary">
              View Properties
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-900">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="relative z-20 mx-auto max-w-4xl px-4 -mt-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">Location</label>
              <input
                type="text"
                placeholder="Austin, TX"
                className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">Property Type</label>
              <select className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent">
                <option>Any</option>
                <option>Single Family</option>
                <option>Condo</option>
                <option>Townhouse</option>
                <option>Land</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">Price Range</label>
              <select className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent">
                <option>Any</option>
                <option>$500K - $750K</option>
                <option>$750K - $1M</option>
                <option>$1M - $2M</option>
                <option>$2M+</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full btn-primary">
                Search Properties
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
