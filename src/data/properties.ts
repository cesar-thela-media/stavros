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
  /** Overrides the default "Target Completion:"/"Completion:" label (e.g. 'Completed:' once a build is finished) */
  completionLabel?: string
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
    status: 'Available',
    completionDate: 'AUGUST 1, 2026',
    completionLabel: 'Completed:',
    classification: 'home',
    squareFootage: 2842,
    bedrooms: 4,
    bathrooms: 3,
    features: ['Study', 'Dining Room'],
    garage: '3 Car (2 + 1 Golf Cart)',
    description: 'New Construction Custom Home Completed 8/1/26-Now Available and Worth the Wait! Experience refined Hill Country living in the heart of Horseshoe Bay in this thoughtfully crafted single-story custom home, where timeless architecture, quality craftsmanship, and indoor-outdoor living meet in a community celebrated for lake living, golf, and resort-style amenities. The striking exterior features a full stone and stucco exterior, upgraded paver driveway, charcoal metal roof, and clean architectural lines for exceptional curb appeal. Inside, soaring ceilings, natural light, and expansive glass doors create an open, inviting atmosphere. The chef\'s kitchen showcases beautiful quartz countertops, oversized island with seating, custom cabinetry, designer finishes, high-end stainless appliances, walk-in pantry, and connection to formal and casual dining. The private owner\'s suite is a true retreat featuring a spa-inspired bath with soaking tub, oversized walk-in shower, dual vanities, and two expansive his-and-her walk-in closets. Three additional bedrooms and a dedicated study provide flexibility for guests, remote work, or hobbies. The impressive laundry room offers abundant cabinetry, storage, and space for an additional refrigerator. A custom mud area off the main garage features beautiful built-in cabinetry for organization and convenience. Designer lighting enhances the home\'s sophisticated style, while spray foam insulation in the attic provides added energy efficiency and comfort. Outdoor living shines with an expansive covered patio, upgraded outdoor kitchen featuring Coyote brand appliances, and a large backyard with room for a future pool. An oversized two-car garage plus dedicated golf cart bay offer the perfect setup for enjoying the Horseshoe Bay lifestyle. Complete with a Builder 1-2-10 Warranty, this move-in-ready home offers upgraded finishes and peace of mind. Ideally positioned minutes from championship golf, Lake LBJ, and Horseshoe Bay Resort amenities, this home offers nearby dining, marina activities, recreation, and relaxed Hill Country living.',
    image: '/listings/112-winchester/hero.jpg',
    featured: true,
    gallery: [
      "/listings/112-winchester/hero.jpg",
      "/listings/112-winchester/gallery/02-entry.jpg",
      "/listings/112-winchester/gallery/03-aerial-home.jpg",
      "/listings/112-winchester/gallery/04-dining-great-room.jpg",
      "/listings/112-winchester/gallery/05-great-room.jpg",
      "/listings/112-winchester/gallery/06-great-room-patio-doors.jpg",
      "/listings/112-winchester/gallery/07-kitchen-island.jpg",
      "/listings/112-winchester/gallery/08-kitchen-range.jpg",
      "/listings/112-winchester/gallery/09-kitchen-galley.jpg",
      "/listings/112-winchester/gallery/10-pantry.jpg",
      "/listings/112-winchester/gallery/11-primary-bath-tub-shower.jpg",
      "/listings/112-winchester/gallery/12-primary-bath-vanity.jpg",
      "/listings/112-winchester/gallery/13-primary-bath-dual-vanities.jpg",
      "/listings/112-winchester/gallery/14-secondary-bath.jpg",
      "/listings/112-winchester/gallery/15-secondary-bath-2.jpg",
      "/listings/112-winchester/gallery/16-laundry.jpg",
      "/listings/112-winchester/gallery/17-outdoor-kitchen.jpg",
      "/listings/112-winchester/gallery/18-covered-patio.jpg",
      "/listings/112-winchester/gallery/19-covered-patio-yard.jpg",
      "/listings/112-winchester/gallery/20-aerial-neighborhood.jpg",
      "/listings/112-winchester/gallery/Image 3.jpeg",
      "/listings/112-winchester/gallery/Image 4.jpeg",
      "/listings/112-winchester/gallery/Image 6.jpeg",
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
    address: 'Lipizzan Lane',
    city: 'La Ventana',
    state: 'TX',
    zipCode: '',
    price: 2100579,
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
    address: 'Skyview Ridge Pass',
    city: 'Tavisio',
    state: 'TX',
    zipCode: '',
    price: 1950000,
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
    address: 'Shady Hill Loop',
    city: 'Liberty Hill',
    state: 'TX',
    zipCode: '',
    price: 1459875,
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
    address: 'Lone Spur Lane',
    city: 'Driftwood',
    state: 'TX',
    zipCode: '',
    price: 1450000,
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
    address: 'Northcrest Drive',
    city: 'Liberty Hill',
    state: 'TX',
    zipCode: '',
    price: 1090000,
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
    address: 'Trebled Waters',
    city: 'Driftwood',
    state: 'TX',
    zipCode: '',
    price: 904283,
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
