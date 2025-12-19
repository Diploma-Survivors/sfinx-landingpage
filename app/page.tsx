import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductSection } from "@/components/product-section"
import { SolutionSection } from "@/components/solution-section"
import { DocumentationSection } from "@/components/documentation-section"
import { PricingSection } from "@/components/pricing-section"
import { CompareSection } from "@/components/compare-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <SolutionSection />
        <DocumentationSection />
        <PricingSection />
        <CompareSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
