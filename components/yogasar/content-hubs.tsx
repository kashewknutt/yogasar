import Link from "next/link"

const featuredPages = [
  {
    href: "/online-yoga-classes",
    title: "Online yoga classes",
    description:
      "Learn about the live class format, who the classes suit, and how women across India can join.",
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
      "A simple guide for women who want to understand the sequence more clearly and practise with confidence.",
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
      "Clear answers about the class format, language, pricing, and joining process.",
  },
]

export function ContentHubs() {
  return (
    <section className="section-wrap pt-6">
      <div className="page-shell">
        <div className="mb-8 max-w-3xl">
          <span className="eyebrow mb-5">Explore Yogsar</span>
          <h2 className="section-title">
            Explore helpful pages about the classes, the teacher, and home yoga practice.
          </h2>
          <p className="section-lead mt-5">
            Whether you want class details, beginner guidance, or simple answers before joining,
            these pages help you understand Yogsar more clearly.
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
