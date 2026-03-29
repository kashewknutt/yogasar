"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL =
  "https://wa.me/919302239879?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20ladies-only%20online%20yoga%20classes%20in%20Hindi."

export function MobileWhatsAppBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 md:hidden">
      <div className="mx-auto flex max-w-[26rem] items-center justify-between rounded-full border border-[#384529]/20 bg-[#384529]/96 px-4 py-3 shadow-[0_-12px_40px_rgba(34,31,26,0.18)] backdrop-blur-md">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#d6bc78]">Hindi classes</p>
          <p className="text-sm text-white">For ladies across India</p>
        </div>
        <Button
          asChild
          size="sm"
          className="h-9 rounded-full bg-[#d6bc78] px-4 text-[#221f1a] hover:bg-[#e3cc94]"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-1.5 h-4 w-4" />
            Join
          </a>
        </Button>
      </div>
    </div>
  )
}
