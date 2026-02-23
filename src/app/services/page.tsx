"use client";
import { motion } from "framer-motion";
import { Code2, Layout, Cpu, PenTool, Activity, Bot } from "lucide-react";

const SERVICES = [
  {
    title: "Web Design",
    icon: Layout,
    desc: "Architecting visual systems for absolute brand authority.",
  },
  {
    title: "Web Development",
    icon: Code2,
    desc: "High-performance Next.js engines built for the top 1%.",
  },
  {
    title: "Custom Software",
    icon: Cpu,
    desc: "Tailored logic to automate your complex business flows.",
  },
  {
    title: "SEO Strategy",
    icon: PenTool,
    desc: "Dominating search landscapes through technical precision.",
  },
  {
    title: "Monthly Presence",
    icon: Activity,
    desc: "We manage your digital footprint while you lead.",
  },
  {
    title: "Web Automations",
    icon: Bot,
    desc: "AI-powered systems to eliminate repetitive manual labor.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-black min-h-screen pt-40 pb-40 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32"
        >
          <h1 className="text-[15vw] md:text-[10vw] font-display font-bold leading-none tracking-tighter mb-10">
            CORE SYSTEMS
          </h1>
          <p className="max-w-xl text-white/50 text-xl leading-relaxed">
            We don't offer features; we build assets. Every service is a module
            in your brand's digital dominance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black p-12 group hover:bg-white/5 transition-colors"
            >
              <s.icon className="text-[#FF6B6B] mb-8" size={32} />
              <h3 className="text-2xl font-display font-bold mb-4">
                {s.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
