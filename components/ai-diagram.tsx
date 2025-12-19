"use client"

import { motion } from "framer-motion"

export function AIDiagram({ variant = "evaluation" }: { variant?: "evaluation" | "interview" }) {
  const isInterview = variant === "interview"

  if (isInterview) {
    return (
      <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gradient-to-br from-secondary/50 to-white border border-border/60 p-4">
        {/* Bidirectional arrows for real-time interaction */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 100">
          {/* Arrow from User to AI (top curve) */}
          <motion.path
            d="M 40 35 Q 100 20 160 35"
            stroke="url(#lineGradientRight)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8 4"
            opacity="0.7"
            animate={{ 
              strokeDashoffset: [0, -24]
            }}
            transition={{
              strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: "linear" }
            }}
          />
          
          {/* Arrow from AI to User (bottom curve) */}
          <motion.path
            d="M 160 65 Q 100 80 40 65"
            stroke="url(#lineGradientLeft)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8 4"
            opacity="0.7"
            animate={{ 
              strokeDashoffset: [0, -24]
            }}
            transition={{
              strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: "linear" }
            }}
          />

          <defs>
            <linearGradient id="lineGradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.5 0.18 200)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="oklch(0.5 0.18 200)" />
            </linearGradient>
            <linearGradient id="lineGradientLeft" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.55 0.18 160)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="oklch(0.55 0.18 160)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Nodes */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          {/* User node */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-border bg-white shadow-md">
              <span className="text-xl">👤</span>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-muted-foreground">
              You
            </div>
            {/* Chat bubble from user */}
            <motion.div
              className="absolute -right-24 -top-4 flex h-8 min-w-[80px] items-center justify-center rounded-2xl rounded-bl-none bg-accent text-accent-foreground shadow-lg px-3"
              initial={{ opacity: 0, scale: 0.8, x: -10 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8], x: [-10, 0, 0, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[10px] font-semibold text-center whitespace-nowrap">How do I...?</span>
            </motion.div>
          </motion.div>

          {/* AI Interviewer node with active indicator */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[oklch(0.55_0.2_280)] to-[oklch(0.55_0.18_160)] blur-lg opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent/30 bg-gradient-to-br from-[oklch(0.55_0.2_280_/_0.15)] to-[oklch(0.55_0.18_160_/_0.15)] shadow-lg">
                <span className="text-xl">🧠</span>
              </div>
              {/* Live indicator */}
              <motion.div
                className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-accent border-2 border-white"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-muted-foreground">
              AI Interviewer
            </div>
            {/* Chat bubble from AI */}
            <motion.div
              className="absolute -left-28 -top-4 flex h-8 min-w-[90px] items-center justify-center rounded-2xl rounded-br-none bg-white border-2 border-accent/20 shadow-lg px-3"
              initial={{ opacity: 0, scale: 0.8, x: 10 }}
              animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.8, 0.8, 1, 1, 0.8], x: [10, 10, 0, 0, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <span className="text-[10px] font-semibold text-accent text-center whitespace-nowrap">Let's explore...</span>
            </motion.div>
            {/* Typing indicator */}
            <motion.div
              className="absolute -left-16 bottom-4 flex gap-1 rounded-full bg-white px-2 py-1 shadow-md border border-border/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-1 w-1 rounded-full bg-accent"
                  animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating particles showing active communication */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-accent/50"
            style={{
              left: `${30 + i * 15}%`,
              top: `${35 + (i % 2) * 30}%`,
            }}
            animate={{
              x: [0, 10, 0],
              y: [-5, 5, -5],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    )
  }

  // Evaluation variant - one-way flow
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gradient-to-br from-secondary/50 to-white border border-border/60 p-4">
      {/* Animated nodes and connections */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 100">
        {/* Connection lines */}
        <motion.path
          d="M 30 50 Q 70 30 100 50 Q 130 70 170 50"
          stroke="url(#lineGradientLight)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="8 4"
          opacity="0.7"
          animate={{ 
            strokeDashoffset: [0, -24]
          }}
          transition={{
            strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear" }
          }}
        />
        <motion.path
          d="M 30 50 Q 70 70 100 50 Q 130 30 170 50"
          stroke="url(#lineGradient2Light)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="8 4"
          opacity="0.5"
          animate={{ 
            strokeDashoffset: [0, -24]
          }}
          transition={{
            strokeDashoffset: { duration: 2.5, repeat: Infinity, ease: "linear" }
          }}
        />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="lineGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.55 0.2 280)" />
            <stop offset="100%" stopColor="oklch(0.55 0.18 160)" />
          </linearGradient>
          <linearGradient id="lineGradient2Light" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.55 0.18 160)" />
            <stop offset="100%" stopColor="oklch(0.55 0.2 280)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nodes */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        {/* Input node */}
        <motion.div
          className="relative z-10"
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-white shadow-md">
            <span className="text-lg text-foreground">{"</>"}</span>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-muted-foreground">
            Code Input
          </div>
        </motion.div>

        {/* AI processing node */}
        <motion.div
          className="relative z-10"
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[oklch(0.55_0.2_280)] to-[oklch(0.55_0.18_160)] blur-lg opacity-30 animate-pulse-ring" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-gradient-to-br from-[oklch(0.55_0.2_280_/_0.15)] to-[oklch(0.55_0.18_160_/_0.15)] shadow-lg">
              <span className="text-xl">🧠</span>
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-muted-foreground">
            AI Analysis
          </div>
        </motion.div>

        {/* Output node */}
        <motion.div
          className="relative z-10"
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 shadow-md shadow-accent/10">
            <span className="text-lg text-accent">✓</span>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-muted-foreground">
            Evaluation
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-accent/50"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-5, 5, -5],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
