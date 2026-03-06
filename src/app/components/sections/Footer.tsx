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
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
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
              title: "Quick Links",
              items: ["Home", "Services", "Industries", "Work","Pricing","Ecosystem"],
            },
            {
              title: "Services",
              items: [
                "Web Design",
                "Web DEvelopment",
                "Custom Software",
                "SEO Strategy",
                "Monthly Presence",
                "Web Automations"
              ],
            },
            {
              title: "Industries",
              items: ["Private Yacht", "Aviation", "Startup", "Real Estate","Manufacturing"],
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
    { name: "Organic Care", sub: "Professional Partner", logo: "/logos/organic-care.png" },
    { name: "RSI One", sub: "Professional Partner", logo: "/logos/rsi-one.png" },
    { name: "Nxtlvl Closers", sub: "Professional Partner", logo: "/logos/nxtlvl-closers.png" },
    { name: "Nashad Group", sub: "Professional Partner", logo: "/logos/nashad-group.png" },
    { name: "Shell", sub: "Professional Partner", logo: "/Shell_logo.svg.png" },
    { name: "Fauji Fertilizers", sub: "Professional Partner", logo: "/Fauji_Fertilizers.png" },
    { name: "Askari Bank", sub: "Professional Partner", logo: "/Askari-bank-logo.png" },
    { name: "Saqafat Bakery", sub: "Professional Partner", logo: "Saqafar_backery.png" },
    { name: "Shofipy", sub: "Professional Partner", logo: "/Shopify_logo.png" },
    { name: "Cameco", sub: "Professional Partner", logo: "/Cameco.png" },
    { name: "Nutrien", sub: "Professional Partner", logo: "/Nutrien.png" },
    { name: "Indus Group", sub: "Professional Partner", logo: "/logos/indus.png" },
    { name: "Azure Yachts", sub: "Professional Partner", logo: "/logos/azure-yachts.png" },
    { name: "Black Air", sub: "Professional Partner", logo: "/logos/black-air.png" },
    { name: "Gigas Software", sub: "Professional Partner", logo: "/logos/gigas.png" },
    { name: "Royal Aviation", sub: "Professional Partner", logo: "/logos/royal-aviation.png" }
  ].map((item, i) => (
    <div key={i} className="space-y-2 flex flex-col items-center">
      <img
        src={item.logo}
        alt={`${item.name} Logo`}
        className="w-24 h-24 object-contain" // adjust size as needed
      />
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

  {/* Coral Pink Glow Layers */}
  <div className="absolute bottom-0 w-[90%] h-36 blur-3xl bg-[#ff6f61]/40 rounded-full pointer-events-none"></div>
  <div className="absolute bottom-6 w-[70%] h-28 blur-2xl bg-[#ff7f73]/40 rounded-full pointer-events-none"></div>
  <div className="absolute bottom-10 w-[50%] h-20 blur-xl bg-[#ff8f85]/40 rounded-full pointer-events-none"></div>

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