"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Hook to check current page
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const pathname = usePathname(); // Get current route
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6">
          <div
            className={`flex items-center justify-between px-8 py-4 rounded-full transition-all duration-500 ${
              isScrolled
                ? "bg-[#050505]/80 backdrop-blur-xl border border-white/10 shadow-2xl"
                : "bg-transparent border border-transparent"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2">
              <span className="text-xl font-display font-bold tracking-tighter text-white group-hover:text-[#FF6B6B] transition-colors">
                RSI STUDIO
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="relative text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#FF6B6B]"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Link
                href="/ecosystem"
                className="hidden md:flex items-center gap-2 px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#FF6B6B] hover:text-white transition-all duration-300 group"
              >
                <span>Start Project</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <button
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu (Overlay) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8 text-center">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-5xl font-display font-bold text-white hover:text-[#FF6B6B] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
