

"use client";

import { motion } from "framer-motion";

// Generates random glowing glitter particles for the background
const GLITTER = Array.from({ length: 25 }).map((_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 2,
  duration: Math.random() * 3 + 2,
}));

export default function FounderQuote() {
  return (
    <section className="bg-[#050505] py-32 md:py-40 px-6 relative overflow-hidden border-t border-white/5">
      {/* Ambient Global Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[500px] bg-[#FF6B6B]/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Background Glitter Effect */}
      {GLITTER.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white shadow-[0_0_12px_#FF6B6B]"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-10 items-stretch">
          {/* Left Side: The Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-gradient-to-br from-[#0A0A0F] to-[#050505] border border-white/10 rounded-[3rem] p-10 md:p-16 lg:p-20 relative overflow-hidden flex flex-col justify-between group shadow-2xl"
          >
            {/* Animated Inner Spotlight Glow */}
            <motion.div
              animate={{
                x: [0, 150, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -left-32 w-96 h-96 bg-[#FF6B6B]/10 rounded-full blur-[100px] pointer-events-none"
            />

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] pointer-events-none mix-blend-overlay" />

            {/* Massive Background Quote Mark for Editorial Depth */}
            <span className="absolute -top-12 -left-6 text-[250px] text-white/[0.02] font-serif leading-none select-none pointer-events-none group-hover:text-white/[0.04] transition-colors duration-1000">
              “
            </span>

            <div className="relative z-10">
              {/* Premium Label instead of bulky Quote Box */}
              <div className="flex items-center gap-3 mb-12">
                <div className="w-2 h-2 rounded-full bg-[#FF6B6B] animate-pulse shadow-[0_0_10px_#FF6B6B]" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 group-hover:text-white/70 transition-colors">
                  Internal Directive
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-[3.2rem] font-display font-bold leading-[1.15] tracking-tighter text-white mb-12 drop-shadow-md">
                “Our vision with RSI Studio is to lead with a{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-white italic pr-2 relative z-10">
                    perfection in pixels
                  </span>
                  {/* Sweeping Laser Highlight Underneath */}
                  <motion.span
                    className="absolute bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF6B6B] to-transparent z-0 overflow-hidden"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </span>{" "}
                philosophy, in the international and national market.”
              </h2>
            </div>

            {/* Bottom Info */}
            <div className="relative z-10 pt-8 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xl font-display font-bold text-white mb-1">
                  Daniel
                </p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#FF6B6B] font-mono">
                  Co-Founder, RSI Studio
                </p>
              </div>
              {/* Subtle visual balance dots */}
              <div className="flex gap-1.5 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B]" />
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Image/Placeholder container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative rounded-[3rem] overflow-hidden border border-white/10 min-h-[400px] lg:min-h-[600px] group shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Premium Placeholder Background */}
            <div className="absolute inset-0 bg-[#080808] z-0 flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />

              {/* Abstract Architectural Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none" />

              {/* Scanner Light Beam Animation */}
              <motion.div
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-[#FF6B6B]/10 to-transparent pointer-events-none"
              />

              {/* Wireframe Abstract Graphic */}
              <div className="w-40 h-56 border border-white/5 rounded-[2rem] flex items-center justify-center relative overflow-hidden mb-6 bg-white/[0.01] backdrop-blur-md group-hover:border-[#FF6B6B]/30 transition-colors duration-700 shadow-2xl">
                <div className="absolute w-full h-[1px] bg-white/5 top-1/2" />
                <div className="absolute w-[1px] h-full bg-white/5 left-1/2" />
                <div className="w-16 h-16 rounded-full border border-[#FF6B6B]/40 flex items-center justify-center shadow-[0_0_20px_rgba(255,107,107,0.2)]">
                  <div className="w-2 h-2 rounded-full bg-[#FF6B6B] animate-ping" />
                </div>
              </div>
              <p className="text-[10px] font-mono uppercase tracking-[0.6em] text-white/30 group-hover:text-[#FF6B6B] transition-colors duration-700 relative z-10 bg-black/50 px-4 py-2 rounded-full border border-white/5">
                Visual Data
              </p>
            </div>

            Real Image (Will cover placeholder when you add the actual image to public folder)  // Just update this line!
            <img
              src="/placeholder-daniel.jpg"
              alt="Daniel - Co-Founder"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:grayscale-[0.5] group-hover:opacity-100 transition-all duration-700 z-10"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />

            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent z-20 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}