import Link from 'next/link'

const properties = [
  {
    id: 1,
    title: "112 Winchester",
    location: "Horseshoe Bay, TX",
    price: "$925,000",
    classification: "home" as const,
    beds: 4,
    baths: 3,
    sqft: "2,842",
    image: "/listings/112-winchester/Winchester-IMG.jpeg",
    link: "/listings/112-winchester",
    status: "Available - Under Construction"
  },
  {
    id: 2,
    title: "820 Mountain Dew",
    location: "Horseshoe Bay, TX",
    price: "$959,000",
    classification: "home" as const,
    beds: 3,
    baths: 3,
    sqft: "2,732",
    image: "/listings/mountain-dew/820 Mountain Dew Final Render 2.png",
    link: "/listings/mountain-dew",
    status: "Available - Build Ready"
  },
  {
    id: 3,
    title: "1405 Grafton Ln",
    location: "Pflugerville, TX",
    price: "$474,900",
    classification: "home" as const,
    beds: 4,
    baths: 3,
    sqft: "2,392",
    image: "/listings/1405-grafton/hero.jpeg",
    link: "/listings/1405-grafton",
    status: "Active"
  },
  {
    id: 4,
    title: "820 Mountain Dew",
    location: "Horseshoe Bay, TX",
    price: "$58,900",
    classification: "land" as const,
    lotSize: "0.25 acres",
    beds: null,
    baths: null,
    sqft: null,
    image: "/listings/mountain-dew-land/Mountain Dew View Image.jpg",
    link: "/listings/mountain-dew-land",
    status: "Available - Land Only"
  },
  {
    id: 5,
    title: "126 Lipizzan Lane",
    location: "La Ventana",
    price: "Sold",
    beds: null,
    baths: null,
    sqft: null,
    image: "https://static.wixstatic.com/media/c604b9_b8b2c71ae0a14b279356153cc4b254d2~mv2.jpeg/v1/fill/w_313,h_235,q_75,enc_avif,quality_auto/c604b9_b8b2c71ae0a14b279356153cc4b254d2~mv2.jpeg",
    status: "Sold"
  },
  {
    id: 6,
    title: "2109 Skyview Ridge Pass",
    location: "Tavisio",
    price: "Sold",
    beds: null,
    baths: null,
    sqft: null,
    image: "https://static.wixstatic.com/media/c604b9_8062a612658f4e3bb946ee8d4c56e8c9~mv2.jpeg/v1/fill/w_314,h_235,fp_0.39_0.43,q_75,enc_avif,quality_auto/c604b9_8062a612658f4e3bb946ee8d4c56e8c9~mv2.jpeg",
    status: "Sold"
  },
  {
    id: 7,
    title: "144 Shady Hill Loop",
    location: "Liberty Hill",
    price: "Sold",
    beds: null,
    baths: null,
    sqft: null,
    image: "https://static.wixstatic.com/media/c604b9_4bab1966ed87425bbaa131b88538aab0~mv2.jpeg/v1/fill/w_313,h_235,q_75,enc_avif,quality_auto/c604b9_4bab1966ed87425bbaa131b88538aab0~mv2.jpeg",
    status: "Sold"
  },
  {
    id: 8,
    title: "170 Lone Spur Lane",
    location: "Driftwood",
    price: "Sold",
    beds: null,
    baths: null,
    sqft: null,
    image: "https://static.wixstatic.com/media/c604b9_9ecbfb7d29b7488ab6bff74c81526880~mv2.jpeg/v1/fill/w_313,h_235,q_75,enc_avif,quality_auto/c604b9_9ecbfb7d29b7488ab6bff74c81526880~mv2.jpeg",
    status: "Sold"
  },
  {
    id: 8,
    title: "213 Northcrest Drive",
    location: "Liberty Hill",
    price: "Sold",
    beds: null,
    baths: null,
    sqft: null,
    image: "https://static.wixstatic.com/media/c604b9_96a0af3d6f6942c09f5c59fdb970a4cd~mv2.jpeg/v1/fill/w_314,h_235,q_75,enc_avif,quality_auto/c604b9_96a0af3d6f6942c09f5c59fdb970a4cd~mv2.jpeg",
    status: "Sold"
  },
  {
    id: 9,
    title: "1638 Trebled Waters",
    location: "Driftwood",
    price: "Sold",
    beds: null,
    baths: null,
    sqft: null,
    image: "https://static.wixstatic.com/media/c604b9_ebaceacae4ab4046bff5938145e5e2ba~mv2.jpeg/v1/fill/w_313,h_235,q_75,enc_avif,quality_auto/c604b9_ebaceacae4ab4046bff5938145e5e2ba~mv2.jpeg",
    status: "Sold"
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
                {property.status === "Sold" ? (
                  <div className="text-sm text-charcoal-500 mb-4">
                    <span className="text-champagne-600 font-semibold">Represented Builder</span>
                  </div>
                ) : property.classification === "home" ? (
                  <div className="flex items-center justify-between text-sm text-charcoal-500 mb-4">
                    <span>{property.beds} beds</span>
                    <span>{property.baths} baths</span>
                    <span>{property.sqft} sq ft</span>
                  </div>
                ) : (
                  <div className="text-sm text-charcoal-500 mb-4 text-center">
                    <span className="text-champagne-600 font-semibold">Building Lot - {property.lotSize || "Ready for Construction"}</span>
                  </div>
                )}
                {property.status !== "Sold" && (
                  property.link ? (
                    <Link href={property.link} className="mt-4 w-full btn-secondary block text-center">
                      View Details
                    </Link>
                  ) : (
                    <button className="mt-4 w-full btn-secondary">
                      View Details
                    </button>
                  )
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
