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

export default function RSInternationalPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("RS International");

  // The 6-Second Cinematic Load Sequence
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
      {/* Cinematic Lockheed Martin-Style Preloader */}
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

      <main className="bg-white min-h-screen text-black selection:bg-black selection:text-white pb-32">
        {/* Simple Navigation for Bridge Page */}
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

          {/* Current Divisions */}
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

        {/* 3. Decade-Long Revolution Timeline */}
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

        {/* 4. Join the Journey / Investor Section */}
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
      </main>
    </>
  );
}
