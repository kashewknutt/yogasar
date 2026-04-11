import { JsonLd } from "@/components/yogasar/json-ld"
import { SharedContentPage } from "@/components/yogasar/content-page"
import { breadcrumbSchema, buildMetadata, faqSchema, graph, webPageSchema } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Pricing for Online Yoga Classes",
  description:
    "View Yogasar pricing for live online yoga classes in Hindi for women across India.",
  path: "/pricing",
  keywords: [
    "online yoga class price",
    "yoga classes pricing",
    "online yoga classes monthly fee",
  ],
})

export default function PricingPage() {
  const faqs = [
    {
      question: "What is the current monthly fee?",
      answer: "The current fee shown on the site is Rs 1000 per month.",
    },
    {
      question: "How many classes are included?",
      answer: "The current structure is five live classes per week.",
    },
    {
      question: "How do I confirm timings before joining?",
      answer: "The easiest way is to ask on WhatsApp about the currently available batches.",
    },
  ]

  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            title: "Pricing for Online Yoga Classes",
            description:
              "View Yogasar pricing for live online yoga classes in Hindi for women across India.",
            path: "/pricing",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
          faqSchema(faqs),
        ])}
      />
      <SharedContentPage
        eyebrow="Pricing"
        title="Simple pricing for a live, guided yoga routine"
        intro="This page gives pricing its own crawlable destination. That helps both users and search engines understand the commercial offer without digging through the homepage."
        highlights={[
          { label: "Plan", value: "Monthly" },
          { label: "Price", value: "Rs 1000" },
          { label: "Frequency", value: "5 days a week" },
          { label: "Format", value: "Live online classes in Hindi" },
        ]}
        sections={[
          {
            title: "One clear offer is better than cluttered pricing",
            body: [
              "For this business, pricing works best when it is simple. A single clear monthly plan reduces friction and makes WhatsApp enquiry easier.",
              "This page should keep the offer easy to understand rather than trying to mimic a complex SaaS pricing table.",
            ],
          },
          {
            title: "What people want to know before they ask",
            body: [
              "Pricing is rarely only about the rupee amount. People also want to know whether the classes are live, how many days are included, whether the classes are in Hindi, and how they confirm their batch.",
            ],
            bullets: [
              "Monthly fee is clearly stated",
              "Live classes rather than passive recordings",
              "Hindi instruction",
              "WhatsApp is the confirmation path for timings",
            ],
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          {
            href: "/faq",
            title: "Read the FAQ",
            description: "See common questions about language, who can join, and class format.",
          },
          {
            href: "/refund-policy",
            title: "Read the refund policy",
            description: "Review the current refund position before joining.",
          },
          {
            href: "/contact",
            title: "Ask about timings",
            description: "Use the contact page if you want the simplest path to confirm a batch.",
          },
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pricing" },
        ]}
        ctaTitle="Pricing is clear. The next question is whether the batch fits your routine."
        ctaDescription="Use WhatsApp to confirm available timings, class fit, and how to get started."
        updatedLabel="11 April 2026"
      />
    </>
  )
}
