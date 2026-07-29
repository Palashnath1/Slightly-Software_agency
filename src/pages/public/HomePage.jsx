import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import HeroSection from '../../components/home/HeroSection'
import ClientsSection from '../../components/home/ClientsSection'
import PortfolioSection from '../../components/home/PortfolioSection'
import ServicesSection from '../../components/home/ServicesSection'
import ProcessSection from '../../components/home/ProcessSection'
import PricingSection from '../../components/home/PricingSection'
import TestimonialsSection from '../../components/home/TestimonialsSection'
import NewsletterSection from '../../components/home/NewsletterSection'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-deep-aubergine">
      <Header />
      <main>
        <HeroSection />
        <ClientsSection />
        <PortfolioSection />
        <ServicesSection />
        <ProcessSection />
        <PricingSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
