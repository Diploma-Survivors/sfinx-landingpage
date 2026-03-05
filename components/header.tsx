"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Product", href: "#product" },
  { name: "Solution", href: "#solution" },
  { name: "Documentation", href: "#documentation" },
  { name: "Pricing", href: "#pricing" },
  { name: "Compare", href: "#compare" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1))
    const observers = sectionIds
      .map((id) => {
        const el = document.getElementById(id)
        if (!el) return null
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) setActiveSection(id)
            })
          },
          { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
        )
        observer.observe(el)
        return observer
      })
      .filter(Boolean) as IntersectionObserver[]

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/logo.svg" alt="SfinX" width={32} height={32} priority />
            <span className="text-xl font-bold tracking-tight text-accent">SfinX</span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-secondary ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-indicator"
                      className="absolute inset-x-3 bottom-0.5 h-0.5 rounded-full bg-accent"
                    />
                  )}
                </Link>
              )
            })}
          </div>
        </div>

        <div className="hidden md:flex md:items-center md:gap-4">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md shadow-accent/15 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
              asChild
            >
              <a href="https://app.sfinx.cloud" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </motion.div>
        </div>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden border-t border-border/40 bg-white/95 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-1 px-4 pb-4 pt-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <Button className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
