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
            <p className="text-sm text-primary-600">Keller Williams Realty</p>
            <p className="text-sm text-gold-700 mt-2">
              <a href="tel:+15126619404" className="hover:underline font-medium">
                Call Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
