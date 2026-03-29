import { Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL =
  "https://wa.me/919302239879?text=Hi%2C%20I%20want%20to%20join%20the%20ladies-only%20online%20yoga%20classes%20in%20Hindi."

const includedFeatures = [
  "Live online classes 5 days a week",
  "Hindi instruction",
  "Ladies-only batches",
  "Join from anywhere in India",
]

export function Pricing() {
  return (
    <section id="pricing" className="section-wrap pt-8">
      <div className="page-shell">
        <div className="section-frame px-5 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div className="max-w-md">
              <span className="eyebrow mb-5">Simple pricing</span>
              <h2 className="section-title max-w-lg">Rs 1000 per month.</h2>
              <p className="section-lead mt-4">
                One clear plan for live Hindi yoga classes from home.
              </p>
            </div>

            <div className="panel px-6 py-6 sm:px-7 sm:py-7">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#56663c]">Monthly plan</p>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="font-serif text-5xl leading-none text-[#221f1a] sm:text-6xl">Rs 1000</span>
                    <span className="pb-1 text-sm text-[#5c554b]">/ month</span>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-[#56663c] px-6 text-white hover:bg-[#384529]"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Ask about batches
                  </a>
                </Button>
              </div>

              <div className="fine-rule my-6" />

              <ul className="grid gap-4 sm:grid-cols-2">
                {includedFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="grid grid-cols-[1.75rem_1fr] items-start gap-3 text-sm leading-7 text-[#4b4339] sm:text-base"
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#56663c] text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-[#5c554b]">
                Ask on WhatsApp for current batch timings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
