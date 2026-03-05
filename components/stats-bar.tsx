"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

const stats = [
  { value: 2400, suffix: "+", label: "Developers Enrolled" },
  { value: 15000, suffix: "+", label: "Problems Solved" },
  { value: 98, suffix: "%", label: "Interview Success Rate" },
  { value: 2, prefix: "<", suffix: "s", label: "Avg. Evaluation Time" },
]

function CountUp({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1500
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export function StatsBar() {
  return (
    <section className="border-y border-border/40 bg-foreground/[0.03] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                <CountUp target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
