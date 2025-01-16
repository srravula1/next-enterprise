export function Testimonials() {
  const testimonials = [
    {
      quote: "This platform has transformed how we manage security across our facilities. The AI detection is incredibly accurate.",
      author: "Sarah Chen",
      role: "Head of Security",
      company: "Global Enterprises Inc.",
    },
    {
      quote: "The automated response system has reduced our incident response time by 70%. A game-changer for our operations.",
      author: "Michael Rodriguez",
      role: "Security Director",
      company: "Metro Security Solutions",
    },
    {
      quote: "The analytics dashboard gives us insights we never had before. We can now make data-driven security decisions.",
      author: "David Kim",
      role: "Operations Manager",
      company: "SafeGuard Systems",
    },
  ]

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
            Trusted by security professionals
          </h2>
          <p className="text-gray-500 sm:text-xl">
            See what industry leaders are saying about our platform
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="rounded-lg bg-white p-8 shadow-lg"
            >
              <blockquote className="mb-4 text-gray-500">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 