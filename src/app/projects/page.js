"use client";

import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Link from "next/link";

// --- Project Data ---
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web",
    date: "Dec 2025",
    image:
      "https://placehold.co/600x400/eff6ff/1e293b?text=E-Commerce+Platform",
    description:
      "A modern online shopping platform with secure payment and analytics.",
  },
  {
    id: 2,
    title: "Healthcare Mobile App",
    category: "Mobile",
    date: "Nov 2025",
    image: "https://placehold.co/600x400/fff7ed/1e293b?text=Healthcare+App",
    description:
      "A cross-platform mobile app for telemedicine and patient management.",
  },
  {
    id: 3,
    title: "Financial Dashboard UI",
    category: "Design",
    date: "Oct 2025",
    image:
      "https://placehold.co/600x400/f5f3ff/1e293b?text=Financial+Dashboard",
    description: "A clean, interactive UI design for business intelligence.",
  },
  {
    id: 4,
    title: "CRM Analytics Portal",
    category: "CRM",
    date: "Aug 2025",
    image: "https://placehold.co/600x400/ede9fe/1e293b?text=CRM+Portal",
    description:
      "A CRM portal with performance analytics and advanced reporting.",
  },
  {
    id: 5,
    title: "AI Chat Assistant",
    category: "AI",
    date: "Jul 2025",
    image:
      "https://placehold.co/600x400/ecfdf5/1e293b?text=AI+Chat+Assistant",
    description:
      "An intelligent GPT-powered chatbot for real-time customer support.",
  },
];

const categories = ["All", "Web", "Mobile", "Design", "CRM", "AI"];

const themeColors = {
  All: {
    gradient: "from-blue-500 via-sky-500 to-cyan-500",
    glow: "rgba(59,130,246,0.5)",
  },
  Web: {
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    glow: "rgba(168,85,247,0.5)",
  },
  Mobile: {
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    glow: "rgba(34,197,94,0.5)",
  },
  Design: {
    gradient: "from-pink-500 via-rose-500 to-red-500",
    glow: "rgba(236,72,153,0.5)",
  },
  CRM: {
    gradient: "from-indigo-500 via-blue-600 to-purple-600",
    glow: "rgba(79,70,229,0.5)",
  },
  AI: {
    gradient: "from-amber-500 via-orange-500 to-yellow-500",
    glow: "rgba(245,158,11,0.5)",
  },
};

// --- Glass Card ---
function GlassCard({ project, glowColor }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dx);
    y.set(dy);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.03,
        boxShadow: `0 0 40px ${glowColor}`,
      }}
      className="rounded-3xl overflow-hidden bg-white/30 backdrop-blur-xl border border-white/40 transition-all duration-500"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover rounded-t-3xl"
      />
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold uppercase tracking-wide">
            {project.category}
          </span>
          <span className="text-gray-500 text-sm">{project.date}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        <Link
          href="#"
          className="text-sm font-semibold text-purple-600 hover:underline"
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  );
}

// --- Main Page Component ---
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const theme = themeColors[activeCategory] || themeColors.All;
  const scrollRef = useRef(null);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter(
          (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
        );

  // ✅ Auto-scroll when tab changes
  useEffect(() => {
    const container = scrollRef.current;
    const activeBtn = container?.querySelector(".active-tab");
    if (container && activeBtn) {
      const containerRect = container.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      const offset =
        btnRect.left -
        containerRect.left -
        containerRect.width / 2 +
        btnRect.width / 2;
      container.scrollBy({ left: offset, behavior: "smooth" });
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      <Navbar theme="light" />

      {/* Hero Section */}
      <section className="pt-32 pb-12 text-center">
        <motion.h1
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore our portfolio of successful projects across industries
        </p>
      </section>

      {/* ✅ Enhanced Liquid Glass Tabs */}
      <div className="flex justify-center mb-12 px-4">
        <motion.div
          ref={scrollRef}
          layout
          className="flex overflow-x-auto no-scrollbar space-x-3 p-2 rounded-full bg-gradient-to-br from-white/50 via-white/20 to-white/10 backdrop-blur-2xl border border-white/50 shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] max-w-full"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              layout
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className={`relative px-6 py-3 flex-shrink-0 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "text-white active-tab"
                  : "text-gray-800 hover:text-black"
              }`}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="active-glass"
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${theme.gradient} shadow-lg`}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div
        key={activeCategory}
        className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <GlassCard
              key={project.id}
              project={project}
              glowColor={theme.glow}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* CTA Section with Buttons */}
      <motion.section
        className="mt-24 py-24 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-center text-white relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Let’s Create Something Amazing Together
          </motion.h2>
          <p className="text-lg mb-8">
            Ready to start your project? Get in touch with us today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="bg-white/30 backdrop-blur-xl border border-white/50 px-6 py-3 rounded-xl text-white font-semibold hover:bg-white/50 transition"
            >
              ← Back to Home
            </Link>
            <Link
              href="/contact"
              className="bg-white/30 backdrop-blur-xl border border-white/50 px-6 py-3 rounded-xl text-white font-semibold hover:bg-white/50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
