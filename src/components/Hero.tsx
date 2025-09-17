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
    <section className="relative bg-primary-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/60 z-10"></div>
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
      
      <div className="relative z-20 mx-auto max-w-7xl px-4 py-24 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif">
            Stavros Realty Team
            <span className="block text-gold-400 text-2xl sm:text-3xl mt-2">Experience • Integrity • Excellence</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-200">
            Serving Central Texas with Relationships Nationally & Globally
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
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </div>
      
      {/* Enhanced Search Bar */}
      <div className="relative z-20 mx-auto max-w-6xl px-4 -mt-8 sm:px-6 lg:px-8">
        <PropertySearch />
      </div>
    </section>
  )
}
