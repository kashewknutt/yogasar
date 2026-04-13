import { ContentHubs } from "@/components/yogasar/content-hubs"
import { Hero } from "@/components/yogasar/hero"
import { WhyChoose } from "@/components/yogasar/why-choose"
import { About } from "@/components/yogasar/about"
import { Teacher } from "@/components/yogasar/teacher"
import { Classes } from "@/components/yogasar/classes"
import { Pricing } from "@/components/yogasar/pricing"
import { Benefits } from "@/components/yogasar/benefits"
import { WhoItsFor } from "@/components/yogasar/who-its-for"
import { HowItWorks } from "@/components/yogasar/how-it-works"
import { Testimonials } from "@/components/yogasar/testimonials"
import { CtaBand } from "@/components/yogasar/cta-band"
import { FAQ } from "@/components/yogasar/faq"
import { JsonLd } from "@/components/yogasar/json-ld"
import { buildMetadata, breadcrumbSchema, faqSchema, graph, serviceSchema, webPageSchema } from "@/lib/seo"
import { coreFaqs } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Online Yoga Classes for Ladies in Hindi",
  description:
    "Join ladies-only online yoga classes in Hindi with Acharya Sarika Disawal. Live classes for women across India, 5 days a week, from the comfort of home.",
  path: "/",
  keywords: [
    "online yoga classes for ladies",
    "online yoga classes in hindi",
    "online yoga classes for women in india",
    "live yoga classes in hindi",
    "yoga classes at home for women",
  ],
})

export default function YogsarPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            title: "Online Yoga Classes for Ladies in Hindi",
            description:
              "Join ladies-only online yoga classes in Hindi with Acharya Sarika Disawal. Live classes for women across India, 5 days a week, from the comfort of home.",
            path: "/",
          }),
          serviceSchema({
            title: "Online Yoga Classes for Ladies in Hindi",
            description:
              "Ladies-only live online yoga classes in Hindi for women across India.",
            path: "/",
          }),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(coreFaqs),
        ])}
      />
      <main className="pb-24 md:pb-0">
        <Hero />
        <WhyChoose />
        <About />
        <Teacher />
        <Classes />
        <Benefits />
        <Pricing />
        <WhoItsFor />
        <HowItWorks />
        <Testimonials />
        <ContentHubs />
        <CtaBand />
        <FAQ />
      </main>
    </>
  )
}
