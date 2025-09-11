import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import QuickTools from '@/components/QuickTools'
import FeaturedProperties from '@/components/FeaturedProperties'
import Services from '@/components/Services'
import MarketInsights from '@/components/MarketInsights'
import KWTools from '@/components/KWTools'
import About from '@/components/About'
import Contact from '@/components/Contact'

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
        <Contact />
      </main>
      <Footer />
    </>
  )
}
