// // "use client";
// // import React, { useRef, useEffect } from "react";
// // import "./AiCards.css";

// // type AiItem = {
// //   title: string;
// //   description: string;
// //   img: string;
// //   pathD: string;
// //   gradientId: string;
// // };

// // const aiItems: AiItem[] = [
// //   {
// //     title: "UX Copy That Clicks",
// //     description: "We use AI to create effective copies like CTAs and microcopy that speaks.",
// //     img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0f8e5e4eed26b3df33dbf_Frame%20427321588%20(10)%20(1).avif",
// //     pathD: "M369.152 151L268.05 151C260.251 151 252.899 147.356 248.175 141.15L231.31 118.993C226.587 112.786 219.235 109.143 211.435 109.143L110.716 109.143L26.1299 109.143C12.3352 109.143 1.15234 97.9601 1.15233 84.1654L1.15232 -0.000131476",
// //     gradientId: "gradient1",
// //   },
// //   {
// //     title: "Visuals, Instantly on Point",
// //     description: "We generate custom visuals using AI for faster concept directions, brand-ready",
// //     img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fd1543795606db43fc7a_b0912675069a2f6948f5db3e54c11327_Frame%202147226580%20%281%29.avif",
// //     pathD: "M2 102L2 0",
// //     gradientId: "gradient2",
// //   },
// //   {
// //     title: "Data-Led Design Decisions",
// //     description: "We predict user behavior before launch with AI-powered heatmaps that help us",
// //     img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fd7c6c69d5e8b586e825_Frame%202147226653%20(2)%20(1).avif",
// //     pathD: "M0.152324 151L101.254 151C109.054 151 116.406 147.356 121.13 141.15L137.994 118.993C142.718 112.786 150.07 109.143 157.87 109.143L258.589 109.143L343.175 109.143C356.97 109.143 368.152 97.9602 368.152 84.1655L368.152 -7.04408e-05",
// //     gradientId: "gradient3",
// //   },
// //   {
// //     title: "Smarter & Faster Wireframes",
// //     description: "We rapidly turn ideas into functional wireframes using AI tools, with less",
// //     img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0feeeeec420934eb6dc33_f5af64da87fb7c474458934d16bc50fe_Frame%202147226581%20%281%29.avif",
// //     pathD: "M369.152 1.00014L268.1 1.00013C260.272 1.00013 252.897 4.66959 248.176 10.9132L231.309 33.2211C226.588 39.4647 219.213 43.1342 211.386 43.1342L110.716 43.1342L26.1299 43.1342C12.3352 43.1341 1.15237 54.317 1.15237 68.1117L1.15236 153",
// //     gradientId: "gradient4",
// //   },
// //   {
// //     title: "Launch Quicker, Spend Less",
// //     description: "AI reduces revisions and guesswork and makes your website ready to launch",
// //     img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fe116b9d3d649da7d5ef_Frame%20427321588%20(13)%20(1).avif",
// //     pathD: "M1.16456 0.075793L1.16455 98.0001",
// //     gradientId: "gradient5",
// //   },
// //   {
// //     title: "No Blank Canvas Struggles",
// //     description: "AI generates editable mockups from prompts so we can skip the slow start",
// //     img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fdca701e60e4fb26c2fa_Frame%20427321588%20(11)%20(1).avif",
// //     pathD: "M0.152337 1.00014L101.205 1.00013C109.032 1.00013 116.407 4.66959 121.128 10.9132L137.996 33.2211C142.717 39.4647 150.092 43.1342 157.919 43.1342L258.589 43.1342L343.175 43.1342C356.969 43.1341 368.152 54.317 368.152 68.1117L368.152 153",
// //     gradientId: "gradient6",
// //   },
// // ];

// // // Reusable Card component
// // const AiCard: React.FC<{ item: AiItem; idx: number; followerRefs: any }> = ({ item, idx, followerRefs }) => (
// //   <div className="ai-item">
// //     <div className="ai-svg-code w-embed">
// //       <svg
// //   width="250"
// //   height="152"
// //   viewBox="0 0 370 152"  // adjust per path if needed
// //   fill="none"
// // >
// //         <path
// //           className="motion-path"
// //           d={item.pathD}
// //           stroke={`url(#${item.gradientId})`}
// //           strokeWidth="2"
// //           opacity={0.5}
// //         />
// //         <circle
// //           ref={(el) => { if (el) followerRefs.current[idx] = el; }}
// //           r="4"
// //           fill={`url(#${item.gradientId})`}
// //           data-offset="0"
// //         />
// //         <defs>
// //           <linearGradient id={item.gradientId} x1="0" y1="0" x2="370" y2="0">
// //             <stop offset="0%" stopColor="#F6A6FF" stopOpacity={0.55} />
// //             <stop offset="100%" stopColor="#7F21FF" />
// //           </linearGradient>
// //         </defs>
// //       </svg>
// //     </div>

// //     <div className="ai-item-inner">
// //       <div className="ai-item-content">
// //         <h3>
// //           {item.title.split(" ")[0]} <em>{item.title.split(" ").slice(1).join(" ")}</em>
// //         </h3>
// //         <p>{item.description}</p>
// //       </div>
// //       <div className="ai-pos">
// //         <img src={item.img} alt={item.title} className="ai-img" />
// //       </div>
// //     </div>
// //   </div>
// // );

// // const ManagePresence: React.FC = () => {
// //   const followerRefs = useRef<SVGCircleElement[]>([]);

// //   useEffect(() => {
// //     const pathEls = document.querySelectorAll<SVGPathElement>(".motion-path");
// //     const followers = followerRefs.current;

// //     const animate = () => {
// //       pathEls.forEach((path, idx) => {
// //         const follower = followers[idx];
// //         if (!path || !follower) return;

// //         const length = path.getTotalLength();
// //         let offset = (parseFloat(follower.getAttribute("data-offset") || "0") + 2) % length;

// //         const point = path.getPointAtLength(offset);
// //         follower.setAttribute("cx", point.x.toString());
// //         follower.setAttribute("cy", point.y.toString());
// //         follower.setAttribute("data-offset", offset.toString());
// //       });
// //       requestAnimationFrame(animate);
// //     };
// //     animate();
// //   }, []);

// //   return (
// //     <div className="container-main">
// //       {/* Header */}
// //       <div className="spacer-56 center-aline-pc">
// //         <div className="spacer-16 center-aline-pc">
// //           <div className="section_tag-wapper">
// //             <div className="section_tag-title"><div className="body-r">AI-Powered Design</div></div>
// //           </div>
// //           <h2 className="heading-h2 text-color-main">
// //             Smarter Design, <em>Supercharged by AI</em>
// //           </h2>
// //           <p className="body-l width-max-42rem text-color-secondary">
// //             From wireframes to launch, we blend AI tools with strategy to deliver faster, sharper, and data-led design results.
// //           </p>
// //         </div>
// //       </div>

// //       {/* Top 3 cards */}
// //       <div className="ai-items-rows">
// //         {aiItems.slice(0, 3).map((item, idx) => (
// //           <AiCard key={idx} item={item} idx={idx} followerRefs={followerRefs} />
// //         ))}
// //       </div>

// //       {/* Logo section */}
// //       <div className="ai-logo-section">
// //         <div className="ai-logo-pos">
// //           <img
// //             src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68b61fd952b78aa1c579683c_Frame%202147224744.svg"
// //             alt="AI Logo"
// //             className="ai-logo"
// //           />
// //           <div className="ai-logo-bg-pos-wrap">
// //             <div className="ai-logo-bg-pos"></div>
// //             <div className="ai-logo-bg-pos logo-grad-2"></div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Bottom 3 cards */}
// //       <div className="ai-items-rows">
// //         {aiItems.slice(3, 6).map((item, idx) => (
// //           <AiCard key={idx + 3} item={item} idx={idx + 3} followerRefs={followerRefs} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ManagePresence;

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Sparkles, Cpu } from "lucide-react";

// type AiItem = {
//   title: string;
//   description: string;
//   img: string;
// };

// const aiItems: AiItem[] = [
//   {
//     title: "UX Copy That Clicks",
//     description:
//       "We use AI to create effective copies like CTAs and microcopy that speaks.",
//     img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0f8e5e4eed26b3df33dbf_Frame%20427321588%20(10)%20(1).avif",
//   },
//   {
//     title: "Visuals, Instantly on Point",
//     description:
//       "We generate custom visuals using AI for faster concept directions, brand-ready.",
//     img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fd1543795606db43fc7a_b0912675069a2f6948f5db3e54c11327_Frame%202147226580%20%281%29.avif",
//   },
//   {
//     title: "Data-Led Design Decisions",
//     description:
//       "We predict user behavior before launch with AI-powered heatmaps that help us.",
//     img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fd7c6c69d5e8b586e825_Frame%202147226653%20(2)%20(1).avif",
//   },
//   {
//     title: "Smarter & Faster Wireframes",
//     description:
//       "We rapidly turn ideas into functional wireframes using AI tools, with less.",
//     img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0feeeeec420934eb6dc33_f5af64da87fb7c474458934d16bc50fe_Frame%202147226581%20%281%29.avif",
//   },
//   {
//     title: "Launch Quicker, Spend Less",
//     description:
//       "AI reduces revisions and guesswork and makes your website ready to launch.",
//     img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fe116b9d3d649da7d5ef_Frame%20427321588%20(13)%20(1).avif",
//   },
//   {
//     title: "No Blank Canvas Struggles",
//     description:
//       "AI generates editable mockups from prompts so we can skip the slow start.",
//     img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fdca701e60e4fb26c2fa_Frame%20427321588%20(11)%20(1).avif",
//   },
// ];

// const AiCard = ({ item, index }: { item: AiItem; index: number }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       className="relative group rounded-[2rem] overflow-hidden bg-[#0A0A0F] border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col h-full"
//     >
//       {/* Animated Glowing Edge Effect (Replaces the broken SVG dots) */}
//       <div className="absolute inset-0 z-0">
//         <div
//           className="absolute top-0 left-0 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(255,107,107,0.4)_360deg)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//           style={{
//             transformOrigin: "center center",
//             transform: "translate(-25%, -25%)",
//           }}
//         />
//       </div>

//       {/* Inner Mask to hide the glowing gradient everywhere except the border */}
//       <div className="absolute inset-[1px] bg-[#0A0A0F] rounded-[2rem] z-10" />

//       {/* Content */}
//       <div className="relative z-20 flex flex-col h-full p-8">
//         <div className="flex-1">
//           <h3 className="text-2xl font-display font-bold text-white mb-4 leading-tight">
//             {item.title.split(" ")[0]}{" "}
//             <span className="text-[#FF6B6B] italic">
//               {item.title.split(" ").slice(1).join(" ")}
//             </span>
//           </h3>
//           <p className="text-white/60 text-sm leading-relaxed mb-8">
//             {item.description}
//           </p>
//         </div>

//         {/* Image Container */}
//         <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/50 border border-white/5 group-hover:border-[#FF6B6B]/20 transition-colors">
//           <img
//             src={item.img}
//             alt={item.title}
//             className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent" />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default function ManagePresence() {
//   return (
//     <section className="bg-[#050505] py-32 relative overflow-hidden text-white border-t border-white/5">
//       {/* Ambient Background Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FF6B6B]/10 blur-[150px] pointer-events-none rounded-full" />

//       <div className="container mx-auto px-6 max-w-7xl relative z-10">
//         {/* Header */}
//         <div className="text-center mb-24 flex flex-col items-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B6B]/10 border border-[#FF6B6B]/30 mb-6"
//           >
//             <Sparkles size={14} className="text-[#FF6B6B]" />
//             <span className="text-[#FF6B6B] text-[10px] font-mono uppercase tracking-[0.2em] font-bold">
//               AI-Powered Design
//             </span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6"
//           >
//             Smarter Design, <br className="hidden md:block" />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-white italic pr-2">
//               Supercharged by AI
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-white/50 max-w-2xl text-lg font-light leading-relaxed"
//           >
//             From wireframes to launch, we blend AI tools with strategy to
//             deliver faster, sharper, and data-led design results.
//           </motion.p>
//         </div>

//         {/* Top 3 Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           {aiItems.slice(0, 3).map((item, idx) => (
//             <AiCard key={idx} item={item} index={idx} />
//           ))}
//         </div>

//         {/* Central Neural Hub Divider */}
//         <div className="flex items-center justify-center w-full py-8 relative">
//           <div className="absolute left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent to-[#FF6B6B]/50" />
//           <div className="w-16 h-16 rounded-full bg-[#0A0A0F] border border-[#FF6B6B]/50 z-10 flex items-center justify-center shadow-[0_0_30px_rgba(255,107,107,0.3)]">
//             <Cpu size={24} className="text-[#FF6B6B] animate-pulse" />
//           </div>
//           <div className="absolute right-0 w-1/2 h-[1px] bg-gradient-to-l from-transparent to-[#FF6B6B]/50" />
//         </div>

//         {/* Bottom 3 Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {aiItems.slice(3, 6).map((item, idx) => (
//             <AiCard key={idx + 3} item={item} index={idx + 3} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Cpu } from "lucide-react";

type AiItem = {
  title: string;
  description: string;
  img: string;
};

const aiItems: AiItem[] = [
  {
    title: "UX Copy That Clicks",
    description:
      "We use AI to create effective copies like CTAs and microcopy that speaks.",
    img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0f8e5e4eed26b3df33dbf_Frame%20427321588%20(10)%20(1).avif",
  },
  {
    title: "Visuals, Instantly on Point",
    description:
      "We generate custom visuals using AI for faster concept directions.",
    img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fd1543795606db43fc7a_b0912675069a2f6948f5db3e54c11327_Frame%202147226580%20%281%29.avif",
  },
  {
    title: "Data-Led Design Decisions",
    description:
      "We predict user behavior before launch with AI-powered heatmaps.",
    img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fd7c6c69d5e8b586e825_Frame%202147226653%20(2)%20(1).avif",
  },
  {
    title: "Smarter & Faster Wireframes",
    description:
      "We rapidly turn ideas into functional wireframes using AI tools.",
    img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0feeeeec420934eb6dc33_f5af64da87fb7c474458934d16bc50fe_Frame%202147226581%20%281%29.avif",
  },
  {
    title: "Launch Quicker, Spend Less",
    description:
      "AI reduces revisions and guesswork to make your website launch-ready.",
    img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fe116b9d3d649da7d5ef_Frame%20427321588%20(13)%20(1).avif",
  },
  {
    title: "No Blank Canvas Struggles",
    description:
      "AI generates editable mockups from prompts so we skip the slow start.",
    img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fdca701e60e4fb26c2fa_Frame%20427321588%20(11)%20(1).avif",
  },
];

// --- Component to draw the Animated Laser Data Packets ---
const NeuralLine = ({ d, delay }: { d: string; delay: number }) => (
  <g>
    {/* Faint permanent track */}
    <path
      d={d}
      fill="none"
      stroke="rgba(255,255,255,0.05)"
      strokeWidth="2"
      vectorEffect="non-scaling-stroke"
    />
    {/* Glowing Data Packet */}
    <motion.path
      d={d}
      fill="none"
      stroke="#FF6B6B"
      strokeWidth="3"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
      initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
      animate={{
        pathLength: [0, 0.08, 0.08, 0], // Creates a small "dash" segment
        pathOffset: [0, 0, 0.92, 1], // Moves it from start to end
        opacity: [0, 1, 1, 0], // Fades in and out smoothly
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      style={{ filter: "drop-shadow(0 0 8px #FF6B6B)" }}
    />
  </g>
);

const AiCard = ({ item, index }: { item: AiItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group rounded-[2rem] overflow-hidden bg-[#0A0A0F] border border-white/10 hover:border-[#FF6B6B]/40 transition-all duration-500 flex flex-col h-full shadow-2xl"
    >
      <div className="relative z-20 flex flex-col h-full p-8 bg-[#0A0A0F]/90 backdrop-blur-sm">
        <div className="flex-1">
          <h3 className="text-2xl font-display font-bold text-white mb-4 leading-tight">
            {item.title.split(" ")[0]}{" "}
            <span className="text-[#FF6B6B] italic">
              {item.title.split(" ").slice(1).join(" ")}
            </span>
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            {item.description}
          </p>
        </div>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/50 border border-white/5 group-hover:border-[#FF6B6B]/20 transition-colors">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent" />
        </div>
      </div>
    </motion.div>
  );
};

export default function HomeServices() {
  return (
    <section className="bg-[#050505] py-32 relative overflow-hidden text-white border-t border-white/5">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FF6B6B]/10 blur-[150px] pointer-events-none rounded-full z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        {/* Header */}
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B6B]/10 border border-[#FF6B6B]/30 mb-6"
          >
            <Sparkles size={14} className="text-[#FF6B6B]" />
            <span className="text-[#FF6B6B] text-[10px] font-mono uppercase tracking-[0.2em] font-bold">
              AI-Powered Design
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6"
          >
            Smarter Design, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-white italic pr-2">
              Supercharged by AI
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-2xl text-lg font-light leading-relaxed"
          >
            From wireframes to launch, we blend AI tools with strategy to
            deliver faster, sharper, and data-led design results.
          </motion.p>
        </div>

        {/* --- THE NEURAL GRID & CARDS --- */}
        <div className="relative w-full py-10">
          {/* DESKTOP: Animated SVG Neural Network */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
          >
            {/* Center is at (600, 400). Paths branch out to the 6 card positions. */}
            <NeuralLine d="M 600 400 C 600 250, 200 250, 200 150" delay={0} />{" "}
            {/* Top Left */}
            <NeuralLine d="M 600 400 L 600 150" delay={0.4} /> {/* Top Mid */}
            <NeuralLine
              d="M 600 400 C 600 250, 1000 250, 1000 150"
              delay={0.8}
            />{" "}
            {/* Top Right */}
            <NeuralLine
              d="M 600 400 C 600 550, 200 550, 200 650"
              delay={1.2}
            />{" "}
            {/* Bot Left */}
            <NeuralLine d="M 600 400 L 600 650" delay={1.6} /> {/* Bot Mid */}
            <NeuralLine
              d="M 600 400 C 600 550, 1000 550, 1000 650"
              delay={2.0}
            />{" "}
            {/* Bot Right */}
          </svg>

          {/* MOBILE: Animated Vertical Backbone */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/5 to-transparent lg:hidden z-0 -translate-x-1/2 overflow-hidden">
            <motion.div
              className="w-full h-32 bg-gradient-to-b from-transparent via-[#FF6B6B] to-transparent"
              animate={{ y: ["-100%", "800%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="relative z-10 flex flex-col gap-6 lg:gap-12">
            {/* Top 3 Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
              {aiItems.slice(0, 3).map((item, idx) => (
                <AiCard key={idx} item={item} index={idx} />
              ))}
            </div>

            {/* Central Neural Hub Node */}
            <div className="flex items-center justify-center w-full py-4 relative z-20">
              <div className="relative w-20 h-20 rounded-full bg-[#050505] border border-[#FF6B6B]/50 flex items-center justify-center shadow-[0_0_40px_rgba(255,107,107,0.4)] group">
                <div className="absolute inset-0 rounded-full bg-[#FF6B6B]/20 animate-ping opacity-50" />
                <Cpu size={32} className="text-[#FF6B6B]" />
              </div>
            </div>

            {/* Bottom 3 Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
              {aiItems.slice(3, 6).map((item, idx) => (
                <AiCard key={idx + 3} item={item} index={idx + 3} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}