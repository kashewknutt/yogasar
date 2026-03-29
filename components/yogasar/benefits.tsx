const benefitGroups = [
  {
    title: "Body",
    points: ["Better flexibility", "Less stiffness", "Improved posture", "More ease in daily movement"],
  },
  {
    title: "Mind",
    points: ["Calmer breathing", "Better focus", "A steadier mood", "Less mental restlessness"],
  },
  {
    title: "Routine",
    points: ["Consistent self-care", "Regular guided practice", "Confidence to continue", "A structure you can maintain"],
  },
]

export function Benefits() {
  return (
    <section className="section-wrap">
      <div className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
            <span className="eyebrow mb-5">Regular practice</span>
            <h2 className="section-title max-w-xl lg:max-w-2xl">
              What regular practice can help you improve.
            </h2>
            <p className="section-lead mt-5 max-w-md">
              With steady practice, the benefits usually show up in how the body feels, how the mind
              settles, and how easy it becomes to stay consistent.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {benefitGroups.map((group) => (
              <article key={group.title} className="panel flex h-full flex-col px-5 py-6 sm:px-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#56663c]">{group.title}</p>
                <div className="fine-rule my-4" />
                <ul className="space-y-3">
                  {group.points.map((point) => (
                    <li key={point} className="text-sm leading-7 text-[#4b4339] sm:text-[0.98rem]">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
