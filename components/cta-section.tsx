"use client"

import { FadeIn } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      {/* Dark background */}
      <div className="absolute inset-0 -z-10 bg-foreground" />
      {/* Subtle glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-accent/20 blur-[120px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl">
              Ready to test what you&apos;re actually made of?
            </h2>
            <p className="mt-6 text-lg text-background/70">
              Join 2,400+ developers already using SfinX. Free to start — no credit card needed.
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 px-8 py-6 text-base font-semibold"
              >
                <a href="https://app.sfinx.cloud" target="_blank" rel="noopener noreferrer">
                  Start the Challenge
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
