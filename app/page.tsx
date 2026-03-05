import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsBar } from "@/components/stats-bar"
import { ProductSection } from "@/components/product-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorksSection } from "@/components/how-it-works"
import { DocumentationSection } from "@/components/documentation-section"
import { PricingSection } from "@/components/pricing-section"
import { CompareSection } from "@/components/compare-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { TeamSection } from "@/components/team-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <ProductSection />
        <SolutionSection />
        <HowItWorksSection />
        <DocumentationSection />
        <PricingSection />
        <CompareSection />
        <TestimonialsSection />
        <FaqSection />
        <TeamSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
