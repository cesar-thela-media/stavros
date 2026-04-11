import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PropertyHero from '@/components/PropertyHero'
import PropertyDetails from '@/components/PropertyDetails'
import PropertyGallery from '@/components/PropertyGallery'
import ContactForm from '@/components/ContactForm'
import SimilarListings from '@/components/SimilarListings'
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

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  const property = getPropertyBySlug(resolvedParams.slug)

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
    </>
  )
}
