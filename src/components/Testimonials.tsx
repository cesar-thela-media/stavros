const testimonials = [
  {
    name: "Coming Soon",
    location: "Austin, TX",
    text: "Testimonials will be added here once provided by the client.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-cream-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-serif">
            Featured Testimonials
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-600">
            Hear what our clients have to say about their experience with the Stavros Realty Team
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-cream-200"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-gold-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-primary-700 text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>
              <div className="border-t border-cream-200 pt-4">
                <div className="font-semibold text-primary-900">{testimonial.name}</div>
                <div className="text-primary-600 text-sm">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-primary-600 mb-6">
            Ready to share your own success story with the Stavros Realty Team?
          </p>
          <a 
            href="#contact"
            className="btn-primary"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
