const audience = [
  "Ladies who prefer learning yoga in Hindi",
  "Women looking for live classes from home",
  "Beginners who want clear and patient guidance",
  "Students anywhere in India who need an online format",
  "Women returning to yoga after a long break",
  "Busy routines that need a simpler wellness structure",
]

export function WhoItsFor() {
  return (
    <section className="section-wrap pt-6">
      <div className="page-shell">
        <div className="grid gap-7 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <span className="eyebrow mb-5">Who it is for</span>
            <h2 className="section-title max-w-2xl lg:max-w-3xl">
              A strong fit for women who want yoga to feel manageable.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {audience.map((item) => (
              <div key={item} className="panel-soft px-5 py-4 text-sm leading-7 text-[#4b4339] sm:text-base">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
