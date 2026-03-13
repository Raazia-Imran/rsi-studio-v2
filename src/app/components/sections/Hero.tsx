"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, MotionValue } from "framer-motion";

interface SpotlightProps {
  mouseX: MotionValue<number>;
  position: "left" | "right";
}

function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let animationFrameId: number;

    const updateCoordinates = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const renderLoop = () => {
      cursor.style.transform = `translate3d(${mouseX - 12}px, ${mouseY - 12}px, 0)`;
      animationFrameId = window.requestAnimationFrame(renderLoop);
    };

    window.addEventListener("mousemove", updateCoordinates, { passive: true });
    renderLoop();

    return () => {
      window.removeEventListener("mousemove", updateCoordinates);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{
        backgroundColor: "#FF6B6B",
        border: "2px solid #FF6B6B",
        boxShadow: "0 0 15px #FF6B6B, 0 0 30px rgba(255, 107, 107, 0.6)",
        willChange: "transform",
      }}
    />
  );
}

function InteractiveSpotlight({ mouseX, position }: SpotlightProps) {
  const initialSwing = position === "left" ? 45 : -45;
  const [angle, setAngle] = useState(initialSwing);
  const [isTrackingMouse, setIsTrackingMouse] = useState(false);

  useEffect(() => {
    const settleTimer = setTimeout(() => {
      setAngle(0);
    }, 100);

    const trackingTimer = setTimeout(() => {
      setIsTrackingMouse(true);
    }, 1500);

    return () => {
      clearTimeout(settleTimer);
      clearTimeout(trackingTimer);
    };
  }, []);

  useEffect(() => {
    if (!isTrackingMouse) return;

    const unsubscribe = mouseX.on("change", (v: number) => {
      const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1000;
      const normalizedX = (v - screenWidth / 2) / (screenWidth / 2);
      const maxSwing = 3; 
      
      setAngle(normalizedX * maxSwing);
    });
    return () => unsubscribe();
  }, [mouseX, isTrackingMouse]);

  return (
    <motion.div
      className="w-full h-full flex flex-col items-center"
      style={{ 
        transformOrigin: "top center",
        willChange: "transform",
        transform: "translateZ(0)"
      }}
      animate={{ rotate: angle }}
      transition={{ type: "spring", stiffness: 40, damping: 25, mass: 0.8 }}
    >
      <div className="w-[12px] h-[4px] md:w-[16px] md:h-[6px] bg-[#1a1a1a] rounded-b-sm border-b border-white/10 shrink-0" />
      <div className="w-[3px] md:w-[5px] bg-gradient-to-b from-[#111] to-[#333] flex-1" />
      <div className="w-full relative shrink-0 flex flex-col items-center mt-[-2px]">
        <svg viewBox="0 0 400 80" className="w-full h-auto overflow-visible relative z-20">
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
              d="M180,55 L220,55 L380,300 L40,300 Z"
              fill={`url(#beam-${position})`}
              filter="url(#beamBlur)"
              opacity="0.70"
            />
          </g>
          <ellipse cx="200" cy="15" rx="35" ry="15" fill="#d4b896" stroke="#000" strokeWidth="2" />
          <path d="M165,15 L235,15 L220,55 L180,55 Z" fill="#EAE0C8" stroke="#000" strokeWidth="2" />
          <ellipse cx="200" cy="55" rx="20" ry="6" fill="#fff" filter="drop-shadow(0 0 15px #FF6B6B)" />
        </svg>
      </div>
    </motion.div>
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

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mX]);

  const gI = Math.max(0, 1 - dist / 600);
  const dTS = `0 0 ${20 + gI * 40}px rgba(255, 107, 107, ${0.35 + gI * 0.5}), 0 0 ${40 + gI * 80}px rgba(255, 107, 107, ${0.15 + gI * 0.3})`;

  return (
    <section className="relative h-screen w-full bg-[#050505] overflow-hidden flex flex-col items-center">
      <Cursor />
      <div
        className="absolute inset-0 z-10 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-30 w-max h-full flex flex-col items-center justify-center mx-auto">
        <div className="flex-1 w-full relative pointer-events-none">
          <div className="absolute top-0 left-0 w-full bottom-[48px]">
            <div className="absolute top-0 left-[4%] md:left-[6%] -translate-x-1/2 w-[250px] sm:w-[300px] md:w-[390px] h-full">
              <InteractiveSpotlight position="left" mouseX={mX} />
            </div>
            <div className="absolute top-0 right-[4%] md:right-[6%] translate-x-1/2 w-[250px] sm:w-[300px] md:w-[390px] h-full">
              <InteractiveSpotlight position="right" mouseX={mX} />
            </div>
          </div>
        </div>
        <motion.h1
          className="shrink-0 text-[12vw] md:text-[11vw] leading-none font-display font-bold tracking-tighter text-white relative z-40"
          animate={{ textShadow: dTS }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
        >
          RSI STUDIO
        </motion.h1>
        <div className="flex-1 w-full flex flex-col items-center mt-2 z-30 pointer-events-auto">
          <div className="w-[100px] md:w-1/3 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
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