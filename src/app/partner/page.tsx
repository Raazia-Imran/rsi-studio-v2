"use client";

import { motion } from "framer-motion";

const PARTNER_TYPES = [
  {
    title: "Strategic Design Partners",
    desc: "We provide free or discounted services of RSI One. In return, you become consumers or early adopters of the RSI One ecosystem.",
    color: "bg-[#EAE0C8]/10 border-[#EAE0C8]/20",
  },
  {
    title: "Growth Partners",
    desc: "We provide services of RSI Studio with no upfront costs. In return, we hold equity or profit share from your business.",
    color: "bg-[#FF6B6B]/10 border-[#FF6B6B]/20",
  },
  {
    title: "Vendor Partnerships",
    desc: "For large enterprises and agencies looking to securely outsource high-level engineering and design tasks to our specialized teams.",
    color: "bg-white/5 border-white/10",
  },
];

export default function PartnerPage() {
  return (
    <main className="bg-black min-h-screen pt-32 pb-40 px-6 text-white selection:bg-[#FF6B6B] selection:text-black">
      <section className="container mx-auto max-w-4xl text-center mb-24">
        <h2 className="text-[#FF6B6B] text-xs font-mono uppercase tracking-[0.3em] mb-6">
          Collaborate
        </h2>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
          BECOME A <span className="text-white/40">PARTNER</span>
        </h1>
        <p className="text-white/50 text-lg font-light leading-relaxed">
          We align with visionaries. Select your partnership model below to
          initiate the application process.
        </p>
      </section>

      {/* Partnership Models */}
      <section className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-6 mb-32">
        {PARTNER_TYPES.map((type, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`p-8 rounded-2xl border ${type.color}`}
          >
            <span className="font-mono text-xs opacity-50 block mb-4">
              /0{i + 1}
            </span>
            <h3 className="text-2xl font-display font-bold mb-4">
              {type.title}
            </h3>
            <p className="text-sm opacity-70 leading-relaxed">{type.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Application Form */}
      <section className="container mx-auto max-w-2xl bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12">
        <h3 className="text-3xl font-display font-bold mb-8 text-center">
          Partnership Application
        </h3>
        <form className="space-y-6 text-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="uppercase tracking-widest text-[10px] text-white/50">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6B6B] transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="uppercase tracking-widest text-[10px] text-white/50">
                Company / Entity
              </label>
              <input
                type="text"
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6B6B] transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="uppercase tracking-widest text-[10px] text-white/50">
              Partnership Type
            </label>
            <select className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6B6B] transition-colors text-white/70">
              <option>Strategic Design Partner</option>
              <option>Growth Partner</option>
              <option>Vendor Partnership</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="uppercase tracking-widest text-[10px] text-white/50">
              Proposal Brief
            </label>
            <textarea
              rows={4}
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6B6B] transition-colors resize-none"
            ></textarea>
          </div>

          <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-lg hover:bg-[#FF6B6B] hover:text-white transition-colors mt-4">
            Submit Application
          </button>
        </form>
      </section>
    </main>
  );
}
