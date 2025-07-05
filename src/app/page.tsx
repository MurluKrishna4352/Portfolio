"use client";
import HeroSection from "../components/HeroSection";
import LeafyTree from "./LeafyTree";
import FlockOfBirds from "./FlockOfBirds";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center relative overflow-hidden bg-[#f3eee7]">
      {/* Slightly brighter sunrise gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#f7e3d2] via-[#f3ede7] to-[#b3cfd6]" />
      {/* Leafy trees for depth, now behind the garden */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <LeafyTree className="absolute left-0 bottom-0 h-[60vh] w-24 opacity-90" />
        <LeafyTree className="absolute" style={{ left: '10vw', bottom: 0, height: '44vh', width: '2.8rem', opacity: 0.7 }} />
        <LeafyTree className="absolute" style={{ left: '20vw', bottom: 0, height: '36vh', width: '2.2rem', opacity: 0.5 }} />
        <LeafyTree className="absolute" style={{ left: '30vw', bottom: 0, height: '28vh', width: '1.7rem', opacity: 0.4 }} />
        <LeafyTree className="absolute" style={{ left: '90vw', bottom: 0, height: '54vh', width: '2.8rem', opacity: 0.8, transform: 'scaleX(-1)' }} />
        <LeafyTree className="absolute" style={{ left: '80vw', bottom: 0, height: '38vh', width: '2rem', opacity: 0.5, transform: 'scaleX(-1)' }} />
        <LeafyTree className="absolute" style={{ left: '70vw', bottom: 0, height: '30vh', width: '1.3rem', opacity: 0.4, transform: 'scaleX(-1)' }} />
      </div>
      {/* Garden silhouettes at the bottom */}
      <GardenSilhouettes />
      {/* Flock of birds animation */}
      <FlockOfBirds />
      {/* Neuron fireflies overlay */}
      <NeuronFireflies />
      {/* Nav bar buttons at the top of the screen */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-30 flex justify-center gap-6 bg-transparent">
        <a
          href="https://www.linkedin.com/in/krishnanagpal/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full font-semibold text-base bg-white/90 text-[#3a5c3a] border border-[#3a5c3a] shadow transition hover:bg-[#3a5c3a] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#3a5c3a]"
          style={{ fontFamily: "Inter, sans-serif" }}
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Murlukrishna4352"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full font-semibold text-base bg-white/90 text-[#3a5c3a] border border-[#3a5c3a] shadow transition hover:bg-[#3a5c3a] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#3a5c3a]"
          style={{ fontFamily: "Inter, sans-serif" }}
          aria-label="GitHub"
        >
          GitHub
        </a>
        <a
          href="https://drive.google.com/file/d/1uavJvIu_1j3y8wzvgS2OQoeC0XrhRehh/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full font-semibold text-base bg-white/90 text-[#3a5c3a] border border-[#3a5c3a] shadow transition hover:bg-[#3a5c3a] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#3a5c3a]"
          style={{ fontFamily: "Inter, sans-serif" }}
          aria-label="Resume"
        >
          Resume
        </a>
      </nav>
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 md:px-0">
        <div className="max-w-3xl w-full text-center" style={{ color: '#3a5c3a', textShadow: '0 2px 12px #fff8, 0 1px 0 #fff' }}>
          <HeroSection />
        </div>
        {/* TODO: Add Projects, About, Contact, Footer sections here */}
      </div>
    </main>
  );

}

// Tall bamboo tree SVG (left side)
function BambooTree(props: any) {
  // Accepts style but ignores it for the main tree, for backward compatibility
  return (
    <svg className="absolute left-0 bottom-0 h-[70vh] w-32 z-20 select-none drop-shadow-[0_2px_8px_rgba(255,255,255,0.12)]" viewBox="0 0 64 480" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Bamboo stalk */}
      <rect x="28" y="40" width="8" height="400" rx="4" fill="#3a5c3a" />
      {/* Bamboo nodes */}
      <rect x="26" y="80" width="12" height="8" rx="4" fill="#4e7c4e" />
      <rect x="26" y="160" width="12" height="8" rx="4" fill="#4e7c4e" />
      <rect x="26" y="240" width="12" height="8" rx="4" fill="#4e7c4e" />
      <rect x="26" y="320" width="12" height="8" rx="4" fill="#4e7c4e" />
      <rect x="26" y="400" width="12" height="8" rx="4" fill="#4e7c4e" />
      {/* Leaves */}
      <path d="M32 60 Q10 40 28 80" stroke="#5fae5f" strokeWidth="3" fill="none" />
      <path d="M32 120 Q0 100 28 140" stroke="#5fae5f" strokeWidth="3" fill="none" />
      <path d="M36 200 Q60 180 36 240" stroke="#5fae5f" strokeWidth="3" fill="none" />
      <path d="M36 280 Q64 260 36 320" stroke="#5fae5f" strokeWidth="3" fill="none" />
    </svg>
  );
}

// NeuronFireflies component
function NeuronFireflies() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const NEURON_COUNT = 32;
  const LINK_DISTANCE = 90; // decreased for less connectivity
  const NEURON_RADIUS = 4;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    function handleResize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    // Neuron/Firefly objects
    const neurons = Array.from({ length: NEURON_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5, // slower
      vy: (Math.random() - 0.5) * 0.5, // slower
      phase: Math.random() * Math.PI * 2,
    }));

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Draw links
      for (let i = 0; i < NEURON_COUNT; i++) {
        for (let j = i + 1; j < NEURON_COUNT; j++) {
          const dx = neurons[i].x - neurons[j].x;
          const dy = neurons[i].y - neurons[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            ctx.save?.();
            ctx.globalAlpha = 0.18 * (1 - dist / LINK_DISTANCE);
            ctx.strokeStyle = '#4e7ca1'; // water color
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(neurons[i].x, neurons[i].y);
            ctx.lineTo(neurons[j].x, neurons[j].y);
            ctx.stroke();
            ctx.restore?.();
          }
        }
      }
      // Draw neurons (fireflies)
      for (let i = 0; i < NEURON_COUNT; i++) {
        const n = neurons[i];
        // Glow effect
        const glow = ctx.createRadialGradient?.(n.x, n.y, 0, n.x, n.y, 18);
        if (glow) {
          glow.addColorStop(0, 'rgba(78,124,161,0.7)'); // water blue
          glow.addColorStop(0.4, 'rgba(78,124,161,0.18)');
          glow.addColorStop(1, 'rgba(78,124,161,0)');
          ctx.beginPath();
          ctx.arc(n.x, n.y, 18, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }
        // Core
        ctx.beginPath();
        ctx.arc(n.x, n.y, NEURON_RADIUS + 1.5 * Math.abs(Math.sin(n.phase)), 0, Math.PI * 2);
        ctx.fillStyle = '#4e7ca1'; // water blue
        ctx.shadowColor = '#4e7ca1';
        ctx.shadowBlur = 8;
        ctx.globalAlpha = 0.95;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }
    }

    function update() {
      for (let i = 0; i < NEURON_COUNT; i++) {
        const n = neurons[i];
        n.x += n.vx;
        n.y += n.vy;
        n.phase += 0.02 + Math.random() * 0.004; // slower phase
        // Bounce off edges
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        // Subtle random walk
        n.vx += (Math.random() - 0.5) * 0.03; // less jitter
        n.vy += (Math.random() - 0.5) * 0.03;
        n.vx = Math.max(-0.7, Math.min(0.7, n.vx));
        n.vy = Math.max(-0.7, Math.min(0.7, n.vy));
      }
    }

    function animate() {
      update();
      draw();
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

// Night garden silhouettes (bottom)
function GardenSilhouettes() {
  return (
    <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100vw+200px)] h-[22vh] min-h-40 z-10 select-none" viewBox="-100 0 2120 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Main garden hill - brighter green for sunrise */}
      <path d="M-100 220 Q 140 120 380 200 T 860 180 T 1340 210 T 1820 220 T 2020 200 T 2120 220 V 0 H-100Z" fill="#3a5c3a" />
      {/* More plants and grass clumps - lighter greens */}
      <ellipse cx="60" cy="200" rx="28" ry="60" fill="#4e7c4e" opacity="0.85" />
      <ellipse cx="380" cy="210" rx="18" ry="38" fill="#5fae5f" opacity="0.7" />
      <ellipse cx="960" cy="200" rx="32" ry="70" fill="#4e7c4e" opacity="0.8" />
      <ellipse cx="1540" cy="210" rx="22" ry="48" fill="#5fae5f" opacity="0.7" />
      <ellipse cx="1920" cy="200" rx="26" ry="56" fill="#4e7c4e" opacity="0.7" />
      {/* Decorative grass blades - lighter for sunrise */}
      <path d="M20 220 Q30 200 40 220" stroke="#7be87b" strokeWidth="3" />
      <path d="M600 220 Q610 200 620 220" stroke="#7be87b" strokeWidth="3" />
      <path d="M1200 220 Q1210 190 1220 220" stroke="#7be87b" strokeWidth="3" />
      <path d="M1820 220 Q1830 200 1840 220" stroke="#7be87b" strokeWidth="3" />
    </svg>
  );
}

// Flowing river (animated SVG path, full width, sits above the garden)
function FlowingRiver() {
  const riverRef = useRef<SVGPathElement>(null);
  useEffect(() => {
    let t = 0;
    let frame: number;
    function animate() {
      t += 0.008;
      const amplitude = 16;
      const baseY = 170;
      let d = `M0,${baseY}`;
      for (let x = 0; x <= 1920; x += 40) {
        const y = baseY + Math.sin(t + x / 120) * amplitude;
        d += ` Q${x + 20},${y + Math.cos(t + x / 80) * amplitude * 0.5} ${x + 40},${y}`;
      }
      if (riverRef.current) riverRef.current.setAttribute('d', d);
      frame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);
  return (
    <svg className="absolute bottom-0 left-0 w-full h-[22vh] min-h-40 z-20 select-none pointer-events-none" viewBox="0 0 1920 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path ref={riverRef} d="M0,170 Q40,170 80,170 ... 1920,170" stroke="#4e7ca1" strokeWidth="18" fill="none" opacity="0.7" />
      <path ref={riverRef} d="M0,190 Q40,190 80,190 ... 1920,190" stroke="#7ba7c9" strokeWidth="10" fill="none" opacity="0.4" />
    </svg>
  );
}