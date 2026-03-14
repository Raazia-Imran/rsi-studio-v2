"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Activity,
  Terminal,
} from "lucide-react";

// --- Functional Data Models ---
const BUDGET_RANGES = ["$2k - $5k", "$5k - $10k", "$10k - $25k", "$25k+"];

const PROJECT_TYPES = [
  "Web Application",
  "Corporate Website",
  "SaaS Platform",
  "Managed Presence",
];

// --- Generic "Stealth Mode" Ecosystem Projects Data ---
const ECOSYSTEM_LOGS = [
  {
    id: "NODE-01",
    name: "Project Alpha [Redacted]",
    status: "Active Network",
    type: "Enterprise SaaS",
    impact: "Scalability Matrix",
    desc: "Details for this enterprise-grade node are currently classified under client NDA. Architectural framework focuses on high-availability and global data synchronization.",
    color: "from-[#0f2027] to-[#2c5364]",
  },
  {
    id: "NODE-02",
    name: "Project Beta [Stealth]",
    status: "In Development",
    type: "FinTech Architecture",
    impact: "Zero-Latency Routing",
    desc: "A stealth-mode financial technology platform. Engineered for real-time transaction processing with military-grade encryption protocols and distributed ledger sync.",
    color: "from-[#1A1A1A] to-[#0A0A0F]",
  },
  {
    id: "NODE-03",
    name: "Project Gamma [Init]",
    status: "Awaiting Input",
    type: "Data Visualization",
    impact: "Real-Time Sync",
    desc: "A high-performance dashboard currently in the wireframing phase. Built to handle complex telemetry data and seamless cross-platform connectivity.",
    color: "from-[#2A1B1B] to-[#050505]",
  },
];

export default function EcosystemPage() {
  const [status, setStatus] = useState("idle"); // idle, warping, arrived
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Form States
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // --- Dynamic Warp Speed Canvas Engine ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; z: number; px: number; py: number }[] =
      [];
    const numStars = 600;

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

      const speed = status === "warping" ? 80 : status === "arrived" ? 1 : 0.5;
      ctx.strokeStyle =
        status === "warping"
          ? "rgba(255, 107, 107, 0.9)"
          : "rgba(255, 255, 255, 0.5)";
      ctx.lineWidth = status === "warping" ? 3 : 1;

      stars.forEach((s) => {
        s.z -= speed;
        if (s.z <= 0) {
          s.z = canvas.width;
          s.px = 0;
          s.py = 0;
        }

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
    setTimeout(() => setStatus("arrived"), 2500);
  };

  return (
    <div className="relative w-full h-screen overflow-x-hidden overflow-y-auto bg-black font-display text-white selection:bg-[#FF6B6B] selection:text-black">
      {/* 1. BACKGROUND CANVAS */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      {/* 2. SCANLINE OVERLAY */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      {/* 3. PHASE 1: IDLE / HERO SCREEN */}
      <AnimatePresence>
        {status === "idle" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 2, filter: "blur(20px)" }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ rotateX: 60, rotateZ: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"
            />

            <div className="mb-6 text-[#FF6B6B] text-[10px] tracking-[0.6em] uppercase font-bold animate-pulse">
              [ System Standby ]
            </div>

            <h1 className="text-7xl md:text-[9rem] font-display font-bold tracking-tighter mb-4 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              RSI{" "}
              <span className="text-[#FF6B6B] drop-shadow-[0_0_50px_rgba(255,107,107,0.4)]">
                ONE
              </span>
            </h1>

            <p className="text-white/50 max-w-md text-center text-sm leading-relaxed mb-12 px-6">
              You are about to enter the exclusive RSI enterprise network. Align
              your engineering resources with our strategic objectives.
            </p>

            <button
              onClick={initiateLaunch}
              className="px-12 py-5 border border-[#FF6B6B]/50 bg-[#FF6B6B]/10 hover:bg-[#FF6B6B] hover:text-black transition-all duration-500 rounded-full group overflow-hidden relative shadow-[0_0_30px_rgba(255,107,107,0.2)]"
            >
              <span className="relative z-10 font-bold uppercase tracking-[0.3em] text-xs">
                Initiate Project
              </span>
              <div className="absolute inset-0 bg-[#FF6B6B]/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>

            <Link
              href="/"
              className="mt-8 text-[10px] font-mono uppercase tracking-widest text-white/30 hover:text-white transition-colors relative z-20"
            >
              ← Return to Base
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. PHASE 2: ARRIVED / FORM + ECOSYSTEM PROJECTS */}
      <AnimatePresence>
        {status === "arrived" && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 container mx-auto max-w-7xl px-6 pt-32 pb-32 flex flex-col items-center"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4 drop-shadow-lg">
                DEFINE <span className="text-[#FF6B6B]">PARAMETERS</span>
              </h2>
              <p className="text-white/50 font-mono text-xs uppercase tracking-widest">
                Secure Connection Established. Awaiting Input.
              </p>
            </div>

            {/* THE FORM CARD */}
            <div className="w-full max-w-6xl bg-[#0A0A0F]/80 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden mb-24">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
                {/* Left Column: Selections */}
                <div className="space-y-12">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] animate-pulse" />
                      Select Architecture
                    </h3>
                    <div className="flex flex-col gap-3">
                      {PROJECT_TYPES.map((type) => (
                        <button
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className={`text-left px-6 py-4 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                            selectedType === type
                              ? "bg-[#FF6B6B]/10 border-[#FF6B6B]/50 text-white shadow-[0_0_20px_rgba(255,107,107,0.1)]"
                              : "bg-white/[0.02] border-white/5 text-white/50 hover:bg-white/[0.05] hover:text-white"
                          }`}
                        >
                          <span className="font-bold text-sm tracking-wide">
                            {type}
                          </span>
                          {selectedType === type ? (
                            <CheckCircle2
                              size={18}
                              className="text-[#FF6B6B]"
                            />
                          ) : (
                            <ChevronRight
                              size={18}
                              className="text-white/20 group-hover:text-white/50"
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] animate-pulse" />
                      Capital Allocation
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {BUDGET_RANGES.map((budget) => (
                        <button
                          key={budget}
                          onClick={() => setSelectedBudget(budget)}
                          className={`py-4 rounded-xl border transition-all duration-300 font-mono text-sm text-center ${
                            selectedBudget === budget
                              ? "bg-[#FF6B6B] border-[#FF6B6B] text-black font-bold shadow-[0_0_15px_rgba(255,107,107,0.3)]"
                              : "bg-white/[0.02] border-white/5 text-white/50 hover:bg-white/[0.05] hover:text-white"
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Text Inputs */}
                <div className="flex flex-col justify-between space-y-8">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] animate-pulse" />
                      Identify Node
                    </h3>

                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Entity Name (e.g. Acme Corp)"
                        className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6B6B]/50 focus:bg-white/[0.04] transition-all"
                      />
                      <input
                        type="email"
                        placeholder="Primary Comms (Email)"
                        className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6B6B]/50 focus:bg-white/[0.04] transition-all"
                      />
                      <textarea
                        placeholder="Describe your architectural objectives..."
                        rows={4}
                        className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6B6B]/50 focus:bg-white/[0.04] transition-all resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="w-full bg-white text-black py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#FF6B6B] transition-colors flex items-center justify-center gap-3 group">
                      Transmit Request
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* --- NEW SECTION: ACTIVE ECOSYSTEM PROJECTS --- */}
            <div className="w-full">
              {/* Divider / Title */}
              <div className="flex items-center gap-4 mb-12 w-full">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10" />
                <h3 className="text-white/50 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] flex items-center gap-2 px-4 whitespace-nowrap">
                  <Activity
                    size={14}
                    className="text-[#FF6B6B] animate-pulse"
                  />{" "}
                  Active Network Logs
                </h3>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10" />
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ECOSYSTEM_LOGS.map((log) => (
                  <motion.div
                    key={log.id}
                    whileHover={{ y: -5 }}
                    className={`bg-gradient-to-br ${log.color} p-[1px] rounded-3xl overflow-hidden group cursor-crosshair`}
                  >
                    <div className="bg-[#050505]/90 backdrop-blur-xl w-full h-full rounded-[23px] p-8 flex flex-col justify-between relative overflow-hidden">
                      {/* Background Glow */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B6B]/5 rounded-full blur-3xl group-hover:bg-[#FF6B6B]/10 transition-colors" />

                      <div>
                        <div className="flex justify-between items-start mb-6 relative z-10">
                          <span className="text-[10px] font-mono text-white/30 group-hover:text-white/60 transition-colors">
                            [{log.id}]
                          </span>
                          <Terminal
                            size={14}
                            className="text-white/20 group-hover:text-[#FF6B6B] transition-colors"
                          />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-2 leading-tight relative z-10">
                          {log.name}
                        </h4>
                        <p className="text-[#FF6B6B] text-[10px] font-mono uppercase tracking-widest mb-4 relative z-10">
                          {log.type}
                        </p>
                        <p className="text-white/60 text-xs leading-relaxed border-l border-white/10 pl-4 mb-8 relative z-10">
                          {log.desc}
                        </p>
                      </div>

                      <div className="border-t border-white/10 pt-4 flex justify-between items-center relative z-10">
                        <div>
                          <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1">
                            Status
                          </p>
                          <p className="text-xs text-white font-medium flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />{" "}
                            {log.status}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1">
                            Metric
                          </p>
                          <p className="text-xs text-[#FF6B6B] font-bold">
                            {log.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
