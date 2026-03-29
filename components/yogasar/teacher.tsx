import { Award, GraduationCap, Languages } from "lucide-react"

const credentials = [
  "Officially trained yoga teacher",
  "Masters in Yog",
  "Guidance in Hindi for ladies-only classes",
]

const icons = [Award, GraduationCap, Languages]

export function Teacher() {
  return (
    <section id="teacher" className="section-wrap pt-6">
      <div className="page-shell">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
          <div className="tone-dark rounded-[2rem] px-6 py-7 sm:px-7 sm:py-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#d6bc78]">Instructor</p>
            <h2 className="mt-5 max-w-lg font-serif text-[clamp(2rem,3.5vw,3.2rem)] leading-[1.06] text-[#fffdf8]">
              Acharya Sarika Disawal
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#f5f0e7]/78 sm:text-base">
              A calm, structured approach to yoga that is approachable for ladies who want regular
              live classes from home.
            </p>
          </div>

          <div className="panel px-6 py-7 sm:px-7 sm:py-8">
            <p className="text-base leading-8 text-[#4b4339] sm:text-lg">
              Acharya Sarika Disawal is an officially trained yoga teacher with a Masters in Yog.
              Her classes focus on clarity, consistency, and making yoga easier to understand in
              Hindi for women joining from home across India.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {credentials.map((credential, index) => {
                const Icon = icons[index]
                return (
                  <div key={credential} className="panel-soft px-4 py-4">
                    <Icon className="h-7 w-7 text-[#56663c]" />
                    <p className="mt-4 text-sm leading-7 text-[#4b4339]">{credential}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
