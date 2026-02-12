
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Code2,
  Database,
  ShieldCheck,
  Globe,
  LucideIcon,
} from "lucide-react";

interface LampProps {
  rotation?: number;
}

interface FloatingIconProps {
  Icon: LucideIcon;
  top: string;
  left: string;
  delay: number;
  index: number;
}

const LAMP_COMMON_CLASSES =
  "absolute w-[100px] h-[250px] md:w-[150px] md:h-[350px] pointer-events-none z-20";

const LAMPS_CONFIG = [
  { pos: "-top-20 -left-10", rot: -40 },
  { pos: "-top-20 -right-10", rot: 40 },
  { pos: "-bottom-100 -left-10", rot: 220 },
  { pos: "-bottom-100 -right-10", rot: 135 },
];

const FLOATING_ICONS = [
  { Icon: Monitor, top: "20%", left: "15%", delay: 0 },
  { Icon: Smartphone, top: "60%", left: "80%", delay: 1 },
  { Icon: Code2, top: "25%", left: "75%", delay: 2 },
  { Icon: Database, top: "75%", left: "20%", delay: 1.5 },
  { Icon: ShieldCheck, top: "50%", left: "10%", delay: 0.5 },
  { Icon: Globe, top: "45%", left: "88%", delay: 2.5 },
];

function CoralPinkLamp({ rotation = 0 }: LampProps) {
  return (
    <svg
      viewBox="0 0 300 400"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMin slice"
      className="w-full h-full overflow-visible"
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "top center",
      }}
    >
      <defs>
        <linearGradient id="beamFinal" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#FF6B6B" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0" />
        </linearGradient>
        <filter id="blurFinal">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      <path d="M120,0 L180,0 L170,30 L130,30 Z" fill="#111" />
      <ellipse cx="150" cy="30" rx="15" ry="5" fill="#FF8888" opacity="0.9" />

      <g style={{ mixBlendMode: "screen" }}>
        <path
          d="M130,30 L170,30 L220,300 L80,300 Z"
          fill="url(#beamFinal)"
          filter="url(#blurFinal)"
          opacity="0.7"
        />
      </g>
    </svg>
  );
}

const FloatingIcon = ({ Icon, top, left, delay, index }: FloatingIconProps) => (
  <motion.div
    className="absolute z-10 pointer-events-none"
    style={{ top, left }}
    animate={{ y: [0, -20, 0] }}
    transition={{
      duration: 6 + index,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
  >
    <div className="relative p-2 md:p-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,107,107,0.2)]">
      <Icon
        size={18}
        className="text-white drop-shadow-md md:w-[22px] md:h-[22px]"
        strokeWidth={1.5}
      />
    </div>
  </motion.div>
);

export default function Hero() {
  const targetRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      ref={targetRef}
      className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {FLOATING_ICONS.map((item, i) => (
        <FloatingIcon key={i} {...item} index={i} />
      ))}

      <motion.div
        style={{ opacity, y }}
        className="z-50 flex flex-col items-center relative"
      >
        <div className="relative inline-block px-6 py-4 md:px-12 md:py-8 mt-10">
          {LAMPS_CONFIG.map((lamp, i) => (
            <div key={i} className={`${LAMP_COMMON_CLASSES} ${lamp.pos}`}>
              <CoralPinkLamp rotation={lamp.rot} />
            </div>
          ))}

          <h1
            className="text-[8vw] md:text-[8vw] leading-none font-bold tracking-tighter text-white relative z-50 text-center select-none"
            style={{
              fontFamily: "var(--font-display)",
              textShadow: `
                0 0 15px rgba(255, 107, 107, 0.9), 
                0 0 40px rgba(255, 107, 107, 0.5), 
                0 0 80px rgba(255, 107, 107, 0.2)
              `,
            }}
          >
            RSI STUDIO
          </h1>
        </div>

        <div className="flex items-center gap-4 md:gap-6 overflow-hidden z-50 mt-2">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-[1px] md:h-[2px] w-8 md:w-12 bg-[#FF6B6B]"
          />

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-white text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold drop-shadow-[0_0_5px_#FF6B6B]"
          >
            Perfection in Pixels
          </motion.p>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-[1px] md:h-[2px] w-8 md:w-12 bg-[#FF6B6B]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 relative z-50"
        >
          <button
            onClick={scrollToServices}
            className="relative h-10 md:h-12 w-40 md:w-48 bg-white text-black rounded-full overflow-hidden transition-all duration-300 hover:w-44 md:hover:w-52 hover:shadow-[0_0_20px_#FF6B6B] group flex items-center justify-center"
          >
            <span className="relative z-10 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-bold leading-none ml-1">
              Start Project
            </span>
          </button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-5" />
    </section>
  );
}