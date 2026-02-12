"use client";

import { motion } from "framer-motion";
import { Anchor, Plane, Building2, Rocket, Factory } from "lucide-react";

const INDUSTRIES = [
  {
    id: "01",
    name: "Private Yacht",
    icon: Anchor,
    desc: "On-board digital experience & connectivity.",
  },
  {
    id: "02",
    name: "Aviation",
    icon: Plane,
    desc: "Flight logistics & luxury charter systems.",
  },
  {
    id: "03",
    name: "Real Estate",
    icon: Building2,
    desc: "High-yield property investment platforms.",
  },
  {
    id: "04",
    name: "Startups",
    icon: Rocket,
    desc: "MVP acceleration for unicorn trajectories.",
  },
  {
    id: "05",
    name: "Manufacturing",
    icon: Factory,
    desc: "ERP integration & automation dashboards.",
  },
];

export default function IndustrySuccess() {
  return (
    <section
      id="industries"
      className="py-32 bg-black text-white relative border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-[#FF6B6B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Sectors
            </h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold">
              Industries We <br /> Dominate
            </h3>
          </div>
          <p className="max-w-md text-white/50 text-sm leading-relaxed">
            We don't dabble. We specialize in high-stakes sectors where
            precision, security, and aesthetic authority are non-negotiable.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {INDUSTRIES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group bg-black p-12 min-h-[300px] flex flex-col justify-between hover:bg-white/5 transition-colors duration-500"
            >
              <div className="flex justify-between items-start">
                <span className="text-white/20 font-mono text-sm">
                  {item.id}
                </span>
                <item.icon
                  className="text-[#FF6B6B] opacity-50 group-hover:opacity-100 transition-opacity"
                  size={24}
                />
              </div>

              <div>
                <h4 className="text-2xl font-display font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  {item.name}
                </h4>
                <p className="text-sm text-white/40 group-hover:text-white/70 transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* Hover Corner Accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[1px] border-r-[1px] border-[#FF6B6B] opacity-0 group-hover:w-8 group-hover:h-8 group-hover:opacity-100 transition-all duration-300" />
            </motion.div>
          ))}

          {/* Empty Filler Block for Grid Balance */}
          <div className="bg-black p-12 flex items-center justify-center text-white/10 font-display text-4xl uppercase font-bold tracking-tighter">
            RSI /// System
          </div>
        </div>
      </div>
    </section>
  );
}
