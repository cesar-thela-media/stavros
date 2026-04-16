'use client'

import { useState, useEffect } from 'react'
import { handleFormSubmission, FormSubmissionResponse } from '@/utils/formSubmission'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type TouchedFields = {
  firstName: boolean
  lastName: boolean
  email: boolean
  message: boolean
}

type ErrorFields = {
  firstName: string
  lastName: string
  email: string
  message: string
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const [touched, setTouched] = useState<TouchedFields>({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  })

  const [errors, setErrors] = useState<ErrorFields>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const validateField = (name: keyof ErrorFields, value: string): string => {
    switch (name) {
      case 'firstName':
        return value.trim() ? '' : 'First name is required.'
      case 'lastName':
        return value.trim() ? '' : 'Last name is required.'
      case 'email':
        if (!value.trim()) return 'Email address is required.'
        if (!EMAIL_REGEX.test(value.trim())) return 'Please enter a valid email address.'
        return ''
      case 'message':
        return value.trim() ? '' : 'Message is required.'
      default:
        return ''
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (!(name in touched)) return
    const fieldName = name as keyof ErrorFields
    setTouched((prev) => ({ ...prev, [fieldName]: true }))
    setErrors((prev) => ({ ...prev, [fieldName]: validateField(fieldName, value) }))
  }

  const validateAll = (form: HTMLFormElement): boolean => {
    const data = new FormData(form)
    const newErrors: ErrorFields = {
      firstName: validateField('firstName', (data.get('firstName') as string) ?? ''),
      lastName: validateField('lastName', (data.get('lastName') as string) ?? ''),
      email: validateField('email', (data.get('email') as string) ?? ''),
      message: validateField('message', (data.get('message') as string) ?? ''),
    }
    setErrors(newErrors)
    setTouched({ firstName: true, lastName: true, email: true, message: true })
    return Object.values(newErrors).every((err) => err === '')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isMounted) return

    const form = e.currentTarget
    if (!validateAll(form)) return

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response: FormSubmissionResponse = await handleFormSubmission(form, {
        formType: 'contact',
        source: 'homepage',
      })

      if (response.success) {
        setSubmitSuccess(true)
        form.reset()
        setTouched({ firstName: false, lastName: false, email: false, message: false })
        setErrors({ firstName: '', lastName: '', email: '', message: '' })
      } else {
        setSubmitError(response.message + (response.error ? ` (${response.error})` : ''))
      }
    } catch (error) {
      console.error('Unexpected error in form submission:', error)
      setSubmitError('An unexpected error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSendAnother = () => {
    setSubmitSuccess(false)
    setSubmitError('')
    setTouched({ firstName: false, lastName: false, email: false, message: false })
    setErrors({ firstName: '', lastName: '', email: '', message: '' })
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
            {submitSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-12 px-6">
                {/* Gold checkmark icon */}
                <div className="mb-6">
                  <svg
                    className="w-16 h-16 text-gold-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} className="opacity-30" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 12.5l3.5 3.5 6.5-7"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-white font-serif mb-3">
                  Thank You!
                </h3>
                <p className="text-primary-300 text-base mb-8 max-w-xs">
                  Spero will be in touch with you shortly.
                </p>
                <button
                  onClick={handleSendAnother}
                  className="px-6 py-3 border border-gold-400 text-gold-400 rounded-md text-sm font-medium tracking-wide hover:bg-gold-400 hover:text-primary-900 transition-colors duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 bg-white/10 border border-primary-700 rounded-md text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                    {touched.firstName && errors.firstName && (
                      <span className="text-red-500 text-xs mt-1 block">{errors.firstName}</span>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 bg-white/10 border border-primary-700 rounded-md text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                    {touched.lastName && errors.lastName && (
                      <span className="text-red-500 text-xs mt-1 block">{errors.lastName}</span>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 bg-white/10 border border-primary-700 rounded-md text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                  {touched.email && errors.email && (
                    <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>
                  )}
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white/10 border border-primary-700 rounded-md text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="How can we help you?"
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 bg-white/10 border border-primary-700 rounded-md text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  ></textarea>
                  {touched.message && errors.message && (
                    <span className="text-red-500 text-xs mt-1 block">{errors.message}</span>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || !isMounted}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {!isMounted ? 'Loading...' : isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitError && (
                  <div className="mt-4 p-3 rounded-md text-sm bg-red-100 text-red-800 border border-red-200">
                    {submitError}
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
