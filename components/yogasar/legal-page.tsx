import Link from "next/link"
import type { ContentSection } from "@/components/yogasar/content-page"

type LegalPageProps = {
  title: string
  intro: string
  updatedLabel: string
  sections: ContentSection[]
}

export function LegalPage({
  title,
  intro,
  updatedLabel,
  sections,
}: LegalPageProps) {
  return (
    <main className="pb-24 md:pb-0">
      <section className="relative pt-[calc(var(--header-height)+2rem)]">
        <div className="page-shell">
          <div className="section-frame px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <nav aria-label="Breadcrumb" className="text-sm text-[#5c554b]">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-[#56663c]">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-[#221f1a]">{title}</li>
              </ol>
            </nav>

            <div className="mt-6 max-w-4xl">
              <span className="eyebrow mb-5">Legal and trust</span>
              <h1 className="font-serif text-[clamp(2.25rem,4.8vw,4rem)] leading-[1.03] text-[#221f1a]">
                {title}
              </h1>
              <p className="section-lead mt-5 max-w-3xl">{intro}</p>
              <p className="mt-4 text-sm text-[#5c554b]">Last updated: {updatedLabel}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap pt-6">
        <div className="page-shell">
          <div className="grid gap-5">
            {sections.map((section) => (
              <article key={section.title} className="panel px-6 py-6 sm:px-7 sm:py-7">
                <h2 className="font-serif text-[1.7rem] leading-[1.08] text-[#221f1a]">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-[#4b4339] sm:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-5 grid gap-3 text-sm leading-7 text-[#312b24] sm:text-base">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="rounded-[1.15rem] border border-[#d6cab8]/50 bg-[#f8f3eb] px-4 py-3"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
