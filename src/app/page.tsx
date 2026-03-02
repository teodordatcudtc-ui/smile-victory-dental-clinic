import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ServicesPreview from '@/components/ServicesPreview'
import AboutSection from '@/components/AboutSection'
import ExpertsSection from '@/components/ExpertsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ServicesPreview />
        <AboutSection />
        <ExpertsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
