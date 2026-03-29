"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who can join these classes?",
    answer: "These classes are for ladies only.",
  },
  {
    question: "Can women from outside Ahmedabad join?",
    answer: "Yes. Since the classes are online, ladies from anywhere in India are welcome.",
  },
  {
    question: "What language are the classes taught in?",
    answer: "The classes are conducted in Hindi.",
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
    answer: "No. The classes are beginner-friendly and also suitable for women returning to yoga after a break.",
  },
  {
    question: "How do I join?",
    answer: "Simply WhatsApp to ask about timings, batch options, and the next steps.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="section-wrap pt-6">
      <div className="page-shell">
        <div className="section-frame px-5 py-7 sm:px-8 sm:py-8 lg:px-10">
          <div className="mb-8 max-w-2xl">
            <span className="eyebrow mb-5">FAQ</span>
            <h2 className="section-title max-w-2xl lg:max-w-3xl">
              Clear answers before you join.
            </h2>
          </div>

          <Accordion type="single" collapsible className="grid gap-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`} className="panel overflow-hidden px-5 sm:px-6">
                <AccordionTrigger className="py-4 text-left text-base font-medium text-[#221f1a] hover:text-[#56663c] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-7 text-[#5c554b] sm:text-base">
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
