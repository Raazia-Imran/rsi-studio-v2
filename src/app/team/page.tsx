"use client";

import { motion } from "framer-motion";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-40 pb-20 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6">
          THE SYSTEM <span className="text-white/30">ARCHITECTS</span>
        </h1>
        <p className="text-white/50 font-light text-lg">
          Meet the people behind the innovation.
        </p>
      </section>

      {/* 1. Founders (Black Theme with Beige) */}
      <section className="bg-black py-20 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-[#EAE0C8] text-xs font-mono uppercase tracking-[0.3em] mb-12 text-center">
            Founders / Directors
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="border border-[#EAE0C8]/20 rounded-2xl p-8 text-center bg-white/[0.02]"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-[#EAE0C8]/10 mb-6" />
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Founder Name
                </h3>
                <p className="text-[#EAE0C8]/60 text-sm">Visionary Director</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Backend Devs (White Theme with Black/Beige) */}
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-black text-xs font-mono uppercase tracking-[0.3em] mb-12 text-center">
            Backend Engineering
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-black rounded-2xl p-6 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#EAE0C8]/20 mb-4" />
                <h3 className="text-lg font-display font-bold text-white mb-1">
                  Engineer 0{i}
                </h3>
                <p className="text-[#EAE0C8] text-xs">Systems Architecture</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Frontend Devs (Black Theme with Coral Pink) */}
      <section className="bg-black py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-[#FF6B6B] text-xs font-mono uppercase tracking-[0.3em] mb-12 text-center">
            Frontend Engineering
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border border-white/10 rounded-2xl p-6 text-center hover:border-[#FF6B6B]/50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#FF6B6B]/20 mb-4" />
                <h3 className="text-lg font-display font-bold text-white mb-1">
                  Developer 0{i}
                </h3>
                <p className="text-white/40 text-xs">UI/UX Integration</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Management & Sales follow similar alternating logic */}
    </main>
  );
}
