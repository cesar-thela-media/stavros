import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PropertyHero from '@/components/PropertyHero'
import PropertyDetails from '@/components/PropertyDetails'
import PropertyGallery from '@/components/PropertyGallery'
import ContactForm from '@/components/ContactForm'

// Property data - in a real app, this would come from a database or CMS
const properties = {
  '112-winchester': {
    id: '112-winchester',
    address: '112 Winchester',
    city: 'Horseshoe Bay',
    state: 'TX',
    zipCode: '78657',
    price: 925000,
    builder: 'Silverado Signature Homes',
    status: 'Under Construction',
    completionDate: 'February 2026',
    squareFootage: 2726,
    bedrooms: 4,
    bathrooms: 3,
    features: ['Study', 'Dining Room'],
    garage: '3 Car (2 + 1 Golf Cart)',
    description: 'Refined Hill Country Living at Horseshoe Bay\nWelcome to 112 Winchester, a thoughtfully crafted single-story residence that blends timeless elegance with modern livability. The exterior showcases smooth stucco, a charcoal metal roof, and striking architectural lines that create lasting curb appeal. Inside, expansive living spaces are filled with natural light and designed for seamless flow - perfect for both entertaining and everyday comfort.\nAt the heart of the home, the great room features soaring ceilings and wide glass doors that open to the covered patio. The chef\'s kitchen boasts generous counter space, a large island with seating, an upgraded stainless appliance package, walk-in pantry, and direct connection to both formal and casual dining areas—ideal for gatherings of any size.\nThe private owner\'s suite offers a true retreat, a spa-inspired bath featuring a soaking tub, walk-in shower, dual vanities, and an oversized walk-in closet. Three secondary bedrooms provide flexibility for guests, hobbies, or home office needs, while a dedicated study serves as a private workspace, library, or creative studio.\nOutdoor living takes center stage with a spacious covered patio, full outdoor kitchen, and ample room to enjoy peaceful Horseshoe Bay evenings. An oversized two-car garage plus a third bay for a golf cart complete the home, offering both convenience and storage.\nPerfectly positioned in the heart of Horseshoe Bay, 112 Winchester combines refined design with functional spaces ideal as a full-time residence or a Hill Country retreat.',
    gallery: [
      "/listings/winchester/gallery/front-view.png", 
      "/listings/winchester/gallery/FINAL PLANS 112 Winchester[16]_Page_04.jpg",
      "/listings/winchester/gallery/unknown.png",
      "/listings/winchester/gallery/Image 6.jpeg",
      "/listings/winchester/gallery/Image 5.jpeg",
      "/listings/winchester/gallery/Image 4.jpeg",
      "/listings/winchester/gallery/Image 3.jpeg"
    ],
    amenities: [
      'Open Floor Plan',
      'Gourmet Kitchen',
      'Primary Suite',
      'Study/Office',
      'Formal Dining',
      'Covered Patio',
      '3-Car Garage',
      'Golf Cart Bay'
    ],
    location: {
      community: 'Horseshoe Bay',
      schools: 'Llano ISD',
      nearby: ['Lake LBJ', 'Golf Courses', 'Marina', 'Country Club']
    }
  }
}

interface PageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return Object.keys(properties).map((slug) => ({
    slug: slug,
  }))
}

export function generateMetadata({ params }: PageProps) {
  const property = properties[params.slug as keyof typeof properties]
  
  if (!property) {
    return {
      title: 'Property Not Found - Stavros Realty',
    }
  }

  return {
    title: `${property.address}, ${property.city} ${property.state} ${property.zipCode} - Stavros Realty`,
    description: `${property.description} Contact Spero Stavros for more information about this ${property.squareFootage} sq ft home.`,
  }
}

export default function PropertyPage({ params }: PageProps) {
  const property = properties[params.slug as keyof typeof properties]

  if (!property) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        <PropertyHero property={property} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <PropertyGallery images={property.gallery} address={property.address} />
              <PropertyDetails property={property} />
            </div>
            <div className="lg:col-span-1">
              <ContactForm property={property} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
