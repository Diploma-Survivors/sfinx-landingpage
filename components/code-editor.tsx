"use client"

import { motion } from "framer-motion"

export function CodeEditor() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl border border-border bg-[oklch(0.98_0.005_260)] shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Glow effect - softer for light mode */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[oklch(0.55_0.2_280_/_0.15)] via-[oklch(0.5_0.18_200_/_0.15)] to-[oklch(0.55_0.18_160_/_0.15)] rounded-xl blur-xl opacity-50" />

      <div className="relative">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-border/60 bg-[oklch(0.96_0.005_260)] px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[oklch(0.65_0.2_25)]" />
            <div className="h-3 w-3 rounded-full bg-[oklch(0.75_0.18_85)]" />
            <div className="h-3 w-3 rounded-full bg-[oklch(0.65_0.18_145)]" />
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded bg-secondary px-2 py-0.5">
              <span className="text-xs text-muted-foreground">solution.py</span>
            </div>
          </div>
          <div className="w-16" />
        </div>

        {/* Tab bar */}
        <div className="flex border-b border-border/60 bg-[oklch(0.97_0.005_260)]">
          <div className="flex items-center gap-2 border-r border-border/60 bg-white px-4 py-2">
            <svg className="h-4 w-4 text-[oklch(0.5_0.18_200)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-xs text-foreground">solution.py</span>
            <span className="text-muted-foreground/50">×</span>
          </div>
        </div>

        {/* Code content with line numbers */}
        <div className="flex">
          {/* Line numbers */}
          <div className="flex flex-col border-r border-border/40 bg-[oklch(0.97_0.005_260)] px-3 py-4 text-right font-mono text-xs text-muted-foreground/50 select-none">
            {Array.from({ length: 18 }, (_, i) => (
              <div key={i} className="leading-6">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code */}
          <pre className="flex-1 overflow-x-auto p-4 font-mono text-sm leading-6 bg-white">
            <code>
              <span className="syntax-comment"># AI-Powered Two Sum Solution</span>
              {"\n"}
              <span className="syntax-keyword">def</span> <span className="syntax-function">two_sum</span>(
              <span className="syntax-variable">nums</span>: <span className="syntax-type">list</span>[
              <span className="syntax-type">int</span>], <span className="syntax-variable">target</span>:{" "}
              <span className="syntax-type">int</span>) <span className="syntax-operator">-&gt;</span>{" "}
              <span className="syntax-type">list</span>[<span className="syntax-type">int</span>]:{"\n"}
              <span className="syntax-string"> """</span>
              {"\n"}
              <span className="syntax-string"> Find two numbers that add up to target.</span>
              {"\n"}
              <span className="syntax-string"> </span>
              {"\n"}
              <span className="syntax-string"> Time Complexity: O(n)</span>
              {"\n"}
              <span className="syntax-string"> Space Complexity: O(n)</span>
              {"\n"}
              <span className="syntax-string"> """</span>
              {"\n"}
              <span className="text-foreground"> </span>
              <span className="syntax-variable">seen</span> <span className="syntax-operator">=</span> {"{}"}
              {"\n"}
              <span className="text-foreground"> </span>
              <span className="syntax-keyword">for</span> <span className="syntax-variable">i</span>,{" "}
              <span className="syntax-variable">num</span> <span className="syntax-keyword">in</span>{" "}
              <span className="syntax-function">enumerate</span>(<span className="syntax-variable">nums</span>):{"\n"}
              <span className="text-foreground"> </span>
              <span className="syntax-variable">complement</span> <span className="syntax-operator">=</span>{" "}
              <span className="syntax-variable">target</span> <span className="syntax-operator">-</span>{" "}
              <span className="syntax-variable">num</span>
              {"\n"}
              <span className="text-foreground"> </span>
              <span className="syntax-keyword">if</span> <span className="syntax-variable">complement</span>{" "}
              <span className="syntax-keyword">in</span> <span className="syntax-variable">seen</span>:{"\n"}
              <span className="text-foreground"> </span>
              <span className="syntax-keyword">return</span> [<span className="syntax-variable">seen</span>[
              <span className="syntax-variable">complement</span>], <span className="syntax-variable">i</span>]{"\n"}
              <span className="text-foreground"> </span>
              <span className="syntax-variable">seen</span>[<span className="syntax-variable">num</span>]{" "}
              <span className="syntax-operator">=</span> <span className="syntax-variable">i</span>
              {"\n"}
              <span className="text-foreground"> </span>
              <span className="syntax-keyword">return</span> []{"\n"}
              {"\n"}
              <span className="syntax-comment"># ✓ All 847 test cases passed</span>
              {"\n"}
              <span className="syntax-comment"># ✓ Edge cases: handled</span>
            </code>
          </pre>
        </div>

        {/* Status bar - accent color */}
        <div className="flex items-center justify-between border-t border-border/60 bg-accent px-4 py-1 text-xs text-accent-foreground">
          <div className="flex items-center gap-4">
            <span>Python</span>
            <span>UTF-8</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Ln 14, Col 1</span>
            <span>Spaces: 4</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
