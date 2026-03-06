"use client";

import { motion } from "framer-motion";
import { BookOpen, Plane } from "lucide-react";

export default function BlogsPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-40 text-black selection:bg-black selection:text-white">
      {/* 1. Hero Section (White Theme, Airplane, Bookshelf) */}
      <section className="container mx-auto px-6 mb-32 relative flex flex-col items-center text-center">
        <div className="w-full flex justify-between items-center absolute top-10 px-10 opacity-10 pointer-events-none">
          <BookOpen size={120} strokeWidth={1} />
          <Plane size={120} strokeWidth={1} className="transform -rotate-45" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 mt-20"
        >
          <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-gray-400 mb-6">
            RSI Library
          </h2>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-10">
            ENGINEERING <br /> <span className="text-gray-300">INSIGHTS</span>
          </h1>
          <button className="px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#FF6B6B] transition-colors">
            Explore Archives
          </button>
        </motion.div>
      </section>

      {/* 2. Library Section (4 Published, 2 Upcoming) */}
      <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 4 Published Articles */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="border border-gray-200 p-8 rounded-2xl hover:shadow-2xl transition-shadow bg-gray-50/50"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-4 block">
              Published
            </span>
            <h3 className="text-2xl font-display font-bold mb-4">
              The Future of UI/UX in SaaS Platforms
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              An in-depth analysis of cognitive load reduction in high-density
              data dashboards.
            </p>
            <a
              href="#"
              className="text-xs font-bold uppercase tracking-widest text-black hover:text-[#FF6B6B]"
            >
              Read Article →
            </a>
          </div>
        ))}

        {/* 2 Upcoming Research Cards */}
        {[1, 2].map((i) => (
          <div
            key={i + 4}
            className="border border-dashed border-gray-300 p-8 rounded-2xl bg-white flex flex-col justify-center text-center opacity-60"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF6B6B] mb-2">
              Upcoming Research
            </span>
            <h3 className="text-xl font-display font-bold text-gray-400">
              Next-Gen React Architecture
            </h3>
          </div>
        ))}
      </section>
    </main>
  );
}
