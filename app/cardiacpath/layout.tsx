import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./cardiacpath.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CardiacPathLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`cp ${inter.variable} ${inter.className}`}>
      <style>{`html, body { background: #f6f8fc !important; color: #16233a; }`}</style>
      {children}
    </div>
  );
}
