import { MessageCircle } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/919302239879?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20online%20yoga%20classes."

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Classes", href: "#classes" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

export function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Mobile: centered and stacked, md+: multi-column */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 mb-8 sm:mb-10 md:mb-12 text-center sm:text-left">
          {/* Brand */}
          <div>
            <div className="mb-4 sm:mb-5">
              <span className="text-xl sm:text-2xl font-serif text-white tracking-wide">
                Yogasar
              </span>
              <p className="text-xs sm:text-sm text-white/50 mt-1 tracking-wide">
                By Acharya Sarika Disawal
              </p>
            </div>
            <p className="text-white/70 mb-4 sm:mb-5 text-sm sm:text-base">
              Online Yoga Classes in Ahmedabad
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#F3E87B] hover:text-white transition-colors text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4" />
              9302239879
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 sm:mb-5 text-sm sm:text-base tracking-wide">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-medium mb-4 sm:mb-5 text-sm sm:text-base tracking-wide">Get Started</h4>
            <p className="text-white/60 mb-4 sm:mb-5 text-sm sm:text-base leading-relaxed">
              Ready to join? WhatsApp us to ask about batch timings and get started with your yoga journey.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#6B7A3D] hover:bg-[#4E5B2A] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 text-sm sm:text-base font-medium tracking-wide hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Now
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center">
          <p className="text-white/40 text-xs sm:text-sm tracking-wide">
            © {new Date().getFullYear()} Yogasar by Acharya Sarika Disawal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
