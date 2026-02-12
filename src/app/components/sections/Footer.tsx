"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Footer() {
  const [time, setTime] = useState("");

  // Live Karachi Time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Karachi",
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const links = {
    sitemap: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Industries", href: "/industries" },
      { name: "Work", href: "/work" },
    ],
    socials: [
      { name: "LinkedIn", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "Behance", href: "#" },
    ],
  };

  return (
    <footer className="relative bg-black pt-20 pb-10 px-4 md:px-6">
      {/* 1. The Scrolling System Ticker (Unique Separator) */}
      <div className="border-t border-b border-white/10 py-4 mb-20 bg-[#050505]">
        <Marquee gradient={false} speed={40}>
          <div className="flex gap-12 px-6">
            {Array(8)
              .fill("SYSTEMS ONLINE • ENGINEERING DOMINANCE • RSI STUDIO •")
              .map((item, i) => (
                <span
                  key={i}
                  className="text-xs font-mono text-white/30 tracking-widest"
                >
                  {item}
                </span>
              ))}
          </div>
        </Marquee>
      </div>

      {/* 2. The Main Content Deck */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          {/* Brand Column (Massive & Clean) */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="text-[15vw] md:text-[8rem] font-display font-bold leading-[0.8] tracking-tighter text-white/5 select-none">
                RSI
              </h2>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-6">
                Let's build the <br />
                <span className="text-[#FF6B6B]">impossible.</span>
              </h3>
              <a
                href="mailto:hello@rsi.studio"
                className="inline-block px-8 py-4 border border-white/20 rounded-full text-sm uppercase tracking-widest hover:bg-[#FF6B6B] hover:text-black hover:border-transparent transition-all duration-300"
              >
                Start a Project
              </a>
            </div>
          </div>

          {/* Links Columns (Structured & Light) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8">
              Sitemap
            </h4>
            <ul className="space-y-4">
              {links.sitemap.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-lg text-white/80 hover:text-[#FF6B6B] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8">
              Socials
            </h4>
            <ul className="space-y-4">
              {links.socials.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-lg text-white/80 hover:text-[#FF6B6B] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. Bottom Bar (Separated by Space, not Lines) */}
        <div className="flex flex-col md:flex-row justify-between items-end mt-24 pt-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-white/30 uppercase tracking-widest">
              © 2026 RSI Studio.
            </span>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-[10px] text-white/20 hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-[10px] text-white/20 hover:text-white transition-colors"
              >
                Terms
              </a>
            </div>
          </div>

          {/* Live Time Badge */}
          <div className="mt-8 md:mt-0 flex items-center gap-3 bg-[#111] px-4 py-2 rounded-full border border-white/5">
            <div className="w-2 h-2 bg-[#FF6B6B] rounded-full animate-pulse" />
            <span className="text-xs font-mono text-white/50">
              KARACHI • {time}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
