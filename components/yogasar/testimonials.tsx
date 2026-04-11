export function Testimonials() {
  return (
    <section id="testimonials" className="section-wrap pt-6">
      <div className="page-shell">
        <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <span className="eyebrow mb-5">Student feedback</span>
            <h2 className="section-title max-w-xl lg:max-w-2xl">
              What students appreciate most.
            </h2>
          </div>

          <article className="panel px-6 py-6 lg:ml-10">
            <div className="space-y-4 text-base leading-8 text-[#312b24] sm:text-lg">
              <p>
                &ldquo;I had a wonderful experience learning yoga here. The teacher is
                extremely knowledgeable, patient, and attentive to each
                student&apos;s needs. Every session is well-structured and
                balanced, focusing not just on physical postures but also on
                breathing techniques and mental relaxation.&rdquo;
              </p>
              <p>
                &ldquo;I&apos;ve noticed a significant improvement in my flexibility
                and strength since joining. I highly recommend Acharyaa Sarika
                Disawal yoga classes to anyone looking to improve their health
                and find inner peace.&rdquo;
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <p className="font-serif text-2xl text-[#221f1a]">Siddhi Shah</p>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#56663c]">
                Student
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
