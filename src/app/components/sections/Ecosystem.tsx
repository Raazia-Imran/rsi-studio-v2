// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Ecosystem() {
//   const [isWarping, setIsWarping] = useState(false);

//   return (
//     <section className="h-screen flex items-center justify-center relative bg-black overflow-hidden">
//       <AnimatePresence>
//         {isWarping && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="absolute inset-0 z-50 bg-black flex items-center justify-center"
//           >
//             {/* Warp Lines */}
//             {[...Array(50)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ scale: 0, opacity: 0 }}
//                 animate={{
//                   scale: [0, 20],
//                   opacity: [0, 1, 0],
//                   x: Math.random() * 1000 - 500,
//                   y: Math.random() * 1000 - 500,
//                 }}
//                 transition={{
//                   duration: 1,
//                   repeat: Infinity,
//                   delay: Math.random(),
//                 }}
//                 className="absolute w-1 h-32 bg-[#FF6B6B] rounded-full"
//               />
//             ))}
//             <motion.h2
//               animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="text-white font-display text-2xl tracking-[1em] uppercase z-10"
//             >
//               Initializing System
//             </motion.h2>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <button
//         onClick={() => setIsWarping(true)}
//         className="group relative px-12 py-6 border border-white/20 hover:border-[#FF6B6B] transition-colors duration-500"
//       >
//         <span className="text-white text-sm font-bold uppercase tracking-[0.5em] group-hover:text-[#FF6B6B] transition-colors">
//           Enter RSI Ecosystem
//         </span>
//         <div className="absolute inset-0 bg-[#FF6B6B] opacity-0 group-hover:opacity-5 transition-opacity" />
//       </button>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Ecosystem() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-[80vh] bg-black text-white flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
      {/* Cosmic Background (Stars & Nebulas) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] bg-[radial-gradient(circle,rgba(255,107,107,0.05)_0%,rgba(0,0,0,1)_60%)]" />
        {/* Animated Noise/Stars overlay would go here ideally */}
      </div>

      {/* Floating Orbital Rings */}
      <motion.div
        animate={{ rotateX: 60, rotateZ: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[800px] h-[800px] border border-white/5 rounded-full"
      />
      <motion.div
        animate={{ rotateX: 60, rotateZ: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] border border-[#FF6B6B]/10 rounded-full"
      />

      {/* Interactive Core */}
      <motion.div
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 60px rgba(255,107,107,0.8)",
          }}
          className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-black border border-[#FF6B6B]/40 shadow-[0_0_40px_rgba(255,107,107,0.4)] flex items-center justify-center cursor-pointer mb-8 relative group"
        >
          {/* Inner core glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#FF6B6B]/20 to-transparent group-hover:from-[#FF6B6B]/40 transition-all duration-500" />
          <span className="font-display font-bold text-2xl md:text-3xl tracking-tighter text-white z-10">
            RSI
            <br />
            ONE
          </span>
        </motion.div>

        <h2 className="text-[#FF6B6B] text-xs font-mono uppercase tracking-[0.4em] mb-4">
          Beyond The Studio
        </h2>
        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          Accelerate To The Ecosystem
        </h1>
        <p className="text-white/50 max-w-md text-sm leading-relaxed mb-10">
          Enter our exclusive enterprise network. Seamlessly transition your
          project into RSI One's global management software suite.
        </p>

        <a
          href="/ecosystem"
          className="px-8 py-4 bg-white/10 hover:bg-white hover:text-black border border-white/20 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 backdrop-blur-md"
        >
          Initialize Link
        </a>
      </motion.div>
    </section>
  );
}