import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { JsonLd } from "@/components/yogasar/json-ld"
import { SharedContentPage } from "@/components/yogasar/content-page"
import {
  getRelatedLinks,
  getServicePage,
  servicePages,
} from "@/lib/content"
import {
  buildMetadata,
  breadcrumbSchema,
  faqSchema,
  graph,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getServicePage(slug)

  if (!page) {
    return {}
  }

  return buildMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    keywords: page.keywords,
  })
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const page = getServicePage(slug)

  if (!page) {
    notFound()
  }

  const breadcrumbs =
    page.slug === "online-yoga-classes"
      ? [
          { label: "Home", href: "/" },
          { label: "Online yoga classes" },
        ]
      : [
          { label: "Home", href: "/" },
          { label: "Online yoga classes", href: "/online-yoga-classes" },
          { label: page.title },
        ]

  const breadcrumbGraph =
    page.slug === "online-yoga-classes"
      ? [
          { name: "Home", path: "/" },
          { name: "Online yoga classes", path: page.path },
        ]
      : [
          { name: "Home", path: "/" },
          { name: "Online yoga classes", path: "/online-yoga-classes" },
          { name: page.title, path: page.path },
        ]

  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            title: page.title,
            description: page.description,
            path: page.path,
          }),
          serviceSchema({
            title: page.title,
            description: page.description,
            path: page.path,
          }),
          breadcrumbSchema(breadcrumbGraph),
          faqSchema(page.faqs),
        ])}
      />
      <SharedContentPage
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        highlights={page.highlights}
        quickAnswers={page.quickAnswers}
        sections={page.sections}
        faqs={page.faqs}
        relatedLinks={getRelatedLinks(page)}
        breadcrumbs={breadcrumbs}
        ctaTitle={page.ctaTitle}
        ctaDescription={page.ctaDescription}
        disclaimer={page.disclaimer}
        updatedLabel={page.updatedLabel}
      />
    </>
  )
}
