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
    description: 'Stunning spec home under construction by Silverado Signature Homes in the prestigious Horseshoe Bay community. This thoughtfully designed home features 4 bedrooms, 3 bathrooms, a dedicated study, formal dining room, and a 3-car garage with additional golf cart space.',
    gallery: ["/listings/winchester/gallery/front-view.png", "/listings/winchester/gallery/FINAL PLANS 112 Winchester[16]_Page_04.jpg"], // Additional gallery images will be added to /public/listings/winchester/gallery/
    amenities: [
      'Open Floor Plan',
      'Gourmet Kitchen',
      'Master Suite',
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
