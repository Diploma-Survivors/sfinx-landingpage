"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { FadeIn } from "@/components/motion-wrapper"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Is SfinX really free?",
    answer:
      "Yes. The Free tier is free forever — no credit card required. You get access to the full problem archive, basic AI evaluation, and 2 mock interviews per month. You only need to upgrade if you want unlimited interviews or advanced analytics.",
  },
  {
    question: "How accurate is the AI evaluation?",
    answer:
      "Our AI achieves 99.7% accuracy across 847+ test cases per problem. It evaluates correctness, time complexity, space complexity, edge cases, and code style. We continuously improve the model based on edge cases our community surfaces.",
  },
  {
    question: "How is SfinX different from LeetCode or HackerRank?",
    answer:
      "LeetCode tells you if your solution passed or failed. SfinX tells you *why* — and how to improve it. Beyond evaluation, we offer real-time AI mock interviews that simulate FAANG-style sessions, something traditional judges don't offer.",
  },
  {
    question: "What programming languages are supported?",
    answer:
      "Currently Python, JavaScript, TypeScript, Java, C++, and Go. We're actively adding more. Language coverage is one of our top priorities for the next release cycle.",
  },
  {
    question: "Are mock interview sessions recorded?",
    answer:
      "No sessions are recorded or stored beyond what's needed to generate your feedback report. Your interview transcript is only visible to you and is deleted after 30 days unless you export it.",
  },
  {
    question: "What happens when the public beta ends?",
    answer:
      "Current beta users will be grandfathered into their tier at the beta price. We'll give at least 30 days notice before any pricing changes. Our goal is to reward early adopters, not surprise them.",
  },
]

export function FaqSection() {
  return (
    <section className="relative py-28 sm:py-36 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                Common questions
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Frequently asked
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Straight answers to questions we hear most.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Accordion.Root type="single" collapsible className="mt-12 space-y-3">
              {faqs.map((faq, i) => (
                <Accordion.Item
                  key={i}
                  value={`item-${i}`}
                  className="rounded-xl border border-border bg-white overflow-hidden"
                >
                  <Accordion.Trigger
                    className={cn(
                      "flex w-full items-center justify-between px-6 py-5 text-left text-sm font-semibold text-foreground",
                      "hover:bg-secondary/50 transition-colors",
                      "data-[state=open]:bg-secondary/30",
                      "[&[data-state=open]>svg]:rotate-180"
                    )}
                  >
                    {faq.question}
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <p className="px-6 pb-5 leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
