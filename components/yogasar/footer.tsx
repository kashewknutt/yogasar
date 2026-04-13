import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { enquiryWhatsappUrl } from "@/lib/site"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Online classes", href: "/online-yoga-classes" },
  { label: "Beginner yoga", href: "/beginner-yoga-classes-online" },
  { label: "Yoga in Hindi", href: "/online-yoga-classes-in-hindi" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
]

const trustLinks = [
  { label: "About teacher", href: "/about-acharya-sarika-disawal" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Refund policy", href: "/refund-policy" },
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms and conditions", href: "/terms-and-conditions" },
  { label: "Cancellation policy", href: "/cancellation-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
]

export function Footer() {
  return (
    <footer className="px-3 pb-6 pt-6 sm:px-4 sm:pb-8">
      <div className="page-shell">
        <div className="tone-dark rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <p className="font-serif text-[2rem] text-[#fffdf8]">Yogsar</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[#d6bc78]">
                Yoga in Hindi for ladies
              </p>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#f5f0e7]/78">
                Live online classes for women across India with Acharya Sarika Disawal.
              </p>
              <a
                href={enquiryWhatsappUrl}
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
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[#f5f0e7]/78 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#d6bc78]">Trust</p>
              <div className="mt-5 grid gap-3">
                {trustLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[#f5f0e7]/78 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="fine-rule my-7" />

          <p className="text-xs uppercase tracking-[0.18em] text-[#f5f0e7]/52">
            Copyright {new Date().getFullYear()} Yogsar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
