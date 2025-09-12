'use client'

import { useState } from 'react'
import Image from 'next/image'

interface PropertyGalleryProps {
  images: string[]
  address: string
}

export default function PropertyGallery({ images, address }: PropertyGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  // If no images, show placeholder
  if (!images || images.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold font-serif text-navy-900">Property Gallery</h2>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-cream-100 flex items-center justify-center">
          <p className="text-primary-600">Additional photos coming soon</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold font-serif text-navy-900">Property Gallery</h2>
      
      {/* Main Image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-cream-100 border border-cream-300">
        <Image
          src={images[selectedImage]}
          alt={`${address} - Image ${selectedImage + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-video overflow-hidden rounded-md border-2 transition-all ${
                selectedImage === index
                  ? 'border-gold-600 ring-2 ring-gold-200'
                  : 'border-cream-300 hover:border-cream-400'
              }`}
            >
              <Image
                src={image}
                alt={`${address} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
