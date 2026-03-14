"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Anchor, Plane, GraduationCap, Rocket, Stethoscope, ArrowUpRight } from "lucide-react";

const INDUSTRIES = [
  { 
    id: "01", 
    name: "Yacht", 
    color: "#E58A89", 
    icon: Anchor,
    tagline: "Simplifying Fleet Connectivity", 
    desc: "Advanced on-board digital experience and logistics routing for high-end maritime operations.", 
    duration: "12 Weeks", 
    platform: "Web & App",
    image: "/yacht.png"
  },
  { 
    id: "02", 
    name: "Aviation", 
    color: "#E6B885", 
    icon: Plane,
    tagline: "Elevating Charter Management", 
    desc: "Bespoke flight logistics and luxury charter booking systems designed for the skies.", 
    duration: "16 Weeks", 
    platform: "Dashboard",
    image: "/aviation.png"
  },
  { 
    id: "03", 
    name: "Education", 
    color: "#D1A545", 
    icon: GraduationCap,
    tagline: "Next-Gen Learning Portals", 
    desc: "Scalable e-learning ecosystems, student management systems, and interactive campuses.", 
    duration: "14 Weeks", 
    platform: "Portal",
    image: "/educational.png"
  },
  { 
    id: "04", 
    name: "Startups", 
    color: "#99CC8C", 
    icon: Rocket,
    tagline: "Accelerating Unicorn Trajectories", 
    desc: "Rapid MVP development and scalable architectures for next-generation startups.", 
    duration: "8 Weeks", 
    platform: "MVP & Mobile",
    image: "/startups.png"
  },
  { 
    id: "05", 
    name: "Healthcare", 
    color: "#6BC5CC", 
    icon: Stethoscope,
    tagline: "Modernizing Patient Care", 
    desc: "Secure patient portals, telemedicine integrations, and streamlined clinic management.", 
    duration: "10 Weeks", 
    platform: "Health App",
    image: "/healthcare.jpeg" 
  },
];

interface CardProps {
  industry: typeof INDUSTRIES[0];
  index: number;
  progress: any;
  targetScale: number;
}

const Card = ({ industry, index, progress, targetScale }: CardProps) => {
  const scale = useTransform(progress, [index * 0.2, 1], [1, targetScale]);
  const Icon = industry.icon;

  return (
    <div 
      className="h-screen w-full flex justify-center sticky top-0 px-4 md:px-0"
      style={{ paddingTop: `calc(4vh + ${index * 6}vh)` }}
    >
      <motion.div
        style={{ 
          backgroundColor: industry.color, 
          scale
        }}
        className="relative w-full max-w-[1100px] h-[75vh] sm:h-[65vh] lg:h-[55vh] min-h-[480px] rounded-[2rem] md:rounded-[3rem] p-5 sm:p-8 lg:p-10 flex flex-col lg:flex-row overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.3)] origin-top border border-white/10 will-change-transform"
      >
        <div className="relative z-10 flex flex-col justify-between w-full lg:w-[55%] pr-0 lg:pr-6 h-[55%] lg:h-full shrink-0">
          <div className="flex flex-col gap-3 md:gap-5">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-2 md:p-3 rounded-xl bg-black/20 border border-white/10 flex shrink-0">
                  <Icon className="text-white w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[8px] md:text-[10px] font-mono text-white/70 uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold leading-tight">
                    Sector {industry.id}
                  </span>
                  <h4 className="text-sm sm:text-base md:text-xl font-display font-bold text-white tracking-tight leading-tight">
                    {industry.name}
                  </h4>
                </div>
              </div>
              <div className="hidden sm:flex w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 items-center justify-center bg-white/5 shrink-0">
                <ArrowUpRight size={16} className="text-white md:w-[18px] md:h-[18px]" />
              </div>
            </div>

            <div className="max-w-xl mt-2 lg:mt-4">
              <h3 className="text-xl sm:text-2xl md:text-[2.1rem] lg:text-[2.4rem] font-display font-bold text-white leading-[1.1] mb-1 sm:mb-2 tracking-tighter line-clamp-2">
                {industry.tagline}
              </h3>
              <p className="text-white/85 text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
                {industry.desc}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-8 lg:gap-12 pt-3 sm:pt-4 border-t border-white/10 mt-auto">
            <div className="flex flex-col gap-0.5 sm:gap-1">
              <p className="text-white/60 text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Duration</p>
              <p className="text-white font-display font-bold text-sm sm:text-base md:text-lg tracking-tight">{industry.duration}</p>
            </div>
            <div className="flex flex-col gap-0.5 sm:gap-1">
              <p className="text-white/60 text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Platform</p>
              <p className="text-white font-display font-bold text-sm sm:text-base md:text-lg tracking-tight">{industry.platform}</p>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-[45%] h-[40%] lg:h-full mt-4 lg:mt-0 lg:absolute lg:right-0 lg:bottom-0 p-0 lg:p-4">
          <div className="w-full h-full rounded-2xl lg:rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/10 bg-black/20">
            <img 
              src={industry.image}
              alt={industry.name}
              className="w-full h-full object-cover object-center lg:object-top"
              loading={index === 0 ? "eager" : "lazy"} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 lg:from-black/30 to-transparent pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function IndustrySuccess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section 
      ref={sectionRef} 
      id="industries"
      className="relative w-full bg-[#050505] pb-12" 
    >
      <div className="relative w-full z-30 flex flex-col items-center justify-center pt-8 pb-4 pointer-events-none">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 w-max mb-[90px]"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] animate-pulse" />
          <span className="text-[9px] sm:text-[10px] font-mono text-white/70 uppercase tracking-[0.2em]">Industry Wins</span>
        </motion.div>
        
        <h2 className="text-[38px] sm:text-[50px] md:text-[3.675rem] leading-none font-display font-bold tracking-tighter text-white text-center uppercase drop-shadow-2xl px-4">
          INDUSTRY <br className="sm:hidden"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#ff8e8e] sm:ml-2">
            SUCCESS
          </span>
        </h2>
      </div>

      <div className="relative w-full z-20">
        {INDUSTRIES.map((industry, index) => {
          const targetScale = 1 - ((INDUSTRIES.length - index) * 0.038);
          
          return (
            <Card 
              key={industry.id} 
              index={index} 
              industry={industry} 
              progress={smoothProgress} 
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}