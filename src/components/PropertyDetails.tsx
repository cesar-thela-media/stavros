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
  classification: 'home' | 'land'
  squareFootage: number | null
  bedrooms: number | null
  bathrooms: number | null
  features: string[]
  garage: string | null
  description: string
  gallery: string[]
  amenities: string[]
  location: {
    community: string
    schools: string
    nearby: string[]
  }
  lotSize?: string
}

interface PropertyDetailsProps {
  property: Property
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <div className="space-y-8">
      {/* Description */}
      <div>
        <h2 className="text-2xl font-bold font-serif text-navy-900 mb-4">About This Property</h2>
        <p className="text-primary-700 leading-relaxed text-lg">
          {property.description}
        </p>
      </div>

      {/* Key Features */}
      <div>
        <h3 className="text-xl font-semibold text-navy-900 mb-4">Key Features</h3>
        <div className="luxury-card">
          <h4 className="font-semibold text-navy-900 mb-2">Property Details</h4>
          <ul className="space-y-2 text-primary-700">
            {property.classification === 'home' ? (
              <>
                <li><span className="font-medium text-gold-700">Square Footage:</span> {property.squareFootage?.toLocaleString()} sq ft</li>
                <li><span className="font-medium text-gold-700">Bedrooms:</span> {property.bedrooms}</li>
                <li><span className="font-medium text-gold-700">Bathrooms:</span> {property.bathrooms}</li>
                {property.garage && (
                  <li><span className="font-medium text-gold-700">Garage:</span> {property.garage}</li>
                )}
              </>
            ) : (
              <>
                {property.lotSize && (
                  <li><span className="font-medium text-gold-700">Lot Size:</span> {property.lotSize}</li>
                )}
                <li><span className="font-medium text-gold-700">Zoning:</span> Residential</li>
                <li><span className="font-medium text-gold-700">Ready for:</span> Construction</li>
              </>
            )}
            <li><span className="font-medium text-gold-700">Features:</span> {property.features.join(', ')}</li>
            <li><span className="font-medium text-gold-700">Status:</span> {property.status}</li>
            <li><span className="font-medium text-gold-700">Completion:</span> {property.completionDate}</li>
          </ul>
        </div>
      </div>

      {/* Amenities - Only show for homes, not land listings */}
      {property.classification === 'home' && (
        <div>
          <h3 className="text-xl font-semibold text-navy-900 mb-4">Home Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {property.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-primary-700">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Location */}
      <div>
        <h3 className="text-xl font-semibold text-navy-900 mb-4">Location & Community</h3>
        <div className="bg-cream-100 p-6 rounded-2xl border border-cream-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-navy-900 mb-2">Community Information</h4>
              <ul className="space-y-2 text-primary-700">
                <li><span className="font-medium text-gold-700">Community:</span> {property.location.community}</li>
                <li><span className="font-medium text-gold-700">School District:</span> {property.location.schools}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-navy-900 mb-2">Nearby Attractions</h4>
              <ul className="space-y-1 text-primary-700">
                {property.location.nearby.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* About Horseshoe Bay */}
      <div>
        <h3 className="text-xl font-semibold text-navy-900 mb-4">About Horseshoe Bay</h3>
        <div className="luxury-card">
          <p className="text-primary-700 leading-relaxed">
            Horseshoe Bay is a desirable place to live, offering a resort-style lifestyle with access to Lake LBJ for water sports, world-class golf courses, and various amenities like a full-service spa and dining just minutes away at the Horseshoe Bay Resort. It is conveniently located near major cities like Austin and San Antonio for big-city amenities, though it is primarily a luxury, resort-focused community.
          </p>
        </div>
      </div>

      {/* Resources */}
      <div>
        <h3 className="text-xl font-semibold text-navy-900 mb-4">Resources</h3>
        <div className="luxury-card">
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <a 
              href="https://www.clubhsbresort.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold-700 hover:text-gold-800 font-medium underline"
            >
              Horseshoe Bay Club & Resort
            </a>
          </div>
        </div>
      </div>

      {/* Looking for Something Different */}
      <div>
        <h3 className="text-xl font-semibold text-navy-900 mb-4">Looking for Something Different?</h3>
        <div className="luxury-card text-center">
          <p className="text-primary-700 mb-4">
            If this home doesn't match your needs, click here to explore other custom home options—or give us a call to discuss building one tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/listings" 
              className="btn-secondary"
            >
              Browse Other Homes
            </a>
            <a 
              href="tel:+15126619404" 
              className="btn-primary"
            >
              Call to Discuss Custom Build
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
