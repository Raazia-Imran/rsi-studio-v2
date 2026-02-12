import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/layout/Navbar"; // Make sure this path exists
import Footer from "@/components/sections/Footer"; // Import the new Footer

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RSI Studio",
  description: "Engineering Digital Dominance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-black text-white`}
      >
        {/* Global Components that persist across all pages */}
        <Cursor />
        <Navbar />

        {/* The Page Content */}
        {children}

        {/* Global Footer (One for All) */}
        <Footer />
      </body>
    </html>
  );
}
