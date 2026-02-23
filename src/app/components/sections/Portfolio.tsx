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

"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Portfolio() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef}>
      {/* Part A: Design Monks Style (Inverse White) */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-[#FF6B6B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Selected Works
            </h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
              Proven Digital <br /> Dominance
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group relative aspect-[4/5] bg-[#f5f5f7] rounded-3xl overflow-hidden border border-black/5"
              >
                {/* Mockup Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="w-full h-full bg-gray-200 rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute bottom-8 left-8">
                  <p className="text-xs font-bold tracking-widest uppercase opacity-40">
                    System 0{item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Part B: Levan Rho Style (Minimal Slideshow) */}
      <section className="h-[80vh] bg-black flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none" />

        <div className="flex gap-4 items-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, -100 * 5],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-[60vw] md:w-[30vw] aspect-video bg-white/5 rounded-lg border border-white/10 shrink-0"
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-white/10 text-[15vw] font-display font-bold uppercase tracking-tighter select-none">
            Visual System
          </h2>
        </div>
      </section>
    </div>
  );
}

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