// "use client";

// import { motion } from "framer-motion";
// import { BookOpen, Plane } from "lucide-react";
// import Link from "next/link";

// const BLOGS = [
//   {
//     title: "Future of AI in Product Design",
//     desc: "How AI is reshaping modern product development workflows and accelerating innovation cycles.",
//   },
//   {
//     title: "Scaling React Applications",
//     desc: "Architectural patterns and best practices for building scalable React systems.",
//   },
//   {
//     title: "Startup Design Systems",
//     desc: "Why early-stage startups should invest in scalable and reusable UI components.",
//   },
//   {
//     title: "Human-Centered UX",
//     desc: "Reducing cognitive load in modern SaaS dashboards through thoughtful interface design.",
//   },
//   {
//     title: "Edge Computing Revolution",
//     desc: "How distributed computing is redefining application latency and global infrastructure.",
//   },
//   {
//     title: "Web Performance Engineering",
//     desc: "Strategies to optimize loading speeds and improve large-scale web applications.",
//   },
// ];

// export default function BlogsPage() {
//   // Shuffle and pick 4 random blogs
//   const randomBlogs = [...BLOGS].sort(() => 0.5 - Math.random()).slice(0, 4);

//   return (
//     <main className="bg-white min-h-screen pt-32 pb-40 text-black selection:bg-black selection:text-white">
//       {/* Hero Section */}
//       <section className="container mx-auto px-6 mb-32 relative flex flex-col items-center text-center">
//         <div className="w-full flex justify-between items-center absolute top-10 px-10 opacity-10 pointer-events-none">
//           <BookOpen size={120} strokeWidth={1} />
//           <Plane size={120} strokeWidth={1} className="transform -rotate-45" />
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="relative z-10 mt-20"
//         >
//           <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-gray-400 mb-6">
//             RSI Library
//           </h2>

//           <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-10">
//             ENGINEERING <br /> <span className="text-gray-300">INSIGHTS</span>
//           </h1>

//           <button className="px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#FF6B6B] transition-colors">
//             Explore Archives
//           </button>
//         </motion.div>
//       </section>

//       {/* Blog Library */}
//       <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Random Published Articles */}
//         {randomBlogs.map((blog, i) => (
//           <div
//             key={i}
//             className="border border-gray-200 p-8 rounded-2xl hover:shadow-2xl transition-shadow bg-gray-50/50"
//           >
//             <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-4 block">
//               Published
//             </span>

//             <h3 className="text-2xl font-display font-bold mb-4">
//               {blog.title}
//             </h3>

//             <p className="text-gray-500 text-sm leading-relaxed mb-6">
//               {blog.desc}
//             </p>

//             <Link
//               href="#"
//               className="text-xs font-bold uppercase tracking-widest text-black hover:text-[#FF6B6B]"
//             >
//               Read Article →
//             </Link>
//           </div>
//         ))}

//         {/* Upcoming Research */}
//         {[1, 2].map((i) => (
//           <div
//             key={i}
//             className="border border-dashed border-gray-300 p-8 rounded-2xl bg-white flex flex-col justify-center text-center opacity-60"
//           >
//             <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF6B6B] mb-2">
//               Upcoming Research
//             </span>

//             <h3 className="text-xl font-display font-bold text-gray-400">
//               Next-Gen React Architecture
//             </h3>
//           </div>
//         ))}
//       </section>
//     </main>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Plane } from "lucide-react";
import Link from "next/link";

const PUBLISHED_ARTICLES = [
  {
    tag: "Engineering",
    title: "Scaling Next.js for Enterprise SaaS Architecture",
    date: "Mar 15, 2026",
  },
  {
    tag: "Design",
    title: "The Psychology of Glassmorphism in High-Ticket Sales",
    date: "Mar 10, 2026",
  },
  {
    tag: "Operations",
    title: "Why We Strictly Limit Onboarding to 6 Clients",
    date: "Feb 28, 2026",
  },
  {
    tag: "AI Automations",
    title: "Integrating AI Pipelines into Legacy Systems",
    date: "Feb 20, 2026",
  },
];

const ONGOING_RESEARCH = [
  {
    tag: "R&D",
    title: "Zero-Latency Global Edge Rendering Techniques",
    status: "In Progress",
  },
  {
    tag: "Systems",
    title: "Automated CRM Node Synchronization Protocols",
    status: "Drafting",
  },
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white text-black font-display selection:bg-[#FF6B6B] selection:text-white pb-32">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 border-b border-black/10 overflow-hidden min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          {/* Left: The Shelf Illustration */}
          <div className="hidden md:flex flex-col items-center justify-center w-1/4 opacity-20">
            <svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              <path d="M6 14h14" />
              <path d="M6 9h14" />
            </svg>
          </div>

          {/* Center: The RSI Library Core */}
          <div className="flex-1 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-8 shadow-2xl">
              <BookOpen size={24} />
            </div>
            <h2 className="text-black/50 text-xs font-mono uppercase tracking-[0.4em] mb-4">
              Knowledge Base
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              THE RSI <span className="text-[#FF6B6B]">LIBRARY</span>
            </h1>
            <p className="text-black/60 max-w-md mx-auto mb-10 text-sm leading-relaxed">
              Explore our latest engineering paradigms, design philosophy, and
              ongoing systemic research.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#FF6B6B] transition-colors flex items-center gap-3">
              Explore Library <ArrowRight size={16} />
            </button>

            {/* Staff Portal Link */}
            <Link
              href="/staff-login"
              className="mt-6 text-[10px] uppercase tracking-widest text-black/30 hover:text-black border-b border-black/10 pb-1 transition-colors"
            >
              Internal Portal Login
            </Link>
          </div>

          {/* Right: The 2D Airplane/Components Illustration */}
          <div className="hidden md:flex flex-col items-center justify-center w-1/4 opacity-20">
            <svg
              width="140"
              height="140"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l5 5-3.2 3.2c-.2.2-.5.3-.8.2L2 16l1-1c.4-.2.9 0 1.2.4L6 18l3.2-3.2 5 5c.4.4.9.4 1.3.1l1.8-1.8c.4-.2.7-.6.5-1z" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
        </div>
      </section>

      {/* --- LIBRARY GRID --- */}
      <section className="max-w-7xl mx-auto px-6 pt-32">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Published Articles (Left Side) */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold tracking-tighter mb-10 border-b border-black/10 pb-4">
              Published Articles
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {PUBLISHED_ARTICLES.map((article, i) => (
                <div
                  key={i}
                  className="group border border-black/10 p-8 rounded-3xl hover:border-black/30 hover:shadow-xl transition-all cursor-pointer bg-[#FAFAFA]"
                >
                  <div className="flex justify-between items-start mb-16">
                    <span className="text-[#FF6B6B] text-[10px] font-bold uppercase tracking-widest bg-[#FF6B6B]/10 px-3 py-1 rounded-full">
                      {article.tag}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold leading-snug mb-4 group-hover:text-[#FF6B6B] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-black/40 text-xs font-mono uppercase tracking-widest">
                    {article.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ongoing Research Sidebar (Right Side) */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-2xl font-bold tracking-tighter mb-10 border-b border-black/10 pb-4">
              Internal Research
            </h3>
            <div className="flex flex-col gap-6">
              {ONGOING_RESEARCH.map((research, i) => (
                <div
                  key={i}
                  className="border border-dashed border-black/20 p-6 rounded-2xl bg-white relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-black/5 rounded-bl-full pointer-events-none" />
                  <span className="text-black/50 text-[10px] font-bold uppercase tracking-widest mb-3 block">
                    {research.tag}
                  </span>
                  <h4 className="text-lg font-bold leading-snug mb-4">
                    {research.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                    <span className="text-xs font-mono text-black/40 uppercase">
                      {research.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- PAGINATION --- */}
        <div className="mt-24 pt-10 border-t border-black/10 flex items-center justify-center gap-2">
          <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/50 hover:bg-black hover:text-white transition-colors">
            1
          </button>
          <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center bg-black text-white shadow-lg">
            2
          </button>
          <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/50 hover:bg-black hover:text-white transition-colors">
            3
          </button>
          <span className="text-black/30 mx-2">...</span>
          <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/50 hover:bg-black hover:text-white transition-colors">
            <ArrowRight size={14} />
          </button>
        </div>
      </section>
    </main>
  );
}