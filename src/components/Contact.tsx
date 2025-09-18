'use client'

import { useState, useEffect } from 'react'
import { handleFormSubmission, FormSubmissionResponse } from '@/utils/formSubmission'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Only proceed if component is mounted (client-side)
    if (!isMounted) return
    
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response: FormSubmissionResponse = await handleFormSubmission(
        e.currentTarget,
        {
          formType: 'contact',
          source: 'homepage',
        }
      )

      if (response.success) {
        setSubmitMessage('Thank you for your message! We will get back to you soon.')
        // Reset form safely
        if (e.currentTarget) {
          e.currentTarget.reset()
        }
      } else {
        setSubmitMessage(response.message + (response.error ? ` (${response.error})` : ''))
      }
    } catch (error) {
      console.error('Unexpected error in form submission:', error)
      setSubmitMessage('An unexpected error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section id="contact" className="section-padding bg-primary-900">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
            Ready to Find Your Dream Home?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-300">
            Whether you're buying your first home or want to explore luxury custom homes, moving up, downsizing, or preparing to sell, Spero and his team are ready to guide you every step of the way. Connect today and turn your real estate goals into reality.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-primary-300">Austin, Texas</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-primary-300">(512) 661-9404</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-primary-300">spero@stavrosrealty.com</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-primary-700">
              <p className="text-primary-400 text-sm">
                Spero Stavros • REALTOR® • License #: 818290 - TX
              </p>
              <p className="text-primary-400 text-sm mt-1">
                KW Austin SW • Managing Director - Custom Home Network
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-primary-700 rounded-md text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-primary-700 rounded-md text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 bg-white/10 border border-primary-700 rounded-md text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-white/10 border border-primary-700 rounded-md text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="How can we help you?"
                required
                className="w-full px-4 py-3 bg-white/10 border border-primary-700 rounded-md text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              ></textarea>
              <button 
                type="submit" 
                disabled={isSubmitting || !isMounted}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {!isMounted ? 'Loading...' : isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitMessage && (
                <div className={`mt-4 p-3 rounded-md text-sm ${
                  submitMessage.includes('Thank you') 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
