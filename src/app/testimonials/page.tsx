

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
   ================================================================ */

// ── Grid geometry ──────────────────────────────────────────────
const U = 320; // base grid unit (px) - Increased for larger horizontal cards
const TAB = 22; // tab protrusion
const TW = 34; // tab neck width
const CR = 16; // corner radius
const PAD = TAB + 4; // SVG viewBox padding

// ── Card layout type ───────────────────────────────────────────
interface CardDef {
  col: number;
  row: number;
  cw: number;
  rh: number;
  stars: number;
  name: string;
  role: string;
  text: string;
}

/* ── REEL 1 layout (1 Row per layer) ────────────────────────────
   Total 6 cards, Total columns: 8.
   Width distribution: 1, 2, 1, 1, 2, 1
*/
const GRID1_COLS = 8;
const GRID1_ROWS = 1;

const CARDS_1: CardDef[] = [
  {
    col: 0,
    row: 0,
    cw: 1,
    rh: 1,
    stars: 5,
    name: "Sarah Jenkins",
    role: "Founder",
    text: "Exceptional production quality. RSI transformed our architecture from a bloated monolith into a streamlined ecosystem.",
  },
  {
    col: 1,
    row: 0,
    cw: 2,
    rh: 1,
    stars: 4,
    name: "Marcus T.",
    role: "CEO",
    text: "Highly professional studio. Flawless execution on our custom Next.js build, bringing our vision to life with zero technical debt.",
  },
  {
    col: 3,
    row: 0,
    cw: 1,
    rh: 1,
    stars: 5,
    name: "Elena R.",
    role: "Director",
    text: "Creative team and smooth workflow. The handoff was flawless.",
  },
  {
    col: 4,
    row: 0,
    cw: 1,
    rh: 1,
    stars: 3,
    name: "Chris D.",
    role: "Business Owner",
    text: "A bit too complex for my local business needs, but great code.",
  },
  {
    col: 5,
    row: 0,
    cw: 2,
    rh: 1,
    stars: 4,
    name: "Nina S.",
    role: "Product Lead",
    text: "Strong creative direction. The Framer Motion integration makes our platform feel incredibly expensive and premium.",
  },
  {
    col: 7,
    row: 0,
    cw: 1,
    rh: 1,
    stars: 5,
    name: "David Kim",
    role: "VP Marketing",
    text: "A true strategic partner.",
  },
];

const SEAM_1: Record<string, boolean> = {
  "v1,0": true,
  "v3,0": false,
  "v4,0": true,
  "v5,0": false,
  "v7,0": true,
};

/* ── REEL 2 layout (1 Row per layer) ────────────────────────────
   Total 6 cards, Total columns: 8.
   Width distribution: 2, 1, 2, 1, 1, 1
*/
const GRID2_COLS = 8;
const GRID2_ROWS = 1;

const CARDS_2: CardDef[] = [
  {
    col: 0,
    row: 0,
    cw: 2,
    rh: 1,
    stars: 1,
    name: "Anonymous",
    role: "Waitlisted Client",
    text: "Project delays were frustrating. Put on a 3-month waitlist because they rigidly refused to break their 6-client limit.",
  },
  {
    col: 2,
    row: 0,
    cw: 1,
    rh: 1,
    stars: 5,
    name: "James W.",
    role: "E-commerce Dir",
    text: "Absolutely stunning futuristic design. True artisans of the web.",
  },
  {
    col: 3,
    row: 0,
    cw: 2,
    rh: 1,
    stars: 4,
    name: "Tom H.",
    role: "Operations",
    text: "Solid studio environment. The custom API integrations were exactly what we needed to scale operations globally.",
  },
  {
    col: 5,
    row: 0,
    cw: 1,
    rh: 1,
    stars: 5,
    name: "Sophie M.",
    role: "Startup Founder",
    text: "Conversion rates literally doubled in the first month.",
  },
  {
    col: 6,
    row: 0,
    cw: 1,
    rh: 1,
    stars: 4,
    name: "Rachel B.",
    role: "Creative Dir",
    text: "Good communication throughout. Transparent systems.",
  },
  {
    col: 7,
    row: 0,
    cw: 1,
    rh: 1,
    stars: 5,
    name: "Alex P.",
    role: "Enterprise CTO",
    text: "Delivered beyond expectations.",
  },
];

const SEAM_2: Record<string, boolean> = {
  "v2,0": false,
  "v3,0": true,
  "v5,0": false,
  "v6,0": true,
  "v7,0": false,
};

// ── Path builder ───────────────────────────────────────────────
function buildPath(
  card: CardDef,
  seam: Record<string, boolean>,
  totalCols: number,
  totalRows: number,
): string {
  const x0 = card.col * U;
  const y0 = card.row * U;
  const x1 = x0 + card.cw * U;
  const y1 = y0 + card.rh * U;

  function bump(
    axis: "h" | "v",
    mid: number,
    edge: number,
    outward: boolean,
    reverse = false,
  ): string {
    const hw = TW / 2;
    const t = outward ? TAB : -TAB;
    if (axis === "h") {
      const ty = edge - t;
      if (!reverse)
        return `L ${mid - hw} ${edge} C ${mid - hw} ${ty} ${mid + hw} ${ty} ${mid + hw} ${edge}`;
      else
        return `L ${mid + hw} ${edge} C ${mid + hw} ${ty} ${mid - hw} ${ty} ${mid - hw} ${edge}`;
    } else {
      const tx = edge + t;
      if (!reverse)
        return `L ${edge} ${mid - hw} C ${tx} ${mid - hw} ${tx} ${mid + hw} ${edge} ${mid + hw}`;
      else
        return `L ${edge} ${mid + hw} C ${tx} ${mid + hw} ${tx} ${mid - hw} ${edge} ${mid - hw}`;
    }
  }

  let d = `M ${x0 + CR} ${y0}`;

  // TOP
  for (let c = card.col; c < card.col + card.cw; c++) {
    const key = `h${c},${card.row}`;
    if (card.row > 0 && seam[key] !== undefined) {
      d += " " + bump("h", c * U + U / 2, y0, !seam[key]);
    }
  }
  d += ` L ${x1 - CR} ${y0} Q ${x1} ${y0} ${x1} ${y0 + CR}`;

  // RIGHT
  for (let r = card.row; r < card.row + card.rh; r++) {
    const key = `v${card.col + card.cw},${r}`;
    if (card.col + card.cw < totalCols && seam[key] !== undefined) {
      d += " " + bump("v", r * U + U / 2, x1, seam[key]);
    }
  }
  d += ` L ${x1} ${y1 - CR} Q ${x1} ${y1} ${x1 - CR} ${y1}`;

  // BOTTOM
  for (let c = card.col + card.cw - 1; c >= card.col; c--) {
    const key = `h${c},${card.row + card.rh}`;
    if (card.row + card.rh < totalRows && seam[key] !== undefined) {
      d += " " + bump("h", c * U + U / 2, y1, seam[key], true);
    }
  }
  d += ` L ${x0 + CR} ${y1} Q ${x0} ${y1} ${x0} ${y1 - CR}`;

  // LEFT
  for (let r = card.row + card.rh - 1; r >= card.row; r--) {
    const key = `v${card.col},${r}`;
    if (card.col > 0 && seam[key] !== undefined) {
      d += " " + bump("v", r * U + U / 2, x0, !seam[key], true);
    }
  }
  d += ` L ${x0} ${y0 + CR} Q ${x0} ${y0} ${x0 + CR} ${y0} Z`;

  return d;
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

        return (
          <g
            key={i}
            onMouseEnter={() => setHov(i)}
            onMouseLeave={() => setHov(null)}
            className="cursor-crosshair"
          >
            {/* shadow */}
            <path
              d={path}
              fill="rgba(0,0,0,0.7)"
              transform="translate(0,8)"
              style={{ filter: "blur(12px)", pointerEvents: "none" }}
            />

            {/* fill */}
            <path
              d={path}
              fill={isH ? "#161616" : "#0D0D0D"}
              style={{ transition: "fill 0.3s ease" }}
            />

            {/* hover inner glow */}
            {isH && (
              <path
                d={path}
                fill="none"
                stroke="rgba(255,107,107,0.15)"
                strokeWidth="10"
              />
            )}

            {/* border */}
            <path
              d={path}
              fill="none"
              stroke={isH ? "rgba(255,107,107,0.8)" : "rgba(255,255,255,0.08)"}
              strokeWidth={isH ? 2 : 1}
              style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
            />

            {/* ── content (clipped using foreignObject for perfect HTML layout) ── */}
            <g clipPath={`url(#${uid}-cp-${i})`}>
              <foreignObject x={px} y={py} width={pw} height={ph}>
                <div className="w-full h-full flex flex-col justify-between p-10 md:p-12 select-none">
                  <div>
                    <div className="flex gap-1.5 mb-6">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star
                          key={si}
                          size={16}
                          className={
                            si < card.stars
                              ? "fill-[#FF6B6B] text-[#FF6B6B]"
                              : "fill-white/10 text-white/10"
                          }
                        />
                      ))}
                    </div>
                    <p
                      className={`text-base md:text-lg font-medium leading-relaxed tracking-wide ${isH ? "text-white" : "text-white/70"}`}
                    >
                      "{card.text}"
                    </p>
                  </div>
                  <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p
                        className={`text-sm font-bold ${isH ? "text-[#FF6B6B]" : "text-white"}`}
                      >
                        {card.name}
                      </p>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mt-1">
                        {card.role}
                      </p>
                    </div>
                  </div>
                </div>
              </foreignObject>
            </g>
          </g>
        );
      })}
    </svg>
  );
}

// ── Marquee strip ──────────────────────────────────────────────
function PuzzleStrip({
  cards,
  seam,
  gridCols,
  gridRows,
  dir,
  dur,
  sid,
}: {
  cards: CardDef[];
  seam: Record<string, boolean>;
  gridCols: number;
  gridRows: number;
  dir: "left" | "right";
  dur: number;
  sid: string;
}) {
  return (
    <div className="overflow-hidden w-full relative z-0">
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: `${dir === "left" ? "pzl" : "pzr"} ${dur}s linear infinite`,
          willChange: "transform",
        }}
      >
        {/* Render 3 copies to ensure a seamless loop */}
        {[0, 1, 2].map((ci) => (
          <PuzzleGrid
            key={ci}
            cards={cards}
            seam={seam}
            gridCols={gridCols}
            gridRows={gridRows}
            uid={`${sid}-${ci}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------- PAGE ---------------- */
export default function TestimonialsPage() {
  return (
    <main className="bg-[#050505] min-h-screen pt-32 pb-40 overflow-hidden text-white selection:bg-[#FF6B6B] selection:text-black">
      {/* ── 1. STATS ── */}
      <section className="container mx-auto px-6 text-center mb-32 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-16">
            PROOF OF <span className="text-[#FF6B6B]">CONCEPT</span>
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 border-y border-white/10 py-10 max-w-5xl mx-auto">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold">+10</h3>
              <p className="text-[10px] font-mono text-white/50 uppercase tracking-widest mt-3">
                Active Partners
              </p>
            </div>
            <div>
              <h3 className="text-3xl md:text-5xl font-bold">+47</h3>
              <p className="text-[10px] font-mono text-white/50 uppercase tracking-widest mt-3">
                Clients Dealt
              </p>
            </div>
            <div>
              <h3 className="text-3xl md:text-5xl font-bold">12+</h3>
              <p className="text-[10px] font-mono text-white/50 uppercase tracking-widest mt-3">
                Active Clients
              </p>
            </div>
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-[#FF6B6B]">
                3+
              </h3>
              <p className="text-[10px] font-mono text-[#FF6B6B]/70 uppercase tracking-widest mt-3">
                Flagship SaaS
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 2. VIDEO TESTIMONIALS ── */}
      <section className="container mx-auto px-6 mb-40 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_TESTIMONIALS.map((video, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`aspect-[3/4] md:aspect-[9/16] ${video.color} rounded-[2rem] relative overflow-hidden group cursor-pointer shadow-[0_0_40px_rgba(0,0,0,0.5)]`}
            >
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/30 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                  <Play fill="white" className="text-white w-6 h-6 ml-1" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end z-20">
                <div className="w-8 h-8 bg-white/20 rounded-lg backdrop-blur-md mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">❝</span>
                </div>
                <p className="text-white font-bold leading-snug mb-3 text-sm md:text-base">
                  "{video.quote}"
                </p>
                <p className="text-white/90 text-sm font-bold">{video.name}</p>
                <p className="text-white/60 text-[10px] uppercase tracking-widest mt-1">
                  {video.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3. PUZZLE REVIEW REELS ── */}
      <section className="relative w-full py-32 bg-[#080808] border-y border-white/10 flex flex-col gap-8 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#FF6B6B]/10 blur-[200px] pointer-events-none rounded-full" />

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-[15vw] bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[15vw] bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        {/* Section label */}
        <div className="container mx-auto px-6 mb-8 relative z-20 flex items-end justify-between">
          <div>
            <p className="text-[#FF6B6B] text-[10px] font-mono uppercase tracking-[0.6em] mb-4">
              Client Verification
            </p>
            <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter text-white">
              THE <span className="text-white/30">CONSENSUS</span>
            </h2>
          </div>
        </div>

        {/* Reel 1 — scrolls left */}
        <PuzzleStrip
          cards={CARDS_1}
          seam={SEAM_1}
          gridCols={GRID1_COLS}
          gridRows={GRID1_ROWS}
          dir="left"
          dur={25} // Increased speed
          sid="r1"
        />

        {/* Reel 2 — scrolls right */}
        <PuzzleStrip
          cards={CARDS_2}
          seam={SEAM_2}
          gridCols={GRID2_COLS}
          gridRows={GRID2_ROWS}
          dir="right"
          dur={28} // Increased speed
          sid="r2"
        />

        <style>{`
          @keyframes pzl {
            from { transform: translateX(0); }
            to   { transform: translateX(-33.333333%); }
          }
          @keyframes pzr {
            from { transform: translateX(-33.333333%); }
            to   { transform: translateX(0); }
          }
        `}</style>
      </section>
    </main>
  );
}