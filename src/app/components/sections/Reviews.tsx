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

import { useState } from "react";
import { Star } from "lucide-react";

// ─── GRID CONSTANTS ───────────────────────────────────────────────────────────
const CELL_W = 170;   // px per column unit
const CELL_H = 168;   // px per row unit
const COLS   = 6;
const ROWS   = 2;
const TAB    = 16;    // tab protrusion in px
const TAB_W  = 30;    // tab neck width in px
const CR     = 12;    // corner radius

const GRID_W = COLS * CELL_W; // 1020
const GRID_H = ROWS * CELL_H; // 336

// ─── REVIEW DATA ──────────────────────────────────────────────────────────────
const ROW_ONE = [
  { col:0, row:0, colSpan:2, rowSpan:2, stars:5, name:"Sarah Jenkins", role:"Founder, TechFlow",   text:"Incredible system architecture. RSI completely transformed our internal operations. The strict 6-client limit meant we got unparalleled attention to detail. Absolute game-changers." },
  { col:2, row:0, colSpan:1, rowSpan:2, stars:4, name:"Marcus T.",     role:"CEO, InnovateX",      text:"Highly professional execution. The custom Next.js build is flawless and delivered ahead of schedule." },
  { col:3, row:0, colSpan:1, rowSpan:1, stars:5, name:"Elena R.",      role:"Director, SaaS",      text:"Pixel perfect engineering. Flawless handoff." },
  { col:4, row:0, colSpan:2, rowSpan:1, stars:3, name:"Chris D.",      role:"Business Owner",      text:"Gorgeous aesthetic, but the ecosystem was honestly a bit too complex for my small business." },
  { col:3, row:1, colSpan:2, rowSpan:1, stars:4, name:"Nina S.",       role:"Product Lead",        text:"Great UI/UX capabilities. The Framer Motion integration makes our platform feel incredibly expensive." },
  { col:5, row:1, colSpan:1, rowSpan:1, stars:5, name:"David Kim",     role:"VP Marketing",        text:"A true strategic partner." },
];

const ROW_TWO = [
  { col:0, row:0, colSpan:1, rowSpan:2, stars:4, name:"Tom H.",    role:"Operations Mgr",    text:"Solid backend infrastructure. The API integrations they wrote saved us hundreds of hours of manual labor." },
  { col:1, row:0, colSpan:2, rowSpan:2, stars:5, name:"James W.",  role:"E-commerce Dir",    text:"Absolutely stunning futuristic design. True artisans of the modern web. The $500 monthly managed presence is completely worth it for peace of mind." },
  { col:3, row:0, colSpan:2, rowSpan:1, stars:1, name:"Anonymous", role:"Waitlisted Client", text:"Put on a 3-month waitlist because they refused to break their 6-client limit. Good portfolio, but the exclusivity is frustratingly rigid." },
  { col:5, row:0, colSpan:1, rowSpan:1, stars:5, name:"Sophie M.", role:"Startup Founder",   text:"Conversions doubled in month one." },
  { col:3, row:1, colSpan:1, rowSpan:1, stars:5, name:"Alex P.",   role:"Enterprise CTO",    text:"Performance gains were immediate." },
  { col:4, row:1, colSpan:2, rowSpan:1, stars:4, name:"Rachel B.", role:"Creative Dir",      text:"Very smooth transitions and premium aesthetics. Transparent systems exactly as promised." },
];

// ─── SEAM DIRECTION TABLE ─────────────────────────────────────────────────────
// Defines, for each internal shared edge, which side gets the TAB (protrusion).
//
// "v{col},{row}" = vertical seam at x = col*CELL_W, spanning grid-row `row`
//   true  → tab protrudes to the RIGHT  (card on left has a bump on its right edge)
//   false → tab protrudes to the LEFT   (card on right has a bump on its left edge)
//
// "h{col},{row}" = horizontal seam at y = row*CELL_H, spanning grid-col `col`
//   true  → tab protrudes DOWNWARD  (card above has a bump on its bottom edge)
//   false → tab protrudes UPWARD    (card below has a bump on its top edge)
//
// We only define seams that are internal (not on the outer border of the 6×2 grid).
const SEAM: Record<string, boolean> = {
  // Vertical seams (col 1..5, row 0..1)
  "v1,0": true,  "v1,1": false,
  "v2,0": false, "v2,1": true,
  "v3,0": true,  "v3,1": false,
  "v4,0": false, "v4,1": true,
  "v5,0": true,  "v5,1": false,
  // Horizontal seams (col 0..5, at row boundary 1)
  "h0,1": true,
  "h1,1": false,
  "h2,1": true,
  "h3,1": false,
  "h4,1": true,
  "h5,1": false,
};

// ─── PATH BUILDER ─────────────────────────────────────────────────────────────
// Draws an SVG path for one puzzle piece defined by grid position & span.
// Tabs protrude OUTWARD, blanks go INWARD — and every adjacent pair matches.
function buildPath(col: number, row: number, colSpan: number, rowSpan: number): string {
  const x0 = col * CELL_W;
  const y0 = row * CELL_H;
  const x1 = x0 + colSpan * CELL_W;
  const y1 = y0 + rowSpan * CELL_H;

  // Emit a tab or blank bump centered at (midX, edgeY) or (edgeX, midY)
  // dir: "up"|"down"|"left"|"right" = direction tab protrudes
  // For a blank (inward), we flip the direction
  function tabBump(
    axis: "h" | "v",
    mid: number,
    edge: number,
    tabOut: boolean, // true = protrudes outward from this piece
  ): string {
    const t = TAB;
    const hw = TAB_W / 2;
    if (axis === "h") {
      // horizontal edge — bump goes up (negative y) or down (positive y)
      const ty = tabOut ? edge - t : edge + t; // outward = away from center
      return [
        `L ${mid - hw} ${edge}`,
        `C ${mid - hw} ${ty} ${mid + hw} ${ty} ${mid + hw} ${edge}`,
      ].join(" ");
    } else {
      // vertical edge — bump goes left or right
      const tx = tabOut ? edge + t : edge - t;
      return [
        `L ${edge} ${mid - hw}`,
        `C ${tx} ${mid - hw} ${tx} ${mid + hw} ${edge} ${mid + hw}`,
      ].join(" ");
    }
  }

  let d = "";

  // ── TOP EDGE (y = y0), direction: left → right ──
  d += `M ${x0 + CR} ${y0} `;
  for (let c = col; c < col + colSpan; c++) {
    const key = `h${c},${row}`;
    if (row > 0 && SEAM[key] !== undefined) {
      const mid = c * CELL_W + CELL_W / 2;
      // SEAM true = tab goes DOWN (away from card above, INTO card below)
      // We are traversing the TOP edge of this card (which is the BOTTOM of the card above)
      // If SEAM[key]=true → tab protrudes downward → for our top edge it's a blank (inward, upward protrusion toward us)
      const tabOut = !SEAM[key]; // invert: we're on the receiving side
      d += tabBump("h", mid, y0, tabOut) + " ";
    }
  }
  d += `L ${x1 - CR} ${y0} Q ${x1} ${y0} ${x1} ${y0 + CR} `;

  // ── RIGHT EDGE (x = x1), direction: top → bottom ──
  for (let r = row; r < row + rowSpan; r++) {
    const key = `v${col + colSpan},${r}`;
    if (col + colSpan < COLS && SEAM[key] !== undefined) {
      const mid = r * CELL_H + CELL_H / 2;
      // SEAM true = tab goes RIGHT → our right edge has a tab (outward)
      const tabOut = SEAM[key];
      d += tabBump("v", mid, x1, tabOut) + " ";
    }
  }
  d += `L ${x1} ${y1 - CR} Q ${x1} ${y1} ${x1 - CR} ${y1} `;

  // ── BOTTOM EDGE (y = y1), direction: right → left ──
  for (let c = col + colSpan - 1; c >= col; c--) {
    const key = `h${c},${row + rowSpan}`;
    if (row + rowSpan < ROWS && SEAM[key] !== undefined) {
      const mid = c * CELL_W + CELL_W / 2;
      // SEAM true = tab goes DOWN → our bottom edge has a tab (outward downward)
      const tabOut = SEAM[key];
      // Traversing right→left, so emit bump in reverse x order
      d += [
        `L ${mid + TAB_W / 2} ${y1}`,
        `C ${mid + TAB_W / 2} ${tabOut ? y1 + TAB : y1 - TAB} ${mid - TAB_W / 2} ${tabOut ? y1 + TAB : y1 - TAB} ${mid - TAB_W / 2} ${y1}`,
      ].join(" ") + " ";
    }
  }
  d += `L ${x0 + CR} ${y1} Q ${x0} ${y1} ${x0} ${y1 - CR} `;

  // ── LEFT EDGE (x = x0), direction: bottom → top ──
  for (let r = row + rowSpan - 1; r >= row; r--) {
    const key = `v${col},${r}`;
    if (col > 0 && SEAM[key] !== undefined) {
      const mid = r * CELL_H + CELL_H / 2;
      // SEAM true = tab goes RIGHT → for our left edge it's a blank (inward, tab protrudes left)
      const tabOut = !SEAM[key]; // invert
      // Traversing bottom→top, emit bump in reverse y order
      d += [
        `L ${x0} ${mid + TAB_W / 2}`,
        `C ${tabOut ? x0 - TAB : x0 + TAB} ${mid + TAB_W / 2} ${tabOut ? x0 - TAB : x0 + TAB} ${mid - TAB_W / 2} ${x0} ${mid - TAB_W / 2}`,
      ].join(" ") + " ";
    }
  }
  d += `L ${x0} ${y0 + CR} Q ${x0} ${y0} ${x0 + CR} ${y0} Z`;

  return d;
}

// ─── TEXT WRAP HELPER ─────────────────────────────────────────────────────────
function wrapText(text: string, maxChars: number, maxLines: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const test = line ? line + " " + w : w;
    if (test.length > maxChars && line) {
      lines.push(line);
      line = w;
      if (lines.length >= maxLines) break;
    } else {
      line = test;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);
  return lines;
}

// ─── PUZZLE GRID ──────────────────────────────────────────────────────────────
type CardDef = typeof ROW_ONE[0];

function PuzzleGrid({
  cards,
  uid,
}: {
  cards: CardDef[];
  uid: string;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const PAD = TAB + 2;

  return (
    <svg
      width={GRID_W + PAD * 2}
      height={GRID_H + PAD * 2}
      viewBox={`${-PAD} ${-PAD} ${GRID_W + PAD * 2} ${GRID_H + PAD * 2}`}
      style={{ display: "block", flexShrink: 0 }}
      overflow="visible"
    >
      <defs>
        {cards.map((c, i) => (
          <clipPath key={i} id={`${uid}-cp-${i}`}>
            <path d={buildPath(c.col, c.row, c.colSpan, c.rowSpan)} />
          </clipPath>
        ))}
      </defs>

      {cards.map((card, i) => {
        const path = buildPath(card.col, card.row, card.colSpan, card.rowSpan);
        const isHov = hovered === i;
        const px = card.col * CELL_W;
        const py = card.row * CELL_H;
        const pw = card.colSpan * CELL_W;
        const ph = card.rowSpan * CELL_H;

        const fontSize = pw >= 300 ? 12 : pw >= 170 ? 11 : 10;
        const charsPerLine = Math.floor((pw - 38) / (fontSize * 0.58));
        const maxLines = Math.floor((ph - 82) / (fontSize * 1.6));
        const lines = wrapText(`"${card.text}"`, charsPerLine, maxLines);

        return (
          <g
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Ambient shadow */}
            <path
              d={path}
              fill="rgba(0,0,0,0.55)"
              transform="translate(0,4)"
              style={{ filter: "blur(7px)", pointerEvents: "none" }}
            />

            {/* Card fill */}
            <path
              d={path}
              fill={isHov ? "#1e1e1e" : "#141414"}
              style={{ transition: "fill 0.2s" }}
            />

            {/* Subtle inner highlight on hover */}
            {isHov && (
              <path
                d={path}
                fill="none"
                stroke="rgba(255,107,107,0.08)"
                strokeWidth="12"
              />
            )}

            {/* Border */}
            <path
              d={path}
              fill="none"
              stroke={isHov ? "rgba(255,107,107,0.6)" : "rgba(255,255,255,0.07)"}
              strokeWidth={isHov ? 1.5 : 1}
              style={{ transition: "stroke 0.2s, stroke-width 0.2s" }}
            />

            {/* Content (clipped) */}
            <g clipPath={`url(#${uid}-cp-${i})`}>
              {/* Stars */}
              {Array.from({ length: 5 }).map((_, si) => {
                const filled = si < card.stars;
                const cx = px + 18 + si * 15;
                const cy = py + 24;
                const pts = Array.from({ length: 5 }).map((_, k) => {
                  const a = (k * 4 * Math.PI) / 5 - Math.PI / 2;
                  return `${cx + 5 * Math.cos(a)},${cy + 5 * Math.sin(a)}`;
                }).join(" ");
                return (
                  <polygon
                    key={si}
                    points={pts}
                    fill={filled ? "#FF6B6B" : "rgba(255,255,255,0.1)"}
                  />
                );
              })}

              {/* Text lines */}
              {lines.map((ln, li) => (
                <text
                  key={li}
                  x={px + 18}
                  y={py + 46 + li * (fontSize * 1.6)}
                  fill={isHov ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.68)"}
                  fontSize={fontSize}
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                  fontWeight="500"
                  style={{ transition: "fill 0.2s" }}
                >
                  {ln}
                </text>
              ))}

              {/* Divider */}
              <line
                x1={px + 18} y1={py + ph - 36}
                x2={px + pw - 18} y2={py + ph - 36}
                stroke="rgba(255,255,255,0.06)" strokeWidth="1"
              />

              {/* Name */}
              <text
                x={px + 18} y={py + ph - 20}
                fill="rgba(255,255,255,0.9)"
                fontSize={10}
                fontWeight="700"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
                letterSpacing="0.4"
              >
                {card.name}
              </text>

              {/* Role */}
              <text
                x={px + 18} y={py + ph - 8}
                fill="#FF6B6B"
                fontSize={8.5}
                fontFamily="'Courier New', Courier, monospace"
                letterSpacing="1.8"
              >
                {card.role.toUpperCase()}
              </text>
            </g>
          </g>
        );
      })}
    </svg>
  );
}

// ─── MARQUEE STRIP ────────────────────────────────────────────────────────────
function Strip({
  cards,
  dir,
  dur,
  paused,
  onHover,
  onClick,
  sid,
}: {
  cards: CardDef[];
  dir: "left" | "right";
  dur: number;
  paused: boolean;
  onHover: (v: boolean) => void;
  onClick: () => void;
  sid: string;
}) {
  return (
    <div
      style={{ overflow: "hidden" }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={onClick}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: `${dir === "left" ? "mql" : "mqr"} ${dur}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          willChange: "transform",
        }}
      >
        {[0, 1, 2].map(ci => (
          <PuzzleGrid key={ci} cards={cards} uid={`${sid}-${ci}`} />
        ))}
      </div>
    </div>
  );
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function Reviews() {
  const [r1p, setR1p] = useState(false);
  const [r2p, setR2p] = useState(false);
  const [r1l, setR1l] = useState(false);
  const [r2l, setR2l] = useState(false);

  return (
    <section className="bg-[#050505] py-32 overflow-hidden relative border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF6B6B]/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-[#FF6B6B] text-xs font-mono uppercase tracking-[0.4em] mb-4">Client Verification</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            THE <span className="text-white/40">CONSENSUS</span>
          </h2>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p className="text-white/50 text-sm max-w-xs font-mono text-right">Raw, unfiltered data from our ecosystem partners.</p>
          <p className="text-white/20 text-[10px] font-mono">hover to pause · click to lock</p>
        </div>
      </div>

      <div
        className="relative flex flex-col w-full"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
        }}
      >
        <Strip cards={ROW_ONE} dir="left"  dur={58} paused={r1p} sid="r1"
          onHover={v => { if (!r1l) setR1p(v); }}
          onClick={() => { const n = !r1l; setR1l(n); setR1p(n); }} />
        <Strip cards={ROW_TWO} dir="right" dur={72} paused={r2p} sid="r2"
          onHover={v => { if (!r2l) setR2p(v); }}
          onClick={() => { const n = !r2l; setR2l(n); setR2p(n); }} />
      </div>

      <style>{`
        @keyframes mql {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.3333%); }
        }
        @keyframes mqr {
          from { transform: translateX(-33.3333%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}