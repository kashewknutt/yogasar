import { LegalPage } from "@/components/yogasar/legal-page"
import { JsonLd } from "@/components/yogasar/json-ld"
import { breadcrumbSchema, buildMetadata, graph, webPageSchema } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Yogsar, covering how enquiry information is handled for online yoga class communication.",
  path: "/privacy-policy",
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            title: "Privacy Policy",
            description:
              "Privacy policy for Yogsar, covering how enquiry information is handled for online yoga class communication.",
            path: "/privacy-policy",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy-policy" },
          ]),
        ])}
      />
      <LegalPage
        title="Privacy policy"
        intro="This page explains how Yogsar handles basic enquiry and class communication information."
        updatedLabel="11 April 2026"
        sections={[
          {
            title: "Information collected",
            body: [
              "When someone contacts Yogsar, the information typically shared may include name, phone number, and enquiry details needed to discuss class timings, suitability, and joining.",
            ],
          },
          {
            title: "How the information is used",
            body: [
              "The information is used to reply to enquiries, confirm batches, and communicate about the online classes. It should not be used for unrelated purposes.",
            ],
          },
          {
            title: "Questions about privacy",
            body: [
              "If you have questions about how your information is being handled, contact Yogsar before sharing anything beyond what is needed to discuss the classes.",
            ],
          },
        ]}
      />
    </>
  )
}
