// "use client";
// import { motion } from "framer-motion";

// export default function Portfolio() {
//   return (
//     <>
//       {/* Part A: Design Monks Inverse Section */}
//       <section className="py-32 bg-white text-black">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl md:text-7xl font-display font-bold mb-20 tracking-tighter">
//             Selected Works
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {[1, 2].map((i) => (
//               <div
//                 key={i}
//                 className="aspect-video bg-gray-100 rounded-2xl overflow-hidden border border-black/5 hover:scale-[1.02] transition-transform duration-700"
//               >
//                 {/* Image Placeholder */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Part B: Levan Rho Slideshow */}
//       <section className="h-screen bg-black flex items-center justify-center overflow-hidden">
//         <div className="flex gap-10 whitespace-nowrap">
//           <motion.div
//             animate={{ x: [0, -1000] }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="flex gap-10"
//           >
//             {[1, 2, 3, 4, 5].map((i) => (
//               <div
//                 key={i}
//                 className="w-[80vw] md:w-[40vw] aspect-video bg-white/5 rounded-lg border border-white/10"
//               />
//             ))}
//           </motion.div>
//         </div>
//         <div className="absolute flex items-center justify-center pointer-events-none">
//           <h2 className="text-white/5 text-[15vw] font-display font-bold uppercase">
//             Visual System
//           </h2>
//         </div>
//       </section>
//     </>
//   );
// }

// export default function Portfolio() {
//   return (
//     <>
//       {/* Part A: Design Monks Style (Inverse White) */}
//       <section className="py-32 bg-[var(--color-rsi-white)] text-[var(--color-rsi-black)]">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
//             <div>
//               <h2 className="text-[#FF6B6B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
//                 Case Studies
//               </h2>
//               <h3 className="text-5xl md:text-8xl font-display font-bold tracking-tighter">
//                 Selected <br /> Systems
//               </h3>
//             </div>
//             <p className="max-w-xs text-black/50 text-sm mb-4 leading-relaxed">
//               We engineer digital assets for high-stakes sectors. Precision
//               mockups visualized for mobile, tablet, and desktop.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {[1, 2].map((i) => (
//               <div
//                 key={i}
//                 className="group relative aspect-[4/5] bg-gray-100 rounded-[2.5rem] overflow-hidden border border-black/5"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//                 {/* Visualizing the "Device Mockup" content */}
//                 <div className="p-12 h-full flex items-center justify-center">
//                   <div className="w-full h-full bg-white rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Part B: Levan Rho Slideshow */}
//       <section className="h-[80vh] bg-black flex items-center justify-center overflow-hidden relative">
//         <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none" />
//         <h2 className="text-white/5 text-[15vw] font-display font-bold uppercase tracking-tighter select-none whitespace-nowrap">
//           Visual System • Visual System
//         </h2>
//       </section>
//     </>
//   );
// }
//this was
// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function Portfolio() {
//   const containerRef = useRef(null);

//   return (
//     <div ref={containerRef}>
//       {/* Part A: Design Monks Style (Inverse White) */}
//       <section className="py-32 bg-white text-black">
//         <div className="container mx-auto px-6">
//           <div className="mb-20">
//             <h2 className="text-[#FF6B6B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
//               Selected Works
//             </h2>
//             <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
//               Proven Digital <br /> Dominance
//             </h3>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {[1, 2].map((item) => (
//               <motion.div
//                 key={item}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 className="group relative aspect-[4/5] bg-[#f5f5f7] rounded-3xl overflow-hidden border border-black/5"
//               >
//                 {/* Mockup Placeholder */}
//                 <div className="absolute inset-0 flex items-center justify-center p-12">
//                   <div className="w-full h-full bg-gray-200 rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-700" />
//                 </div>
//                 <div className="absolute bottom-8 left-8">
//                   <p className="text-xs font-bold tracking-widest uppercase opacity-40">
//                     System 0{item}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Part B: Levan Rho Style (Minimal Slideshow) */}
//       <section className="h-[80vh] bg-black flex items-center justify-center overflow-hidden relative">
//         <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none" />

//         <div className="flex gap-4 items-center">
//           {[1, 2, 3, 4, 5].map((i) => (
//             <motion.div
//               key={i}
//               animate={{
//                 x: [0, -100 * 5],
//               }}
//               transition={{
//                 duration: 20,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="w-[60vw] md:w-[30vw] aspect-video bg-white/5 rounded-lg border border-white/10 shrink-0"
//             />
//           ))}
//         </div>

//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           <h2 className="text-white/10 text-[15vw] font-display font-bold uppercase tracking-tighter select-none">
//             Visual System
//           </h2>
//         </div>
//       </section>
//     </div>
//   );
// }

// "use client";

// import { motion } from "framer-motion";

// const LANDSCAPE_FRAMES = [1, 2, 3, 4, 5, 6];

// export default function Portfolio() {
//   return (
//     <div className="relative">
//       {/* Part A: Selected Systems (Inverse White) - Design Monks Inspiration */}
//       <section className="py-32 bg-[var(--color-rsi-white)] text-[var(--color-rsi-black)]">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
//             <div>
//               <h2 className="text-[#FF6B6B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
//                 Selected Works
//               </h2>
//               <h3 className="text-5xl md:text-8xl font-display font-bold tracking-tighter">
//                 Digital <br /> Dominance
//               </h3>
//             </div>
//             <p className="max-w-xs text-black/50 text-sm mb-4 leading-relaxed">
//               Engineering digital assets for the top 1% of ambitious brands.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {[1, 2].map((i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="group relative aspect-[4/5] bg-gray-100 rounded-[2.5rem] overflow-hidden border border-black/5"
//               >
//                 <div className="p-12 h-full flex items-center justify-center">
//                   <div className="w-full h-full bg-white rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Part B: Visual System (Moving Landscape Frames) - Levan Rho Inspiration */}
//       <section className="h-[70vh] md:h-[90vh] bg-black flex flex-col items-center justify-center overflow-hidden relative">
//         {/* Subtle Background Noise Overlay */}
//         <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none" />

//         {/* The Moving Landscape Frames Row */}
//         <div className="flex gap-6 items-center relative z-10 py-10">
//           <motion.div
//             animate={{
//               x: [0, -100 * LANDSCAPE_FRAMES.length],
//             }}
//             transition={{
//               duration: 30,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="flex gap-6 px-3"
//           >
//             {/* Duplicate set for seamless infinite loop */}
//             {[...LANDSCAPE_FRAMES, ...LANDSCAPE_FRAMES].map((i, index) => (
//               <div
//                 key={index}
//                 className="w-[70vw] md:w-[45vw] aspect-video bg-white/5 rounded-2xl border border-white/10 shrink-0 flex items-center justify-center group overflow-hidden"
//               >
//                 {/* Internal "Landscape" Rectangles/Visuals */}
//                 <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent group-hover:scale-110 transition-transform duration-[2s]" />
//                 <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors" />
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Cinematic Background Text (Behind or On top of frames) */}
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           <h2 className="text-white/5 text-[20vw] font-display font-bold uppercase tracking-tighter select-none whitespace-nowrap overflow-hidden">
//             Visual System • Visual System
//           </h2>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const TAGS = [
  "Dashboard",
  "Logos",
  "Webflow",
  "Slide Decks",
  "Mobile Apps",
  "Figma",
  "Social Media",
  "Framer",
  "Branding",
];

export default function Portfolio() {
  return (
    <section className="py-32 bg-[#F4F4F6] text-black overflow-hidden relative">
      {/* 1. Scrolling Capability Tags */}
      <div className="mb-20">
        <Marquee
          speed={50}
          gradient={true}
          gradientColor="#F4F4F6"
          className="py-4"
        >
          {TAGS.map((tag, i) => (
            <div key={i} className="flex items-center mx-6">
              <span className="text-[#FF6B6B] mr-6 text-xl">•</span>
              <span className="text-xl md:text-2xl font-display font-semibold text-black/80">
                {tag}
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* 2. Device Mockup Grid / Carousel */}
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex overflow-x-auto gap-8 pb-16 hide-scrollbar snap-x snap-mandatory">
          {/* Tablet Mockup (Dark) */}
          <motion.div
            whileHover={{ y: -10 }}
            className="snap-center shrink-0 w-[80vw] md:w-[600px] aspect-[4/3] bg-[#0E1B1B] rounded-3xl p-6 relative shadow-xl border border-black/5 overflow-hidden"
          >
            <div className="w-full h-full border border-white/10 rounded-2xl overflow-hidden relative bg-black/50">
              <div className="absolute top-6 left-6 text-white font-display font-bold text-2xl">
                Dashboard Analytics
              </div>
            </div>
          </motion.div>

          {/* Mobile Mockup (Dark/Orange) */}
          <motion.div
            whileHover={{ y: -10 }}
            className="snap-center shrink-0 w-[60vw] md:w-[320px] aspect-[1/2] bg-[#111111] rounded-[2.5rem] p-4 relative shadow-xl border-4 border-gray-800"
          >
            <div className="w-full h-full bg-gradient-to-br from-orange-900 to-black rounded-[2rem] relative overflow-hidden">
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Tablet Mockup (Light) */}
          <motion.div
            whileHover={{ y: -10 }}
            className="snap-center shrink-0 w-[80vw] md:w-[700px] aspect-[16/10] bg-white rounded-3xl p-6 relative shadow-xl border border-black/5 overflow-hidden flex items-center justify-center"
          >
            <div className="text-center z-10">
              <h3 className="text-3xl font-display font-bold mb-4">
                Comfortable &<br />
                Stylish UI for
                <br />
                Everyone
              </h3>
            </div>
            {/* Abstract design elements */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-gray-100 to-transparent" />
          </motion.div>

          {/* Mobile Mockup (Light/Pink) */}
          <motion.div
            whileHover={{ y: -10 }}
            className="snap-center shrink-0 w-[60vw] md:w-[320px] aspect-[1/2] bg-white rounded-[2.5rem] p-4 relative shadow-xl border-4 border-gray-200"
          >
            <div className="w-full h-full bg-gradient-to-b from-pink-50 to-white rounded-[2rem] relative overflow-hidden">
              <div className="mt-12 text-center text-4xl font-bold text-[#FF6B6B]">
                82%
              </div>
            </div>
          </motion.div>
        </div>

        {/* Start a Project Button Matching SRS Screenshot */}
        <div className="mt-10 flex justify-center">
          <a
            href="/ecosystem"
            className="bg-[#111111] text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-[#FF6B6B] transition-colors shadow-2xl"
          >
            <span className="w-5 h-5 bg-[#FF6B6B] rounded-full flex items-center justify-center text-black text-xs">
              R
            </span>
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}