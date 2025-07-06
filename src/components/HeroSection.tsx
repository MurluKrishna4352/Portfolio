"use client";
import { motion } from "framer-motion";
import Link from "next/link";
// import Lottie from "lottie-react";
// import aiAnimation from "../assets/ai-abstract.json";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] w-full gap-8 md:gap-20 py-12">
      {/* Left: Animated AI/abstract visual */}
      <div className="flex-1 flex items-center justify-center md:justify-end">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-green/10 shadow-lg flex items-center justify-center overflow-hidden"
        >
          {/* User photo in circle */}
          <img
            src="/krishna-photo.png"
            alt="Krishna Nagpal portrait"
            className="w-full h-full object-cover object-center rounded-full border-4 border-white/70 shadow-lg"
            style={{ background: '#e3e3e3' }}
          />
        </motion.div>
      </div>
      {/* Right: Headline, subheadline, buttons */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6 md:pl-10">
        <motion.h1
          className="font-serif text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I’m <span className="whitespace-nowrap">Krishna Nagpal</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-neutral-600 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Crafting Intelligent Systems That Solve Real-World Problems
        </motion.p>
        <motion.div
          className="flex gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            href="/projects"
            className="px-6 py-2 rounded font-semibold shadow transition-colors border-2 border-[#3a5c3a] bg-[#3a5c3a] text-white hover:bg-[#2d4630] hover:border-[#2d4630]"
          >
            View Projects
          </Link>
          <a href="#about" className="px-6 py-2 rounded border border-accent-blue text-accent-blue font-semibold hover:bg-accent-blue/10 transition-colors">My Journey</a>
        </motion.div>
      </div>
    </section>
  );
}
