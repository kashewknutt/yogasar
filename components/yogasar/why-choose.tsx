import { MapPin, IndianRupee, Heart, Sunrise } from "lucide-react"

const benefits = [
  {
    icon: MapPin,
    title: "Learn from Anywhere",
    description: "Join your yoga class easily from home without spending time commuting.",
  },
  {
    icon: IndianRupee,
    title: "Affordable and Consistent",
    description: "At Rs 1000 per month for 5 days a week, it is designed to be simple and sustainable.",
  },
  {
    icon: Heart,
    title: "Beginner-Friendly Guidance",
    description: "Clear instruction and practical pacing make it easy to start even if you are new to yoga.",
  },
  {
    icon: Sunrise,
    title: "Build a Better Daily Routine",
    description: "Morning or evening classes help you stay regular and feel better day by day.",
  },
]

export function WhyChoose() {
  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-serif text-[#2D2D2D] mb-4 sm:mb-5 text-balance leading-[1.15] tracking-tight">
            Why Ahmedabad Students Prefer Our Online Yoga Classes
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group glass-card-subtle rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center lg:text-left border border-[#E5DDD0]/50"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#6B7A3D] to-[#4E5B2A] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-105 transition-transform mx-auto lg:mx-0 shadow-lg shadow-[#6B7A3D]/20">
                <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif text-[#2D2D2D] mb-2 sm:mb-3 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-[#5A5A5A] leading-relaxed text-sm sm:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
