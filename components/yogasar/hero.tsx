"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL =
  "https://wa.me/919302239879?text=Hi%2C%20I%20want%20to%20join%20the%20ladies-only%20online%20yoga%20classes%20in%20Hindi."

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-[var(--header-height)]">
      <div className="page-shell">
        <div
          className="section-frame min-h-[calc(100svh-var(--header-height))] px-5 py-5 transition-all duration-300 sm:px-7 sm:py-6 lg:grid lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-8 lg:px-9 lg:py-7"
          style={{
            borderTopLeftRadius: isScrolled ? "var(--shell-radius)" : "0px",
            borderTopRightRadius: isScrolled ? "var(--shell-radius)" : "0px",
          }}
        >
          <div className="max-w-xl">
            <h1 className="font-serif text-[clamp(2.25rem,4vw,4rem)] leading-[1.02] text-[#221f1a]">
              Online yoga classes in Hindi for ladies across India.
            </h1>
            <p className="section-lead mt-4 max-w-lg">
              Live classes from home with Acharya Sarika Disawal.
            </p>
            <p className="mt-4 text-sm text-[#5c554b]">5 days a week. Rs 1000 per month.</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-[#56663c] px-7 text-white hover:bg-[#384529]"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Join on WhatsApp
                </a>
              </Button>
              <a
                href="#classes"
                className="inline-flex items-center gap-2 text-sm text-[#384529] transition-colors hover:text-[#56663c]"
              >
                View class focus
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-6 lg:mt-0">
            <div className="relative overflow-hidden rounded-[var(--shell-radius)]">
              <Image
                src="/images/hero-yoga.jpg"
                alt="Peaceful yoga setup for online classes at home"
                width={720}
                height={700}
                className="aspect-[4/3.9] w-full object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
