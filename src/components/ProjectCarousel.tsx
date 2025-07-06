import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

// Example projects data
const projects = [
  {
    title: "VisionCraft",
    description: "Your camera, now with eyes that understand",
    stack: ["Python", "OpenCV", "Haar Cascades", "Canny Edge Detection"],
    details: "A real-time visual intelligence system built with OpenCV, this project transforms your camera into a smart vision agent. It doesn’t just detect faces — it captures smiles, eyes, and subtle features with remarkable accuracy. Paired with powerful edge detection, it highlights the unseen structure of any image or video feed. Whether it's for surveillance, artistic analysis, or foundational computer vision learning, this project delivers a seamless blend of speed, precision, and technical depth.",
    link: "https://github.com/MurluKrishna4352/Face-Detection",
  },
  {
    title: "Path Finder",
    description: "You’re more than your resume. Let’s prove it.",
    stack: [ "Next.js 15", "Tailwind CSS", "TypeScript","LLaMA 3" , "Ollama" , "Gemini Pro", "Supabase", "Vercel"],
    details: "Pathfinder is your AI-powered career companion. Designed for students, professionals, and curious minds, it transforms self-reflection into intelligent insights — guiding you toward career paths that align with your personality, interests, and aspirations.",
    link: "",
  },
  {
    title: "NodeFlow",
    description: "A smarter way to skip classes—find the fastest exit route.",
    stack: ["Java 11 Stream API", "JavaFX", "Maven", "JSON Parsing", "Git"],
    details: "PathMapper is a real-time, geospatial routing system built to simplify and optimize campus navigation. Designed with scalability and accuracy in mind, it leverages Dijkstra’s algorithm for shortest path calculation and processes real-world GPS data from JSON files using Maven-managed libraries. The sleek JavaFX interface visualizes routes dynamically, offering users an intuitive experience to get from point A to point B efficiently The project was engineered with a modular, object-oriented architecture that ensures high performance and adaptability to growing datasets or route complexities. It’s ideal for large institutions looking to assist students, faculty, or visitors with seamless indoor/outdoor routing across multiple blocks or buildings.",
    link: "#",
  },
  {
    title: "Intent GPT",
    description: "Your company’s financial truth — one query away",
    stack: ["GPT", "Transformers", "Flask", "Pandas", "Python", "Hugging Face"],
    details: "An NLP-based AI system that allows users to ask detailed questions about balance sheets, income statements, and cash flow reports. Designed for financial analysts, investors, and business owners, it delivers context-aware, jargon-friendly answers from financial documents.",
    link: "https://github.com/MurluKrishna4352/Intent-GPT",
  },
];

type Project = typeof projects[number];

const cardVariants = {
  initial: { y: 0, boxShadow: "0 4px 24px 0 rgba(60, 120, 80, 0.10)", scale: 1 },
  hover: {
    y: -8,
    scale: 1.03,
    boxShadow: "0 8px 32px 0 rgba(60, 120, 80, 0.18)",
    borderColor: "#74c69d",
    transition: { duration: 0.25 },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, scale: 0.95, y: 40, transition: { duration: 0.2 } },
};

const overlayVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: { opacity: 1, backdropFilter: "blur(6px)" },
  exit: { opacity: 0, backdropFilter: "blur(0px)" },
};

const ProjectCarousel: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // ESC key closes modal
  useEffect(() => {
    if (openIdx === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [openIdx]);

  // Focus close button when modal opens
  useEffect(() => {
    if (openIdx !== null && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [openIdx]);

  return (
    <div className="relative">
      {/* Grid overlay blur when modal open */}
      <motion.div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-300 ${openIdx !== null ? "pointer-events-none blur-sm opacity-40" : ""}`}
        aria-hidden={openIdx !== null}
      >
        {projects.map((project, idx) => (
          <motion.button
            key={project.title}
            className="group relative rounded-2xl p-6 bg-white/60 dark:bg-gray-900/60 border border-white/30 dark:border-gray-700/40 shadow-xl backdrop-blur-lg transition-all outline-none focus:ring-2 focus:ring-green-400"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            whileFocus="hover"
            onClick={() => setOpenIdx(idx)}
            aria-label={`Open details for ${project.title}`}
            tabIndex={openIdx === null ? 0 : -1}
            style={{ zIndex: 1 }}
          >
            <div className="flex flex-col gap-2">
              <h2 className="font-playfair text-2xl font-semibold text-green-900 dark:text-green-100 mb-1">
                {project.title}
              </h2>
              <p className="text-inter text-gray-700 dark:text-gray-200 text-base mb-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-green-100 dark:bg-green-800/60 text-green-900 dark:text-green-100 px-2 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-green-200 dark:border-green-700 pointer-events-none group-hover:shadow-green-300/40 group-hover:border-green-400 group-focus:border-green-400 transition-all duration-200"
              aria-hidden="true"
            />
          </motion.button>
        ))}
      </motion.div>
      {/* Modal overlay */}
      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            aria-modal="true"
            role="dialog"
            tabIndex={-1}
            onClick={() => setOpenIdx(null)}
          >
            <motion.div
              className="relative bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-2xl p-8 max-w-lg w-full mx-4 backdrop-blur-xl border border-white/30 dark:border-gray-700/40"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              onClick={e => e.stopPropagation()}
              role="document"
            >
              <button
                ref={closeBtnRef}
                className="absolute top-4 right-4 text-green-900 dark:text-green-100 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-full p-2 bg-white/60 dark:bg-gray-800/60"
                aria-label="Close project details"
                onClick={() => setOpenIdx(null)}
              >
                <FaTimes size={20} />
              </button>
              <h2 className="font-playfair text-3xl font-bold text-green-900 dark:text-green-100 mb-3">
                {projects[openIdx].title}
              </h2>
              <p className="text-inter text-gray-800 dark:text-gray-200 text-base mb-4">
                {projects[openIdx].details}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[openIdx].stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-green-100 dark:bg-green-800/60 text-green-900 dark:text-green-100 px-2 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={projects[openIdx].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-5 py-2 rounded-lg bg-green-500 text-white font-semibold shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                tabIndex={0}
                aria-label={`View full project: ${projects[openIdx].title}`}
              >
                View Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCarousel;
