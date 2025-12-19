"use client"

import { Book, FileCode, ListChecks, Cog, Code2 } from "lucide-react"
import { FadeIn, HoverCard } from "@/components/motion-wrapper"
import { CodeEditor } from "@/components/code-editor"

const docItems = [
  {
    icon: Book,
    title: "Clear & Structured Docs",
    description: "Comprehensive documentation organized for quick reference and deep dives.",
  },
  {
    icon: FileCode,
    title: "Problem Formats",
    description: "Detailed specifications for input/output formats and constraints.",
  },
  {
    icon: ListChecks,
    title: "Submission Rules",
    description: "Clear guidelines on code requirements, time limits, and memory constraints.",
  },
  {
    icon: Cog,
    title: "Evaluation Methodology",
    description: "Transparent explanation of how submissions are scored and evaluated.",
  },
  {
    icon: Code2,
    title: "API References",
    description: "Complete API documentation for integrations and automated submissions.",
  },
]

export function DocumentationSection() {
  return (
    <section id="documentation" className="relative py-28 sm:py-36">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[oklch(0.97_0.01_260)] to-background" />
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[oklch(0.85_0.12_280_/_0.15)] blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <FadeIn direction="left">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Developer-Focused <span className="gradient-text">Documentation</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to understand the platform, structured for developers by developers.
              </p>

              <div className="mt-8 space-y-3">
                {docItems.map((item, index) => (
                  <FadeIn key={item.title} delay={index * 0.05}>
                    <HoverCard>
                      <div className="flex gap-4 p-4 -mx-4 rounded-xl border border-transparent hover:border-border hover:bg-white hover:shadow-sm transition-all">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/20">
                          <item.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </HoverCard>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <CodeEditor />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
