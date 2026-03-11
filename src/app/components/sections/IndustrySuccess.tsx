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
        platform: "Web & Tablet App",
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
        platform: "SaaS Dashboard",
        image: "/aviation.png"
    },
    { 
        id: "03", 
        name: "Educational Institutes", 
        color: "#D1A545", 
        icon: GraduationCap,
        tagline: "Next-Gen Learning Portals", 
        desc: "Scalable e-learning ecosystems, student management systems, and interactive digital campuses.", 
        duration: "14 Weeks", 
        platform: "Web Platform & Portal",
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
        platform: "MVP & Mobile App",
        image: "/startups.png"
    },
    { 
        id: "05", 
        name: "Healthcare & Clinics", 
        color: "#6BC5CC", 
        icon: Stethoscope,
        tagline: "Modernizing Patient Care", 
        desc: "Secure patient portals, telemedicine integrations, and streamlined clinic management dashboards.", 
        duration: "10 Weeks", 
        platform: "Health Dashboard",
        image: "/healthcare.jpeg" 
    },
];

interface CardProps {
    industry: typeof INDUSTRIES[0];
    index: number;
    progress: any;
    targetScale: number;
    cardBaseVh: any;
}

const Card = ({ industry, index, progress, targetScale, cardBaseVh }: CardProps) => {
    const stickyTop = useTransform(cardBaseVh, (val) => `calc(${val}vh + ${index * 40}px)`); 
    const scale = useTransform(progress, [index * 0.2, 1], [1, targetScale]);
    const Icon = industry.icon;

    return (
        <div className="h-screen flex items-start justify-center sticky top-0 px-4 md:px-0">
            <motion.div
                style={{ 
                    backgroundColor: industry.color, 
                    scale,
                    top: stickyTop
                }}
                className="absolute w-[95%] md:w-[90%] max-w-[1100px] h-[55vh] min-h-[420px] max-h-[500px] rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 flex flex-col lg:flex-row overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.3)] origin-top border border-white/10 will-change-transform"
            >
                <div className="relative z-10 flex flex-col justify-between w-full lg:w-[55%] pr-0 lg:pr-6 h-full">
                    <div className="flex flex-col gap-3 md:gap-5">
                        
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 md:p-3 rounded-xl bg-black/20 border border-white/10 flex shrink-0">
                                    <Icon className="text-white w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-[9px] md:text-[10px] font-mono text-white/70 uppercase tracking-[0.3em] font-bold leading-tight">
                                        Sector {industry.id}
                                    </span>
                                    <h4 className="text-base md:text-xl font-display font-bold text-white tracking-tight leading-tight">
                                        {industry.name}
                                    </h4>
                                </div>
                            </div>
                            <div className="hidden sm:flex w-10 h-10 rounded-full border border-white/20 items-center justify-center bg-white/5 shrink-0">
                                <ArrowUpRight size={18} className="text-white" />
                            </div>
                        </div>

                        <div className="max-w-xl mt-2 md:mt-4">
                            <h3 className="text-2xl md:text-[2.1rem] lg:text-[2.4rem] font-display font-bold text-white leading-[1.1] mb-2 tracking-tighter">
                                {industry.tagline}
                            </h3>
                            <p className="text-white/85 text-sm md:text-base leading-relaxed line-clamp-3">
                                {industry.desc}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-8 md:gap-12 pt-4 border-t border-white/10 mt-auto">
                        <div className="flex flex-col gap-1">
                            <p className="text-white/60 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Duration</p>
                            <p className="text-white font-display font-bold text-base md:text-lg tracking-tight">{industry.duration}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-white/60 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Platform</p>
                            <p className="text-white font-display font-bold text-base md:text-lg tracking-tight">{industry.platform}</p>
                        </div>
                    </div>
                </div>

                <div className="absolute lg:relative right-0 bottom-0 lg:bottom-auto w-1/2 lg:w-[45%] h-1/2 lg:h-full hidden md:block p-4 lg:p-0">
                    <div className="w-full h-full rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/10 bg-black/20">
                        <img 
                            src={industry.image}
                            alt={industry.name}
                            className="w-full h-full object-cover object-top"
                            loading={index === 0 ? "eager" : "lazy"} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
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

    const headerOpacity = useTransform(smoothProgress, [0, 0.06], [1, 0]);
    const cardBaseVh = useTransform(smoothProgress, [0, 0.06], [32, 12]);

    return (
        <section 
            ref={sectionRef} 
            id="industries"
            className="relative w-full bg-[#050505]"
            style={{ height: `${INDUSTRIES.length * 100}vh` }}
        >
            <motion.div 
                style={{ opacity: headerOpacity }}
                className="sticky top-0 w-full h-[30vh] z-30 flex flex-col items-center justify-center bg-gradient-to-b from-[#050505] via-[#050505]/95 to-transparent pointer-events-none"
            >
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-1.5 w-max mb-3"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] animate-pulse" />
                    <span className="text-[10px] font-mono text-white/70 uppercase tracking-[0.2em]">Industry Wins</span>
                </motion.div>
                
                <h2 className="text-5xl md:text-[3.5rem] leading-none font-display font-bold tracking-tighter text-white text-center uppercase drop-shadow-2xl">
                    INDUSTRY <br className="md:hidden"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#ff8e8e] md:ml-2">
                        SUCCESS
                    </span>
                </h2>
            </motion.div>

            <div className="relative w-full z-70 mt-[-30vh]">
                {INDUSTRIES.map((industry, index) => {
                    const targetScale = 1 - ((INDUSTRIES.length - index) * 0.038);
                    
                    return (
                        <Card 
                            key={industry.id} 
                            index={index} 
                            industry={industry} 
                            progress={smoothProgress} 
                            targetScale={targetScale}
                            cardBaseVh={cardBaseVh}
                        />
                    );
                })}
            </div>
        </section>
    );
}