"use client";

import { motion } from "framer-motion";

export default function ComplainsPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Ticket generated. Our resolution team will contact you within 24 hours.",
    );
  };

  return (
    <main className="bg-black min-h-screen pt-32 pb-40 px-6 text-white selection:bg-[#FF6B6B] selection:text-black">
      <section className="container mx-auto max-w-3xl text-center mb-16">
        <h2 className="text-[#FF6B6B] text-xs font-mono uppercase tracking-[0.4em] mb-6">
          Client Support
        </h2>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
          RESOLUTION <span className="text-white/40">CENTER</span>
        </h1>
        <p className="text-white/50 text-lg font-light leading-relaxed">
          Uncompromising quality requires immediate action. Submit your
          operational friction points here for expedited resolution.
        </p>
      </section>

      <section className="container mx-auto max-w-xl bg-white/[0.02] border border-white/10 rounded-3xl p-8 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6 text-sm">
          <div className="space-y-2">
            <label className="uppercase tracking-widest text-[10px] text-white/50">
              Project ID / Client Name
            </label>
            <input
              required
              type="text"
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6B6B] transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="uppercase tracking-widest text-[10px] text-white/50">
              Severity Level
            </label>
            <select className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6B6B] transition-colors text-white/70">
              <option>Low - Minor UI/UX adjustment</option>
              <option>Medium - Performance or logic bug</option>
              <option>High - Critical System Failure</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="uppercase tracking-widest text-[10px] text-white/50">
              Detailed Report
            </label>
            <textarea
              required
              rows={4}
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6B6B] transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-white/10 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-[#FF6B6B] hover:text-black transition-colors"
          >
            Initiate Resolution
          </button>
        </form>
      </section>
    </main>
  );
}
