"use client";
export default function Ecosystem() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* This button will trigger the 10s warp speed effect later */}
      <button className="group relative px-12 py-6 bg-white text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform">
        Enter RSI Ecosystem
        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity" />
      </button>
    </section>
  );
}
