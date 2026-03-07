// "use client";

// import Hero from "@/components/sections/Hero";
// import Services from "@/components/sections/Services";
// import IndustrySuccess from "@/components/sections/IndustrySuccess";
// import FounderQuote from "@/components/sections/FounderQuote";

// export default function Home() {
//   return (
//     <main className="bg-black min-h-screen text-white selection:bg-[#FF6B6B] selection:text-black">
//       {/* 1. Hero Section (RSI Wordmark & Floating Projection Lamps made by Noor) */}
//       <Hero />

//       {/* 2. Services Section (Dynamic Showcase) */}
//       <Services />

//       {/* 3. Industry Success Section (Design Monks inspired grid) */}
//       <IndustrySuccess />

//       {/* 4. Founder's Quote (Daniel's Perfection in Pixels quote) */}
//       <FounderQuote />

//       {/* NOTE: No Footer here. layout.tsx handles it globally. */}
//     </main>
//   );
// }

"use client";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import IndustrySuccess from "@/components/sections/IndustrySuccess";
import FounderQuote from "@/components/sections/FounderQuote";
// Importing the swiping stack cards based on your original file structure
import AiCards from "@/components/sections/ManagePresence";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-[#FF6B6B] selection:text-black">
      {/* 1. Hero Section (Includes Noor's floating projection lamps) */}
      <Hero />

      {/* 2. Services Section (Dynamic Showcase) */}
      <Services />

      {/* 3. Industry Success Section (Design Monks inspired grid) */}
      <IndustrySuccess />

      {/* 4. Founder's Quote (Daniel's Perfection in Pixels quote) */}
      <FounderQuote />

      {/* 5. The Stacking Swipe Cards Component */}
      <AiCards />

      {/* REVERTED: Reviews reel is safely moved to Testimonials page */}
      {/* NOTE: No Footer here. layout.tsx handles it globally. */}
    </main>
  );
}