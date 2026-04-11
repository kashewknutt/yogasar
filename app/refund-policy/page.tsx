import { LegalPage } from "@/components/yogasar/legal-page"
import { breadcrumbSchema, buildMetadata, graph, webPageSchema } from "@/lib/seo"
import { JsonLd } from "@/components/yogasar/json-ld"

export const metadata = buildMetadata({
  title: "Refund Policy",
  description:
    "Refund policy for Yogasar online yoga classes. Review the current refund position before joining.",
  path: "/refund-policy",
})

export default function RefundPolicyPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            title: "Refund Policy",
            description:
              "Refund policy for Yogasar online yoga classes. Review the current refund position before joining.",
            path: "/refund-policy",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Refund Policy", path: "/refund-policy" },
          ]),
        ])}
      />
      <LegalPage
        title="Refund policy"
        intro="This page states the current refund position for Yogasar and gives visitors a dedicated trust page they can review before joining."
        updatedLabel="11 April 2026"
        sections={[
          {
            title: "Current policy",
            body: [
              "Booked classes are currently non-refundable. Prospective students should confirm batch timing, language, and suitability before joining.",
            ],
          },
          {
            title: "Why confirmation matters before payment",
            body: [
              "Yogasar uses a direct WhatsApp-based joining flow. That means students can ask practical questions in advance and make sure the class format is right for them before confirming their place.",
            ],
          },
        ]}
      />
    </>
  )
}
