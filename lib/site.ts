export const siteConfig = {
  name: "Yogasar",
  title: "Online Yoga Classes for Ladies in Hindi | Yogasar",
  description:
    "Ladies-only online yoga classes in Hindi with Acharya Sarika Disawal. Live classes for women across India with a simple WhatsApp-based joining process.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.yogasar.com").replace(/\/$/, ""),
  htmlLang: "en-IN",
  locale: "en_IN",
  country: "IN",
  contact: {
    phoneDisplay: "93022 39879",
    phoneLink: "+91 9302239879",
    whatsappNumber: "919302239879",
  },
  teacher: {
    name: "Acharya Sarika Disawal",
    credential: "Masters in Yog",
    description:
      "Acharya Sarika Disawal teaches live online yoga classes in Hindi for women who want a calm, practical routine from home.",
  },
  offer: {
    price: "1000",
    currency: "INR",
    cadence: "month",
    frequency: "5 days a week",
  },
  audience: "Women across India who want live yoga classes in Hindi.",
  socialImage: "/images/hero-yoga.jpg",
}

const baseWhatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}`

export const joinWhatsappUrl =
  `${baseWhatsappUrl}?text=` +
  encodeURIComponent(
    "Hi, I want to join the ladies-only online yoga classes in Hindi."
  )

export const timingsWhatsappUrl =
  `${baseWhatsappUrl}?text=` +
  encodeURIComponent(
    "Hi, I want to ask about batch timings for the online yoga classes in Hindi."
  )

export const enquiryWhatsappUrl =
  `${baseWhatsappUrl}?text=` +
  encodeURIComponent(
    "Hi, I want to enquire about the ladies-only online yoga classes in Hindi."
  )

export const defaultKeywords = [
  "online yoga classes for ladies",
  "online yoga classes in hindi",
  "online yoga classes for women in india",
  "live yoga classes online",
  "beginner yoga classes online",
  "yoga at home for women",
]

export const coreFaqs = [
  {
    question: "Who can join these classes?",
    answer:
      "These classes are designed for ladies who want live yoga guidance in Hindi from home.",
  },
  {
    question: "Are the classes available across India?",
    answer:
      "Yes. Because the format is online, women from anywhere in India can join after confirming a suitable batch on WhatsApp.",
  },
  {
    question: "What language are the classes taught in?",
    answer: "The classes are taught in Hindi.",
  },
  {
    question: "How much do the classes cost?",
    answer: "The current fee is Rs 1000 per month.",
  },
  {
    question: "How often are classes held?",
    answer: "The current format is five live classes per week.",
  },
]
