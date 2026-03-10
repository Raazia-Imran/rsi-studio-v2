// "use client";

// import { motion } from "framer-motion";

// const PARTNER_TYPES = [
//   {
//     title: "Strategic Design Partners",
//     desc: "We provide free or discounted services of RSI One. In return, you become consumers or early adopters of the RSI One ecosystem.",
//     color: "bg-[#EAE0C8]/10 border-[#EAE0C8]/20",
//   },
//   {
//     title: "Growth Partners",
//     desc: "We provide services of RSI Studio with no upfront costs. In return, we hold equity or profit share from your business.",
//     color: "bg-[#FF6B6B]/10 border-[#FF6B6B]/20",
//   },
//   {
//     title: "Vendor Partnerships",
//     desc: "For large enterprises and agencies looking to securely outsource high-level engineering and design tasks to our specialized teams.",
//     color: "bg-white/5 border-white/10",
//   },
// ];

// export default function PartnerPage() {
//   const handlePartnerSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert(
//       "Partnership application received. Our team will review your proposal.",
//     );
//   };

//   return (
//     <main className="bg-black min-h-screen pt-32 pb-40 px-6 text-white">
//       <section className="container mx-auto max-w-4xl text-center mb-24">
//         <h2 className="text-[#FF6B6B] text-xs font-mono uppercase tracking-[0.3em] mb-6">
//           Collaborate
//         </h2>

//         <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
//           BECOME A <span className="text-white/40">PARTNER</span>
//         </h1>

//         <p className="text-white/50 text-lg font-light leading-relaxed">
//           We align with visionaries. Select your partnership model below to
//           initiate the application process.
//         </p>
//       </section>

//       <section className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-6 mb-32">
//         {PARTNER_TYPES.map((type, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.1 }}
//             className={`p-8 rounded-2xl border ${type.color}`}
//           >
//             <span className="font-mono text-xs opacity-50 block mb-4">
//               /0{i + 1}
//             </span>

//             <h3 className="text-2xl font-display font-bold mb-4">
//               {type.title}
//             </h3>

//             <p className="text-sm opacity-70 leading-relaxed">{type.desc}</p>
//           </motion.div>
//         ))}
//       </section>

//       <section className="container mx-auto max-w-2xl bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12">
//         <h3 className="text-3xl font-display font-bold mb-8 text-center">
//           Partnership Application
//         </h3>

//         <form onSubmit={handlePartnerSubmit} className="space-y-6 text-sm">
//           <div className="grid md:grid-cols-2 gap-6">
//             <input
//               required
//               placeholder="Full Name"
//               className="bg-black border border-white/10 rounded-lg px-4 py-3"
//             />

//             <input
//               required
//               placeholder="Company"
//               className="bg-black border border-white/10 rounded-lg px-4 py-3"
//             />
//           </div>

//           <textarea
//             required
//             rows={4}
//             placeholder="Proposal Brief"
//             className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 resize-none"
//           />

//           <button
//             type="submit"
//             className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-lg hover:bg-[#FF6B6B] hover:text-white transition-colors"
//           >
//             Submit Application
//           </button>
//         </form>
//       </section>
//     </main>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import {
//   ShieldCheck,
//   Zap,
//   Globe,
//   Sparkles,
//   Terminal,
//   Layers,
//   Cpu,
//   Fingerprint,
//   Microscope,
//   Box,
//   Activity,
//   ChevronRight,
// } from "lucide-react";

// const PARTNER_MODELS = [
//   {
//     id: "01",
//     title: "Strategic Design Partner",
//     status: "Lvl 1 Clearance",
//     longDesc:
//       "Reserved for entities seeking to integrate their DNA into the RSI One infrastructure. You are a co-author of our standards.",
//     details: [
//       "Collaborative R&D on UI",
//       "Roadmap Influence",
//       "Lead Architect Syncs",
//     ],
//     metric: { label: "Nodes Active", value: "88%" },
//     color: "#EAE0C8",
//     icon: <Zap size={24} />,
//   },
//   {
//     id: "02",
//     title: "Growth Venture Partner",
//     status: "Lvl 2 Clearance",
//     longDesc:
//       "For high-velocity startups. We replace a $500k in-house team by deploying elite units for a vested interest in your growth.",
//     details: ["7-Day Dev Sprints", "GTM Global Design", "VC Network Access"],
//     metric: { label: "Venture Velocity", value: "94%" },
//     color: "#FF6B6B",
//     icon: <ShieldCheck size={24} />,
//   },
//   {
//     id: "03",
//     title: "Enterprise Alliance",
//     status: "Lvl 3 Clearance",
//     longDesc:
//       "Enterprise-grade bandwidth for Fortune 500 companies. An autonomous engineering unit handling high-complexity modules.",
//     details: ["SLA Guarantees", "Full IP Transfer", "Multi-Region Support"],
//     metric: { label: "System Load", value: "100%" },
//     color: "#FFFFFF",
//     icon: <Globe size={24} />,
//   },
// ];

// export default function PartnerPage() {
//   return (
//     <main className="bg-[#050505] min-h-screen pt-16 pb-40 px-6 text-white overflow-hidden relative selection:bg-[#FF6B6B]">
//       {/* Cinematic Background */}
//       <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#FF6B6B]/10 blur-[160px] rounded-full pointer-events-none" />
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

//       {/* --- HERO SECTION (Gap Closed) --- */}
//       <section className="container mx-auto max-w-7xl text-center mb-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           <h2 className="text-[#FF6B6B] text-[9px] font-mono uppercase tracking-[0.8em] mb-3">
//             Protocol Selection
//           </h2>
//           <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.85] mb-6">
//             ALLIANCE <br />
//             <span className="text-white/10 italic">MODELS</span>
//           </h1>
//           {/* Decorative Bridge to eliminate perceived gap */}
//           <div className="flex flex-col items-center gap-2">
//             <div className="w-px h-12 bg-gradient-to-b from-[#FF6B6B] to-transparent" />
//             <Activity size={16} className="text-white/10 animate-pulse" />
//           </div>
//         </motion.div>
//       </section>

//       {/* --- STATIC BENTO GRID --- */}
//       <section className="container mx-auto max-w-7xl grid lg:grid-cols-3 gap-8 relative z-10">
//         {PARTNER_MODELS.map((model) => (
//           <div key={model.id} className="group relative flex flex-col gap-4">
//             {/* Top Stats Strip */}
//             <div className="flex justify-between items-center px-6 py-3 bg-white/[0.02] border border-white/5 rounded-2xl">
//               <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">
//                 {model.status}
//               </span>
//               <Fingerprint
//                 size={14}
//                 className="text-white/10 group-hover:text-[#FF6B6B] transition-colors"
//               />
//             </div>

//             {/* Main Data Card */}
//             <div className="bg-gradient-to-b from-[#0D0D0D] to-black border border-white/10 rounded-[3rem] p-10 flex flex-col h-[680px] transition-all duration-500 group-hover:border-[#FF6B6B]/30 group-hover:shadow-[0_0_40px_rgba(0,0,0,1)]">
//               <div className="flex justify-between items-start mb-10">
//                 <div
//                   className="p-4 rounded-xl border border-white/5 bg-white/[0.02]"
//                   style={{ color: model.color }}
//                 >
//                   {model.icon}
//                 </div>
//                 <div className="text-right">
//                   <p className="text-[8px] font-mono text-white/20 uppercase mb-1">
//                     {model.metric.label}
//                   </p>
//                   <p
//                     className="text-lg font-mono font-bold"
//                     style={{ color: model.color }}
//                   >
//                     {model.metric.value}
//                   </p>
//                 </div>
//               </div>

//               <h3 className="text-4xl font-display font-bold mb-6 tracking-tighter group-hover:translate-x-1 transition-transform">
//                 {model.title}
//               </h3>

//               <div className="space-y-8 flex-1">
//                 <section>
//                   <p className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
//                     <Microscope size={12} className="text-[#FF6B6B]" /> Abstract
//                   </p>
//                   <p className="text-sm text-white/60 leading-relaxed font-light">
//                     {model.longDesc}
//                   </p>
//                 </section>

//                 <section>
//                   <p className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
//                     <Terminal size={12} className="text-[#FF6B6B]" /> Technical
//                     Scope
//                   </p>
//                   <div className="grid gap-2">
//                     {model.details.map((detail, idx) => (
//                       <div
//                         key={idx}
//                         className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.03] group-hover:bg-white/[0.04] transition-colors"
//                       >
//                         <span className="text-[11px] font-mono text-white/40 uppercase">
//                           {detail}
//                         </span>
//                         <ChevronRight size={12} className="text-white/10" />
//                       </div>
//                     ))}
//                   </div>
//                 </section>
//               </div>

//               {/* Bottom Visual Element */}
//               <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
//                 <div className="flex gap-1.5">
//                   <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] animate-pulse" />
//                   <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
//                   <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
//                 </div>
//                 <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
//                   v4.0.9
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* Footer Branding */}
//       <div className="container mx-auto max-w-7xl mt-24 flex justify-between items-center opacity-10">
//         <p className="font-mono text-[8px] uppercase tracking-[1em]">
//           Secure System Interface
//         </p>
//         <p className="font-mono text-[8px] uppercase tracking-[1em]">
//           ©2026 RSI STUDIO
//         </p>
//       </div>
//     </main>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Globe,
  Fingerprint,
  Microscope,
  Terminal,
  Activity,
  ChevronRight,
} from "lucide-react";

const PARTNER_MODELS = [
  {
    id: "01",
    title: "Strategic Design Partner",
    status: "Lvl 1 Clearance",
    longDesc:
      "We provide free or discounted services of RSI One. In return, you become consumers or early adopters of the RSI One ecosystem.",
    details: [
      "Free or Discounted Services",
      "Early Adopter Access",
      "RSI One Ecosystem Consumers",
    ],
    metric: { label: "Nodes Active", value: "88%" },
    color: "#EAE0C8",
    icon: <Zap size={28} />,
  },
  {
    id: "02",
    title: "Growth Partner",
    status: "Lvl 2 Clearance",
    longDesc:
      "We provide the services of RSI Studio with no upfront costs. In return, we hold equity or profit share from your business.",
    details: [
      "Zero Upfront Costs",
      "Full RSI Studio Services",
      "Equity or Profit Share Basis",
    ],
    metric: { label: "Venture Velocity", value: "94%" },
    color: "#FF6B6B",
    icon: <ShieldCheck size={28} />,
  },
  {
    id: "03",
    title: "Vendor Partnership",
    status: "Lvl 3 Clearance",
    longDesc:
      "Specifically structured for big companies to securely outsource high-level engineering and design requirements to us.",
    details: [
      "Large Enterprise Outsourcing",
      "High-Level Engineering",
      "Dedicated Design Resourcing",
    ],
    metric: { label: "System Load", value: "100%" },
    color: "#FFFFFF",
    icon: <Globe size={28} />,
  },
];

export default function PartnerPage() {
  return (
    <main className="bg-[#050505] min-h-screen pt-16 pb-40 px-6 text-white overflow-hidden relative selection:bg-[#FF6B6B]">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#FF6B6B]/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <section className="container mx-auto max-w-7xl text-center mb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-[#FF6B6B] text-sm font-mono uppercase tracking-[0.8em] mb-4">
            Protocol Selection
          </h2>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.85] mb-8">
            ALLIANCE <br />
            <span className="text-white/10 italic">MODELS</span>
          </h1>
          <div className="flex flex-col items-center gap-3">
            <div className="w-px h-12 bg-gradient-to-b from-[#FF6B6B] to-transparent" />
            <Activity size={20} className="text-white/10 animate-pulse" />
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto max-w-7xl grid lg:grid-cols-3 gap-8 relative z-10">
        {PARTNER_MODELS.map((model, index) => (
          <div key={model.id} className="group relative flex flex-col gap-4">
            <div className="flex justify-between items-center px-6 py-4 bg-white/[0.02] border border-white/5 rounded-2xl">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                {model.status}
              </span>
              <Fingerprint
                size={18}
                className="text-white/10 group-hover:text-[#FF6B6B] transition-colors"
              />
            </div>

            <div className="bg-gradient-to-b from-[#0D0D0D] to-black border border-white/10 rounded-[3rem] p-10 flex flex-col h-full min-h-[700px] transition-all duration-500 group-hover:border-[#FF6B6B]/30 group-hover:shadow-[0_0_40px_rgba(0,0,0,1)]">
              <div className="flex justify-between items-start mb-10">
                <div
                  className="p-4 rounded-xl border border-white/5 bg-white/[0.02]"
                  style={{ color: model.color }}
                >
                  {model.icon}
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono text-white/30 uppercase mb-2">
                    {model.metric.label}
                  </p>
                  <p
                    className="text-3xl font-mono font-bold"
                    style={{ color: model.color }}
                  >
                    {model.metric.value}
                  </p>
                </div>
              </div>

              <h3 className="text-4xl font-display font-bold mb-8 tracking-tighter group-hover:translate-x-1 transition-transform">
                {model.title}
              </h3>

              <div className="space-y-10 flex-1">
                <section>
                  <p className="text-sm font-mono text-white/30 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                    <Microscope size={16} className="text-[#FF6B6B]" /> Abstract
                  </p>
                  <p className="text-base text-white/70 leading-relaxed font-light">
                    {model.longDesc}
                  </p>
                </section>

                <section>
                  <p className="text-sm font-mono text-white/30 uppercase tracking-[0.3em] mb-5 flex items-center gap-3">
                    <Terminal size={16} className="text-[#FF6B6B]" /> Technical
                    Scope
                  </p>
                  <div className="grid gap-3">
                    {model.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.03] group-hover:bg-white/[0.04] transition-colors"
                      >
                        <span className="text-sm font-mono text-white/50 uppercase">
                          {detail}
                        </span>
                        <ChevronRight size={16} className="text-white/10" />
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  {[0, 1, 2].map((dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`w-2.5 h-2.5 rounded-full ${
                        dotIndex === index
                          ? "bg-[#FF6B6B] animate-pulse"
                          : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-mono text-white/30 uppercase tracking-widest">
                  v4.0.9
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="container mx-auto max-w-7xl mt-24 flex justify-center items-center">
        <p className="font-mono text-sm md:text-base uppercase tracking-[0.8em] text-[#FF6B6B] opacity-90 text-center">
          Initiate Alliance Protocol
        </p>
      </div>
    </main>
  );
}