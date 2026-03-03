"use client";

import { motion } from "framer-motion";

interface Location {
  country: string;
  address: string;
}

const locations: Location[] = [
  { country: "Canada", address: "Toronto, Ontario" },
  { country: "Pakistan", address: "Sargodha, Punjab" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white overflow-hidden pt-32">

      {/* ===== Earth Background ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black" />

      {/* ===== Subtle Noise Overlay ===== */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ===== Global Presence ===== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Our Global Presence
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Delivering premium digital solutions across continents.
          </p>
        </div>

        {/* ===== Locations ===== */}
<div className="grid md:grid-cols-2 gap-6 mb-24 relative">
  {locations.map((loc, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-[#111]/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-red-500/40 transition relative overflow-hidden"
    >
      <h3 className="text-lg font-semibold mb-2">{loc.country}</h3>
      <p className="text-gray-400 text-sm">{loc.address}</p>
     </motion.div>
       ))}
        </div>

        {/* ===== Links Section ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 pt-16 mb-24">
          {[
            {
              title: "Important Links",
              items: ["Home", "About Us", "Portfolio", "Contact"],
            },
            {
              title: "Services",
              items: [
                "Web Development",
                "UI/UX Design",
                "Mobile Apps",
                "SEO & Marketing",
              ],
            },
            {
              title: "Industries",
              items: ["FinTech", "Healthcare", "E-Commerce", "Real Estate"],
            },
            {
              title: "Company",
              items: ["Careers", "Blog", "Privacy Policy", "Terms & Conditions"],
            },
          ].map((section, i) => (
            <div key={i}>
              <h4 className="font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="hover:text-red-400 transition cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ===== Partners Row ===== */}
        <div className="flex flex-wrap justify-center gap-16 text-center mb-24">
          {[
            { name: "Framer", sub: "Professional Partner" },
            { name: "Webflow", sub: "Professional Partner" },
            { name: "Behance", sub: "Top Team On Behance" },
            { name: "Dribbble", sub: "Top Team On Dribbble" },
            { name: "Clutch", sub: "Reviewed On ★★★★★" },
            { name: "Google", sub: "Reviewed On ★★★★★" },
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <div className="text-2xl font-semibold">{item.name}</div>
              <p className="text-gray-400 text-sm">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* ===== Legal Section ===== */}
        <div className="text-center mb-24">
          <div className="flex justify-center gap-12 text-[11px] tracking-[0.25em] uppercase text-white/60">
            <a href="#" className="hover:text-white transition duration-300">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              Privacy Policy
            </a>
          </div>
          <p className="mt-8 text-xs text-white/40 tracking-wide">
            © 2026, RSI Studio, All Rights Reserved.
          </p>
        </div>

      </div>

      {/* ===== Massive RSI Studio Branding ===== */}
<div className="relative h-[180px] md:h-[220px] lg:h-[260px] overflow-hidden flex justify-center items-end">

  {/* Red Glow Behind Text */}
  <div className="absolute bottom-0 w-[80%] h-32 blur-3xl bg-red-600/40 rounded-full pointer-events-none" />

  {/* RSI Studio Text */}
  <h1
    className="
       relative
      font-black
      uppercase
      tracking-tight
      text-white
      select-none
      text-[clamp(4rem,12vw,10rem)]
    "
  >
    RSI Studio
  </h1>
       </div>
</footer>
  );
}