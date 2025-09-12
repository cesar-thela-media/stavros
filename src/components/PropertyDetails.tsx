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
  description: string
  gallery: string[]
  amenities: string[]
  location: {
    community: string
    schools: string
    nearby: string[]
  }
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="luxury-card">
            <h4 className="font-semibold text-navy-900 mb-2">Property Details</h4>
            <ul className="space-y-2 text-primary-700">
              <li><span className="font-medium text-gold-700">Square Footage:</span> {property.squareFootage.toLocaleString()} sq ft</li>
              <li><span className="font-medium text-gold-700">Bedrooms:</span> {property.bedrooms}</li>
              <li><span className="font-medium text-gold-700">Bathrooms:</span> {property.bathrooms}</li>
              <li><span className="font-medium text-gold-700">Garage:</span> {property.garage}</li>
              <li><span className="font-medium text-gold-700">Special Rooms:</span> {property.features.join(', ')}</li>
            </ul>
          </div>
          <div className="luxury-card">
            <h4 className="font-semibold text-navy-900 mb-2">Construction Details</h4>
            <ul className="space-y-2 text-primary-700">
              <li><span className="font-medium text-gold-700">Builder:</span> {property.builder}</li>
              <li><span className="font-medium text-gold-700">Status:</span> {property.status}</li>
              <li><span className="font-medium text-gold-700">Completion:</span> {property.completionDate}</li>
              <li><span className="font-medium text-gold-700">Type:</span> Spec Home</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Amenities */}
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
    </div>
  )
}
