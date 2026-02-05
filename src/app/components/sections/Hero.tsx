"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10"
      >
        <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-8">
          RSI STUDIO
        </h1>
        <button className="border border-white/20 px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500">
          Start a Project
        </button>
      </motion.div>
    </section>
  );
}
