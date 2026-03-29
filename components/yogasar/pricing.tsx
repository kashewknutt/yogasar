import { Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/919302239879?text=Hi%2C%20I%20want%20to%20join%20the%20online%20yoga%20classes%20for%20Rs%201000%2Fmonth."

const includedFeatures = [
  "5 days a week live online classes",
  "Learn from home",
  "Beginner-friendly guidance",
  "Morning / evening batch options",
  "Structured online sessions",
]

export function Pricing() {
  return (
    <section id="pricing" className="py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[#F3E87B]/15 rounded-full blur-[80px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#6B7A3D]/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-serif text-[#2D2D2D] mb-4 sm:mb-5 leading-[1.15] tracking-tight">
            Simple Pricing
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#5A5A5A]">
            Simple monthly pricing for a consistent yoga routine you can actually maintain.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {/* Premium glassmorphism pricing card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#F3E87B]/50 via-[#EAE2CF]/40 to-[#6B7A3D]/20 rounded-[2rem] blur-xl -z-10" />
            
            <div className="glass-card rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 border border-[#6B7A3D]/30 shadow-2xl shadow-[#6B7A3D]/10 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F3E87B]/40 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative">
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#4E5B2A] mb-2 tracking-wide">
                  Monthly Online Yoga Plan
                </h3>
                
                <div className="flex items-baseline gap-1 mb-6 sm:mb-8">
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#2D2D2D] tracking-tight">Rs 1000</span>
                  <span className="text-[#5A5A5A] text-sm sm:text-base">/ month</span>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {includedFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-[#6B7A3D] to-[#4E5B2A] rounded-full flex items-center justify-center mt-0.5 shrink-0 shadow-md">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                      </div>
                      <span className="text-[#2D2D2D] text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs sm:text-sm text-[#5A5A5A] mb-6 sm:mb-8">
                  Ask about current timings and batch availability.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#6B7A3D] hover:bg-[#4E5B2A] text-white rounded-full h-12 sm:h-14 text-base tracking-wide transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Join on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <p className="text-center text-xs sm:text-sm text-[#5A5A5A] mt-6 sm:mt-8 tracking-wide">
            No complicated signup. No online payment flow. Just WhatsApp and get started.
          </p>
        </div>
      </div>
    </section>
  )
}
