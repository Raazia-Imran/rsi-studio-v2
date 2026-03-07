// "use client";
// import { motion } from "framer-motion";

// const REVIEWS = Array(10).fill({
//   text: "RSI transformed our digital authority.",
//   author: "CTO, Yacht Co.",
// });

// export default function Reviews() {
//   return (
//     <section className="py-24 bg-black overflow-hidden border-y border-white/5">
//       {/* Reel 1: Moving Left */}
//       <div className="flex mb-8">
//         <motion.div
//           animate={{ x: [0, -1920] }}
//           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//           className="flex gap-8 whitespace-nowrap"
//         >
//           {REVIEWS.map((_, i) => (
//             <div
//               key={i}
//               className="w-[400px] p-8 bg-white/5 rounded-2xl border border-white/10 shrink-0"
//             >
//               <p className="text-white/80 italic mb-4">"{_.text}"</p>
//               <p className="text-[#FF6B6B] text-xs font-bold uppercase tracking-widest">
//                 {_.author}
//               </p>
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Reel 2: Moving Right */}
//       <div className="flex">
//         <motion.div
//           animate={{ x: [-1920, 0] }}
//           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//           className="flex gap-8 whitespace-nowrap"
//         >
//           {REVIEWS.map((_, i) => (
//             <div
//               key={i}
//               className="w-[400px] p-8 bg-white/5 rounded-2xl border border-white/10 shrink-0"
//             >
//               <p className="text-white/80 italic mb-4">"{_.text}"</p>
//               <p className="text-[#FF6B6B] text-xs font-bold uppercase tracking-widest">
//                 {_.author}
//               </p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VIDEOS = [
  {
    name: "Victor Okon",
    role: "CEO & Co-founder at [redacted]",
    bg: "bg-[#f97316]",
  },
  { name: "Neil Swift", role: "Founder at [redacted]", bg: "bg-[#0ea5e9]" },
  {
    name: "Rihun Taufik",
    role: "Product Executive at [redacted]",
    bg: "bg-[#84cc16]",
  },
  {
    name: "Jahanara Rahman",
    role: "CEO & Founder at [redacted]",
    bg: "bg-[#ef4444]",
  },
];

export default function Reviews() {
  return (
    <section className="bg-black py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {VIDEOS.map((video, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`relative h-[500px] rounded-[2rem] overflow-hidden ${video.bg} shadow-2xl flex flex-col justify-between group cursor-pointer`}
            >
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/20">
                <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center">
                  <Play className="text-white ml-1 w-8 h-8 fill-white" />
                </div>
              </div>

              {/* Placeholder for Face/Video */}
              <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

              <div className="relative z-20 p-6 mt-auto">
                <div className="w-8 h-8 bg-white/20 rounded-md mb-4 backdrop-blur-sm"></div>
                <p className="text-white text-sm font-medium leading-relaxed mb-6 line-clamp-2">
                  "Fantastic experience working with the team. They brought our
                  vision to life perfectly and exceeded expectations."
                </p>
                <div>
                  <h4 className="text-white font-bold">{video.name}</h4>
                  <p className="text-white/60 text-[10px] uppercase tracking-widest">
                    {video.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
