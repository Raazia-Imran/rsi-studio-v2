

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import {
  Layout,
  Code2,
  Cpu,
  PenTool,
  Activity,
  Bot,
  LucideIcon,
} from "lucide-react";

// --- Types ---
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface CardProps {
  item: ServiceItem;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

// --- Data ---
const SERVICES_DATA: ServiceItem[] = [
  {
    id: 1,
    title: "Web Design",
    description: "Futuristic UI/UX that captures attention instantly.",
    icon: Layout,
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Web Development",
    description: "Blazing fast Next.js websites built for performance.",
    icon: Code2,
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Custom Software",
    description: "Tailored software solutions to automate your business.",
    icon: Cpu,
    color: "#FFE66D",
  },
  {
    id: 4,
    title: "Blogging",
    description: "SEO-optimized content strategies to rank you higher.",
    icon: PenTool,
    color: "#1A535C",
  },
  {
    id: 5,
    title: "Monthly Presence",
    description: "We manage your digital footprint so you don't have to.",
    icon: Activity,
    color: "#F7FFF7",
  },
  {
    id: 6,
    title: "Web Automations",
    description: "AI-powered bots to handle your repetitive tasks.",
    icon: Bot,
    color: "#FF9F1C",
  },
];

// --- Sub-Component: The Sticky Card ---
const ServiceCard = ({
  item,
  index,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);

  // This magic line creates the "Stacking" scale effect
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          // Stagger the cards slightly so they peek out
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className="relative flex flex-col items-center justify-center w-[90vw] md:w-[70vw] h-[60vh] rounded-3xl border border-white/10 overflow-hidden shadow-2xl origin-top bg-[#0a0a0a]"
      >
        {/* Background Radial Gradient based on Card Color */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${item.color}, transparent 70%)`,
          }}
        />

        <div className="z-10 flex flex-col items-center gap-6 text-center p-8">
          {/* Icon Circle */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
            <item.icon
              size={32}
              className="md:w-[40px] md:h-[40px]"
              color={item.color}
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            {item.title}
          </h2>

          <p className="text-white/60 text-sm md:text-lg font-body max-w-xs md:max-w-lg">
            {item.description}
          </p>
        </div>

        {/* Big Background Number */}
        <span className="absolute bottom-4 right-8 text-[6rem] md:text-[10rem] font-bold text-white/5 select-none pointer-events-none">
          0{item.id}
        </span>
      </motion.div>
    </div>
  );
};

// --- Main Component ---
export default function Services() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // This defines when the animation starts/ends relative to the viewport
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-black pt-20 pb-20"
      id="services"
    >
      {/* Section Header (Stays at the top for a moment) */}
      <div className="text-center mb-12 sticky top-10 z-0">
        <h2 className="text-[#FF6B6B] text-xs font-bold tracking-[0.2em] uppercase">
          OUR EXPERTISE
        </h2>
        <h3 className="text-white text-3xl font-display font-bold mt-2">
          System Capabilities
        </h3>
      </div>

      {/* The Stack Wrapper */}
      <div className="relative z-10">
        {SERVICES_DATA.map((item, index) => {
          // Calculate how much the card should shrink as it stacks
          const targetScale = 1 - (SERVICES_DATA.length - index) * 0.05;

          return (
            <ServiceCard
              key={item.id}
              item={item}
              index={index}
              // Define the scroll range for this specific card
              range={[index * 0.25, 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
}