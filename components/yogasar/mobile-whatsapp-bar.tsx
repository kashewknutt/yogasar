"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/919302239879?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20online%20yoga%20classes."

export function MobileWhatsAppBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-dark shadow-[0_-4px_24px_rgba(0,0,0,0.15)]">
      <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5">
        <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
          Ask About Batches
        </span>
        <Button
          asChild
          size="sm"
          className="bg-[#F3E87B] hover:bg-[#e8dd6f] text-[#2D2D2D] rounded-full px-4 sm:px-5 h-9 font-semibold tracking-wide transition-all duration-200"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4 mr-1.5" />
            WhatsApp Now
          </a>
        </Button>
      </div>
    </div>
  )
}
