"use client";

import { motion } from "framer-motion";

export default function ContactCEOPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry securely transmitted to the executive office.");
  };

  return (
    <main className="bg-black min-h-screen pt-32 pb-40 px-6 text-white selection:bg-[#FF6B6B] selection:text-black">
      <section className="container mx-auto max-w-3xl text-center mb-16">
        <h2 className="text-[#D4AF37] text-xs font-mono uppercase tracking-[0.4em] mb-6">
          Executive Access
        </h2>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
          STRATEGIC <span className="text-white/40">ALIGNMENT</span>
        </h1>
        <p className="text-white/50 text-lg font-light leading-relaxed">
          Direct communication line for high-ticket investments, global scaling
          opportunities, and enterprise-level vendor integrations.
        </p>
      </section>

      <section className="container mx-auto max-w-2xl bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Subtle Gold Glow for Executive feel */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

        <form onSubmit={handleSubmit} className="space-y-6 text-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="uppercase tracking-widest text-[10px] text-white/50">
                Full Name
              </label>
              <input
                required
                type="text"
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="uppercase tracking-widest text-[10px] text-white/50">
                Entity / Fund
              </label>
              <input
                required
                type="text"
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="uppercase tracking-widest text-[10px] text-white/50">
              Nature of Inquiry
            </label>
            <select className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors text-white/70">
              <option>Series A/B Investment</option>
              <option>Enterprise Vendor Partnership</option>
              <option>Strategic Acquisition</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="uppercase tracking-widest text-[10px] text-white/50">
              Executive Brief
            </label>
            <textarea
              required
              rows={5}
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-lg hover:bg-[#D4AF37] hover:text-white transition-colors mt-4"
          >
            Request Private Meeting
          </button>
        </form>
      </section>
    </main>
  );
}
