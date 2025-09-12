import Link from 'next/link'
import PropertySearch from './PropertySearch'

export default function Hero() {
  return (
    <section className="relative bg-primary-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/60 z-10"></div>
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"          alt="Modern luxury home in Central Texas"
        />
      </div>
      
      <div className="relative z-20 mx-auto max-w-7xl px-4 py-24 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif">
            Central Texas Real Estate
            <span className="block text-gold-400">Powered by Keller Williams Excellence</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Experience 26+ years of award-winning service with Spero Stavros and the Stavros Realty Team. 
            From luxury estates to first-time buyers, we deliver results with cutting-edge technology and personalized care.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a 
              href="https://stavrosrealtyteam.kw.com/search" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Properties
            </a>
            <Link href="#contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-900">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
      
      {/* Enhanced Search Bar */}
      <div className="relative z-20 mx-auto max-w-6xl px-4 -mt-8 sm:px-6 lg:px-8">
        <PropertySearch />
      </div>
    </section>
  )
}
