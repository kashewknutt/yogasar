import { LegalPage } from "@/components/yogasar/legal-page"
import { JsonLd } from "@/components/yogasar/json-ld"
import { breadcrumbSchema, buildMetadata, graph, webPageSchema } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Cancellation Policy",
  description:
    "Cancellation policy for Yogasar online yoga classes and class enquiries.",
  path: "/cancellation-policy",
})

export default function CancellationPolicyPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            title: "Cancellation Policy",
            description:
              "Cancellation policy for Yogasar online yoga classes and class enquiries.",
            path: "/cancellation-policy",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Cancellation Policy", path: "/cancellation-policy" },
          ]),
        ])}
      />
      <LegalPage
        title="Cancellation policy"
        intro="This page clarifies how cancellations should be handled in relation to batch confirmation and joining discussions."
        updatedLabel="11 April 2026"
        sections={[
          {
            title: "Before joining",
            body: [
              "Prospective students should ask all relevant questions before confirming their batch so there is clarity around timing, language, and class format.",
            ],
          },
          {
            title: "After confirmation",
            body: [
              "Any cancellation question after confirmation should be discussed directly through the contact channel so the situation is understood correctly.",
            ],
          },
        ]}
      />
    </>
  )
}
