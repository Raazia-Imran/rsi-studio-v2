"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function EcosystemPage() {
  return (
    <main className="min-h-screen pt-32 px-6 container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-8">
          ECOSYSTEM
        </h1>
        <p className="text-white/50 text-xl mb-12">
          Transitioning to the RSI Network...
        </p>

        <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-[#FF6B6B] hover:text-white transition-all">
          Initialize Application
        </button>
      </motion.div>
    </main>
  );
}
