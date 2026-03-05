"use client"

import { StaggerContainer, StaggerItem, FadeIn } from "@/components/motion-wrapper"

const testimonials = [
  {
    quote:
      "SfinX's AI feedback caught an edge case I'd been ignoring for months. The explanation was clearer than anything I'd read in documentation. Passed my Google L5 interview on the first try.",
    name: "Alex T.",
    role: "Senior Software Engineer",
    company: "Google",
    initials: "AT",
  },
  {
    quote:
      "Unlike LeetCode, the AI actually explains *why* my solution is slow — not just that it is. That shift in feedback quality completely changed how I approach optimization problems.",
    name: "Priya M.",
    role: "Software Engineer",
    company: "Meta",
    initials: "PM",
  },
  {
    quote:
      "The mock interviews are shockingly realistic. I went into my Stripe interview nervous and came out confident because I had already practiced under the same pressure. Worth every cent.",
    name: "James K.",
    role: "Software Engineer",
    company: "Stripe",
    initials: "JK",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[oklch(0.96_0.01_260)] to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
              What developers say
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Developers who made it
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real feedback from engineers who used SfinX to land their next role.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3" staggerDelay={0.15}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-sm">
                {/* Quote mark */}
                <span className="text-4xl font-serif leading-none text-accent/30 select-none">&ldquo;</span>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  {/* Initials avatar */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
