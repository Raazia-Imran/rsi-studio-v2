import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import IndustrySuccess from "@/components/sections/IndustrySuccess";
import Portfolio from "@/components/sections/Portfolio";
import Exclusivity from "@/components/sections/Exclusivity";
import Reviews from "@/components/sections/Reviews";
import Comparison from "@/components/sections/Comparison";
import Pricing from "@/components/sections/Pricing";
import Ecosystem from "@/components/sections/Ecosystem";
import FAQ from "@/components/sections/FAQ";
import ManagedPresence from "./components/sections/ManagePresence";
import AiCards from "./components/sections/ManagePresence";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <IndustrySuccess />
      <Portfolio />
      <Exclusivity />
      <Reviews />
      <Comparison />
      <Pricing />
      <AiCards/>
      <Ecosystem />
      <FAQ />
    </>
  );
}
