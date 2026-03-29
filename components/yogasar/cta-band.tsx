import { Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const JOIN_URL =
  "https://wa.me/919302239879?text=Hi%2C%20I%20want%20to%20join%20the%20ladies-only%20online%20yoga%20classes%20in%20Hindi."
const TIMINGS_URL =
  "https://wa.me/919302239879?text=Hi%2C%20I%20want%20to%20ask%20about%20available%20batch%20timings%20for%20the%20Hindi%20online%20classes."

export function CtaBand() {
  return (
    <section className="section-wrap pt-6">
      <div className="page-shell">
        <div className="tone-dark rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#d6bc78]">Ready to start</p>
            <h2 className="mt-5 max-w-4xl font-serif text-[clamp(2.15rem,3.8vw,3.65rem)] leading-[1.06] text-[#fffdf8]">
              Join live Hindi yoga classes for ladies from anywhere in India.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#f5f0e7]/80 sm:text-base">
              WhatsApp to ask about current batches, timings, and the best fit for your routine.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-[#d6bc78] px-7 tracking-[0.12em] text-[#221f1a] hover:bg-[#e3cc94]"
            >
              <a href={JOIN_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp to join
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-[#f5f0e7]/30 bg-transparent px-7 tracking-[0.12em] text-white hover:bg-white/10"
            >
              <a href={TIMINGS_URL} target="_blank" rel="noopener noreferrer">
                <Clock className="mr-2 h-5 w-5" />
                Ask about batches
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
