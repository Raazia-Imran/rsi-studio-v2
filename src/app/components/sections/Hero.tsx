// // "use client";

// // import { useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import {
// //   Monitor,
// //   Smartphone,
// //   Code2,
// //   Database,
// //   ShieldCheck,
// //   Globe,
// //   LucideIcon,
// // } from "lucide-react";

// // interface LampProps {
// //   rotation?: number;
// // }

// // interface FloatingIconProps {
// //   Icon: LucideIcon;
// //   top: string;
// //   left: string;
// //   delay: number;
// //   index: number;
// // }

// // const LAMP_COMMON_CLASSES =
// //   "absolute w-[100px] h-[250px] md:w-[150px] md:h-[350px] pointer-events-none z-20";

// // const LAMPS_CONFIG = [
// //   { pos: "-top-20 -left-10", rot: -40 },
// //   { pos: "-top-20 -right-10", rot: 40 },
// //   { pos: "-bottom-100 -left-10", rot: 220 },
// //   { pos: "-bottom-100 -right-10", rot: 135 },
// // ];

// // const FLOATING_ICONS = [
// //   { Icon: Monitor, top: "20%", left: "15%", delay: 0 },
// //   { Icon: Smartphone, top: "60%", left: "80%", delay: 1 },
// //   { Icon: Code2, top: "25%", left: "75%", delay: 2 },
// //   { Icon: Database, top: "75%", left: "20%", delay: 1.5 },
// //   { Icon: ShieldCheck, top: "50%", left: "10%", delay: 0.5 },
// //   { Icon: Globe, top: "45%", left: "88%", delay: 2.5 },
// // ];

// // function CoralPinkLamp({ rotation = 0 }: LampProps) {
// //   return (
// //     <svg
// //       viewBox="0 0 300 400"
// //       xmlns="http://www.w3.org/2000/svg"
// //       preserveAspectRatio="xMidYMin slice"
// //       className="w-full h-full overflow-visible"
// //       style={{
// //         transform: `rotate(${rotation}deg)`,
// //         transformOrigin: "top center",
// //       }}
// //     >
// //       <defs>
// //         <linearGradient id="beamFinal" x1="0.5" y1="0" x2="0.5" y2="1">
// //           <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.8" />
// //           <stop offset="60%" stopColor="#FF6B6B" stopOpacity="0.2" />
// //           <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0" />
// //         </linearGradient>
// //         <filter id="blurFinal">
// //           <feGaussianBlur stdDeviation="4" />
// //         </filter>
// //       </defs>

// //       <path d="M120,0 L180,0 L170,30 L130,30 Z" fill="#111" />
// //       <ellipse cx="150" cy="30" rx="15" ry="5" fill="#FF8888" opacity="0.9" />

// //       <g style={{ mixBlendMode: "screen" }}>
// //         <path
// //           d="M130,30 L170,30 L220,300 L80,300 Z"
// //           fill="url(#beamFinal)"
// //           filter="url(#blurFinal)"
// //           opacity="0.7"
// //         />
// //       </g>
// //     </svg>
// //   );
// // }

// // const FloatingIcon = ({ Icon, top, left, delay, index }: FloatingIconProps) => (
// //   <motion.div
// //     className="absolute z-10 pointer-events-none"
// //     style={{ top, left }}
// //     animate={{ y: [0, -20, 0] }}
// //     transition={{
// //       duration: 6 + index,
// //       repeat: Infinity,
// //       ease: "easeInOut",
// //       delay: delay,
// //     }}
// //   >
// //     <div className="relative p-2 md:p-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,107,107,0.2)]">
// //       <Icon
// //         size={18}
// //         className="text-white drop-shadow-md md:w-[22px] md:h-[22px]"
// //         strokeWidth={1.5}
// //       />
// //     </div>
// //   </motion.div>
// // );

// // export default function Hero() {
// //   const targetRef = useRef<HTMLElement>(null);

// //   const { scrollYProgress } = useScroll({
// //     target: targetRef,
// //     offset: ["start start", "end start"],
// //   });

// //   const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
// //   const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

// //   const scrollToServices = () => {
// //     document.getElementById("services")?.scrollIntoView({
// //       behavior: "smooth",
// //       block: "start",
// //     });
// //   };

// //   return (
// //     <section
// //       ref={targetRef}
// //       className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden"
// //     >
// //       {FLOATING_ICONS.map((item, i) => (
// //         <FloatingIcon key={i} {...item} index={i} />
// //       ))}

// //       <motion.div
// //         style={{ opacity, y }}
// //         className="z-50 flex flex-col items-center relative"
// //       >
// //         <div className="relative inline-block px-6 py-4 md:px-12 md:py-8 mt-10">
// //           {LAMPS_CONFIG.map((lamp, i) => (
// //             <div key={i} className={`${LAMP_COMMON_CLASSES} ${lamp.pos}`}>
// //               <CoralPinkLamp rotation={lamp.rot} />
// //             </div>
// //           ))}

// //           <h1
// //             className="text-[8vw] md:text-[8vw] leading-none font-bold tracking-tighter text-white relative z-50 text-center select-none"
// //             style={{
// //               fontFamily: "var(--font-display)",
// //               textShadow: `
// //                 0 0 15px rgba(255, 107, 107, 0.9),
// //                 0 0 40px rgba(255, 107, 107, 0.5),
// //                 0 0 80px rgba(255, 107, 107, 0.2)
// //               `,
// //             }}
// //           >
// //             RSI STUDIO
// //           </h1>
// //         </div>

// //         <div className="flex items-center gap-4 md:gap-6 overflow-hidden z-50 mt-2">
// //           <motion.div
// //             initial={{ x: -30, opacity: 0 }}
// //             animate={{ x: 0, opacity: 1 }}
// //             transition={{ delay: 0.5, duration: 1 }}
// //             className="h-[1px] md:h-[2px] w-8 md:w-12 bg-[#FF6B6B]"
// //           />

// //           <motion.p
// //             initial={{ y: 20, opacity: 0 }}
// //             animate={{ y: 0, opacity: 1 }}
// //             transition={{ delay: 0.7, duration: 1 }}
// //             className="text-white text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold drop-shadow-[0_0_5px_#FF6B6B]"
// //           >
// //             Perfection in Pixels
// //           </motion.p>

// //           <motion.div
// //             initial={{ x: 50, opacity: 0 }}
// //             animate={{ x: 0, opacity: 1 }}
// //             transition={{ delay: 0.5, duration: 1 }}
// //             className="h-[1px] md:h-[2px] w-8 md:w-12 bg-[#FF6B6B]"
// //           />
// //         </div>

// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 1.2, duration: 1 }}
// //           className="mt-8 relative z-50"
// //         >
// //           <button
// //             onClick={scrollToServices}
// //             className="relative h-10 md:h-12 w-40 md:w-48 bg-white text-black rounded-full overflow-hidden transition-all duration-300 hover:w-44 md:hover:w-52 hover:shadow-[0_0_20px_#FF6B6B] group flex items-center justify-center"
// //           >
// //             <span className="relative z-10 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-bold leading-none ml-1">
// //               Start Project
// //             </span>
// //           </button>
// //         </motion.div>
// //       </motion.div>

// //       <div className="absolute bottom-0 left-0 right-0 h-24 md:h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-5" />
// //     </section>
// //   );
// // }

// // "use client";

// // import { useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import {
// //   Monitor,
// //   Smartphone,
// //   Code2,
// //   Database,
// //   ShieldCheck,
// //   Globe,
// //   LucideIcon,
// // } from "lucide-react";

// // interface FloatingIconProps {
// //   Icon: LucideIcon;
// //   top: string;
// //   left: string;
// //   delay: number;
// //   index: number;
// // }

// // // Floating icons configuration
// // const FLOATING_ICONS: FloatingIconProps[] = [
// //   { Icon: Monitor, top: "20%", left: "15%", delay: 0, index: 0 },
// //   { Icon: Smartphone, top: "60%", left: "80%", delay: 1, index: 1 },
// //   { Icon: Code2, top: "25%", left: "75%", delay: 2, index: 2 },
// //   { Icon: Database, top: "75%", left: "20%", delay: 1.5, index: 3 },
// //   { Icon: ShieldCheck, top: "50%", left: "10%", delay: 0.5, index: 4 },
// //   { Icon: Globe, top: "45%", left: "88%", delay: 2.5, index: 5 },
// // ];

// // // Floating icon component
// // const FloatingIcon = ({ Icon, top, left, delay, index }: FloatingIconProps) => (
// //   <motion.div
// //     className="absolute z-10 pointer-events-none"
// //     style={{ top, left }}
// //     animate={{ y: [0, -20, 0] }}
// //     transition={{
// //       duration: 6 + index,
// //       repeat: Infinity,
// //       ease: "easeInOut",
// //       delay,
// //     }}
// //   >
// //     <div className="relative p-3 rounded-xl border border-white/10 bg-[var(--color-rsi-glass)] backdrop-blur-md shadow-[0_0_15px_rgba(255,107,107,0.1)]">
// //       <Icon size={22} className="text-[var(--color-rsi-coral)]" />
// //     </div>
// //   </motion.div>
// // );

// // // Hero component
// // export default function Hero() {
// //   const targetRef = useRef<HTMLElement>(null);

// //   // Animate text opacity & y on scroll
// //   const { scrollYProgress } = useScroll({
// //     target: targetRef,
// //     offset: ["start start", "end start"],
// //   });

// //   const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
// //   const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

// //   return (
// //     <section
// //       ref={targetRef}
// //       className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden"
// //     >
// //       {/* Floating icons */}
// //       {FLOATING_ICONS.map((item, i) => (
// //         <FloatingIcon key={i} {...item} />
// //       ))}

// //       {/* Main Hero text & button */}
// //       <motion.div
// //         style={{ opacity, y }}
// //         className="z-50 flex flex-col items-center relative"
// //       >
// //         <h1 className="text-[15vw] md:text-[10vw] font-display font-bold leading-none tracking-tighter mb-8 text-white">
// //           RSI STUDIO
// //         </h1>
// //         <p className="text-xs md:text-sm uppercase tracking-[0.8em] font-bold text-primary mb-12">
// //           Perfection in Pixels
// //         </p>
// //         <motion.button
// //           initial={{ scale: 0.8, opacity: 0 }}
// //           animate={{ scale: 1, opacity: 1 }}
// //           transition={{ delay: 0.8 }}
// //           className="px-12 py-4 bg-white text-black rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-primary transition-colors duration-300"
// //         >
// //           Start Project
// //         </motion.button>
// //       </motion.div>
// //     </section>
// //   );
// // }

// // "use client";

// // import { useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import {
// //   Monitor,
// //   Smartphone,
// //   Code2,
// //   Database,
// //   ShieldCheck,
// //   Globe,
// //   LucideIcon,
// // } from "lucide-react";

// // interface FloatingIconProps {
// //   Icon: LucideIcon;
// //   top: string;
// //   left: string;
// //   delay: number;
// //   index: number;
// // }

// // const FLOATING_ICONS: FloatingIconProps[] = [
// //   { Icon: Monitor, top: "20%", left: "15%", delay: 0, index: 0 },
// //   { Icon: Smartphone, top: "60%", left: "80%", delay: 1, index: 1 },
// //   { Icon: Code2, top: "25%", left: "75%", delay: 2, index: 2 },
// //   { Icon: Database, top: "75%", left: "20%", delay: 1.5, index: 3 },
// //   { Icon: ShieldCheck, top: "50%", left: "10%", delay: 0.5, index: 4 },
// //   { Icon: Globe, top: "45%", left: "88%", delay: 2.5, index: 5 },
// // ];

// // // Configuration for background mobile frames
// // const MOBILE_FRAMES = [
// //   { top: "15%", left: "-5%", rotate: -15, delay: 0 },
// //   { top: "65%", left: "5%", rotate: 10, delay: 2 },
// //   { top: "10%", left: "85%", rotate: 20, delay: 1 },
// //   { top: "70%", left: "75%", rotate: -10, delay: 3 },
// // ];

// // const FloatingIcon = ({ Icon, top, left, delay, index }: FloatingIconProps) => (
// //   <motion.div
// //     className="absolute z-20 pointer-events-none"
// //     style={{ top, left }}
// //     animate={{ y: [0, -20, 0] }}
// //     transition={{
// //       duration: 6 + index,
// //       repeat: Infinity,
// //       ease: "easeInOut",
// //       delay,
// //     }}
// //   >
// //     <div className="relative p-3 rounded-xl border border-white/10 bg-[var(--color-rsi-glass)] backdrop-blur-md shadow-[0_0_15px_rgba(255,107,107,0.1)]">
// //       <Icon size={22} className="text-[var(--color-rsi-coral)]" />
// //     </div>
// //   </motion.div>
// // );

// // // Moving Mobile Frame Component
// // const MovingFrame = ({ top, left, rotate, delay }: any) => (
// //   <motion.div
// //     className="absolute z-0 pointer-events-none opacity-20"
// //     style={{ top, left, rotate: `${rotate}deg` }}
// //     animate={{
// //       y: [0, -40, 0],
// //       rotate: [rotate, rotate + 5, rotate],
// //     }}
// //     transition={{
// //       duration: 10,
// //       repeat: Infinity,
// //       ease: "easeInOut",
// //       delay,
// //     }}
// //   >
// //     <div className="w-48 h-[400px] border-4 border-white/10 rounded-[3rem] bg-white/5 relative overflow-hidden shadow-2xl">
// //       <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/10 rounded-full" />
// //       <div className="mt-16 px-4 space-y-4">
// //         <div className="h-4 w-2/3 bg-white/10 rounded" />
// //         <div className="h-32 w-full bg-white/5 rounded-xl" />
// //         <div className="h-4 w-full bg-white/10 rounded" />
// //       </div>
// //     </div>
// //   </motion.div>
// // );

// // export default function Hero() {
// //   const targetRef = useRef<HTMLElement>(null);

// //   const { scrollYProgress } = useScroll({
// //     target: targetRef,
// //     offset: ["start start", "end start"],
// //   });

// //   const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
// //   const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
// //   const frameParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);

// //   return (
// //     <section
// //       ref={targetRef}
// //       className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden"
// //     >
// //       {/* Background Moving Frames (Z-0) */}
// //       <motion.div style={{ y: frameParallax }} className="absolute inset-0">
// //         {MOBILE_FRAMES.map((frame, i) => (
// //           <MovingFrame key={i} {...frame} />
// //         ))}
// //       </motion.div>

// //       {/* Floating Icons (Z-20) */}
// //       {FLOATING_ICONS.map((item, i) => (
// //         <FloatingIcon key={i} {...item} />
// //       ))}

// //       {/* Main Content (Z-50) */}
// //       <motion.div
// //         style={{ opacity, y }}
// //         className="z-50 flex flex-col items-center relative"
// //       >
// //         <h1
// //           className="text-[15vw] md:text-[10vw] font-display font-bold leading-none tracking-tighter mb-8 text-white select-none"
// //           style={{ textShadow: "0 0 30px rgba(255, 107, 107, 0.3)" }}
// //         >
// //           RSI STUDIO
// //         </h1>

// //         <div className="flex items-center gap-6 mb-12">
// //           <div className="h-[1px] w-12 bg-[var(--color-rsi-coral)]" />
// //           <p className="text-white text-[10px] md:text-xs tracking-[0.6em] uppercase font-bold">
// //             Perfection in Pixels
// //           </p>
// //           <div className="h-[1px] w-12 bg-[var(--color-rsi-coral)]" />
// //         </div>

// //         <motion.button
// //           initial={{ scale: 0.8, opacity: 0 }}
// //           animate={{ scale: 1, opacity: 1 }}
// //           transition={{ delay: 0.8 }}
// //           className="px-12 py-4 bg-white text-black rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-[var(--color-rsi-coral)] hover:text-white transition-all duration-500 hover:scale-105"
// //         >
// //           Start Project
// //         </motion.button>
// //       </motion.div>

// //       {/* Subtle bottom gradient to blend into next section */}
// //       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-40 pointer-events-none" />
// //     </section>
// //   );
// // }

// "use client";

// import { useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";



// interface LampProps {
//   rotation: number;
//   mouseX: number;
//   baseRot: number;
// }

// // Beige Lamp with Coral Pink Light
// function InteractiveLamp({ rotation, mouseX, baseRot }: LampProps) {
//   // Calculate slight beam shift based on mouse position
//   const beamShift =
//     (mouseX / (typeof window !== "undefined" ? window.innerWidth : 1000) -
//       0.5) *
//     20;

//   return (
//     <motion.svg
//       viewBox="0 0 300 400"
//       className="w-full h-full overflow-visible"
//       style={{ transformOrigin: "top center" }}
//       animate={{ rotate: baseRot + beamShift }}
//       transition={{ type: "spring", stiffness: 50, damping: 20 }}
//     >
//       <defs>
//         <linearGradient id="beamFinal" x1="0.5" y1="0" x2="0.5" y2="1">
//           <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.8" />
//           <stop offset="60%" stopColor="#FF6B6B" stopOpacity="0.15" />
//           <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0" />
//         </linearGradient>
//         <filter id="blurFinal">
//           <feGaussianBlur stdDeviation="8" />
//         </filter>
//       </defs>

//       {/* Beige Lamp Body */}
//       <path d="M120,0 L180,0 L170,30 L130,30 Z" fill="#EAE0C8" />
//       <ellipse cx="150" cy="30" rx="15" ry="5" fill="#EAE0C8" />

//       {/* Coral Pink Beam */}
//       <g style={{ mixBlendMode: "screen" }}>
//         <path
//           d="M130,30 L170,30 L260,400 L40,400 Z"
//           fill="url(#beamFinal)"
//           filter="url(#blurFinal)"
//           opacity="0.8"
//         />
//       </g>
//     </motion.svg>
//   );
// }

// export default function Hero() {
//   const [mouseX, setMouseX] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => setMouseX(e.clientX);
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <section className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
//       {/* Interactive Lamps */}
//       <div className="absolute top-0 left-[15%] w-[150px] md:w-[200px] pointer-events-none z-20">
//         <InteractiveLamp rotation={-30} baseRot={-30} mouseX={mouseX} />
//       </div>
//       <div className="absolute top-0 right-[15%] w-[150px] md:w-[200px] pointer-events-none z-20">
//         <InteractiveLamp rotation={30} baseRot={30} mouseX={mouseX} />
//       </div>

//       {/* Illuminated Wordmark */}
//       <div className="relative z-50 text-center select-none mix-blend-screen">
//         <h1
//           className="text-[15vw] md:text-[12vw] leading-none font-display font-bold tracking-tighter text-white"
//           style={{
//             textShadow:
//               "0 0 40px rgba(255, 107, 107, 0.4), 0 0 80px rgba(255, 107, 107, 0.2)",
//           }}
//         >
//           RSI STUDIO
//         </h1>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1 }}
//           className="mt-8"
//         >
//           <a
//             href="/ecosystem"
//             className="inline-block px-8 py-3 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#FF6B6B] hover:text-white transition-colors duration-300"
//           >
//             Start a Project
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }







// "use client";
// import React, { useState, useEffect, Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Environment, SpotLight, Text } from '@react-three/drei';

// // --- Real Beige Studio Lamp Component ---
// function StudioLamp({ position, rotation }: any) {
//   return (
//     <group position={position} rotation={rotation}>
//       {/* 1. Lamp Body: Real Beige Ceramic/Metal Look */}
//       <mesh castShadow>
//         {/* Cylinder ko thora sleek kiya hai taake real torch/lamp lagay */}
//         <cylinderGeometry args={[0.3, 0.4, 1.2, 32]} />
//         <meshStandardMaterial 
//           color="#DCD7C9" // Exact Beige
//           roughness={0.2} 
//           metalness={0.5} // Metalness barhai hai taake background light reflect kare
//         />
//       </mesh>
      
//       {/* 🚨 NAYA FIX: Glowing Lens/Bulb (Taa ke lagay light sach mein yahan se nikal rahi hai) */}
//       <mesh position={[0, -0.61, 0]}>
//         <circleGeometry args={[0.25, 32]} />
//         <meshStandardMaterial 
//           color="#ffffff" 
//           emissive="#FF6B6B" // Coral Pink glow
//           emissiveIntensity={5} // High intensity taake bulb chamkay
//           toneMapped={false}
//         />
//       </mesh>

//       {/* 2. The Actual Physics Light (Casts real light on Logo) */}
//       <spotLight
//         position={[0, -0.6, 0]}
//         color="#FF6B6B" // Coral Pink
//         intensity={500} // 🔥 Logo ko chamkane ke liye light aur barha di
//         angle={0.5}
//         penumbra={0.5}
//         distance={20}
//         castShadow
//       />

//       {/* 3. Volumetric Fog Beam (Hawa mein pink light ka effect) */}
//       <SpotLight
//         position={[0, -0.6, 0]}
//         color="#FF6B6B"
//         distance={15}
//         angle={0.5}
//         attenuation={5}
//         anglePower={4}
//         intensity={100}
//       />
//     </group>
//   );
// }

// export default function Hero() {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) return null;

//   return (
//     <div className="relative w-full h-screen bg-[#050505] flex items-center justify-center overflow-hidden">
      
//       <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
//         <Suspense fallback={null}>
          
//           <Environment preset="city" />
//           {/* 🚨 NAYA FIX: Ambient light thori barhai hai taake Beige lamps black na lagien */}
//           <ambientLight intensity={0.25} /> 

// {/* Top Left Lamp: Face pointing towards Bottom Right */}
//           <StudioLamp 
//             position={[-3, 2.5, 1]} 
//             rotation={[0.1, 0, 0.6]} // 👈 Z ko positive (0.7) kiya taake ye Right ki taraf dekhe
//           />
          
//           {/* Top Right Lamp: Face pointing towards Bottom Left */}
//           <StudioLamp 
//             position={[3, 2.5, 1]} 
//             rotation={[0.5, 0, -0.6]} // 👈 Z ko negative (-0.7) kiya taake ye Left ki taraf dekhe
//           />

//           {/* --- 3D LOGO --- */}
//           <Text
//             fontSize={1.7}
//             fontWeight="bold"
//             letterSpacing={-0.04}
//             position={[0, -0.1, 0]} // Text ko thora center-bottom kiya taake lights oopar wazeh hon
//             castShadow
//             receiveShadow
//           >
//             RSI studio
//             <meshStandardMaterial 
//               color="#ffffff" 
//               roughness={0.1} 
//               metalness={0.4} 
//             />
//           </Text>

//         </Suspense>
//       </Canvas>

//     </div>
//   );
// }









































"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      window.requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`;
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-screen"
      style={{
        backgroundColor: "#FF6B6B",
        border: "2px solid #FF6B6B",
        boxShadow: "0 0 15px #FF6B6B, 0 0 30px rgba(255, 107, 107, 0.6)",
        willChange: "transform",
      }}
    />
  );
}

function InteractiveSpotlight({ mouseX, position }: { mouseX: any, position: "left" | "right" }) {
  const baseAngle = position === "left" ? -15 : 15;
  const [angle, setAngle] = useState(baseAngle);

  useEffect(() => {
    const unsubscribe = mouseX.on("change", (v: number) => {
      const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1000;
      const normalizedX = (v - screenWidth / 2) / (screenWidth / 2);
      const maxSwing = 2; // Static but slightly responsive swing
      setAngle(baseAngle + (normalizedX * maxSwing));
    });
    return () => unsubscribe();
  }, [mouseX, position, baseAngle]);

  return (
    <motion.svg
      viewBox="0 0 400 800"
      className="w-full h-[150vh] overflow-visible absolute top-0"
      style={{ transformOrigin: "50% -200px" }} // Locked exactly at center for both
      animate={{ rotate: angle }}
      transition={{ type: "spring", stiffness: 40, damping: 25, mass: 0.8 }}
    >
      <defs>
        <linearGradient id={`beam-${position}`} x1="0.5" y1="0" x2="0.5" y2="1">
          {/* Increased intensity and spread by ~5% */}
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#FF6B6B" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0.05" />
        </linearGradient>
        <filter id="beamBlur">
          {/* Increased blur deviation for a wider, softer spread */}
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>

      <g style={{ mixBlendMode: "screen" }} className="pointer-events-none">
        {/* Widened the bottom of the beam path (340 and 60) for more light spread */}
        <path
          d="M180,20 L220,20 L340,450 L60,450 Z"
          fill={`url(#beam-${position})`}
          filter="url(#beamBlur)"
          opacity="0.70"
        />
      </g>

      {/* Lamp Hardware */}
      <rect x="196" y="-350" width="8" height="330" fill="#111" />
      <ellipse cx="200" cy="-20" rx="35" ry="15" fill="#d4b896" stroke="#000" strokeWidth="2" />
      <path d="M165,-20 L235,-20 L220,20 L180,20 Z" fill="#EAE0C8" stroke="#000" strokeWidth="2" />
      <ellipse cx="200" cy="20" rx="20" ry="6" fill="#fff" filter="drop-shadow(0 0 15px #FF6B6B)" />
    </motion.svg>
  );
}

export default function Hero() {
  const mX = useMotionValue(0);
  const [dist, setDist] = useState(500);

  useEffect(() => {
    mX.set(window.innerWidth / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mX.set(e.clientX);
      const cX = window.innerWidth / 2;
      const cY = window.innerHeight / 2;
      setDist(Math.hypot(e.clientX - cX, e.clientY - cY));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mX]);

  const gI = Math.max(0, 1 - dist / 600);
  // Adjusted text shadow to react to the slightly brighter environment
  const dTS = `0 0 ${20 + gI * 40}px rgba(255, 107, 107, ${0.35 + gI * 0.5}), 0 0 ${40 + gI * 80}px rgba(255, 107, 107, ${0.15 + gI * 0.3})`;

  return (
    <section className="relative h-screen w-full bg-[#050505] flex flex-col items-center justify-center overflow-hidden cursor-none">
      <Cursor />

      {/* Background Noise Filter */}
      <div
        className="absolute inset-0 z-10 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Left Lamp */}
      <div className="absolute top-0 left-[10%] w-[300px] pointer-events-none z-20">
        <InteractiveSpotlight position="left" mouseX={mX} />
      </div>

      {/* Right Lamp */}
      <div className="absolute top-0 right-[10%] w-[300px] pointer-events-none z-20">
        <InteractiveSpotlight position="right" mouseX={mX} />
      </div>

      {/* Main Content (RSI STUDIO Logo & Button) */}
      <div className="relative z-30 w-full h-full flex flex-col items-center justify-center">
        <div className="relative z-30 text-center select-none mix-blend-screen flex flex-col items-center">
          
          <motion.h1
            className="text-[10vw] md:text-[11vw] leading-none font-display font-bold tracking-tighter text-white"
            animate={{ textShadow: dTS }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
          >
            RSI STUDIO
          </motion.h1>

          <div className="w-1/3 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-2 mb-8" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="/ecosystem"
              className="inline-block px-8 py-3 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#FF6B6B] hover:text-white transition-colors duration-300 cursor-none relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/50 w-0 group-hover:w-full transition-all duration-300 ease-out skew-x-12 -ml-4" />
              <span className="relative z-10">Start a Project</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}