"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"
import { FadeIn } from "@/components/motion-wrapper"
import { motion } from "framer-motion"

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Documentation", href: "#documentation" },
      { name: "Pricing", href: "#pricing" },
      { name: "Compare", href: "#compare" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "API Reference", href: "#" },
      { name: "Problem Archive", href: "#" },
      { name: "Status", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#team" },
      { name: "Contact", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/60">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[oklch(0.96_0.005_260)] to-background" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 group">
                <span className="text-xl font-bold tracking-tight text-foreground">sfinx</span>
                <span className="rounded-md bg-accent px-1.5 py-0.5 text-xs font-semibold text-accent-foreground group-hover:bg-accent/90 transition-colors">
                  OJ
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                The rigorous online judge for developers who demand excellence. Pass the challenge. Prove your skill.
              </p>
              <div className="mt-6 flex items-center gap-3">
                {[
                  { icon: Github, label: "GitHub" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-muted-foreground shadow-sm transition-all hover:border-accent/40 hover:bg-accent/5 hover:text-accent"
                    whileHover={{ y: -2, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="sr-only">{social.label}</span>
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="mt-12 border-t border-border/60 pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} sfinx OJ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
