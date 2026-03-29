import { GraduationCap, Award, Users } from "lucide-react"

const credentials = [
  {
    icon: Award,
    title: "Officially Trained",
  },
  {
    icon: GraduationCap,
    title: "Masters in Yog",
  },
  {
    icon: Users,
    title: "Beginner-Friendly Guidance",
  },
]

export function Teacher() {
  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F3E87B]/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <span className="inline-block glass-card-subtle text-[#4E5B2A] text-xs sm:text-sm tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-4 sm:mb-5">
              Your Instructor
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-serif text-[#2D2D2D] text-balance leading-[1.15] tracking-tight">
              Learn with Expert Guidance
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-5 gap-8 md:gap-10 lg:gap-14 items-center">
            {/* Image placeholder */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-[#F3E87B]/40 to-[#EAE2CF]/30 rounded-3xl blur-lg -z-10" />
                <div className="relative glass-card rounded-2xl sm:rounded-3xl overflow-hidden w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center shadow-xl">
                  <div className="text-center p-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-[#6B7A3D] to-[#4E5B2A] rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                      <span className="text-3xl sm:text-4xl font-serif text-white">S</span>
                    </div>
                    <p className="text-sm sm:text-base font-serif text-[#4E5B2A]">Acharya Sarika</p>
                    <p className="text-xs sm:text-sm text-[#5A5A5A]">Yoga Instructor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="md:col-span-3 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#4E5B2A] mb-4 sm:mb-5 tracking-tight">
                Acharya Sarika Disawal
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-[#5A5A5A] leading-relaxed mb-6 sm:mb-8">
                Acharya Sarika Disawal is an officially trained yoga teacher with a Masters in Yog, offering structured, supportive, and practical online classes for students in Ahmedabad. Her teaching style focuses on clarity, consistency, and making yoga approachable for beginners as well as regular practitioners.
              </p>

              {/* Credentials */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                {credentials.map((credential, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 glass-card px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#E5DDD0]/50"
                  >
                    <credential.icon className="w-4 h-4 text-[#6B7A3D]" />
                    <span className="text-xs sm:text-sm font-medium text-[#2D2D2D] tracking-wide">{credential.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
