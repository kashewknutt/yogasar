import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL =
  "https://wa.me/919302239879?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20ladies-only%20online%20yoga%20classes%20in%20Hindi."

const highlights = [
  "For ladies only",
  "Hindi guidance",
  "Join from anywhere in India",
]

export function About() {
  return (
    <section id="about" className="section-wrap pt-6">
      <div className="page-shell">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel px-6 py-7 sm:px-7 sm:py-8">
            <span className="eyebrow mb-5">About the classes</span>
            <h2 className="section-title max-w-3xl">
              A practical yoga routine that fits home life.
            </h2>
            <p className="section-lead mt-5 max-w-xl">
              Yogsar is designed for women who want clear, supportive yoga instruction without
              having to travel. The classes are live, taught in Hindi, and built to be approachable
              whether someone is beginning for the first time or returning after a break.
            </p>
          </div>

          <div className="section-frame px-6 py-7 sm:px-7 sm:py-8">
            <div className="grid gap-4">
              {highlights.map((item) => (
                <div key={item} className="panel-soft px-4 py-4 text-sm uppercase tracking-[0.16em] text-[#384529]">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-[#4b4339] sm:text-base">
              No complicated signup, no payment flow, and no unnecessary steps. Message on WhatsApp,
              confirm your batch, and begin.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 h-12 rounded-full bg-[#56663c] px-7 tracking-[0.12em] text-white hover:bg-[#384529]"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Enquire on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
