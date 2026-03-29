import { Monitor, Flower2, Wallet, Clock, Activity, Heart } from "lucide-react"

const fitItems = [
  { icon: Monitor, text: "Online yoga classes in Ahmedabad" },
  { icon: Flower2, text: "Beginner yoga from home" },
  { icon: Wallet, text: "An affordable yoga option" },
  { icon: Clock, text: "Morning or evening guided sessions" },
  { icon: Activity, text: "Better flexibility and posture" },
  { icon: Heart, text: "Stress relief through movement and breath" },
]

export function WhoItsFor() {
  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-[#FAF8F1] to-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-serif text-[#2D2D2D] mb-4 text-balance leading-[1.15] tracking-tight">
            {"This Is a Great Fit If You Want…"}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-5xl mx-auto">
          {fitItems.map((item, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-4 sm:p-5 md:p-6 flex items-center gap-3 sm:gap-4 hover:bg-[#6B7A3D] transition-all duration-300 cursor-default border border-[#E5DDD0]/30 hover:border-[#6B7A3D] hover:shadow-xl"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-[#F3E87B] to-[#e8dd6f] group-hover:from-white group-hover:to-white rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-md">
                <item.icon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#4E5B2A]" />
              </div>
              <span className="text-[#2D2D2D] group-hover:text-white font-medium transition-colors text-sm sm:text-base">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
