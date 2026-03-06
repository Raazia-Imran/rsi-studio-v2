"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

// SRS specific review breakdown (12 total: 6x5-star, 4x4-star, 1x3-star, 1x1-star)
const REVIEWS_ROW_1 = [
  {
    stars: 5,
    width: "w-[400px]",
    text: "Incredible system architecture. RSI transformed our operations.",
  },
  {
    stars: 4,
    width: "w-[300px]",
    text: "Highly professional and fast execution.",
  },
  {
    stars: 5,
    width: "w-[350px]",
    text: "Pixel perfect engineering. Highly recommended.",
  },
  {
    stars: 3,
    width: "w-[250px]",
    text: "Good work, slightly delayed timelines.",
  },
  {
    stars: 5,
    width: "w-[450px]",
    text: "They don't just build websites; they build digital dominance.",
  },
  { stars: 4, width: "w-[300px]", text: "Great UI/UX capabilities." },
];

const REVIEWS_ROW_2 = [
  {
    stars: 5,
    width: "w-[350px]",
    text: "The $500 managed presence is a steal for the value provided.",
  },
  {
    stars: 5,
    width: "w-[300px]",
    text: "Absolutely stunning futuristic design.",
  },
  {
    stars: 1,
    width: "w-[400px]",
    text: "Too exclusive. Hard to get onboarded as they only take 6 clients.",
  },
  { stars: 4, width: "w-[250px]", text: "Solid backend infrastructure." },
  {
    stars: 5,
    width: "w-[450px]",
    text: "RSI Studio acts as a true strategic partner, not an agency.",
  },
  {
    stars: 4,
    width: "w-[350px]",
    text: "Very smooth transitions and framer motion usage.",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="bg-black min-h-screen pt-32 pb-40 overflow-hidden text-white selection:bg-[#FF6B6B] selection:text-black">
      {/* 1. Explore Page Stats */}
      <section className="container mx-auto px-6 text-center mb-32">
        <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-16">
          PROOF OF <span className="text-[#FF6B6B]">CONCEPT</span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 border-y border-white/10 py-10">
          <div>
            <h3 className="text-3xl md:text-5xl font-bold">+10</h3>
            <p className="text-xs text-white/50 uppercase mt-2">
              Active Partners
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-bold">+47</h3>
            <p className="text-xs text-white/50 uppercase mt-2">
              Clients Dealt
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-bold">12+</h3>
            <p className="text-xs text-white/50 uppercase mt-2">
              Active Clients
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-bold text-[#FF6B6B]">
              3+
            </h3>
            <p className="text-xs text-white/50 uppercase mt-2">
              Flagship SaaS
            </p>
          </div>
        </div>
      </section>

      {/* 2. Video Testimonials (Placeholder grid for videos) */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-[9/16] bg-white/5 rounded-2xl relative overflow-hidden flex items-center justify-center group cursor-pointer border border-white/10 hover:border-[#FF6B6B] transition-colors"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
              </div>
              <span className="absolute bottom-6 left-6 text-xs uppercase tracking-widest font-bold">
                Client Story 0{i}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Dual-Layer Puzzle Review Reel */}
      <section className="flex flex-col gap-6">
        {/* Layer 1 (Moves Left) */}
        <Marquee speed={40} gradient={false} direction="left">
          <div className="flex gap-6 pr-6">
            {REVIEWS_ROW_1.map((review, i) => (
              <ReviewBox key={i} {...review} />
            ))}
          </div>
        </Marquee>

        {/* Layer 2 (Moves Right) */}
        <Marquee speed={30} gradient={false} direction="right">
          <div className="flex gap-6 pr-6">
            {REVIEWS_ROW_2.map((review, i) => (
              <ReviewBox key={i} {...review} />
            ))}
          </div>
        </Marquee>
      </section>
    </main>
  );
}

function ReviewBox({
  stars,
  width,
  text,
}: {
  stars: number;
  width: string;
  text: string;
}) {
  return (
    <div
      className={`${width} h-[200px] bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:bg-white/[0.05] transition-colors`}
    >
      <div className="flex gap-1">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <span
              key={i}
              className={`text-lg ${i < stars ? "text-[#FF6B6B]" : "text-white/20"}`}
            >
              ★
            </span>
          ))}
      </div>
      <p className="text-white/80 font-light leading-relaxed">{text}</p>
    </div>
  );
}
