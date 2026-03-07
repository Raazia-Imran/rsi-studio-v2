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

/* ---------------- REVIEW PUZZLE LOGIC ---------------- */
type ReviewSize = "small" | "medium" | "large";

// Scaled-up dimensions so exactly ~4 fit within 100vw, solving the clutter issue.
// The varying heights naturally create the interlocking puzzle look when centered.
const getSizeClasses = (size: ReviewSize) => {
  switch (size) {
    case "small":
      return "w-[400px] h-[260px]";
    case "medium":
      return "w-[550px] h-[320px]";
    case "large":
      return "w-[750px] h-[400px]";
  }
};

/* ---------- 12 REVIEWS (Exact Distribution) ---------- */
const REEL_1 = [
  {
    size: "large" as ReviewSize,
    rating: 5,
    name: "Sarah Jenkins",
    role: "Founder",
    text: "Exceptional production quality. RSI transformed our architecture from a bloated monolith into a streamlined, high-performance ecosystem. The strict 6-client limit meant we got unparalleled attention to detail, and their team operated as a true extension of our own. Absolute game-changers in the B2B SaaS space.",
  },
  {
    size: "small" as ReviewSize,
    rating: 5,
    name: "Elena R.",
    role: "Director",
    text: "Creative team and smooth workflow. The final handoff was totally flawless.",
  },
  {
    size: "medium" as ReviewSize,
    rating: 4,
    name: "Marcus T.",
    role: "CEO",
    text: "Highly professional studio. Flawless execution on our custom Next.js build, bringing our vision to life with zero technical debt.",
  },
  {
    size: "large" as ReviewSize,
    rating: 5,
    name: "David Kim",
    role: "VP Marketing",
    text: "Great collaboration experience. A true strategic partner that looks beyond just delivering code. Their deep UX research and design system architecture helped us secure our Series A funding with absolute confidence. They don't just build websites; they build digital dominance.",
  },
  {
    size: "small" as ReviewSize,
    rating: 3,
    name: "Chris D.",
    role: "Business Owner",
    text: "Decent experience overall. A bit too complex for my local business needs.",
  },
  {
    size: "medium" as ReviewSize,
    rating: 4,
    name: "Nina S.",
    role: "Product Lead",
    text: "Strong creative direction. The Framer Motion integration they added makes our platform feel incredibly expensive and premium.",
  },
];

const REEL_2 = [
  {
    size: "medium" as ReviewSize,
    rating: 1,
    name: "Anonymous",
    role: "Waitlisted Client",
    text: "Project delays were frustrating. Put on a 3-month waitlist because they rigidly refused to break their 6-client limit.",
  },
  {
    size: "large" as ReviewSize,
    rating: 5,
    name: "James W.",
    role: "E-commerce Dir",
    text: "Absolutely stunning futuristic design. True artisans of the modern web. The $500 monthly managed presence is completely worth it for the peace of mind alone. They handle our SEO, security, and bi-annual updates while we focus purely on scaling our core product.",
  },
  {
    size: "small" as ReviewSize,
    rating: 4,
    name: "Tom H.",
    role: "Operations",
    text: "Solid studio environment. The custom API integrations were exactly what we needed.",
  },
  {
    size: "medium" as ReviewSize,
    rating: 5,
    name: "Sophie M.",
    role: "Startup Founder",
    text: "Loved the visual storytelling. Our conversion rates literally doubled in the first month of deploying their architecture.",
  },
  {
    size: "large" as ReviewSize,
    rating: 4,
    name: "Rachel B.",
    role: "Creative Dir",
    text: "Good communication throughout. Transparent systems exactly as promised. They didn't just build us a website; they engineered a bespoke digital presence that perfectly captures our brand's high-end market positioning. The React architecture is blazingly fast.",
  },
  {
    size: "small" as ReviewSize,
    rating: 5,
    name: "Alex P.",
    role: "Enterprise CTO",
    text: "Delivered beyond expectations. Instant global performance gains.",
  },
];

/* ---------------- STAR RENDERER ---------------- */
const RenderStars = ({ count }: { count: number }) => (
  <div className="flex gap-1 mb-6">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={18}
        className={
          i < count
            ? "fill-[#FF6B6B] text-[#FF6B6B]"
            : "fill-white/10 text-white/10"
        }
      />
    ))}
  </div>
);

/* ---------------- PAGE ---------------- */
export default function TestimonialsPage() {
  return (
    <main className="bg-[#050505] min-h-screen pt-32 pb-40 overflow-hidden text-white selection:bg-[#FF6B6B] selection:text-black">
      {/* ---------------- 1. EXPLORE PAGE STATS ---------------- */}
      <section className="container mx-auto px-6 text-center mb-32 relative z-20">
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

      {/* ---------------- 2. VIDEO TESTIMONIALS ---------------- */}
      <section className="container mx-auto px-6 mb-40 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_TESTIMONIALS.map((video, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`aspect-[3/4] md:aspect-[9/16] ${video.color} rounded-3xl relative overflow-hidden group cursor-pointer shadow-2xl`}
            >
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

      {/* ---------------- 3. PUZZLE REVIEW REELS ---------------- */}
      <section className="relative w-full py-24 bg-[#0A0A0F] border-y border-white/5 flex flex-col gap-16">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#FF6B6B]/10 blur-[150px] pointer-events-none rounded-full" />

        {/* Cinematic Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-[15vw] bg-gradient-to-r from-[#0A0A0F] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[15vw] bg-gradient-to-l from-[#0A0A0F] to-transparent z-10 pointer-events-none" />

        {/* Reel 1 (Left) */}
        <div className="overflow-hidden w-full relative z-0">
          {/* items-center is what creates the vertical puzzle stagger without stacking rows */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 55, ease: "linear", repeat: Infinity }}
            className="flex items-center gap-8 w-max px-4 hover:[animation-play-state:paused]"
          >
            {[...REEL_1, ...REEL_1].map((review, i) => (
              <div
                key={`r1-${i}`}
                className={`${getSizeClasses(review.size)} shrink-0 bg-[#111] border border-white/10 hover:border-[#FF6B6B]/40 rounded-3xl p-10 flex flex-col justify-between shadow-2xl transition-all group`}
              >
                <div>
                  <RenderStars count={review.rating} />
                  <p className="text-white/80 text-base md:text-lg whitespace-normal leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-base font-bold text-white group-hover:text-[#FF6B6B] transition-colors">
                    {review.name}
                  </p>
                  <p className="text-white/40 text-[11px] uppercase tracking-widest mt-1">
                    {review.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Reel 2 (Right) */}
        <div className="overflow-hidden w-full relative z-0">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 50, ease: "linear", repeat: Infinity }}
            className="flex items-center gap-8 w-max px-4 hover:[animation-play-state:paused]"
          >
            {[...REEL_2, ...REEL_2].map((review, i) => (
              <div
                key={`r2-${i}`}
                className={`${getSizeClasses(review.size)} shrink-0 bg-[#111] border border-white/10 hover:border-[#FF6B6B]/40 rounded-3xl p-10 flex flex-col justify-between shadow-2xl transition-all group`}
              >
                <div>
                  <RenderStars count={review.rating} />
                  <p className="text-white/80 text-base md:text-lg whitespace-normal leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-base font-bold text-white group-hover:text-[#FF6B6B] transition-colors">
                    {review.name}
                  </p>
                  <p className="text-white/40 text-[11px] uppercase tracking-widest mt-1">
                    {review.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}