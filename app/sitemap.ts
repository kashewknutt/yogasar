import type { MetadataRoute } from "next"
import { blogPosts, servicePages } from "@/lib/content"
import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "/", lastModified: "2026-04-12" },
    { path: "/blog", lastModified: "2026-04-12" },
    { path: "/about-acharya-sarika-disawal", lastModified: "2026-04-11" },
    { path: "/pricing", lastModified: "2026-04-11" },
    { path: "/faq", lastModified: "2026-04-11" },
    { path: "/contact", lastModified: "2026-04-11" },
    { path: "/refund-policy", lastModified: "2026-04-11" },
    { path: "/privacy-policy", lastModified: "2026-04-11" },
    { path: "/terms-and-conditions", lastModified: "2026-04-11" },
    { path: "/cancellation-policy", lastModified: "2026-04-11" },
    { path: "/disclaimer", lastModified: "2026-04-11" },
  ]

  const pages = [
    ...staticPages,
    ...servicePages.map((page) => ({
      path: page.path,
      lastModified: page.updatedAt,
    })),
    ...blogPosts.map((post) => ({
      path: post.path,
      lastModified: post.updatedAt,
    })),
  ]

  return pages.map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified: new Date(page.lastModified),
    changeFrequency: page.path.startsWith("/blog/") ? "monthly" : "weekly",
    priority: page.path === "/" ? 1 : 0.7,
  }))
}
