import { JsonLd } from "@/components/yogasar/json-ld"
import { SharedContentPage } from "@/components/yogasar/content-page"
import { breadcrumbSchema, buildMetadata, graph, webPageSchema } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Contact Yogasar",
  description:
    "Contact Yogasar to ask about timings, batches, and suitability for the online yoga classes in Hindi.",
  path: "/contact",
  keywords: [
    "contact yoga class",
    "contact online yoga classes",
    "ask about yoga batch timings",
  ],
})

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            title: "Contact Yogasar",
            description:
              "Contact Yogasar to ask about timings, batches, and suitability for the online yoga classes in Hindi.",
            path: "/contact",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ])}
      />
      <SharedContentPage
        eyebrow="Contact"
        title="Ask about batches, timings, and whether the classes fit you"
        intro="The contact page should make the enquiry path obvious. For Yogasar, that means making WhatsApp the primary action while still presenting the business details cleanly for trust and crawlability."
        highlights={[
          { label: "Primary contact", value: siteConfig.contact.phoneDisplay },
          { label: "Best use", value: "Batch timings and suitability questions" },
          { label: "Audience", value: "Women across India" },
          { label: "Class language", value: "Hindi" },
        ]}
        sections={[
          {
            title: "What to ask before joining",
            body: [
              "Most people contact Yogasar to ask whether there is a batch timing that fits their day, whether beginners can join, and whether the class format is right for them. This page should state that plainly so visitors know exactly why they are reaching out.",
            ],
            bullets: [
              "Current batch timings",
              "Beginner suitability",
              "Language and class style",
              "How the joining process works",
            ],
          },
          {
            title: "Why a contact page matters for SEO too",
            body: [
              "Search engines use contact and trust pages as business legitimacy signals. A dedicated contact page also reduces the risk that all commercial intent is forced back onto the homepage.",
            ],
          },
        ]}
        faqs={[
          {
            question: "What is the fastest way to contact Yogasar?",
            answer:
              "The site is set up around WhatsApp as the primary way to ask about timings and joining.",
          },
          {
            question: "What should I ask when I contact Yogasar?",
            answer:
              "Ask about timings, beginner suitability, the class format, and whether the classes fit your routine.",
          },
        ]}
        relatedLinks={[
          {
            href: "/pricing",
            title: "Review pricing first",
            description: "See the monthly fee and format before you enquire.",
          },
          {
            href: "/faq",
            title: "Read the FAQ",
            description: "Some practical questions may already be answered there.",
          },
          {
            href: "/about-acharya-sarika-disawal",
            title: "Learn about the teacher",
            description: "Read the dedicated teacher page before you contact Yogasar.",
          },
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        ctaTitle="If you are considering the classes, use WhatsApp to get the missing details."
        ctaDescription="The fastest next step is to ask about the current batches and whether the format matches your needs."
        updatedLabel="11 April 2026"
      />
    </>
  )
}
