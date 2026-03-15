"use client";

import {
  Check,
  ArrowRight,
  X,
  Activity,
  Shield,
  Rocket,
  Server,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 100% SRS Compliant Pricing Tiers
const PRICING_TIERS = [
  {
    price: "$2,000",
    title: "Foundation",
    subtitle: "Essential architecture for emerging brands",
    features: [
      "Upto 12-page website",
      "Custom built theme(no templates)",
      "Brand philosphy alignment",
      "Minimal backend setup",
      "Pixel focused UI design",
      "Launch and deployment support",
      "6 months update support",
    ],
    highlight: false,
  },
  {
    price: "$5,000",
    title: "Advanced System",
    subtitle: "For SaaS & scale-ready startups",
    features: [
      "Everything in foundation,plus:",
      "Upto 18-page website",
      "24/7 priority support",
      "45 days free lead capture system",
      "Chatbot system integration",
      "Expanded UI system depth",
      "Optimized performance structure",
    ],
    highlight: true,
  },
  {
    price: "$10,000",
    title: "Complex Web App",
    subtitle: "Enterprise-grade digital dominance",
    features: [
      "Everything in Advanced System,plus:",
      "Upto 35-page website",
      "Complex animated backgrounds",
      "Advanced interaction systems",
      "60 days free lead capture system",
      "Chatbot system(Adbanced logic)",
      "Custom AI automation add-on",
      "Artitechture designed for scale",
    ],
    highlight: false,
  },
];

const BEAMS = Array.from({ length: 120 }).map((_, i) => ({
  id: i,
  angle: Math.random() * 360,
  distance: Math.random() * 100 + 20,
  length: Math.random() * 150 + 50,
  thickness: Math.random() * 2 + 1,
  delay: Math.random() * 0.4,
  duration: Math.random() * 0.5 + 0.4,
}));

const GLITTER = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 2,
  duration: Math.random() * 2 + 1,
}));

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do all your websites are custom coded?",
    answer:
      "Yes. Every website we deliver is custom coded made to meet niche specific requirements, a mixture of what client wants and what actually works!",
  },
  {
    question: "What does SER mean?",
    answer:
      "SER stands for Search Engine Recognition, a broader term including on page and off page SEO, Geo and Google business ranking — making sure search engines recognize your brand name. It comes free with most of our services.",
  },
  {
    question: "Do you deliver ready-to-use web applications?",
    answer:
      "Yes. Most of our websites are Web 2.0 or Web 3.0, capable of handling simple to complex web app features.",
  },
  {
    question:
      "What if we are genuinely interested but don't have the proper budget or want some sort of guarantee?",
    answer:
      "For such prospects we have a lock-in payment method in which you put 10% of the quoted price as a down-payment, then give us royalty on your sales every month until the rest 90% + 15% interest is achieved. This way you only pay when you get results.",
  },
  {
    question: "What's the earliest we can expect results?",
    answer:
      "We have the capability to deliver a simple website within 48 hours, with complex websites ranging from 5 to 15 days depending on complexity and size. The earlier you enroll, the earlier you start seeing results.",
  },
];

export default function PricingPage() {
  const router = useRouter();
  const [isWarping, setIsWarping] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEcosystemTransition = () => {
    setIsWarping(true);
    setTimeout(() => {
      router.push("/ecosystem");
    }, 1500);
  };

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* WARP OVERLAY */}
      <AnimatePresence>
        {isWarping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99999] bg-black flex items-center justify-center overflow-hidden pointer-events-none perspective-[1000px]"
          >
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 15, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeIn" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {BEAMS.map((beam) => (
                <motion.div
                  key={beam.id}
                  className="absolute origin-left bg-gradient-to-r from-transparent via-[#FF6B6B] to-white rounded-full shadow-[0_0_15px_#FF6B6B]"
                  style={{
                    width: `${beam.length}px`,
                    height: `${beam.thickness}px`,
                    transform: `rotate(${beam.angle}deg) translateX(${beam.distance}px)`,
                  }}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scaleX: [0, 3, 10],
                    x: [0, 1000],
                  }}
                  transition={{
                    duration: beam.duration,
                    delay: beam.delay,
                    ease: "easeIn",
                  }}
                />
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 100 }}
                transition={{ delay: 1, duration: 0.5, ease: "easeIn" }}
                className="w-10 h-10 bg-white rounded-full shadow-[0_0_100px_50px_rgba(255,255,255,1)]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="bg-[#050505] min-h-screen text-white pt-32 pb-32 relative overflow-hidden selection:bg-[#FF6B6B] selection:text-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FF6B6B]/10 blur-[150px] pointer-events-none" />

        <section className="max-w-7xl mx-auto px-6 relative z-10">

          {/* 1. Hero Section */}
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <h2 className="text-[#FF6B6B] text-xs font-mono uppercase tracking-[0.4em] mb-4">
              Investment
            </h2>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
              TRANSPARENT <span className="text-[#FF6B6B]">SYSTEMS</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed border border-white/10 bg-white/5 p-8 rounded-3xl backdrop-blur-md shadow-2xl">
              We onboard only{" "}
              <span className="text-white font-bold">6 clients a month</span>,
              no matter what. Our niches are specific, and we operate as
              strategic growth partners rather than just another studio.
            </p>
          </div>

          {/* 2. Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-32">
            {PRICING_TIERS.map((tier, i) => (
              <div
                key={i}
                className={`bg-[#0A0A0F] rounded-3xl p-10 border transition-all duration-300 flex flex-col ${
                  tier.highlight
                    ? "border-[#FF6B6B]/50 shadow-[0_0_50px_rgba(255,107,107,0.15)] md:scale-105 min-h-[600px] z-20"
                    : "border-white/5 hover:border-white/10 min-h-[500px] z-10"
                }`}
              >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  {tier.price}
                </h2>
                <p className="text-white/60 text-sm mb-6 min-h-[40px]">
                  {tier.subtitle}
                </p>
                <h3
                  className={`text-2xl font-display font-bold mb-8 ${tier.highlight ? "text-[#FF6B6B]" : "text-white"}`}
                >
                  {tier.title}
                </h3>
                <ul className="space-y-5 mb-10 flex-1">
                  {tier.features.map((feat, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 shrink-0 ${tier.highlight ? "text-[#FF6B6B]" : "text-white/40"}`}
                      />
                      <span className="text-white/80 text-sm leading-snug">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleEcosystemTransition}
                  className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all ${
                    tier.highlight
                      ? "bg-[#FF6B6B] text-black hover:bg-white hover:text-black shadow-[0_0_20px_rgba(255,107,107,0.4)]"
                      : "bg-white/10 text-white hover:bg-[#FF6B6B] hover:text-black"
                  }`}
                >
                  Initiate System <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* 3. Managed Web Presence Node Tree */}
          <div className="relative w-full max-w-6xl mx-auto mb-24 py-10 px-4">
            {mounted &&
              GLITTER.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute rounded-full bg-white shadow-[0_0_10px_#FF6B6B]"
                  style={{
                    top: particle.top,
                    left: particle.left,
                    width: particle.size,
                    height: particle.size,
                  }}
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                  transition={{
                    duration: particle.duration,
                    delay: particle.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

            <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-10 lg:gap-0 relative z-10">
              {/* Main Hub Node */}
              <div className="w-full lg:w-[30%] bg-[#0A0A0F] border border-[#FF6B6B]/40 shadow-[0_0_50px_rgba(255,107,107,0.15)] rounded-3xl p-8 flex flex-col justify-center text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <Sparkles className="absolute top-4 right-4 text-[#FF6B6B]/40 w-6 h-6" />
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-2 text-white relative z-10">
                  Managed Presence
                </h2>
                <p className="text-white/50 text-xs font-mono uppercase tracking-widest mb-6 relative z-10">
                  Ecosystem Add-on
                </p>
                <div className="inline-block mx-auto bg-black/50 border border-white/10 px-6 py-3 rounded-full relative z-10 shadow-inner">
                  <p className="text-[#FF6B6B] text-3xl font-bold">
                    $500{" "}
                    <span className="text-xs text-white/40 font-normal">
                      / Month
                    </span>
                  </p>
                </div>
              </div>

              {/* Animated SVG Wires */}
              <div className="hidden lg:block absolute left-[30%] right-[35%] top-0 bottom-0 z-0 pointer-events-none">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <path d="M 0 50 C 40 50, 60 15, 100 15" stroke="rgba(255,107,107,0.2)" strokeWidth="1" fill="none" />
                  <path d="M 0 50 C 40 50, 60 40, 100 40" stroke="rgba(255,107,107,0.2)" strokeWidth="1" fill="none" />
                  <path d="M 0 50 C 40 50, 60 65, 100 65" stroke="rgba(255,107,107,0.2)" strokeWidth="1" fill="none" />
                  <path d="M 0 50 C 40 50, 60 90, 100 90" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                  <motion.path d="M 0 50 C 40 50, 60 15, 100 15" stroke="#FF6B6B" strokeWidth="2" fill="none" filter="url(#glow)" strokeDasharray="10 30" animate={{ strokeDashoffset: [40, 0] }} transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }} />
                  <motion.path d="M 0 50 C 40 50, 60 40, 100 40" stroke="#FF6B6B" strokeWidth="2" fill="none" filter="url(#glow)" strokeDasharray="10 40" animate={{ strokeDashoffset: [50, 0] }} transition={{ repeat: Infinity, ease: "linear", duration: 2 }} />
                  <motion.path d="M 0 50 C 40 50, 60 65, 100 65" stroke="#FF6B6B" strokeWidth="2" fill="none" filter="url(#glow)" strokeDasharray="10 25" animate={{ strokeDashoffset: [35, 0] }} transition={{ repeat: Infinity, ease: "linear", duration: 1.2 }} />
                  <motion.path d="M 0 50 C 40 50, 60 90, 100 90" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" strokeDasharray="5 20" animate={{ strokeDashoffset: [25, 0] }} transition={{ repeat: Infinity, ease: "linear", duration: 3 }} />
                </svg>
              </div>

              {/* Mobile Connector */}
              <div className="lg:hidden w-[2px] h-16 bg-gradient-to-b from-[#FF6B6B] to-[#FF6B6B]/10 mx-auto" />

              {/* Sub-Nodes */}
              <div className="w-full lg:w-[35%] flex flex-col justify-between gap-4 z-10">
                <div className="bg-[#0A0A0F] border border-[#FF6B6B]/30 hover:border-[#FF6B6B] rounded-2xl p-5 shadow-[0_0_15px_rgba(255,107,107,0.1)] transition-colors relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF6B6B]" />
                  <h4 className="text-white text-[11px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Rocket size={14} className="text-[#FF6B6B]" /> Growth & Visibility
                  </h4>
                  <ul className="text-[10px] text-white/70 font-mono space-y-1 ml-6">
                    <li>• Monthly SEO Optimization</li>
                    <li>• Targeted GEO Targeting</li>
                    <li>• SER (Search Engine Recognition)</li>
                  </ul>
                </div>
                <div className="bg-[#0A0A0F] border border-[#FF6B6B]/30 hover:border-[#FF6B6B] rounded-2xl p-5 shadow-[0_0_15px_rgba(255,107,107,0.1)] transition-colors relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF6B6B]" />
                  <h4 className="text-white text-[11px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Activity size={14} className="text-[#FF6B6B]" /> Operations & Support
                  </h4>
                  <ul className="text-[10px] text-white/70 font-mono space-y-1 ml-6">
                    <li>• Ongoing Web Design Support</li>
                    <li>• Dedicated Launch Assistance</li>
                    <li>• Bi-Annual Major Updates</li>
                  </ul>
                </div>
                <div className="bg-[#0A0A0F] border border-[#FF6B6B]/30 hover:border-[#FF6B6B] rounded-2xl p-5 shadow-[0_0_15px_rgba(255,107,107,0.1)] transition-colors relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF6B6B]" />
                  <h4 className="text-white text-[11px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Shield size={14} className="text-[#FF6B6B]" /> Core Infrastructure
                  </h4>
                  <ul className="text-[10px] text-white/70 font-mono space-y-1 ml-6">
                    <li>• 24/7 Web Security Maintenance</li>
                    <li>• Uptime Monitoring protocols</li>
                  </ul>
                </div>
                <div className="bg-[#111] border border-white/10 rounded-2xl p-5 opacity-80 mt-2">
                  <h4 className="text-white/50 text-[11px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Server size={14} className="text-white/30" /> Paid Separately
                  </h4>
                  <ul className="text-[10px] text-white/40 font-mono space-y-1 ml-6 flex gap-4">
                    <li>• Hosting</li>
                    <li>• Backend Services</li>
                    <li>• Blogging</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Accelerate to Ecosystem Button */}
          <div className="flex justify-center mb-32">
            <button
              onClick={handleEcosystemTransition}
              className="bg-[#111111] border border-white/10 text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-[#FF6B6B] hover:text-black transition-colors shadow-2xl relative z-20"
            >
              <span className="w-5 h-5 bg-[#FF6B6B] rounded-full flex items-center justify-center text-black text-xs">
                R
              </span>
              Accelerate to Ecosystem
            </button>
          </div>

          {/* 5. RSI vs Traditional Agencies (moved here) */}
          <div className="mb-32 max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-display font-bold text-center mb-10">
              The <span className="text-[#FF6B6B]">RSI</span> Difference
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0A0A0F] border border-white/5 rounded-3xl p-8 opacity-70">
                <h4 className="text-white/50 text-xl font-bold mb-6 flex items-center gap-3">
                  <X className="text-red-500" /> Traditional Agencies
                </h4>
                <ul className="space-y-4">
                  <li className="text-white/40 text-sm flex items-start gap-2">
                    - Bloated WordPress templates
                  </li>
                  <li className="text-white/40 text-sm flex items-start gap-2">
                    - Volume-based (Taking 50+ clients)
                  </li>
                  <li className="text-white/40 text-sm flex items-start gap-2">
                    - Disconnected freelancers
                  </li>
                  <li className="text-white/40 text-sm flex items-start gap-2">
                    - Hidden fees & slow communication
                  </li>
                </ul>
              </div>
              <div className="bg-[#111] border border-[#FF6B6B]/40 shadow-[0_0_30px_rgba(255,107,107,0.1)] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B6B]/10 blur-3xl rounded-full" />
                <h4 className="text-white text-xl font-bold mb-6 flex items-center gap-3">
                  <Check className="text-[#FF6B6B]" /> RSI Studio
                </h4>
                <ul className="space-y-4 relative z-10">
                  <li className="text-white/80 text-sm flex items-start gap-2">
                    <span className="text-[#FF6B6B]">•</span> Custom React/Next.js Architecture
                  </li>
                  <li className="text-white/80 text-sm flex items-start gap-2">
                    <span className="text-[#FF6B6B]">•</span> Strict 6-Client limit for premium focus
                  </li>
                  <li className="text-white/80 text-sm flex items-start gap-2">
                    <span className="text-[#FF6B6B]">•</span> Highly-trained, cohesive in-house team
                  </li>
                  <li className="text-white/80 text-sm flex items-start gap-2">
                    <span className="text-[#FF6B6B]">•</span> Transparent ecosystem & direct CEO access
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 6. FAQ Section (after RSI Difference) */}
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <span className="px-5 py-2 rounded-full border border-[#FF6B6B] text-[#FF6B6B] text-sm tracking-wide">
                Frequently Asked Questions
              </span>
            </div>

            {/* Headings */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display">
                Your Questions
              </h2>
              <p className="text-4xl md:text-5xl font-serif italic mt-2 text-white/70">
                Answered!
              </p>
            </div>

            {/* FAQ Items */}
            <div className="border-t border-zinc-800">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div key={index} className="border-b border-zinc-800 py-6">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <span className="text-lg md:text-xl font-medium text-white">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-[#FF6B6B]" />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <p className="text-[#A1A1AA] mt-4 leading-relaxed pr-6">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </section>
      </main>
    </>
  );
}