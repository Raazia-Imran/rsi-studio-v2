"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-5 py-2 rounded-full border border-[#FF6B6B] text-[#FF6B6B] text-sm tracking-wide">
            Pricing Plans
          </span>
        </div>
           {/* Row 1 */}
    <span className="block font-sans text-white">
      Unbeatable Value
    </span>

    {/* Row 2 */}
    <span className="block mt-2">
      <span className="font-sans font-extrabold text-white">
        Unmatched{" "}
      </span>
      <span className="font-serif italic font-semibold text-white">
        Quality
      </span>
    </span>
          </h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

          {/* Starter */}
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-[#FF6B6B] transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Basic Design
            </h3>
            <p className="text-gray-400 mb-6">Starter</p>

            <div className="text-4xl font-bold mb-6">$800</div>

            <ul className="space-y-4 mb-8">
              {[
                "Custom Homepage Design",
                "Responsive Layout",
                "Basic SEO Setup",
                "Contact Form Integration",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#FF6B6B] w-5 h-5" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-gradient-to-r from-[#FF6B6B] to-pink-500 text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition">
              Explore More <ArrowRight size={18} />
            </button>
          </div>

          {/* Featured (Raised + Glow) */}
          <div className="relative bg-zinc-900 rounded-2xl p-8 border-2 border-[#FF6B6B] 
                          md:-translate-y-6
                          shadow-[0_0_35px_rgba(255,107,107,0.45)]
                          hover:shadow-[0_0_55px_rgba(255,107,107,0.65)]
                          transition-all duration-300">

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B6B] text-black text-sm font-semibold px-4 py-1 rounded-full">
              Most Popular
            </div>

            <h3 className="text-2xl font-semibold text-[#FF6B6B] mb-2">
              Website Design
            </h3>
            <p className="text-gray-400 mb-6">Featured</p>

            <div className="text-4xl font-bold mb-6">$1,800</div>

            <ul className="space-y-4 mb-8">
              {[
                "Everything in Starter",
                "Multi-Page Website",
                "Advanced UI/UX Design",
                "Performance Optimization",
                "CMS Integration",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#FF6B6B] w-5 h-5" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-gradient-to-r from-[#FF6B6B] to-pink-500 text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition">
              Explore More <ArrowRight size={18} />
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-[#FF6B6B] transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Full Product Suite
            </h3>
            <p className="text-gray-400 mb-6">Enterprise</p>

            <div className="text-4xl font-bold mb-6">$3,500</div>

            <ul className="space-y-4 mb-8">
              {[
                "Everything in Featured",
                "Full Web Application",
                "Custom Backend Development",
                "API Integrations",
                "Ongoing Support",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#FF6B6B] w-5 h-5" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-gradient-to-r from-[#FF6B6B] to-pink-500 text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition">
              Explore More <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}