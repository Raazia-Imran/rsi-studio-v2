"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TIMELINE = [
  {
    year: "2025",
    title: "RSI Studio Launches",
    desc: "Foundation of RSI One established.",
  },
  {
    year: "2026",
    title: "RSI One Deploys",
    desc: "Private yacht and aviation standardized management ecosystem software.",
  },
  {
    year: "2027",
    title: "RSI One Scales",
    desc: "RSI Marine and RSI Aerospace research commences.",
  },
  {
    year: "2028",
    title: "Industry Standard",
    desc: "RSI One becomes the undisputed industry standard.",
  },
  {
    year: "2029",
    title: "Marine & Aero Launch",
    desc: "RSI Marine and RSI Aerospace officially launch to the market.",
  },
  {
    year: "2029-2034",
    title: "The Revolution",
    desc: "Scaling and revolutionizing the aero-marine niche completely.",
  },
  {
    year: "2035",
    title: "Autonomy Achieved",
    desc: "Foundation for completely self-driven private assets.",
  },
  {
    year: "2036",
    title: "The Ultimate Aim",
    desc: "Globally recognized standard with 3+ Unicorns bearing our flag.",
  },
];

// ── Footer data (same as global footer) ──
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

export default function RSInternationalPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("RS International");

  useEffect(() => {
    const textTimer = setTimeout(() => setLoadingText("RSI"), 2500);
    const endTimer = setTimeout(() => setIsLoading(false), 5500);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(endTimer);
    };
  }, []);

  return (
    <>
      {/* Cinematic Preloader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
          >
            <motion.h1
              key={loadingText}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-4xl md:text-6xl font-display font-light text-white tracking-[0.5em] uppercase"
            >
              {loadingText}
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 mix-blend-difference text-white">
          <span className="font-display font-bold text-xl tracking-tighter">
            RS INTERNATIONAL
          </span>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="/" className="hover:opacity-50 transition-opacity">
              RSI Studio
            </a>
            <a href="#vision" className="hover:opacity-50 transition-opacity">
              Join the Vision
            </a>
          </div>
        </nav>

        {/* 1. Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6, duration: 1 }}
            className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-8"
          >
            Innovate present to <br /> revolutionize future.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6.5, duration: 1 }}
            className="text-gray-500 text-lg md:text-2xl font-light uppercase tracking-widest"
          >
            "We are not moving toward future, we are building it."
          </motion.p>
        </section>

        {/* 2. Vision Beyond Innovation */}
        <section className="container mx-auto max-w-4xl px-6 py-32 text-center md:text-left">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-gray-400 mb-8">
            Vision Beyond Innovation
          </h2>
          <p className="text-2xl md:text-4xl font-light leading-snug mb-12">
            We have seen a future for humanity with prosperity. Our mission is
            to start a nuclear chain reaction leading to the creation of
            multiple unicorns from Pakistan.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            RS International envisions being a fertile land in which all our
            current and future ventures are seeds with potential to grow to
            unicorn status. Not for the sake of monetary terms—our primary
            driving source is changing the world. That is why we have built RS
            International on patterns from Silicon Valley from Day 0.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            <div className="p-8 border border-gray-200 rounded-2xl bg-[#EAE0C8]/10">
              <h3 className="text-2xl font-display font-bold mb-2">RSI One</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest">
                Core Division
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-2xl bg-[#FF6B6B]/5">
              <h3 className="text-2xl font-display font-bold mb-2">
                RSI Studio
              </h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest">
                Secondary Division
              </p>
            </div>
          </div>
        </section>

        {/* 3. Timeline */}
        <section className="bg-black text-white py-32 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[#EAE0C8] mb-16 text-center">
              Decade-Long Revolution
            </h2>
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
              {TIMELINE.map((item, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black text-white/50 group-hover:text-white group-hover:border-[#FF6B6B] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl transition-all duration-300 z-10">
                    <div className="w-2 h-2 bg-[#FF6B6B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[#EAE0C8] tracking-widest text-sm">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Funding the Future */}
        <section
          id="vision"
          className="container mx-auto max-w-4xl px-6 py-32 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
            FUNDING THE <br /> FUTURE
          </h2>
          <p className="text-gray-500 text-lg mb-12">
            We are actively fundraising. Join the vision that scales beyond
            imagination.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              href="/contact-ceo"
              className="px-8 py-4 bg-black text-white font-bold uppercase tracking-widest rounded-full hover:bg-gray-800 transition-colors"
            >
              Talk with CEO
            </a>
            <a
              href="/partner"
              className="px-8 py-4 bg-gray-100 text-black font-bold uppercase tracking-widest rounded-full hover:bg-gray-200 transition-colors"
            >
              Become a Partner
            </a>
          </div>
        </section>

        {/* ── CUSTOM FOOTER FOR THIS PAGE ── */}
        <footer className="relative bg-[#050505] text-white overflow-hidden pt-16 md:pt-32">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

            {/* Global Presence */}
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-semibold">Our Presence</h2>
              <p className="text-gray-400 mt-3 md:mt-4 text-sm md:text-base max-w-xl mx-auto">
                Premium digital solutions, no matter where you are.
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

          {/* Logo Marquee */}
          <div className="relative z-10 w-full mb-16 md:mb-24 flex flex-col gap-4 md:gap-6">
            <div className="relative w-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-[10vw] md:w-48 lg:w-80 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-[10vw] md:w-48 lg:w-80 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
              <div style={{ display: "flex", width: "max-content", animation: "marquee-left 30s linear infinite" }}>
                {[...LOGOS_ROW_1, ...LOGOS_ROW_1, ...LOGOS_ROW_1].map((logo, i) => (
                  <div key={i} className="flex items-center justify-center mx-4 md:mx-8 shrink-0">
                    <img src={logo.src} alt="partner logo" className={`${logo.size} w-auto object-contain opacity-50 hover:opacity-100 transition duration-300`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-[10vw] md:w-48 lg:w-80 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-[10vw] md:w-48 lg:w-80 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
              <div style={{ display: "flex", width: "max-content", animation: "marquee-right 34s linear infinite" }}>
                {[...LOGOS_ROW_2, ...LOGOS_ROW_2, ...LOGOS_ROW_2].map((logo, i) => (
                  <div key={i} className="flex items-center justify-center mx-4 md:mx-8 shrink-0">
                    <img src={logo.src} alt="partner logo" className={`${logo.size} w-auto object-contain opacity-50 hover:opacity-100 transition duration-300`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 border-t border-white/10 pt-10 md:pt-16 mb-16 md:mb-24">

              <div>
                <h4 className="text-[#FF6B6B] text-[12px] font-bold uppercase tracking-widest mb-4 md:mb-6">Important Links</h4>
                <ul className="space-y-2 md:space-y-3 text-sm text-white/60">
                  <li><a href="/" className="hover:text-white transition-colors">RSI Studio</a></li>
                  <li><a href="/team" className="hover:text-white transition-colors">Team</a></li>
                  <li><a href="/testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                  <li><a href="/partner" className="hover:text-white transition-colors">Become a Partner</a></li>
                  <li><a href="/blogs" className="hover:text-white transition-colors">Blogs</a></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-[#FF6B6B] text-[12px] font-bold uppercase tracking-widest mb-4 md:mb-6">Services</h4>
                <ul className="space-y-2 md:space-y-3 text-sm text-white/60">
                  <li><a href="/services" className="hover:text-white transition-colors">Web Design</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors">Web Development</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors">Custom Software</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors">SEO Strategy</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors">Monthly Presence</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors">Web Automations</a></li>
                </ul>
              </div>

              {/* Socials */}
              <div>
                <h4 className="text-[#FF6B6B] text-[12px] font-bold uppercase tracking-widest mb-4 md:mb-6">Follow Us</h4>
                <ul className="space-y-2 md:space-y-3 text-sm text-white/60">
                  <li>
                    <a href="https://linkedin.com/company/RS International" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                      </svg>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="mailto:team@rsinternational.net" className="flex items-center gap-2 hover:text-white transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="m2 7 10 7 10-7"/>
                      </svg>
                      Email Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Communications */}
              <div>
                <h4 className="text-[#FF6B6B] text-[12px] font-bold uppercase tracking-widest mb-4 md:mb-6">Communications</h4>
                <div className="space-y-2 md:space-y-3 text-sm text-white/60">
                  <p>+1 (437) 994-5030</p>
                  <p>+92 329 1433211</p>
                  <a href="mailto:team@rsinternational.net" className="hover:text-white mt-2 block break-all">
                    team@rsinternational.net
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom links */}
            <div className="text-center mb-10 md:mb-12">
              <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[11px] font-mono tracking-[0.25em] uppercase text-white/60">
                <span className="cursor-pointer hover:text-white transition duration-300">Terms & Conditions</span>
                <span className="cursor-pointer hover:text-white transition duration-300">Privacy Policy</span>
              </div>
              <p className="mt-6 md:mt-8 text-xs text-white/40 tracking-wide">
                © 2026, RSI international, All Rights Reserved.
              </p>
            </div>
          </div>

        
          <div className="relative w-full h-[140px] sm:h-[180px] md:h-[250px] lg:h-[300px] flex justify-center items-end overflow-hidden pointer-events-none select-none">
            <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[10%] bg-[#FF6B6B]/40 blur-[80px] md:blur-[120px] rounded-[100%] z-0" />
            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[10%] bg-[#FF6B6B]/50 blur-[60px] md:blur-[90px] rounded-[100%] z-0" />
            <h1 className="relative z-10 text-[9vw] md:text-[8vw] font-black tracking-[-0.02em] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-[#FF6B6B]/70 to-[#FF6B6B]/0 scale-x-[1.2] md:scale-x-[1.4] pb-4 md:pb-8 drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]">
              rsi international
            </h1>
            <div className="absolute bottom-0 left-0 w-full h-[55%] bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-20" />
            <div className="absolute bottom-0 left-0 w-full h-[5%] bg-[#FF6B6B]/20 blur-2xl z-30 mix-blend-screen" />
          </div>

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
      </main>
    </>
  );
}