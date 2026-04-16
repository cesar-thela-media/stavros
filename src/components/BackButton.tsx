'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function BackButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 hidden md:block transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
    >
      <Link
        href="/listings"
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black-900 text-white text-sm font-medium shadow-lg hover:bg-charcoal-950 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
        aria-label="Back to all properties"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Properties
      </Link>
    </div>
  )
}
