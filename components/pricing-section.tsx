"use client"

import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import { FadeIn, HoverCard, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For developers just getting started",
    features: [
      "Unlimited practice problems",
      "Basic code evaluation",
      "2 AI Interviews per month",
      "Community support",
      "Limited performance insights",
    ],
    cta: "Start Coding Free",
    highlighted: false,
  },
  {
    name: "Plus",
    price: "$14.99",
    period: "per month",
    description: "Everything you need to get interview-ready",
    features: [
      "Unlimited practice problems",
      "Unlimited AI Interviews",
      "Advanced AI-powered evaluation",
      "Detailed interview feedback",
      "Mock interviews",
      "Performance analytics",
      "Priority support",
    ],
    cta: "Get Interview-Ready",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$29.99",
    period: "per month",
    description: "For power users who want elite preparation",
    features: [
      "Everything in Plus",
      "Deep performance breakdowns",
      "Faster evaluations",
      "Early access to new features",
      "Advanced analytics & insights",
      "Dedicated support",
    ],
    cta: "Unlock Pro Tools",
    highlighted: false,
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">Choose the plan that fits your needs. No hidden fees.</p>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 lg:grid-cols-3" staggerDelay={0.1}>
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <HoverCard>
                <div
                  className={`relative h-full rounded-2xl border p-8 transition-all duration-500 ${
                    plan.highlighted
                      ? "border-accent/50 bg-gradient-to-b from-accent/10 to-white shadow-xl shadow-accent/10"
                      : "border-border bg-white hover:border-border/80 hover:shadow-lg"
                  }`}
                >
                  {/* Glow for highlighted */}
                  {plan.highlighted && (
                    <>
                      <div className="absolute -top-px left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent" />
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-accent/15 to-transparent blur-xl opacity-50 -z-10" />
                    </>
                  )}

                  <div className="relative">
                    {plan.highlighted && (
                      <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
                        <Sparkles className="h-3 w-3" />
                        Most Popular
                      </span>
                    )}
                    <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-sm text-muted-foreground">/{plan.period}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

                    <ul className="mt-8 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <div
                            className={`flex h-5 w-5 items-center justify-center rounded-full ${plan.highlighted ? "bg-accent/15" : "bg-secondary"}`}
                          >
                            <Check className={`h-3 w-3 ${plan.highlighted ? "text-accent" : "text-foreground"}`} />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-8">
                      <Button
                        className={`w-full transition-all duration-300 ${
                          plan.highlighted
                            ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
                            : "bg-secondary text-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {plan.cta}
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
