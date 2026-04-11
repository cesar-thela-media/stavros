import Link from 'next/link'
import Image from 'next/image'
import { Property } from '@/data/properties'

interface SimilarListingsProps {
  currentProperty: Property
  allProperties: Record<string, Property>
}

export default function SimilarListings({ currentProperty, allProperties }: SimilarListingsProps) {
  let similarProperties: Property[] = []
  let isManualSelection = false
  
  // Check if manual similar listings are specified
  if (currentProperty.similarListings && currentProperty.similarListings.length > 0) {
    // Use manual selection - find properties by their propertyId
    isManualSelection = true
    similarProperties = Object.values(allProperties).filter(
      property => property.propertyId && currentProperty.similarListings!.includes(property.propertyId)
    )
  } else {
    // Fallback to automatic zip code matching, excluding current property
    isManualSelection = false
    similarProperties = Object.values(allProperties).filter(
      property => 
        property.zipCode === currentProperty.zipCode && 
        property.id !== currentProperty.id
    )
  }

  // Don't render if no similar properties found
  if (similarProperties.length === 0) {
    return null
  }

  // Determine heading text based on selection type
  const headingText = isManualSelection 
    ? "Similar Listings" 
    : `Other Listings in ${currentProperty.zipCode}`

  return (
    <div className="bg-cream-50 rounded-2xl p-8 border border-cream-200">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold font-serif text-navy-900 mb-2">
          {headingText}
        </h3>
        <p className="text-primary-600">
          {isManualSelection 
            ? "Handpicked properties that might interest you"
            : "Discover more available properties in the same area"
          }
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {similarProperties.map((property) => (
          <Link
            key={property.id}
            href={`/listings/${property.id}`}
            className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Property Image */}
            <div className="relative aspect-video">
              <Image
                src={property.gallery?.[0] || property.image || '/assets/hero4.png'}
                alt={`${property.address} in ${property.city}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-gold-500 text-navy-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {property.status}
                </span>
              </div>
            </div>
            
            {/* Property Details */}
            <div className="p-6">
              <h4 className="text-xl font-bold font-serif text-navy-900 mb-2 group-hover:text-gold-700 transition-colors">
                {property.address}
              </h4>
              <p className="text-primary-600 mb-2">
                {property.city}, {property.state} {property.zipCode}
              </p>
              <p className="text-2xl font-bold text-gold-700 mb-4">
                ${property.price?.toLocaleString()}
              </p>
              
              {property.classification === 'home' ? (
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="font-semibold text-navy-900">{property.squareFootage?.toLocaleString()}</div>
                    <div className="text-sm text-primary-600">Sq Ft</div>
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900">{property.bedrooms}</div>
                    <div className="text-sm text-primary-600">Beds</div>
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900">{property.bathrooms}</div>
                    <div className="text-sm text-primary-600">Baths</div>
                  </div>
                </div>
              ) : (
                <div className="mb-4 text-center">
                  <div className="text-lg font-semibold text-navy-900">Building Lot</div>
                  <div className="text-sm text-primary-600">{property.lotSize || 'Ready for Construction'}</div>
                </div>
              )}
              
              <p className="text-primary-700 mb-4 line-clamp-2">
                {property.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="font-medium text-gold-700">Completion:</span> 
                  <span className="text-primary-700 ml-1">{property.completionDate}</span>
                </div>
                
                <span className="inline-flex items-center text-gold-700 font-medium group-hover:text-gold-800">
                  View Details
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* View All Listings Link */}
      <div className="mt-8 text-center">
        <Link 
          href="/listings" 
          className="btn-primary"
        >
          View All Available Properties
        </Link>
      </div>
    </div>
  )
}
