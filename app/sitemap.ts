import type { MetadataRoute } from "next"
import { blogPosts, servicePages } from "@/lib/content"
import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "/",
    "/blog",
    "/about-acharya-sarika-disawal",
    "/pricing",
    "/faq",
    "/contact",
    "/refund-policy",
    "/privacy-policy",
    "/terms-and-conditions",
    "/cancellation-policy",
    "/disclaimer",
  ]

  const pages = [
    ...staticPages,
    ...servicePages.map((page) => page.path),
    ...blogPosts.map((post) => post.path),
  ]

  return pages.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date("2026-04-11"),
    changeFrequency: path.startsWith("/blog/") ? "monthly" : "weekly",
    priority: path === "/" ? 1 : 0.7,
  }))
}
