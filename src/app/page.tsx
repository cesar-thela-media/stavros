import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import QuickTools from '@/components/QuickTools'
import FeaturedProperties from '@/components/FeaturedProperties'
import Services from '@/components/Services'
import MarketInsights from '@/components/MarketInsights'
import KWTools from '@/components/KWTools'
import About from '@/components/About'
import Awards from '@/components/Awards'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import ValuationCTA from '@/components/ValuationCTA'
import LeadCaptureBanner from '@/components/LeadCaptureBanner'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickTools />
        <FeaturedProperties />
        <Services />
        <MarketInsights />
        <KWTools />
        <About />
        <Awards />
        <Testimonials />
        <Contact />
      </main>
      <ValuationCTA />
      <Footer />
      <LeadCaptureBanner />
    </>
  )
}
