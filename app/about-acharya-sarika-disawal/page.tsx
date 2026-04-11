import { JsonLd } from "@/components/yogasar/json-ld"
import { SharedContentPage } from "@/components/yogasar/content-page"
import {
  breadcrumbSchema,
  buildMetadata,
  graph,
  personSchema,
  webPageSchema,
} from "@/lib/seo"
import { siteConfig } from "@/lib/site"

export const metadata = buildMetadata({
  title: "About Acharya Sarika Disawal",
  description:
    "Learn about Acharya Sarika Disawal, the teacher behind Yogasar's online yoga classes in Hindi for women across India.",
  path: "/about-acharya-sarika-disawal",
  keywords: [
    "Acharya Sarika Disawal",
    "yoga teacher in hindi",
    "online yoga teacher for women",
  ],
})

export default function AboutTeacherPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            title: "About Acharya Sarika Disawal",
            description:
              "Learn about Acharya Sarika Disawal, the teacher behind Yogasar's online yoga classes in Hindi for women across India.",
            path: "/about-acharya-sarika-disawal",
          }),
          personSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Acharya Sarika Disawal", path: "/about-acharya-sarika-disawal" },
          ]),
        ])}
      />
      <SharedContentPage
        eyebrow="About the teacher"
        title="Meet Acharya Sarika Disawal"
        intro="This page exists to strengthen trust. It gives search engines and prospective students a clear, dedicated profile for the teacher behind the classes instead of leaving that information scattered across the homepage."
        highlights={[
          { label: "Teacher", value: siteConfig.teacher.name },
          { label: "Credential", value: siteConfig.teacher.credential },
          { label: "Special focus", value: "Hindi guidance for women" },
          { label: "Teaching mode", value: "Live online classes" },
        ]}
        sections={[
          {
            title: "A teacher page should show more than a short blurb",
            body: [
              "A dedicated teacher page is one of the strongest trust additions for Yogasar. It gives users and search engines one clear place to understand who teaches the classes, what her background is, and why the class style is distinct.",
              "The page should stay specific and factual. Overstatement weakens trust. Clarity strengthens it.",
            ],
          },
          {
            title: "What students are actually buying when they join",
            body: [
              "Students are not only buying access to yoga sessions. They are buying the confidence that the classes will be explained clearly, paced patiently, and designed for women learning from home. That is why the teacher page matters commercially as well as reputationally.",
            ],
            bullets: [
              "A clear and steady teaching style",
              "Hindi guidance that reduces friction for learners",
              "A women-focused class environment",
              "A practical routine instead of generic wellness noise",
            ],
          },
          {
            title: "How this page should support the rest of the site",
            body: [
              "The teacher page should link out to the main online class page, pricing page, FAQ page, and contact page. Those internal links make the trust signal useful rather than isolated.",
            ],
          },
        ]}
        faqs={[
          {
            question: "Who teaches the classes at Yogasar?",
            answer: "The classes are taught by Acharya Sarika Disawal.",
          },
          {
            question: "What qualification is mentioned on the site?",
            answer: "The site states that Acharya Sarika Disawal has a Masters in Yog.",
          },
          {
            question: "Why have a separate teacher page?",
            answer:
              "Because trust, authorship, and teacher identity are important both for users and for search visibility.",
          },
        ]}
        relatedLinks={[
          {
            href: "/online-yoga-classes",
            title: "Explore online yoga classes",
            description: "See the full service hub for class format, language, and who the offer suits.",
          },
          {
            href: "/pricing",
            title: "View pricing",
            description: "Check the current monthly plan and how batch enquiries work.",
          },
          {
            href: "/contact",
            title: "Contact Yogasar",
            description: "Ask questions about timings, suitability, and the joining process.",
          },
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Acharya Sarika Disawal" },
        ]}
        ctaTitle="If the teaching style matters to you, ask about the class format directly."
        ctaDescription="A short WhatsApp enquiry can clarify timings, beginner suitability, and how the Hindi guidance works."
        updatedLabel="11 April 2026"
      />
    </>
  )
}
