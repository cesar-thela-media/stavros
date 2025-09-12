interface Property {
  id: string
  address: string
  city: string
  state: string
  zipCode: string
  price: number
  builder: string
  status: string
  completionDate: string
  squareFootage: number
  bedrooms: number
  bathrooms: number
  features: string[]
  garage: string
}

interface PropertyHeroProps {
  property: Property
}

export default function PropertyHero({ property }: PropertyHeroProps) {
  return (
    <div className="relative bg-primary-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/60 z-10"></div>
        <img
          className="w-full h-full object-cover"
          src="/listings/winchester/Inspiration Pic - 112 Winchester HSB.png"
          alt={`${property.address} in ${property.city}`}
        />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-block bg-gold-500 text-navy-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {property.status}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-4">
            {property.address}
          </h1>
          <p className="text-xl md:text-2xl text-cream-200 mb-4">
            {property.city}, {property.state} {property.zipCode}
          </p>
          <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-6">
            ${property.price.toLocaleString()}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">{property.squareFootage.toLocaleString()}</div>
              <div className="text-sm md:text-base text-cream-300">Square Feet</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">{property.bedrooms}</div>
              <div className="text-sm md:text-base text-cream-300">Bedrooms</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">{property.bathrooms}</div>
              <div className="text-sm md:text-base text-cream-300">Bathrooms</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">3</div>
              <div className="text-sm md:text-base text-cream-300">Car Garage</div>
            </div>
          </div>
          <div className="mt-8 space-y-2">
            <p className="text-lg text-cream-200">
              <span className="font-semibold text-gold-400">Builder:</span> {property.builder}
            </p>
            <p className="text-lg text-cream-200">
              <span className="font-semibold text-gold-400">Target Completion:</span> {property.completionDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
