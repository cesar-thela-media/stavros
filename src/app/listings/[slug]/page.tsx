import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PropertyHero from '@/components/PropertyHero'
import PropertyDetails from '@/components/PropertyDetails'
import PropertyGallery from '@/components/PropertyGallery'
import ContactForm from '@/components/ContactForm'
import SimilarListings from '@/components/SimilarListings'
import { getHeroImageWithFallback } from '@/utils/getHeroImage'

// Property data - in a real app, this would come from a database or CMS
const properties = {
  '112-winchester': {
    id: '112-winchester',
    propertyId: 'PROP-001',
    similarListings: ['PROP-002'], // Empty array = auto-show same zip code listings
    address: '112 Winchester',
    city: 'Horseshoe Bay',
    state: 'TX',
    zipCode: '78657',
    price: 925000,
    builder: 'Silverado Signature Homes',
    status: 'Available - Under Construction',
    completionDate: 'February 2026',
    classification: 'home' as const,
    squareFootage: 2842,
    bedrooms: 4,
    bathrooms: 3,
    features: ['Study', 'Dining Room'],
    garage: '3 Car (2 + 1 Golf Cart)',
    description: 'Refined Hill Country Living at Horseshoe Bay\nWelcome to 112 Winchester, a thoughtfully crafted single-story residence that blends timeless elegance with modern livability. The exterior showcases smooth stucco, a charcoal metal roof, and striking architectural lines that create lasting curb appeal. Inside, expansive living spaces are filled with natural light and designed for seamless flow - perfect for both entertaining and everyday comfort.\nAt the heart of the home, the great room features soaring ceilings and wide glass doors that open to the covered patio. The chef\'s kitchen boasts generous counter space, a large island with seating, an upgraded stainless appliance package, walk-in pantry, and direct connection to both formal and casual dining areas—ideal for gatherings of any size.\nThe private owner\'s suite offers a true retreat, a spa-inspired bath featuring a soaking tub, walk-in shower, dual vanities, and an oversized walk-in closet. Three secondary bedrooms provide flexibility for guests, hobbies, or home office needs, while a dedicated study serves as a private workspace, library, or creative studio.\nOutdoor living takes center stage with a spacious covered patio, optional outdoor kitchen, and ample room to enjoy peaceful Horseshoe Bay evenings. An oversized two-car garage plus a third bay for a golf cart complete the home, offering both convenience and storage.\nPerfectly positioned in the heart of Horseshoe Bay, 112 Winchester combines refined design with functional spaces ideal as a full-time residence or a Hill Country retreat.',
    gallery: [
      "/listings/112-winchester/gallery/IMG_3295.png",
      "/listings/112-winchester/gallery/FINAL PLANS 112 Winchester[16]_Page_04.jpg",
      "/listings/112-winchester/gallery/unknown.png",
      "/listings/112-winchester/gallery/Image 6.jpeg",
      "/listings/112-winchester/gallery/Image 5.jpeg",
      "/listings/112-winchester/gallery/Image 4.jpeg",
      "/listings/112-winchester/gallery/Image 3.jpeg",
      "/listings/112-winchester/gallery/Image 7.png",
      "/listings/112-winchester/gallery/Image 8.jpeg"
    ],
    amenities: [
      'Open Floor Plan',
      'Gourmet Kitchen',
      'Primary Retreat',
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
  },
  'mountain-dew': {
    id: 'mountain-dew',
    propertyId: 'PROP-002',
    similarListings: ['PROP-001', 'PROP-003'], // Manual selection - show mountain-dew-land
    address: '820 Mountain Dew',
    city: 'Horseshoe Bay',
    state: 'TX',
    zipCode: '78620',
    price: 959000,
    builder: 'Custom Builder',
    status: 'Available - Build Ready',
    completionDate: 'TBD - Build To Suit',
    classification: 'home' as const,
    squareFootage: 2732,
    bedrooms: 3,
    bathrooms: 3,
    features: ['Study', 'Dining'],
    garage: '2 Car Garage',
    description: 'Welcome to your future home—a beautifully designed 2,732 square-foot residence that’s all about personalization. This to-be-built property offers three spacious bedrooms, three baths, and a dedicated study—ideal for a home office or creative space. With an open floor plan that flows effortlessly, you’ll love the gourmet kitchen and the generous dining area perfect for gatherings. The primary retreat is a true sanctuary, and you’ll have a large covered patio and outdoor kitchen to enjoy outdoor living year-round. Plus, there’s a roomy three-car garage for all your storage needs. And the best part? You get to tailor the details to suit your lifestyle. Let’s make this home uniquely yours.',
    gallery: [
      "/listings/mountain-dew/gallery/820 Mountain Dew Final Render 2.png",
      "/listings/mountain-dew/gallery/Mountain Dew View Image.jpg",
      "/listings/mountain-dew/gallery/mountain-dew-wiring.png"
    ],
    amenities: [
      'Open Floor Plan',
      'Gourmet Kitchen',
      'Primary Retreat',
      'Study/Office',
      'Large Dining Area',
      'Covered Patio',
      '3-Car Garage',
    ],
    location: {
      community: 'Horseshoe Bay',
      schools: 'Llano ISD',
      nearby: ['Lake LBJ', 'Golf Courses', 'Marina', 'Country Club']
    }
  },
  'mountain-dew-land': {
    id: 'mountain-dew-land',
    propertyId: 'PROP-003',
    similarListings: ['PROP-002', 'PROP-001'], // Manual selection - show mountain-dew home
    address: '820 Mountain Dew',
    city: 'Horseshoe Bay',
    state: 'TX',
    zipCode: '78620',
    price: 58900,
    builder: 'Custom Builder',
    status: 'Available - Land Only',
    completionDate: 'Ready for Construction',
    classification: 'land' as const,
    squareFootage: null,
    lotSize: '0.25 acres',
    bedrooms: null,
    bathrooms: null,
    features: ['Approved Plans Included'],
    garage: null,
    description: 'Discover your perfect canvas in the heart of Horsehoe Bay. This quarter-acre piece of land offers not just a space to build, but a breathtaking backdrop for your future home. With sweeping views that capture the essence of the Hill Country, this lot is ready for you to bring your vision to life. You have the freedom to design and build a home that truly suits your needs, whether you\'re dreaming of a cozy retreat or a spacious family getaway. Embrace the opportunity to create something unique on this prime piece of land, and let the stunning surroundings inspire your custom build. Ready to start your journey? This land is your first step toward the home you\'ve always wanted.',
    gallery: [
      "/listings/mountain-dew-land/Mountain Dew View Image.jpg"
    ],
    amenities: [
      'Approved Plans Included',
      'Open Floor Plan Design',
      'Modern Kitchen Layout',
      'Primary Retreat',
      'Study/Office',
      'Hill Country Views',
      '2-Car Garage',
      'Custom Design Ready'
    ],
    location: {
      community: 'Horseshoe Bay',
      schools: 'Llano ISD',
      nearby: ['Lake LBJ', 'Golf Courses', 'Marina', 'Country Club']
    }
  }
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return Object.keys(properties).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  const property = properties[resolvedParams.slug as keyof typeof properties]
  
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

export default async function PropertyPage({ params }: PageProps) {
  const resolvedParams = await params
  const property = properties[resolvedParams.slug as keyof typeof properties]

  if (!property) {
    notFound()
  }

  // Automatically detect the hero image from the property's folder
  const heroImage = getHeroImageWithFallback(property.id, property.gallery)

  return (
    <>
      <Header />
      <main>
        <PropertyHero property={property} heroImage={heroImage} />
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
          
          {/* Similar Listings Section */}
          <div className="mt-16">
            <SimilarListings currentProperty={property} allProperties={properties} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
