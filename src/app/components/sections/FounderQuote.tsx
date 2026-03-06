"use client";

import { motion } from "framer-motion";

export default function FounderQuote() {
  return (
    <section className="bg-[#050505] py-40 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Add real image path when available */}
          <div className="w-24 h-24 mx-auto bg-white/10 rounded-full mb-10 overflow-hidden">
            <img
              src="/placeholder-daniel.jpg"
              alt="Daniel"
              className="w-full h-full object-cover opacity-50 grayscale mix-blend-overlay"
            />
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white mb-10">
            "Our vision with RSI Studio is to lead with a{" " }
            <span className="text-[#FF6B6B]">perfection in pixels</span>{" "}
            philosophy, in the international and national market."
          </h2>

          <p className="text-xs uppercase tracking-[0.3em] text-white/40 font-mono">
            Co-Founder, RSI Studio
          </p>
        </motion.div>
      </div>
    </section>
  );
}
