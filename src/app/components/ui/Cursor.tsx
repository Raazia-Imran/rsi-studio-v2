"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let animationFrameId: number;

    const updateCoordinates = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const renderLoop = () => {
      cursor.style.transform = `translate3d(${mouseX - 12}px, ${mouseY - 12}px, 0)`;
      animationFrameId = window.requestAnimationFrame(renderLoop);
    };

    window.addEventListener("mousemove", updateCoordinates, { passive: true });
    renderLoop();

    return () => {
      window.removeEventListener("mousemove", updateCoordinates);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{
        backgroundColor: "#FF6B6B",
        border: "2px solid #FF6B6B",
        boxShadow: "0 0 15px #FF6B6B, 0 0 30px rgba(255, 107, 107, 0.6)",
        willChange: "transform",
      }}
    />
  );
}