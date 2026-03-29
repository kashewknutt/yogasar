"use client"
// v2: Parallax scroll cards with sticky stacking effect
import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const classFeatures = [
  {
    title: "Stretching & Flexibility",
    description: "Improve mobility and reduce everyday stiffness through guided movement.",
    image: "/images/class-flexibility.jpg",
  },
  {
    title: "Posture & Body Awareness",
    description: "Build better alignment and movement habits for daily comfort.",
    image: "/images/class-posture.jpg",
  },
  {
    title: "Breathing & Calmness",
    description: "Simple breathing techniques to help you feel more centered and relaxed.",
    image: "/images/class-breathing.jpg",
  },
  {
    title: "Strength & Balance",
    description: "Develop stability, body control, and a stronger foundation over time.",
    image: "/images/class-strength.jpg",
  },
]

function ParallaxCard({ 
  feature, 
  index 
}: { 
  feature: typeof classFeatures[0]
  index: number 
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })
  
  // Image moves slower than card (parallax effect)
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1])
  
  return (
    <div 
      ref={cardRef}
      className="sticky"
      style={{ 
        top: `${80 + index * 20}px`,
        zIndex: index + 1,
      }}
    >
      <motion.div 
        className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#E5DDD0]/40 bg-white/90 backdrop-blur-sm"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ 
          duration: 0.7, 
          ease: [0.22, 1, 0.36, 1],
          delay: index * 0.05 
        }}
      >
        {/* Parallax Image Container */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <motion.div 
            className="absolute inset-0 w-full h-[120%]"
            style={{ 
              y: imageY,
              scale: imageScale,
            }}
          >
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              priority={index < 2}
            />
          </motion.div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          
          {/* Number badge */}
          <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <span className="text-[#6B7A3D] font-semibold text-lg">{index + 1}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl lg:text-[1.65rem] font-serif text-[#2D2D2D] mb-3 tracking-tight">
            {feature.title}
          </h3>
          <p className="text-[#5A5A5A] leading-relaxed text-base lg:text-[17px]">
            {feature.description}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

function MobileCard({ 
  feature, 
  index 
}: { 
  feature: typeof classFeatures[0]
  index: number 
}) {
  return (
    <motion.div 
      className="glass-card rounded-2xl overflow-hidden shadow-lg border border-[#E5DDD0]/40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md">
          <span className="text-[#6B7A3D] font-semibold text-sm">{index + 1}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg sm:text-xl font-serif text-[#2D2D2D] mb-2 tracking-tight">
          {feature.title}
        </h3>
        <p className="text-[#5A5A5A] leading-relaxed text-sm sm:text-base">
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}

export function Classes() {
  return (
    <section id="classes" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#FAF8F1] to-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile & Tablet: Simple stacked layout */}
        <div className="lg:hidden">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#2D2D2D] mb-4 text-balance leading-tight tracking-tight">
              What the Online Classes Focus On
            </h2>
            <p className="text-base text-[#5A5A5A] leading-relaxed">
              Each session helps you move better, breathe better, and feel better.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 max-w-md mx-auto">
            {classFeatures.map((feature, index) => (
              <MobileCard key={index} feature={feature} index={index} />
            ))}
          </div>

          <p className="text-center text-[#6B7A3D] font-medium text-sm mt-8">
            Suitable for beginners and those restarting yoga.
          </p>
        </div>

        {/* Desktop: Parallax sticky card stack with editorial heading */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20">
          
          {/* Left: Sticky heading */}
          <div className="lg:sticky lg:top-28 lg:self-start lg:h-fit">
            <div className="max-w-md">
              <span className="inline-block text-[#6B7A3D] text-sm font-semibold tracking-widest uppercase mb-5">
                Class Focus Areas
              </span>
              <h2 className="text-4xl xl:text-5xl font-serif text-[#2D2D2D] mb-6 text-balance leading-[1.1] tracking-tight">
                What the Online Classes Focus On
              </h2>
              <p className="text-lg text-[#5A5A5A] leading-relaxed mb-8">
                Each session is designed to help you move better, breathe better, and feel better with regular practice.
              </p>
              <div className="flex items-center gap-3 py-4 px-5 rounded-xl bg-[#6B7A3D]/5 border border-[#6B7A3D]/10">
                <div className="w-2 h-2 rounded-full bg-[#6B7A3D] shrink-0" />
                <p className="text-[#6B7A3D] font-medium text-sm">
                  Suitable for beginners as well as people restarting yoga.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Parallax sticky cards */}
          <div className="relative pb-[40vh]">
            {classFeatures.map((feature, index) => (
              <div key={index} className="mb-6">
                <ParallaxCard feature={feature} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
