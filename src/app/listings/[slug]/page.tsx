import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PropertyHero from '@/components/PropertyHero'
import PropertyDetails from '@/components/PropertyDetails'
import PropertyGallery from '@/components/PropertyGallery'
import ContactForm from '@/components/ContactForm'
import SimilarListings from '@/components/SimilarListings'
import BackButton from '@/components/BackButton'
import { getHeroImageWithFallback } from '@/utils/getHeroImage'
import { getPropertyBySlug, getActivePropertiesRecord, getActiveProperties } from '@/data/properties'

const propertiesRecord = getActivePropertiesRecord()

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return getActiveProperties().map((p) => ({
    slug: p.slug,
  }))
}

// ---------------------------------------------------------------------------
// SEO metadata (C1)
// ---------------------------------------------------------------------------
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  const property = getPropertyBySlug(resolvedParams.slug)

  if (!property) {
    return {
      title: 'Property Not Found — Stavros Realty',
    }
  }

  // Build spec string only from available values
  const specParts: string[] = []
  if (property.bedrooms) specParts.push(`${property.bedrooms}bd`)
  if (property.bathrooms) specParts.push(`${property.bathrooms}ba`)
  if (property.squareFootage) specParts.push(`${property.squareFootage.toLocaleString()}sqft`)
  const specStr = specParts.length > 0 ? ` ${specParts.join('/')}` : ''

  const title = `${property.address}, ${property.city} TX —${specStr} | Stavros Realty`

  // Trim description to 160 chars without cutting mid-word, then append attribution
  const suffix = ' Listed by Spero Stavros, KW Luxury.'
  const maxDescLen = 160 - suffix.length
  let desc = property.description ?? ''
  if (desc.length > maxDescLen) {
    desc = desc.slice(0, maxDescLen)
    const lastSpace = desc.lastIndexOf(' ')
    if (lastSpace > 0) desc = desc.slice(0, lastSpace)
  }
  const description = desc + suffix

  return {
    title,
    description,
  }
}

// ---------------------------------------------------------------------------
// Breadcrumb component (server-side, no 'use client' needed)
// ---------------------------------------------------------------------------
function Breadcrumbs({ address }: { address: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 text-xs sm:text-sm text-charcoal-500 flex-wrap"
    >
      <Link
        href="/"
        className="hover:text-gold-600 transition-colors duration-150 underline-offset-2 hover:underline"
      >
        Home
      </Link>

      {/* Chevron separator */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-3 h-3 shrink-0 text-charcoal-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>

      <Link
        href="/listings"
        className="hover:text-gold-600 transition-colors duration-150 underline-offset-2 hover:underline"
      >
        Properties
      </Link>

      {/* Chevron separator */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-3 h-3 shrink-0 text-charcoal-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>

      <span
        className="text-black-800 font-medium truncate max-w-[180px] sm:max-w-xs"
        aria-current="page"
      >
        {address}
      </span>
    </nav>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default async function PropertyPage({ params }: PageProps) {
  const resolvedParams = await params
  const property = getPropertyBySlug(resolvedParams.slug)

  if (!property) {
    notFound()
  }

  // Automatically detect the hero image from the property's folder
  const heroImage = getHeroImageWithFallback(property.id, property.gallery ?? [])

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb bar (U7) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <Breadcrumbs address={property.address} />
        </div>

        <PropertyHero property={property} heroImage={heroImage} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <PropertyGallery images={property.gallery ?? []} address={property.address} />
              <PropertyDetails property={property} />
            </div>
            <div className="lg:col-span-1">
              <ContactForm property={property} />
            </div>
          </div>

          {/* Similar Listings Section */}
          <div className="mt-16">
            <SimilarListings currentProperty={property} allProperties={propertiesRecord} />
          </div>
        </div>
      </main>
      <Footer />

      {/* Sticky back button — client component (U8) */}
      <BackButton />
    </>
  )
}
