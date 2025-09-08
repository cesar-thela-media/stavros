const properties = [
  {
    id: 1,
    title: "Modern Luxury Estate",
    location: "West Lake Hills, Austin",
    price: "$2,850,000",
    beds: 5,
    baths: 4.5,
    sqft: "4,200",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
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
          <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-serif">
            Featured Properties
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-600">
            Discover our handpicked selection of luxury properties in Central Texas&apos; most desirable locations.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {properties.map((property) => (
            <div key={property.id} className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-primary-900">{property.title}</h3>
                  <span className="text-2xl font-bold text-gold-600">{property.price}</span>
                </div>
                <p className="text-primary-600 mb-4">{property.location}</p>
                <div className="flex items-center justify-between text-sm text-primary-500">
                  <span>{property.beds} beds</span>
                  <span>{property.baths} baths</span>
                  <span>{property.sqft} sq ft</span>
                </div>
                <button className="mt-4 w-full btn-secondary">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="btn-primary">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  )
}
