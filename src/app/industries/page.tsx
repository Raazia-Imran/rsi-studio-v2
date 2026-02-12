"use client";

import { motion } from "framer-motion";
import {
  Anchor,
  Plane,
  Building2,
  Rocket,
  Factory,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar"; // Ensure path is correct
import Footer from "@/components/sections/Footer";

// Data with UNIQUE GRADIENTS for each industry (The "Colorful" Request)
const INDUSTRIES = [
  {
    id: "01",
    name: "Private Yacht",
    icon: Anchor,
    desc: "On-board digital experience & connectivity systems.",
    gradient: "from-[#1e3c72] to-[#2a5298]", // Deep Ocean Blue
  },
  {
    id: "02",
    name: "Aviation",
    icon: Plane,
    desc: "Flight logistics, charter booking & luxury fleet management.",
    gradient: "from-[#2C3E50] to-[#BDC3C7]", // Silver/Sky
  },
  {
    id: "03",
    name: "Real Estate",
    icon: Building2,
    desc: "High-yield investment platforms & virtual tour engines.",
    gradient: "from-[#134E5E] to-[#71B280]", // Emerald City
  },
  {
    id: "04",
    name: "Startups",
    icon: Rocket,
    desc: "MVP acceleration for high-growth unicorn trajectories.",
    gradient: "from-[#8E2DE2] to-[#4A00E0]", // Electric Purple
  },
  {
    id: "05",
    name: "Manufacturing",
    icon: Factory,
    desc: "ERP integration, automation dashboards & IoT twins.",
    gradient: "from-[#eb3349] to-[#f45c43]", // Industrial Orange
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-[#FF6B6B] selection:text-black">
      <Navbar />

      {/* Header Section */}
      <section className="pt-40 pb-20 px-6 container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-8"
        >
          SECTORS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-white/50 text-lg"
        >
          We don't build for everyone. We engineer dominance for industries
          where
          <span className="text-[#FF6B6B]"> precision is the only metric.</span>
        </motion.p>
      </section>

      {/* The "Design Monks" Interactive Grid */}
      <section className="px-6 pb-40 container mx-auto">
        <div className="grid grid-cols-1 gap-6">
          {INDUSTRIES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[200px] hover:h-[400px] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-3xl overflow-hidden border border-white/10"
            >
              {/* Background Gradient (Reveals on Hover) */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-between">
                {/* Top Row */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-sm text-white/40 group-hover:text-white transition-colors">
                      /{item.id}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-display font-bold uppercase">
                      {item.name}
                    </h3>
                  </div>

                  {/* Icon Rotates on Hover */}
                  <div className="p-4 rounded-full border border-white/10 bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:rotate-[-45deg]">
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                {/* Bottom Info (Hidden initially, slides up) */}
                <div className="translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 flex items-end justify-between">
                  <p className="max-w-md text-lg md:text-2xl font-light leading-snug">
                    {item.desc}
                  </p>
                  <item.icon size={64} className="text-white/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
