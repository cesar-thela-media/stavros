import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PropertyHero from '@/components/PropertyHero'
import PropertyDetails from '@/components/PropertyDetails'
import PropertyGallery from '@/components/PropertyGallery'
import ContactForm from '@/components/ContactForm'
import { getHeroImageWithFallback } from '@/utils/getHeroImage'

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
    status: 'Available - Under Construction',
    completionDate: 'February 2026',
    classification: 'home' as const,
    squareFootage: 2726,
    bedrooms: 4,
    bathrooms: 3,
    features: ['Study', 'Dining Room'],
    garage: '3 Car (2 + 1 Golf Cart)',
    description: 'Refined Hill Country Living at Horseshoe Bay\nWelcome to 112 Winchester, a thoughtfully crafted single-story residence that blends timeless elegance with modern livability. The exterior showcases smooth stucco, a charcoal metal roof, and striking architectural lines that create lasting curb appeal. Inside, expansive living spaces are filled with natural light and designed for seamless flow - perfect for both entertaining and everyday comfort.\nAt the heart of the home, the great room features soaring ceilings and wide glass doors that open to the covered patio. The chef\'s kitchen boasts generous counter space, a large island with seating, an upgraded stainless appliance package, walk-in pantry, and direct connection to both formal and casual dining areas—ideal for gatherings of any size.\nThe private owner\'s suite offers a true retreat, a spa-inspired bath featuring a soaking tub, walk-in shower, dual vanities, and an oversized walk-in closet. Three secondary bedrooms provide flexibility for guests, hobbies, or home office needs, while a dedicated study serves as a private workspace, library, or creative studio.\nOutdoor living takes center stage with a spacious covered patio, full outdoor kitchen, and ample room to enjoy peaceful Horseshoe Bay evenings. An oversized two-car garage plus a third bay for a golf cart complete the home, offering both convenience and storage.\nPerfectly positioned in the heart of Horseshoe Bay, 112 Winchester combines refined design with functional spaces ideal as a full-time residence or a Hill Country retreat.',
    gallery: [
      "/listings/112-winchester/gallery/IMG_3295.png",
      "/listings/112-winchester/gallery/FINAL PLANS 112 Winchester[16]_Page_04.jpg",
      "/listings/112-winchester/gallery/unknown.png",
      "/listings/112-winchester/gallery/Image 6.jpeg",
      "/listings/112-winchester/gallery/Image 5.jpeg",
      "/listings/112-winchester/gallery/Image 4.jpeg",
      "/listings/112-winchester/gallery/Image 3.jpeg"
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
    description: 'Stunning Custom Home in Horseshoe Bay\nDiscover this beautifully designed 3-bedroom, 3-bathroom home with study, perfectly situated in the prestigious Horseshoe Bay community. This 2,732 square foot residence offers the perfect blend of modern comfort and Hill Country charm.\nThe thoughtfully designed floor plan features spacious living areas with an open concept design that flows seamlessly from room to room. The well-appointed kitchen serves as the heart of the home, ideal for both everyday living and entertaining guests.\nThe private master suite provides a peaceful retreat, while two additional bedrooms offer flexibility for family, guests, or home office needs. The dedicated study provides the perfect space for remote work or quiet reading.\nLocated in the sought-after Horseshoe Bay community, this home offers resort-style living with access to golf courses, marina, and Lake LBJ while maintaining the peaceful atmosphere that makes this area so desirable. With excellent amenities and beautiful Hill Country surroundings, this property represents an exceptional opportunity.',
    gallery: [
      "/listings/mountain-dew/gallery/820 Mountain Dew Final Render 2.png",
      "/listings/mountain-dew/gallery/20230317_171815.jpeg",
      "/listings/mountain-dew/gallery/mountain-dew-wiring.png"
    ],
    amenities: [
      'Open Floor Plan',
      'Modern Kitchen',
      'Primary Retreat',
      'Study/Office',
      'Hill Country Views',
      '2-Car Garage',
      'Custom Design'
    ],
    location: {
      community: 'Horseshoe Bay',
      schools: 'Llano ISD',
      nearby: ['Lake LBJ', 'Golf Courses', 'Marina', 'Country Club']
    }
  },
  'mountain-dew-land': {
    id: 'mountain-dew-land',
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
    description: 'Prime 0.25-Acre Building Lot in Horseshoe Bay\nSecure this exceptional building opportunity in the prestigious Horseshoe Bay community. This prime 0.25-acre lot comes with approved plans for a stunning 3-bedroom, 3-bathroom home with study, totaling 2,732 square feet of thoughtfully designed living space.\nThe approved floor plan features spacious living areas with an open concept design that flows seamlessly from room to room. The well-appointed kitchen serves as the heart of the home, ideal for both everyday living and entertaining guests.\nThe private master suite provides a peaceful retreat, while two additional bedrooms offer flexibility for family, guests, or home office needs. The dedicated study provides the perfect space for remote work or quiet reading.\nLocated in the sought-after Horseshoe Bay community, this lot offers resort-style living with access to golf courses, marina, and Lake LBJ while maintaining the peaceful atmosphere that makes this area so desirable. With excellent amenities and beautiful Hill Country surroundings, this property represents an exceptional opportunity to build your dream home on a generous quarter-acre lot.\nPlans included - ready to start construction with your preferred builder.',
    gallery: [
      "/listings/mountain-dew-land/20230317_171815.jpeg"
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
        </div>
      </main>
      <Footer />
    </>
  )
}
