"use client"

import { motion } from "framer-motion"

const techCompanies = [
  { name: "Google", slug: "google" },
  { name: "Meta", slug: "meta" },
  { name: "Coinbase", slug: "coinbase" },
  { name: "Apple", slug: "apple" },
  { name: "Netflix", slug: "netflix" },
  { name: "Stripe", slug: "stripe" },
  { name: "Uber", slug: "uber" },
  { name: "Airbnb", slug: "airbnb" },
  { name: "Spotify", slug: "spotify" },
]

export function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden py-8">
      <p className="mb-6 text-center text-sm text-muted-foreground">Trusted by future engineers at</p>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-marquee">
          {[...techCompanies, ...techCompanies].map((company, index) => (
            <motion.div
              key={`${company.name}-${index}`}
              className="mx-8 flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.simpleicons.org/${company.slug}`}
                  alt={company.name}
                  width={20}
                  height={20}
                />
              </div>
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{company.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
