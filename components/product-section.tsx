"use client"

import { Brain, Video } from "lucide-react"
import { FadeIn, HoverCard } from "@/components/motion-wrapper"
import { AIDiagram } from "@/components/ai-diagram"
import { motion } from "framer-motion"

const heroFeatures = [
  {
    icon: Brain,
    title: "OJ with AI Evaluation",
    tagline: "AI-Powered Online Judge",
    description:
      "Our intelligent system goes beyond traditional test cases. Get comprehensive code analysis covering correctness, performance, edge-cases, and best practices.",
    diagramVariant: "evaluation" as const,
    stats: [
      { value: "99.7%", label: "Accuracy" },
      { value: "<2s", label: "Response" },
      { value: "847+", label: "Test Cases" },
    ],
  },
  {
    icon: Video,
    title: "Real-Time AI Interviews",
    tagline: "Live AI Mock Sessions",
    description:
      "Experience authentic interview simulations with AI acting as your interviewer. Get immediate, actionable feedback on your problem-solving approach.",
    diagramVariant: "interview" as const,
    stats: [
      { value: "1:1", label: "Sessions" },
      { value: "Real-time", label: "Feedback" },
      { value: "FAANG", label: "Style" },
    ],
  },
]

export function ProductSection() {
  return (
    <section id="product" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[oklch(0.97_0.01_280)] to-background" />
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[oklch(0.85_0.12_280_/_0.2)] blur-[100px]" />
        <div className="absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-[oklch(0.8_0.12_160_/_0.2)] blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              What is <span className="gradient-text">sfinx OJ</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              An AI-powered Online Judge with real-time interview capabilities
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {heroFeatures.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.15}>
              <HoverCard>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-500 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10">
                  {/* Gradient border effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-[oklch(0.55_0.2_280_/_0.4)] via-[oklch(0.5_0.18_200_/_0.4)] to-[oklch(0.55_0.18_160_/_0.4)]" />
                      <div className="absolute inset-[1px] rounded-2xl bg-white" />
                    </div>

                    <div className="relative p-8 z-10">
                      {/* Header */}
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <feature.icon className="h-7 w-7 text-accent" />
                      </motion.div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                          {feature.tagline}
                        </span>
                        <h3 className="text-xl font-bold text-card-foreground">{feature.title}</h3>
                      </div>
                    </div>

                    {/* Diagram */}
                    <div className="mt-6">
                      <AIDiagram variant={feature.diagramVariant} />
                    </div>

                    {/* Description */}
                    <p className="mt-6 text-muted-foreground leading-relaxed">{feature.description}</p>

                    {/* Stats */}
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      {feature.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
