import Link from "next/link"
import { MessageCircle } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/919302239879?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20ladies-only%20online%20yoga%20classes%20in%20Hindi."

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Classes", href: "#classes" },
  { label: "Pricing", href: "#pricing" },
  { label: "Teacher", href: "#teacher" },
  { label: "FAQ", href: "#faq" },
]

export function Footer() {
  return (
    <footer className="px-3 pb-6 pt-6 sm:px-4 sm:pb-8">
      <div className="page-shell">
        <div className="tone-dark rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <p className="font-serif text-[2rem] text-[#fffdf8]">Yogasar</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[#d6bc78]">
                Yoga in Hindi for ladies
              </p>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#f5f0e7]/78">
                Live online classes for women across India with Acharya Sarika Disawal.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm tracking-[0.08em] text-[#d6bc78] transition-colors hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
                9302239879
              </a>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#d6bc78]">Navigate</p>
              <div className="mt-5 grid gap-3">
                {quickLinks.map((link) => (
                  <a key={link.label} href={link.href} className="text-sm text-[#f5f0e7]/78 transition-colors hover:text-white">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#d6bc78]">Policies</p>
              <div className="mt-5 grid gap-3">
                <Link href="/refund-policy" className="text-sm text-[#f5f0e7]/78 transition-colors hover:text-white">
                  Refund policy
                </Link>
                <p className="text-sm leading-7 text-[#f5f0e7]/60">Booked classes are non-refundable.</p>
              </div>
            </div>
          </div>

          <div className="fine-rule my-7" />

          <p className="text-xs uppercase tracking-[0.18em] text-[#f5f0e7]/52">
            © {new Date().getFullYear()} Yogasar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
