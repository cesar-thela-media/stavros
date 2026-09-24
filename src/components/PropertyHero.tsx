import { Property } from '@/data/properties'
import PropertyImageBadges from './PropertyImageBadges'

interface PropertyHeroProps {
  property: Property
  heroImage: string
}

export default function PropertyHero({ property, heroImage }: PropertyHeroProps) {
  return (
    <div className="relative bg-primary-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/60 z-10"></div>
        <img
          className="w-full h-full object-cover"
          src={heroImage}
          alt={`${property.address} in ${property.city}`}
        />
      </div>
      <PropertyImageBadges ribbonText={property.imageRibbonText} variant="banner" />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-block bg-gold-500 text-navy-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {property.status}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-4">
            {property.address}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-4">
            {property.city}, {property.state} {property.zipCode}
          </p>
          <div className="mb-6 flex items-baseline justify-center gap-3">
            <div className="text-3xl md:text-4xl font-bold text-gold-400">
              ${property.price?.toLocaleString()}
            </div>
            {property.id === '112-winchester' && (
              <div className="text-lg md:text-xl text-white/70 line-through">
                $934,900
              </div>
            )}
          </div>
          {property.classification === 'home' ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">{property.squareFootage?.toLocaleString()}</div>
                <div className="text-sm md:text-base text-white">Square Feet</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">{property.bedrooms}</div>
                <div className="text-sm md:text-base text-white">Bedrooms</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">{property.bathrooms}</div>
                <div className="text-sm md:text-base text-white">Bathrooms</div>
              </div>
              {property.garage && (
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{property.garage}</div>
                  <div className="text-sm md:text-base text-white">Garage</div>
                </div>
              )}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">Prime Building Lot</div>
              {property.lotSize && (
                <div className="text-lg md:text-xl text-gold-400 mb-2">{property.lotSize}</div>
              )}
              <div className="text-sm md:text-base text-white">Approved Plans Included</div>
            </div>
          )}
          <div className="mt-8">
            <p className="text-lg text-white">
              <span className="font-semibold text-gold-400">{property.completionLabel ?? (property.builder === 'Resale' ? 'Year Built:' : 'Target Completion:')}</span> {property.completionDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
