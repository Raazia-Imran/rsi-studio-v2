// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { Check } from "lucide-react";
// // // import Link from "next/link";

// // // const TIERS = [
// // //   {
// // //     price: "$1,800",
// // //     audience: "Ideal for Startup Owners, MVP Builders",
// // //     title: "Website Design",
// // //     features: [
// // //       "Design Style Guide",
// // //       "Responsive across all devices",
// // //       "Unlimited Revisions",
// // //       "Developer Handoff",
// // //     ],
// // //   },
// // //   {
// // //     price: "$3,500",
// // //     audience: "For SaaS & fast MVP launches.",
// // //     title: "Web/Mobile App Design",
// // //     features: [
// // //       "UX Research",
// // //       "Design System with token",
// // //       "Unlimited Revisions",
// // //       "Developer handoff",
// // //       "Transparent communication",
// // //       "Responsive across all devices",
// // //     ],
// // //     featured: true,
// // //   },
// // //   {
// // //     price: "$3,800+",
// // //     audience: "Ideal for Startup or MVP",
// // //     title: "Monthly Subscription",
// // //     features: [
// // //       "Monthly dedicated designers",
// // //       "Adhoc design support",
// // //       "Right designer for right product",
// // //       "Transparent communication",
// // //     ],
// // //   },
// // // ];

// // // export default function PricingPage() {
// // //   return (
// // //     <main className="bg-black min-h-screen pt-32 pb-40 px-6 text-white selection:bg-[#FF6B6B] selection:text-black">
// // //       {/* Hero Section */}
// // //       <section className="container mx-auto max-w-4xl text-center mb-32">
// // //         <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
// // //           TRANSPARENT <span className="text-[#FF6B6B]">SYSTEMS</span>
// // //         </h1>

// // //         <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed border border-white/10 bg-white/5 p-8 rounded-2xl">
// // //           We onboard only 6 clients a month, no matter what. Our niches are
// // //           specific, and we operate as strategic growth partners rather than just
// // //           another studio.
// // //         </p>
// // //       </section>

// // //       {/* Pricing Tiers */}
// // //       <section className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-6 mb-32">
// // //         {TIERS.map((tier, i) => (
// // //           <motion.div
// // //             key={i}
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ delay: i * 0.1 }}
// // //             className={`p-10 rounded-3xl border ${
// // //               tier.featured
// // //                 ? "border-[#FF6B6B] bg-[#FF6B6B]/5 relative transform md:-translate-y-4"
// // //                 : "border-white/10 bg-white/[0.02]"
// // //             }`}
// // //           >
// // //             {tier.featured && (
// // //               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF6B6B] text-black text-[10px] uppercase tracking-widest px-4 py-1 rounded-full font-bold">
// // //                 Recommended
// // //               </div>
// // //             )}

// // //             <h2 className="text-4xl md:text-5xl font-display font-bold mb-2">
// // //               {tier.price}
// // //             </h2>

// // //             <p className="text-[10px] text-white/50 uppercase tracking-widest mb-6 h-8">
// // //               {tier.audience}
// // //             </p>

// // //             <h3 className="text-xl font-bold text-[#FF6B6B] mb-8">
// // //               {tier.title}
// // //             </h3>

// // //             <ul className="space-y-4 mb-10">
// // //               {tier.features.map((feat, idx) => (
// // //                 <li
// // //                   key={idx}
// // //                   className="flex items-start gap-3 text-sm text-white/70"
// // //                 >
// // //                   <Check size={16} className="text-[#FF6B6B] shrink-0 mt-0.5" />
// // //                   {feat}
// // //                 </li>
// // //               ))}
// // //             </ul>

// // //             {/* FIXED Explore Button */}
// // //             <Link
// // //               href="/ecosystem"
// // //               className={`block text-center w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors ${
// // //                 tier.featured
// // //                   ? "bg-[#FF6B6B] text-black hover:bg-white"
// // //                   : "bg-white/10 hover:bg-white hover:text-black"
// // //               }`}
// // //             >
// // //               Explore More →
// // //             </Link>
// // //           </motion.div>
// // //         ))}
// // //       </section>

// // //       {/* Managed Web Presence */}
// // //       <section className="container mx-auto max-w-4xl text-center bg-white/5 border border-white/10 rounded-3xl p-12">
// // //         <h2 className="text-3xl font-display font-bold mb-4">
// // //           Managed Web Presence
// // //         </h2>

// // //         <p className="text-[#FF6B6B] text-xl mb-8">$500 / Month</p>

// // //         <div className="grid md:grid-cols-2 gap-8 text-left">
// // //           <div>
// // //             <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest border-b border-white/10 pb-2">
// // //               Included (Free)
// // //             </h4>

// // //             <ul className="text-sm text-white/60 space-y-2">
// // //               <li>Web design support</li>
// // //               <li>Monthly SEO</li>
// // //               <li>GEO optimization</li>
// // //               <li>Launch support</li>
// // //               <li>Bi-annual updates</li>
// // //               <li>SER & Security</li>
// // //             </ul>
// // //           </div>

// // //           <div>
// // //             <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest border-b border-white/10 pb-2">
// // //               Paid Separately
// // //             </h4>

// // //             <ul className="text-sm text-white/60 space-y-2">
// // //               <li>Hosting</li>
// // //               <li>Backend services</li>
// // //               <li>Blogging</li>
// // //             </ul>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </main>
// // //   );
// // // }

// // "use client";

// // import { Check, ArrowRight } from "lucide-react";
// // import Ecosystem from "@/components/sections/Ecosystem"; // <--- 1. WE IMPORT IT HERE

// // const PRICING_TIERS = [
// //   {
// //     price: "$1,800",
// //     title: "Website Design",
// //     subtitle: "Ideal for Startup Owners, MVP Builders",
// //     features: [
// //       "Design Style Guide",
// //       "Responsive across all devices",
// //       "Unlimited Revisions",
// //       "Developer Handoff",
// //     ],
// //     highlight: false,
// //   },
// //   {
// //     price: "$3,500",
// //     title: "Web/Mobile App Design",
// //     subtitle: "For SaaS & fast MVP launches.",
// //     features: [
// //       "UX Research",
// //       "Design System with token",
// //       "Unlimited Revisions",
// //       "Developer handoff",
// //       "Transparent communication",
// //       "Responsive across all devices",
// //     ],
// //     highlight: true,
// //   },
// //   {
// //     price: "$3,800+",
// //     title: "Monthly Subscription",
// //     subtitle: "Ideal for Startup or MVP",
// //     features: [
// //       "Monthly dedicated designers",
// //       "Adhoc design support",
// //       "Right designer for right product",
// //       "Transparent communication",
// //     ],
// //     highlight: false,
// //   },
// // ];

// // export default function PricingPage() {
// //   return (
// //     <main className="bg-[#050505] min-h-screen text-white pt-32">
// //       {/* --- PRICING SECTION --- */}
// //       <section className="px-6 relative overflow-hidden mb-32">
// //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#6B21A8]/20 blur-[120px] pointer-events-none" />

// //         <div className="max-w-7xl mx-auto relative z-10">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
// //             {PRICING_TIERS.map((tier, i) => (
// //               <div
// //                 key={i}
// //                 className={`bg-[#0A0A0F] rounded-3xl p-10 border transition-all duration-300 flex flex-col ${
// //                   tier.highlight
// //                     ? "border-[#8B5CF6]/50 shadow-[0_0_50px_rgba(139,92,246,0.15)] md:scale-105 min-h-[600px] z-20"
// //                     : "border-white/5 hover:border-white/10 min-h-[500px] z-10"
// //                 }`}
// //               >
// //                 <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
// //                   {tier.price}
// //                 </h2>
// //                 <p className="text-white/60 text-sm mb-6 min-h-[40px]">
// //                   {tier.subtitle}
// //                 </p>
// //                 <h3
// //                   className={`text-2xl font-display font-bold mb-8 ${tier.highlight ? "text-[#C4B5FD]" : "text-[#D9F99D]"}`}
// //                 >
// //                   {tier.title}
// //                 </h3>

// //                 <ul className="space-y-5 mb-10 flex-1">
// //                   {tier.features.map((feat, index) => (
// //                     <li key={index} className="flex items-start gap-3">
// //                       <Check
// //                         className={`w-5 h-5 shrink-0 ${tier.highlight ? "text-[#C4B5FD]" : "text-white/40"}`}
// //                       />
// //                       <span className="text-white/80 text-sm leading-snug">
// //                         {feat}
// //                       </span>
// //                     </li>
// //                   ))}
// //                 </ul>

// //                 <button
// //                   className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all ${
// //                     tier.highlight
// //                       ? "bg-[#6D28D9] text-white hover:bg-[#5B21B6]"
// //                       : "bg-[#4C1D95] text-white hover:bg-[#5B21B6]"
// //                   }`}
// //                 >
// //                   Explore More <ArrowRight size={16} />
// //                 </button>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- ECOSYSTEM SECTION --- */}
// //       {/* 2. WE INJECT IT HERE SO IT SHOWS UP AT THE BOTTOM OF THE PRICING PAGE! */}
// //       <Ecosystem />
// //     </main>
// //   );
// // }

// "use client";

// import { Check, ArrowRight } from "lucide-react";
// import Link from "next/link";

// const PRICING_TIERS = [
//   {
//     price: "$1,800",
//     title: "Website Design",
//     subtitle: "Ideal for Startup Owners, MVP Builders",
//     features: [
//       "Design Style Guide",
//       "Responsive across all devices",
//       "Unlimited Revisions",
//       "Developer Handoff",
//     ],
//     highlight: false,
//   },
//   {
//     price: "$3,500",
//     title: "Web/Mobile App Design",
//     subtitle: "For SaaS & fast MVP launches.",
//     features: [
//       "UX Research",
//       "Design System with token",
//       "Unlimited Revisions",
//       "Developer handoff",
//       "Transparent communication",
//       "Responsive across all devices",
//     ],
//     highlight: true,
//   },
//   {
//     price: "$3,800+",
//     title: "Monthly Subscription",
//     subtitle: "Ideal for Startup or MVP",
//     features: [
//       "Monthly dedicated designers",
//       "Adhoc design support",
//       "Right designer for right product",
//       "Transparent communication",
//     ],
//     highlight: false,
//   },
// ];

// export default function PricingPage() {
//   return (
//     <main className="bg-[#050505] min-h-screen text-white pt-32 pb-32 relative overflow-hidden selection:bg-[#FF6B6B] selection:text-black">
//       {/* Background ambient glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#6B21A8]/20 blur-[120px] pointer-events-none" />

//       <section className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <h2 className="text-[#FF6B6B] text-xs font-mono uppercase tracking-[0.4em] mb-4">
//             Investment
//           </h2>
//           <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6">
//             TRANSPARENT <span className="text-white/40">VALUE</span>
//           </h1>
//         </div>

//         {/* Pricing Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
//           {PRICING_TIERS.map((tier, i) => (
//             <div
//               key={i}
//               className={`bg-[#0A0A0F] rounded-3xl p-10 border transition-all duration-300 flex flex-col ${
//                 tier.highlight
//                   ? "border-[#8B5CF6]/50 shadow-[0_0_50px_rgba(139,92,246,0.15)] md:scale-105 min-h-[600px] z-20"
//                   : "border-white/5 hover:border-white/10 min-h-[500px] z-10"
//               }`}
//             >
//               <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
//                 {tier.price}
//               </h2>
//               <p className="text-white/60 text-sm mb-6 min-h-[40px]">
//                 {tier.subtitle}
//               </p>
//               <h3
//                 className={`text-2xl font-display font-bold mb-8 ${tier.highlight ? "text-[#C4B5FD]" : "text-[#D9F99D]"}`}
//               >
//                 {tier.title}
//               </h3>

//               <ul className="space-y-5 mb-10 flex-1">
//                 {tier.features.map((feat, index) => (
//                   <li key={index} className="flex items-start gap-3">
//                     <Check
//                       className={`w-5 h-5 shrink-0 ${tier.highlight ? "text-[#C4B5FD]" : "text-white/40"}`}
//                     />
//                     <span className="text-white/80 text-sm leading-snug">
//                       {feat}
//                     </span>
//                   </li>
//                 ))}
//               </ul>

//               {/* These buttons now route to the Ecosystem page */}
//               <Link
//                 href="/ecosystem"
//                 className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all ${
//                   tier.highlight
//                     ? "bg-[#6D28D9] text-white hover:bg-[#5B21B6]"
//                     : "bg-[#4C1D95] text-white hover:bg-[#5B21B6]"
//                 }`}
//               >
//                 Explore More <ArrowRight size={16} />
//               </Link>
//             </div>
//           ))}
//         </div>

//         {/* Big Ecosystem Link at the Bottom */}
//         <div className="mt-16 flex justify-center">
//           <Link
//             href="/ecosystem"
//             className="bg-[#111111] border border-white/10 text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-[#8B5CF6] transition-colors shadow-2xl"
//           >
//             <span className="w-5 h-5 bg-[#8B5CF6] rounded-full flex items-center justify-center text-white text-xs">
//               R
//             </span>
//             Accelerate to Ecosystem
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRICING_TIERS = [
  {
    price: "$1,800",
    title: "Website Design",
    subtitle: "Ideal for Startup Owners, MVP Builders",
    features: [
      "Design Style Guide",
      "Responsive across all devices",
      "Unlimited Revisions",
      "Developer Handoff",
    ],
    highlight: false,
  },
  {
    price: "$3,500",
    title: "Web/Mobile App Design",
    subtitle: "For SaaS & fast MVP launches.",
    features: [
      "UX Research",
      "Design System with token",
      "Unlimited Revisions",
      "Developer handoff",
      "Transparent communication",
      "Responsive across all devices",
    ],
    highlight: true,
  },
  {
    price: "$3,800+",
    title: "Monthly Subscription",
    subtitle: "Ideal for Startup or MVP",
    features: [
      "Monthly dedicated designers",
      "Adhoc design support",
      "Right designer for right product",
      "Transparent communication",
    ],
    highlight: false,
  },
];

// Generates the mathematical data for the light-speed beams
const BEAMS = Array.from({ length: 120 }).map((_, i) => ({
  id: i,
  angle: Math.random() * 360,
  distance: Math.random() * 100 + 20,
  length: Math.random() * 150 + 50,
  thickness: Math.random() * 2 + 1,
  delay: Math.random() * 0.4,
  duration: Math.random() * 0.5 + 0.4,
}));

export default function PricingPage() {
  const router = useRouter();
  const [isWarping, setIsWarping] = useState(false);

  const handleEcosystemTransition = () => {
    setIsWarping(true);
    setTimeout(() => {
      router.push("/ecosystem");
    }, 1500);
  };

  return (
    <>
      {/* --- THE TIMELAPSE / LIGHT-SPEED WARP OVERLAY --- */}
      <AnimatePresence>
        {isWarping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99999] bg-black flex items-center justify-center overflow-hidden pointer-events-none perspective-[1000px]"
          >
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 15, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeIn" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {BEAMS.map((beam) => (
                <motion.div
                  key={beam.id}
                  className="absolute origin-left bg-gradient-to-r from-transparent via-[#FF6B6B] to-white rounded-full shadow-[0_0_15px_#FF6B6B]"
                  style={{
                    width: `${beam.length}px`,
                    height: `${beam.thickness}px`,
                    transform: `rotate(${beam.angle}deg) translateX(${beam.distance}px)`,
                  }}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scaleX: [0, 3, 10],
                    x: [0, 1000],
                  }}
                  transition={{
                    duration: beam.duration,
                    delay: beam.delay,
                    ease: "easeIn",
                  }}
                />
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 100 }}
                transition={{ delay: 1, duration: 0.5, ease: "easeIn" }}
                className="w-10 h-10 bg-white rounded-full shadow-[0_0_100px_50px_rgba(255,255,255,1)]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="bg-[#050505] min-h-screen text-white pt-32 pb-32 relative overflow-hidden selection:bg-[#FF6B6B] selection:text-black">
        {/* Swapped the purple blur for a subtle Coral Pink blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FF6B6B]/15 blur-[120px] pointer-events-none" />

        <section className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[#FF6B6B] text-xs font-mono uppercase tracking-[0.4em] mb-4">
              Investment
            </h2>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6">
              TRANSPARENT <span className="text-white/40">VALUE</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {PRICING_TIERS.map((tier, i) => (
              <div
                key={i}
                className={`bg-[#0A0A0F] rounded-3xl p-10 border transition-all duration-300 flex flex-col ${
                  tier.highlight
                    ? "border-[#FF6B6B]/50 shadow-[0_0_50px_rgba(255,107,107,0.15)] md:scale-105 min-h-[600px] z-20"
                    : "border-white/5 hover:border-white/10 min-h-[500px] z-10"
                }`}
              >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  {tier.price}
                </h2>
                <p className="text-white/60 text-sm mb-6 min-h-[40px]">
                  {tier.subtitle}
                </p>
                <h3
                  className={`text-2xl font-display font-bold mb-8 ${tier.highlight ? "text-[#FF6B6B]" : "text-white"}`}
                >
                  {tier.title}
                </h3>

                <ul className="space-y-5 mb-10 flex-1">
                  {tier.features.map((feat, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 shrink-0 ${tier.highlight ? "text-[#FF6B6B]" : "text-white/40"}`}
                      />
                      <span className="text-white/80 text-sm leading-snug">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleEcosystemTransition}
                  className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all ${
                    tier.highlight
                      ? "bg-[#FF6B6B] text-black hover:bg-white hover:text-black shadow-[0_0_20px_rgba(255,107,107,0.4)]"
                      : "bg-white/10 text-white hover:bg-[#FF6B6B] hover:text-black"
                  }`}
                >
                  Explore More <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              href="/ecosystem"
              className="bg-[#111111] border border-white/10 text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-[#FF6B6B] hover:text-black transition-colors shadow-2xl"
            >
              <span className="w-5 h-5 bg-[#FF6B6B] rounded-full flex items-center justify-center text-black text-xs">
                R
              </span>
              Accelerate to Ecosystem
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}