import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"

type MetadataInput = {
  title: string
  description: string
  path?: string
  keywords?: string[]
  image?: string
  type?: "website" | "article"
  noIndex?: boolean
}

type BreadcrumbItem = {
  name: string
  path: string
}

export function absoluteUrl(path = "/") {
  return path.startsWith("http") ? path : `${siteConfig.url}${path}`
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = siteConfig.socialImage,
  type = "website",
  noIndex = false,
}: MetadataInput): Metadata {
  const canonical = absoluteUrl(path)
  const fullTitle = `${title} | ${siteConfig.name}`

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      type,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  }
}

export function graph(items: Array<Record<string, unknown>>) {
  return {
    "@context": "https://schema.org",
    "@graph": items,
  }
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.contact.phoneLink,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phoneLink,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["Hindi", "English"],
    },
  }
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-IN",
  }
}

export function personSchema() {
  return {
    "@type": "Person",
    name: siteConfig.teacher.name,
    description: siteConfig.teacher.description,
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: siteConfig.teacher.credential,
    },
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  }
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function webPageSchema(input: {
  title: string
  description: string
  path: string
}) {
  return {
    "@type": "WebPage",
    name: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "Thing",
      name: "Online yoga classes in Hindi for women in India",
    },
  }
}

export function serviceSchema(input: {
  title: string
  description: string
  path: string
}) {
  return {
    "@type": "Service",
    name: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    audience: {
      "@type": "Audience",
      audienceType: "Women seeking live yoga classes in Hindi",
    },
    offers: {
      "@type": "Offer",
      price: siteConfig.offer.price,
      priceCurrency: siteConfig.offer.currency,
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/pricing"),
    },
  }
}

export function articleSchema(input: {
  title: string
  description: string
  path: string
  dateModified: string
}) {
  return {
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    dateModified: input.dateModified,
    datePublished: input.dateModified,
    inLanguage: "en-IN",
    author: {
      "@type": "Person",
      name: siteConfig.teacher.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    image: absoluteUrl(siteConfig.socialImage),
  }
}
