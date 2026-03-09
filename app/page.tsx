import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { WhatWeBuy } from "@/components/what-we-buy"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { Stats } from "@/components/stats"
import { FAQ } from "@/components/faq"
import { CTAFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <WhatWeBuy />
      <Benefits />
      <Testimonials />
      <Stats />
      <FAQ />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
