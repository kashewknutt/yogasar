import Image from "next/image"
import { MessageCircle, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/919302239879?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20online%20yoga%20classes."

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-b from-[#FAF8F1] via-[#FAF8F1] to-[#F5F3EE] pt-16 sm:pt-20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#F3E87B]/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6B7A3D]/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            {/* Eyebrow */}
            <div className="inline-block glass-card-subtle text-[#4E5B2A] text-xs sm:text-sm tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-5 md:mb-6 lg:mb-8">
              Online Yoga Classes in Ahmedabad
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-serif text-[#2D2D2D] leading-[1.1] tracking-tight mb-5 md:mb-6 lg:mb-8 text-balance">
              Build a Calmer, Stronger Routine from Home
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-[#5A5A5A] leading-relaxed mb-5 md:mb-6 lg:mb-8 max-w-xl mx-auto md:mx-0">
              Join guided online yoga classes in Ahmedabad with Acharya Sarika Disawal, an officially trained teacher with a Masters in Yog. Beginner-friendly live classes, 5 days a week, for Rs 1000 per month.
            </p>

            {/* Price Trust Strip */}
            <div className="glass-card text-[#4E5B2A] px-4 sm:px-6 py-3 sm:py-4 rounded-2xl inline-flex items-center gap-2 sm:gap-4 mb-5 md:mb-6 lg:mb-8 flex-wrap justify-center md:justify-start text-xs sm:text-sm shadow-sm">
              <span className="font-semibold">Rs 1000/month</span>
              <span className="w-1 h-1 bg-[#6B7A3D]/30 rounded-full" />
              <span>5 days a week</span>
              <span className="w-1 h-1 bg-[#6B7A3D]/30 rounded-full hidden sm:block" />
              <span className="hidden sm:inline">Live online classes</span>
              <span className="w-1 h-1 bg-[#6B7A3D]/30 rounded-full hidden sm:block" />
              <span className="hidden sm:inline">Learn from home</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[#6B7A3D] hover:bg-[#4E5B2A] text-white rounded-full px-7 sm:px-8 h-12 sm:h-14 text-base tracking-wide transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#6B7A3D]/30 text-[#6B7A3D] hover:bg-[#6B7A3D] hover:text-white hover:border-[#6B7A3D] rounded-full px-7 sm:px-8 h-12 sm:h-14 text-base tracking-wide transition-all duration-200"
              >
                <a href="#classes">
                  <ArrowDown className="w-5 h-5 mr-2" />
                  View Class Details
                </a>
              </Button>
            </div>

            {/* Trust signals */}
            <p className="text-xs sm:text-sm text-[#6B7A3D]/80 tracking-wide">
              Beginner-friendly • Morning & evening batches • No travel required
            </p>
          </div>

          {/* Right Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#F3E87B]/40 via-[#EAE2CF]/30 to-transparent rounded-[2rem] blur-xl -z-10" />
              
              {/* Main image container */}
              <div className="relative glass-card rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl shadow-[#6B7A3D]/10">
                <Image
                  src="/images/hero-yoga.jpg"
                  alt="Calm home yoga setup with mat, cushion and natural light"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover aspect-[4/5]"
                  priority
                />
                
                {/* Floating badge */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6B7A3D] rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-white text-[10px] sm:text-xs font-semibold tracking-wider">LIVE</span>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-medium text-[#2D2D2D]">Live Online Sessions</p>
                      <p className="text-xs sm:text-sm text-[#5A5A5A]">Morning & Evening batches</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
