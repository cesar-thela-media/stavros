export interface Property {
  id: string
  slug: string
  address: string
  city: string
  state: string
  zipCode: string
  price: number | null
  builder: string
  status: string
  completionDate: string | null
  classification: 'home' | 'land'
  squareFootage: number | null
  lotSize?: string
  bedrooms: number | null
  bathrooms: number | null
  features: string[]
  garage: string | null
  description: string
  image: string
  featured: boolean
  imageRibbonText?: string
  // Detail page fields
  propertyId?: string
  similarListings?: string[]
  gallery?: string[]
  amenities?: string[]
  location?: {
    community: string
    schools: string
    nearby: string[]
  }
}

const properties: Property[] = [
  {
    id: '112-winchester',
    slug: '112-winchester',
    propertyId: 'PROP-001',
    similarListings: ['PROP-002'],
    address: '112 Winchester',
    city: 'Horseshoe Bay',
    state: 'TX',
    zipCode: '78657',
    price: 934900,
    builder: 'Silverado Signature Homes',
    status: 'Available - Under Construction',
    completionDate: 'MAY 2026',
    classification: 'home',
    squareFootage: 2842,
    bedrooms: 4,
    bathrooms: 3,
    features: ['Study', 'Dining Room'],
    garage: '3 Car (2 + 1 Golf Cart)',
    description: 'Hill Country Living @ Horseshoe Bay under construction and almost complete. Thoughtfully crafted single-story residence that blends timeless elegance w/ modern livability. The exterior showcases smooth stucco, a charcoal metal roof & striking architectural lines creating lasting curb appeal. Inside, expansive living spaces filled w/ natural light designed for seamless flow-perfect for entertaining & everyday comfort.\nAt the heart of the home, the great room features soaring ceilings & wide glass doors that open to the covered patio. The chef\'s kitchen boasts generous counter space, a large island w/ seating, upgraded stainless appliance package, walk-in pantry, & direct connection to both formal & casual dining areas—ideal for gatherings of any size.\nThe private owner\'s suite offers a true retreat, spa-inspired bath featuring a soaking tub, walk-in shower, dual vanities, & oversized walk-in closet. Three secondary bedrooms provide flexibility for guests, hobbies, or home office needs, while a dedicated study serves as a private workspace, library, or creative studio.\nOutdoor living takes center stage w/ a spacious covered patio, full upgraded outdoor kitchen & ample room to enjoy peaceful Horseshoe Bay evenings. An oversized two-car garage plus third bay for a golf cart complete the home, offering both convenience and storage. Full Builder 1/2/10 Warranty included.\nPerfectly positioned in the heart of Horseshoe Bay combining refined design w/ functional spaces ideal as a full-time residence or a Hill Country retreat. Horseshoe Bay is a desirable place to live, offering a resort-style lifestyle w/ access to Lake LBJ for water sports, world-class golf courses, & various amenities like a full-service spa and dining just minutes away at the Horseshoe Bay Resort. It is conveniently located near major cities like Austin and San Antonio for big-city amenities, though it is primarily a luxury, resort-focused community.',
    image: '/listings/112-winchester/Winchester-IMG.jpeg',
    featured: true,
    gallery: [
      "/listings/112-winchester/Winchester-IMG.jpeg",
      "/listings/112-winchester/gallery/Untitled.jpeg",
      "/listings/112-winchester/gallery/Untitled-2.jpeg",
      "/listings/112-winchester/gallery/IMG_0777.jpeg",
      "/listings/112-winchester/gallery/IMG_0767.jpeg",
      "/listings/112-winchester/gallery/IMG_0771.jpeg",
      "/listings/112-winchester/gallery/IMG_0773.jpeg",
      "/listings/112-winchester/gallery/IMG_0774.jpeg",
      "/listings/112-winchester/gallery/IMG_0775.jpeg",
      "/listings/112-winchester/gallery/IMG_0776.jpeg",
      "/listings/112-winchester/gallery/FINAL PLANS 112 Winchester[16]_Page_04.jpg",
      "/listings/112-winchester/gallery/Image 6.jpeg",
      "/listings/112-winchester/gallery/Image 5.jpeg",
      "/listings/112-winchester/gallery/Image 4.jpeg",
      "/listings/112-winchester/gallery/Image 3.jpeg",
      "/listings/112-winchester/gallery/Image 7.png",
      "/listings/112-winchester/gallery/Image 8.jpeg",
      "/listings/112-winchester/gallery/unknown.png",
      "/listings/112-winchester/gallery/materials-kitchen-pantry.jpg",
      "/listings/112-winchester/gallery/materials-bathrooms.jpg",
      "/listings/112-winchester/gallery/materials-mudroom-utility.jpg",
      "/listings/112-winchester/gallery/materials-appliances.jpg"
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
  {
    id: 'mountain-dew',
    slug: 'mountain-dew',
    propertyId: 'PROP-002',
    similarListings: ['PROP-001', 'PROP-003'],
    address: '820 Mountain Dew',
    city: 'Horseshoe Bay',
    state: 'TX',
    zipCode: '78620',
    price: 959000,
    builder: 'Custom Builder',
    status: 'Available - Build Ready',
    completionDate: 'TBD - Build To Suit',
    classification: 'home',
    squareFootage: 2732,
    bedrooms: 3,
    bathrooms: 3,
    features: ['Study', 'Dining'],
    garage: '2 Car Garage',
    description: 'Welcome to your future home—a beautifully designed 2,732 square-foot residence that\'s all about personalization. This to-be-built property offers three spacious bedrooms, three baths, and a dedicated study—ideal for a home office or creative space. With an open floor plan that flows effortlessly, you\'ll love the gourmet kitchen and the generous dining area perfect for gatherings. The primary retreat is a true sanctuary, and you\'ll have a large covered patio and outdoor kitchen to enjoy outdoor living year-round. Plus, there\'s a roomy three-car garage for all your storage needs. And the best part? You get to tailor the details to suit your lifestyle. Let\'s make this home uniquely yours.',
    image: '/listings/mountain-dew/820 Mountain Dew Final Render 2.png',
    featured: true,
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
  {
    id: '1405-grafton',
    slug: '1405-grafton',
    propertyId: 'PROP-004',
    similarListings: [],
    address: '1405 Grafton Ln',
    city: 'Pflugerville',
    state: 'TX',
    zipCode: '78660',
    price: 474900,
    builder: 'Resale',
    status: 'Closed',
    completionDate: '2002',
    classification: 'home',
    squareFootage: 2392,
    bedrooms: 4,
    bathrooms: 3,
    features: ['Study/Office', '2 Living Areas'],
    garage: '2 Car',
    description: 'Nestled on a cul-de-sac, this stunning home feels like walking through a model. The fully upgraded kitchen boasts quartz countertops, an integrated sink, premium faucet and fixtures, a striking counter-to-ceiling backsplash behind the luxury stainless vent hood, top tier stainless appliances with a gas cooktop and pantry. The main level showcases vinyl wood plank flooring throughout, accented by crown molding, recessed lighting, and whole home custom paint. The home office/bonus room includes beautiful functional built in\'s. The large primary retreat is a true sanctuary, with an en-suite bath offering a freestanding soaking tub, designer tile flooring, a frameless glass shower enclosure, shiplap vanity wall, custom mirrors & fixtures, plus a barn door. Upstairs, a second living/bonus area adds flexibility for living/relaxation options. The garage, with epoxy flooring and insulated steel doors, offers bonus space beyond just parking for exercise, hobbies, and ample storage. Outside, the large 0.248-acre lot offers a private backyard with no rear neighbors, pergola, rear patio & deck plus a playscape and garden area ensuring outdoor enjoyment for parents and kids alike. Maybe add a future pool? Located in family-friendly Springbrook Glen, near parks, trails, and Lake Pflugerville, plus top Pflugerville ISD schools and nearby shopping (Costco 7Min and 15Min to the Domain) Perfect for suburban comfort and convenience. Easy access to SH-45. A new roof (2021) dual stage AC added (2020) plus the water heater replaced in 2023. Your move-in ready dream home awaits!',
    image: '/listings/1405-grafton/hero.jpeg',
    featured: true,
    imageRibbonText: 'Under Contract in 15 Days',
    gallery: [
      "/listings/1405-grafton/gallery/1-1405-Grafton-Ln---001.jpeg",
      "/listings/1405-grafton/gallery/4-1405-Grafton-Ln---023.jpeg",
      "/listings/1405-grafton/gallery/5-1405-Grafton-Ln---024.jpeg",
      "/listings/1405-grafton/gallery/7-1405-Grafton-Ln---028.jpeg",
      "/listings/1405-grafton/gallery/9-1405-Grafton-Ln---032.jpeg",
      "/listings/1405-grafton/gallery/11-1405-Grafton-Ln---034.jpeg",
      "/listings/1405-grafton/gallery/14-1405-Grafton-Ln---038.jpeg",
      "/listings/1405-grafton/gallery/22-1405-Grafton-Ln---005.jpeg",
      "/listings/1405-grafton/gallery/23-1405-Grafton-Ln---006.jpeg",
      "/listings/1405-grafton/gallery/24-1405-Grafton-Ln---007.jpeg",
      "/listings/1405-grafton/gallery/25-1405-Grafton-Ln---008.jpeg",
      "/listings/1405-grafton/gallery/26-1405-Grafton-Ln---009.jpeg",
      "/listings/1405-grafton/gallery/29-1405-Grafton-Ln---013.jpeg",
      "/listings/1405-grafton/gallery/30-1405-Grafton-Ln---015.jpeg",
      "/listings/1405-grafton/gallery/33-1405-Grafton-Ln---018.jpeg",
      "/listings/1405-grafton/gallery/38-1405-Grafton-Ln---051.jpeg",
      "/listings/1405-grafton/gallery/40-1405-Grafton-Ln---054.jpeg",
      "/listings/1405-grafton/gallery/42-1405-Grafton-Ln---058.jpeg",
      "/listings/1405-grafton/gallery/48-1405-Grafton-Ln---070.jpeg",
      "/listings/1405-grafton/gallery/56-1405GraftonLn---009-(2).jpeg",
      "/listings/1405-grafton/gallery/59-1405-Grafton-Ln---VD---1.jpeg"
    ],
    amenities: [
      'Upgraded Kitchen',
      'Quartz Countertops',
      'Gas Cooktop',
      'Crown Molding',
      'Soaking Tub',
      'Frameless Glass Shower',
      'Study/Home Office',
      '2 Living Areas',
      'Epoxy Garage Floor',
      'Pergola',
      'Rear Patio & Deck',
      'No Rear Neighbors',
      'Cul-de-sac Location'
    ],
    location: {
      community: 'Springbrook Glen',
      schools: 'Pflugerville ISD',
      nearby: ['Lake Pflugerville', 'Parks & Trails', 'Costco', 'The Domain']
    }
  },
  {
    id: 'mountain-dew-land',
    slug: 'mountain-dew-land',
    propertyId: 'PROP-003',
    similarListings: ['PROP-002', 'PROP-001'],
    address: '820 Mountain Dew',
    city: 'Horseshoe Bay',
    state: 'TX',
    zipCode: '78620',
    price: 58900,
    builder: 'Custom Builder',
    status: 'Available - Land Only',
    completionDate: 'Ready for Construction',
    classification: 'land',
    squareFootage: null,
    lotSize: '0.25 acres',
    bedrooms: null,
    bathrooms: null,
    features: ['Approved Plans Included'],
    garage: null,
    description: 'Discover your perfect canvas in the heart of Horsehoe Bay. This quarter-acre piece of land offers not just a space to build, but a breathtaking backdrop for your future home. With sweeping views that capture the essence of the Hill Country, this lot is ready for you to bring your vision to life. You have the freedom to design and build a home that truly suits your needs, whether you\'re dreaming of a cozy retreat or a spacious family getaway. Embrace the opportunity to create something unique on this prime piece of land, and let the stunning surroundings inspire your custom build. Ready to start your journey? This land is your first step toward the home you\'ve always wanted.',
    image: '/listings/mountain-dew-land/Mountain Dew View Image.jpg',
    featured: true,
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
  },
  // Sold properties (displayed on featured/home page only)
  {
    id: 'lipizzan-lane',
    slug: 'lipizzan-lane',
    address: '126 Lipizzan Lane',
    city: 'La Ventana',
    state: 'TX',
    zipCode: '',
    price: null,
    builder: '',
    status: 'Sold',
    completionDate: null,
    classification: 'home',
    squareFootage: null,
    bedrooms: null,
    bathrooms: null,
    features: [],
    garage: null,
    description: '',
    image: 'https://static.wixstatic.com/media/c604b9_b8b2c71ae0a14b279356153cc4b254d2~mv2.jpeg/v1/fill/w_313,h_235,q_75,enc_avif,quality_auto/c604b9_b8b2c71ae0a14b279356153cc4b254d2~mv2.jpeg',
    featured: true,
  },
  {
    id: 'skyview-ridge',
    slug: 'skyview-ridge',
    address: '2109 Skyview Ridge Pass',
    city: 'Tavisio',
    state: 'TX',
    zipCode: '',
    price: null,
    builder: '',
    status: 'Sold',
    completionDate: null,
    classification: 'home',
    squareFootage: null,
    bedrooms: null,
    bathrooms: null,
    features: [],
    garage: null,
    description: '',
    image: 'https://static.wixstatic.com/media/c604b9_8062a612658f4e3bb946ee8d4c56e8c9~mv2.jpeg/v1/fill/w_314,h_235,fp_0.39_0.43,q_75,enc_avif,quality_auto/c604b9_8062a612658f4e3bb946ee8d4c56e8c9~mv2.jpeg',
    featured: true,
  },
  {
    id: 'shady-hill',
    slug: 'shady-hill',
    address: '144 Shady Hill Loop',
    city: 'Liberty Hill',
    state: 'TX',
    zipCode: '',
    price: null,
    builder: '',
    status: 'Sold',
    completionDate: null,
    classification: 'home',
    squareFootage: null,
    bedrooms: null,
    bathrooms: null,
    features: [],
    garage: null,
    description: '',
    image: 'https://static.wixstatic.com/media/c604b9_4bab1966ed87425bbaa131b88538aab0~mv2.jpeg/v1/fill/w_313,h_235,q_75,enc_avif,quality_auto/c604b9_4bab1966ed87425bbaa131b88538aab0~mv2.jpeg',
    featured: true,
  },
  {
    id: 'lone-spur',
    slug: 'lone-spur',
    address: '170 Lone Spur Lane',
    city: 'Driftwood',
    state: 'TX',
    zipCode: '',
    price: null,
    builder: '',
    status: 'Sold',
    completionDate: null,
    classification: 'home',
    squareFootage: null,
    bedrooms: null,
    bathrooms: null,
    features: [],
    garage: null,
    description: '',
    image: 'https://static.wixstatic.com/media/c604b9_9ecbfb7d29b7488ab6bff74c81526880~mv2.jpeg/v1/fill/w_313,h_235,q_75,enc_avif,quality_auto/c604b9_9ecbfb7d29b7488ab6bff74c81526880~mv2.jpeg',
    featured: true,
  },
  {
    id: 'northcrest',
    slug: 'northcrest',
    address: '213 Northcrest Drive',
    city: 'Liberty Hill',
    state: 'TX',
    zipCode: '',
    price: null,
    builder: '',
    status: 'Sold',
    completionDate: null,
    classification: 'home',
    squareFootage: null,
    bedrooms: null,
    bathrooms: null,
    features: [],
    garage: null,
    description: '',
    image: 'https://static.wixstatic.com/media/c604b9_96a0af3d6f6942c09f5c59fdb970a4cd~mv2.jpeg/v1/fill/w_314,h_235,q_75,enc_avif,quality_auto/c604b9_96a0af3d6f6942c09f5c59fdb970a4cd~mv2.jpeg',
    featured: true,
  },
  {
    id: 'trebled-waters',
    slug: 'trebled-waters',
    address: '1638 Trebled Waters',
    city: 'Driftwood',
    state: 'TX',
    zipCode: '',
    price: null,
    builder: '',
    status: 'Sold',
    completionDate: null,
    classification: 'home',
    squareFootage: null,
    bedrooms: null,
    bathrooms: null,
    features: [],
    garage: null,
    description: '',
    image: 'https://static.wixstatic.com/media/c604b9_ebaceacae4ab4046bff5938145e5e2ba~mv2.jpeg/v1/fill/w_313,h_235,q_75,enc_avif,quality_auto/c604b9_ebaceacae4ab4046bff5938145e5e2ba~mv2.jpeg',
    featured: true,
  },
]

export default properties

/** Properties marked as featured (shown on home page) */
export function getFeaturedProperties() {
  return properties.filter(p => p.featured)
}

/** Active (non-sold) properties for the listings page */
export function getActiveProperties() {
  return properties.filter(p => p.status !== 'Sold')
}

/** Lookup a property by slug for the detail page */
export function getPropertyBySlug(slug: string) {
  return properties.find(p => p.slug === slug) ?? null
}

/** All active properties as a Record keyed by slug (for SimilarListings) */
export function getActivePropertiesRecord(): Record<string, Property> {
  const record: Record<string, Property> = {}
  for (const p of getActiveProperties()) {
    record[p.slug] = p
  }
  return record
}
