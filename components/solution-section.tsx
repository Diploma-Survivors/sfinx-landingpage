"use client"

import { Brain, TestTube, Activity, AlertTriangle, Video } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { motion } from "framer-motion"

const solutions = [
  {
    icon: Brain,
    title: "AI-Powered Code Evaluation",
    description: "Advanced AI models analyze your code for correctness, efficiency, and best practices.",
    color: "oklch(0.55 0.2 280)",
  },
  {
    icon: TestTube,
    title: "Intelligent Test Generation",
    description: "Automatically generated edge cases that thoroughly test your solution's robustness.",
    color: "oklch(0.5 0.18 200)",
  },
  {
    icon: Activity,
    title: "Performance Analysis",
    description: "Deep analysis of time complexity, space usage, and handling of boundary conditions.",
    color: "oklch(0.55 0.18 160)",
  },
  {
    icon: AlertTriangle,
    title: "Plagiarism Detection",
    description: "Sophisticated detection systems ensure the integrity of every submission.",
    color: "oklch(0.55 0.18 60)",
  },
  {
    icon: Video,
    title: "Real-Time Mock Interviews",
    description: "Live interview simulations with structured feedback to prepare for actual interviews.",
    color: "oklch(0.5 0.2 320)",
  },
]

export function SolutionSection() {
  return (
    <section id="solution" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[oklch(0.96_0.01_260)] to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              How sfinx <span className="gradient-text">Solves</span> Modern Assessment Problems
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Built to address the shortcomings of traditional coding platforms
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {solutions.map((solution, index) => (
            <StaggerItem key={solution.title}>
              <motion.div
                className="group relative h-full overflow-hidden rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:border-border/80 hover:shadow-lg"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${solution.color.replace(")", " / 0.08)")}, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary/50"
                  style={{
                    boxShadow: `0 0 20px ${solution.color.replace(")", " / 0.15)")}`,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <solution.icon className="h-6 w-6" style={{ color: solution.color }} />
                </motion.div>

                {/* Number badge */}
                <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-lg font-semibold text-foreground">{solution.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{solution.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
