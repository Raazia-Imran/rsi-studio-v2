"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black pt-40 pb-10 border-t border-white/5 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="text-[#FF6B6B] text-xs font-bold tracking-[0.3em] uppercase mb-8">
              Ready to dominate?
            </h2>
            <Link href="/ecosystem" className="group">
              <h1 className="text-[12vw] md:text-[8vw] font-display font-bold leading-[0.8] tracking-tighter hover:text-white/20 transition-colors duration-500">
                START <br /> THE SYSTEM
              </h1>
            </Link>
          </div>

          <div className="flex flex-col justify-end gap-12">
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-4">
                <h4 className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
                  Connect
                </h4>
                <div className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="hover:text-[#FF6B6B] transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#FF6B6B] transition-colors"
                  >
                    Twitter / X
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#FF6B6B] transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
                  Location
                </h4>
                <p className="text-sm">
                  Karachi, PK
                  <br />
                  Global Ops
                </p>
              </div>
            </div>
            <a
              href="mailto:hello@rsi.studio"
              className="text-2xl font-display hover:underline decoration-[#FF6B6B]"
            >
              hello@rsi.studio
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/10">
          <p className="text-[10px] text-white/30 uppercase tracking-[0.5em]">
            © 2026 RSI STUDIO — ALL SYSTEMS GO
          </p>
          <div className="flex gap-8 text-[10px] text-white/30 uppercase tracking-widest">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
