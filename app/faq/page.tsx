import { JsonLd } from "@/components/yogasar/json-ld"
import { SharedContentPage } from "@/components/yogasar/content-page"
import { breadcrumbSchema, buildMetadata, faqSchema, graph, webPageSchema } from "@/lib/seo"
import { coreFaqs } from "@/lib/site"

export const metadata = buildMetadata({
  title: "FAQ for Online Yoga Classes in Hindi",
  description:
    "Answers to common questions about Yogasar's online yoga classes in Hindi for women across India.",
  path: "/faq",
  keywords: [
    "online yoga classes faq",
    "hindi yoga classes faq",
    "yoga classes for ladies questions",
  ],
})

export default function FAQPage() {
  const faqs = [
    ...coreFaqs,
    {
      question: "Do I need prior yoga experience?",
      answer:
        "No. The classes are positioned to be approachable for beginners and women returning after a break.",
    },
    {
      question: "How do I join?",
      answer:
        "The site uses a simple WhatsApp-based flow so you can ask about timings and confirm a suitable batch before joining.",
    },
  ]

  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            title: "FAQ for Online Yoga Classes in Hindi",
            description:
              "Answers to common questions about Yogasar's online yoga classes in Hindi for women across India.",
            path: "/faq",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqSchema(faqs),
        ])}
      />
      <SharedContentPage
        eyebrow="Frequently asked questions"
        title="Clear answers before you join a class"
        intro="This page brings together the most common practical questions people ask before joining the classes."
        highlights={[
          { label: "Audience", value: "Women and beginners" },
          { label: "Language", value: "Hindi" },
          { label: "Format", value: "Live online classes" },
          { label: "Joining path", value: "WhatsApp enquiry" },
        ]}
        sections={[
          {
            title: "Why a dedicated FAQ page matters",
            body: [
              "Important class questions deserve a simple page of their own so you can review the details without searching through the whole site.",
            ],
          },
          {
            title: "What the FAQ should answer directly",
            body: [
              "The strongest FAQ questions are the ones people genuinely ask before they spend time or money. That means language, who the classes are for, pricing, class frequency, and how the joining process works.",
            ],
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          {
            href: "/pricing",
            title: "See pricing",
            description: "Review the current monthly fee and class format.",
          },
          {
            href: "/online-yoga-classes-in-hindi",
            title: "Read about the Hindi class format",
            description: "Learn more about how the classes are taught in Hindi.",
          },
          {
            href: "/contact",
            title: "Ask your own question",
            description: "Reach out if you need help deciding whether the classes fit your routine.",
          },
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
        ctaTitle="If your question is not listed here, ask directly before joining."
        ctaDescription="A quick enquiry is the fastest way to clarify suitability, timings, and next steps."
        updatedLabel="11 April 2026"
      />
    </>
  )
}
