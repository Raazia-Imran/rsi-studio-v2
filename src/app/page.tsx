import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import IndustrySuccess from "@/components/sections/IndustrySuccess";
import Portfolio from "@/components/sections/Portfolio";
import Exclusivity from "@/components/sections/Exclusivity";
import Reviews from "@/components/sections/Reviews";
import Comparison from "@/components/sections/Comparison";
import Pricing from "@/components/sections/Pricing";
import ManagedPresence from "@/components/sections/ManagedPresence";
import Ecosystem from "@/components/sections/Ecosystem";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-white overflow-x-hidden selection:bg-primary selection:text-black">
      {/* 01. Home Page - Inspiration: Design Monks */}
      <Hero />

      {/* 02. Services - Inspiration: Design Monks AI Engine */}
      <Services />

      {/* 03. Industry Success - Inspiration: Design Monks Industry */}
      <IndustrySuccess />

      {/* 04. Portfolio - Inspiration: Design Monks (A) + Levan Rho (B) */}
      <Portfolio />

      {/* 05. Exclusivity - Inspiration: Original (RSI) */}
      <Exclusivity />

      {/* 06. Reviews - Inspiration: RSI Studio Dual Reels */}
      <Reviews />

      {/* 07. RSI vs Others - Inspiration: RSI x Design Monks */}
      <Comparison />

      {/* 08. Pricing - Inspiration: Design Monks Pricing */}
      <Pricing />

      {/* 09. Managed Web Presence - Inspiration: Original (RSI) */}
      <ManagedPresence />

      {/* 10. Accelerate to RSI Ecosystem - Inspiration: Gigas.io */}
      <Ecosystem />

      {/* 11. FAQ - Inspiration: Design Monks FAQ */}
      <FAQ />

      {/* 12. Footer - Inspiration: Design Monks Footer */}
      <Footer />
    </main>
  );
}
