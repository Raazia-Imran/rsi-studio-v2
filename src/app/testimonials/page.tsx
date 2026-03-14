"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";
import { Cormorant_Garamond, Space_Mono } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

/* ---------------- VIDEO TESTIMONIALS ---------------- */
const VIDEO_TESTIMONIALS = [
  { color: "bg-[#FF7E33]", name: "Victor Okon", role: "CEO & Co-founder @ Olika", quote: "Big shoutout to the team. They brought our vision to life fast..." },
  { color: "bg-[#00B4D8]", name: "Neil Smith", role: "Founder @ UXUI", quote: "I had an amazing experience. They delivered beyond expectations..." },
  { color: "bg-[#9ACD32]", name: "Ritu Taneja", role: "Product Executive @ Zito", quote: "Fantastic experience working with the team. They did more..." },
  { color: "bg-[#4A154B]", name: "Jahnvi Rahman", role: "CEO @ Rahman Agency", quote: "Great support. They understood our needs perfectly..." },
];

/* ================================================================
   PUZZLE ENGINE
   ================================================================ */
const U = 320; const TAB = 22; const TW = 34; const CR = 16; const PAD = TAB + 4;
interface CardDef { col: number; row: number; cw: number; rh: number; stars: number; name: string; role: string; text: string; }

const GRID1_COLS = 8; const GRID1_ROWS = 1;
const CARDS_1: CardDef[] = [
  { col: 0, row: 0, cw: 1, rh: 1, stars: 5, name: "Sarah Jenkins", role: "Founder", text: "Exceptional production quality. RSI transformed our architecture from a bloated monolith into a streamlined ecosystem." },
  { col: 1, row: 0, cw: 2, rh: 1, stars: 4, name: "Marcus T.", role: "CEO", text: "Highly professional studio. Flawless execution on our custom Next.js build, bringing our vision to life with zero technical debt." },
  { col: 3, row: 0, cw: 1, rh: 1, stars: 5, name: "Elena R.", role: "Director", text: "Creative team and smooth workflow. The handoff was flawless." },
  { col: 4, row: 0, cw: 1, rh: 1, stars: 3, name: "Chris D.", role: "Business Owner", text: "A bit too complex for my local business needs, but great code." },
  { col: 5, row: 0, cw: 2, rh: 1, stars: 4, name: "Nina S.", role: "Product Lead", text: "Strong creative direction. The Framer Motion integration makes our platform feel incredibly expensive and premium." },
  { col: 7, row: 0, cw: 1, rh: 1, stars: 5, name: "David Kim", role: "VP Marketing", text: "A true strategic partner." },
];
const SEAM_1: Record<string, boolean> = { "v1,0": true, "v3,0": false, "v4,0": true, "v5,0": false, "v7,0": true };

const GRID2_COLS = 8; const GRID2_ROWS = 1;
const CARDS_2: CardDef[] = [
  { col: 0, row: 0, cw: 2, rh: 1, stars: 1, name: "Anonymous", role: "Waitlisted Client", text: "Project delays were frustrating. Put on a 3-month waitlist because they rigidly refused to break their 6-client limit." },
  { col: 2, row: 0, cw: 1, rh: 1, stars: 5, name: "James W.", role: "E-commerce Dir", text: "Absolutely stunning futuristic design. True artisans of the web." },
  { col: 3, row: 0, cw: 2, rh: 1, stars: 4, name: "Tom H.", role: "Operations", text: "Solid studio environment. The custom API integrations were exactly what we needed to scale operations globally." },
  { col: 5, row: 0, cw: 1, rh: 1, stars: 5, name: "Sophie M.", role: "Startup Founder", text: "Conversion rates literally doubled in the first month." },
  { col: 6, row: 0, cw: 1, rh: 1, stars: 4, name: "Rachel B.", role: "Creative Dir", text: "Good communication throughout. Transparent systems." },
  { col: 7, row: 0, cw: 1, rh: 1, stars: 5, name: "Alex P.", role: "Enterprise CTO", text: "Delivered beyond expectations." },
];
const SEAM_2: Record<string, boolean> = { "v2,0": false, "v3,0": true, "v5,0": false, "v6,0": true, "v7,0": false };

function buildPath(card: CardDef, seam: Record<string, boolean>, totalCols: number, totalRows: number): string {
  const x0 = card.col * U; const y0 = card.row * U; const x1 = x0 + card.cw * U; const y1 = y0 + card.rh * U;
  function bump(axis: "h" | "v", mid: number, edge: number, outward: boolean, reverse = false): string {
    const hw = TW / 2; const t = outward ? TAB : -TAB;
    if (axis === "h") { const ty = edge - t; if (!reverse) return `L ${mid - hw} ${edge} C ${mid - hw} ${ty} ${mid + hw} ${ty} ${mid + hw} ${edge}`; else return `L ${mid + hw} ${edge} C ${mid + hw} ${ty} ${mid - hw} ${ty} ${mid - hw} ${edge}`; }
    else { const tx = edge + t; if (!reverse) return `L ${edge} ${mid - hw} C ${tx} ${mid - hw} ${tx} ${mid + hw} ${edge} ${mid + hw}`; else return `L ${edge} ${mid + hw} C ${tx} ${mid + hw} ${tx} ${mid - hw} ${edge} ${mid - hw}`; }
  }
  let d = `M ${x0 + CR} ${y0}`;
  for (let c = card.col; c < card.col + card.cw; c++) { const key = `h${c},${card.row}`; if (card.row > 0 && seam[key] !== undefined) d += " " + bump("h", c * U + U / 2, y0, !seam[key]); }
  d += ` L ${x1 - CR} ${y0} Q ${x1} ${y0} ${x1} ${y0 + CR}`;
  for (let r = card.row; r < card.row + card.rh; r++) { const key = `v${card.col + card.cw},${r}`; if (card.col + card.cw < totalCols && seam[key] !== undefined) d += " " + bump("v", r * U + U / 2, x1, seam[key]); }
  d += ` L ${x1} ${y1 - CR} Q ${x1} ${y1} ${x1 - CR} ${y1}`;
  for (let c = card.col + card.cw - 1; c >= card.col; c--) { const key = `h${c},${card.row + card.rh}`; if (card.row + card.rh < totalRows && seam[key] !== undefined) d += " " + bump("h", c * U + U / 2, y1, seam[key], true); }
  d += ` L ${x0 + CR} ${y1} Q ${x0} ${y1} ${x0} ${y1 - CR}`;
  for (let r = card.row + card.rh - 1; r >= card.row; r--) { const key = `v${card.col},${r}`; if (card.col > 0 && seam[key] !== undefined) d += " " + bump("v", r * U + U / 2, x0, !seam[key], true); }
  d += ` L ${x0} ${y0 + CR} Q ${x0} ${y0} ${x0 + CR} ${y0} Z`;
  return d;
}

function PuzzleGrid({ cards, seam, gridCols, gridRows, uid }: { cards: CardDef[]; seam: Record<string, boolean>; gridCols: number; gridRows: number; uid: string; }) {
  const [hov, setHov] = useState<number | null>(null);
  const gw = gridCols * U; const gh = gridRows * U;
  return (
    <svg width={gw + PAD * 2} height={gh + PAD * 2} viewBox={`${-PAD} ${-PAD} ${gw + PAD * 2} ${gh + PAD * 2}`} style={{ display: "block", flexShrink: 0 }} overflow="visible">
      <defs>{cards.map((c, i) => (<clipPath key={i} id={`${uid}-cp-${i}`}><path d={buildPath(c, seam, gridCols, gridRows)} /></clipPath>))}</defs>
      {cards.map((card, i) => {
        const path = buildPath(card, seam, gridCols, gridRows); const isH = hov === i;
        const px = card.col * U; const py = card.row * U; const pw = card.cw * U; const ph = card.rh * U;
        return (
          <g key={i} onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)} className="cursor-crosshair">
            <path d={path} fill="rgba(0,0,0,0.7)" transform="translate(0,8)" style={{ filter: "blur(12px)", pointerEvents: "none" }} />
            <path d={path} fill={isH ? "#161616" : "#0D0D0D"} style={{ transition: "fill 0.3s ease" }} />
            {isH && <path d={path} fill="none" stroke="rgba(255,107,107,0.15)" strokeWidth="10" />}
            <path d={path} fill="none" stroke={isH ? "rgba(255,107,107,0.8)" : "rgba(255,255,255,0.08)"} strokeWidth={isH ? 2 : 1} style={{ transition: "stroke 0.3s, stroke-width 0.3s" }} />
            <g clipPath={`url(#${uid}-cp-${i})`}>
              <foreignObject x={px} y={py} width={pw} height={ph}>
                <div className="w-full h-full flex flex-col justify-between p-10 md:p-12 select-none">
                  <div>
                    <div className="flex gap-1.5 mb-6">{Array.from({ length: 5 }).map((_, si) => (<Star key={si} size={16} className={si < card.stars ? "fill-[#FF6B6B] text-[#FF6B6B]" : "fill-white/10 text-white/10"} />))}</div>
                    <p className={`text-base md:text-lg font-medium leading-relaxed tracking-wide ${isH ? "text-white" : "text-white/70"}`}>"{card.text}"</p>
                  </div>
                  <div className="mt-8 pt-5 border-t border-white/10">
                    <p className={`text-sm font-bold ${isH ? "text-[#FF6B6B]" : "text-white"}`}>{card.name}</p>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mt-1">{card.role}</p>
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

function PuzzleStrip({ cards, seam, gridCols, gridRows, dir, dur, sid }: { cards: CardDef[]; seam: Record<string, boolean>; gridCols: number; gridRows: number; dir: "left" | "right"; dur: number; sid: string; }) {
  const [paused, setPaused] = useState(false);
  return (
    <div className="overflow-hidden w-full relative z-0" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused((p) => !p)}>
      <div style={{ display: "flex", width: "max-content", animation: `${dir === "left" ? "pzl" : "pzr"} ${dur}s linear infinite`, animationPlayState: paused ? "paused" : "running", willChange: "transform" }}>
        {[0, 1, 2].map((ci) => (<PuzzleGrid key={ci} cards={cards} seam={seam} gridCols={gridCols} gridRows={gridRows} uid={`${sid}-${ci}`} />))}
      </div>
    </div>
  );
}

/* ================================================================
   PORTFOLIO SECTION
   ================================================================ */
const portfolioSlides = [
  { id: 1, title: "Instagram Pages",  content: "instagram" },
  { id: 2, title: "Content Strategy", content: "content"   },
  { id: 3, title: "Brand Identity",   content: "brand"     },
  { id: 4, title: "Campaign Results", content: "stats"     },
];

function InstagramSlide() {
  const cards = [
    { followers: "124K", eng: "4.2%", color: "#FF6B6B", label: "Fashion"   },
    { followers: "89K",  eng: "6.1%", color: "#7EC8E3", label: "Lifestyle" },
    { followers: "210K", eng: "3.8%", color: "#9ACD32", label: "Fitness"   },
    { followers: "56K",  eng: "7.4%", color: "#F4A261", label: "Food"      },
    { followers: "178K", eng: "5.0%", color: "#C77DFF", label: "Tech"      },
    { followers: "93K",  eng: "4.9%", color: "#48CAE4", label: "Travel"    },
  ];
  return (
    <div className="flex flex-col gap-4 w-full max-w-[480px]">
      <p className={`${spaceMono.className} text-[9px] tracking-[0.3em] uppercase text-[#FF6B6B]`}>
        Previously worked with
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {cards.map((c, i) => (
          <div key={i} className="bg-[#111] rounded-sm p-3 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            style={{ border: `1px solid ${c.color}22` }}>
            <div className="w-8 h-8 rounded-full mb-2 flex items-center justify-center text-[8px] font-bold"
              style={{ background: `radial-gradient(circle at 35% 35%, ${c.color}, ${c.color}55)`, color: "#000", boxShadow: `0 0 12px ${c.color}44` }}>
              {c.label[0]}
            </div>
            <p className={`${spaceMono.className} text-[8px] tracking-widest uppercase mb-1`} style={{ color: c.color }}>{c.label}</p>
            <div className={`${spaceMono.className} flex justify-between text-[7px] text-white/30 mb-2`}>
              <span>{c.followers}</span><span>{c.eng}</span>
            </div>
            <div className="h-px mb-2" style={{ background: `${c.color}33` }} />
            <div className="flex flex-col gap-1">
              <div className="h-1 rounded-full w-full" style={{ background: `${c.color}33` }} />
              <div className="h-1 rounded-full w-3/4" style={{ background: `${c.color}1a` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContentSlide() {
  const items = [
    { label: "Reels",         value: 78, color: "#FF6B6B" },
    { label: "Carousels",     value: 62, color: "#C77DFF" },
    { label: "Stories",       value: 91, color: "#7EC8E3" },
    { label: "Static Posts",  value: 45, color: "#9ACD32" },
  ];
  return (
    <div className="flex flex-col gap-6 w-full max-w-[420px]">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col gap-2">
          <div className={`${spaceMono.className} flex justify-between text-[10px] uppercase tracking-widest`}>
            <span className="text-white/40">{item.label}</span>
            <span style={{ color: item.color }}>{item.value}%</span>
          </div>
          <div className="h-[3px] w-full rounded-full bg-white/[0.06] relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full rounded-full"
              style={{ width: `${item.value}%`, background: `linear-gradient(90deg, ${item.color}99, ${item.color})`, boxShadow: `0 0 8px ${item.color}66` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function BrandSlide() {
  const clients = [
    { name: "Aurora",  color: "#FF6B6B" },
    { name: "Nova",    color: "#C77DFF" },
    { name: "Zephyr",  color: "#7EC8E3" },
    { name: "Luma",    color: "#9ACD32" },
    { name: "Drift",   color: "#F4A261" },
    { name: "Soleil",  color: "#48CAE4" },
  ];
  return (
    <div className="w-full max-w-[460px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/[0.04]">
        {clients.map((c, i) => (
          <div key={i} className="aspect-[1.6] flex flex-col items-center justify-center gap-1 transition-all duration-300 cursor-default group"
            style={{ background: "#0d0d0d" }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold mb-1 transition-all duration-300 group-hover:scale-110"
              style={{ background: `${c.color}12`, border: `1px solid ${c.color}44`, color: c.color, boxShadow: `0 0 16px ${c.color}33` }}>
              {c.name[0]}
            </div>
            <span className={`${spaceMono.className} text-[9px] tracking-[0.15em] uppercase`} style={{ color: `${c.color}99` }}>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatsSlide() {
  const stats = [
    { num: "4.2M", label: "Total Reach",    color: "#FF6B6B" },
    { num: "30+",  label: "Clients Served", color: "#C77DFF" },
    { num: "89%",  label: "Retention Rate", color: "#7EC8E3" },
    { num: "6.1%", label: "Avg Engagement", color: "#9ACD32" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px w-full max-w-[440px] bg-white/[0.04]">
      {stats.map((s, i) => (
        <div key={i} className="p-5 md:p-8 flex flex-col gap-2 group cursor-default" style={{ background: "#0d0d0d" }}>
          <span className={`${cormorant.className} text-5xl font-light leading-none`}
            style={{ color: s.color, textShadow: `0 0 24px ${s.color}44` }}>{s.num}</span>
          <span className={`${spaceMono.className} text-[9px] tracking-[0.25em] uppercase text-white/30`}>{s.label}</span>
          <div className="h-px w-8 mt-1 rounded-full" style={{ background: `${s.color}66` }} />
        </div>
      ))}
    </div>
  );
}

const slideContentMap: Record<string, React.ReactNode> = {
  instagram: <InstagramSlide />,
  content:   <ContentSlide />,
  brand:     <BrandSlide />,
  stats:     <StatsSlide />,
};

function PortfolioSection() {
  const [current, setCurrent]     = useState(0);
  const [animDir, setAnimDir]     = useState<"left" | "right">("right");
  const [isAnim, setIsAnim]       = useState(false);
  const [displayed, setDisplayed] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (index: number, dir: "left" | "right" = "right") => {
    if (index === current || isAnim) return;
    setAnimDir(dir);
    setIsAnim(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setDisplayed(index);
      setCurrent(index);
      setTimeout(() => setIsAnim(false), 400);
    }, 300);
  };

  const prev = () => goTo((current - 1 + portfolioSlides.length) % portfolioSlides.length, "left");
  const next = () => goTo((current + 1) % portfolioSlides.length, "right");

  const slide = portfolioSlides[displayed];
  const exitClass  = animDir === "right" ? "-translate-x-8 opacity-0" : "translate-x-8 opacity-0";
  const enterClass = "translate-x-0 opacity-100";

  return (
    <section className="w-full bg-[#050505] border-y border-white/10 flex flex-col md:flex-row min-h-[500px] md:min-h-[600px]">

      {/* LEFT — heading only */}
      <div className="w-full md:w-[36%] flex items-center px-6 md:px-12 py-10 md:py-0 shrink-0 border-b md:border-b-0 md:border-r border-white/[0.06]">
        <div className="flex items-center gap-5">
          <span className="text-[#FF6B6B] text-3xl leading-none select-none">→</span>
          <h2 className={`${cormorant.className} text-[clamp(36px,5vw,80px)] font-light leading-none tracking-tight text-white`}>
            Portfolio
          </h2>
        </div>
      </div>

      {/* RIGHT — slides + controls */}
      <div className="flex-1 flex flex-col">

        {/* Centered slide content */}
        <div className="flex-1 flex items-center justify-center pl-6 md:pl-24 pr-6 md:pr-12 py-8 md:py-10 overflow-hidden">
          <div className="w-full flex flex-col items-center">
            <p className={`${spaceMono.className} text-[9px] tracking-[0.3em] uppercase text-white/20 mb-6`}>
              {slide.title}
            </p>
            <div className={`w-full transition-all duration-300 ease-in-out ${isAnim ? exitClass : enterClass}`}>
              {slideContentMap[slide.content]}
            </div>
          </div>
        </div>

        {/* Bottom nav bar */}
        <div className={`${spaceMono.className} border-t border-white/[0.06] px-4 md:px-8 py-4 flex items-center gap-3 md:gap-5`}>
          <button onClick={prev} aria-label="Previous"
            className="text-white/40 hover:text-white transition-colors duration-200 text-base w-5 text-center">‹</button>

          <span className="text-[11px] text-white/40 tracking-widest tabular-nums min-w-[48px] text-center">
            <span className="text-white">{current + 1}</span>{" / "}{portfolioSlides.length}
          </span>

          <button onClick={next} aria-label="Next"
            className="text-white/40 hover:text-white transition-colors duration-200 text-base w-5 text-center">›</button>

          <div className="flex-1 h-px bg-white/[0.08] relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full bg-[#FF6B6B] transition-all duration-500 ease-out"
              style={{ width: `${((current + 1) / portfolioSlides.length) * 100}%` }} />
          </div>

          <div className="flex items-center gap-[6px]">
            {portfolioSlides.map((_, i) => (
              <button key={i} onClick={() => goTo(i, i > current ? "right" : "left")} aria-label={`Slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${i === current ? "w-4 h-[3px] bg-[#FF6B6B]" : "w-[3px] h-[3px] bg-white/20 hover:bg-white/50"}`} />
            ))}
          </div>

          <button className="text-white/25 hover:text-white/60 transition-colors text-sm tracking-widest">···</button>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   DEVICE SHOWCASE
   ================================================================ */


const SCENES = [
  {
    phone1:  { label: "Web Design",       imageSrc: undefined as string | undefined },
    laptop1: { label: "Custom Software",  imageSrc: undefined as string | undefined },
    phone2:  { label: "Web Development",  imageSrc: undefined as string | undefined },
    laptop2: { label: "Web Automation",   imageSrc: undefined as string | undefined },
    phone3:  { label: "SEO Strategy",     imageSrc: undefined as string | undefined },
    laptop3: { label: "Dashboards",       imageSrc: undefined as string | undefined },
    phone4:  { label: "Monthly Presence", imageSrc: undefined as string | undefined },
    laptop4: { label: "Landing Pages",    imageSrc: undefined as string | undefined },
  }
];

function Laptop({ imageSrc, label }: { imageSrc?: string; label?: string }) {
  return (
    <div style={{ width: "clamp(240px, 32vw, 400px)", flexShrink: 0, position: "relative" }}>
      <div style={{ position: "absolute", bottom: -10, left: "10%", right: "10%", height: 30, background: "rgba(0,0,0,0.15)", filter: "blur(18px)", borderRadius: "50%", zIndex: 0 }} />
      <div style={{ position: "relative", zIndex: 1, background: "#0e0e0e", borderRadius: "14px 14px 0 0", border: "2px solid rgba(0,0,0,0.15)", borderBottom: "none", overflow: "hidden", paddingBottom: "63%", boxShadow: "0 -4px 30px rgba(0,0,0,0.12)" }}>
        <div style={{ position: "absolute", top: 6, left: "50%", transform: "translateX(-50%)", width: 6, height: 6, borderRadius: "50%", background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.1)", zIndex: 10 }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 28, background: "#111", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 10px", gap: 6, zIndex: 5 }}>
          <div style={{ display: "flex", gap: 4 }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
              <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c, opacity: 0.8 }} />
            ))}
          </div>
          <div style={{ flex: 1, height: 14, background: "rgba(255,255,255,0.06)", borderRadius: 4, marginLeft: 8 }} />
        </div>
        <div style={{ position: "absolute", inset: 0, top: 28 }}>
          {imageSrc ? (
            <img src={imageSrc} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #141414 0%, #0a0a0a 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, padding: "0 24px" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid rgba(255,107,107,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,107,107,0.6)" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
              </div>
              <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 9, fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.15em" }}>{label}</span>
              <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 6 }}>
                {[100, 80, 60].map((w, i) => (
                  <div key={i} style={{ height: 5, background: "rgba(255,255,255,0.06)", borderRadius: 3, width: `${w}%` }} />
                ))}
              </div>
            </div>
          )}
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 60%)", pointerEvents: "none" }} />
      </div>
      <div style={{ height: 6, background: "linear-gradient(to bottom, #2a2a2a, #1a1a1a)", border: "1px solid rgba(255,255,255,0.08)", borderTop: "none", borderBottom: "none", position: "relative", zIndex: 1 }} />
      <div style={{ height: 20, background: "linear-gradient(to bottom, #1e1e1e, #141414)", borderRadius: "0 0 12px 12px", border: "1px solid rgba(255,255,255,0.08)", borderTop: "none", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 40px rgba(0,0,0,0.15)", position: "relative", zIndex: 1 }}>
        <div style={{ width: 60, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.06)" }} />
      </div>
    </div>
  );
}

function Phone({ imageSrc, label }: { imageSrc?: string; label?: string }) {
  return (
    <div style={{ width: "clamp(90px, 13vw, 160px)", flexShrink: 0, position: "relative", alignSelf: "flex-end", marginBottom: 26 }}>
      <div style={{ position: "absolute", bottom: -8, left: "5%", right: "5%", height: 20, background: "rgba(0,0,0,0.12)", filter: "blur(12px)", borderRadius: "50%", zIndex: 0 }} />
      <div style={{ position: "relative", zIndex: 1, background: "#0e0e0e", borderRadius: 28, border: "2px solid rgba(0,0,0,0.15)", overflow: "hidden", paddingBottom: "214%", boxShadow: "0 8px 40px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(255,255,255,0.04)" }}>
        <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 44, height: 13, borderRadius: 10, background: "#000", zIndex: 10 }} />
        <div style={{ position: "absolute", right: -2, top: 60, width: 2, height: 30, background: "rgba(255,255,255,0.1)", borderRadius: "0 2px 2px 0" }} />
        <div style={{ position: "absolute", left: -2, top: 50, width: 2, height: 22, background: "rgba(255,255,255,0.1)", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: -2, top: 80, width: 2, height: 22, background: "rgba(255,255,255,0.1)", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", inset: 0, top: 28 }}>
          {imageSrc ? (
            <img src={imageSrc} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <div style={{ width: "100%", height: "100%", background: "linear-gradient(to bottom, #141414, #090909)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, padding: "0 10px" }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, border: "1px solid rgba(255,107,107,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,107,107,0.5)" strokeWidth="1.5">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line x1="9" y1="7" x2="15" y2="7" />
                  <line x1="9" y1="11" x2="15" y2="11" />
                </svg>
              </div>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 7, fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em", textAlign: "center" }}>{label}</span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4, width: "100%", padding: "0 4px" }}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} style={{ aspectRatio: "1", borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)" }} />
                ))}
              </div>
            </div>
          )}
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)", pointerEvents: "none" }} />
      </div>
      <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", width: 32, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.2)" }} />
    </div>
  );
}

function DeviceScene({ scene }: { scene: typeof SCENES[0] }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 24, paddingBottom: 20, paddingLeft: 16, paddingRight: 16 }}>
      <Phone  label={scene.phone1.label}  imageSrc={scene.phone1.imageSrc} />
      <Laptop label={scene.laptop1.label} imageSrc={scene.laptop1.imageSrc} />
      <Phone  label={scene.phone2.label}  imageSrc={scene.phone2.imageSrc} />
      <Laptop label={scene.laptop2.label} imageSrc={scene.laptop2.imageSrc} />
      <Phone  label={scene.phone3.label}  imageSrc={scene.phone3.imageSrc} />
      <Laptop label={scene.laptop3.label} imageSrc={scene.laptop3.imageSrc} />
      <Phone  label={scene.phone4.label}  imageSrc={scene.phone4.imageSrc} />
      <Laptop label={scene.laptop4.label} imageSrc={scene.laptop4.imageSrc} />
    </div>
  );
}

function TagRow({ tags, dir = "left", speed = 35 }: { tags: string[]; dir?: "left" | "right"; speed?: number }) {
  return (
    <div style={{ overflow: "hidden", width: "100%", padding: "10px 0" }}>
      <div style={{ display: "flex", width: "max-content", animation: `${dir === "left" ? "tagL" : "tagR"} ${speed}s linear infinite` }}>
        {[...tags, ...tags, ...tags].map((tag, i) => (
          <span key={i} style={{ whiteSpace: "nowrap", fontSize: 10, fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.25em", padding: "0 16px", color: tag === "•" ? "#FF6B6B" : "rgba(0,0,0,0.35)", fontWeight: 700 }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

const TAGS_TOP = ["Web Design", "•", "Custom Software", "•", "Web Development", "•", "Dashboards", "•", "SEO Strategy", "•", "Monthly Presence", "•", "Web Automation", "•"];
const TAGS_BOT = ["Web Design", "•", "Custom Software", "•", "Web Development", "•", "Dashboards", "•", "SEO Strategy", "•", "Monthly Presence", "•", "Web Automation", "•"];

function DeviceShowcase() {
  const [paused, setPaused] = useState(false);
  return (
    <section style={{ position: "relative", background: "#ffffff", overflow: "hidden", paddingTop: "clamp(32px,5vw,64px)", paddingBottom: "clamp(32px,5vw,64px)" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 900, height: 500, background: "rgba(255,107,107,0.06)", filter: "blur(150px)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: "0 auto 0 0", width: "clamp(40px, 8vw, 200px)", background: "linear-gradient(to right, #ffffff, transparent)", zIndex: 20, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: "0 0 0 auto", width: "clamp(40px, 8vw, 200px)", background: "linear-gradient(to left, #ffffff, transparent)", zIndex: 20, pointerEvents: "none" }} />

      <div className="text-center relative z-10 px-4" style={{ marginBottom: "clamp(24px,4vw,48px)" }}>
        <p className="text-[#FF6B6B] text-[10px] font-mono uppercase tracking-[0.6em] mb-4">Selected Works</p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter" style={{ color: "#111", margin: 0 }}>
          BUILT BY <span style={{ color: "#FF6B6B" }}>RSI</span>
        </h2>
      </div>

      <TagRow tags={TAGS_TOP} dir="left" speed={30} />

      <div
        style={{ overflow: "hidden", position: "relative", zIndex: 10, padding: "40px 0" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div style={{ display: "flex", width: "max-content", animation: "deviceScroll 60s linear infinite", animationPlayState: paused ? "paused" : "running" }}>
          {[0, 1, 2].map((copy) =>
            SCENES.map((scene, i) => <DeviceScene key={`${copy}-${i}`} scene={scene} />)
          )}
        </div>
      </div>

      <TagRow tags={TAGS_BOT} dir="right" speed={35} />

      <style>{`
        @keyframes tagL         { from { transform: translateX(0); }         to { transform: translateX(-33.333%); } }
        @keyframes tagR         { from { transform: translateX(-33.333%); }  to { transform: translateX(0); } }
        @keyframes deviceScroll { from { transform: translateX(0); }         to { transform: translateX(-33.333333%); } }
      `}</style>
    </section>
  );
}

/* ================================================================
   PAGE
   ================================================================ */
export default function TestimonialsPage() {
  return (
    <main className="bg-[#050505] min-h-screen pt-32 pb-40 overflow-hidden text-white selection:bg-[#FF6B6B] selection:text-black">
      <style>{`
        @keyframes pzl         { from { transform: translateX(0); }           to { transform: translateX(-33.333333%); } }
        @keyframes pzr         { from { transform: translateX(-33.333333%); } to { transform: translateX(0); } }
        @keyframes tagL        { from { transform: translateX(0); }           to { transform: translateX(-33.333%); } }
        @keyframes tagR        { from { transform: translateX(-33.333%); }    to { transform: translateX(0); } }
        @keyframes deviceScroll{ from { transform: translateX(0); }           to { transform: translateX(-33.333333%); } }
      `}</style>

      {/* ── 1. STATS ── */}
      <section className="container mx-auto px-6 text-center mb-32 relative z-20">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-8xl font-display font-bold tracking-tighter mb-8 md:mb-16">
            PROOF OF <span className="text-[#FF6B6B]">CONCEPT</span>
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 divide-x divide-white/10 border-y border-white/10 py-8 md:py-10 max-w-5xl mx-auto">
            <div><h3 className="text-3xl md:text-5xl font-bold">+10</h3><p className="text-[10px] font-mono text-white/50 uppercase tracking-widest mt-3">Active Partners</p></div>
            <div><h3 className="text-3xl md:text-5xl font-bold">+47</h3><p className="text-[10px] font-mono text-white/50 uppercase tracking-widest mt-3">Clients Dealt</p></div>
            <div><h3 className="text-3xl md:text-5xl font-bold">12+</h3><p className="text-[10px] font-mono text-white/50 uppercase tracking-widest mt-3">Active Clients</p></div>
            <div><h3 className="text-3xl md:text-5xl font-bold text-[#FF6B6B]">3+</h3><p className="text-[10px] font-mono text-[#FF6B6B]/70 uppercase tracking-widest mt-3">Flagship SaaS</p></div>
          </div>
        </motion.div>
      </section>

      {/* ── 2. VIDEO TESTIMONIALS ── */}
      <section className="container mx-auto px-6 mb-16 md:mb-40 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_TESTIMONIALS.map((video, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className={`aspect-[3/4] md:aspect-[9/16] ${video.color} rounded-[2rem] relative overflow-hidden group cursor-pointer shadow-[0_0_40px_rgba(0,0,0,0.5)]`}>
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
                <p className="text-white font-bold leading-snug mb-3 text-sm md:text-base">"{video.quote}"</p>
                <p className="text-white/90 text-sm font-bold">{video.name}</p>
                <p className="text-white/60 text-[10px] uppercase tracking-widest mt-1">{video.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3. PUZZLE REVIEW REELS ── */}
      <section className="relative w-full py-16 md:py-32 bg-[#080808] border-y border-white/10 flex flex-col gap-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#FF6B6B]/10 blur-[200px] pointer-events-none rounded-full" />
        <div className="absolute inset-y-0 left-0 w-[15vw] bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[15vw] bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="container mx-auto px-6 mb-8 relative z-20">
          <p className="text-[#FF6B6B] text-[10px] font-mono uppercase tracking-[0.6em] mb-4">Client Verification</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter text-white">THE <span className="text-white/30">CONSENSUS</span></h2>
        </div>
        <PuzzleStrip cards={CARDS_1} seam={SEAM_1} gridCols={GRID1_COLS} gridRows={GRID1_ROWS} dir="left" dur={25} sid="r1" />
        <PuzzleStrip cards={CARDS_2} seam={SEAM_2} gridCols={GRID2_COLS} gridRows={GRID2_ROWS} dir="right" dur={28} sid="r2" />
      </section>

      {/* ── 4. PORTFOLIO ── */}
      <PortfolioSection />

      {/* ── 5. DEVICE SHOWCASE ── */}
      <DeviceShowcase />

    </main>
  );
}