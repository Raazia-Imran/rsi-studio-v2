"use client"

import { motion } from "framer-motion";

interface Location {
  country: string;
  address: string;
}

const locations: Location[] = [
  { country: "Canada", address: "Broackroad, Pickering, Ontario" },
  { country: "Pakistan", address: "2nd Floor, Hall No.2, WWIC, UOS, University road Sargodha" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white overflow-hidden pt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Our Global Presence
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Delivering premium digital solutions across continents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-24 relative">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111]/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-[#FF6B6B]/40 transition relative overflow-hidden"
            >
              <h3 className="text-lg font-semibold mb-2">{loc.country}</h3>
              <p className="text-gray-400 text-sm">{loc.address}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 pt-16 mb-24">

  {/* Important Links */}
 <div>
  <h4 className="text-[#FF6B6B] text-xs font-bold uppercase tracking-widest mb-6">Important Links</h4>
    <ul className="space-y-3 text-sm text-white/60">
      <li><a href="/rs-international" className="hover:text-white">RS International</a></li>
      <li><a href="/team" className="hover:text-white">Team</a></li>
      <li><a href="/testimonials" className="hover:text-white">Testimonials</a></li>
      <li><a href="/partner" className="hover:text-white">Become a Partner</a></li>
      <li><a href="/blogs" className="hover:text-white">Blogs</a></li>
    </ul>
 </div>
  

  {/* Services */}
  <div>
    <h4 className="text-[#FF6B6B] text-xs font-bold uppercase tracking-widest mb-6">
      Services
    </h4>
    <ul className="space-y-3 text-sm text-white/60">
      <li><a href="/services/web-design" className="hover:text-white transition-colors">Web Design</a></li>
      <li><a href="/services/web-development" className="hover:text-white transition-colors">Web Development</a></li>
      <li><a href="/services/custom-software" className="hover:text-white transition-colors">Custom Software</a></li>
      <li><a href="/services/seo" className="hover:text-white transition-colors">SEO Strategy</a></li>
      <li><a href="/services/monthly-presence" className="hover:text-white transition-colors">Monthly Presence</a></li>
      <li><a href="/services/automation" className="hover:text-white transition-colors">Web Automations</a></li>
    </ul>
  </div>

  {/* Industries */}

  <div>
    <h4 className="text-[#FF6B6B] text-xs font-bold uppercase tracking-widest mb-6">
      Industries
    </h4>
    <ul className="space-y-3 text-sm text-white/60">
      <li><a href="/industries/yacht" className="hover:text-white transition-colors">Private Yacht</a></li>
      <li><a href="/industries/aviation" className="hover:text-white transition-colors">Aviation</a></li>
      <li><a href="/industries/startup" className="hover:text-white transition-colors">Startup</a></li>
      <li><a href="/industries/real-estate" className="hover:text-white transition-colors">Real Estate</a></li>
      <li><a href="/industries/manufacturing" className="hover:text-white transition-colors">Manufacturing</a></li>
    </ul>
  </div>

  {/* Communication */}
  
<div>
  <h4 className="text-[#FF6B6B] text-xs font-bold uppercase tracking-widest mb-6">
    Communications
  </h4>
  <div className="space-y-3 text-sm text-white/60">
    <p>+1 (437) 994-5030</p>
    <p>+92 329 143321</p>
    <a
      href="mailto:team@rsinternational.net"
      className="hover:text-white mt-2 block"
    >
      team@rsinternational.net
    </a>
  </div>
</div>  

</div>
  <div className="grid grid-cols-4 md:grid-cols-8 gap-10 items-center justify-items-center mb-24">
  {[
    { src: "/logos/organic-care.png", size: "h-14" },
    { src: "/logos/rsi-one.png", size: "h-14" },
    { src: "/logos/nxtlvl-closers.png", size: "h-14" },
    { src: "/logos/nashad-group.png", size: "h-14" },
    { src: "/Shell_logo.svg.png", size: "h-14" },
    { src: "/Fauji_Fertilizers.png", size: "h-14" },
    { src: "/Askari-bank-logo.png", size: "h-14" },
    { src: "/Saqafar_backery.png", size: "h-24" }, 
    { src: "/Shopify_logo.png", size: "h-20" },    
    { src: "/Cameco.png", size: "h-14" },
    { src: "/Nutrien.png", size: "h-24" },
    { src: "/logos/indus.png", size: "h-14" },
    { src: "/logos/azure-yachts.png", size: "h-14" },
    { src: "/logos/black-air.png", size: "h-14" },
    { src: "/logos/gigas.png", size: "h-14" },
    { src: "/logos/royal-aviation.png", size: "h-14" },
  ].map((logo, i) => (
    <div key={i} className="flex items-center justify-center">
      <img
        src={logo.src}
        alt="partner logo"
        className={`${logo.size} w-auto object-contain opacity-70 hover:opacity-100 transition duration-300`}
      />
    </div>
  ))
}
</div>      
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

      <div className="relative h-[180px] md:h-[220px] lg:h-[260px] overflow-hidden flex justify-center items-end">
        <div className="absolute bottom-0 w-[90%] h-36 blur-3xl bg-[#ff6f61]/40 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-6 w-[70%] h-28 blur-2xl bg-[#ff7f73]/40 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-10 w-[50%] h-20 blur-xl bg-[#ff8f85]/40 rounded-full pointer-events-none"></div>

        <h1
          className="
            relative
           font-black
           uppercase
           tracking-tight
           text-white
           select-none
            text-[clamp(3rem,8vw,6rem)]
            whitespace-nowrap
          "
        >
          RSI Studio
        </h1>
      </div>
    </footer>
  );
}

