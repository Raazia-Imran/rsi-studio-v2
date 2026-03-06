"use client";

import { motion } from "framer-motion";

const CATEGORIES = [
  "Dashboard",
  "Logos",
  "Webflow",
  "Slide Decks",
  "Mobile Apps",
  "Figma",
  "Social Media",
  "Framer",
  "Branding",
];

export default function PortfolioPage() {
  return (
    <main className="bg-black min-h-screen pt-32 pb-40 text-white selection:bg-[#FF6B6B] selection:text-black">
      {/* 1. Levan Rho Inspired Hero */}
      <section className="container mx-auto px-6 mb-32 flex flex-col md:flex-row items-center justify-between h-[40vh]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-8"
        >
          <span className="text-4xl text-white/40 font-light">→</span>
          <h1 className="text-5xl md:text-8xl font-display font-light tracking-widest">
            Portfolio
          </h1>
        </motion.div>

        {/* Abstract Hand/Wireframe Element (Levan Rho Vibe) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 0.5, duration: 2 }}
          className="hidden md:block w-64 h-64 border border-white/20 rounded-full flex items-center justify-center relative"
        >
          <div className="absolute w-full h-[1px] bg-white/20 rotate-45" />
          <div className="absolute w-full h-[1px] bg-white/20 -rotate-45" />
          <span className="font-display italic text-4xl">LR</span>
        </motion.div>
      </section>

      {/* 2. Highlighted Projects (Figma, Framer, etc.) */}
      <section className="bg-[#050505] py-20 border-y border-white/10 overflow-hidden">
        {/* Category Ticker */}
        <div className="flex gap-8 px-6 mb-16 overflow-x-auto whitespace-nowrap hide-scrollbar pb-4">
          {CATEGORIES.map((cat, i) => (
            <span
              key={i}
              className="text-sm font-mono uppercase tracking-widest text-white/40 hover:text-white cursor-pointer transition-colors flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] opacity-50" />{" "}
              {cat}
            </span>
          ))}
        </div>

        {/* Project Grid */}
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="aspect-[4/3] bg-white/[0.02] border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <p className="absolute bottom-6 left-6 z-20 font-display font-bold text-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                Project Name 0{i}
              </p>
              <div className="text-white/10 font-mono text-xs tracking-widest">
                Image Area
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
