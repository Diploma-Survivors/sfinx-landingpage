"use client"

import { FadeIn } from "@/components/motion-wrapper"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

export function TeamSection() {
  return (
    <section id="team" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[oklch(0.96_0.01_260)] to-background" />
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-[oklch(0.8_0.12_160_/_0.15)] blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 shadow-sm"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-muted-foreground">Building in public</span>
            </motion.div>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              <span className="gradient-text">Diploma Survivors</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A team of passionate young developers committed to redefining how programming skills are assessed. We've
              been through the trenches — rigorous coursework, demanding projects, and countless hours of debugging.
            </p>

            <p className="mt-4 text-lg text-foreground/80">Now we're building the platform we wish we had.</p>

            {/* Social links */}
            <div className="mt-10 flex items-center justify-center gap-4">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-white text-muted-foreground shadow-sm transition-all hover:border-accent/40 hover:bg-accent/5 hover:text-accent"
                  whileHover={{ y: -4, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="sr-only">{social.label}</span>
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
