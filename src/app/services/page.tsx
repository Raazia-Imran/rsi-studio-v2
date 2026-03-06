// "use client";

// import { motion } from "framer-motion";

// const SERVICES_LEFT = [
//   {
//     id: "01",
//     title: "Web Design",
//     desc: "Futuristic UI/UX engineered for high-end aesthetic dominance.",
//   },
//   {
//     id: "02",
//     title: "Web Dev",
//     desc: "Blazing fast React & Next.js architectures built for scaling.",
//   },
//   {
//     id: "03",
//     title: "Custom Soft",
//     desc: "Scalable backend solutions and bespoke enterprise tools.",
//   },
// ];

// const SERVICES_RIGHT = [
//   {
//     id: "04",
//     title: "Blogging",
//     desc: "SEO-optimized technical content to capture industry authority.",
//   },
//   {
//     id: "05",
//     title: "Monthly SEO",
//     desc: "Continuous monitoring, geo-optimization, and maintenance.",
//   },
//   {
//     id: "06",
//     title: "Automations",
//     desc: "AI-driven workflows and logic to eliminate repetitive tasks.",
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <main className="bg-black min-h-screen pt-32 pb-40 px-4 md:px-6 text-white selection:bg-[#FF6B6B] selection:text-black overflow-hidden">
//       {/* Header Area */}
//       <section className="container mx-auto text-center mb-24 relative z-20">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-[#FF6B6B] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4"
//         >
//           System Capabilities
//         </motion.h2>
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter"
//         >
//           THE CORE ENGINE
//         </motion.h1>
//       </section>

//       {/* The Network Hub Layout */}
//       <section className="container mx-auto relative max-w-7xl min-h-[800px] flex items-center justify-center">
//         {/* 1. SVG RAYS (The Connecting Lines - Desktop Only) */}
//         <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0">
//           <defs>
//             {/* Glowing Gradient for the lines */}
//             <linearGradient
//               id="rayGradient"
//               x1="50%"
//               y1="50%"
//               x2="100%"
//               y2="100%"
//             >
//               <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.8" />
//               <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0.1" />
//             </linearGradient>
//           </defs>

//           {/* Lines pointing to Left Boxes */}
//           <motion.line
//             initial={{ pathLength: 0 }}
//             whileInView={{ pathLength: 1 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             x1="50%"
//             y1="50%"
//             x2="30%"
//             y2="16%"
//             stroke="#FF6B6B"
//             strokeWidth="1"
//             strokeDasharray="4 4"
//             opacity="0.4"
//           />
//           <motion.line
//             initial={{ pathLength: 0 }}
//             whileInView={{ pathLength: 1 }}
//             transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
//             x1="50%"
//             y1="50%"
//             x2="30%"
//             y2="50%"
//             stroke="#FF6B6B"
//             strokeWidth="1"
//             strokeDasharray="4 4"
//             opacity="0.4"
//           />
//           <motion.line
//             initial={{ pathLength: 0 }}
//             whileInView={{ pathLength: 1 }}
//             transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
//             x1="50%"
//             y1="50%"
//             x2="30%"
//             y2="84%"
//             stroke="#FF6B6B"
//             strokeWidth="1"
//             strokeDasharray="4 4"
//             opacity="0.4"
//           />

//           {/* Lines pointing to Right Boxes */}
//           <motion.line
//             initial={{ pathLength: 0 }}
//             whileInView={{ pathLength: 1 }}
//             transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
//             x1="50%"
//             y1="50%"
//             x2="70%"
//             y2="16%"
//             stroke="#FF6B6B"
//             strokeWidth="1"
//             strokeDasharray="4 4"
//             opacity="0.4"
//           />
//           <motion.line
//             initial={{ pathLength: 0 }}
//             whileInView={{ pathLength: 1 }}
//             transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
//             x1="50%"
//             y1="50%"
//             x2="70%"
//             y2="50%"
//             stroke="#FF6B6B"
//             strokeWidth="1"
//             strokeDasharray="4 4"
//             opacity="0.4"
//           />
//           <motion.line
//             initial={{ pathLength: 0 }}
//             whileInView={{ pathLength: 1 }}
//             transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
//             x1="50%"
//             y1="50%"
//             x2="70%"
//             y2="84%"
//             stroke="#FF6B6B"
//             strokeWidth="1"
//             strokeDasharray="4 4"
//             opacity="0.4"
//           />
//         </svg>

//         {/* 2. THE CENTRAL CIRCLE (The Core) */}
//         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center">
//           {/* Outer Pulse */}
//           <div className="absolute w-64 h-64 bg-[#FF6B6B]/10 rounded-full blur-[50px] animate-pulse" />

//           {/* The 1% Gold Ring (As requested in SRS) */}
//           <div className="absolute w-40 h-40 border border-[#D4AF37]/30 rounded-full animate-[spin_10s_linear_infinite]" />
//           <div className="absolute w-32 h-32 border border-[#FF6B6B]/50 border-t-transparent rounded-full animate-[spin_4s_linear_infinite_reverse]" />

//           {/* Center Hub */}
//           <div className="w-24 h-24 bg-black border border-[#FF6B6B] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,107,107,0.4)] relative">
//             <div className="w-2 h-2 bg-white rounded-full animate-ping" />
//             <span className="absolute -bottom-8 text-[9px] text-[#FF6B6B] tracking-[0.3em] font-mono uppercase">
//               System Node
//             </span>
//           </div>
//         </div>

//         {/* 3. THE LINKED BOXES (Grid Layout) */}
//         <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 relative z-10">
//           {/* Left Column (Boxes 1, 2, 3) */}
//           <div className="flex flex-col justify-between gap-6 lg:gap-24 lg:py-12 items-center lg:items-end text-center lg:text-right">
//             {SERVICES_LEFT.map((service, i) => (
//               <ServiceBox
//                 key={service.id}
//                 service={service}
//                 delay={i * 0.2}
//                 align="right"
//               />
//             ))}
//           </div>

//           {/* Middle Column (Empty space to let the Center Circle breathe) */}
//           <div className="hidden lg:block pointer-events-none" />

//           {/* Right Column (Boxes 4, 5, 6) */}
//           <div className="flex flex-col justify-between gap-6 lg:gap-24 lg:py-12 items-center lg:items-start text-center lg:text-left">
//             {SERVICES_RIGHT.map((service, i) => (
//               <ServiceBox
//                 key={service.id}
//                 service={service}
//                 delay={i * 0.2 + 0.1}
//                 align="left"
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// // Sub-Component for the specific Boxes
// function ServiceBox({
//   service,
//   delay,
//   align,
// }: {
//   service: any;
//   delay: number;
//   align: "left" | "right";
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay }}
//       className={`relative group w-full max-w-[320px] bg-[#050505] border border-white/10 rounded-2xl p-8 hover:border-[#FF6B6B]/50 hover:bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 shadow-2xl z-10`}
//     >
//       {/* Small connection dot on the box edge */}
//       <div
//         className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF6B6B] hidden lg:block ${align === "right" ? "-right-1" : "-left-1"}`}
//       />

//       <span className="text-[#FF6B6B] font-mono text-xs tracking-widest block mb-4">
//         /{service.id}
//       </span>
//       <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-[#FF6B6B] transition-colors">
//         {service.title}
//       </h3>
//       <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
//         {service.desc}
//       </p>

//       {/* Subtle Gold accent on hover inside the box (SRS rule) */}
//       <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";

const SERVICES_LEFT = [
  {
    id: "01",
    title: "Web Design",
    desc: "Futuristic UI/UX engineered for high-end aesthetic dominance.",
  },
  {
    id: "02",
    title: "Web Dev",
    desc: "Blazing fast React & Next.js architectures built for scaling.",
  },
  {
    id: "03",
    title: "Custom Soft",
    desc: "Scalable backend solutions and bespoke enterprise tools.",
  },
];

const SERVICES_RIGHT = [
  {
    id: "04",
    title: "Blogging",
    desc: "SEO-optimized technical content to capture industry authority.",
  },
  {
    id: "05",
    title: "Monthly SEO",
    desc: "Continuous monitoring, geo-optimization, and maintenance.",
  },
  {
    id: "06",
    title: "Automations",
    desc: "AI-driven workflows and logic to eliminate repetitive tasks.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-black min-h-screen pt-32 pb-40 px-4 md:px-6 text-white selection:bg-[#FF6B6B] selection:text-black overflow-hidden relative">
      {/* --- ENHANCED HEADER (THE SYSTEM HUD) --- */}
      <section className="container mx-auto text-center mb-20 md:mb-32 relative z-30 pt-10">
        {/* HUD Elements (Left & Right) - Hidden on mobile for absolute cleanliness */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden md:flex absolute top-0 left-4 lg:left-10 flex-col text-left"
        >
          <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">
            Live Status
          </span>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-1.5 h-1.5 bg-[#FF6B6B] rounded-full animate-pulse" />
            <span className="text-xs font-mono text-[#FF6B6B] tracking-widest">
              OPTIMAL
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden md:flex absolute top-0 right-4 lg:right-10 flex-col text-right"
        >
          <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">
            Network Load
          </span>
          <span className="text-xs font-mono text-white/60 mt-1 tracking-widest">
            12.4% / SECURE
          </span>
        </motion.div>

        {/* Main Title Architecture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative inline-block"
        >
          <h2 className="text-[#FF6B6B] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-8">
            System Capabilities
          </h2>

          <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-display font-bold tracking-tighter leading-[0.85] relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 block">
              THE CORE
            </span>
            <span className="text-white relative inline-block mt-2">
              ENGINE
              {/* Subtle Glowing Under-Rail */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-[#FF6B6B]/80 to-transparent opacity-50" />
            </span>
          </h1>
        </motion.div>

        {/* Elite Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-xl mx-auto text-white/40 text-sm md:text-base font-light mt-16 leading-relaxed"
        >
          A synchronized matrix of high-performance modules. We do not offer
          menus; we deploy engineered dominance tailored for the top 1%.
        </motion.p>
      </section>

      {/* --- THE NETWORK HUB (Unchanged, already perfect) --- */}
      <section className="container mx-auto relative max-w-7xl min-h-[800px] flex items-center justify-center">
        {/* SVG RAYS */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0">
          <defs>
            <linearGradient
              id="rayGradient"
              x1="50%"
              y1="50%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            x1="50%"
            y1="50%"
            x2="30%"
            y2="16%"
            stroke="#FF6B6B"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.4"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            x1="50%"
            y1="50%"
            x2="30%"
            y2="50%"
            stroke="#FF6B6B"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.4"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            x1="50%"
            y1="50%"
            x2="30%"
            y2="84%"
            stroke="#FF6B6B"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.4"
          />

          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
            x1="50%"
            y1="50%"
            x2="70%"
            y2="16%"
            stroke="#FF6B6B"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.4"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            x1="50%"
            y1="50%"
            x2="70%"
            y2="50%"
            stroke="#FF6B6B"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.4"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            x1="50%"
            y1="50%"
            x2="70%"
            y2="84%"
            stroke="#FF6B6B"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.4"
          />
        </svg>

        {/* THE CENTRAL CIRCLE (The Core) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center">
          <div className="absolute w-64 h-64 bg-[#FF6B6B]/10 rounded-full blur-[50px] animate-pulse" />
          <div className="absolute w-40 h-40 border border-[#D4AF37]/30 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute w-32 h-32 border border-[#FF6B6B]/50 border-t-transparent rounded-full animate-[spin_4s_linear_infinite_reverse]" />

          <div className="w-24 h-24 bg-black border border-[#FF6B6B] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,107,107,0.4)] relative">
            <div className="w-2 h-2 bg-white rounded-full animate-ping" />
            <span className="absolute -bottom-8 text-[9px] text-[#FF6B6B] tracking-[0.3em] font-mono uppercase">
              System Node
            </span>
          </div>
        </div>

        {/* THE LINKED BOXES */}
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 relative z-10">
          <div className="flex flex-col justify-between gap-6 lg:gap-24 lg:py-12 items-center lg:items-end text-center lg:text-right">
            {SERVICES_LEFT.map((service, i) => (
              <ServiceBox
                key={service.id}
                service={service}
                delay={i * 0.2}
                align="right"
              />
            ))}
          </div>

          <div className="hidden lg:block pointer-events-none" />

          <div className="flex flex-col justify-between gap-6 lg:gap-24 lg:py-12 items-center lg:items-start text-center lg:text-left">
            {SERVICES_RIGHT.map((service, i) => (
              <ServiceBox
                key={service.id}
                service={service}
                delay={i * 0.2 + 0.1}
                align="left"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceBox({
  service,
  delay,
  align,
}: {
  service: any;
  delay: number;
  align: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative group w-full max-w-[320px] bg-[#050505] border border-white/10 rounded-2xl p-8 hover:border-[#FF6B6B]/50 hover:bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 shadow-2xl z-10`}
    >
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF6B6B] hidden lg:block ${align === "right" ? "-right-1" : "-left-1"}`}
      />

      <span className="text-[#FF6B6B] font-mono text-xs tracking-widest block mb-4">
        /{service.id}
      </span>
      <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-[#FF6B6B] transition-colors">
        {service.title}
      </h3>
      <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
        {service.desc}
      </p>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}