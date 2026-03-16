import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Platforms from '@/components/Platforms'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Comparison from '@/components/Comparison'
import FAQ from '@/components/FAQ'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Platforms />
        <Features />
        <HowItWorks />
        <Pricing />
        <Comparison />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
