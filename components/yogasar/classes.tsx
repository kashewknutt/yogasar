"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const classFeatures = [
  {
    title: "Flexibility without forcing the body",
    description:
      "Gentle guided movement to ease stiffness, open the joints, and help the body move more comfortably in daily life.",
    image: "/images/class-flexibility.jpg",
    note: "For ladies starting or restarting practice",
  },
  {
    title: "Posture and alignment awareness",
    description:
      "Simple cues in Hindi help you understand how to sit, stand, and move with better balance and control.",
    image: "/images/class-posture.jpg",
    note: "Clear instruction for home practice",
  },
  {
    title: "Breath, steadiness, and calm",
    description:
      "Each class includes breathing-based work that supports focus, relaxation, and a more settled mind.",
    image: "/images/class-breathing.jpg",
    note: "Useful for busy routines across India",
  },
  {
    title: "Strength and everyday confidence",
    description:
      "Build stability and body confidence gradually so the practice feels sustainable instead of overwhelming.",
    image: "/images/class-strength.jpg",
    note: "Live feedback in Hindi",
  },
]

function DesktopCard({
  feature,
  index,
}: {
  feature: (typeof classFeatures)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.55, 1], [1.08, 1.03, 1])
  const imageY = useTransform(scrollYProgress, [0, 1], ["-4%", "6%"])
  const cardY = useTransform(scrollYProgress, [0, 1], [48, -24])

  return (
    <div ref={ref} className="sticky" style={{ top: `calc(var(--header-height) + ${1.25 + index * 0.9}rem)` }}>
      <motion.article
        style={{ y: cardY, zIndex: 10 + index }}
        className="panel grid min-h-[31rem] grid-cols-[0.92fr_1.08fr] items-stretch overflow-hidden bg-[#fffdf8]"
      >
        <div className="flex flex-col justify-between px-7 py-7 lg:px-10 lg:py-9">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#56663c]">
              Focus 0{index + 1}
            </p>
            <h3 className="mt-5 max-w-md font-serif text-[clamp(1.95rem,2.4vw,2.7rem)] leading-[1.06] text-[#221f1a]">
              {feature.title}
            </h3>
            <p className="mt-5 max-w-md text-[1.02rem] leading-8 text-[#5c554b]">{feature.description}</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[auto_1fr] lg:items-end">
            <div className="rounded-[1.25rem] bg-[#384529] px-4 py-4 text-[#fffdf8]">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#d6bc78]">Class note</p>
              <p className="mt-2 max-w-[12ch] text-sm leading-relaxed">{feature.note}</p>
            </div>
            <div className="panel-soft px-4 py-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#56663c]">Format</p>
              <p className="mt-2 text-sm leading-relaxed text-[#4b4339]">
                Live instruction that helps the practice stay calm, clear, and easier to follow from home.
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-full overflow-hidden bg-[#e8dece]">
          <motion.div className="absolute inset-0" style={{ scale: imageScale, y: imageY }}>
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 52vw"
              priority={index < 2}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#221f1a]/18" />
        </div>
      </motion.article>
    </div>
  )
}

function MobileCard({
  feature,
  index,
}: {
  feature: (typeof classFeatures)[number]
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className="panel overflow-hidden bg-[#fffdf8]"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="space-y-4 px-5 py-5">
        <p className="text-[11px] uppercase tracking-[0.24em] text-[#56663c]">Focus 0{index + 1}</p>
        <h3 className="font-serif text-[1.5rem] leading-[1.12] text-[#221f1a]">{feature.title}</h3>
        <p className="text-sm leading-7 text-[#5c554b]">{feature.description}</p>
        <div className="rounded-2xl bg-[#ede4d6] px-4 py-3 text-sm leading-relaxed text-[#4b4339]">{feature.note}</div>
      </div>
    </motion.article>
  )
}

export function Classes() {
  return (
    <section id="classes" className="section-wrap">
      <div className="page-shell">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <span className="eyebrow mb-5">Class focus</span>
          <h2 className="section-title max-w-3xl lg:max-w-4xl">
            What the online classes focus on.
          </h2>
          <p className="section-lead mt-5">
            Each class builds mobility, steadiness, breathing awareness, and confidence in a way
            that feels approachable for regular home practice.
          </p>
        </div>

        <div className="grid gap-5 lg:hidden">
          {classFeatures.map((feature, index) => (
            <MobileCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="relative space-y-7 pb-32">
            {classFeatures.map((feature, index) => (
              <DesktopCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
