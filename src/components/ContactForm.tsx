'use client'

import { useState } from 'react'

interface Property {
  id: string
  address: string
  city: string
  state: string
  zipCode: string
}

interface ContactFormProps {
  property: Property
}

export default function ContactForm({ property }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I'm interested in learning more about ${property.address} in ${property.city}, ${property.state}.`
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! Spero will contact you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="sticky top-8">
      <div className="luxury-card">
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold-400">
            <img
              src="/assets/SSTAVROS.jpg"
              alt="Spero Stavros - REALTOR®"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-navy-900 mb-2">Contact Spero Stavros</h3>
          <p className="text-primary-600">Get more information about this property</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-cream-50"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-cream-50"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-cream-50"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none bg-cream-50"
            />
          </div>

          <button
            type="submit"
            className="w-full btn-primary"
          >
            Request Information
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-cream-300">
          <div className="text-center">
            <p className="text-sm text-primary-600 mb-2">Direct Contact</p>
            <p className="font-semibold text-navy-900">Spero Stavros</p>
            <p className="text-sm text-primary-600">Stavros Realty Team - Austin Portfolio Real Estate KW/ Luxury</p>
            <p className="text-sm text-gold-700 mt-2">
              <a href="tel:+15126619404" className="hover:underline font-medium">
                Call Now
              </a>
            </p>
            
            {/* Social Media Links */}
            <div className="mt-4 flex justify-center space-x-4">
              <a href="https://linktr.ee/SperoStavros" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-gold-600 transition-colors">
                <span className="sr-only">Linktree</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.953 8.037c-.051-.081-.051-.163-.051-.244 0-.081.051-.163.102-.244l4.863-4.863c.081-.081.163-.102.244-.102s.163.02.244.102l4.863 4.863c.081.081.102.163.102.244 0 .081-.02.163-.102.244-.081.081-.163.102-.244.102s-.163-.02-.244-.102L13.87 4.177 9.007 9.04c-.081.081-.163.102-.244.102s-.163-.02-.244-.102zm0 7.926c-.051-.081-.051-.163-.051-.244 0-.081.051-.163.102-.244l4.863-4.863c.081-.081.163-.102.244-.102s.163.02.244.102l4.863 4.863c.081.081.102.163.102.244 0 .081-.02.163-.102.244-.081.081-.163.102-.244.102s-.163-.02-.244-.102L13.87 12.103 9.007 16.966c-.081.081-.163.102-.244.102s-.163-.02-.244-.102z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/spero.stavros.2025" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-gold-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/speromstavros" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-gold-600 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sperostavros/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-gold-600 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@sperostavros669" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-gold-600 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
