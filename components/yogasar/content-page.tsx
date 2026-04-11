import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { enquiryWhatsappUrl, joinWhatsappUrl, timingsWhatsappUrl } from "@/lib/site"

export type Highlight = {
  label: string
  value: string
}

export type QuickAnswer = {
  question: string
  answer: string
}

export type ContentSection = {
  title: string
  body: string[]
  bullets?: string[]
  links?: Array<{
    href: string
    label: string
  }>
}

export type RelatedLink = {
  href: string
  title: string
  description: string
}

export type FaqItem = {
  question: string
  answer: string
}

type BreadcrumbItem = {
  label: string
  href?: string
}

type SharedPageProps = {
  eyebrow: string
  title: string
  intro: string
  highlights: Highlight[]
  quickAnswers?: QuickAnswer[]
  sections: ContentSection[]
  faqs?: FaqItem[]
  relatedLinks?: RelatedLink[]
  breadcrumbs: BreadcrumbItem[]
  ctaTitle: string
  ctaDescription: string
  disclaimer?: string
  updatedLabel?: string
}

function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-[#5c554b]">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-[#56663c]">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#221f1a]">{item.label}</span>
            )}
            {index < items.length - 1 ? <span>/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}

function QuickAnswers({ items }: { items: QuickAnswer[] }) {
  if (!items.length) {
    return null
  }

  return (
    <section className="section-wrap pt-6">
      <div className="page-shell">
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.question} className="panel-soft px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#56663c]">Quick answer</p>
              <h2 className="mt-3 font-serif text-[1.6rem] leading-[1.1] text-[#221f1a]">
                {item.question}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#4b4339] sm:text-base">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Highlights({ items }: { items: Highlight[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="panel-soft px-4 py-4">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#56663c]">{item.label}</p>
          <p className="mt-3 text-base leading-7 text-[#221f1a]">{item.value}</p>
        </div>
      ))}
    </div>
  )
}

function Sections({ items }: { items: ContentSection[] }) {
  return (
    <div className="grid gap-6">
      {items.map((section) => (
        <article key={section.title} className="panel px-6 py-6 sm:px-7 sm:py-7">
          <h2 className="font-serif text-[1.9rem] leading-[1.08] text-[#221f1a]">
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
          {section.links?.length ? (
            <div className="mt-5 flex flex-wrap gap-3">
              {section.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-[#56663c]/20 bg-[#f8f3eb] px-4 py-2 text-sm font-medium text-[#384529] transition-colors hover:bg-[#ede4d6]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  )
}

function FaqList({ items }: { items: FaqItem[] }) {
  if (!items.length) {
    return null
  }

  return (
    <section className="section-wrap pt-6">
      <div className="page-shell">
        <div className="mb-8 max-w-3xl">
          <span className="eyebrow mb-5">FAQ</span>
          <h2 className="section-title">Questions people usually ask before joining.</h2>
        </div>
        <div className="grid gap-4">
          {items.map((item) => (
            <article key={item.question} className="panel px-5 py-5 sm:px-6">
              <h3 className="font-serif text-[1.35rem] leading-[1.12] text-[#221f1a]">
                {item.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#4b4339] sm:text-base">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function RelatedGrid({ items }: { items: RelatedLink[] }) {
  if (!items.length) {
    return null
  }

  return (
    <section className="section-wrap pt-6">
      <div className="page-shell">
        <div className="mb-8 max-w-3xl">
          <span className="eyebrow mb-5">Explore next</span>
          <h2 className="section-title">Related pages that build the topic depth of the site.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="panel px-5 py-5 transition-transform hover:-translate-y-0.5">
              <h3 className="font-serif text-[1.45rem] leading-[1.1] text-[#221f1a]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#4b4339]">{item.description}</p>
              <p className="mt-4 text-sm font-medium text-[#56663c]">Read this page</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function InlineCta({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <section className="section-wrap pt-6">
      <div className="page-shell">
        <div className="tone-dark rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.06] text-[#fffdf8]">
            {title}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#f5f0e7]/80 sm:text-base">
            {description}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-[#d6bc78] px-7 text-[#221f1a] hover:bg-[#e3cc94]"
            >
              <a href={joinWhatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp to join
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-[#f5f0e7]/28 bg-transparent px-7 text-white hover:bg-white/10"
            >
              <a href={timingsWhatsappUrl} target="_blank" rel="noopener noreferrer">
                Ask about timings
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SharedContentPage({
  eyebrow,
  title,
  intro,
  highlights,
  quickAnswers = [],
  sections,
  faqs = [],
  relatedLinks = [],
  breadcrumbs,
  ctaTitle,
  ctaDescription,
  disclaimer,
  updatedLabel,
}: SharedPageProps) {
  return (
    <main className="pb-24 md:pb-0">
      <section className="relative pt-[calc(var(--header-height)+2rem)]">
        <div className="page-shell">
          <div className="section-frame px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-6 max-w-4xl">
              <span className="eyebrow mb-5">{eyebrow}</span>
              <h1 className="font-serif text-[clamp(2.3rem,4.8vw,4.3rem)] leading-[1.02] text-[#221f1a]">
                {title}
              </h1>
              <p className="section-lead mt-5 max-w-3xl">{intro}</p>
              {updatedLabel ? (
                <p className="mt-4 text-sm text-[#5c554b]">Last updated: {updatedLabel}</p>
              ) : null}
            </div>

            <div className="mt-8">
              <Highlights items={highlights} />
            </div>

            {disclaimer ? (
              <div className="mt-6 rounded-[1.5rem] border border-[#d6bc78]/50 bg-[#fff7e6] px-5 py-4 text-sm leading-7 text-[#4b4339] sm:text-base">
                {disclaimer}
              </div>
            ) : null}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-[#56663c] px-7 text-white hover:bg-[#384529]"
              >
                <a href={joinWhatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Join on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-[#56663c]/20 bg-transparent px-7 text-[#384529] hover:bg-[#ede4d6]"
              >
                <a href={enquiryWhatsappUrl} target="_blank" rel="noopener noreferrer">
                  Ask a question
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <QuickAnswers items={quickAnswers} />

      <section className="section-wrap pt-6">
        <div className="page-shell">
          <Sections items={sections} />
        </div>
      </section>

      <FaqList items={faqs} />
      <RelatedGrid items={relatedLinks} />
      <InlineCta title={ctaTitle} description={ctaDescription} />
    </main>
  )
}
