"use client"

import { FadeIn } from "@/components/motion-wrapper"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      {/* Dark background */}
      <div className="absolute inset-0 -z-10 bg-foreground" />
      {/* Subtle glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-accent/15 blur-[140px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent/70 mb-5">
              Free to start
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl">
              Ready to test what you&apos;re actually made of?
            </h2>
            <p className="mt-6 text-lg text-background/60">
              Join 2,400+ developers already using SfinX. No credit card needed.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <a
                href="https://app.sfinx.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-background px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-background/90 hover:shadow-lg"
              >
                Create Free Account
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#pricing"
                className="text-sm text-background/40 transition-colors hover:text-background/70"
              >
                View pricing →
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
