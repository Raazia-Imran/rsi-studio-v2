"use client"

import { motion } from "framer-motion";

interface Location {
  country: string;
  address: string;
}

const locations: Location[] = [
  { country: "Canada", address: "Broackroad, Pickering, Ontario" },
  { country: "Pakistan", address: "2nd Floor, Hall No.2, WWIC, UOS, University road Sargodha" },
];

const LOGOS_ROW_1 = [
  { src: "/Organic_Care.jpeg", size: "h-20" },
  { src: "/RSI.jpeg", size: "h-14" },
  { src: "/MYSKINN.jpeg", size: "h-14" },
  { src: "/Recipli.jpeg", size: "h-14" },
  { src: "/Shell_logo.svg.png", size: "h-14" },
  { src: "/FFC.jpeg", size: "h-14" },
  { src: "/Askari-bank-logo.png", size: "h-10" },
  { src: "/Saqafar_backery.png", size: "h-20" },
];

const LOGOS_ROW_2 = [
  { src: "/Shopify_logo.png", size: "h-20" },
  { src: "/Cameco.png", size: "h-14" },
  { src: "/Nutrien.png", size: "h-20" },
  { src: "/Indus-Group.jpeg", size: "h-14" },
  { src: "/Azure.jpeg", size: "h-14" },
  { src: "/Black_Air.jpeg", size: "h-14" },
  { src: "/gigas.jpeg", size: "h-14" },
  { src: "/royal-aviation.jpeg", size: "h-20" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white overflow-hidden pt-16 md:pt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

        {/* ── Global Presence ── */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold">Our Presence</h2>
          <p className="text-gray-400 mt-3 md:mt-4 text-sm md:text-base max-w-xl mx-auto">
            Delivering premium digital solutions across continents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16 md:mb-24">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111]/70 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-6 hover:border-[#FF6B6B]/40 transition relative overflow-hidden"
            >
              <h3 className="text-base md:text-lg font-semibold mb-2">{loc.country}</h3>
              <p className="text-gray-400 text-sm">{loc.address}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── LOGO MARQUEE ROWS ── */}
      <div className="relative z-10 w-full mb-16 md:mb-24 flex flex-col gap-4 md:gap-6">

        {/* Row 1 — scrolls left */}
        <div className="relative w-full overflow-hidden">
          {/* Fade edges — narrow on mobile, wider on desktop */}
          <div className="absolute inset-y-0 left-0 w-[10vw] md:w-48 lg:w-80 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[10vw] md:w-48 lg:w-80 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
          <div style={{ display: "flex", width: "max-content", animation: "marquee-left 30s linear infinite" }}>
            {[...LOGOS_ROW_1, ...LOGOS_ROW_1, ...LOGOS_ROW_1].map((logo, i) => (
              <div key={i} className="flex items-center justify-center mx-4 md:mx-8 shrink-0">
                <img
                  src={logo.src}
                  alt="partner logo"
                  className={`${logo.size} w-auto object-contain opacity-50 hover:opacity-100 transition duration-300`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-[10vw] md:w-48 lg:w-80 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[10vw] md:w-48 lg:w-80 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
          <div style={{ display: "flex", width: "max-content", animation: "marquee-right 34s linear infinite" }}>
            {[...LOGOS_ROW_2, ...LOGOS_ROW_2, ...LOGOS_ROW_2].map((logo, i) => (
              <div key={i} className="flex items-center justify-center mx-4 md:mx-8 shrink-0">
                <img
                  src={logo.src}
                  alt="partner logo"
                  className={`${logo.size} w-auto object-contain opacity-50 hover:opacity-100 transition duration-300`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── NAV LINKS ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 border-t border-white/10 pt-10 md:pt-16 mb-16 md:mb-24">

          {/* Important Links */}
          <div>
            <h4 className="text-[#FF6B6B] text-[10px] font-bold uppercase tracking-widest mb-4 md:mb-6">Important Links</h4>
            <ul className="space-y-2 md:space-y-3 text-sm text-white/60">
              <li><a href="/rs-international" className="hover:text-white transition-colors">RS International</a></li>
              <li><a href="/team" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="/testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="/partner" className="hover:text-white transition-colors">Become a Partner</a></li>
              <li><a href="/blogs" className="hover:text-white transition-colors">Blogs</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#FF6B6B] text-[10px] font-bold uppercase tracking-widest mb-4 md:mb-6">Services</h4>
            <ul className="space-y-2 md:space-y-3 text-sm text-white/60">
              <li><a href="/services" className="hover:text-white transition-colors">Web Design</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Custom Software</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">SEO Strategy</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Monthly Presence</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Web Automations</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-[#FF6B6B] text-[10px] font-bold uppercase tracking-widest mb-4 md:mb-6">Industries</h4>
            <ul className="space-y-2 md:space-y-3 text-sm text-white/60">
              <li><a href="/industries" className="hover:text-white transition-colors">Private Yacht</a></li>
              <li><a href="/industries" className="hover:text-white transition-colors">Aviation</a></li>
              <li><a href="/industries" className="hover:text-white transition-colors">Startup</a></li>
              <li><a href="/industries" className="hover:text-white transition-colors">Real Estate</a></li>
              <li><a href="/industries" className="hover:text-white transition-colors">Manufacturing</a></li>
            </ul>
          </div>

          {/* Communication */}
          <div>
            <h4 className="text-[#FF6B6B] text-[10px] font-bold uppercase tracking-widest mb-4 md:mb-6">Communications</h4>
            <div className="space-y-2 md:space-y-3 text-sm text-white/60">
              <p>+1 (437) 994-5030</p>
              <p>+92 329 143321</p>
              <a href="mailto:team@rsinternational.net" className="hover:text-white mt-2 block break-all">
                team@rsinternational.net
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom links ── */}
        <div className="text-center mb-10 md:mb-12">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[11px] tracking-[0.25em] uppercase text-white/60">
            <a href="#" className="hover:text-white transition duration-300">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
          </div>
          <p className="mt-6 md:mt-8 text-xs text-white/40 tracking-wide">
            © 2026, RSI Studio, All Rights Reserved.
          </p>
        </div>
      </div>

      {/* ── Big RSI Studio wordmark ── */}
      <div className="relative w-full h-[140px] sm:h-[180px] md:h-[250px] lg:h-[300px] flex justify-center items-end overflow-hidden pointer-events-none select-none">
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[10%] bg-[#FF6B6B]/40 blur-[80px] md:blur-[120px] rounded-[100%] z-0" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[10%] bg-[#FF6B6B]/50 blur-[60px] md:blur-[90px] rounded-[100%] z-0" />
        <h1 className="relative z-10 text-[15vw] md:text-[13vw] font-black tracking-[-0.02em] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-[#FF6B6B]/70 to-[#FF6B6B]/0 scale-x-[1.2] md:scale-x-[1.4] pb-4 md:pb-8 drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]">
          rsi studio
        </h1>
        <div className="absolute bottom-0 left-0 w-full h-[55%] bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-20" />
        <div className="absolute bottom-0 left-0 w-full h-[5%] bg-[#FF6B6B]/20 blur-2xl z-30 mix-blend-screen" />
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333333%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-33.333333%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </footer>
  );
}