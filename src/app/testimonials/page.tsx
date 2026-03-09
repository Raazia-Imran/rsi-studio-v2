// "use client";

// import { motion } from "framer-motion";
// import Marquee from "react-fast-marquee";
// import { Play, Star } from "lucide-react";

// // --- 1. VIDEO TESTIMONIALS ---
// const VIDEO_TESTIMONIALS = [
//   {
//     color: "bg-[#FF7E33]",
//     name: "Victor Okon",
//     role: "CEO & Co-founder @ Olika",
//     quote: "Big shoutout to the team. They brought our vision to life fast...",
//   },
//   {
//     color: "bg-[#00B4D8]",
//     name: "Neil Smith",
//     role: "Founder @ UXUI",
//     quote: "I had an amazing experience. They delivered beyond expectations...",
//   },
//   {
//     color: "bg-[#9ACD32]",
//     name: "Ritu Taneja",
//     role: "Product Executive @ Zito",
//     quote: "Fantastic experience working with the team. They did more...",
//   },
//   {
//     color: "bg-[#4A154B]",
//     name: "Jahnvi Rahman",
//     role: "CEO @ Rahman Agency",
//     quote: "Great support. They understood our needs perfectly...",
//   },
// ];

// // --- 2. TRUE OG PUZZLE DATA (100% SRS Compliant) ---
// // 12 Reviews (6x 5-stars, 4x 4-stars, 1x 3-stars, 1x 1-stars)
// // Using CSS Grid Spans to create an interlocking masonry block.

// const REVIEWS_ROW_1 = [
//   // Item 1: Large (2x2) - 5 Star
//   {
//     spanClass: "col-span-2 row-span-2",
//     stars: 5,
//     name: "Sarah Jenkins",
//     role: "Founder, TechFlow",
//     text: "Incredible system architecture. RSI completely transformed our internal operations. The strict 6-client limit meant we got unparalleled attention to detail. Absolute game-changers.",
//   },
//   // Item 2: Tall (1x2) - 4 Star
//   {
//     spanClass: "col-span-1 row-span-2",
//     stars: 4,
//     name: "Marcus T.",
//     role: "CEO, InnovateX",
//     text: "Highly professional execution. The custom Next.js build is flawless.",
//   },
//   // Item 3: Small (1x1) - 5 Star
//   {
//     spanClass: "col-span-1 row-span-1",
//     stars: 5,
//     name: "Elena R.",
//     role: "Director, SaaS",
//     text: "Pixel perfect engineering. Flawless handoff.",
//   },
//   // Item 4: Wide (2x1) - 3 Star
//   {
//     spanClass: "col-span-2 row-span-1",
//     stars: 3,
//     name: "Chris D.",
//     role: "Local Business Owner",
//     text: "The aesthetic is gorgeous, but the ecosystem was honestly a bit too complex for my small business. Definitely built for high-end SaaS.",
//   },
//   // Item 5: Small (1x1) - 5 Star
//   {
//     spanClass: "col-span-1 row-span-1",
//     stars: 5,
//     name: "David Kim",
//     role: "VP Marketing",
//     text: "A true strategic partner.",
//   },
//   // Item 6: Wide (2x1) - 4 Star
//   {
//     spanClass: "col-span-2 row-span-1",
//     stars: 4,
//     name: "Nina S.",
//     role: "Product Lead",
//     text: "Great UI/UX capabilities. The Framer Motion integration makes our platform feel incredibly expensive.",
//   },
// ];

// const REVIEWS_ROW_2 = [
//   // Item 1: Wide (2x1) - 1 Star (The Flex)
//   {
//     spanClass: "col-span-2 row-span-1",
//     stars: 1,
//     name: "Anonymous",
//     role: "Waitlisted Client",
//     text: "Put on a 3-month waitlist because they refused to break their 6-client limit to onboard us. Good portfolio, but the exclusivity is frustratingly rigid.",
//   },
//   // Item 2: Small (1x1) - 5 Star
//   {
//     spanClass: "col-span-1 row-span-1",
//     stars: 5,
//     name: "Sophie M.",
//     role: "Startup Founder",
//     text: "Conversions doubled in month one.",
//   },
//   // Item 3: Tall (1x2) - 4 Star
//   {
//     spanClass: "col-span-1 row-span-2",
//     stars: 4,
//     name: "Tom H.",
//     role: "Operations Manager",
//     text: "Solid backend infrastructure. The API integrations they wrote saved us hundreds of hours of manual labor.",
//   },
//   // Item 4: Large (2x2) - 5 Star
//   {
//     spanClass: "col-span-2 row-span-2",
//     stars: 5,
//     name: "James W.",
//     role: "E-commerce Director",
//     text: "Absolutely stunning futuristic design. True artisans of the modern web. The $500 monthly managed presence is completely worth it for the peace of mind alone.",
//   },
//   // Item 5: Wide (2x1) - 4 Star
//   {
//     spanClass: "col-span-2 row-span-1",
//     stars: 4,
//     name: "Rachel B.",
//     role: "Creative Director",
//     text: "Very smooth transitions and premium aesthetics. Transparent systems exactly as promised.",
//   },
//   // Item 6: Small (1x1) - 5 Star
//   {
//     spanClass: "col-span-1 row-span-1",
//     stars: 5,
//     name: "Alex P.",
//     role: "Enterprise CTO",
//     text: "Performance gains were immediate.",
//   },
// ];

// // Helper to render glowing stars
// const RenderStars = ({ count }: { count: number }) => (
//   <div className="flex gap-1 mb-4">
//     {Array.from({ length: 5 }).map((_, i) => (
//       <Star
//         key={i}
//         size={14}
//         className={
//           i < count
//             ? "fill-[#FF6B6B] text-[#FF6B6B]"
//             : "fill-white/10 text-white/10"
//         }
//       />
//     ))}
//   </div>
// );

// export default function TestimonialsPage() {
//   return (
//     <main className="bg-[#050505] min-h-screen pt-32 pb-40 overflow-hidden text-white selection:bg-[#FF6B6B] selection:text-black">
//       {/* 1. Explore Page Stats */}
//       <section className="container mx-auto px-6 text-center mb-32">
//         <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-16">
//           PROOF OF <span className="text-[#FF6B6B]">CONCEPT</span>
//         </h1>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 border-y border-white/10 py-10">
//           <div>
//             <h3 className="text-3xl md:text-5xl font-bold">+10</h3>
//             <p className="text-xs text-white/50 uppercase mt-2">
//               Active Partners
//             </p>
//           </div>
//           <div>
//             <h3 className="text-3xl md:text-5xl font-bold">+47</h3>
//             <p className="text-xs text-white/50 uppercase mt-2">
//               Clients Dealt
//             </p>
//           </div>
//           <div>
//             <h3 className="text-3xl md:text-5xl font-bold">12+</h3>
//             <p className="text-xs text-white/50 uppercase mt-2">
//               Active Clients
//             </p>
//           </div>
//           <div>
//             <h3 className="text-3xl md:text-5xl font-bold text-[#FF6B6B]">
//               3+
//             </h3>
//             <p className="text-xs text-white/50 uppercase mt-2">
//               Flagship SaaS
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* 2. Video Testimonials */}
//       <section className="container mx-auto px-6 mb-32">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {VIDEO_TESTIMONIALS.map((video, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -10 }}
//               className={`aspect-[3/4] md:aspect-[9/16] ${video.color} rounded-3xl relative overflow-hidden group cursor-pointer shadow-2xl`}
//             >
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
//                   <Play fill="white" className="text-white w-6 h-6 ml-1" />
//                 </div>
//               </div>
//               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
//                 <div className="w-8 h-8 bg-black/20 rounded-md backdrop-blur-sm mb-4 border border-white/20 flex items-center justify-center">
//                   <span className="text-white font-bold text-xs">❝</span>
//                 </div>
//                 <p className="text-white font-bold leading-snug mb-2 text-sm md:text-base">
//                   "{video.quote}"
//                 </p>
//                 <p className="text-white/80 text-xs font-bold">{video.name}</p>
//                 <p className="text-white/50 text-[10px] uppercase tracking-widest">
//                   {video.role}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* 3. TRUE OG MASONRY PUZZLE REELS */}
//       <section className="w-full relative border-y border-white/5 bg-[#0A0A0F] py-20 flex flex-col gap-6 mask-image-edges">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#FF6B6B]/10 blur-[150px] pointer-events-none" />

//         {/* REEL 1: Moving Left */}
//         <Marquee speed={35} gradient={false} direction="left">
//           {/* The Grid Container: 6 columns x 2 rows.
//             This forms a perfect repeating interlocking block.
//           */}
//           <div className="grid grid-cols-6 grid-rows-2 gap-4 w-[1400px] h-[450px] mr-4">
//             {REVIEWS_ROW_1.map((review, i) => (
//               <div
//                 key={`r1-${i}`}
//                 className={`${review.spanClass} bg-[#111111] border border-white/5 hover:border-[#FF6B6B]/30 rounded-3xl p-8 flex flex-col justify-between shadow-2xl transition-all group overflow-hidden`}
//               >
//                 <div>
//                   <RenderStars count={review.stars} />
//                   <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium">
//                     "{review.text}"
//                   </p>
//                 </div>
//                 <div className="mt-6 pt-4 border-t border-white/5">
//                   <p className="text-white text-sm font-bold">{review.name}</p>
//                   <p className="text-[#FF6B6B] text-[10px] uppercase tracking-widest mt-1">
//                     {review.role}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Marquee>

//         {/* REEL 2: Moving Right */}
//         <Marquee speed={30} gradient={false} direction="right">
//           <div className="grid grid-cols-6 grid-rows-2 gap-4 w-[1400px] h-[450px] mr-4">
//             {REVIEWS_ROW_2.map((review, i) => (
//               <div
//                 key={`r2-${i}`}
//                 className={`${review.spanClass} bg-[#111111] border border-white/5 hover:border-[#FF6B6B]/30 rounded-3xl p-8 flex flex-col justify-between shadow-2xl transition-all group overflow-hidden`}
//               >
//                 <div>
//                   <RenderStars count={review.stars} />
//                   <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium">
//                     "{review.text}"
//                   </p>
//                 </div>
//                 <div className="mt-6 pt-4 border-t border-white/5">
//                   <p className="text-white text-sm font-bold">{review.name}</p>
//                   <p className="text-[#FF6B6B] text-[10px] uppercase tracking-widest mt-1">
//                     {review.role}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Marquee>
//       </section>

//       {/* Global Edge Fading mask so reviews don't awkwardly pop in and out */}
//       <style jsx global>{`
//         .mask-image-edges {
//           mask-image: linear-gradient(
//             to right,
//             transparent,
//             black 5%,
//             black 95%,
//             transparent
//           );
//           -webkit-mask-image: linear-gradient(
//             to right,
//             transparent,
//             black 5%,
//             black 95%,
//             transparent
//           );
//         }
//       `}</style>
//     </main>
//   );
// }



"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";

/* ---------------- VIDEO TESTIMONIALS ---------------- */
const VIDEO_TESTIMONIALS = [
  {
    color: "bg-[#FF7E33]",
    name: "Victor Okon",
    role: "CEO & Co-founder @ Olika",
    quote: "Big shoutout to the team. They brought our vision to life fast...",
  },
  {
    color: "bg-[#00B4D8]",
    name: "Neil Smith",
    role: "Founder @ UXUI",
    quote: "I had an amazing experience. They delivered beyond expectations...",
  },
  {
    color: "bg-[#9ACD32]",
    name: "Ritu Taneja",
    role: "Product Executive @ Zito",
    quote: "Fantastic experience working with the team. They did more...",
  },
  {
    color: "bg-[#4A154B]",
    name: "Jahnvi Rahman",
    role: "CEO @ Rahman Agency",
    quote: "Great support. They understood our needs perfectly...",
  },
];

/* ================================================================
   PUZZLE ENGINE
   ================================================================
   Strategy:
   - Each reel is one wide SVG rendered 3× side-by-side for seamless loop.
   - Cards are placed on a pixel grid. Adjacent edges share a seam entry
     in SEAM_DIR so tabs/blanks always mirror each other perfectly.
   - Tabs use cubic Bézier curves for organic puzzle-piece silhouette.
   - No DOM gaps — pieces share exact pixel boundaries.
================================================================ */

// ── Grid geometry ──────────────────────────────────────────────
const U   = 160;   // base grid unit (px)
const TAB = 18;    // tab protrusion
const TW  = 28;    // tab neck width
const CR  = 10;    // corner radius
const PAD = TAB + 4; // SVG viewBox padding

// ── Card layout type ───────────────────────────────────────────
interface CardDef {
  col: number; row: number;
  cw: number;  rh: number; // span in grid units
  stars: number;
  name: string;
  role: string;
  text: string;
}

/* ── REEL 1 layout  ─────────────────────────────────────────────
   6 cards arranged in a 6-col × 2-row grid (each cell = U×U px).
   Sizes map as: large=2col×2row, medium=2col×1row, small=1col×1row

   Visual layout (col 0-5, row 0-1):
   [  Sarah 2×2  ][Marcus 1×2][Elena 1×1][  Chris 2×1  ]
   [             ][          ][  Nina 2×1          ][David]
*/
const GRID1_COLS = 6;
const GRID1_ROWS = 2;

const CARDS_1: CardDef[] = [
  { col:0, row:0, cw:2, rh:2, stars:5, name:"Sarah Jenkins", role:"Founder",
    text:"Exceptional production quality. RSI transformed our architecture from a bloated monolith into a streamlined, high-performance ecosystem. The strict 6-client limit meant we got unparalleled attention to detail." },
  { col:2, row:0, cw:1, rh:2, stars:4, name:"Marcus T.", role:"CEO",
    text:"Highly professional studio. Flawless execution on our custom Next.js build, bringing our vision to life with zero technical debt." },
  { col:3, row:0, cw:1, rh:1, stars:5, name:"Elena R.", role:"Director",
    text:"Creative team and smooth workflow. The final handoff was totally flawless." },
  { col:4, row:0, cw:2, rh:1, stars:3, name:"Chris D.", role:"Business Owner",
    text:"Decent experience overall. A bit too complex for my local business needs." },
  { col:3, row:1, cw:2, rh:1, stars:4, name:"Nina S.", role:"Product Lead",
    text:"Strong creative direction. The Framer Motion integration makes our platform feel incredibly expensive and premium." },
  { col:5, row:1, cw:1, rh:1, stars:5, name:"David Kim", role:"VP Marketing",
    text:"A true strategic partner." },
];

/* ── REEL 2 layout  ─────────────────────────────────────────────
   Visual layout (col 0-5, row 0-1):
   [Anon 2×1     ][  James 2×2  ][Tom 1×2][Sophie 1×1]
   [Rachel  2×1  ][             ][       ][  Alex 1×1 ]
*/
const GRID2_COLS = 6;
const GRID2_ROWS = 2;

const CARDS_2: CardDef[] = [
  { col:0, row:0, cw:2, rh:1, stars:1, name:"Anonymous", role:"Waitlisted Client",
    text:"Project delays were frustrating. Put on a 3-month waitlist because they rigidly refused to break their 6-client limit." },
  { col:2, row:0, cw:2, rh:2, stars:5, name:"James W.", role:"E-commerce Dir",
    text:"Absolutely stunning futuristic design. True artisans of the modern web. The $500 monthly managed presence is completely worth it for peace of mind alone." },
  { col:4, row:0, cw:1, rh:2, stars:4, name:"Tom H.", role:"Operations",
    text:"Solid studio environment. The custom API integrations were exactly what we needed." },
  { col:5, row:0, cw:1, rh:1, stars:5, name:"Sophie M.", role:"Startup Founder",
    text:"Conversion rates literally doubled in the first month." },
  { col:0, row:1, cw:2, rh:1, stars:4, name:"Rachel B.", role:"Creative Dir",
    text:"Good communication throughout. Transparent systems exactly as promised. They engineered a bespoke digital presence that captures our brand perfectly." },
  { col:5, row:1, cw:1, rh:1, stars:5, name:"Alex P.", role:"Enterprise CTO",
    text:"Delivered beyond expectations. Instant global performance gains." },
];

// ── Seam direction tables ──────────────────────────────────────
// "v{col},{row}" = vertical seam at x=col*U, spanning row `row`
//   true  → tab protrudes RIGHT
// "h{col},{row}" = horizontal seam at y=row*U, spanning col `col`
//   true  → tab protrudes DOWN
const SEAM_1: Record<string, boolean> = {
  "v2,0":true,  "v2,1":false,
  "v3,0":false, "v3,1":true,
  "v4,0":true,  "v4,1":false,
  "v5,0":false, "v5,1":true,
  "h0,1":true,
  "h1,1":false,
  "h2,1":true,
  "h3,1":false,
  "h4,1":true,
  "h5,1":false,
};

const SEAM_2: Record<string, boolean> = {
  "v2,0":true,  "v2,1":false,
  "v4,0":false, "v4,1":true,
  "v5,0":true,  "v5,1":false,
  "h0,1":false,
  "h1,1":true,
  "h2,1":false,
  "h3,1":true,
  "h4,1":false,
  "h5,1":true,
};

// ── Path builder ───────────────────────────────────────────────
function buildPath(
  card: CardDef,
  seam: Record<string, boolean>,
  totalCols: number,
  totalRows: number
): string {
  const x0 = card.col * U;
  const y0 = card.row * U;
  const x1 = x0 + card.cw * U;
  const y1 = y0 + card.rh * U;

  // cubic bezier bump centered at `mid` on edge at `edge`
  // axis "h" = horizontal edge (bump goes ±y), "v" = vertical edge (bump goes ±x)
  // outward=true means tab protrudes AWAY from this card's interior
  function bump(axis: "h"|"v", mid: number, edge: number, outward: boolean, reverse = false): string {
    const hw = TW / 2;
    const t = outward ? TAB : -TAB;
    if (axis === "h") {
      // bump in Y direction; traversal is in X
      const ty = edge - t; // outward means away from card center (subtract because SVG y↓)
      if (!reverse) {
        return `L ${mid - hw} ${edge} C ${mid - hw} ${ty} ${mid + hw} ${ty} ${mid + hw} ${edge}`;
      } else {
        return `L ${mid + hw} ${edge} C ${mid + hw} ${ty} ${mid - hw} ${ty} ${mid - hw} ${edge}`;
      }
    } else {
      // bump in X direction; traversal is in Y
      const tx = edge + t;
      if (!reverse) {
        return `L ${edge} ${mid - hw} C ${tx} ${mid - hw} ${tx} ${mid + hw} ${edge} ${mid + hw}`;
      } else {
        return `L ${edge} ${mid + hw} C ${tx} ${mid + hw} ${tx} ${mid - hw} ${edge} ${mid - hw}`;
      }
    }
  }

  let d = `M ${x0 + CR} ${y0}`;

  // ── TOP (left → right) ──
  for (let c = card.col; c < card.col + card.cw; c++) {
    const key = `h${c},${card.row}`;
    if (card.row > 0 && seam[key] !== undefined) {
      const mid = c * U + U / 2;
      // seam true=tab DOWN → our top gets a blank (inward = tab points UP = outward from card above into us)
      const outward = !seam[key]; // invert: receiving side
      d += " " + bump("h", mid, y0, outward);
    }
  }
  d += ` L ${x1 - CR} ${y0} Q ${x1} ${y0} ${x1} ${y0 + CR}`;

  // ── RIGHT (top → bottom) ──
  for (let r = card.row; r < card.row + card.rh; r++) {
    const key = `v${card.col + card.cw},${r}`;
    if (card.col + card.cw < totalCols && seam[key] !== undefined) {
      const mid = r * U + U / 2;
      // seam true=tab RIGHT → our right edge has a tab (outward)
      const outward = seam[key];
      d += " " + bump("v", mid, x1, outward);
    }
  }
  d += ` L ${x1} ${y1 - CR} Q ${x1} ${y1} ${x1 - CR} ${y1}`;

  // ── BOTTOM (right → left) ──
  for (let c = card.col + card.cw - 1; c >= card.col; c--) {
    const key = `h${c},${card.row + card.rh}`;
    if (card.row + card.rh < totalRows && seam[key] !== undefined) {
      const mid = c * U + U / 2;
      // seam true=tab DOWN → our bottom has a tab (outward downward)
      const outward = seam[key];
      d += " " + bump("h", mid, y1, outward, true);
    }
  }
  d += ` L ${x0 + CR} ${y1} Q ${x0} ${y1} ${x0} ${y1 - CR}`;

  // ── LEFT (bottom → top) ──
  for (let r = card.row + card.rh - 1; r >= card.row; r--) {
    const key = `v${card.col},${r}`;
    if (card.col > 0 && seam[key] !== undefined) {
      const mid = r * U + U / 2;
      // seam true=tab RIGHT → left edge gets blank (inward, reverse)
      const outward = !seam[key];
      d += " " + bump("v", mid, x0, outward, true);
    }
  }
  d += ` L ${x0} ${y0 + CR} Q ${x0} ${y0} ${x0 + CR} ${y0} Z`;

  return d;
}

// ── Text wrapper ───────────────────────────────────────────────
function wrapText(raw: string, maxChars: number, maxLines: number): string[] {
  const words = raw.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (test.length > maxChars && line) {
      lines.push(line);
      if (lines.length >= maxLines) return lines;
      line = w;
    } else {
      line = test;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);
  return lines;
}

// ── Star polygon ───────────────────────────────────────────────
function starPoints(cx: number, cy: number, r = 5): string {
  return Array.from({ length: 5 }).map((_, k) => {
    const a = (k * 4 * Math.PI) / 5 - Math.PI / 2;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(" ");
}

// ── PuzzleGrid component ───────────────────────────────────────
function PuzzleGrid({
  cards,
  seam,
  gridCols,
  gridRows,
  uid,
}: {
  cards: CardDef[];
  seam: Record<string, boolean>;
  gridCols: number;
  gridRows: number;
  uid: string;
}) {
  const [hov, setHov] = useState<number | null>(null);
  const gw = gridCols * U;
  const gh = gridRows * U;

  return (
    <svg
      width={gw + PAD * 2}
      height={gh + PAD * 2}
      viewBox={`${-PAD} ${-PAD} ${gw + PAD * 2} ${gh + PAD * 2}`}
      style={{ display: "block", flexShrink: 0 }}
      overflow="visible"
    >
      <defs>
        {cards.map((c, i) => (
          <clipPath key={i} id={`${uid}-cp-${i}`}>
            <path d={buildPath(c, seam, gridCols, gridRows)} />
          </clipPath>
        ))}
      </defs>

      {cards.map((card, i) => {
        const path = buildPath(card, seam, gridCols, gridRows);
        const isH = hov === i;
        const px = card.col * U;
        const py = card.row * U;
        const pw = card.cw * U;
        const ph = card.rh * U;

        // typography scaling
        const fs = pw >= 280 ? 12 : 11;
        const chars = Math.floor((pw - 36) / (fs * 0.57));
        const maxL = Math.floor((ph - 78) / (fs * 1.65));
        const lines = wrapText(`"${card.text}"`, chars, maxL);

        return (
          <g key={i} onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}>
            {/* shadow */}
            <path d={path} fill="rgba(0,0,0,0.5)" transform="translate(0,5)"
              style={{ filter:"blur(8px)", pointerEvents:"none" }} />

            {/* fill */}
            <path d={path} fill={isH ? "#1d1d1d" : "#111111"}
              style={{ transition:"fill 0.2s ease" }} />

            {/* hover inner glow */}
            {isH && <path d={path} fill="none" stroke="rgba(255,107,107,0.07)" strokeWidth="14" />}

            {/* border */}
            <path d={path} fill="none"
              stroke={isH ? "rgba(255,107,107,0.55)" : "rgba(255,255,255,0.07)"}
              strokeWidth={isH ? 1.5 : 1}
              style={{ transition:"stroke 0.2s, stroke-width 0.2s" }} />

            {/* ── content (clipped) ── */}
            <g clipPath={`url(#${uid}-cp-${i})`}>
              {/* stars */}
              {Array.from({ length: 5 }).map((_, si) => (
                <polygon key={si}
                  points={starPoints(px + 18 + si * 16, py + 26)}
                  fill={si < card.stars ? "#FF6B6B" : "rgba(255,255,255,0.1)"} />
              ))}

              {/* text lines */}
              {lines.map((ln, li) => (
                <text key={li}
                  x={px + 18} y={py + 48 + li * (fs * 1.65)}
                  fill={isH ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.68)"}
                  fontSize={fs} fontFamily="ui-sans-serif,system-ui,sans-serif"
                  fontWeight="500" style={{ transition:"fill 0.2s" }}>
                  {ln}
                </text>
              ))}

              {/* divider */}
              <line x1={px + 18} y1={py + ph - 38} x2={px + pw - 18} y2={py + ph - 38}
                stroke="rgba(255,255,255,0.07)" strokeWidth="1" />

              {/* name */}
              <text x={px + 18} y={py + ph - 22}
                fill={isH ? "#FF6B6B" : "rgba(255,255,255,0.9)"}
                fontSize={11} fontWeight="700"
                fontFamily="ui-sans-serif,system-ui,sans-serif"
                style={{ transition:"fill 0.2s" }}>
                {card.name}
              </text>

              {/* role */}
              <text x={px + 18} y={py + ph - 9}
                fill="#FF6B6B" fontSize={8.5} opacity={isH ? 1 : 0.7}
                fontFamily="'Courier New',Courier,monospace" letterSpacing="1.8">
                {card.role.toUpperCase()}
              </text>
            </g>
          </g>
        );
      })}
    </svg>
  );
}

// ── Marquee strip ──────────────────────────────────────────────
function PuzzleStrip({
  cards, seam, gridCols, gridRows,
  dir, dur, sid,
}: {
  cards: CardDef[];
  seam: Record<string, boolean>;
  gridCols: number;
  gridRows: number;
  dir: "left" | "right";
  dur: number;
  sid: string;
}) {
  const [paused, setPaused] = useState(false);
  const [locked, setLocked] = useState(false);

  return (
    <div
      className="overflow-hidden w-full relative z-0"
      onMouseEnter={() => { if (!locked) setPaused(true); }}
      onMouseLeave={() => { if (!locked) setPaused(false); }}
      onClick={() => { const n = !locked; setLocked(n); setPaused(n); }}
      style={{ cursor: "pointer" }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: `${dir === "left" ? "pzl" : "pzr"} ${dur}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          willChange: "transform",
        }}
      >
        {[0, 1, 2].map(ci => (
          <PuzzleGrid key={ci}
            cards={cards} seam={seam}
            gridCols={gridCols} gridRows={gridRows}
            uid={`${sid}-${ci}`} />
        ))}
      </div>
    </div>
  );
}

/* ---------------- STAR RENDERER (for video section) ---------------- */
const RenderStars = ({ count }: { count: number }) => (
  <div className="flex gap-1 mb-6">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={18}
        className={i < count ? "fill-[#FF6B6B] text-[#FF6B6B]" : "fill-white/10 text-white/10"} />
    ))}
  </div>
);

/* ---------------- PAGE ---------------- */
export default function TestimonialsPage() {
  return (
    <main className="bg-[#050505] min-h-screen pt-32 pb-40 overflow-hidden text-white selection:bg-[#FF6B6B] selection:text-black">

      {/* ── 1. STATS ── */}
      <section className="container mx-auto px-6 text-center mb-32 relative z-20">
        <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-16">
          PROOF OF <span className="text-[#FF6B6B]">CONCEPT</span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 border-y border-white/10 py-10">
          <div><h3 className="text-3xl md:text-5xl font-bold">+10</h3><p className="text-xs text-white/50 uppercase mt-2">Active Partners</p></div>
          <div><h3 className="text-3xl md:text-5xl font-bold">+47</h3><p className="text-xs text-white/50 uppercase mt-2">Clients Dealt</p></div>
          <div><h3 className="text-3xl md:text-5xl font-bold">12+</h3><p className="text-xs text-white/50 uppercase mt-2">Active Clients</p></div>
          <div><h3 className="text-3xl md:text-5xl font-bold text-[#FF6B6B]">3+</h3><p className="text-xs text-white/50 uppercase mt-2">Flagship SaaS</p></div>
        </div>
      </section>

      {/* ── 2. VIDEO TESTIMONIALS ── */}
      <section className="container mx-auto px-6 mb-40 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_TESTIMONIALS.map((video, i) => (
            <motion.div key={i} whileHover={{ y: -10 }}
              className={`aspect-[3/4] md:aspect-[9/16] ${video.color} rounded-3xl relative overflow-hidden group cursor-pointer shadow-2xl`}>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform shadow-lg">
                  <Play fill="white" className="text-white w-6 h-6 ml-1" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end z-20">
                <div className="w-8 h-8 bg-white/20 rounded-md backdrop-blur-sm mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">❝</span>
                </div>
                <p className="text-white font-bold leading-snug mb-2 text-sm md:text-base">"{video.quote}"</p>
                <p className="text-white/80 text-xs font-bold">{video.name}</p>
                <p className="text-white/50 text-[10px] uppercase tracking-widest">{video.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3. PUZZLE REVIEW REELS ── */}
      <section className="relative w-full py-24 bg-[#0A0A0F] border-y border-white/5 flex flex-col gap-0 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#FF6B6B]/8 blur-[180px] pointer-events-none rounded-full" />

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-[12vw] bg-gradient-to-r from-[#0A0A0F] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[12vw] bg-gradient-to-l from-[#0A0A0F] to-transparent z-10 pointer-events-none" />

        {/* Section label */}
        <div className="container mx-auto px-6 mb-12 relative z-20 flex items-end justify-between">
          <div>
            <p className="text-[#FF6B6B] text-xs font-mono uppercase tracking-[0.4em] mb-3">Client Verification</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              THE <span className="text-white/30">CONSENSUS</span>
            </h2>
          </div>
          <p className="text-white/20 text-[10px] font-mono hidden md:block">
            hover to pause · click to lock
          </p>
        </div>

        {/* Reel 1 — scrolls left */}
        <PuzzleStrip
          cards={CARDS_1} seam={SEAM_1}
          gridCols={GRID1_COLS} gridRows={GRID1_ROWS}
          dir="left" dur={58} sid="r1"
        />

        {/* Reel 2 — scrolls right */}
        <PuzzleStrip
          cards={CARDS_2} seam={SEAM_2}
          gridCols={GRID2_COLS} gridRows={GRID2_ROWS}
          dir="right" dur={72} sid="r2"
        />

        <style>{`
          @keyframes pzl {
            from { transform: translateX(0); }
            to   { transform: translateX(-33.3333%); }
          }
          @keyframes pzr {
            from { transform: translateX(-33.3333%); }
            to   { transform: translateX(0); }
          }
        `}</style>
      </section>

    </main>
  );
}