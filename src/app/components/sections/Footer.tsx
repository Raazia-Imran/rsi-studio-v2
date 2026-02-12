"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [time, setTime] = useState("");

  // Live "System Time" Logic
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

  return (
    <footer className="relative bg-[#050505] pt-32 pb-12 px-6 border-t border-white/5 overflow-hidden">
      {/* Background Decor (Subtle Grid) */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* 1. Massive Magnetic CTA */}
        <div className="mb-32 flex flex-col items-start">
          <h2 className="text-[#FF6B6B] text-xs font-bold tracking-[0.2em] uppercase mb-8">
            Transmission
          </h2>
          <Link
            href="/contact"
            className="group relative inline-block cursor-none" // Intended for use with your custom cursor
          >
            <h1 className="text-[12vw] leading-[0.8] font-display font-bold text-white group-hover:text-white/10 transition-colors duration-500">
              LET'S TALK
            </h1>

            {/* The "Hidden" Hover Reveal */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="w-32 h-32 bg-[#FF6B6B] rounded-full flex items-center justify-center animate-pulse">
                <ArrowUpRight className="text-black w-12 h-12" />
              </div>
            </div>
          </Link>
        </div>

        {/* 2. The System Grid (Links) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 border-t border-white/10 pt-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-display font-bold mb-6">RSI STUDIO</h3>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              Engineering digital dominance for the top 1%. We build systems,
              not just websites.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-white/30 text-xs font-bold uppercase tracking-widest mb-6">
              Sitemap
            </h4>
            <ul className="space-y-4">
              {["Home", "Services", "Industries", "Work", "Pricing"].map(
                (item) => (
                  <li key={item} className="overflow-hidden">
                    <Link
                      href={`/${item.toLowerCase().replace("home", "")}`}
                      className="block text-sm text-white hover:text-[#FF6B6B] transition-colors transform hover:translate-x-2 duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-2">
            <h4 className="text-white/30 text-xs font-bold uppercase tracking-widest mb-6">
              Socials
            </h4>
            <ul className="space-y-4">
              {["LinkedIn", "Instagram", "Twitter / X", "Behance"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block text-sm text-white hover:text-[#FF6B6B] transition-colors transform hover:translate-x-2 duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h4 className="text-white/30 text-xs font-bold uppercase tracking-widest mb-6">
              Contact
            </h4>
            <a
              href="mailto:hello@rsi.studio"
              className="text-sm text-white block mb-2 hover:underline decoration-[#FF6B6B]"
            >
              hello@rsi.studio
            </a>
            <p className="text-sm text-white/40">+92 300 1234567</p>
          </div>
        </div>

        {/* 3. Bottom Status Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end pt-8 border-t border-white/10">
          {/* Copyright */}
          <div className="flex flex-col gap-2">
            <p className="text-[10px] text-white/30 uppercase tracking-widest">
              © 2026 RSI Studio. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-[10px] text-white/20">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Live System Time */}
          <div className="mt-6 md:mt-0 flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <div className="relative w-2 h-2">
              <div className="absolute inset-0 bg-[#FF6B6B] rounded-full animate-ping opacity-75" />
              <div className="relative w-2 h-2 bg-[#FF6B6B] rounded-full" />
            </div>
            <span className="text-xs font-mono text-white/60">
              KARACHI, PK • {time}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
