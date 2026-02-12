"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import Exclusivity from "@/components/sections/Exclusivity";
import Ecosystem from "@/components/sections/Ecosystem";

// The "Short" Navigation Hub (Replaces the long scroll)
function SystemDirectory() {
  const links = [
    {
      label: "Core Services",
      href: "/services",
      desc: "Engineering & Design Systems",
    },
    {
      label: "Industries",
      href: "/industries",
      desc: "Aviation, Yachting, Real Estate",
    },
    { label: "Selected Work", href: "/work", desc: "Case Studies & Outcomes" },
    {
      label: "Pricing Models",
      href: "/pricing",
      desc: "Retainers & Project Quotes",
    },
  ];

  return (
    <section className="py-32 px-6 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, i) => (
          <Link key={i} href={link.href} className="group relative block">
            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-12 hover:bg-white/10 transition-all duration-500 hover:scale-[1.01]">
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-xs text-white/40">
                  0{i + 1}
                </span>
                <ArrowRight className="text-white/20 group-hover:text-[#FF6B6B] group-hover:-rotate-45 transition-all duration-500" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-2 text-white">
                {link.label}
              </h3>
              <p className="text-white/50 text-sm">{link.desc}</p>

              {/* Hover Glow Effect */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#FF6B6B] blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-[#FF6B6B] selection:text-black">
      {/* 01. The Hook */}
      <Hero />

      {/* 02. The Brand Statement */}
      <Exclusivity />

      {/* 03. The Navigation Portal (New Short Section) */}
      <SystemDirectory />

      {/* 04. Final CTA */}
      <Ecosystem />

      {/* NOTE: Footer is REMOVED here because layout.tsx handles it */}
    </main>
  );
}
