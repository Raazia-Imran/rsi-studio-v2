"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function EcosystemPage() {
  const [status, setStatus] = useState("idle"); // idle, warping, arrived
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // --- Warp Speed Canvas Engine (Adapted Exactly from your Code) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; z: number; px: number; py: number }[] =
      [];
    const numStars = 500;

    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * canvas.width,
          px: 0,
          py: 0,
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const speed =
        status === "warping" ? 75 : status === "arrived" ? 1.5 : 0.5;
      // Adapted to RSI Coral Pink (#FF6B6B)
      ctx.strokeStyle =
        status === "warping"
          ? "rgba(255, 107, 107, 0.9)"
          : "rgba(255, 255, 255, 0.4)";
      ctx.lineWidth = status === "warping" ? 4 : 1;

      stars.forEach((s) => {
        s.z -= speed;
        if (s.z <= 0) s.z = canvas.width;

        const x = s.x * (canvas.width / s.z);
        const y = s.y * (canvas.width / s.z);

        if (s.px !== 0) {
          ctx.beginPath();
          ctx.moveTo(x + canvas.width / 2, y + canvas.height / 2);
          ctx.lineTo(s.px + canvas.width / 2, s.py + canvas.height / 2);
          ctx.stroke();
        }
        s.px = x;
        s.py = y;
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [status]);

  const initiateLaunch = () => {
    setStatus("warping");
    // Simulation of the galaxy shoot-through duration
    setTimeout(() => setStatus("arrived"), 2800);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-display text-white selection:bg-[#FF6B6B] selection:text-black">
      {/* BACKGROUND CANVAS */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* SCANLINE OVERLAY (Iron Man HUD Vibe) */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      {/* PHASE 1: TACTICAL COCKPIT */}
      <AnimatePresence>
        {status === "idle" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 2, filter: "blur(10px)" }}
            className="relative z-10 flex flex-col items-center justify-center h-full"
          >
            <div className="mb-4 text-[#FF6B6B] text-[10px] tracking-[0.6em] uppercase font-bold animate-pulse">
              [ Awaiting User Input ]
            </div>
            <h1 className="text-7xl md:text-9xl font-display font-bold tracking-tighter mb-10 text-white">
              RSI{" "}
              <span className="text-[#FF6B6B] drop-shadow-[0_0_15px_rgba(255,107,107,0.5)]">
                ONE
              </span>
            </h1>
            <button
              onClick={initiateLaunch}
              className="px-10 py-5 border border-[#FF6B6B]/50 bg-[#FF6B6B]/10 hover:bg-[#FF6B6B] hover:text-black transition-all duration-300 rounded-sm group overflow-hidden relative"
            >
              <span className="relative z-10 font-bold uppercase tracking-[0.4em] text-xs">
                Initialize Warp
              </span>
              <div className="absolute inset-0 bg-[#FF6B6B]/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
            <Link
              href="/pricing"
              className="mt-8 text-xs uppercase tracking-widest text-white/30 hover:text-white transition-colors"
            >
              Abort Sequence
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PHASE 2: ARRIVAL & NEURAL NODE */}
      <AnimatePresence>
        {status === "arrived" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-20 flex flex-col items-center justify-center h-full"
          >
            {/* THE IRON MAN NEURAL CORE */}
            <div className="relative w-80 h-80 mb-12 flex items-center justify-center">
              {/* Outer Tactical Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[1px] border-dashed border-[#FF6B6B]/40 rounded-full"
              />
              {/* Rotating Brackets */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-2 border-[#FF6B6B]/10 rounded-full border-t-[#FF6B6B]/60 border-b-[#FF6B6B]/60"
              />

              {/* Central Neural Node SVG (Adapted to RSI Pink) */}
              <svg
                width="240"
                height="240"
                viewBox="0 0 200 200"
                className="relative z-10"
              >
                <motion.circle
                  cx="100"
                  cy="100"
                  r="35"
                  fill="rgba(255, 107, 107, 0.1)"
                  stroke="#FF6B6B"
                  strokeWidth="2"
                  animate={{ r: [35, 40, 35], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <g key={i}>
                    <motion.line
                      x1="100"
                      y1="100"
                      x2={100 + 70 * Math.cos((angle * Math.PI) / 180)}
                      y2={100 + 70 * Math.sin((angle * Math.PI) / 180)}
                      stroke="#FF6B6B"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: i * 0.1 }}
                    />
                    <circle
                      cx={100 + 70 * Math.cos((angle * Math.PI) / 180)}
                      cy={100 + 70 * Math.sin((angle * Math.PI) / 180)}
                      r="3"
                      fill="#FF6B6B"
                    />
                  </g>
                ))}
              </svg>

              {/* Floating Data Labels */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-16 top-1/4 text-[9px] font-mono text-[#FF6B6B] bg-[#FF6B6B]/5 p-2 border-l border-[#FF6B6B]"
              >
                SYNCING_SNAPSHOTS...
                <br />
                99.9% UPTIME
              </motion.div>
            </div>

            {/* RSI ONE PHILOSOPHY */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl text-center px-4"
            >
              <h2 className="text-3xl font-display font-bold tracking-[0.3em] uppercase mb-4 text-white">
                The Supercomputer Core
              </h2>
              <p className="text-white/60 font-mono leading-relaxed tracking-wide uppercase text-xs md:text-sm">
                "In a world of noise, RSI is the signal. <br />
                We didn't build an agency; we engineered a neural network <br />
                for the artisan who demands peak execution."
              </p>
            </motion.div>

            <button
              onClick={() => setStatus("idle")}
              className="mt-12 text-[9px] tracking-[0.5em] text-white/30 hover:text-[#FF6B6B] transition uppercase cursor-pointer"
            >
              Term_Exit // Return to Base
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STATIC HUD (IRON MAN PERIPHERALS) */}
      <div className="absolute inset-0 pointer-events-none z-40 border-[1px] border-white/5 m-4 rounded-lg overflow-hidden">
        <div className="absolute top-4 left-4 flex gap-4">
          <div className="h-1 w-12 bg-[#FF6B6B]/40" />
          <div className="h-1 w-4 bg-[#FF6B6B]/20" />
        </div>
        <div className="absolute bottom-4 right-4 text-[8px] font-mono text-[#FF6B6B]/40 uppercase text-right leading-loose">
          RSI_OS :: BUILD_2026.12
          <br />
          STABILITY_INDEX :: 1.0
          <br />
          SECURE_NODE_ACTIVE
        </div>
      </div>
    </div>
  );
}
