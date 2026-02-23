"use client";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-10 right-10 z-[110] w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center group"
    >
      <svg className="absolute inset-0 w-full h-full -rotate-90">
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="2"
          fill="none"
        />
        <motion.circle
          cx="28"
          cy="28"
          r="24"
          stroke="#FF6B6B"
          strokeWidth="2"
          fill="none"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <ArrowUp
        size={20}
        className="text-white group-hover:text-[#FF6B6B] transition-colors"
      />
    </motion.button>
  );
}
