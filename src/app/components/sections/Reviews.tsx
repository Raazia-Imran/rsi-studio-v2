// // // "use client";
// // // import { motion } from "framer-motion";

// // // const REVIEWS = Array(10).fill({
// // //   text: "RSI transformed our digital authority.",
// // //   author: "CTO, Yacht Co.",
// // // });

// // // export default function Reviews() {
// // //   return (
// // //     <section className="py-24 bg-black overflow-hidden border-y border-white/5">
// // //       {/* Reel 1: Moving Left */}
// // //       <div className="flex mb-8">
// // //         <motion.div
// // //           animate={{ x: [0, -1920] }}
// // //           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
// // //           className="flex gap-8 whitespace-nowrap"
// // //         >
// // //           {REVIEWS.map((_, i) => (
// // //             <div
// // //               key={i}
// // //               className="w-[400px] p-8 bg-white/5 rounded-2xl border border-white/10 shrink-0"
// // //             >
// // //               <p className="text-white/80 italic mb-4">"{_.text}"</p>
// // //               <p className="text-[#FF6B6B] text-xs font-bold uppercase tracking-widest">
// // //                 {_.author}
// // //               </p>
// // //             </div>
// // //           ))}
// // //         </motion.div>
// // //       </div>

// // //       {/* Reel 2: Moving Right */}
// // //       <div className="flex">
// // //         <motion.div
// // //           animate={{ x: [-1920, 0] }}
// // //           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
// // //           className="flex gap-8 whitespace-nowrap"
// // //         >
// // //           {REVIEWS.map((_, i) => (
// // //             <div
// // //               key={i}
// // //               className="w-[400px] p-8 bg-white/5 rounded-2xl border border-white/10 shrink-0"
// // //             >
// // //               <p className="text-white/80 italic mb-4">"{_.text}"</p>
// // //               <p className="text-[#FF6B6B] text-xs font-bold uppercase tracking-widest">
// // //                 {_.author}
// // //               </p>
// // //             </div>
// // //           ))}
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // "use client";

// // import { motion } from "framer-motion";
// // import { Play } from "lucide-react";

// // const VIDEOS = [
// //   {
// //     name: "Victor Okon",
// //     role: "CEO & Co-founder at [redacted]",
// //     bg: "bg-[#f97316]",
// //   },
// //   { name: "Neil Swift", role: "Founder at [redacted]", bg: "bg-[#0ea5e9]" },
// //   {
// //     name: "Rihun Taufik",
// //     role: "Product Executive at [redacted]",
// //     bg: "bg-[#84cc16]",
// //   },
// //   {
// //     name: "Jahanara Rahman",
// //     role: "CEO & Founder at [redacted]",
// //     bg: "bg-[#ef4444]",
// //   },
// // ];

// // export default function Reviews() {
// //   return (
// //     <section className="bg-black py-32 px-6">
// //       <div className="container mx-auto max-w-7xl">
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
// //           {VIDEOS.map((video, i) => (
// //             <motion.div
// //               key={i}
// //               whileHover={{ y: -10 }}
// //               className={`relative h-[500px] rounded-[2rem] overflow-hidden ${video.bg} shadow-2xl flex flex-col justify-between group cursor-pointer`}
// //             >
// //               {/* Play Button Overlay */}
// //               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/20">
// //                 <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center">
// //                   <Play className="text-white ml-1 w-8 h-8 fill-white" />
// //                 </div>
// //               </div>

// //               {/* Placeholder for Face/Video */}
// //               <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

// //               <div className="relative z-20 p-6 mt-auto">
// //                 <div className="w-8 h-8 bg-white/20 rounded-md mb-4 backdrop-blur-sm"></div>
// //                 <p className="text-white text-sm font-medium leading-relaxed mb-6 line-clamp-2">
// //                   "Fantastic experience working with the team. They brought our
// //                   vision to life perfectly and exceeded expectations."
// //                 </p>
// //                 <div>
// //                   <h4 className="text-white font-bold">{video.name}</h4>
// //                   <p className="text-white/60 text-[10px] uppercase tracking-widest">
// //                     {video.role}
// //                   </p>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import { Star } from "lucide-react";

// // --- 100% SRS Compliant Review Distribution ---
// // 6x 5-stars | 4x 4-stars | 1x 3-stars | 1x 1-stars

// const ROW_ONE_REVIEWS = [
//   {
//     id: 1,
//     name: "Sarah Jenkins",
//     role: "Founder, TechFlow",
//     rating: 5,
//     text: "RSI Studio completely transformed our web presence. The strict 6-client limit meant we got unparalleled attention to detail. Absolute game-changers.",
//     width: "w-[450px]",
//   },
//   {
//     id: 2,
//     name: "Marcus T.",
//     role: "CEO, InnovateX",
//     rating: 4,
//     text: "Incredible design and development. Took slightly longer than expected due to their perfectionism, but the end result is an absolute masterpiece.",
//     width: "w-[380px]",
//   },
//   {
//     id: 3,
//     name: "Elena Rodriguez",
//     role: "Director, Solstice SaaS",
//     rating: 5,
//     text: "Worth every penny of the $10k tier. Their custom React architecture is blazingly fast and the developer handoff was flawless.",
//     width: "w-[400px]",
//   },
//   {
//     id: 4,
//     name: "Chris D.",
//     role: "Local Business Owner",
//     rating: 3,
//     text: "The aesthetic is gorgeous, but the ecosystem they built was honestly a bit too complex for my small bakery. Definitely built for high-end tech SaaS.",
//     width: "w-[480px]",
//   },
//   {
//     id: 5,
//     name: "David Kim",
//     role: "VP Marketing, Aligned",
//     rating: 5,
//     text: "I've worked with dozens of agencies. RSI is the only one that engineers a true digital ecosystem instead of just handing you a template.",
//     width: "w-[350px]",
//   },
//   {
//     id: 6,
//     name: "Nina S.",
//     role: "Product Lead",
//     rating: 4,
//     text: "Great work on the Advanced System tier. The Framer Motion integration they added makes our site feel incredibly expensive.",
//     width: "w-[420px]",
//   },
// ];

// const ROW_TWO_REVIEWS = [
//   {
//     id: 7,
//     name: "Anonymous",
//     role: "Waitlisted Client",
//     rating: 1,
//     text: "Put on a 3-month waitlist because they refused to break their 6-client limit to onboard us. Good portfolio, but the exclusivity is frustratingly rigid.",
//     width: "w-[460px]", // The clever 1-star flex
//   },
//   {
//     id: 8,
//     name: "Sophie M.",
//     role: "Startup Founder",
//     rating: 5,
//     text: "Our conversions doubled in the first month. The UI/UX research they did before even touching the code is what sets them apart.",
//     width: "w-[380px]",
//   },
//   {
//     id: 9,
//     name: "Tom H.",
//     role: "Operations Manager",
//     rating: 4,
//     text: "Very high quality. The $500 monthly managed presence is completely worth it for the peace of mind alone.",
//     width: "w-[350px]",
//   },
//   {
//     id: 10,
//     name: "James W.",
//     role: "E-commerce Director",
//     rating: 5,
//     text: "Their visual aesthetic is unmatched. True artisans of the web.",
//     width: "w-[320px]",
//   },
//   {
//     id: 11,
//     name: "Rachel B.",
//     role: "Creative Director",
//     rating: 4,
//     text: "Beautiful bespoke work. Not a generic WordPress template in sight. Transparent systems exactly as promised.",
//     width: "w-[420px]",
//   },
//   {
//     id: 12,
//     name: "Alex P.",
//     role: "Enterprise CTO",
//     rating: 5,
//     text: "We migrated our legacy system to their custom Next.js stack. The performance gains were immediate. Highly recommend.",
//     width: "w-[400px]",
//   },
// ];

// // Helper to render exactly the right amount of glowing stars
// const RenderStars = ({ count }: { count: number }) => {
//   return (
//     <div className="flex gap-1 mb-4">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <Star
//           key={i}
//           size={14}
//           className={`${
//             i < count
//               ? "fill-[#FF6B6B] text-[#FF6B6B]"
//               : "fill-white/10 text-white/10"
//           }`}
//         />
//       ))}
//     </div>
//   );
// };

// export default function Reviews() {
//   return (
//     <section className="bg-[#050505] py-32 overflow-hidden relative border-t border-white/5">
//       {/* Background Ambient Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF6B6B]/10 blur-[150px] pointer-events-none rounded-full" />

//       <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
//         <div>
//           <h2 className="text-[#FF6B6B] text-xs font-mono uppercase tracking-[0.4em] mb-4">
//             Client Verification
//           </h2>
//           <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter">
//             THE <span className="text-white/40">CONSENSUS</span>
//           </h3>
//         </div>
//         <p className="text-white/50 text-sm max-w-sm md:text-right font-mono">
//           We let the architecture speak for itself. Raw, unfiltered data from
//           our ecosystem partners.
//         </p>
//       </div>

//       {/* --- MULTILAYER REEL CONTAINER --- */}
//       <div className="relative flex flex-col gap-6 w-full overflow-hidden mask-image-edges">
//         {/* ROW 1: Scrolling Left */}
//         <div className="flex w-[200%] animate-marquee-left hover:[animation-play-state:paused]">
//           {/* We map the row twice so it loops infinitely without snapping */}
//           {[...ROW_ONE_REVIEWS, ...ROW_ONE_REVIEWS].map((review, i) => (
//             <div
//               key={i}
//               className={`${review.width} shrink-0 mx-3 bg-[#0A0A0F] border border-white/5 hover:border-[#FF6B6B]/30 rounded-3xl p-8 flex flex-col justify-between shadow-2xl transition-colors group relative overflow-hidden`}
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//               <div className="relative z-10">
//                 <RenderStars count={review.rating} />
//                 <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8">
//                   "{review.text}"
//                 </p>
//               </div>
//               <div className="relative z-10 border-t border-white/5 pt-4 mt-auto">
//                 <h4 className="text-white font-bold text-sm tracking-wide">
//                   {review.name}
//                 </h4>
//                 <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest">
//                   {review.role}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ROW 2: Scrolling Right (Puzzle layout with offset sizes) */}
//         <div className="flex w-[200%] animate-marquee-right hover:[animation-play-state:paused]">
//           {[...ROW_TWO_REVIEWS, ...ROW_TWO_REVIEWS].map((review, i) => (
//             <div
//               key={i}
//               className={`${review.width} shrink-0 mx-3 bg-[#0A0A0F] border border-white/5 hover:border-[#FF6B6B]/30 rounded-3xl p-8 flex flex-col justify-between shadow-2xl transition-colors group relative overflow-hidden`}
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//               <div className="relative z-10">
//                 <RenderStars count={review.rating} />
//                 <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8">
//                   "{review.text}"
//                 </p>
//               </div>
//               <div className="relative z-10 border-t border-white/5 pt-4 mt-auto">
//                 <h4 className="text-white font-bold text-sm tracking-wide">
//                   {review.name}
//                 </h4>
//                 <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest">
//                   {review.role}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Embedded CSS for flawless, performant Marquee animations */}
//       <style jsx global>{`
//         .mask-image-edges {
//           mask-image: linear-gradient(
//             to right,
//             transparent,
//             black 10%,
//             black 90%,
//             transparent
//           );
//           -webkit-mask-image: linear-gradient(
//             to right,
//             transparent,
//             black 10%,
//             black 90%,
//             transparent
//           );
//         }

//         @keyframes marquee-left {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         @keyframes marquee-right {
//           0% {
//             transform: translateX(-50%);
//           }
//           100% {
//             transform: translateX(0);
//           }
//         }

//         .animate-marquee-left {
//           animation: marquee-left 50s linear infinite;
//         }

//         .animate-marquee-right {
//           animation: marquee-right 50s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";

// --- TRUE OG PUZZLE DATA (100% SRS Compliant) ---
// 12 Reviews (6x 5-stars, 4x 4-stars, 1x 3-stars, 1x 1-stars)
// Notice the `spanClass`. This mathematically locks them into a perfect 6x2 grid.

const ROW_ONE = [
  // 1. Large (2x2)
  {
    spanClass: "col-span-2 row-span-2",
    stars: 5,
    name: "Sarah Jenkins",
    role: "Founder, TechFlow",
    text: "Incredible system architecture. RSI completely transformed our internal operations. The strict 6-client limit meant we got unparalleled attention to detail. Absolute game-changers.",
  },
  // 2. Tall (1x2)
  {
    spanClass: "col-span-1 row-span-2",
    stars: 4,
    name: "Marcus T.",
    role: "CEO, InnovateX",
    text: "Highly professional execution. The custom Next.js build is flawless.",
  },
  // 3. Small (1x1)
  {
    spanClass: "col-span-1 row-span-1",
    stars: 5,
    name: "Elena R.",
    role: "Director, SaaS",
    text: "Pixel perfect engineering. Flawless handoff.",
  },
  // 4. Wide (2x1)
  {
    spanClass: "col-span-2 row-span-1",
    stars: 3,
    name: "Chris D.",
    role: "Business Owner",
    text: "Gorgeous aesthetic, but the ecosystem was honestly a bit too complex for my small business. Built for SaaS.",
  },
  // 5. Wide (2x1)
  {
    spanClass: "col-span-2 row-span-1",
    stars: 4,
    name: "Nina S.",
    role: "Product Lead",
    text: "Great UI/UX capabilities. The Framer Motion integration makes our platform feel incredibly expensive.",
  },
  // 6. Small (1x1)
  {
    spanClass: "col-span-1 row-span-1",
    stars: 5,
    name: "David Kim",
    role: "VP Marketing",
    text: "A true strategic partner.",
  },
];

const ROW_TWO = [
  // 1. Tall (1x2)
  {
    spanClass: "col-span-1 row-span-2",
    stars: 4,
    name: "Tom H.",
    role: "Operations Mgr",
    text: "Solid backend infrastructure. The API integrations they wrote saved us hundreds of hours of manual labor.",
  },
  // 2. Large (2x2)
  {
    spanClass: "col-span-2 row-span-2",
    stars: 5,
    name: "James W.",
    role: "E-commerce Dir",
    text: "Absolutely stunning futuristic design. True artisans of the modern web. The $500 monthly managed presence is completely worth it for peace of mind.",
  },
  // 3. Wide (2x1) - The 1 Star Flex
  {
    spanClass: "col-span-2 row-span-1",
    stars: 1,
    name: "Anonymous",
    role: "Waitlisted Client",
    text: "Put on a 3-month waitlist because they refused to break their 6-client limit to onboard us. Good portfolio, but the exclusivity is frustratingly rigid.",
  },
  // 4. Small (1x1)
  {
    spanClass: "col-span-1 row-span-1",
    stars: 5,
    name: "Sophie M.",
    role: "Startup Founder",
    text: "Conversions doubled in month one.",
  },
  // 5. Small (1x1)
  {
    spanClass: "col-span-1 row-span-1",
    stars: 5,
    name: "Alex P.",
    role: "Enterprise CTO",
    text: "Performance gains were immediate.",
  },
  // 6. Wide (2x1)
  {
    spanClass: "col-span-2 row-span-1",
    stars: 4,
    name: "Rachel B.",
    role: "Creative Dir",
    text: "Very smooth transitions and premium aesthetics. Transparent systems exactly as promised.",
  },
];

const RenderStars = ({ count }: { count: number }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={
          i < count
            ? "fill-[#FF6B6B] text-[#FF6B6B]"
            : "fill-white/10 text-white/10"
        }
      />
    ))}
  </div>
);

export default function Reviews() {
  return (
    <section className="bg-[#050505] py-32 overflow-hidden relative border-y border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF6B6B]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-[#FF6B6B] text-xs font-mono uppercase tracking-[0.4em] mb-4">
            Client Verification
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter">
            THE <span className="text-white/40">CONSENSUS</span>
          </h3>
        </div>
        <p className="text-white/50 text-sm max-w-sm md:text-right font-mono">
          We let the architecture speak for itself. Raw, unfiltered data from
          our ecosystem partners.
        </p>
      </div>

      {/* --- MULTILAYER MASONRY PUZZLE REEL --- */}
      <div className="relative flex flex-col gap-4 w-full mask-image-edges">
        {/* REEL 1: Moves Left */}
        <Marquee speed={40} gradient={false} direction="left">
          {/* The Grid Container: 6 columns x 2 rows.
            This mathematically forces the large, tall, wide, and small blocks to interlock perfectly into a solid rectangle.
          */}
          <div className="grid grid-cols-6 auto-rows-[160px] gap-4 w-[1600px] mr-4">
            {ROW_ONE.map((review, i) => (
              <div
                key={`r1-${i}`}
                className={`${review.spanClass} bg-[#111111] border border-white/5 hover:border-[#FF6B6B]/40 hover:bg-[#1a1a1a] rounded-3xl p-6 flex flex-col justify-between shadow-xl transition-all group overflow-hidden`}
              >
                <div>
                  <RenderStars count={review.stars} />
                  <p className="text-white/80 text-sm leading-relaxed font-medium">
                    "{review.text}"
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <h4 className="text-white font-bold text-sm tracking-wide">
                    {review.name}
                  </h4>
                  <p className="text-[#FF6B6B] text-[10px] font-mono uppercase tracking-widest mt-1">
                    {review.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Marquee>

        {/* REEL 2: Moves Right */}
        <Marquee speed={35} gradient={false} direction="right">
          <div className="grid grid-cols-6 auto-rows-[160px] gap-4 w-[1600px] mr-4">
            {ROW_TWO.map((review, i) => (
              <div
                key={`r2-${i}`}
                className={`${review.spanClass} bg-[#111111] border border-white/5 hover:border-[#FF6B6B]/40 hover:bg-[#1a1a1a] rounded-3xl p-6 flex flex-col justify-between shadow-xl transition-all group overflow-hidden`}
              >
                <div>
                  <RenderStars count={review.stars} />
                  <p className="text-white/80 text-sm leading-relaxed font-medium">
                    "{review.text}"
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <h4 className="text-white font-bold text-sm tracking-wide">
                    {review.name}
                  </h4>
                  <p className="text-[#FF6B6B] text-[10px] font-mono uppercase tracking-widest mt-1">
                    {review.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      <style jsx global>{`
        .mask-image-edges {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 5%,
            black 95%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 5%,
            black 95%,
            transparent
          );
        }
      `}</style>
    </section>
  );
}