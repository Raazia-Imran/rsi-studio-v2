"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "What is your typical timeline?",
    a: "MVP acceleration typically occurs within 4-6 weeks for most digital assets.",
  },
  {
    q: "How do you handle exclusivity?",
    a: "We only onboard 2 clients per quarter to ensure absolute precision.",
  },
  {
    q: "Is the monthly presence mandatory?",
    a: "It is recommended to maintain system integrity and performance.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 max-w-4xl mx-auto px-6">
      <h2 className="text-[#FF6B6B] text-xs font-bold tracking-[0.2em] uppercase mb-12">
        Common Queries
      </h2>
      <div className="space-y-4">
        {FAQS.map((item, i) => (
          <div key={i} className="border-b border-white/10">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full py-8 flex justify-between items-center text-left hover:text-[#FF6B6B] transition-colors"
            >
              <span className="text-xl md:text-2xl font-display font-medium">
                {item.q}
              </span>
              {open === i ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 text-white/50 leading-relaxed max-w-2xl">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
