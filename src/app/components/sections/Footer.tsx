"use client";

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
  ))}
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

// "use client";

// const PARTNERS = [
//   "Organic Care", "RSI One", "Nxtivl Closers", "Nashad Group", "Shell",
//   "Fauji Fertilizers", "Askari Bank", "Saqafat Bakery", "Shopify", "Cameco",
//   "Nutrien", "Indus Group", "Azure Yachts", "Black Air", "Gigas Software", "Royal Aviation"
// ];

// export default function Footer() {
//   return (
//     <footer className="bg-black pt-32 pb-12 px-6 border-t border-white/10 relative overflow-hidden">
//       <div className="container mx-auto relative z-10">

//         {/* Partner Logos Layer */}
//         <div className="mb-24">
//           <h4 className="text-center text-xs font-mono text-white/30 uppercase tracking-[0.3em] mb-10">
//             Trusted By Global Industry Leaders
//           </h4>
//           <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-40">
//             {PARTNERS.map((partner) => (
//               <span key={partner} className="text-sm font-display font-bold text-white uppercase tracking-wider">
//                 {partner}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Main Footer Data */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">

//           <div className="md:col-span-1">
//             <h2 className="text-4xl font-display font-bold text-white tracking-tighter mb-4">
//               RSI STUDIO
//             </h2>
//             <p className="text-white/40 text-sm">A division of RS International.</p>
//           </div>

//           <div>
//             <h4 className="text-[#FF6B6B] text-xs font-bold uppercase tracking-widest mb-6">Navigation</h4>
//             <ul className="space-y-3 text-sm text-white/60">
//               <li><a href="/rs-international" className="hover:text-white">RS International</a></li>
//               <li><a href="/team" className="hover:text-white">Team</a></li>
//               <li><a href="/testimonials" className="hover:text-white">Testimonials</a></li>
//               <li><a href="/partner" className="hover:text-white">Become a Partner</a></li>
//               <li><a href="/blogs" className="hover:text-white">Blogs</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-[#FF6B6B] text-xs font-bold uppercase tracking-widest mb-6">Headquarters</h4>
//             <div className="space-y-4 text-sm text-white/60">
//               <p>2nd Floor, Hall No. 2, WWIC, UOS,<br />University Road, Sargodha, PK.</p>
//               <p>Brock Road, Pickering,<br />Ontario, Canada.</p>
//             </div>
//           </div>

//           <div>
//             <h4 className="text-[#FF6B6B] text-xs font-bold uppercase tracking-widest mb-6">Communications</h4>
//             <div className="space-y-3 text-sm text-white/60">
//               <p>+1 (437) 994-5030</p>
//               <p>+92 329 143321</p>
//               <a href="mailto:team@rsinternational.net" className="hover:text-white mt-2 block">
//                 team@rsinternational.net
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-24 pt-8 border-t border-white/10 text-xs text-white/30 uppercase tracking-widest">
//           © 2026 RSI Studio. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }

/*"use client";

import { motion } from "framer-motion";

const PARTNERS = [
  {
    name: "Organic Care",
    sub: "Professional Partner",
    logo: "/logos/organic-care.png",
  },
  { name: "RSI One", sub: "Professional Partner", logo: "/logos/rsi-one.png" },
  {
    name: "Nxtlvl Closers",
    sub: "Professional Partner",
    logo: "/logos/nxtlvl-closers.png",
  },
  {
    name: "Nashad Group",
    sub: "Professional Partner",
    logo: "/logos/nashad-group.png",
  },
  { name: "Shell", sub: "Professional Partner", logo: "/Shell_logo.svg.png" },
  {
    name: "Fauji Fertilizers",
    sub: "Professional Partner",
    logo: "/Fauji_Fertilizers.png",
  },
  {
    name: "Askari Bank",
    sub: "Professional Partner",
    logo: "/Askari-bank-logo.png",
  },
  {
    name: "Saqafat Bakery",
    sub: "Professional Partner",
    logo: "/Saqafar_backery.png",
  },
  { name: "Shopify", sub: "Professional Partner", logo: "/Shopify_logo.png" },
  { name: "Cameco", sub: "Professional Partner", logo: "/Cameco.png" },
  { name: "Nutrien", sub: "Professional Partner", logo: "/Nutrien.png" },
  {
    name: "Indus Group",
    sub: "Professional Partner",
    logo: "/logos/indus.png",
  },
  {
    name: "Azure Yachts",
    sub: "Professional Partner",
    logo: "/logos/azure-yachts.png",
  },
  {
    name: "Black Air",
    sub: "Professional Partner",
    logo: "/logos/black-air.png",
  },
  {
    name: "Gigas Software",
    sub: "Professional Partner",
    logo: "/logos/gigas.png",
  },
  {
    name: "Royal Aviation",
    sub: "Professional Partner",
    logo: "/logos/royal-aviation.png",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white overflow-hidden pt-32 pb-12">
      {/* Background Gradients *//*}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ===== Partners Layer (Eman's Image Grid) ===== *///}
        /*<div className="mb-24">
          <h4 className="text-center text-xs font-mono text-white/30 uppercase tracking-[0.3em] mb-16">
            Trusted By Global Industry Leaders
          </h4>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 text-center">
            {PARTNERS.map((item, i) => (
              <div key={i} className="space-y-2 flex flex-col items-center">
                <img
                  src={item.logo}
                  alt={`${item.name} Logo`}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  onError={(e) => (e.currentTarget.style.display = "none")} // Hides broken images safely
                />
                <div className="text-lg font-semibold">{item.name}</div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Strict SRS Data Section ===== *///}
        /*<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-display font-bold text-white tracking-tighter mb-4">
              RSI STUDIO
            </h2>
            <p className="text-white/40 text-sm">
              A division of RS International.
            </p>
          </div>

          <div>
            <h4 className="text-[#FF6B6B] text-xs font-bold uppercase tracking-widest mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="/rs-international"
                  className="hover:text-white transition-colors"
                >
                  RS International
                </a>
              </li>
              <li>
                <a href="/team" className="hover:text-white transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/testimonials"
                  className="hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="/partner"
                  className="hover:text-white transition-colors"
                >
                  Become a Partner
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-white transition-colors">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FF6B6B] text-xs font-bold uppercase tracking-widest mb-6">
              Headquarters
            </h4>
            <div className="space-y-4 text-sm text-white/60 leading-relaxed">
              <p>
                2nd Floor, Hall No. 2, WWIC, UOS,
                <br />
                University Road, Sargodha, PK.
              </p>
              <p>
                Brock Road, Pickering,
                <br />
                Ontario, Canada.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-[#FF6B6B] text-xs font-bold uppercase tracking-widest mb-6">
              Communications
            </h4>
            <div className="space-y-3 text-sm text-white/60">
              <p>+1 (437) 994-5030</p>
              <p>+92 329 143321</p>
              <a
                href="mailto:team@rsinternational.net"
                className="hover:text-white mt-2 block transition-colors"
              >
                team@rsinternational.net
              </a>
            </div>
          </div>
        </div>

        {/* ===== Legal & Copyright ===== *///}
        /*<div className="flex flex-col md:flex-row justify-between items-center text-center mt-24 pt-8 border-t border-white/10">
          <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase text-white/40 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
          <p className="text-[10px] text-white/30 uppercase tracking-widest">
            © 2026 RSI Studio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}*/
