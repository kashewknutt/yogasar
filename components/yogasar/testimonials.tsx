const testimonials = [
  {
    name: "Rajat D.",
    label: "Mumbai",
    quote:
      "The classes brought more peace and steadiness into a hectic routine. The teaching style is grounded and easy to continue with.",
  },
  {
    name: "Riddhi P.",
    label: "Indore",
    quote:
      "Joining from home makes it realistic to stay regular. I already feel less stiffness and more ease in my body.",
  },
  {
    name: "Kunal M.",
    label: "Surat",
    quote:
      "The structure is practical and the monthly fee is simple. It works well for anyone who wants guided yoga without unnecessary complexity.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="section-wrap pt-6">
      <div className="page-shell">
        <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <span className="eyebrow mb-5">Student feedback</span>
            <h2 className="section-title max-w-xl lg:max-w-2xl">
              What students appreciate most.
            </h2>
          </div>

          <div className="grid gap-4">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.name}
                className={`panel px-6 py-6 ${index === 1 ? "lg:ml-10" : ""}`}
              >
                <p className="text-base leading-8 text-[#312b24] sm:text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="font-serif text-2xl text-[#221f1a]">{testimonial.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#56663c]">{testimonial.label}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
