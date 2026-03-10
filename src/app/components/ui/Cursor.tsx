"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      // requestAnimationFrame frames ko browser ki refresh rate se sync karta hai
      window.requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`;
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{
        backgroundColor: "#FF6B6B",
        border: "2px solid #FF6B6B",
        boxShadow: "0 0 15px #FF6B6B, 0 0 30px rgba(255, 107, 107, 0.6)",
        willChange: "transform", // Browser ko pehle se batata hai ke ye move hoga (Fastest)
      }}
    />
  );
}