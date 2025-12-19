"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"
import { FadeIn } from "@/components/motion-wrapper"
import { LogoMarquee } from "@/components/logo-marquee"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Base gradient - subtle warm white */}
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.97_0.01_280)] via-background to-background" />

        {/* Glowing orbs - softer for light mode */}
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-[oklch(0.85_0.1_280_/_0.3)] blur-[120px] animate-glow-pulse" />
        <div
          className="absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-[oklch(0.85_0.08_200_/_0.25)] blur-[100px] animate-glow-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.8_0.12_160_/_0.2)] blur-[80px] animate-glow-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Grid pattern overlay - subtle */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(oklch(0.2 0.02 260 / 0.1) 1px, transparent 1px), linear-gradient(90deg, oklch(0.2 0.02 260 / 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-28 sm:px-6 sm:pt-36 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            {/* Badge */}
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Now in Public Beta</span>
            </motion.div>

            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-foreground">The </span>
              <span className="gradient-text">AI-First</span>
              <span className="text-foreground"> Online Judge</span>
              <br />
              <span className="text-foreground">for Elite Developers</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Solve high-stakes challenges, get AI-powered code evaluation, and face real-time mock interviews.
              <span className="text-foreground/80"> A rigorous gatekeeper for serious engineers.</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="relative overflow-hidden bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 px-8"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start the Challenge
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:border-accent/50 hover:bg-accent/5 transition-all bg-white/50 px-8"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  View Documentation
                </Button>
              </motion.div>
            </div>
          </FadeIn>
        </div>

        {/* Trusted by marquee */}
        <FadeIn delay={0.4}>
          <LogoMarquee />
        </FadeIn>
      </div>
    </section>
  )
}
