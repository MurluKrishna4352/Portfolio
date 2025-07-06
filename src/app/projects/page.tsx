"use client";
import React from "react";
import ProjectCarousel from "../../components/ProjectCarousel";
import GardenSilhouettes from "../GardenSilhouettes";
import FlockOfBirds from "../FlockOfBirds";
import LeafyTree from "../LeafyTree";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <main
      className="relative min-h-[100dvh] h-[100dvh] flex flex-col items-center justify-center overflow-x-hidden bg-gradient-to-b from-yellow-50 via-white to-green-100"
      aria-label="Projects Section"
    >
      {/* Elegant, nature-inspired navigation at top-left */}
      <nav
        className="absolute top-6 left-4 z-40 flex items-center gap-2 select-none"
        aria-label="Home navigation"
      >
        {/* Animated stem: only appears after bamboo animation is done, then house appears */}
        <motion.svg
          width="80"
          height="150"
          viewBox="-5 -5 80 135"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ delay: 4.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.path
            d="M20 84 Q 40 60 52 44 Q 68 28 100 70"
            stroke="#5fa150"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 4.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.svg>
        <motion.a
          href="/"
          aria-label="Home"
          className="group focus:outline-none focus:ring-2 focus:ring-green-400 rounded-full -ml-6 -mt-2"
          style={{ position: 'relative', top: '-8px', display: 'inline-block' }}
          initial={{ opacity: 0, y: -24, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 5.6, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
            {/* House base */}
            <rect x="11" y="17" width="14" height="10" rx="3" fill="#e9dac5" stroke="#8d6748" strokeWidth="2" />
            {/* Roof */}
            <path d="M10 18 L18 10 L26 18" fill="#b08968" stroke="#8d6748" strokeWidth="2" strokeLinejoin="round" />
            {/* Door */}
            <rect x="17" y="22" width="2" height="5" rx="1" fill="#8d6748" />
            {/* Friendly window (smile) */}
            <path d="M14 22 Q 18 26 22 22" stroke="#b7e4c7" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </motion.a>
      </nav>
      {/* Sunrise glare at the top */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 z-0 flex flex-col items-center w-full">
        <svg width="220" height="70" viewBox="0 0 220 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="110" cy="60" rx="90" ry="22" fill="url(#sunriseGlare)" />
          <defs>
            <radialGradient id="sunriseGlare" cx="0.5" cy="1" r="1" fx="0.5" fy="1">
              <stop offset="0%" stopColor="#ffe066" stopOpacity="0.32" />
              <stop offset="80%" stopColor="#fffbe6" stopOpacity="0.09" />
              <stop offset="100%" stopColor="#fffbe6" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-0 right-0 bottom-0 pointer-events-none z-0">
        <GardenSilhouettes />
        {/* More trees and bushes for a lush garden */}
        <LeafyTree className="absolute left-8 bottom-0 w-40 h-40 opacity-80" />
        <LeafyTree className="absolute left-32 bottom-0 w-32 h-32 opacity-70" />
        <LeafyTree className="absolute left-64 bottom-0 w-28 h-28 opacity-60" />
        <LeafyTree className="absolute right-8 bottom-0 w-36 h-36 opacity-75" />
        <LeafyTree className="absolute right-40 bottom-0 w-28 h-28 opacity-60" />
        {/* Bushes as simple green ellipses */}
        <svg className="absolute left-24 bottom-0" width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="18" cy="20" rx="18" ry="10" fill="#b7e4c7" opacity="0.7" />
          <ellipse cx="42" cy="18" rx="14" ry="8" fill="#74c69d" opacity="0.6" />
        </svg>
        <svg className="absolute right-24 bottom-0" width="48" height="18" viewBox="0 0 48 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="14" cy="14" rx="14" ry="7" fill="#b7e4c7" opacity="0.7" />
          <ellipse cx="34" cy="12" rx="10" ry="5" fill="#74c69d" opacity="0.6" />
        </svg>
        <div className="absolute right-10 bottom-20 w-32 h-16 opacity-60">
          <FlockOfBirds />
        </div>
      </div>



      {/* Bamboo stalks growing from the garden edges to the top */}
      <svg
        className="absolute left-0 bottom-0 z-30 pointer-events-none"
        width="80" height="1000" viewBox="0 0 80 1000" fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ pointerEvents: 'none' }}
      >
        {/* Bamboo stalk (left) */}
        <motion.rect
          x="30"
          // Animate y from bottom up, so stalk grows from garden
          initial={{ y: 1000, height: 0 }}
          animate={{ y: 0, height: 1000 }}
          width="12"
          rx="6"
          fill="#7bb661"
          transition={{ duration: 4.2, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Bamboo nodes */}
        {[...Array(10)].map((_, i) => (
          <motion.rect
            key={i}
            x="28" y={i * 100 + 80} width="16" height="10" rx="5"
            fill="#a3d977"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
          />
        ))}
        {/* Bamboo leaves (left) */}
        {[...Array(16)].map((_, i) => {
          const cy = i * 60 + 80;
          const stalkGrowTime = 4.2 * (cy / 1000);
          return (
            <motion.ellipse
              key={i}
              cx={i % 2 === 0 ? 22 : 52}
              // Animate from ground (cy=1000) to final cy
              initial={{ cy: 1000, opacity: 0, rotate: i % 2 === 0 ? -30 : 30 }}
              animate={{ cy, opacity: 1, rotate: 0 }}
              rx="14" ry="5"
              fill="#5fa150"
              transition={{ delay: stalkGrowTime + 0.3, duration: 0.7 }}
            />
          );
        })}
      </svg>
      <svg
        className="absolute right-0 bottom-0 z-30 pointer-events-none"
        width="80" height="1000" viewBox="0 0 80 1000" fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ pointerEvents: 'none' }}
      >
        {/* Bamboo stalk (right) */}
        <motion.rect
          x="38"
          initial={{ y: 1000, height: 0 }}
          animate={{ y: 0, height: 1000 }}
          width="12"
          rx="6"
          fill="#7bb661"
          transition={{ duration: 4.2, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Bamboo nodes */}
        {[...Array(10)].map((_, i) => (
          <motion.rect
            key={i}
            x="36" y={i * 100 + 80} width="16" height="10" rx="5"
            fill="#a3d977"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
          />
        ))}
        {/* Bamboo leaves (right) */}
        {[...Array(16)].map((_, i) => {
          const cy = i * 60 + 80;
          const stalkGrowTime = 4.2 * (cy / 1000);
          return (
            <motion.ellipse
              key={i}
              cx={i % 2 === 0 ? 66 : 28}
              initial={{ cy: 1000, opacity: 0, rotate: i % 2 === 0 ? 30 : -30 }}
              animate={{ cy, opacity: 1, rotate: 0 }}
              rx="14" ry="5"
              fill="#5fa150"
              transition={{ delay: stalkGrowTime + 0.3, duration: 0.7 }}
            />
          );
        })}
      </svg>

      <motion.section
        className="relative z-10 w-full max-w-5xl mx-auto px-6 py-10 md:py-14 rounded-3xl backdrop-blur-xl bg-black/40 shadow-2xl border border-white/20"
        initial={{ opacity: 0, y: 80, scale: 0.98, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Projects Panel"
      >
        <h1
          className="font-playfair text-4xl md:text-5xl font-bold text-center mb-2 text-green-900 dark:text-green-100 tracking-tight"
        >
          Projects
        </h1>
        <p className="text-center text-green-800/80 text-lg mb-8 font-inter font-medium">
          A selection of my work, crafted with care and creativity
        </p>
        <ProjectCarousel />
      </motion.section>
    </main>
  );
}
