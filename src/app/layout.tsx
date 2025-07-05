import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Krishna Nagpal | Portfolio",
  description: "Crafting Intelligent Systems That Solve Real-World Problems",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`.trim()}>
      <body className="bg-neutral-50 text-neutral-900 font-sans min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
