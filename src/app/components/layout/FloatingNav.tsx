"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Zap, Briefcase, DollarSign, Globe, Layers } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: Zap },
  { label: "Industries", href: "/industries", icon: Globe },
  { label: "Work", href: "/work", icon: Briefcase },
  { label: "Pricing", href: "/pricing", icon: DollarSign },
  { label: "Ecosystem", href: "/ecosystem", icon: Layers },
];

export default function FloatingNav() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="fixed bottom-8 left-0 right-0 z-[100] flex justify-center px-4">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-1 p-2 bg-black/50 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => setHovered(item.label)}
              onMouseLeave={() => setHovered(null)}
              className="relative p-3 md:p-4 rounded-full transition-colors group"
            >
              <AnimatePresence>
                {hovered === item.label && (
                  <motion.span
                    layoutId="navTooltip"
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -45, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-md pointer-events-none"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-[#FF6B6B] rounded-full z-0"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}

              <Icon
                size={20}
                className={`relative z-10 transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-white/40 group-hover:text-white"
                }`}
              />
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
}
