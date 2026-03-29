"use client"

import { useEffect, useState } from "react"
import { Menu, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL =
  "https://wa.me/919302239879?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20ladies-only%20online%20yoga%20classes%20in%20Hindi."

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Classes", href: "#classes" },
  { label: "Pricing", href: "#pricing" },
  { label: "Teacher", href: "#teacher" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="page-shell">
        <div
          className={`border transition-all duration-300 ${
            isScrolled
              ? "border-[#b7a892]/24 bg-[#fffdf8]/95 shadow-[0_12px_28px_rgba(34,31,26,0.07)] backdrop-blur-md"
              : "border-transparent bg-[#fffdf8]/84"
          }`}
          style={{
            borderTopLeftRadius: "var(--shell-radius)",
            borderTopRightRadius: "var(--shell-radius)",
            borderBottomLeftRadius: isScrolled ? "var(--shell-radius)" : "0px",
            borderBottomRightRadius: isScrolled ? "var(--shell-radius)" : "0px",
          }}
        >
          <div className="flex h-14 items-center justify-between px-4 sm:h-16 sm:px-5 lg:h-[4.5rem] lg:px-7">
            <a href="#home" className="flex flex-col">
              <span className="font-serif text-xl text-[#384529] sm:text-2xl">Yogasar</span>
              <span className="text-[10px] uppercase tracking-[0.26em] text-[#5c554b] sm:text-[11px]">
                Yoga in Hindi for ladies
              </span>
            </a>

            <nav className="hidden items-center gap-6 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium tracking-[0.14em] text-[#4b4339] transition-colors hover:text-[#56663c]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button
                asChild
                className="h-11 rounded-full bg-[#56663c] px-6 text-sm tracking-[0.12em] text-white hover:bg-[#384529]"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Join on WhatsApp
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <Button
                asChild
                size="sm"
                className="h-9 rounded-full bg-[#56663c] px-3 text-white hover:bg-[#384529]"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                </a>
              </Button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                className="rounded-full border border-[#d6cab8]/55 bg-[#fffdf8]/88 p-2 text-[#312b24] shadow-sm"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="border-t border-[#d6cab8]/40 px-4 pb-4 pt-2 lg:hidden">
              <nav className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium tracking-[0.12em] text-[#312b24] transition-colors hover:bg-[#ede4d6]"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/refund-policy"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium tracking-[0.12em] text-[#312b24] transition-colors hover:bg-[#ede4d6]"
                >
                  Refund Policy
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
