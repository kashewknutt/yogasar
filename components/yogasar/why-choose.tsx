import { IndianRupee, Languages, MapPinned, Users } from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Designed for women",
    description: "A ladies-only environment that feels more comfortable and focused.",
  },
  {
    icon: Languages,
    title: "Taught in Hindi",
    description: "Simple explanation and correction in a language students can follow easily.",
  },
  {
    icon: MapPinned,
    title: "Accessible across India",
    description: "Join live from home whether you are in a large city or a smaller town anywhere in the country.",
  },
  {
    icon: IndianRupee,
    title: "Consistent and affordable",
    description: "A straightforward monthly fee that makes regular practice easier to maintain.",
  },
]

export function WhyChoose() {
  return (
    <section className="section-wrap pb-6">
      <div className="page-shell">
        <div className="section-frame px-5 py-7 sm:px-8 sm:py-8 lg:px-10">
          <div className="mb-8 max-w-3xl">
            <span className="eyebrow mb-5">Why Yogsar</span>
            <h2 className="section-title max-w-3xl lg:max-w-4xl">
              Why these classes work well for regular home practice.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason) => (
              <article key={reason.title} className="panel-soft h-full px-5 py-5">
                <reason.icon className="h-8 w-8 text-[#56663c]" />
                <h3 className="mt-5 font-serif text-[1.5rem] leading-[1.12] text-[#221f1a]">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5c554b]">{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
