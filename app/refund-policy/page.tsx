import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Refund Policy | Yogasar",
  description:
    "Refund policy for Yogasar online yoga classes. Booked classes are non-refundable.",
}

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen px-3 py-8 sm:px-4 sm:py-10">
      <div className="page-shell max-w-3xl">
        <Link
          href="/"
          className="text-[11px] uppercase tracking-[0.22em] text-[#56663c] underline underline-offset-4"
        >
          Back to home
        </Link>

        <div className="mt-8">
          <h1 className="font-serif text-[clamp(2.1rem,4.2vw,3.4rem)] leading-[1.06] text-[#221f1a]">
            Refund policy
          </h1>

          <div className="mt-6 space-y-5 text-base leading-8 text-[#4b4339]">
            <p>
              Booked classes are non-refundable.
            </p>
            <p>
              Please confirm timings, language, class format, and batch details on WhatsApp before
              joining.
            </p>
            <p>
              If you have any questions before booking, ask in advance so everything is clear before
              payment or confirmation.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
