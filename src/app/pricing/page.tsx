"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const TIERS = [
  {
    price: "$1,800",
    audience: "Ideal for Startup Owners, MVP Builders",
    title: "Website Design",
    features: [
      "Design Style Guide",
      "Responsive across all devices",
      "Unlimited Revisions",
      "Developer Handoff",
    ],
  },
  {
    price: "$3,500",
    audience: "For SaaS & fast MVP launches.",
    title: "Web/Mobile App Design",
    features: [
      "UX Research",
      "Design System with token",
      "Unlimited Revisions",
      "Developer handoff",
      "Transparent communication",
      "Responsive across all devices",
    ],
    featured: true,
  },
  {
    price: "$3,800+",
    audience: "Ideal for Startup or MVP",
    title: "Monthly Subscription",
    features: [
      "Monthly dedicated designers",
      "Adhoc design support",
      "Right designer for right product",
      "Transparent communication",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="bg-black min-h-screen pt-32 pb-40 px-6 text-white selection:bg-[#FF6B6B] selection:text-black">
      {/* Hero Section */}
      <section className="container mx-auto max-w-4xl text-center mb-32">
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
          TRANSPARENT <span className="text-[#FF6B6B]">SYSTEMS</span>
        </h1>

        <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed border border-white/10 bg-white/5 p-8 rounded-2xl">
          We onboard only 6 clients a month, no matter what. Our niches are
          specific, and we operate as strategic growth partners rather than just
          another studio.
        </p>
      </section>

      {/* Pricing Tiers */}
      <section className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-6 mb-32">
        {TIERS.map((tier, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`p-10 rounded-3xl border ${
              tier.featured
                ? "border-[#FF6B6B] bg-[#FF6B6B]/5 relative transform md:-translate-y-4"
                : "border-white/10 bg-white/[0.02]"
            }`}
          >
            {tier.featured && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF6B6B] text-black text-[10px] uppercase tracking-widest px-4 py-1 rounded-full font-bold">
                Recommended
              </div>
            )}

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-2">
              {tier.price}
            </h2>

            <p className="text-[10px] text-white/50 uppercase tracking-widest mb-6 h-8">
              {tier.audience}
            </p>

            <h3 className="text-xl font-bold text-[#FF6B6B] mb-8">
              {tier.title}
            </h3>

            <ul className="space-y-4 mb-10">
              {tier.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-white/70"
                >
                  <Check size={16} className="text-[#FF6B6B] shrink-0 mt-0.5" />
                  {feat}
                </li>
              ))}
            </ul>

            {/* FIXED Explore Button */}
            <Link
              href="/ecosystem"
              className={`block text-center w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors ${
                tier.featured
                  ? "bg-[#FF6B6B] text-black hover:bg-white"
                  : "bg-white/10 hover:bg-white hover:text-black"
              }`}
            >
              Explore More →
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Managed Web Presence */}
      <section className="container mx-auto max-w-4xl text-center bg-white/5 border border-white/10 rounded-3xl p-12">
        <h2 className="text-3xl font-display font-bold mb-4">
          Managed Web Presence
        </h2>

        <p className="text-[#FF6B6B] text-xl mb-8">$500 / Month</p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest border-b border-white/10 pb-2">
              Included (Free)
            </h4>

            <ul className="text-sm text-white/60 space-y-2">
              <li>Web design support</li>
              <li>Monthly SEO</li>
              <li>GEO optimization</li>
              <li>Launch support</li>
              <li>Bi-annual updates</li>
              <li>SER & Security</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest border-b border-white/10 pb-2">
              Paid Separately
            </h4>

            <ul className="text-sm text-white/60 space-y-2">
              <li>Hosting</li>
              <li>Backend services</li>
              <li>Blogging</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
