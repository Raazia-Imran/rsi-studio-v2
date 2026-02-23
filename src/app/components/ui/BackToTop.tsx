"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      onClick={scrollToTop}
      className="fixed bottom-10 right-10 z-[110] w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center group hover:bg-[#FF6B6B] transition-colors duration-500"
    >
      <svg className="absolute inset-0 w-full h-full -rotate-90">
        <circle
          cx="28"
          cy="28"
          r="26"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="2"
          fill="none"
        />
        <motion.circle
          cx="28"
          cy="28"
          r="26"
          stroke="#FF6B6B"
          strokeWidth="2"
          fill="none"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <ArrowUp
        size={20}
        className="text-white group-hover:text-black transition-colors"
      />
    </motion.button>
  );
}
