"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      window.requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`;
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-screen"
      style={{
        backgroundColor: "#FF6B6B",
        border: "2px solid #FF6B6B",
        boxShadow: "0 0 15px #FF6B6B, 0 0 30px rgba(255, 107, 107, 0.6)",
        willChange: "transform",
      }}
    />
  );
}

function InteractiveSpotlight({ mouseX, position }: { mouseX: any, position: "left" | "right" }) {
  const baseAngle = position === "left" ? -15 : 15;
  const [angle, setAngle] = useState(baseAngle);

  useEffect(() => {
    const unsubscribe = mouseX.on("change", (v: number) => {
      const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1000;
      const normalizedX = (v - screenWidth / 2) / (screenWidth / 2);
      const maxSwing = 2; 
      setAngle(baseAngle + (normalizedX * maxSwing));
    });
    return () => unsubscribe();
  }, [mouseX, position, baseAngle]);

  return (
    <motion.svg
      viewBox="0 0 400 800"
      className="w-full h-[150vh] overflow-visible absolute top-0"
      style={{ transformOrigin: "50% -200px" }} 
      animate={{ rotate: angle }}
      transition={{ type: "spring", stiffness: 40, damping: 25, mass: 0.8 }}
    >
      <defs>
        <linearGradient id={`beam-${position}`} x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#FF6B6B" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0.05" />
        </linearGradient>
        <filter id="beamBlur">
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>

      <g style={{ mixBlendMode: "screen" }} className="pointer-events-none">
        <path
          d="M180,20 L220,20 L340,450 L60,450 Z"
          fill={`url(#beam-${position})`}
          filter="url(#beamBlur)"
          opacity="0.70"
        />
      </g>

      <rect x="196" y="-350" width="8" height="330" fill="#111" />
      <ellipse cx="200" cy="-20" rx="35" ry="15" fill="#d4b896" stroke="#000" strokeWidth="2" />
      <path d="M165,-20 L235,-20 L220,20 L180,20 Z" fill="#EAE0C8" stroke="#000" strokeWidth="2" />
      <ellipse cx="200" cy="20" rx="20" ry="6" fill="#fff" filter="drop-shadow(0 0 15px #FF6B6B)" />
    </motion.svg>
  );
}

export default function Hero() {
  const mX = useMotionValue(0);
  const [dist, setDist] = useState(500);

  useEffect(() => {
    mX.set(window.innerWidth / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mX.set(e.clientX);
      const cX = window.innerWidth / 2;
      const cY = window.innerHeight / 2;
      setDist(Math.hypot(e.clientX - cX, e.clientY - cY));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mX]);

  const gI = Math.max(0, 1 - dist / 600);

  const dTS = `0 0 ${20 + gI * 40}px rgba(255, 107, 107, ${0.35 + gI * 0.5}), 0 0 ${40 + gI * 80}px rgba(255, 107, 107, ${0.15 + gI * 0.3})`;

  return (
    <section className="relative h-screen w-full bg-[#050505] flex flex-col items-center justify-center overflow-hidden cursor-none">
      <Cursor />
      <div
        className="absolute inset-0 z-10 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-0 left-[10%] w-[300px] pointer-events-none z-20">
        <InteractiveSpotlight position="left" mouseX={mX} />
      </div>
      <div className="absolute top-0 right-[10%] w-[300px] pointer-events-none z-20">
        <InteractiveSpotlight position="right" mouseX={mX} />
      </div>

      <div className="relative z-30 w-full h-full flex flex-col items-center justify-center">
        <div className="relative z-30 text-center select-none mix-blend-screen flex flex-col items-center">
          
          <motion.h1
            className="text-[10vw] md:text-[11vw] leading-none font-display font-bold tracking-tighter text-white"
            animate={{ textShadow: dTS }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
          >
            RSI STUDIO
          </motion.h1>

          <div className="w-1/3 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-2 mb-8" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="/ecosystem"
              className="inline-block px-8 py-3 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#FF6B6B] hover:text-white transition-colors duration-300 cursor-none relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/50 w-0 group-hover:w-full transition-all duration-300 ease-out skew-x-12 -ml-4" />
              <span className="relative z-10">Start a Project</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}