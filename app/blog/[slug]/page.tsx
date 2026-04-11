import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { JsonLd } from "@/components/yogasar/json-ld"
import { SharedContentPage } from "@/components/yogasar/content-page"
import { blogPosts, getBlogPost, getRelatedLinks } from "@/lib/content"
import {
  articleSchema,
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  graph,
  webPageSchema,
} from "@/lib/seo"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {}
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: post.path,
    keywords: post.keywords,
    type: "article",
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            title: post.title,
            description: post.description,
            path: post.path,
          }),
          articleSchema({
            title: post.title,
            description: post.description,
            path: post.path,
            dateModified: post.updatedAt,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: post.path },
          ]),
          faqSchema(post.faqs),
        ])}
      />
      <SharedContentPage
        eyebrow={post.eyebrow}
        title={post.title}
        intro={post.intro}
        highlights={post.highlights}
        quickAnswers={post.quickAnswers}
        sections={post.sections}
        faqs={post.faqs}
        relatedLinks={getRelatedLinks(post)}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
        ctaTitle={post.ctaTitle}
        ctaDescription={post.ctaDescription}
        disclaimer={post.disclaimer}
        updatedLabel={post.updatedLabel}
      />
    </>
  )
}
