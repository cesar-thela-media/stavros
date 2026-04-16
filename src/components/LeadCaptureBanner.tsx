'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'lead_banner_dismissed'

export default function LeadCaptureBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    // If already dismissed this session, do not show
    if (typeof window !== 'undefined' && sessionStorage.getItem(STORAGE_KEY)) {
      return
    }

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  function handleDismiss() {
    setIsVisible(false)
    sessionStorage.setItem(STORAGE_KEY, '1')
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      role="region"
      aria-label="Newsletter sign-up"
      className={[
        'fixed bottom-0 left-0 right-0 z-40',
        'bg-black border-t border-champagne-500/30',
        'transition-transform duration-500 ease-out',
        isVisible ? 'translate-y-0' : 'translate-y-full',
      ].join(' ')}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
        {/* Left: copy */}
        <div className="flex-1 min-w-0">
          <p className="font-serif text-white text-xl font-semibold leading-snug">
            Stay in the Loop
          </p>
          <p className="text-misty text-sm mt-1 leading-relaxed">
            Be the first to know about new luxury listings in Central Texas.
          </p>
        </div>

        {/* Right: form or success */}
        <div className="flex-1 min-w-0">
          {submitted ? (
            <p className="text-champagne font-medium text-base">
              You&apos;re on the list! We&apos;ll be in touch soon.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="text"
                required
                placeholder="First name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 min-w-0 bg-white/10 border border-champagne-500/30 text-white placeholder-misty/60 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-champagne-500 transition-colors"
              />
              <input
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-w-0 bg-white/10 border border-champagne-500/30 text-white placeholder-misty/60 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-champagne-500 transition-colors"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap text-sm px-6 py-2.5"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>

        {/* Dismiss button */}
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss banner"
          className="absolute top-3 right-4 text-misty/60 hover:text-white transition-colors p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
