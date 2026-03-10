// // "use client";

// // import { motion } from "framer-motion";

// // export default function TeamPage() {
// //   return (
// //     <main className="min-h-screen bg-black">
// //       {/* Hero */}
// //       <section className="pt-40 pb-20 text-center text-white px-6">
// //         <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6">
// //           THE SYSTEM <span className="text-white/30">ARCHITECTS</span>
// //         </h1>
// //         <p className="text-white/50 font-light text-lg">
// //           Meet the people behind the innovation.
// //         </p>
// //       </section>

// //       {/* 1. Founders (Black Theme with Beige) */}
// //       <section className="bg-black py-20 px-6 border-t border-white/10">
// //         <div className="container mx-auto max-w-4xl">
// //           <h2 className="text-[#EAE0C8] text-xs font-mono uppercase tracking-[0.3em] mb-12 text-center">
// //             Founders / Directors
// //           </h2>
// //           <div className="grid md:grid-cols-2 gap-8">
// //             {[1, 2].map((i) => (
// //               <div
// //                 key={i}
// //                 className="border border-[#EAE0C8]/20 rounded-2xl p-8 text-center bg-white/[0.02]"
// //               >
// //                 <div className="w-24 h-24 mx-auto rounded-full bg-[#EAE0C8]/10 mb-6" />
// //                 <h3 className="text-2xl font-display font-bold text-white mb-2">
// //                   Founder Name
// //                 </h3>
// //                 <p className="text-[#EAE0C8]/60 text-sm">Visionary Director</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* 2. Backend Devs (White Theme with Black/Beige) */}
// //       <section className="bg-white py-20 px-6">
// //         <div className="container mx-auto max-w-6xl">
// //           <h2 className="text-black text-xs font-mono uppercase tracking-[0.3em] mb-12 text-center">
// //             Backend Engineering
// //           </h2>
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //             {[1, 2, 3, 4].map((i) => (
// //               <div key={i} className="bg-black rounded-2xl p-6 text-center">
// //                 <div className="w-16 h-16 mx-auto rounded-full bg-[#EAE0C8]/20 mb-4" />
// //                 <h3 className="text-lg font-display font-bold text-white mb-1">
// //                   Engineer 0{i}
// //                 </h3>
// //                 <p className="text-[#EAE0C8] text-xs">Systems Architecture</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* 3. Frontend Devs (Black Theme with Coral Pink) */}
// //       <section className="bg-black py-20 px-6">
// //         <div className="container mx-auto max-w-6xl">
// //           <h2 className="text-[#FF6B6B] text-xs font-mono uppercase tracking-[0.3em] mb-12 text-center">
// //             Frontend Engineering
// //           </h2>
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //             {[1, 2, 3, 4].map((i) => (
// //               <div
// //                 key={i}
// //                 className="border border-white/10 rounded-2xl p-6 text-center hover:border-[#FF6B6B]/50 transition-colors"
// //               >
// //                 <div className="w-16 h-16 mx-auto rounded-full bg-[#FF6B6B]/20 mb-4" />
// //                 <h3 className="text-lg font-display font-bold text-white mb-1">
// //                   Developer 0{i}
// //                 </h3>
// //                 <p className="text-white/40 text-xs">UI/UX Integration</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* 4. Management & Sales follow similar alternating logic */}
// //     </main>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

// // --- TEAM DATA ---
// const FOUNDERS = [
//   { name: "Areez Rao", role: "CEO & COO", image: "/placeholder-user.jpg" },
//   {
//     name: "Sir Saad Waqar",
//     role: "Co-Founder",
//     image: "/placeholder-user.jpg",
//   },
// ];

// const BACKEND_DEVS = [
//   {
//     name: "Hassan Ali",
//     role: "Lead Systems Architect",
//     image: "/placeholder-user.jpg",
//   },
//   {
//     name: "Zain Ahmed",
//     role: "Database Engineer",
//     image: "/placeholder-user.jpg",
//   },
//   {
//     name: "Omar Farooq",
//     role: "Cloud Infrastructure",
//     image: "/placeholder-user.jpg",
//   },
//   { name: "Ali Raza", role: "Security Ops", image: "/placeholder-user.jpg" },
// ];

// const FRONTEND_DEVS = [
//   {
//     name: "Raazia Imran Reshamwala",
//     role: "Lead Web Developer Intern",
//     image: "/placeholder-user.jpg",
//   },
//   {
//     name: "Amna Mohammed",
//     role: "Frontend Engineer",
//     image: "/placeholder-user.jpg",
//   },
//   {
//     name: "Aiza Samad",
//     role: "UI/UX Developer",
//     image: "/placeholder-user.jpg",
//   },
//   {
//     name: "Waheeba Khan",
//     role: "Creative Developer",
//     image: "/placeholder-user.jpg",
//   },
// ];

// const MANAGEMENT = [
//   {
//     name: "Dr. Kamran",
//     role: "Director of Media",
//     image: "/placeholder-user.jpg",
//   },
//   {
//     name: "Sarah Khan",
//     role: "Operations Lead",
//     image: "/placeholder-user.jpg",
//   },
//   {
//     name: "Bilal Tariq",
//     role: "Project Manager",
//     image: "/placeholder-user.jpg",
//   },
// ];

// const SALES_TEAM = [
//   {
//     name: "Usman Ghani",
//     role: "Head of Acquisitions",
//     image: "/placeholder-user.jpg",
//   },
//   {
//     name: "Fatima Noor",
//     role: "Client Relations",
//     image: "/placeholder-user.jpg",
//   },
//   {
//     name: "Rami Malik",
//     role: "Global Outreach",
//     image: "/placeholder-user.jpg",
//   },
//   {
//     name: "Ayesha Gul",
//     role: "Enterprise Sales",
//     image: "/placeholder-user.jpg",
//   },
// ];

// export default function TeamPage() {
//   return (
//     <main className="min-h-screen font-display selection:bg-[#FF6B6B] selection:text-black">
//       {/* 1. HERO SECTION (Black Theme) */}
//       <section className="bg-[#050505] text-white pt-40 pb-20 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh] text-center border-b border-white/5">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] pointer-events-none rounded-full" />
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-[#E5D9C5] text-xs font-mono uppercase tracking-[0.4em] mb-6"
//         >
//           The Collective
//         </motion.h2>
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 relative z-10"
//         >
//           MEET THE PEOPLE <br className="hidden md:block" />
//           <span className="text-white/40">BEHIND INNOVATION</span>
//         </motion.h1>
//       </section>

//       {/* 2. FOUNDERS (Black Theme + Beige / RSI ONE) */}
//       <section className="bg-[#0A0A0F] py-32 px-6 border-b border-white/5">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
//               The Visionaries
//             </h3>
//             <div className="w-12 h-1 bg-[#E5D9C5] mx-auto mt-6" />
//           </div>
//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {FOUNDERS.map((person, i) => (
//               <div
//                 key={i}
//                 className="group relative border border-white/10 bg-[#111] p-8 rounded-3xl overflow-hidden hover:border-[#E5D9C5]/50 transition-colors text-center"
//               >
//                 <div className="w-32 h-32 mx-auto rounded-full bg-[#1A1A1A] mb-6 border border-white/5 overflow-hidden" />
//                 <h4 className="text-2xl font-bold text-white mb-2">
//                   {person.name}
//                 </h4>
//                 <p className="text-[#E5D9C5] font-mono text-xs uppercase tracking-widest">
//                   {person.role}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. BACKEND DEVS (White Theme + Black Cards + Beige Text / RSI ONE) */}
//       <section className="bg-[#F8F8F8] py-32 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h3 className="text-3xl md:text-5xl font-bold text-black tracking-tighter">
//               System Engineers
//             </h3>
//             <div className="w-12 h-1 bg-black mx-auto mt-6" />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {BACKEND_DEVS.map((person, i) => (
//               <div
//                 key={i}
//                 className="bg-[#050505] p-8 rounded-3xl text-center shadow-2xl hover:-translate-y-2 transition-transform"
//               >
//                 <div className="w-24 h-24 mx-auto rounded-full bg-[#1A1A1A] mb-6 border border-[#E5D9C5]/20" />
//                 <h4 className="text-lg font-bold text-white mb-2">
//                   {person.name}
//                 </h4>
//                 <p className="text-[#E5D9C5] font-mono text-[10px] uppercase tracking-widest">
//                   {person.role}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. FRONTEND DEVS (Black Theme + Coral Pink + White Text / RSI STUDIO) */}
//       <section className="bg-[#050505] py-32 px-6 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B6B]/10 blur-[100px] pointer-events-none rounded-full" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center mb-16">
//             <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
//               Creative Engineering
//             </h3>
//             <div className="w-12 h-1 bg-[#FF6B6B] mx-auto mt-6" />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {FRONTEND_DEVS.map((person, i) => (
//               <div
//                 key={i}
//                 className="bg-[#0A0A0F] border border-white/5 hover:border-[#FF6B6B]/50 p-8 rounded-3xl text-center shadow-[0_0_30px_rgba(255,107,107,0.05)] transition-all group"
//               >
//                 <div className="w-24 h-24 mx-auto rounded-full bg-[#1A1A1A] mb-6 group-hover:shadow-[0_0_20px_rgba(255,107,107,0.4)] transition-shadow" />
//                 <h4 className="text-lg font-bold text-white mb-2">
//                   {person.name}
//                 </h4>
//                 <p className="text-[#FF6B6B] font-mono text-[10px] uppercase tracking-widest">
//                   {person.role}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5. MANAGEMENT & MEDIA (White Theme + Black Cards + Beige Text) */}
//       <section className="bg-[#FFFFFF] py-32 px-6 border-t border-black/5">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h3 className="text-3xl md:text-5xl font-bold text-black tracking-tighter">
//               Management & Media
//             </h3>
//             <div className="w-12 h-1 bg-black mx-auto mt-6" />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {MANAGEMENT.map((person, i) => (
//               <div
//                 key={i}
//                 className="bg-[#0A0A0F] p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all"
//               >
//                 <div className="w-28 h-28 mx-auto rounded-full bg-[#1A1A1A] mb-6 border border-[#E5D9C5]/30" />
//                 <h4 className="text-xl font-bold text-white mb-2">
//                   {person.name}
//                 </h4>
//                 <p className="text-[#E5D9C5] font-mono text-xs uppercase tracking-widest">
//                   {person.role}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 6. SALES TEAM (Black Theme + Coral Pink + White Text) */}
//       <section className="bg-[#0A0A0F] py-32 px-6 border-t border-white/5">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
//               Acquisitions
//             </h3>
//             <div className="w-12 h-1 bg-[#FF6B6B] mx-auto mt-6" />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {SALES_TEAM.map((person, i) => (
//               <div
//                 key={i}
//                 className="bg-[#111] border border-white/5 hover:border-[#FF6B6B]/40 p-8 rounded-3xl text-center transition-colors"
//               >
//                 <div className="w-24 h-24 mx-auto rounded-full bg-[#1A1A1A] mb-6 border border-white/10" />
//                 <h4 className="text-lg font-bold text-white mb-2">
//                   {person.name}
//                 </h4>
//                 <p className="text-[#FF6B6B] font-mono text-[10px] uppercase tracking-widest">
//                   {person.role}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

// --- TEAM DATA (PLACEHOLDERS) ---
const FOUNDERS = [
  {
    name: "Founder Name",
    role: "Chief Executive Officer",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Founder Name",
    role: "Co-Founder & Director",
    image: "/placeholder-user.jpg",
  },
];

const BACKEND_DEVS = [
  {
    name: "Senior Backend Engineer",
    role: "Systems Architecture",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Backend Engineer",
    role: "Database Engineering",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Cloud Engineer",
    role: "Infrastructure & DevOps",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Security Engineer",
    role: "System Security",
    image: "/placeholder-user.jpg",
  },
];

const FRONTEND_DEVS = [
  {
    name: "Lead Frontend Developer",
    role: "Web Engineering",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Frontend Developer",
    role: "UI Development",
    image: "/placeholder-user.jpg",
  },
  {
    name: "UI Engineer",
    role: "User Experience Systems",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Creative Developer",
    role: "Interactive Design",
    image: "/placeholder-user.jpg",
  },
];

const MANAGEMENT = [
  {
    name: "Media Director",
    role: "Communications Strategy",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Operations Manager",
    role: "Business Operations",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Project Manager",
    role: "Program Coordination",
    image: "/placeholder-user.jpg",
  },
];

const SALES_TEAM = [
  {
    name: "Sales Lead",
    role: "Business Development",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Account Executive",
    role: "Client Relations",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Outreach Specialist",
    role: "Global Partnerships",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Enterprise Sales Rep",
    role: "Strategic Accounts",
    image: "/placeholder-user.jpg",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen font-display selection:bg-[#FF6B6B] selection:text-black">
      {/* HERO */}
      <section className="bg-[#050505] text-white pt-40 pb-20 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh] text-center border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] pointer-events-none rounded-full" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#E5D9C5] text-xs font-mono uppercase tracking-[0.4em] mb-6"
        >
          The Collective
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 relative z-10"
        >
          MEET THE PEOPLE <br className="hidden md:block" />
          <span className="text-white/40">BEHIND INNOVATION</span>
        </motion.h1>
      </section>

      {/* FOUNDERS */}
      <section className="bg-[#0A0A0F] py-32 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
              The Visionaries
            </h3>
            <div className="w-12 h-1 bg-[#E5D9C5] mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {FOUNDERS.map((person, i) => (
              <div
                key={i}
                className="group relative border border-white/10 bg-[#111] p-8 rounded-3xl overflow-hidden hover:border-[#E5D9C5]/50 transition-colors text-center"
              >
                <div className="w-32 h-32 mx-auto rounded-full bg-[#1A1A1A] mb-6 border border-white/5 overflow-hidden" />

                <h4 className="text-2xl font-bold text-white mb-2">
                  {person.name}
                </h4>

                <p className="text-[#E5D9C5] font-mono text-xs uppercase tracking-widest">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACKEND */}
      <section className="bg-[#F8F8F8] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold text-black tracking-tighter">
              System Engineers
            </h3>
            <div className="w-12 h-1 bg-black mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {BACKEND_DEVS.map((person, i) => (
              <div
                key={i}
                className="bg-[#050505] p-8 rounded-3xl text-center shadow-2xl hover:-translate-y-2 transition-transform"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-[#1A1A1A] mb-6 border border-[#E5D9C5]/20" />

                <h4 className="text-lg font-bold text-white mb-2">
                  {person.name}
                </h4>

                <p className="text-[#E5D9C5] font-mono text-[10px] uppercase tracking-widest">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRONTEND */}
      <section className="bg-[#050505] py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B6B]/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
              Creative Engineering
            </h3>
            <div className="w-12 h-1 bg-[#FF6B6B] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {FRONTEND_DEVS.map((person, i) => (
              <div
                key={i}
                className="bg-[#0A0A0F] border border-white/5 hover:border-[#FF6B6B]/50 p-8 rounded-3xl text-center shadow-[0_0_30px_rgba(255,107,107,0.05)] transition-all group"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-[#1A1A1A] mb-6 group-hover:shadow-[0_0_20px_rgba(255,107,107,0.4)] transition-shadow" />

                <h4 className="text-lg font-bold text-white mb-2">
                  {person.name}
                </h4>

                <p className="text-[#FF6B6B] font-mono text-[10px] uppercase tracking-widest">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANAGEMENT */}
      <section className="bg-[#FFFFFF] py-32 px-6 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold text-black tracking-tighter">
              Management & Media
            </h3>
            <div className="w-12 h-1 bg-black mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {MANAGEMENT.map((person, i) => (
              <div
                key={i}
                className="bg-[#0A0A0F] p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="w-28 h-28 mx-auto rounded-full bg-[#1A1A1A] mb-6 border border-[#E5D9C5]/30" />

                <h4 className="text-xl font-bold text-white mb-2">
                  {person.name}
                </h4>

                <p className="text-[#E5D9C5] font-mono text-xs uppercase tracking-widest">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SALES */}
      <section className="bg-[#0A0A0F] py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
              Acquisitions
            </h3>
            <div className="w-12 h-1 bg-[#FF6B6B] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {SALES_TEAM.map((person, i) => (
              <div
                key={i}
                className="bg-[#111] border border-white/5 hover:border-[#FF6B6B]/40 p-8 rounded-3xl text-center transition-colors"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-[#1A1A1A] mb-6 border border-white/10" />

                <h4 className="text-lg font-bold text-white mb-2">
                  {person.name}
                </h4>

                <p className="text-[#FF6B6B] font-mono text-[10px] uppercase tracking-widest">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}