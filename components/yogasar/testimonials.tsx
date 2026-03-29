import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajat D.",
    label: "CTO, Valnee Solutions, Mumbai",
    quote: "The teachings, morals, techniques of the classes have helped in finding peace in my hectic work life. Would definitely recommend people to try out.",
  },
  {
    name: "Riddhi P.",
    label: "Homemaker, Ahmedabad",
    quote: "For me, the biggest benefit has been consistency. Joining from home saves time, and I already feel less stiffness and more comfort in my body.",
  },
  {
    name: "Kunal M.",
    label: "Business Owner, Ahmedabad",
    quote: "The structure is practical and the monthly fee is very reasonable. It is a great option if you want guided yoga without overcomplicating things.",
  },
  {
    name: "Mitali R.",
    label: "Student, Ahmedabad",
    quote: "I was nervous to begin because I was not flexible at all, but the classes are easy to follow and very welcoming. It feels like a routine I can continue.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-linear-to-b from-[#FAF8F1] to-[#F5F3EE] relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F3E87B]/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-serif text-[#2D2D2D] mb-4 leading-[1.15] tracking-tight">
            What Students Love About the Classes
          </h2>
        </div>

        {/* Responsive grid: 1 col mobile, 2 cols md, 4 cols xl */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E5DDD0]/30"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#F3E87B] mb-4" />
              <p className="text-[#2D2D2D] text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-medium text-[#2D2D2D] text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-[#6B7A3D]">{testimonial.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
