import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import FeaturedProperties from '@/components/FeaturedProperties'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProperties />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
