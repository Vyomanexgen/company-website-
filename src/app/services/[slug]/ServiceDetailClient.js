"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  LayoutDashboard,
  Smartphone,
  Code,
  Users,
  MessageSquare,
  Check
} from "lucide-react";
import { useRef, useEffect } from "react";
const ICONS = {
  Palette,
  LayoutDashboard,
  Smartphone,
  Code,
  Users,
  MessageSquare,
};
import Footer from "@/app/components/Footer";
const THEMES = {
  pink: {
    heroGradient: "from-[#3a0b5c] via-[#2b0a4a] to-[#101827]",
    accentFrom: "from-pink-500",
    accentTo: "to-fuchsia-500",
  },
  blue: {
    heroGradient: "from-[#0b225c] via-[#0a1a4a] to-[#0b1220]",
    accentFrom: "from-blue-500",
    accentTo: "to-indigo-500",
  },
  violet: {
    heroGradient: "from-[#2b105c] via-[#1f0a4a] to-[#0b1220]",
    accentFrom: "from-violet-500",
    accentTo: "to-purple-500",
  },
  green: {
    heroGradient: "from-[#0b3a2a] via-[#0a2a1f] to-[#0b1220]",
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500",
  },
  gradient: {
    heroGradient: "from-[#0a2a27] via-[#1a1f4a] to-[#0b1220]",
    accentFrom: "from-teal-500",
    accentTo: "to-fuchsia-500",
  },

};

export default function ServiceDetailClient({ service }) {
  const [tab, setTab] = useState("Features");
  const T = THEMES[service.theme] || THEMES.violet;
  const Icon = ICONS[service.icon] || Palette;

  const tabs = ["Features", "Benefits", "Our Process"];
const tabRefs = useRef([]);
const [sliderStyle, setSliderStyle] = useState({ width: 0, left: 0 });

useEffect(() => {
  const activeIndex = tabs.indexOf(tab);
  const activeTab = tabRefs.current[activeIndex];

  if (activeTab) {
    const { offsetWidth, offsetLeft } = activeTab;
    setSliderStyle({ width: offsetWidth, left: offsetLeft });
  }
}, [tab]);
  return (
    <div className="text-gray-200">

      {/* HERO */}
      <section className={`pt-28 pb-20 px-6 bg-gradient-to-br ${T.heroGradient}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20"
          >
            <Icon className="w-8 h-8" />
          </motion.div>

          <motion.h1
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-6 text-4xl md:text-6xl font-bold"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-3 text-lg opacity-80"
          >
            {service.subtitle}
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
   {/* CONTENT */}
{/* CONTENT */}
<div className="bg-[#f1f4fa] py-20">
  <section className="max-w-5xl mx-auto px-6 text-gray-800">

  {/* TAB BAR */}
  <div className="flex justify-center mb-12">
    <div className="relative bg-white rounded-full px-2 py-2 flex items-center gap-1 shadow-sm">

      <motion.div
        className="absolute top-2 bottom-2 rounded-full bg-[#ffffff] shadow-md"
        layout
        animate={sliderStyle}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      />

      {tabs.map((item, index) => (
        <button
          key={item}
          ref={(el) => (tabRefs.current[index] = el)}
          onClick={() => setTab(item)}
          className={`relative z-10 px-6 py-2 text-sm font-medium rounded-full transition ${
            tab === item ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  </div>

  {/* ---- Tab Content (unchanged) ---- */}


  {/* TAB CONTENT WITH ANIMATED SWITCH */}
  <AnimatePresence mode="wait">
    <motion.div
      key={tab}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.35 }}
    >

      {/* FEATURES */}
      {/* {tab === "Features" && (
        <div className="grid md:grid-cols-2 gap-6">
          {service.features.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md flex items-center gap-3">
              <Check className="text-green-500" />
              <p className="text-gray-800 font-medium">{item}</p>
            </div>
          ))}
        </div>
      )} */}

    {tab === "Features" && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {service.features.map((item, i) => (
      <div
        key={i}
        className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition border border-gray-200"
      >
        <div className="flex items-start gap-3">
          <Check className="text-green-500 mt-1" />
          <p className="font-medium text-gray-800">{item}</p>
        </div>
      </div>
    ))}
  </div>
)}


      {/* BENEFITS */}
     {tab === "Benefits" && (
  <div className="grid md:grid-cols-2 gap-8">
    {service.benefits.map((b, i) => (
      <div
        key={i}
        className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition border border-gray-200 flex items-start gap-4"
      >
        {/* Gradient Icon Circle */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-lg font-semibold">
          {i + 1}
        </div>

        {/* Text */}
        <div>
          <p className="text-gray-800 font-semibold text-lg">{b.title}</p>
          <p className="text-gray-500 text-sm mt-1 leading-relaxed">{b.text}</p>
        </div>
      </div>
    ))}
  </div>
)}


      {/* PROCESS */}
      {tab === "Our Process" && (
        <div className="space-y-6">
          {service.process.map((step) => (
            <div key={step.step} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center font-bold">
                {step.step}
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900">{step.title}</p>
                <p className="text-gray-600 text-sm">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}

    </motion.div>
  </AnimatePresence>

</section>

</div>

{/* CTA Section */}
<section className="py-20 bg-gradient-to-br from-[#8A2BE2] via-[#C836FF] to-[#00D1FF] text-white text-center">

  <div className="max-w-3xl mx-auto px-6">

    <h3 className="text-lg font-medium mb-3 opacity-90">
      Ready to Get Started?
    </h3>

    <p className="text-2xl md:text-3xl font-semibold mb-8">
      Let’s discuss how our {service.title.toLowerCase()} services can help your business grow.
    </p>

    <div className="flex justify-center gap-4 flex-wrap">

      <a
        href="/contact"
        className="px-6 py-3 rounded-full bg-white text-gray-800 font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition inline-flex items-center gap-2"
      >
        Contact Us
        <span className="text-xl">→</span>
      </a>

      <a
        href="/projects"
        className="px-6 py-3 rounded-full bg-white/20 border border-white/40 text-white font-semibold backdrop-blur-md hover:bg-white/30 hover:shadow-lg transition inline-flex items-center gap-2"
      >
        View Portfolio
        <span className="text-xl">→</span>
      </a>

    </div>
  </div>
</section>
<Footer/>
    </div>
  );
}
