'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Search Properties', href: 'https://stavrosrealtyteam.kw.com/search', external: true },
    { name: 'About', href: 'https://stavrosrealtyteam.kw.com/agent', external: true },
    { name: 'Services', href: '#expertise' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="bg-white/70 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-misty-200/70">
      {/* Top Bar - Social Icons and CTA Button */}
      <div className="border-b border-misty-200/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            {/* Empty left side for balance */}
            <div></div>

            {/* Social Icons and CTA Button */}
            <div className="flex items-center space-x-4">
              {/* Social Icons */}
              <div className="flex items-center space-x-3">
                <a href="https://linktr.ee/SperoStavros" target="_blank" rel="noopener noreferrer" className="text-charcoal-600 hover:text-champagne-600 transition-colors">
                  <span className="sr-only">Linktree</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.953 8.037c-.051-.081-.051-.163-.051-.244 0-.081.051-.163.102-.244l4.863-4.863c.081-.081.163-.102.244-.102s.163.02.244.102l4.863 4.863c.081.081.102.163.102.244 0 .081-.02.163-.102.244-.081.081-.163.102-.244.102s-.163-.02-.244-.102L13.87 4.177 9.007 9.04c-.081.081-.163.102-.244.102s-.163-.02-.244-.102zm0 7.926c-.051-.081-.051-.163-.051-.244 0-.081.051-.163.102-.244l4.863-4.863c.081-.081.163-.102.244-.102s.163.02.244.102l4.863 4.863c.081.081.102.163.102.244 0 .081-.02.163-.102.244-.081.081-.163.102-.244.102s-.163-.02-.244-.102L13.87 12.103 9.007 16.966c-.081.081-.163.102-.244.102s-.163-.02-.244-.102z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/spero.stavros.2025" target="_blank" rel="noopener noreferrer" className="text-charcoal-600 hover:text-champagne-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/speromstavros" target="_blank" rel="noopener noreferrer" className="text-charcoal-600 hover:text-champagne-600 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/sperostavros/" target="_blank" rel="noopener noreferrer" className="text-charcoal-600 hover:text-champagne-600 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@sperostavros669" target="_blank" rel="noopener noreferrer" className="text-charcoal-600 hover:text-champagne-600 transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>

              {/* CTA Button */}
              <Link
                href="#contact"
                className="text-sm px-4 py-1.5 bg-champagne-600 text-white rounded-full hover:bg-champagne-700 transition-colors duration-300 font-medium"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Logos and Menu */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          {/* Logos Section */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/SRT Logo Dark.png"
                alt="Stavros Realty Team"
                width={240}
                height={80}
                className="h-16 w-auto"
                priority
              />
            </Link>
            <div className="flex items-center space-x-2">
              <Image
                src="/assets/Portfolio Logo Black.png"
                alt="APRE"
                width={120}
                height={40}
                className="h-12 w-auto"
                quality={95}
              />
              <Image
                src="/assets/KW-Luxury-Logo-Black.png"
                alt="KW Luxury"
                width={80}
                height={30}
                className="h-12 w-auto"
                quality={95}
              />
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-charcoal-700 hover:text-champagne-600 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-charcoal-700 hover:text-champagne-600 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-charcoal-700 hover:bg-misty-200 hover:text-charcoal-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg
              className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden border-t border-misty-200/50">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-3 py-2 text-base font-medium text-charcoal-700 hover:bg-misty-200 hover:text-charcoal-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-charcoal-700 hover:bg-misty-200 hover:text-charcoal-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <div className="pt-2">
                <Link
                  href="#contact"
                  className="block text-center rounded-md px-3 py-2 text-base font-medium bg-champagne-600 text-white hover:bg-champagne-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Schedule a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
