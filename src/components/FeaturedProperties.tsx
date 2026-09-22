import Link from 'next/link'
import { getFeaturedProperties } from '@/data/properties'
import PropertyImageBadges from './PropertyImageBadges'

const properties = getFeaturedProperties()

export default function FeaturedProperties() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black-900 sm:text-4xl font-heading">
            Featured Properties
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {properties.map((property) => (
            <div key={property.id} className="group relative bg-white rounded-lg shadow-lg overflow-hidden border border-transparent hover:border-champagne-500 hover:ring-2 hover:ring-champagne-300/50 hover:shadow-xl transition-all duration-300">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden relative">
                <img
                  src={property.image}
                  alt={property.address}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <PropertyImageBadges ribbonText={property.imageRibbonText} />
                {property.status && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-champagne-500 text-black-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {property.status}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-black-900 font-heading">{property.address}</h3>
                  <span className="text-2xl font-bold text-champagne-600 border-l-4 border-champagne-400 pl-2">
                    {property.price ? `$${property.price.toLocaleString()}` : 'Sold'}
                  </span>
                </div>
                <p className="text-charcoal-600 mb-4">{property.city}, {property.state}</p>
                {property.status === "Sold" && !property.gallery?.length ? (
                  <div className="text-sm text-charcoal-500 mb-4">
                    <span className="text-champagne-600 font-semibold">Represented Builder</span>
                  </div>
                ) : property.classification === "home" ? (
                  <div className="flex items-center justify-between text-sm text-charcoal-500 mb-4">
                    <span>{property.bedrooms} beds</span>
                    <span>{property.bathrooms} baths</span>
                    <span>{property.squareFootage?.toLocaleString()} sq ft</span>
                  </div>
                ) : (
                  <div className="text-sm text-charcoal-500 mb-4 text-center">
                    <span className="text-champagne-600 font-semibold">Building Lot - {property.lotSize || "Ready for Construction"}</span>
                  </div>
                )}
                {(property.status !== "Sold" || Boolean(property.gallery?.length)) && (
                  <Link href={`/listings/${property.slug}`} className="mt-4 w-full btn-secondary block text-center">
                    View Details
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/listings" className="btn-primary">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  )
}
