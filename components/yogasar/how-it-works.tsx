import { CalendarCheck, MessageCircle, Video } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    title: "Message on WhatsApp",
    description: "Ask about timings, suitability, and current batches.",
  },
  {
    icon: CalendarCheck,
    title: "Confirm your batch",
    description: "Choose the slot that fits your routine best.",
  },
  {
    icon: Video,
    title: "Join live from home",
    description: "Attend classes in Hindi and build a steady routine.",
  },
]

export function HowItWorks() {
  return (
    <section className="section-wrap pt-6">
      <div className="page-shell">
        <div className="section-frame px-5 py-7 sm:px-8 sm:py-8 lg:px-10">
          <div className="mb-8 max-w-2xl">
            <span className="eyebrow mb-5">How it works</span>
            <h2 className="section-title max-w-2xl lg:max-w-3xl">
              A simple start, in three steps.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="panel px-5 py-5">
                <div className="flex items-center justify-between">
                  <step.icon className="h-8 w-8 text-[#56663c]" />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#5c554b]">0{index + 1}</span>
                </div>
                <h3 className="mt-6 font-serif text-[1.5rem] leading-[1.12] text-[#221f1a]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5c554b]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
