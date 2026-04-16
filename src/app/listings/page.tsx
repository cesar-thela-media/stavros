import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ListingsGrid from '@/components/ListingsGrid'
import { getActiveProperties } from '@/data/properties'

const properties = getActiveProperties()

export const metadata = {
  title: 'Property Listings - Stavros Realty',
  description: 'Browse our current property listings featuring luxury homes and new construction in Central Texas.',
}

export default function ListingsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <div
          className="relative bg-primary-50 overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('/assets/hero4.png')`,
          }}
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-20">
            <div className="text-center">
              {/* U7 — Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/70 mb-4">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span aria-hidden="true">›</span>
                <span className="text-white font-medium">Properties</span>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-4 drop-shadow-lg">
                Available Properties
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
                Discover exceptional properties and new construction opportunities in Central Texas
              </p>
            </div>
          </div>
        </div>

        {/* Listings Grid (client component with filters) */}
        <ListingsGrid properties={properties} />

        {/* Looking for Something Different — CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-cream-100 rounded-2xl overflow-hidden border border-cream-300">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
              {/* Left side - Text and Button */}
              <div className="flex flex-col justify-center p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-navy-900 mb-4">
                  Looking for Something Different?
                </h2>
                <p className="text-primary-700 mb-6 text-lg">
                  Explore other custom home options—or give us a call to discuss building one tailored just for you.
                </p>
                <div>
                  <a href="tel:+15126619404" className="btn-primary">
                    Call to discuss a custom build
                  </a>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="relative">
                <Image
                  src="/assets/Image.jpeg"
                  alt="Spero Stavros Real Estate Professional"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
