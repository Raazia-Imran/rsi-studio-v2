"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/#reviews" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Floating Bottom Navbar */}
      <motion.nav
        initial={{ y: 100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-6 md:bottom-10 left-1/2 z-[100] w-[90%] md:w-auto"
      >
        <div className="bg-[#050505]/90 backdrop-blur-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)] rounded-full px-6 md:px-8 py-4 flex items-center justify-between md:gap-12">
          {/* Logo (Text Only) */}
          <Link href="/" className="group">
            <span className="text-sm md:text-base font-display font-bold tracking-tighter text-white group-hover:text-[#FF6B6B] transition-colors">
              RSI
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#FF6B6B]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-6">
            <Link
              href="/ecosystem"
              className="hidden md:block text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6B6B] hover:text-white transition-colors"
            >
              Start a Project
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white text-[11px] font-bold uppercase tracking-[0.2em]"
              onClick={() => setMobileMenuOpen(true)}
            >
              Menu
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[110] bg-[#050505] flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute bottom-10 text-white/50 hover:text-white text-xs font-bold uppercase tracking-widest"
            >
              Close Menu
            </button>
            <div className="flex flex-col gap-8 text-center">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-display font-bold text-white hover:text-[#FF6B6B] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/ecosystem"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 text-[#FF6B6B] text-xl font-display font-bold uppercase tracking-widest"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
