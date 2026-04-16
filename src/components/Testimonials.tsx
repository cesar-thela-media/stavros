'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: "Mark H.",
    location: "",
    text: "Spero possesses a wealth of expertise with a career spanning over 26 years in the luxury and overall real estate market where he represented individual sellers, multiple home builders, resale buyers, as well as new construction and custom home buyers. Spero is the perfect Realtor to assist you on either side of any real estate transaction. The valuable and extensive knowledge he offers blended with his experience as the VP of Business Operations and partial owner of a mortgage company provides a nuanced understanding of the distinct needs and aspirations of all parties to any transaction. Spero has honed his skills in crafting tailored solutions that bring visions, dreams, and real estate goals to life.",
    rating: 5
  },
  {
    name: "Ross & Aimee P.",
    location: "",
    text: "Spero was attentive to our needs and understood the details of the process to put all the pieces together to sell our home. We really appreciated Spero's ability to negotiate. He helped us to look at many perspectives and gave us confidence to land at our end result which was really good.",
    rating: 5
  },
  {
    name: "Darren & Jennifer S.",
    location: "",
    text: "We highly recommend hiring Spero and his team for any real estate purchase or sale. If you are looking for someone you can trust, who will be consistent with you, and really knows the market he is the Realtor for you. He was wonderful for us and I know he would be wonderful for you.",
    rating: 5
  },
  {
    name: "Andy & Jill M.",
    location: "",
    text: "Spero is an extremely knowledgeable and experienced real estate professional in both new home construction and existing homes. He guided us through our selection and build process with remarkable responsiveness and saved us many headaches by sharing his years of experience. You can't go wrong with Spero on your side.",
    rating: 5
  },
  {
    name: "Drs. Chae & Monya T.",
    location: "",
    text: "We had an incredible experience working with Spero Stavros during the build of our dream home. We had heard that building a home is stressful, but in our case, it was a joy. Spero made himself available for questions and kept us in the loop during the process. He and the team were extremely helpful in navigating all of our pre-build design changes. He was knowledgeable, easy to work with, and is a really nice guy. We highly recommend him.",
    rating: 5
  },
  {
    name: "Rick & Laura N.",
    location: "",
    text: "We had a seamless and spectacular experience with Spero working for us. It was nothing short of over the top as he was always quick to respond and thoughtful about each aspect we were looking for and dreaming of. I would not hesitate to refer him to my family and friends to help in their transaction. Thanks again.",
    rating: 5
  },
  {
    name: "Peter & Lisa S.",
    location: "",
    text: "Experienced, Accessible, Responsive, Collaborative, and Flexible. My wife and I went through a custom build during COVID, needless to say, we were presented with several supply and labor challenges. As we reflect on our working experience during that time, the words above sum up how we would describe Spero; we highly recommend him to others. Despite the challenges unique to that time, Spero went above and beyond to ensure he minimized surprises throughout the process.",
    rating: 5
  },
  {
    name: "Will S.",
    location: "",
    text: "We purchased our new home from Spero in 2023 and we were pleased with our experience. Spero was low-key, helpful, and willing to patiently answer all of our questions regarding our purchase. Spero went far beyond our natural expectations to research all questions we had about the property. Spero is a true professional who is very personable and easy to work with. We would highly recommend Spero as a top-notch realtor who will get you the best possible results based upon your needs.",
    rating: 5
  },
  {
    name: "Michael & Jackie K.",
    location: "",
    text: "I was in the market for a new home and I knew I wouldn't be able to find what I wanted in a pre-build. So, I set out to find an upscale community in which to build. I was lucky enough to come into contact with Spero once I found interest in a beautiful gated community. He guided and helped me through the process of picking out a lot on which to build, the architectural design process, and every step in between from the beginning to inception.",
    rating: 5
  },
  {
    name: "Peggy R.",
    location: "",
    text: "Spero was always very responsive to all our requests, as well as being readily available. Even if he was busy with another client, he would get back to us as soon as he was done helping someone else. We also felt he was always very honest in his dealings with us, which I can't always say about everyone.",
    rating: 5
  },
  {
    name: "Aaron & Traci P.",
    location: "",
    text: "My husband, son, and I had the pleasure of working with Spero Stavros. He walked us through the entire process of building a home in The Ventana development in Driftwood Texas. He spent many hours with us during the entire process of choosing the best lot, the best layout of the home for our needs and explaining the multiple questions that we threw at him during the building period. My family found Spero Stavros to be a knowledgeable, honest and an organized person.",
    rating: 5
  },
  {
    name: "Roy E.",
    location: "",
    text: "In my experience as a custom home builder for over 45+ years, I was fortunate to have the privilege of collaborating with Spero Stavros and I cannot recommend his services highly enough. I have worked with many Realtors and sales professionals throughout my time as a builder and consider Spero as one of the best I've worked with. Our seamless partnership has been instrumental in the successful completion of numerous custom home projects thanks to his unparalleled expertise and unwavering commitment to excellence.",
    rating: 5
  },
  {
    name: "Rohit D.",
    location: "",
    text: "Spero was an absolute pleasure to work with. He was responsive, knowledgeable and upfront. It's always good to work with someone who does not beat around the bush and is concise and direct. Spero helped us with our home purchase and provided helpful guidance throughout the process which not only saved us money but also quite a bit of time. Thank you, Spero.",
    rating: 5
  },
  {
    name: "Dan & Dottie B.",
    location: "",
    text: "We had the pleasure of meeting Spero Stavros back in 2018 when we began looking for property and making plans to build a new home. Spero was working for the builder at the time, so he was involved in every step of the process with us. He is very knowledgeable about the real estate market, new home build process, and decisions that can affect resale. Spero Stavros is a man with integrity, which is sometimes hard to find in the real estate business.",
    rating: 5
  },
  {
    name: "Myra M. & Miha V.",
    location: "",
    text: "We worked with Spero on a new build and were very satisfied with the experience. He was incredibly responsive and always quick to address our concerns. Spero listened to our needs and never tried to upsell us on unnecessary upgrades. Throughout the process, we felt he was helping us find a home, not just a house. We highly recommend Spero to anyone looking for a reliable and responsive Realtor.",
    rating: 5
  }
]

const DESKTOP_PAGE_SIZE = 3

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center justify-center mb-6">
      {[...Array(rating)].map((_, i) => (
        <svg
          key={i}
          className="h-6 w-6 text-gold-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkBreakpoint = () => setIsDesktop(window.innerWidth >= 1024)
    checkBreakpoint()
    window.addEventListener('resize', checkBreakpoint)
    return () => window.removeEventListener('resize', checkBreakpoint)
  }, [])

  const pageSize = isDesktop ? DESKTOP_PAGE_SIZE : 1
  const totalPages = Math.ceil(testimonials.length / pageSize)

  // Normalize currentIndex to always be a valid single-item index.
  // When switching breakpoints, clamp so we don't go out of bounds.
  const safeIndex = Math.min(currentIndex, testimonials.length - 1)

  // For desktop: snap to page boundaries
  const desktopPageIndex = Math.floor(safeIndex / DESKTOP_PAGE_SIZE)
  const displayStartIndex = isDesktop ? desktopPageIndex * DESKTOP_PAGE_SIZE : safeIndex

  // Slice with wrapping for desktop (in case near the end)
  const visibleTestimonials = isDesktop
    ? testimonials.slice(displayStartIndex, displayStartIndex + DESKTOP_PAGE_SIZE)
    : [testimonials[displayStartIndex]]

  const dotCount = isDesktop
    ? Math.ceil(testimonials.length / DESKTOP_PAGE_SIZE)
    : testimonials.length

  const activeDot = isDesktop ? desktopPageIndex : displayStartIndex

  const goToPrevious = () => {
    if (isDesktop) {
      const prevPage = desktopPageIndex === 0 ? Math.ceil(testimonials.length / DESKTOP_PAGE_SIZE) - 1 : desktopPageIndex - 1
      setCurrentIndex(prevPage * DESKTOP_PAGE_SIZE)
    } else {
      setCurrentIndex(safeIndex === 0 ? testimonials.length - 1 : safeIndex - 1)
    }
  }

  const goToNext = () => {
    if (isDesktop) {
      const totalDesktopPages = Math.ceil(testimonials.length / DESKTOP_PAGE_SIZE)
      const nextPage = desktopPageIndex === totalDesktopPages - 1 ? 0 : desktopPageIndex + 1
      setCurrentIndex(nextPage * DESKTOP_PAGE_SIZE)
    } else {
      setCurrentIndex(safeIndex === testimonials.length - 1 ? 0 : safeIndex + 1)
    }
  }

  const goToDot = (dotIndex: number) => {
    setCurrentIndex(isDesktop ? dotIndex * DESKTOP_PAGE_SIZE : dotIndex)
  }

  return (
    <section id="testimonials" className="section-padding bg-cream-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-serif">
            Client Testimonials
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-600">
            Hear what our clients have to say about their experience with Spero and The Stavros Realty Team
          </p>
        </div>

        {/* Testimonials Grid / Slider */}
        <div className="mt-12 relative">
          {/* Cards */}
          <div className={`grid gap-6 ${isDesktop ? 'lg:grid-cols-3' : 'grid-cols-1'}`}>
            {visibleTestimonials.map((testimonial, idx) => (
              <div
                key={`${displayStartIndex}-${idx}`}
                className="bg-white border-l-4 border-champagne-500 rounded-xl p-8 shadow-md"
              >
                <StarRating rating={testimonial.rating} />
                <blockquote className="text-primary-700 text-base leading-relaxed mb-8 text-center">
                  "{testimonial.text}"
                </blockquote>
                <div className="border-t border-cream-200 pt-6 text-center">
                  <div className="font-semibold text-primary-900 text-lg">{testimonial.name}</div>
                  {testimonial.location && (
                    <div className="text-primary-600 text-sm mt-1">{testimonial.location}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-cream-200"
            aria-label="Previous testimonial"
          >
            <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-cream-200"
            aria-label="Next testimonial"
          >
            <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: dotCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToDot(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                  index === activeDot
                    ? 'bg-champagne-600 border-champagne-600 shadow-md'
                    : 'bg-white border-cream-400 hover:border-champagne-500 hover:bg-cream-100'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-primary-600 mb-6">
            Ready to share your own success story with Spero Stavros?
          </p>
          <a
            href="#contact"
            className="btn-primary"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
