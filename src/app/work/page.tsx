"use client";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "01",
    name: "Yacht System V2",
    category: "Marine Tech",
    color: "#1e3c72",
  },
  {
    id: "02",
    name: "Aviation Dashboard",
    category: "Logistics",
    color: "#2C3E50",
  },
  { id: "03", name: "Unicorn MVP", category: "Startups", color: "#8E2DE2" },
];

export default function WorkPage() {
  return (
    <main className="bg-black pt-40 px-6 pb-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-32">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div
                className="aspect-[21/9] w-full bg-white/5 rounded-3xl overflow-hidden mb-8 relative border border-white/5"
                style={{
                  background: `linear-gradient(45deg, ${p.color}, transparent)`,
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-700" />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-[#FF6B6B] font-mono text-sm mb-2 block">
                    {p.id} / Case Study
                  </span>
                  <h2 className="text-5xl font-display font-bold">{p.name}</h2>
                </div>
                <p className="text-white/40 uppercase tracking-widest text-xs font-bold">
                  {p.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
