import { LegalPage } from "@/components/yogasar/legal-page"
import { JsonLd } from "@/components/yogasar/json-ld"
import { breadcrumbSchema, buildMetadata, graph, webPageSchema } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Terms and Conditions",
  description:
    "Terms and conditions for Yogasar's online yoga classes in Hindi for women.",
  path: "/terms-and-conditions",
})

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            title: "Terms and Conditions",
            description:
              "Terms and conditions for Yogasar's online yoga classes in Hindi for women.",
            path: "/terms-and-conditions",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Terms and Conditions", path: "/terms-and-conditions" },
          ]),
        ])}
      />
      <LegalPage
        title="Terms and conditions"
        intro="These terms set the basic expectations for accessing and participating in Yogasar's online class offer."
        updatedLabel="11 April 2026"
        sections={[
          {
            title: "Class access and communication",
            body: [
              "Class details, timings, and joining information are communicated directly through the enquiry process. Students should confirm all practical details before joining.",
            ],
          },
          {
            title: "Student responsibility",
            body: [
              "Students are responsible for sharing accurate information when discussing suitability and for deciding whether the online class format matches their needs.",
            ],
          },
          {
            title: "Changes and updates",
            body: [
              "Yogasar may update class details, page content, or policies over time. The latest version shown on the site should be treated as the current reference point.",
            ],
          },
        ]}
      />
    </>
  )
}
