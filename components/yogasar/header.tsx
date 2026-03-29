"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/919302239879?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20online%20yoga%20classes."

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Classes", href: "#classes" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F1]/80 backdrop-blur-xl shadow-sm border-b border-[#E5DDD0]/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-[72px]">
          {/* Logo */}
          <a href="#home" className="flex flex-col">
            <span className="text-lg sm:text-xl lg:text-2xl font-serif text-[#4E5B2A] tracking-wide">
              Yogasar
            </span>
            <span className="text-[9px] sm:text-[10px] lg:text-xs text-[#6B7A3D]/80 -mt-0.5 tracking-wide">
              By Acharya Sarika Disawal
            </span>
          </a>

          {/* Desktop Navigation - shows from lg */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-[#2D2D2D]/80 hover:text-[#6B7A3D] transition-colors tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA - shows from lg */}
          <div className="hidden lg:flex items-center">
            <Button
              asChild
              className="bg-[#6B7A3D] hover:bg-[#4E5B2A] text-white rounded-full px-6 xl:px-7 h-10 text-sm tracking-wide transition-all duration-200 hover:shadow-lg"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Join on WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile/Tablet: WhatsApp Button + Menu - hidden from lg */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <Button
              asChild
              size="sm"
              className="bg-[#6B7A3D] hover:bg-[#4E5B2A] text-white rounded-full h-9 px-3 sm:px-4"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 sm:mr-1.5" />
                <span className="hidden sm:inline text-sm">WhatsApp</span>
              </a>
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#2D2D2D] hover:bg-[#EAE2CF]/50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - hidden from lg */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F1]/95 backdrop-blur-xl border-t border-[#E5DDD0]/50 py-4 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-[#2D2D2D] hover:bg-[#EAE2CF]/50 transition-colors rounded-xl tracking-wide"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-3">
                <Button
                  asChild
                  className="w-full bg-[#6B7A3D] hover:bg-[#4E5B2A] text-white rounded-full tracking-wide"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Join on WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
