import Link from "next/link"

const featuredPages = [
  {
    href: "/online-yoga-classes",
    title: "Online yoga classes",
    description:
      "The main service hub for ladies-only live classes in Hindi, with class format, who it suits, and next steps.",
  },
  {
    href: "/online-yoga-classes-in-hindi",
    title: "Yoga classes in Hindi",
    description:
      "A dedicated page for women who specifically want clear Hindi instruction instead of generic English-first classes.",
  },
  {
    href: "/beginner-yoga-classes-online",
    title: "Beginner yoga classes online",
    description:
      "Built for first-time learners and women returning after a long break from regular practice.",
  },
  {
    href: "/blog/surya-namaskar-steps",
    title: "Surya Namaskar steps",
    description:
      "Educational content for one of the highest-demand yoga searches, linked back to guided class support.",
  },
  {
    href: "/blog/yoga-for-beginners-at-home",
    title: "Yoga for beginners at home",
    description:
      "An entry-level guide for women looking to start a steady practice from home without overcomplicating it.",
  },
  {
    href: "/faq",
    title: "Common questions",
    description:
      "A crawlable FAQ page that answers the class format, language, pricing, and joining process directly.",
  },
]

export function ContentHubs() {
  return (
    <section className="section-wrap pt-6">
      <div className="page-shell">
        <div className="mb-8 max-w-3xl">
          <span className="eyebrow mb-5">Explore Yogasar</span>
          <h2 className="section-title">
            Crawlable pages that turn the site from a landing page into a real content hub.
          </h2>
          <p className="section-lead mt-5">
            These pages are built around real search intent in India and still stay anchored to the
            actual offer: live online yoga classes in Hindi for women.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="panel px-5 py-5 transition-transform hover:-translate-y-0.5"
            >
              <h3 className="font-serif text-[1.45rem] leading-[1.1] text-[#221f1a]">{page.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#4b4339]">{page.description}</p>
              <p className="mt-4 text-sm font-medium text-[#56663c]">Open page</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
