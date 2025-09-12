import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="mb-8">
              <svg 
                className="mx-auto h-24 w-24 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1} 
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0v-5a1 1 0 011-1h4a1 1 0 011 1v5M9 7h6m-3 0V4" 
                />
              </svg>
            </div>
            
            <h1 className="text-4xl font-bold font-playfair text-gray-900 mb-4">
              Property Not Found
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Sorry, we couldn't find the property listing you're looking for. 
              It may have been sold, removed, or the URL might be incorrect.
            </p>
            
            <div className="space-y-4">
              <Link
                href="/listings"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                View All Listings
              </Link>
              
              <div className="text-center">
                <Link
                  href="/"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Return to Home Page
                </Link>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Help Finding a Property?
              </h3>
              <p className="text-gray-700 mb-4">
                Contact Spero Stavros for personalized assistance with your property search.
              </p>
              <Link
                href="/#contact"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
