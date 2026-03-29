import { Check } from "lucide-react"

const benefits = [
  "Better flexibility",
  "Less body stiffness",
  "Improved posture",
  "Better movement in daily life",
  "A calmer, clearer mind",
  "More steady energy",
  "Better body awareness",
  "A more consistent self-care routine",
]

export function Benefits() {
  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-[#EAE2CF] to-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-serif text-[#2D2D2D] mb-4 text-balance leading-[1.15] tracking-tight">
            What Regular Practice Can Help You Improve
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10 md:mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm border border-white/50"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[#6B7A3D] to-[#4E5B2A] rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-[#2D2D2D] font-medium text-sm sm:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-base sm:text-lg lg:text-xl text-[#5A5A5A] max-w-xl mx-auto">
            You do not need to be flexible before starting. You just need a simple routine and the willingness to begin.
          </p>
        </div>
      </div>
    </section>
  )
}
