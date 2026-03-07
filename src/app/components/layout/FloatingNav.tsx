// // // "use client";

// // // import { useState } from "react";
// // // import { usePathname } from "next/navigation";
// // // import Link from "next/link";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // const NAV_ITEMS = [
// // //   { label: "Home", href: "/" },
// // //   { label: "Services", href: "/services" },
// // //   { label: "Testimonials", href: "/#reviews" },
// // //   { label: "Pricing", href: "/pricing" },
// // // ];

// // // export default function Navbar() {
// // //   const pathname = usePathname();
// // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// // //   return (
// // //     <>
// // //       {/* Floating Bottom Navbar */}
// // //       <motion.nav
// // //         initial={{ y: 100, opacity: 0, x: "-50%" }}
// // //         animate={{ y: 0, opacity: 1, x: "-50%" }}
// // //         transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
// // //         className="fixed bottom-6 md:bottom-10 left-1/2 z-[100] w-[90%] md:w-auto"
// // //       >
// // //         <div className="bg-[#050505]/90 backdrop-blur-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)] rounded-full px-6 md:px-8 py-4 flex items-center justify-between md:gap-12">
// // //           {/* Logo (Text Only) */}
// // //           <Link href="/" className="group">
// // //             <span className="text-sm md:text-base font-display font-bold tracking-tighter text-white group-hover:text-[#FF6B6B] transition-colors">
// // //               RSI
// // //             </span>
// // //           </Link>

// // //           {/* Desktop Links */}
// // //           <div className="hidden md:flex items-center gap-8">
// // //             {NAV_ITEMS.map((item) => {
// // //               const isActive = pathname === item.href;
// // //               return (
// // //                 <Link
// // //                   key={item.label}
// // //                   href={item.href}
// // //                   className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
// // //                 >
// // //                   {item.label}
// // //                   {isActive && (
// // //                     <motion.div
// // //                       layoutId="navIndicator"
// // //                       className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#FF6B6B]"
// // //                     />
// // //                   )}
// // //                 </Link>
// // //               );
// // //             })}
// // //           </div>

// // //           {/* CTAs */}
// // //           <div className="flex items-center gap-6">
// // //             <Link
// // //               href="/ecosystem"
// // //               className="hidden md:block text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6B6B] hover:text-white transition-colors"
// // //             >
// // //               Start a Project
// // //             </Link>

// // //             {/* Mobile Menu Button */}
// // //             <button
// // //               className="md:hidden text-white text-[11px] font-bold uppercase tracking-[0.2em]"
// // //               onClick={() => setMobileMenuOpen(true)}
// // //             >
// // //               Menu
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </motion.nav>

// // //       {/* Fullscreen Mobile Menu */}
// // //       <AnimatePresence>
// // //         {mobileMenuOpen && (
// // //           <motion.div
// // //             initial={{ opacity: 0, y: "100%" }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             exit={{ opacity: 0, y: "100%" }}
// // //             transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
// // //             className="fixed inset-0 z-[110] bg-[#050505] flex flex-col items-center justify-center"
// // //           >
// // //             <button
// // //               onClick={() => setMobileMenuOpen(false)}
// // //               className="absolute bottom-10 text-white/50 hover:text-white text-xs font-bold uppercase tracking-widest"
// // //             >
// // //               Close Menu
// // //             </button>
// // //             <div className="flex flex-col gap-8 text-center">
// // //               {NAV_ITEMS.map((item) => (
// // //                 <Link
// // //                   key={item.label}
// // //                   href={item.href}
// // //                   onClick={() => setMobileMenuOpen(false)}
// // //                   className="text-4xl font-display font-bold text-white hover:text-[#FF6B6B] transition-colors"
// // //                 >
// // //                   {item.label}
// // //                 </Link>
// // //               ))}
// // //               <Link
// // //                 href="/ecosystem"
// // //                 onClick={() => setMobileMenuOpen(false)}
// // //                 className="mt-8 text-[#FF6B6B] text-xl font-display font-bold uppercase tracking-widest"
// // //               >
// // //                 Start a Project
// // //               </Link>
// // //             </div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </>
// // //   );
// // // }

// // "use client";

// // import { useState, useEffect } from "react";
// // import Link from "next/link";
// // import { motion } from "framer-motion";

// // const ALL_LINKS = [
// //   { label: "Home", href: "/" },
// //   { label: "Services", href: "/services" },
// //   { label: "Work", href: "/work" },
// //   { label: "Pricing", href: "/pricing" },
// //   { label: "Testimonials", href: "/testimonials" },
// //   { label: "Team", href: "/team" },
// //   { label: "Blogs", href: "/blogs" },
// //   { label: "RSI Int.", href: "/rs-international" },
// //   { label: "Partner", href: "/partner" },
// // ];

// // export default function Navbar() {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [isMobileOpen, setIsMobileOpen] = useState(false);

// //   // Fade in on scroll
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsVisible(window.scrollY > 100);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <motion.nav
// //       initial={{ y: -100, opacity: 0 }}
// //       animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
// //       transition={{ duration: 0.5 }}
// //       className="fixed top-4 left-0 right-0 z-[100] px-4 md:px-6 flex justify-center"
// //     >
// //       <div className="bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full px-6 py-3 w-full max-w-7xl flex items-center justify-between">
// //         {/* Logo */}
// //         <Link
// //           href="/"
// //           className="font-display font-bold text-white tracking-tighter shrink-0 mr-4"
// //         >
// //           RSI STUDIO
// //         </Link>

// //         {/* Desktop Links (Scrollable if screen is too small) */}
// //         <div className="hidden md:flex items-center gap-6 overflow-x-auto hide-scrollbar">
// //           {ALL_LINKS.map((link) => (
// //             <Link
// //               key={link.label}
// //               href={link.href}
// //               className="text-[10px] uppercase tracking-widest text-white/70 hover:text-[#FF6B6B] transition-colors whitespace-nowrap"
// //             >
// //               {link.label}
// //             </Link>
// //           ))}
// //         </div>

// //         {/* Mobile Toggle & CTA */}
// //         <div className="flex items-center gap-4 shrink-0 ml-4">
// //           <Link
// //             href="/ecosystem"
// //             className="hidden lg:block px-5 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#FF6B6B] hover:text-white transition-colors"
// //           >
// //             Start Project
// //           </Link>

// //           <button
// //             onClick={() => setIsMobileOpen(!isMobileOpen)}
// //             className="md:hidden text-xs font-bold uppercase tracking-widest text-[#FF6B6B]"
// //           >
// //             {isMobileOpen ? "Close" : "Menu"}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Simple Mobile Dropdown */}
// //       {isMobileOpen && (
// //         <div className="absolute top-20 left-4 right-4 bg-black/95 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 md:hidden backdrop-blur-xl">
// //           {ALL_LINKS.map((link) => (
// //             <Link
// //               key={link.label}
// //               href={link.href}
// //               onClick={() => setIsMobileOpen(false)}
// //               className="text-lg font-display font-bold text-white hover:text-[#FF6B6B]"
// //             >
// //               {link.label}
// //             </Link>
// //           ))}
// //           <Link
// //             href="/ecosystem"
// //             onClick={() => setIsMobileOpen(false)}
// //             className="mt-4 py-3 bg-white text-black text-center text-xs font-bold uppercase tracking-widest rounded-lg"
// //           >
// //             Start Project
// //           </Link>
// //         </div>
// //       )}
// //     </motion.nav>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";

// // Core links always visible on the bottom pill
// const PRIMARY_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "Testimonials", href: "/testimonials" },
//   { label: "Pricing", href: "/pricing" },
// ];

// // All active pages inside the rectangular block menu
// const ALL_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "Services", href: "/services" },
//   { label: "Work", href: "/work" },
//   { label: "Industries", href: "/industries" },
//   { label: "Pricing", href: "/pricing" },
//   { label: "Testimonials", href: "/testimonials" },
//   { label: "Team", href: "/team" },
//   { label: "Blogs", href: "/blogs" },
//   { label: "RS Int.", href: "/rs-international" },
//   { label: "Partner", href: "/partner" },
//   { label: "Contact CEO", href: "/contact-ceo" },
//   { label: "Complaints", href: "/complains" },
// ];

// export default function Navbar() {
//   const pathname = usePathname();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <motion.nav
//       initial={{ y: 100, opacity: 0, x: "-50%" }}
//       animate={{ y: 0, opacity: 1, x: "-50%" }}
//       transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//       className="fixed bottom-6 md:bottom-10 left-1/2 z-[100] w-[92%] md:w-auto"
//     >
//       {/* 1. The Small Rectangular Menu Block */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 20, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.95 }}
//             transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//             className="absolute bottom-[calc(100%+16px)] right-0 w-full md:w-[380px] bg-[#050505]/95 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_20px_rgba(255,107,107,0.05)] rounded-3xl p-6 origin-bottom-right"
//           >
//             {/* Block Header */}
//             <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
//               <span className="text-[#FF6B6B] text-[10px] uppercase tracking-widest font-bold">
//                 System Navigation
//               </span>
//               <button
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="text-white/50 hover:text-white transition-colors bg-white/5 rounded-full p-1.5 border border-white/10"
//               >
//                 <X size={14} />
//               </button>
//             </div>

//             {/* 2-Column Grid for all 12 links */}
//             <div className="grid grid-cols-2 gap-y-4 gap-x-4">
//               {ALL_LINKS.map((item) => {
//                 const isActive = pathname === item.href;
//                 return (
//                   <Link
//                     key={item.label}
//                     href={item.href}
//                     onClick={() => setMobileMenuOpen(false)}
//                     className={`text-sm md:text-base font-bold font-display transition-colors flex items-center gap-2 ${
//                       isActive
//                         ? "text-[#FF6B6B]"
//                         : "text-white/80 hover:text-white"
//                     }`}
//                   >
//                     {isActive && (
//                       <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B]" />
//                     )}
//                     {item.label}
//                   </Link>
//                 );
//               })}
//             </div>

//             {/* Ecosystem Upsell Button inside the block */}
//             <Link
//               href="/ecosystem"
//               onClick={() => setMobileMenuOpen(false)}
//               className="mt-8 flex items-center justify-center w-full py-4 bg-white/5 hover:bg-[#FF6B6B] hover:text-black text-center text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl transition-all border border-white/10 shadow-lg"
//             >
//               Start a Project
//             </Link>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* 2. The Main Bottom Pill Navbar */}
//       <div className="bg-[#050505]/80 backdrop-blur-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.9),0_0_20px_rgba(255,107,107,0.05),inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-full px-6 md:px-10 py-4 flex items-center justify-between gap-6 md:gap-12 w-full">
//         {/* Logo */}
//         <Link href="/" className="group shrink-0">
//           <span className="text-sm md:text-base font-display font-bold tracking-tighter text-white group-hover:text-[#FF6B6B] transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
//             RSI
//           </span>
//         </Link>

//         {/* Primary Desktop Links */}
//         <div className="hidden md:flex items-center gap-8">
//           {PRIMARY_LINKS.map((item) => {
//             const isActive = pathname === item.href;
//             return (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors shrink-0"
//               >
//                 {item.label}
//                 {isActive && (
//                   <motion.div
//                     layoutId="navIndicator"
//                     className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#FF6B6B] shadow-[0_0_10px_rgba(255,107,107,0.8)]"
//                   />
//                 )}
//               </Link>
//             );
//           })}
//         </div>

//         {/* Call to Actions & Menu Trigger */}
//         <div className="flex items-center gap-6 shrink-0 border-l border-white/10 pl-6">
//           <Link
//             href="/ecosystem"
//             className="hidden md:block text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6B6B] hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(255,107,107,0.4)]"
//           >
//             Start Project
//           </Link>

//           {/* Universal Menu Button to open the rectangular block */}
//           <button
//             className={`text-[11px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 transition-colors ${
//               mobileMenuOpen
//                 ? "text-[#FF6B6B]"
//                 : "text-white hover:text-[#FF6B6B]"
//             }`}
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <div className="flex flex-col gap-[3px]">
//               <span className="w-4 h-[1px] bg-current block" />
//               <span className="w-4 h-[1px] bg-current block" />
//             </div>
//             Menu
//           </button>
//         </div>
//       </div>
//     </motion.nav>
//   );
// }

"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// 1. Primary links always visible on the bottom pill
const PRIMARY_LINKS = [
  { label: "Home", href: "/" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Pricing", href: "/pricing" },
];

// 2. Secondary pages that live ONLY inside the slide-out menu (covering all remaining routes)
const SECONDARY_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Industries", href: "/industries" },
  { label: "Team", href: "/team" },
  { label: "Blogs", href: "/blogs" },
  { label: "RS Int.", href: "/rs-international" },
  { label: "Partner", href: "/partner" },
  { label: "Contact CEO", href: "/contact-ceo" },
  { label: "Complaints", href: "/complains" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* --- THE RIGHT-SIDE DRAWER MENU (Secondary Links Only) --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay - Darkens the site slightly but doesn't block it out */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[105]"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-in Sidebar Panel (Opens on the right side) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] md:w-[400px] bg-[#050505]/95 backdrop-blur-3xl border-l border-white/10 shadow-[-30px_0_60px_rgba(0,0,0,0.8)] z-[110] flex flex-col p-8 md:p-12 overflow-y-auto"
            >
              {/* Sidebar Header */}
              <div className="flex justify-between items-center mb-12">
                <span className="text-white font-display font-bold text-xl tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  RSI STUDIO
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#FF6B6B] hover:bg-white/10 hover:border-[#FF6B6B]/30 transition-all"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Sidebar Links */}
              <div className="flex flex-col gap-5 flex-1">
                <span className="text-[#FF6B6B] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
                  Extended Navigation
                </span>
                {SECONDARY_LINKS.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 + 0.1, duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-2xl md:text-3xl font-display font-bold transition-all flex items-center gap-4 ${
                          isActive
                            ? "text-[#FF6B6B] translate-x-3"
                            : "text-white/70 hover:text-white hover:translate-x-3"
                        }`}
                      >
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#FF6B6B] shadow-[0_0_10px_#FF6B6B]" />
                        )}
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Sidebar Bottom CTA */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <Link
                  href="/ecosystem"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-5 bg-[#FF6B6B] text-black hover:bg-white hover:text-black transition-colors text-xs font-bold uppercase tracking-[0.2em] rounded-xl shadow-[0_0_30px_rgba(255,107,107,0.3)]"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- THE MAIN BOTTOM PILL NAVBAR --- */}
      <motion.nav
        initial={{ y: 100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-6 md:bottom-10 left-1/2 z-[100] w-[92%] md:w-auto"
      >
        <div className="bg-[#050505]/80 backdrop-blur-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.9),0_0_20px_rgba(255,107,107,0.05),inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-full px-6 md:px-10 py-4 flex items-center justify-between gap-6 md:gap-12 w-full">
          {/* Logo */}
          <Link href="/" className="group shrink-0">
            <span className="text-sm md:text-base font-display font-bold tracking-tighter text-white group-hover:text-[#FF6B6B] transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              RSI
            </span>
          </Link>

          {/* Primary Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {PRIMARY_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors shrink-0"
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#FF6B6B] shadow-[0_0_10px_rgba(255,107,107,0.8)]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Call to Actions & Menu Trigger */}
          <div className="flex items-center gap-6 shrink-0 border-l border-white/10 pl-6">
            <Link
              href="/ecosystem"
              className="hidden md:block text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6B6B] hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(255,107,107,0.4)]"
            >
              Start Project
            </Link>

            {/* Menu Button to trigger the Right Sidebar */}
            <button
              className={`text-[11px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 transition-colors ${
                mobileMenuOpen
                  ? "text-[#FF6B6B]"
                  : "text-white hover:text-[#FF6B6B]"
              }`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <div className="flex flex-col gap-[3px]">
                <span className="w-4 h-[1px] bg-current block" />
                <span className="w-4 h-[1px] bg-current block" />
              </div>
              Menu
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
}