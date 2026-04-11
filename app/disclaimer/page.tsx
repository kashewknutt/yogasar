import { LegalPage } from "@/components/yogasar/legal-page"
import { JsonLd } from "@/components/yogasar/json-ld"
import { breadcrumbSchema, buildMetadata, graph, webPageSchema } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "General site and wellness disclaimer for Yogasar's online yoga classes and educational content.",
  path: "/disclaimer",
})

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            title: "Disclaimer",
            description:
              "General site and wellness disclaimer for Yogasar's online yoga classes and educational content.",
            path: "/disclaimer",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Disclaimer", path: "/disclaimer" },
          ]),
        ])}
      />
      <LegalPage
        title="Disclaimer"
        intro="This page clarifies how the educational and service content on Yogasar should be understood."
        updatedLabel="11 April 2026"
        sections={[
          {
            title: "General information only",
            body: [
              "The content on this site is provided for general information about Yogasar's classes and related yoga topics. It should not be treated as medical advice, diagnosis, or treatment.",
            ],
          },
          {
            title: "Personal responsibility and professional advice",
            body: [
              "Anyone with pain, injury, pregnancy-related concerns, or other health questions should consult a qualified healthcare professional before starting or changing exercise.",
            ],
          },
          {
            title: "Why this matters for the site",
            body: [
              "Some pages discuss supportive topics such as stress, weight loss, or discomfort. Those pages are intended to stay general and should not be read as cure claims or guarantees.",
            ],
          },
        ]}
      />
    </>
  )
}
