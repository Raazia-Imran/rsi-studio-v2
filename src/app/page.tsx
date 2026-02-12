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
    <main className="bg-background min-h-screen text-white selection:bg-primary selection:text-black">
      {/* 01. Home Page */}
      <Hero />

      {/* 02. Services */}
      <Services />

      {/* 03. Industry Success */}
      <IndustrySuccess />

      {/* 04. Portfolio */}
      <Portfolio />

      {/* 05. Exclusivity */}
      <Exclusivity />

      {/* 06. Reviews */}
      <Reviews />

      {/* 07. RSI vs Others */}
      <Comparison />

      {/* 08. Pricing */}
      <Pricing />

      {/* 09. Managed Web Presence */}
      <ManagedPresence />

      {/* 10. Ecosystem */}
      <Ecosystem />

      {/* 11. FAQ */}
      <FAQ />

      {/* 12. Footer */}
      <Footer />
    </main>
  );
}
