import Link from "next/link"
import { blogPosts } from "@/lib/content"
import { buildMetadata, breadcrumbSchema, graph, webPageSchema } from "@/lib/seo"
import { JsonLd } from "@/components/yogasar/json-ld"

export const metadata = buildMetadata({
  title: "Yoga Blog for Beginners, Women, and Home Practice",
  description:
    "Explore Yogsar articles on beginner yoga, yoga at home, pranayama, morning routines, and women-focused yoga topics.",
  path: "/blog",
  keywords: [
    "yoga blog",
    "yoga for beginners",
    "yoga at home",
    "pranayama benefits",
    "morning yoga for beginners",
  ],
})

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            title: "Yoga Blog for Beginners, Women, and Home Practice",
            description:
              "Explore Yogsar articles on beginner yoga, yoga at home, pranayama, morning routines, and women-focused yoga topics.",
            path: "/blog",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ])}
      />

      <main className="pb-24 md:pb-0">
        <section className="relative pt-[calc(var(--header-height)+2rem)]">
          <div className="page-shell">
            <div className="section-frame px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
              <nav aria-label="Breadcrumb" className="text-sm text-[#5c554b]">
                <ol className="flex items-center gap-2">
                  <li>
                    <Link href="/" className="transition-colors hover:text-[#56663c]">
                      Home
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-[#221f1a]">Blog</li>
                </ol>
              </nav>

              <div className="mt-6 max-w-4xl">
                <span className="eyebrow mb-5">Yoga knowledge hub</span>
              <h1 className="font-serif text-[clamp(2.3rem,4.8vw,4.3rem)] leading-[1.02] text-[#221f1a]">
                  Simple reading for beginners, home practice, breathwork, and women-focused yoga.
              </h1>
              <p className="section-lead mt-5 max-w-3xl">
                  These pages are here to help you understand the classes, build a steadier routine,
                  and learn a little more before you decide what suits you best.
              </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap pt-6">
          <div className="page-shell">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={post.path}
                  className="panel px-5 py-5 transition-transform hover:-translate-y-0.5"
                >
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#56663c]">
                    {post.eyebrow}
                  </p>
                  <h2 className="mt-3 font-serif text-[1.45rem] leading-[1.1] text-[#221f1a]">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#4b4339]">{post.description}</p>
                  <p className="mt-4 text-sm font-medium text-[#56663c]">Read article</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
