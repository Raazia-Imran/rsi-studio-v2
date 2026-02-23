"use client";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <>
      {/* Part A: Design Monks Inverse Section */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-7xl font-display font-bold mb-20 tracking-tighter">
            Selected Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="aspect-video bg-gray-100 rounded-2xl overflow-hidden border border-black/5 hover:scale-[1.02] transition-transform duration-700"
              >
                {/* Image Placeholder */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part B: Levan Rho Slideshow */}
      <section className="h-screen bg-black flex items-center justify-center overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-10"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-[80vw] md:w-[40vw] aspect-video bg-white/5 rounded-lg border border-white/10"
              />
            ))}
          </motion.div>
        </div>
        <div className="absolute flex items-center justify-center pointer-events-none">
          <h2 className="text-white/5 text-[15vw] font-display font-bold uppercase">
            Visual System
          </h2>
        </div>
      </section>
    </>
  );
}
