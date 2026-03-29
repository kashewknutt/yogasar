import { MessageCircle, CalendarCheck, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/919302239879?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20online%20yoga%20classes."

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "WhatsApp Us",
    description: "Message directly to ask about timings, class style, and suitability.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Choose Your Batch",
    description: "Pick the batch that fits your schedule best.",
  },
  {
    number: "03",
    icon: Video,
    title: "Join from Home",
    description: "Attend your live online classes and begin building a healthier routine.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-serif text-[#2D2D2D] mb-4 leading-[1.15] tracking-tight">
            How to Get Started
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-8 lg:gap-12 xl:gap-16 max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-14">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connector line - only on md+ */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 lg:top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-gradient-to-r from-[#EAE2CF] via-[#E5DDD0] to-[#EAE2CF]" />
              )}
              
              <div className="relative inline-block">
                <div className="w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 bg-gradient-to-br from-[#6B7A3D] to-[#4E5B2A] rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-xl shadow-[#6B7A3D]/20">
                  <step.icon className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-[#F3E87B] to-[#e8dd6f] rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-[#4E5B2A] shadow-md">
                  {step.number}
                </span>
              </div>
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-serif text-[#2D2D2D] mb-2 sm:mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-[#5A5A5A] text-sm sm:text-base max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#6B7A3D] hover:bg-[#4E5B2A] text-white rounded-full px-8 sm:px-10 h-12 sm:h-14 text-base tracking-wide transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
