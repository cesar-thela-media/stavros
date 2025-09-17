import Link from 'next/link'

const properties = [
  {
    id: 1,
    title: "112 Winchester",
    location: "Horseshoe Bay, TX",
    price: "$925,000",
    beds: 4,
    baths: 3,
    sqft: "2,726",
    image: "/listings/winchester/IMG_3295.png",
    link: "/listings/112-winchester",
    status: "Under Construction"
  },
  {
    id: 2,
    title: "Hill Country Retreat",
    location: "Dripping Springs",
    price: "$1,650,000",
    beds: 4,
    baths: 3,
    sqft: "3,800",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80"
  },
  {
    id: 3,
    title: "Downtown Penthouse",
    location: "Downtown Austin",
    price: "$3,200,000",
    beds: 3,
    baths: 3.5,
    sqft: "2,900",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
]

export default function FeaturedProperties() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black-900 sm:text-4xl font-heading">
            Featured Properties
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-600">
            Discover our handpicked selection of luxury properties in Central Texas&apos; most desirable locations.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {properties.map((property) => (
            <div key={property.id} className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
                  <h3 className="text-xl font-semibold text-black-900 font-heading">{property.title}</h3>
                  <span className="text-2xl font-bold text-champagne-600">{property.price}</span>
                </div>
                <p className="text-charcoal-600 mb-4">{property.location}</p>
                <div className="flex items-center justify-between text-sm text-charcoal-500">
                  <span>{property.beds} beds</span>
                  <span>{property.baths} baths</span>
                  <span>{property.sqft} sq ft</span>
                </div>
                {property.link ? (
                  <Link href={property.link} className="mt-4 w-full btn-secondary block text-center">
                    View Details
                  </Link>
                ) : (
                  <button className="mt-4 w-full btn-secondary">
                    View Details
                  </button>
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
