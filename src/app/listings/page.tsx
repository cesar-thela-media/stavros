import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Property data - in a real app, this would come from a database or CMS
const properties = [
  {
    id: '112-winchester',
    slug: '112-winchester',
    address: '112 Winchester',
    city: 'Horseshoe Bay',
    state: 'TX',
    zipCode: '78657',
    price: 925000,
    builder: 'Silverado Signature Homes',
    status: 'Available - Under Construction',
    completionDate: 'February 2026',
    classification: 'home' as const,
    squareFootage: 2726,
    bedrooms: 4,
    bathrooms: 3,
    features: ['Study', 'Dining Room'],
    garage: '3 Car (2 + 1 Golf Cart)',
    description: 'Stunning spec home under construction by Silverado Signature Homes in the prestigious Horseshoe Bay community.',
    image: '/listings/winchester/Inspiration Pic - 112 Winchester HSB.png'
  },
  {
    id: 'mountain-dew',
    slug: 'mountain-dew',
    address: '820 Mountain Dew',
    city: 'Horseshoe Bay',
    state: 'TX',
    zipCode: '78620',
    price: 959000,
    builder: 'Custom Builder',
    status: 'Available - Build Ready',
    completionDate: 'TBD',
    classification: 'home' as const,
    squareFootage: 2732,
    bedrooms: 3,
    bathrooms: 3,
    features: ['Study', 'Open Floor Plan'],
    garage: '2 Car Garage',
    description: 'Stunning custom home in Horseshoe Bay featuring 3 bedrooms, 3 bathrooms, and a study in 2,732 square feet of thoughtfully designed living space.',
    image: '/listings/mountain-dew/820 Mountain Dew Final Render 2.png'
  },
  {
    id: 'mountain-dew-land',
    slug: 'mountain-dew-land',
    address: '820 Mountain Dew',
    city: 'Horseshoe Bay',
    state: 'TX',
    zipCode: '78620',
    price: 58900,
    builder: 'Custom Builder',
    status: 'Available - Land Only',
    completionDate: 'Ready for Construction',
    classification: 'land' as const,
    lotSize: '0.25 acres',
    squareFootage: null,
    bedrooms: null,
    bathrooms: null,
    features: ['Approved Plans Included'],
    garage: null,
    description: 'Prime 0.25-acre building lot in Horseshoe Bay with approved plans for a stunning 3-bedroom, 3-bathroom home with study.',
    image: '/listings/mountain-dew-land/20230317_171815.jpeg'
  }
]

export const metadata = {
  title: 'Property Listings - Stavros Realty',
  description: 'Browse our current property listings featuring luxury homes and new construction in Central Texas.',
}

export default function ListingsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <div className="relative bg-primary-50 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/assets/hero4.png"
              alt="Luxury home exterior"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/90"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-4 drop-shadow-lg">
                Available Properties
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
                Discover exceptional properties and new construction opportunities in Central Texas
              </p>
            </div>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Link
                key={property.id}
                href={`/listings/${property.slug}`}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-video">
                  <Image
                    src={property.image}
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
                
                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif text-navy-900 mb-2">
                    {property.address}
                  </h3>
                  <p className="text-primary-600 mb-2">
                    {property.city}, {property.state} {property.zipCode}
                  </p>
                  <p className="text-2xl font-bold text-gold-700 mb-4">
                    ${property.price.toLocaleString()}
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
                  
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium text-gold-700">Completion:</span> <span className="text-primary-700">{property.completionDate}</span></p>
                  </div>
                  
                  <div className="mt-6">
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

          {/* Call to Action */}
          <div className="mt-16">
            <div className="bg-cream-100 rounded-2xl overflow-hidden border border-cream-300">
              <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
                {/* Left side - Text and Button */}
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold font-serif text-navy-900 mb-4">
                    Looking for Something Different?
                  </h2>
                  <p className="text-primary-700 mb-6 text-lg">
                    Explore other custom home options—or give us a call to discuss building one tailored just for you.
                  </p>
                  <div>
                    <a
                      href="tel:+15126619404"
                      className="btn-primary"
                    >
                      Call to discuss a custom build
                    </a>
                  </div>
                </div>
                
                {/* Right side - Image */}
                <div className="relative">
                  <Image
                    src="/assets/Image.jpeg"
                    alt="Spero Stavros Real Estate Professional"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
