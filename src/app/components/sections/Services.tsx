// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
// import {
//   Layout,
//   Code2,
//   Cpu,
//   PenTool,
//   Activity,
//   Bot,
//   LucideIcon,
// } from "lucide-react";

// // --- Types ---
// interface ServiceItem {
//   id: number;
//   title: string;
//   description: string;
//   icon: LucideIcon;
//   color: string;
// }

// interface CardProps {
//   item: ServiceItem;
//   index: number;
//   progress: MotionValue<number>;
//   range: [number, number];
//   targetScale: number;
// }

// // --- Data ---
// const SERVICES_DATA: ServiceItem[] = [
//   {
//     id: 1,
//     title: "Web Design",
//     description: "Futuristic UI/UX that captures attention instantly.",
//     icon: Layout,
//     color: "#FF6B6B",
//   },
//   {
//     id: 2,
//     title: "Web Development",
//     description: "Blazing fast Next.js websites built for performance.",
//     icon: Code2,
//     color: "#4ECDC4",
//   },
//   {
//     id: 3,
//     title: "Custom Software",
//     description: "Tailored software solutions to automate your business.",
//     icon: Cpu,
//     color: "#FFE66D",
//   },
//   {
//     id: 4,
//     title: "Blogging",
//     description: "SEO-optimized content strategies to rank you higher.",
//     icon: PenTool,
//     color: "#1A535C",
//   },
//   {
//     id: 5,
//     title: "Monthly Presence",
//     description: "We manage your digital footprint so you don't have to.",
//     icon: Activity,
//     color: "#F7FFF7",
//   },
//   {
//     id: 6,
//     title: "Web Automations",
//     description: "AI-powered bots to handle your repetitive tasks.",
//     icon: Bot,
//     color: "#FF9F1C",
//   },
// ];

// // --- Sub-Component: The Sticky Card ---
// const ServiceCard = ({
//   item,
//   index,
//   progress,
//   range,
//   targetScale,
// }: CardProps) => {
//   const container = useRef(null);

//   // This magic line creates the "Stacking" scale effect
//   const scale = useTransform(progress, range, [1, targetScale]);

//   return (
//     <div
//       ref={container}
//       className="h-screen flex items-center justify-center sticky top-0"
//     >
//       <motion.div
//         style={{
//           scale,
//           // Stagger the cards slightly so they peek out
//           top: `calc(-5vh + ${index * 25}px)`,
//         }}
//         className="relative flex flex-col items-center justify-center w-[90vw] md:w-[70vw] h-[60vh] rounded-3xl border border-white/10 overflow-hidden shadow-2xl origin-top bg-[#0a0a0a]"
//       >
//         {/* Background Radial Gradient based on Card Color */}
//         <div
//           className="absolute inset-0 opacity-10 pointer-events-none"
//           style={{
//             background: `radial-gradient(circle at center, ${item.color}, transparent 70%)`,
//           }}
//         />

//         <div className="z-10 flex flex-col items-center gap-6 text-center p-8">
//           {/* Icon Circle */}
//           <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
//             <item.icon
//               size={32}
//               className="md:w-[40px] md:h-[40px]"
//               color={item.color}
//             />
//           </div>

//           <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
//             {item.title}
//           </h2>

//           <p className="text-white/60 text-sm md:text-lg font-body max-w-xs md:max-w-lg">
//             {item.description}
//           </p>
//         </div>

//         {/* Big Background Number */}
//         <span className="absolute bottom-4 right-8 text-[6rem] md:text-[10rem] font-bold text-white/5 select-none pointer-events-none">
//           0{item.id}
//         </span>
//       </motion.div>
//     </div>
//   );
// };

// // --- Main Component ---
// export default function Services() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     // This defines when the animation starts/ends relative to the viewport
//     offset: ["start start", "end end"],
//   });

//   return (
//     <section
//       ref={containerRef}
//       className="relative bg-black pt-20 pb-20"
//       id="services"
//     >
//       {/* Section Header (Stays at the top for a moment) */}
//       <div className="text-center mb-12 sticky top-10 z-0">
//         <h2 className="text-[#FF6B6B] text-xs font-bold tracking-[0.2em] uppercase">
//           OUR EXPERTISE
//         </h2>
//         <h3 className="text-white text-3xl font-display font-bold mt-2">
//           System Capabilities
//         </h3>
//       </div>

//       {/* The Stack Wrapper */}
//       <div className="relative z-10">
//         {SERVICES_DATA.map((item, index) => {
//           // Calculate how much the card should shrink as it stacks
//           const targetScale = 1 - (SERVICES_DATA.length - index) * 0.05;

//           return (
//             <ServiceCard
//               key={item.id}
//               item={item}
//               index={index}
//               // Define the scroll range for this specific card
//               range={[index * 0.25, 1]}
//               targetScale={targetScale}
//               progress={scrollYProgress}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";

// export default function Services() {
//   return (
//     <section className="bg-black py-32 px-4 relative overflow-hidden">
//       <div className="container mx-auto max-w-6xl relative z-10">
//         {/* Header matching SRS theme */}
//         <div className="text-center mb-24">
//           <h2 className="text-[#FF6B6B] text-xs font-mono uppercase tracking-[0.4em] mb-4">
//             Core Capabilities
//           </h2>
//           <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter">
//             Engineered For Dominance
//           </h1>
//         </div>

//         {/* Central Hub with glowing node */}
//         <div className="relative flex justify-center items-center mb-16 h-40">
//           <div className="absolute w-[80%] h-[1px] bg-white/10" />
//           <div className="absolute h-full w-[1px] bg-white/10" />
//           <div className="z-10 w-24 h-24 bg-[#a655ff]/20 border border-[#a655ff]/50 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(166,85,255,0.4)] backdrop-blur-md">
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_white]">
//               <span className="text-black font-bold">AI</span>
//             </div>
//           </div>
//         </div>

//         {/* The 3 Specific Screenshot Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Card 1 */}
//           <motion.div
//             whileHover={{ y: -5 }}
//             className="bg-[#0a0a0f] border border-[#a655ff]/20 rounded-2xl p-8 hover:border-[#a655ff]/50 transition-all duration-300 shadow-xl"
//           >
//             <h3 className="text-xl font-display font-bold text-white mb-4 italic tracking-wide">
//               Smarter & Faster Wireframes
//             </h3>
//             <p className="text-white/50 text-sm leading-relaxed">
//               We rapidly turn ideas into functional wireframes using AI tools,
//               with less guesswork and faster validation for your product.
//             </p>
//           </motion.div>

//           {/* Card 2 */}
//           <motion.div
//             whileHover={{ y: -5 }}
//             className="bg-[#0a0a0f] border border-[#a655ff]/20 rounded-2xl p-8 hover:border-[#a655ff]/50 transition-all duration-300 shadow-xl"
//           >
//             <h3 className="text-xl font-display font-bold text-white mb-4 italic tracking-wide">
//               Launch Quicker, Spend Less
//             </h3>
//             <p className="text-white/50 text-sm leading-relaxed">
//               AI reduces revisions and guesswork and makes your website ready to
//               launch faster than traditional agency timelines.
//             </p>
//           </motion.div>

//           {/* Card 3 */}
//           <motion.div
//             whileHover={{ y: -5 }}
//             className="bg-[#0a0a0f] border border-[#a655ff]/20 rounded-2xl p-8 hover:border-[#a655ff]/50 transition-all duration-300 shadow-xl"
//           >
//             <h3 className="text-xl font-display font-bold text-white mb-4 italic tracking-wide">
//               No Blank Canvas Struggles
//             </h3>
//             <p className="text-white/50 text-sm leading-relaxed">
//               AI generates editable mockups from prompts so we can skip the slow
//               start and jump straight into high-fidelity design execution.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Layout, Code2, Cpu, PenTool, Activity, Bot } from "lucide-react";

export default function Services() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#050505] py-24 flex flex-col items-center justify-center overflow-hidden font-sans"
      id="services"
    >
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center z-40">
        <h2 className="text-[#FF6B6B] text-[20px] font-bold tracking-[0.2em] uppercase mb-2">
          System Capabilities
        </h2>
        <h2 className="text-white text-xl md:text-3xl font-display font-medium tracking-wide">
          Our Services
        </h2>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF6B6B]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="w-full mt-10 flex justify-center overflow-x-auto overflow-y-hidden px-4 no-scrollbar">
        <div className="relative min-w-[1200px] h-[800px] z-10 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <linearGradient
                id="coralFlow"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0.1" />
              </linearGradient>
              <filter
                id="coreGlow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none">
              <path d="M 600 400 C 600 340, 250 340, 250 280" />
              <path d="M 600 400 L 600 280" />
              <path d="M 600 400 C 600 340, 950 340, 950 280" />
              <path d="M 600 400 C 600 460, 250 460, 250 520" />
              <path d="M 600 400 L 600 520" />
              <path d="M 600 400 C 600 460, 950 460, 950 520" />
            </g>

            <g
              stroke="url(#coralFlow)"
              strokeWidth="2"
              fill="none"
              filter="url(#coreGlow)"
            >
              {[
                { path: "M 600 400 C 600 340, 250 340, 250 280", delay: 0 },
                { path: "M 600 400 L 600 280", delay: 1 },
                { path: "M 600 400 C 600 340, 950 340, 950 280", delay: 0.5 },
                { path: "M 600 400 C 600 460, 250 460, 250 520", delay: 1.5 },
                { path: "M 600 400 L 600 520", delay: 0.2 },
                { path: "M 600 400 C 600 460, 950 460, 950 520", delay: 0.8 },
              ].map((line, i) => (
                <motion.path
                  key={i}
                  d={line.path}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                  transition={{
                    duration: 4,
                    delay: line.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </g>
          </svg>

          <div className="absolute top-[350px] left-[550px] w-[100px] h-[100px] z-30 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[-30px] rounded-full border border-[#FF6B6B]/20"
            />
            <div
              className="absolute -inset-2 rounded-full border border-[#FF6B6B]/40 animate-[spin_10s_linear_infinite]"
              style={{ borderTopColor: "transparent" }}
            />

            <div className="relative w-[70px] h-[70px] rounded-full bg-[#0A0A0A] shadow-[0_0_40px_rgba(255,107,107,0.4)] flex items-center justify-center border border-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/20 to-transparent" />
              <div className="text-white font-display font-bold text-sm tracking-widest relative z-10">
                RSI
              </div>
            </div>
          </div>

          <div className="absolute top-[40px] left-[80px] w-[340px] h-[240px] rounded-2xl bg-[#0D0D12] border border-white/10 p-5 flex flex-col shadow-2xl z-20">
            <div className="flex items-center gap-3 mb-3">
              <Layout size={18} className="text-[#FF6B6B]" />
              <h3 className="text-[13px] font-bold text-white uppercase tracking-wider">
                Web Design
              </h3>
            </div>

            <div className="w-full h-[90px] bg-[#111] rounded-lg border border-white/5 relative overflow-hidden mb-4 p-2 flex gap-2">
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="w-1/4 h-full bg-white/5 rounded-md border border-white/5 flex flex-col gap-1.5 p-1.5"
              >
                <div className="w-full h-2 bg-[#FF6B6B]/40 rounded-sm mb-1" />
                <div className="w-2/3 h-1 bg-white/10 rounded-sm" />
                <div className="w-full h-1 bg-white/10 rounded-sm" />
                <div className="w-4/5 h-1 bg-white/10 rounded-sm" />
              </motion.div>

              <div className="flex-1 flex flex-col gap-2">
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="w-full h-3 bg-white/5 rounded-md border border-white/5 flex justify-end items-center p-1"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B]/60 shadow-[0_0_4px_#FF6B6B]" />
                </motion.div>

                <div className="flex-1 flex gap-2">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 2,
                      delay: 0.6,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                    className="flex-1 h-full bg-gradient-to-br from-[#FF6B6B]/10 to-transparent border border-[#FF6B6B]/20 rounded-md relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ top: ["-100%", "200%"] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute left-0 right-0 h-4 bg-[#FF6B6B]/30 blur-sm"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 2,
                      delay: 0.9,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                    className="w-1/3 h-full bg-white/5 rounded-md border border-white/5"
                  />
                </div>
              </div>
            </div>

            <p className="text-xs text-white/50 font-medium leading-relaxed">
              Futuristic UI/UX that captures attention instantly.
            </p>
          </div>

          <div className="absolute top-[40px] left-[430px] w-[340px] h-[240px] rounded-2xl bg-[#0D0D12] border border-white/10 p-5 flex flex-col shadow-2xl z-20">
            <div className="flex items-center gap-3 mb-3">
              <Code2 size={18} className="text-[#FF6B6B]" />
              <h3 className="text-[13px] font-bold text-white uppercase tracking-wider">
                Web Development
              </h3>
            </div>
            <div className="w-full h-[90px] bg-[#111] rounded-lg border border-white/5 relative overflow-hidden mb-4 flex items-center px-4 gap-4">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="28"
                    cy="28"
                    r="24"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="4"
                    fill="none"
                  />
                  <motion.circle
                    cx="28"
                    cy="28"
                    r="24"
                    stroke="#FF6B6B"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="150"
                    animate={{ strokeDashoffset: [150, 0, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </svg>
                <span className="absolute text-[10px] font-bold text-white">
                  100
                </span>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-2 w-full bg-white/10 rounded-sm" />
                <div className="h-2 w-3/4 bg-white/10 rounded-sm" />
                <div className="h-2 w-1/2 bg-white/10 rounded-sm" />
              </div>
            </div>
            <p className="text-xs text-white/50 font-medium leading-relaxed">
              Blazing fast Next.js websites built for performance.
            </p>
          </div>

          <div className="absolute top-[40px] left-[780px] w-[340px] h-[240px] rounded-2xl bg-[#0D0D12] border border-white/10 p-5 flex flex-col shadow-2xl z-20">
            <div className="flex items-center gap-3 mb-3">
              <Cpu size={18} className="text-[#FF6B6B]" />
              <h3 className="text-[13px] font-bold text-white uppercase tracking-wider">
                Custom Software
              </h3>
            </div>
            <div className="w-full h-[90px] bg-[#111] rounded-lg border border-white/5 relative overflow-hidden mb-4 flex items-center justify-center gap-6">
              <div className="w-8 h-8 rounded-md border border-white/10 flex items-center justify-center bg-white/5 z-10">
                <Cpu size={12} className="text-white/40" />
              </div>
              <div className="w-10 h-10 rounded-md border border-[#FF6B6B]/40 flex items-center justify-center bg-[#FF6B6B]/10 shadow-[0_0_15px_rgba(255,107,107,0.2)] z-10">
                <Code2 size={14} className="text-[#FF6B6B]" />
              </div>
              <div className="w-8 h-8 rounded-md border border-white/10 flex items-center justify-center bg-white/5 z-10">
                <Cpu size={12} className="text-white/40" />
              </div>

              <div className="absolute left-16 right-16 h-[1px] bg-white/10 top-1/2 -translate-y-1/2 z-0" />
              <div className="absolute left-16 right-16 h-[1px] bg-transparent top-1/2 -translate-y-1/2 z-0 overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-1/3 h-full bg-[#FF6B6B] shadow-[0_0_8px_#FF6B6B]"
                />
              </div>
            </div>
            <p className="text-xs text-white/50 font-medium leading-relaxed">
              Tailored software solutions to automate your business.
            </p>
          </div>

          <div className="absolute top-[520px] left-[80px] w-[340px] h-[240px] rounded-2xl bg-[#0D0D12] border border-white/10 p-5 flex flex-col shadow-2xl z-20">
            <div className="flex items-center gap-3 mb-3">
              <PenTool size={18} className="text-[#FF6B6B]" />
              <h3 className="text-[13px] font-bold text-white uppercase tracking-wider">
                Blogging
              </h3>
            </div>
            <div className="w-full h-[90px] bg-[#111] rounded-lg border border-white/5 relative overflow-hidden mb-4 flex items-end justify-between px-4 pb-3 pt-4 gap-2">
              {[20, 35, 25, 50, 45, 70, 90].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: "10%" }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 2, delay: i * 0.1, ease: "easeOut" }}
                  className={`w-full rounded-t-sm ${height === 90 ? "bg-[#FF6B6B] shadow-[0_0_10px_rgba(255,107,107,0.4)]" : "bg-white/10"}`}
                />
              ))}
            </div>
            <p className="text-xs text-white/50 font-medium leading-relaxed">
              SEO-optimized content strategies to rank you higher.
            </p>
          </div>

          <div className="absolute top-[520px] left-[430px] w-[340px] h-[240px] rounded-2xl bg-[#0D0D12] border border-white/10 p-5 flex flex-col shadow-2xl z-20">
            <div className="flex items-center gap-3 mb-3">
              <Activity size={18} className="text-[#FF6B6B]" />
              <h3 className="text-[13px] font-bold text-white uppercase tracking-wider">
                Monthly Presence
              </h3>
            </div>
            <div className="w-full h-[90px] bg-[#111] rounded-lg border border-white/5 relative overflow-hidden mb-4 flex items-center justify-center p-2">
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 40"
              >
                <motion.path
                  d="M 0 20 Q 25 5, 50 20 T 100 20"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                  fill="none"
                />
                <motion.path
                  d="M 0 20 Q 25 5, 50 20 T 100 20"
                  stroke="#FF6B6B"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    filter: "drop-shadow(0px 0px 4px rgba(255,107,107,0.5))",
                  }}
                />
              </svg>
            </div>
            <p className="text-xs text-white/50 font-medium leading-relaxed">
              We manage your digital footprint so you don't have to.
            </p>
          </div>

          <div className="absolute top-[520px] left-[780px] w-[340px] h-[240px] rounded-2xl bg-[#0D0D12] border border-white/10 p-5 flex flex-col shadow-2xl z-20">
            <div className="flex items-center gap-3 mb-3">
              <Bot size={18} className="text-[#FF6B6B]" />
              <h3 className="text-[13px] font-bold text-white uppercase tracking-wider">
                Web Automations
              </h3>
            </div>
            <div className="w-full h-[90px] bg-[#111] rounded-lg border border-white/5 relative overflow-hidden mb-4 p-3 flex flex-col justify-center gap-3">
              {[
                { width: "100%", opacity: 1 },
                { width: "70%", opacity: 0.7 },
                { width: "40%", opacity: 0.4 },
              ].map((bar, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-white/5 flex items-center justify-center border border-white/10">
                    <Bot size={8} className="text-white/40" />
                  </div>
                  <div className="flex-1 h-1.5 bg-black rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: bar.width }}
                      transition={{
                        duration: 2,
                        delay: i * 0.4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                      className="h-full bg-[#FF6B6B] rounded-full"
                      style={{ opacity: bar.opacity }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/50 font-medium leading-relaxed">
              AI-powered bots to handle your repetitive tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

