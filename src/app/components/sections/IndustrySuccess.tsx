// "use client";

// import { motion } from "framer-motion";
// import { Anchor, Plane, Building2, Rocket, Factory } from "lucide-react";

// const INDUSTRIES = [
//   {
//     id: "01",
//     name: "Private Yacht",
//     icon: Anchor,
//     desc: "On-board digital experience & connectivity.",
//   },
//   {
//     id: "02",
//     name: "Aviation",
//     icon: Plane,
//     desc: "Flight logistics & luxury charter systems.",
//   },
//   {
//     id: "03",
//     name: "Real Estate",
//     icon: Building2,
//     desc: "High-yield property investment platforms.",
//   },
//   {
//     id: "04",
//     name: "Startups",
//     icon: Rocket,
//     desc: "MVP acceleration for unicorn trajectories.",
//   },
//   {
//     id: "05",
//     name: "Manufacturing",
//     icon: Factory,
//     desc: "ERP integration & automation dashboards.",
//   },
// ];

// export default function IndustrySuccess() {
//   return (
//     <section
//       id="industries"
//       className="py-32 bg-black text-white relative border-t border-white/5"
//     >
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
//           <div>
//             <h2 className="text-[#FF6B6B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
//               Sectors
//             </h2>
//             <h3 className="text-4xl md:text-6xl font-display font-bold">
//               Industries We <br /> Dominate
//             </h3>
//           </div>
//           <p className="max-w-md text-white/50 text-sm leading-relaxed">
//             We don't dabble. We specialize in high-stakes sectors where
//             precision, security, and aesthetic authority are non-negotiable.
//           </p>
//         </div>

//         {/* The Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
//           {INDUSTRIES.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="relative group bg-black p-12 min-h-[300px] flex flex-col justify-between hover:bg-white/5 transition-colors duration-500"
//             >
//               <div className="flex justify-between items-start">
//                 <span className="text-white/20 font-mono text-sm">
//                   {item.id}
//                 </span>
//                 <item.icon
//                   className="text-[#FF6B6B] opacity-50 group-hover:opacity-100 transition-opacity"
//                   size={24}
//                 />
//               </div>

//               <div>
//                 <h4 className="text-2xl font-display font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
//                   {item.name}
//                 </h4>
//                 <p className="text-sm text-white/40 group-hover:text-white/70 transition-colors">
//                   {item.desc}
//                 </p>
//               </div>

//               {/* Hover Corner Accent */}
//               <div className="absolute top-0 right-0 w-0 h-0 border-t-[1px] border-r-[1px] border-[#FF6B6B] opacity-0 group-hover:w-8 group-hover:h-8 group-hover:opacity-100 transition-all duration-300" />
//             </motion.div>
//           ))}

//           {/* Empty Filler Block for Grid Balance */}
//           <div className="bg-black p-12 flex items-center justify-center text-white/10 font-display text-4xl uppercase font-bold tracking-tighter">
//             RSI /// System
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INDUSTRIES = [
  {
    id: "01",
    name: "Private Yacht",
    color: "bg-[#2A4B7C]",
    textColor: "text-[#2A4B7C]",
    tagline: "Simplifying Fleet Connectivity",
    desc: "Advanced on-board digital experience, logistics routing, and seamless satellite connectivity interfaces.",
    duration: "12 Weeks",
    platform: "Web & Tablet App",
  },
  {
    id: "02",
    name: "Aviation",
    color: "bg-[#D95D39]",
    textColor: "text-[#D95D39]",
    tagline: "Elevating Charter Management",
    desc: "Bespoke flight logistics, luxury charter booking systems, and real-time fleet tracking dashboards.",
    duration: "16 Weeks",
    platform: "SaaS Dashboard",
  },
  {
    id: "03",
    name: "Real Estate",
    color: "bg-[#2D8959]",
    textColor: "text-[#2D8959]",
    tagline: "High-Yield Property Platforms",
    desc: "Investment portals, 3D property tours, and secure transaction gateways for luxury real estate.",
    duration: "10 Weeks",
    platform: "Web Platform",
  },
  {
    id: "04",
    name: "Startups",
    color: "bg-[#7A3E9D]",
    textColor: "text-[#7A3E9D]",
    tagline: "Accelerating Unicorn Trajectories",
    desc: "Rapid MVP development, scalable architectures, and investor-ready presentation systems.",
    duration: "8 Weeks",
    platform: "MVP & Mobile App",
  },
];

export default function IndustrySuccess() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="industries" className="py-32 bg-black text-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
            Specialized Industry
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {INDUSTRIES.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left px-8 py-5 rounded-2xl transition-all duration-300 font-display font-bold text-lg md:text-xl ${
                    isActive
                      ? `${item.color} text-white shadow-lg`
                      : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Right Column: Featured Content Card */}
          <div className="w-full lg:w-2/3 h-[500px] relative rounded-[2.5rem] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className={`absolute inset-0 p-10 md:p-16 flex flex-col md:flex-row gap-8 ${INDUSTRIES[activeIndex].color}`}
              >
                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-center relative z-10">
                  <p className="text-white/80 font-mono text-xs uppercase tracking-widest mb-4">
                    {INDUSTRIES[activeIndex].name} Platform
                  </p>
                  <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6 text-white">
                    {INDUSTRIES[activeIndex].tagline}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-10 max-w-sm">
                    {INDUSTRIES[activeIndex].desc}
                  </p>

                  <div className="flex gap-12 mt-auto">
                    <div>
                      <p className="text-white/60 text-[10px] uppercase tracking-widest mb-1">
                        Project Duration
                      </p>
                      <p className="font-bold text-white">
                        {INDUSTRIES[activeIndex].duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-white/60 text-[10px] uppercase tracking-widest mb-1">
                        Works Across
                      </p>
                      <p className="font-bold text-white">
                        {INDUSTRIES[activeIndex].platform}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Device Mockup Visual */}
                <div className="flex-1 relative flex items-end justify-center md:justify-end translate-y-10 md:translate-y-16">
                  <div className="w-[280px] h-[550px] bg-white rounded-t-[3rem] p-4 shadow-2xl relative border-8 border-gray-100">
                    <div className="w-full h-full bg-gray-50 rounded-[2rem] overflow-hidden relative">
                      {/* Mockup Interface Details */}
                      <div className="absolute top-0 w-full h-24 bg-gray-200/50" />
                      <div className="absolute top-32 left-4 right-4 h-32 bg-white rounded-xl shadow-sm" />
                      <div className="absolute top-72 left-4 right-4 h-16 bg-white rounded-xl shadow-sm" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}