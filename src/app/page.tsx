// import Hero from "@/components/sections/Hero";
// import Services from "@/components/sections/Services";
// import IndustrySuccess from "@/components/sections/IndustrySuccess";
// import Portfolio from "@/components/sections/Portfolio";
// import Exclusivity from "@/components/sections/Exclusivity";
// import Reviews from "@/components/sections/Reviews";
// import Comparison from "@/components/sections/Comparison";
// import Pricing from "@/components/sections/Pricing";
// import Ecosystem from "@/components/sections/Ecosystem";
// import FAQ from "@/components/sections/FAQ";
// import ManagedPresence from "./components/sections/ManagePresence";
// import AiCards from "./components/sections/ManagePresence";

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <Services />
//       <IndustrySuccess />
//       <Portfolio />
//       <Exclusivity />
//       <Reviews />
//       <Comparison />
//       <Pricing />
//       <AiCards/>
//       <Ecosystem />
//       <FAQ />
//     </>
//   );
// }

"use client";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import IndustrySuccess from "@/components/sections/IndustrySuccess";
import FounderQuote from "@/components/sections/FounderQuote";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-[#FF6B6B] selection:text-black">
      {/* 1. Hero Section (RSI Wordmark & Projection Lamps) */}
      <Hero />

      {/* 2. Services Section (Dynamic Showcase) */}
      <Services />

      {/* 3. Industry Success Section (Design Monks inspired grid) */}
      <IndustrySuccess />

      {/* 4. Founder's Quote (Daniel's Perfection in Pixels quote) */}
      <FounderQuote />

      {/* NOTE: No Footer here. layout.tsx handles it globally. */}
    </main>
  );
}