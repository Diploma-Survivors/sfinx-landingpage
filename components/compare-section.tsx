"use client"

import { Check, X, Zap, Clock, Brain, Shield } from "lucide-react"
import { FadeIn } from "@/components/motion-wrapper"
import { motion } from "framer-motion"

const comparisons = [
  {
    feature: "AI-Powered Evaluation",
    sfinx: true,
    traditional: false,
    icon: Brain,
    description: "Intelligent code analysis beyond test cases",
  },
  {
    feature: "Real Interview Simulation",
    sfinx: true,
    traditional: false,
    icon: Zap,
    description: "Live 1:1 sessions with AI interviewer",
  },
  {
    feature: "Instant Feedback",
    sfinx: true,
    traditional: false,
    icon: Clock,
    description: "Get results in under 2 seconds",
  },
  {
    feature: "Edge-Case Analysis",
    sfinx: true,
    traditional: false,
    icon: Shield,
    description: "Comprehensive boundary testing",
  },
]

export function CompareSection() {
  return (
    <section id="compare" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[oklch(0.96_0.01_260)] to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              sfinx vs <span className="text-muted-foreground">Traditional</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">See the difference at a glance</p>
          </div>
        </FadeIn>

        {/* Visual comparison cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* sfinx Column */}
          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/10 to-white p-8">
              {/* Glow effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-32 w-64 bg-accent/15 blur-[80px]" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-2xl font-bold text-foreground">sfinx</span>
                  <span className="rounded-md bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">
                    OJ
                  </span>
                </div>

                <div className="space-y-4">
                  {comparisons.map((item, index) => (
                    <motion.div
                      key={item.feature}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border/60 shadow-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15">
                        <Check className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <item.icon className="h-4 w-4 text-accent" />
                          <span className="font-semibold text-foreground">{item.feature}</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Traditional Column */}
          <FadeIn delay={0.2}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary/30 p-8">
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-2xl font-bold text-muted-foreground">Traditional OJ</span>
                </div>

                <div className="space-y-4">
                  {comparisons.map((item, index) => (
                    <motion.div
                      key={item.feature}
                      className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/40 opacity-60"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 0.6, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                        <X className="h-5 w-5 text-muted-foreground/50" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <item.icon className="h-4 w-4 text-muted-foreground/50" />
                          <span className="font-semibold text-muted-foreground">{item.feature}</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground/60">Not available</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Speed comparison visual */}
        <FadeIn delay={0.3}>
          <div className="mt-12 rounded-2xl border border-border bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Evaluation Speed Comparison</h3>
            <div className="space-y-6">
              {/* sfinx bar */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">sfinx OJ</span>
                  <span className="text-sm text-accent">&lt;2 seconds</span>
                </div>
                <div className="h-3 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-[oklch(0.55_0.2_280)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "15%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>
              {/* Traditional bar */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Traditional OJ</span>
                  <span className="text-sm text-muted-foreground">10-30 seconds</span>
                </div>
                <div className="h-3 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-muted-foreground/30"
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
