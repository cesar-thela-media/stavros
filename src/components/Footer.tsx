import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-serif font-bold text-white">
              Stavros Realty
            </Link>
            <p className="mt-4 text-primary-300 max-w-md">
              Central Texas&apos; premier luxury real estate firm, dedicated to helping you find your dream home with personalized service and expert market knowledge.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-primary-300 hover:text-gold-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-primary-300 hover:text-gold-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297L3.323 8.449c0-1.297.49-2.448 1.297-3.323L8.449 3.323c1.297 0 2.448.49 3.323 1.297L15.6 8.449c0 1.297-.49 2.448-1.297 3.323L8.449 16.988z" />
                </svg>
              </a>
              <a href="#" className="text-primary-300 hover:text-gold-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/services/buying" className="text-primary-300 hover:text-white transition-colors">Buying</Link></li>
              <li><Link href="/services/selling" className="text-primary-300 hover:text-white transition-colors">Selling</Link></li>
              <li><Link href="/services/investment" className="text-primary-300 hover:text-white transition-colors">Investment</Link></li>
              <li><Link href="/services/luxury" className="text-primary-300 hover:text-white transition-colors">Luxury Properties</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">Contact</h3>
            <ul className="mt-4 space-y-2 text-primary-300">
              <li>Austin, Texas</li>
              <li>(512) 555-0123</li>
              <li>info@stavrosrealty.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-primary-800 pt-8">
          <p className="text-center text-primary-400 text-sm">
            © 2024 Stavros Realty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
