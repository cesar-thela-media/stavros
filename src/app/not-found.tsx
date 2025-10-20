import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: '404 - Page Not Found | Stavros Realty',
  description: 'The page you are looking for could not be found. Browse our property listings or contact Spero Stavros for assistance.',
}

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-misty-50">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="mb-8">
              <svg 
                className="mx-auto h-24 w-24 text-charcoal-400" 
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
            
            <h1 className="text-4xl font-bold font-heading text-charcoal-900 mb-4">
              Page Not Found
            </h1>
            
            <p className="text-lg text-charcoal-600 mb-8">
              Sorry, we couldn't find the page you're looking for. 
              The page may have been moved or the URL might be incorrect.
            </p>
            
            <div className="space-y-4">
              <Link
                href="/listings"
                className="inline-block bg-champagne-600 text-white px-6 py-3 rounded-md hover:bg-champagne-700 transition-colors font-medium"
              >
                View All Listings
              </Link>
              
              <div className="text-center">
                <Link
                  href="/"
                  className="text-champagne-600 hover:text-champagne-700 font-medium"
                >
                  Return to Home Page
                </Link>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-champagne-50 rounded-lg border border-champagne-200">
              <h3 className="text-lg font-semibold text-charcoal-900 mb-2">
                Need Help?
              </h3>
              <p className="text-charcoal-700 mb-4">
                Contact Spero Stavros for assistance with your real estate needs.
              </p>
              <Link
                href="/#contact"
                className="text-champagne-600 hover:text-champagne-700 font-medium"
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
