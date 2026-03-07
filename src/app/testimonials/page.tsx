"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Play } from "lucide-react";

// The 4 Video Testimonials with specific brand colors
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

// Row 1 Reviews (Removed hardcoded width)
const REVIEWS_ROW_1 = [
  {
    stars: 5,
    text: "Incredible system architecture. RSI transformed our operations.",
  },
  { stars: 4, text: "Highly professional and fast execution." },
  { stars: 5, text: "Pixel perfect engineering. Highly recommended." },
  { stars: 3, text: "Good work, slightly delayed timelines." },
  {
    stars: 5,
    text: "They don't just build websites; they build digital dominance.",
  },
  { stars: 4, text: "Great UI/UX capabilities." },
];

// Row 2 Reviews (Removed hardcoded width)
const REVIEWS_ROW_2 = [
  {
    stars: 5,
    text: "The $500 managed presence is a steal for the value provided.",
  },
  { stars: 5, text: "Absolutely stunning futuristic design." },
  {
    stars: 1,
    text: "Too exclusive. Hard to get onboarded as they only take 6 clients.",
  },
  { stars: 4, text: "Solid backend infrastructure." },
  {
    stars: 5,
    text: "RSI Studio acts as a true strategic partner, not an agency.",
  },
  { stars: 4, text: "Very smooth transitions and framer motion usage." },
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

      {/* 2. Video Testimonials (SRS Screenshot Layout) */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_TESTIMONIALS.map((video, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`aspect-[3/4] md:aspect-[9/16] ${video.color} rounded-3xl relative overflow-hidden group cursor-pointer shadow-2xl`}
            >
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform shadow-lg">
                  <Play fill="white" className="text-white w-6 h-6 ml-1" />
                </div>
              </div>

              {/* Bottom Gradient & Text */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <div className="w-8 h-8 bg-black/20 rounded-md backdrop-blur-sm mb-4 border border-white/20 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">❝</span>
                </div>
                <p className="text-white font-bold leading-snug mb-2 text-sm md:text-base">
                  "{video.quote}"
                </p>
                <p className="text-white/80 text-xs font-bold">{video.name}</p>
                <p className="text-white/50 text-[10px] uppercase tracking-widest">
                  {video.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Dual-Layer Animated Puzzle Review Reel */}
      <section className="flex flex-col gap-6">
        <Marquee speed={40} gradient={false} direction="left" className="py-4">
          <div className="flex gap-6 pr-6 items-center">
            {REVIEWS_ROW_1.map((review, i) => (
              <ReviewBox key={i} {...review} />
            ))}
          </div>
        </Marquee>

        <Marquee speed={30} gradient={false} direction="right" className="py-4">
          <div className="flex gap-6 pr-6 items-center">
            {REVIEWS_ROW_2.map((review, i) => (
              <ReviewBox key={i} {...review} />
            ))}
          </div>
        </Marquee>
      </section>
    </main>
  );
}

// Sub-Component: Irregular Animated Review Boxes
function ReviewBox({ stars, text }: { stars: number; text: string }) {
  // Randomize the animation slightly so they don't all morph exactly the same way
  const randomDuration = Math.random() * 4 + 6; // Between 6 and 10 seconds

  return (
    <motion.div
      animate={{
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 70% 70% 30% / 30% 30% 70% 70%",
          "50% 50% 20% 80% / 25% 80% 20% 75%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-max max-w-[350px] min-w-[220px] min-h-[200px] bg-white/[0.03] border border-white/10 p-8 flex flex-col justify-center hover:bg-white/[0.08] transition-colors shadow-xl backdrop-blur-sm"
    >
      <div className="flex gap-1 mb-4">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <span
              key={i}
              className={`text-xl ${i < stars ? "text-[#FF6B6B] drop-shadow-[0_0_8px_rgba(255,107,107,0.8)]" : "text-white/20"}`}
            >
              ★
            </span>
          ))}
      </div>
      <p className="text-white/80 font-medium leading-relaxed italic">
        "{text}"
      </p>
    </motion.div>
  );
}
