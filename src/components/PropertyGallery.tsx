'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

interface PropertyGalleryProps {
  images: string[]
  address: string
}

// ---------------------------------------------------------------------------
// Lightbox portal
// ---------------------------------------------------------------------------
interface LightboxProps {
  images: string[]
  address: string
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

function Lightbox({ images, address, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  // Touch-swipe state
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') onPrev()
      else if (e.key === 'ArrowRight') onNext()
      else if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onPrev, onNext, onClose])

  // Prevent body scroll while lightbox is open
  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    return () => document.body.classList.remove('overflow-hidden')
  }, [])

  function handleTouchStart(e: React.TouchEvent) {
    setTouchStartX(e.touches[0].clientX)
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX === null) return
    const delta = touchStartX - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) {
      delta > 0 ? onNext() : onPrev()
    }
    setTouchStartX(null)
  }

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
        aria-label="Close lightbox"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-black/60 text-white text-sm font-medium tracking-wide select-none">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-3 md:left-6 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-3 md:right-6 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Main image — stop propagation so clicking the image itself doesn't close */}
      <div
        className="relative w-full h-full max-w-5xl max-h-[90vh] mx-auto px-16 py-12 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex]}
            alt={`${address} — Image ${currentIndex + 1} of ${images.length}`}
            fill
            className="object-contain"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}

// ---------------------------------------------------------------------------
// Main gallery component
// ---------------------------------------------------------------------------
export default function PropertyGallery({ images, address }: PropertyGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = useCallback(() => setLightboxOpen(false), [])

  const goPrev = useCallback(() => {
    setSelectedImage((i) => (i - 1 + images.length) % images.length)
  }, [images.length])

  const goNext = useCallback(() => {
    setSelectedImage((i) => (i + 1) % images.length)
  }, [images.length])

  // If no images, show placeholder
  if (!images || images.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold font-serif text-black-900">Property Gallery</h2>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-misty-200 flex items-center justify-center">
          <p className="text-charcoal-500">Additional photos coming soon</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold font-serif text-black-900">Property Gallery</h2>

        {/* Main Image */}
        <div
          className="relative aspect-video w-full overflow-hidden rounded-lg bg-misty-200 border border-misty-400 cursor-zoom-in group"
          onClick={() => openLightbox(selectedImage)}
        >
          <Image
            src={images[selectedImage]}
            alt={`${address} - Image ${selectedImage + 1}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            priority
          />
          {/* "View Fullscreen" hint overlay */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/50 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 select-none pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
            View Fullscreen
          </div>
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedImage(index)
                }}
                onDoubleClick={() => openLightbox(index)}
                className={`relative aspect-video overflow-hidden rounded-md border-2 transition-all ${
                  selectedImage === index
                    ? 'border-gold-600 ring-2 ring-gold-200'
                    : 'border-misty-400 hover:border-misty-500'
                }`}
                aria-label={`View image ${index + 1}`}
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

      {/* Lightbox portal */}
      {lightboxOpen && (
        <Lightbox
          images={images}
          address={address}
          currentIndex={selectedImage}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  )
}
