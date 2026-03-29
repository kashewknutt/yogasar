import { Header } from "@/components/yogasar/header"
import { Hero } from "@/components/yogasar/hero"
import { WhyChoose } from "@/components/yogasar/why-choose"
import { About } from "@/components/yogasar/about"
import { Teacher } from "@/components/yogasar/teacher"
import { Classes } from "@/components/yogasar/classes"
import { Pricing } from "@/components/yogasar/pricing"
import { Benefits } from "@/components/yogasar/benefits"
import { WhoItsFor } from "@/components/yogasar/who-its-for"
import { HowItWorks } from "@/components/yogasar/how-it-works"
import { Testimonials } from "@/components/yogasar/testimonials"
import { CtaBand } from "@/components/yogasar/cta-band"
import { FAQ } from "@/components/yogasar/faq"
import { Footer } from "@/components/yogasar/footer"
import { MobileWhatsAppBar } from "@/components/yogasar/mobile-whatsapp-bar"

export default function YogasarPage() {
  return (
    <main className="pb-24 md:pb-0">
      <Header />
      <Hero />
      <WhyChoose />
      <About />
      <Teacher />
      <Classes />
      <Benefits />
      <Pricing />
      <WhoItsFor />
      <HowItWorks />
      <Testimonials />
      <CtaBand />
      <FAQ />
      <Footer />
      <MobileWhatsAppBar />
    </main>
  )
}
