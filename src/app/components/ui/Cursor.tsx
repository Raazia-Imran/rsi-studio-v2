
"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const defaultColor = "#FF6B6B";

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
        const target = e.target as HTMLElement;
        const section = target.closest("[data-cursor-color]");
        const newColor = section
          ? section.getAttribute("data-cursor-color")
          : defaultColor;
        cursorRef.current.style.setProperty("--cursor-color", newColor);
      }
    };
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer");

      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      style={
        {
          width: isHovering ? "60px" : "20px",
          height: isHovering ? "60px" : "20px",

          marginLeft: isHovering ? "-20px" : "0px",
          marginTop: isHovering ? "-20px" : "0px",
          backgroundColor: isHovering
            ? "var(--cursor-color)"
            : "var(--cursor-color)",

          boxShadow: isHovering
            ? "0 0 50px 10px var(--cursor-color)"
            : "0 0 15px 2px var(--cursor-color)",

          opacity: isHovering ? 0.3 : 1,

          transition:
            "width 0.2s, height 0.2s, background-color 0.2s, box-shadow 0.2s, opacity 0.2s",
        } as React.CSSProperties
      }
    />
  );
}