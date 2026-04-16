'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import PropertySearch from './PropertySearch'

export default function Hero() {
  const [heroImage, setHeroImage] = useState<string | null>(null)

  useEffect(() => {
    const heroImages = [
      '/assets/hero2.png',
      '/assets/hero3.png',
      '/assets/hero4.png',
      '/assets/hero5.png'
    ]
    const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)]
    setHeroImage(randomImage)
  }, [])

  return (
    <section className="relative bg-black-900 overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0 bg-black-900">
        <div className="absolute inset-0 bg-gradient-to-r from-black-900/85 via-black-900/50 to-transparent z-10"></div>
        {heroImage && (
          <Image
            className="w-full h-full object-cover"
            src={heroImage}
            alt="Modern luxury home in Central Texas"
            fill
            priority
            quality={95}
          />
        )}
      </div>

      {/* Main content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[85vh] flex items-center">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl font-serif">
              Stavros Realty Team
            </h1>

            {/* Gold divider */}
            <div className="w-24 h-0.5 bg-champagne-500 mx-auto my-4" />

            {/* Tagline */}
            <p className="font-accent text-champagne-400 text-2xl sm:text-3xl">
              Experience • Integrity • Excellence
            </p>

            {/* Subtitle */}
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              Serving Central Texas with Relationships Nationally &amp; Globally
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://stavrosrealtyteam.kw.com/search"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Properties
              </a>
              <Link href="#contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-900">
                Schedule a Consultation
              </Link>
            </div>
          </div>

          {/* Enhanced Search Bar */}
          <div className="bg-gradient-to-t from-black-900/60 to-transparent pt-12 pb-4 mt-8 rounded-xl">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <PropertySearch />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-8">
            <a
              href="#featured"
              aria-label="Scroll to featured listings"
              className="text-white/60 hover:text-white transition-colors duration-200 animate-bounce"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
