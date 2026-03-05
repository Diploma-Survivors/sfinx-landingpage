"use client"

import { StaggerContainer, StaggerItem, FadeIn } from "@/components/motion-wrapper"

const steps = [
  {
    number: "01",
    title: "Create your account",
    description:
      "Sign up free. No credit card needed. Unlock the full problem archive and your personal performance dashboard instantly.",
  },
  {
    number: "02",
    title: "Solve real challenges",
    description:
      "Pick a problem, write your solution in your language of choice, and submit. Our AI evaluates it in under 2 seconds.",
  },
  {
    number: "03",
    title: "Get evaluated & improve",
    description:
      "Receive detailed feedback on correctness, efficiency, edge cases, and code style. Track your progress and identify gaps over time.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-28 sm:py-36 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
              How it works
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              From sign-up to FAANG-ready
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three steps. No fluff.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <div className="relative flex flex-col rounded-2xl border border-border bg-white p-8 shadow-sm">
                {/* Connector line between cards (not on last) */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-12 hidden h-px w-8 translate-x-full bg-border md:block" />
                )}
                <span className="text-5xl font-black text-accent/20 leading-none">{step.number}</span>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
