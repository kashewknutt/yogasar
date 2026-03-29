"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Are these online or offline classes?",
    answer: "These are live online yoga classes, so you can join easily from home.",
  },
  {
    question: "What is the monthly fee?",
    answer: "The fee is Rs 1000 per month.",
  },
  {
    question: "How many days a week are classes held?",
    answer: "Classes are held 5 days a week.",
  },
  {
    question: "Do I need prior yoga experience?",
    answer: "No. The classes are beginner-friendly and also suitable for people returning to yoga after a break.",
  },
  {
    question: "How do I join?",
    answer: "Simply WhatsApp us to ask about timings, batch options, and the next steps.",
  },
  {
    question: "Do I need to travel anywhere?",
    answer: "No. Since these are online classes, you can join directly from home.",
  },
  {
    question: "What should I keep ready for class?",
    answer: "Comfortable clothing, a yoga mat if available, water, and a quiet space to move comfortably.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-serif text-[#2D2D2D] mb-4 leading-[1.15] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card-subtle rounded-xl sm:rounded-2xl border border-[#E5DDD0]/50 px-5 sm:px-6 md:px-8 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-[#2D2D2D] hover:text-[#6B7A3D] hover:no-underline py-4 sm:py-5 text-sm sm:text-base font-medium tracking-wide">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#5A5A5A] pb-4 sm:pb-5 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
