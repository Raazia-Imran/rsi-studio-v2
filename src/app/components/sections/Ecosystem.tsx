"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Ecosystem() {
  const [isWarping, setIsWarping] = useState(false);

  return (
    <section className="h-screen flex items-center justify-center relative bg-black overflow-hidden">
      <AnimatePresence>
        {isWarping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black flex items-center justify-center"
          >
            {/* Warp Lines */}
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 20],
                  opacity: [0, 1, 0],
                  x: Math.random() * 1000 - 500,
                  y: Math.random() * 1000 - 500,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: Math.random(),
                }}
                className="absolute w-1 h-32 bg-[#FF6B6B] rounded-full"
              />
            ))}
            <motion.h2
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white font-display text-2xl tracking-[1em] uppercase z-10"
            >
              Initializing System
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsWarping(true)}
        className="group relative px-12 py-6 border border-white/20 hover:border-[#FF6B6B] transition-colors duration-500"
      >
        <span className="text-white text-sm font-bold uppercase tracking-[0.5em] group-hover:text-[#FF6B6B] transition-colors">
          Enter RSI Ecosystem
        </span>
        <div className="absolute inset-0 bg-[#FF6B6B] opacity-0 group-hover:opacity-5 transition-opacity" />
      </button>
    </section>
  );
}
