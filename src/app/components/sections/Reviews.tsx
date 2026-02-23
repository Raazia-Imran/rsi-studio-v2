"use client";
import { motion } from "framer-motion";

const REVIEWS = Array(10).fill({
  text: "RSI transformed our digital authority.",
  author: "CTO, Yacht Co.",
});

export default function Reviews() {
  return (
    <section className="py-24 bg-black overflow-hidden border-y border-white/5">
      {/* Reel 1: Moving Left */}
      <div className="flex mb-8">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {REVIEWS.map((_, i) => (
            <div
              key={i}
              className="w-[400px] p-8 bg-white/5 rounded-2xl border border-white/10 shrink-0"
            >
              <p className="text-white/80 italic mb-4">"{_.text}"</p>
              <p className="text-[#FF6B6B] text-xs font-bold uppercase tracking-widest">
                {_.author}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Reel 2: Moving Right */}
      <div className="flex">
        <motion.div
          animate={{ x: [-1920, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {REVIEWS.map((_, i) => (
            <div
              key={i}
              className="w-[400px] p-8 bg-white/5 rounded-2xl border border-white/10 shrink-0"
            >
              <p className="text-white/80 italic mb-4">"{_.text}"</p>
              <p className="text-[#FF6B6B] text-xs font-bold uppercase tracking-widest">
                {_.author}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
