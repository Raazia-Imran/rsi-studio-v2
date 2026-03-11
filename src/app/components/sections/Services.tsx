"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Layout, Code2, PenTool, Activity, Bot, Server, Workflow, Sparkles } from "lucide-react";

export default function Services() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-[#050505] py-24 flex flex-col items-center justify-center overflow-hidden font-sans transform-gpu" id="services">
      
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center z-40 w-full px-4 pointer-events-none">
        <h2 className="text-[#FF6B6B] text-[16px] md:text-[20px] font-bold tracking-[0.2em] uppercase mb-2">System Capabilities</h2>
        <h2 className="text-white text-2xl md:text-3xl font-display font-medium tracking-wide">Our Services</h2>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-[#FF6B6B]/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none z-0 will-change-transform" />

      <div className="w-full mt-24 md:mt-10 flex justify-start lg:justify-center overflow-x-auto overflow-y-hidden px-6 lg:px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory pb-10 lg:pb-0">
        <div className="relative flex lg:block items-center gap-6 min-w-max lg:min-w-[1200px] lg:h-[1000px] z-10 transform-gpu">
          
          <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0">
            <g stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none">
              <path d="M 600 500 C 600 340, 200 340, 200 180" />
              <path d="M 600 500 L 600 180" />
              <path d="M 600 500 C 600 340, 1000 340, 1000 180" />
              <path d="M 600 500 C 600 660, 200 660, 200 820" />
              <path d="M 600 500 L 600 820" />
              <path d="M 600 500 C 600 660, 1000 660, 1000 820" />
            </g>

            <g fill="none">
              {[
                { p: "M 600 500 C 600 340, 200 340, 200 180", d: 0 },
                { p: "M 600 500 L 600 180", d: 1.5 },
                { p: "M 600 500 C 600 340, 1000 340, 1000 180", d: 0.5 },
                { p: "M 600 500 C 600 660, 200 660, 200 820", d: 2 },
                { p: "M 600 500 L 600 820", d: 0.8 },
                { p: "M 600 500 C 600 660, 1000 660, 1000 820", d: 1.2 }
              ].map((l, i) => (
                <motion.path 
                  key={`dot-${i}`} 
                  d={l.p} 
                  stroke="#FF6B6B" 
                  strokeWidth="6"
                  strokeLinecap="round"
                  style={{ filter: "drop-shadow(0px 0px 4px #FF6B6B)" }}
                  initial={{ pathLength: 0.001, pathOffset: 0, opacity: 0 }} 
                  animate={{ pathLength: 0.001, pathOffset: 1, opacity: [0, 1, 0] }} 
                  transition={{ duration: 2.5, delay: l.d, repeat: Infinity, ease: "linear" }} 
                />
              ))}
            </g>
          </svg>

          <div className="hidden lg:flex absolute top-[450px] left-[550px] w-[100px] h-[100px] z-30 items-center justify-center transform-gpu">
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-[-30px] rounded-full border border-[#FF6B6B]/20 will-change-transform" />
            <div className="absolute -inset-2 rounded-full border border-[#FF6B6B]/40 animate-[spin_10s_linear_infinite]" style={{ borderTopColor: 'transparent' }} />
            <div className="relative w-[70px] h-[70px] rounded-full bg-[#0A0A0A] shadow-[0_0_40px_rgba(255,107,107,0.4)] flex items-center justify-center border border-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/20 to-transparent" />
              <div className="text-white font-display font-bold text-sm tracking-widest relative z-10">RSI</div>
            </div>
          </div>

          <div className="relative lg:absolute shrink-0 snap-center w-[85vw] sm:w-[320px] lg:w-[320px] h-[320px] lg:top-[30px] lg:left-[40px] rounded-2xl bg-[#0D0D12] border border-white/10 p-5 flex flex-col shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-20 group hover:border-[#FF6B6B]/40 transition-colors duration-500 transform-gpu">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#FF6B6B]/10 flex items-center justify-center border border-[#FF6B6B]/20"><Layout size={16} className="text-[#FF6B6B]" /></div>
              <h3 className="text-[14px] font-bold text-white uppercase tracking-wider">Web Design</h3>
            </div>
            
            <div className="w-full flex-1 bg-[#050505] rounded-xl border border-white/10 overflow-hidden mb-3 relative flex items-center justify-center perspective-[1000px]">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:12px_12px]" />
              
              <motion.div animate={{ rotateX: [20, 5, 20], rotateY: [-20, -5, -20] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative w-40 h-24 bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl flex flex-col p-2 z-10 will-change-transform">
                <div className="w-full flex justify-between items-center mb-2">
                  <div className="text-[7px] text-white/80 font-bold">Hero_Section.fig</div>
                  <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-[#FF6B6B]" /><div className="w-2 h-2 rounded-full bg-purple-500" /></div>
                </div>
                <div className="flex-1 w-full bg-gradient-to-r from-white/10 to-transparent rounded flex items-center justify-center relative overflow-hidden">
                  <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-4 bg-white/20 skew-x-12 will-change-transform" />
                  <span className="text-[10px] font-bold text-white/90">Design System</span>
                </div>
              </motion.div>
              
              <motion.div animate={{ rotateZ: [0, 360], scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute w-24 h-24 bg-gradient-to-tr from-[#FF6B6B] to-purple-600 rounded-full blur-[20px] opacity-40 z-0 will-change-transform" />
              
              <motion.div animate={{ x: [0, 40, 0], y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 left-1/4 z-20 will-change-transform">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-lg"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="M13 13l6 6"/></svg>
                <div className="bg-[#FF6B6B] text-white text-[6px] px-1.5 py-0.5 rounded-full absolute top-4 left-4 whitespace-nowrap shadow-lg">RSI Editor</div>
              </motion.div>
            </div>
            <p className="text-[10px] text-white/50 font-medium leading-relaxed mb-3">Immersive 3D interfaces and pixel-perfect design systems built with interactive glassmorphism.</p>
            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
              <span className="text-[9px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-white/70">Figma</span>
              <span className="text-[9px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-white/70">TailwindCSS</span>
              <span className="text-[9px] font-mono px-2 py-0.5 bg-[#FF6B6B]/10 border border-[#FF6B6B]/20 rounded-full text-[#FF6B6B]">Framer Motion</span>
            </div>
          </div>

          <div className="relative lg:absolute shrink-0 snap-center w-[85vw] sm:w-[320px] lg:w-[320px] h-[320px] lg:top-[30px] lg:left-[440px] rounded-2xl bg-[#0D0D12] border border-white/10 p-5 flex flex-col shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-20 group hover:border-[#FF6B6B]/40 transition-colors duration-500 transform-gpu">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#FF6B6B]/10 flex items-center justify-center border border-[#FF6B6B]/20"><Code2 size={16} className="text-[#FF6B6B]" /></div>
              <h3 className="text-[14px] font-bold text-white uppercase tracking-wider">Web Development</h3>
            </div>
            
            <div className="w-full flex-1 bg-[#050505] rounded-xl border border-white/10 overflow-hidden mb-3 flex flex-col shadow-inner relative">
              <div className="w-full h-6 bg-[#111] border-b border-white/5 flex items-center px-3 gap-1.5 shrink-0 z-10">
                <div className="w-2 h-2 rounded-full bg-red-500/80" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <div className="w-2 h-2 rounded-full bg-green-500/80" />
                <span className="ml-2 text-[8px] font-mono text-white/40">page.tsx - React</span>
              </div>
              <div className="flex-1 p-3 font-mono text-[9px] leading-relaxed text-blue-300 relative">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} className="will-change-transform">
                  <p><span className="text-purple-400">export default function</span> <span className="text-yellow-300">App</span>() {'{'}</p>
                  <p className="pl-4"><span className="text-purple-400">return</span> (</p>
                  <p className="pl-8 text-white">&lt;<span className="text-[#FF6B6B]">main</span> className=<span className="text-green-400">"fast"</span>&gt;</p>
                  <motion.p animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="pl-12 text-white">|</motion.p>
                  <p className="pl-8 text-white">&lt;/<span className="text-[#FF6B6B]">main</span>&gt;</p>
                  <p className="pl-4">);</p>
                  <p>{'}'}</p>
                </motion.div>
                
                <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-3 right-3 bg-black/80 backdrop-blur border border-green-500/30 rounded p-1.5 flex items-center gap-2 shadow-[0_0_10px_rgba(34,197,94,0.1)] will-change-transform">
                  <Activity size={10} className="text-green-400" />
                  <div className="flex flex-col">
                    <span className="text-[6px] text-white/50 uppercase">Vercel Status</span>
                    <span className="text-[8px] text-green-400 font-bold">Deployed ✓</span>
                  </div>
                </motion.div>
              </div>
            </div>
            <p className="text-[10px] text-white/50 font-medium leading-relaxed mb-3">Blazing fast applications engineered for maximum performance and scalable architectures.</p>
            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
              <span className="text-[9px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-white/70">Next.js 14</span>
              <span className="text-[9px] font-mono px-2 py-0.5 bg-[#3178c6]/10 border border-[#3178c6]/30 rounded-full text-[#3178c6]">TypeScript</span>
              <span className="text-[9px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-white/70">Prisma</span>
            </div>
          </div>

          <div className="relative lg:absolute shrink-0 snap-center w-[85vw] sm:w-[320px] lg:w-[320px] h-[320px] lg:top-[30px] lg:left-[840px] rounded-2xl bg-[#0D0D12] border border-white/10 p-5 flex flex-col shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-20 group hover:border-[#FF6B6B]/40 transition-colors duration-500 transform-gpu">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#FF6B6B]/10 flex items-center justify-center border border-[#FF6B6B]/20"><Server size={16} className="text-[#FF6B6B]" /></div>
              <h3 className="text-[14px] font-bold text-white uppercase tracking-wider">Custom Software</h3>
            </div>
            
            <div className="w-full flex-1 bg-[#050505] rounded-xl border border-white/10 overflow-hidden mb-3 relative p-3 flex flex-col gap-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] font-mono text-white/60 bg-white/5 px-2 py-1 rounded border border-white/10">AWS Cluster</span>
                <span className="text-[8px] font-bold text-green-400 flex items-center gap-1"><div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"/> HEALTHY</span>
              </div>
              
              <div className="flex gap-2 h-full items-end justify-center pb-2 relative">
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                  <motion.path d="M40,50 Q80,20 120,50 T200,50" fill="none" stroke="rgba(255,107,107,0.3)" strokeWidth="2" strokeDasharray="5,5" />
                  <motion.circle cx="40" cy="50" r="3" fill="#FF6B6B" animate={{ cx: [40, 120, 200], cy: [50, 50, 50] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="will-change-transform" />
                </svg>

                {[
                  { name: "DB-01", load: "42%", height: "h-16" },
                  { name: "API-Gateway", load: "89%", height: "h-24", highlight: true },
                  { name: "Worker", load: "12%", height: "h-12" }
                ].map((server, i) => (
                  <div key={i} className={`w-16 ${server.height} bg-[#111] border ${server.highlight ? 'border-[#FF6B6B]' : 'border-white/20'} rounded-t-lg relative z-10 flex flex-col justify-end p-1`}>
                    {server.highlight && <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF6B6B] rounded-full animate-ping" />}
                    <div className="w-full text-center text-[6px] text-white/50 mb-1">{server.name}</div>
                    <div className="w-full h-1 bg-white/10 rounded-full mb-1"><motion.div animate={{width: [server.load, "30%", server.load]}} transition={{duration: 3, repeat: Infinity}} className="h-full bg-blue-400 rounded-full will-change-transform" /></div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[10px] text-white/50 font-medium leading-relaxed mb-3">Enterprise-grade scalable microservices and robust SaaS platforms built with military-grade security.</p>
            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
              <span className="text-[9px] font-mono px-2 py-0.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400">AWS</span>
              <span className="text-[9px] font-mono px-2 py-0.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400">Docker</span>
              <span className="text-[9px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-white/70">PostgreSQL</span>
            </div>
          </div>

          <div className="relative lg:absolute shrink-0 snap-center w-[85vw] sm:w-[320px] lg:w-[320px] h-[320px] lg:top-[670px] lg:left-[40px] rounded-2xl bg-[#0D0D12] border border-white/10 p-5 flex flex-col shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-20 group hover:border-[#FF6B6B]/40 transition-colors duration-500 transform-gpu">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#FF6B6B]/10 flex items-center justify-center border border-[#FF6B6B]/20"><PenTool size={16} className="text-[#FF6B6B]" /></div>
              <h3 className="text-[14px] font-bold text-white uppercase tracking-wider">Blogging & SEO</h3>
            </div>
            
            <div className="w-full flex-1 bg-[#0A0A0A] rounded-xl border border-white/10 overflow-hidden mb-3 flex flex-col">
              <div className="w-full h-8 border-b border-white/10 flex items-center px-3 justify-between bg-white/5">
                <div className="flex items-center gap-2"><Sparkles size={10} className="text-purple-400" /><span className="text-[9px] text-white/80 font-bold">AI Ghost Editor</span></div>
                <div className="bg-white text-black text-[7px] font-bold px-2 py-1 rounded">Publish</div>
              </div>
              <div className="p-4 flex flex-col gap-2.5">
                <h4 className="text-white text-[12px] font-bold tracking-tight">The Future of Next.js 15</h4>
                <div className="w-full h-1.5 bg-white/20 rounded-full" />
                <div className="w-[90%] h-1.5 bg-white/20 rounded-full" />
                
                <div className="mt-2 bg-purple-500/10 border border-purple-500/30 rounded p-2 relative overflow-hidden">
                  <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="absolute inset-y-0 w-10 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent will-change-transform" />
                  <span className="text-[7px] text-purple-400 font-mono mb-1 flex items-center gap-1"><Sparkles size={8}/> Generating SEO optimized content...</span>
                  <div className="w-[70%] h-1.5 bg-purple-400/50 rounded-full mb-1" />
                  <div className="w-[40%] h-1.5 bg-purple-400/50 rounded-full" />
                </div>
              </div>
            </div>
            <p className="text-[10px] text-white/50 font-medium leading-relaxed mb-3">High-ranking technical content architecture driven by data and modern Headless CMS solutions.</p>
            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
              <span className="text-[9px] font-mono px-2 py-0.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-400">SEO Core</span>
              <span className="text-[9px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-white/70">MDX</span>
              <span className="text-[9px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-white/70">Ghost CMS</span>
            </div>
          </div>

          <div className="relative lg:absolute shrink-0 snap-center w-[85vw] sm:w-[320px] lg:w-[320px] h-[320px] lg:top-[670px] lg:left-[440px] rounded-2xl bg-[#0D0D12] border border-white/10 p-5 flex flex-col shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-20 group hover:border-[#FF6B6B]/40 transition-colors duration-500 transform-gpu">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#FF6B6B]/10 flex items-center justify-center border border-[#FF6B6B]/20"><Activity size={16} className="text-[#FF6B6B]" /></div>
              <h3 className="text-[14px] font-bold text-white uppercase tracking-wider">Monthly Presence</h3>
            </div>
            
            <div className="w-full flex-1 bg-[#050505] rounded-xl border border-white/10 overflow-hidden mb-3 p-4 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-[8px] text-gray-500 uppercase tracking-widest mb-1">Total Impressions</div>
                  <div className="text-xl text-white font-bold tracking-tight">2.4M</div>
                </div>
                <div className="bg-green-500/20 border border-green-500/30 text-green-400 text-[8px] font-bold px-2 py-1 rounded-full">
                  +34.5% ↗
                </div>
              </div>
              
              <div className="flex-1 w-full relative mt-2">
                <div className="absolute inset-0 flex flex-col justify-between opacity-20">
                  <div className="w-full border-t border-white/20" /><div className="w-full border-t border-white/20" /><div className="w-full border-t border-white/20" />
                </div>
                <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible z-10 relative" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path 
                    d="M0,35 Q15,30 25,25 T50,15 T75,20 T100,5" 
                    fill="none" stroke="#FF6B6B" strokeWidth="2"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="will-change-transform"
                  />
                  <path d="M0,35 Q15,30 25,25 T50,15 T75,20 T100,5 L100,40 L0,40 Z" fill="url(#chartGrad)" />
                  <motion.circle cx="100" cy="5" r="3" fill="#fff" className="drop-shadow-[0_0_8px_#FF6B6B] will-change-transform" />
                </svg>
              </div>
            </div>
            <p className="text-[10px] text-white/50 font-medium leading-relaxed mb-3">Continuous footprint management. We track live analytics and maintain rigorous digital brand growth.</p>
            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
              <span className="text-[9px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-white/70">Google Analytics</span>
              <span className="text-[9px] font-mono px-2 py-0.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400">Meta Graph</span>
            </div>
          </div>

          <div className="relative lg:absolute shrink-0 snap-center w-[85vw] sm:w-[320px] lg:w-[320px] h-[320px] lg:top-[670px] lg:left-[840px] rounded-2xl bg-[#0D0D12] border border-white/10 p-5 flex flex-col shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-20 group hover:border-[#FF6B6B]/40 transition-colors duration-500 transform-gpu">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#FF6B6B]/10 flex items-center justify-center border border-[#FF6B6B]/20"><Workflow size={16} className="text-[#FF6B6B]" /></div>
              <h3 className="text-[14px] font-bold text-white uppercase tracking-wider">Web Automations</h3>
            </div>
            
            <div className="w-full flex-1 bg-[#050505] rounded-xl border border-white/10 overflow-hidden mb-3 flex flex-col">
              <div className="h-[55%] border-b border-white/10 bg-[#0A0A0A] relative flex items-center justify-center p-2">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:10px_10px]" />
                <div className="flex items-center w-full justify-between z-10 px-2">
                  <div className="w-10 h-10 rounded-lg bg-[#111] border border-purple-500/50 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    <Activity size={12} className="text-purple-400 mb-1" /><span className="text-[5px] text-white font-mono">Webhook</span>
                  </div>
                  <div className="flex-1 h-[1px] bg-white/20 relative mx-1">
                    <motion.div animate={{ x: ["0%", "100%"] }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} className="absolute -top-0.5 w-2 h-1.5 bg-white rounded-full shadow-[0_0_5px_white] will-change-transform" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#111] to-black border-2 border-[#FF6B6B] flex flex-col items-center justify-center shadow-[0_0_20px_rgba(255,107,107,0.3)]">
                    <Bot size={16} className="text-[#FF6B6B] mb-1" /><span className="text-[6px] text-white font-bold font-mono">Scrape</span>
                  </div>
                  <div className="flex-1 h-[1px] bg-white/20 relative mx-1">
                    <motion.div animate={{ x: ["0%", "100%"] }} transition={{ duration: 0.8, delay: 0.4, repeat: Infinity, ease: "linear" }} className="absolute -top-0.5 w-2 h-1.5 bg-blue-400 rounded-full shadow-[0_0_5px_#60A5FA] will-change-transform" />
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#111] border border-blue-500/50 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    <div className="w-4 h-1 border border-blue-400 rounded-sm mb-0.5" /><div className="w-4 h-1 border border-blue-400 rounded-sm mb-1" />
                    <span className="text-[5px] text-white font-mono">DB Sync</span>
                  </div>
                </div>
              </div>
              <div className="h-[45%] bg-black p-3 font-mono text-[7.5px] leading-relaxed text-gray-400 overflow-hidden relative">
                <motion.div animate={{ y: [0, -20] }} transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="will-change-transform">
                  <p><span className="text-yellow-400">⚡ [CRON]</span> Trigger fired.</p>
                  <p><span className="text-blue-400">↻ [BOT]</span> Navigating to targets...</p>
                  <p><span className="text-purple-400">✓ [EXTRACT]</span> 500 JSON nodes parsed.</p>
                  <p><span className="text-green-400">✓ [POSTGRES]</span> Data committed safely.</p>
                  <p className="text-white animate-pulse">_</p>
                </motion.div>
              </div>
            </div>
            <p className="text-[10px] text-white/50 font-medium leading-relaxed mb-3">Intelligent web scraping and API workflows. Replace manual tasks with smart autonomous bots.</p>
            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
              <span className="text-[9px] font-mono px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400">Python</span>
              <span className="text-[9px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-white/70">Puppeteer</span>
              <span className="text-[9px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-white/70">REST APIs</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}