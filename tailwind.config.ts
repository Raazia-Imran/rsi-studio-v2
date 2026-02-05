import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000", // Deep space black
        primary: "#FF7F50", // Coral pink
        surface: "#0A0A0A", // Near-absolute dark tones
        ecosystem: "#6366f1", // Gigas.io-style transition blue [cite: 20, 215]
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"], // Minimalist futurism [cite: 20]
      },
    },
  },
  plugins: [],
};
export default config;
