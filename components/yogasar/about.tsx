import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/919302239879?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20online%20yoga%20classes."

export function About() {
  return (
    <section id="about" className="py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-[#EAE2CF] to-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-serif text-[#2D2D2D] mb-6 sm:mb-8 md:mb-10 text-balance leading-[1.15] tracking-tight">
            A Calm, Practical Way to Make Yoga Part of Daily Life
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#5A5A5A] leading-relaxed mb-5 sm:mb-6 md:mb-8">
            Our online yoga classes in Ahmedabad are designed for people who want a simple and supportive practice they can actually continue. Whether your goal is better flexibility, less stiffness, improved posture, or a calmer mind, these sessions make it easier to build consistency without leaving home.
          </p>

          <p className="text-[#6B7A3D] font-medium mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg tracking-wide">
            No complicated process. Just WhatsApp, choose your batch, and begin.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-[#6B7A3D] hover:bg-[#4E5B2A] text-white rounded-full px-8 sm:px-10 h-12 sm:h-14 text-base tracking-wide transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Enquire on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
