import { MessageCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/919302239879?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20online%20yoga%20classes."
const WHATSAPP_TIMINGS_URL = "https://wa.me/919302239879?text=Hi%2C%20I%20want%20to%20ask%20about%20available%20batch%20timings."

export function CtaBand() {
  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 glass-dark relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4E5B2A] via-[#5a6832] to-[#4E5B2A] -z-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F3E87B]/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-serif text-white mb-5 sm:mb-6 md:mb-8 text-balance leading-[1.15] tracking-tight">
            Ready to Start Online Yoga Classes in Ahmedabad?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-8 sm:mb-10 md:mb-12">
            Join live yoga classes from home for just Rs 1000 per month, 5 days a week. WhatsApp now to ask about current batches and get started.
          </p>
          {/* Stacked on mobile, horizontal on sm+ */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#F3E87B] hover:bg-[#e8dd6f] text-[#2D2D2D] rounded-full px-8 sm:px-10 h-12 sm:h-14 text-base font-semibold tracking-wide transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp to Join
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white bg-transparent hover:bg-white hover:text-[#2D2D2D] rounded-full px-8 sm:px-10 h-12 sm:h-14 text-base tracking-wide transition-all duration-200 backdrop-blur-sm"
            >
              <a href={WHATSAPP_TIMINGS_URL} target="_blank" rel="noopener noreferrer">
                <Clock className="w-5 h-5 mr-2" />
                Ask About Batches
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
