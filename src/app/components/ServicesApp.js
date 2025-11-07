"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  LayoutDashboard,
  Smartphone,
  Award,
  Code,
  ShoppingCart,
  Database,
  Zap,
  Apple,
  Play,
  Box,
  Rocket,
  Users,
  Workflow,
  BarChart3,
  TrendingUp,
  BrainCircuit,
  MessageSquare,
  Network,
  Figma,
  PenTool,
  MousePointer2,
  Accessibility,
} from "lucide-react";

// --- Theme Definitions ---
const colorThemes = {
  blue: {
    title: "text-blue-400",
    subtitle: "text-blue-300",
    tagBG: "bg-blue-900/40",
    tagText: "text-blue-300",
    tagBorder: "border-blue-700",
    iconBase: "bg-blue-900/30 text-blue-400 border-blue-700/50",
    iconHover:
      "hover:shadow-[0_0_20px_rgba(96,165,250,0.8)] hover:bg-blue-600 hover:text-white",
    placeholderBorder: "border-blue-500",
    placeholderShadow: "shadow-[0_0_20px_rgba(59,130,246,0.5)]",
    placeholderBG: "bg-blue-900/20",
  },
  pink: {
    title: "text-pink-400",
    subtitle: "text-pink-300",
    tagBG: "bg-pink-900/40",
    tagText: "text-pink-300",
    tagBorder: "border-pink-700",
    iconBase: "bg-pink-900/30 text-pink-400 border-pink-700/50",
    iconHover:
      "hover:shadow-[0_0_20px_rgba(244,114,182,0.8)] hover:bg-pink-600 hover:text-white",
    placeholderBorder: "border-pink-500",
    placeholderShadow: "shadow-[0_0_20px_rgba(236,72,153,0.5)]",
    placeholderBG: "bg-pink-900/20",
  },
  gradient: {
    title:
      "bg-gradient-to-r from-teal-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent",
    subtitle: "text-indigo-300",
    tagBG: "bg-indigo-900/40",
    tagText: "text-indigo-300",
    tagBorder: "border-indigo-700",
    iconBase: "bg-indigo-900/30 text-indigo-400 border-indigo-700/50",
    iconHover:
      "hover:shadow-[0_0_20px_rgba(129,140,248,0.8)] hover:bg-indigo-600 hover:text-white",
    placeholderBorder: "border-indigo-500",
    placeholderShadow: "shadow-[0_0_20px_rgba(129,140,248,0.5)]",
    placeholderBG: "bg-indigo-900/20",
  },
  violet: {
    title: "text-purple-400",
    subtitle: "text-purple-300",
    tagBG: "bg-purple-900/40",
    tagText: "text-purple-300",
    tagBorder: "border-purple-700",
    iconBase: "bg-purple-900/30 text-purple-400 border-purple-700/50",
    iconHover:
      "hover:shadow-[0_0_20px_rgba(192,132,252,0.8)] hover:bg-purple-600 hover:text-white",
    placeholderBorder: "border-purple-700",
    placeholderShadow: "shadow-[0_0_20px_rgba(168,85,247,0.5)]",
    placeholderBG: "bg-purple-900/20",
  },
  green: {
    title: "text-green-400",
    subtitle: "text-green-300",
    tagBG: "bg-green-900/40",
    tagText: "text-green-300",
    tagBorder: "border-green-700",
    iconBase: "bg-green-900/30 text-green-400 border-green-700/50",
    iconHover:
      "hover:shadow-[0_0_20px_rgba(74,222,128,0.8)] hover:bg-green-600 hover:text-white",
    placeholderBorder: "border-green-500",
    placeholderShadow: "shadow-[0_0_20px_rgba(74,222,128,0.5)]",
    placeholderBG: "bg-green-900/20",
  },
};


const WebDesignPlaceholder = ({ theme = 'blue' }) => {
  const themeClasses = colorThemes[theme] || colorThemes.blue;
  return (
    <motion.div
      className="relative w-full h-64 md:h-80 flex items-center justify-center p-4"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }} // REMOVED once: true
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Desktop Screen (Outline Style) */}
      <motion.div
        className={`absolute w-full max-w-lg h-full max-h-[250px] bg-transparent rounded-lg border-2 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} p-4`}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.3 }} // REMOVED once: true
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-full h-full flex gap-4">
          <div className={`w-1/4 h-full ${themeClasses.placeholderBG} rounded-lg`}></div>
          <div className="flex-1 h-full relative">
             <div className={`absolute top-2 right-2 w-2 h-20 ${themeClasses.placeholderBG} rounded-full`}></div>
          </div>
        </div>
      </motion.div>
      
      {/* Mobile Screen (Outline Style) */}
      <motion.div
        className={`absolute bottom-4 right-4 md:right-10 w-32 h-56 bg-transparent rounded-xl border-2 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} p-2.5`}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.3 }} // REMOVED once: true
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="w-full h-full bg-transparent rounded-lg p-2 space-y-2">
          <div className={`w-full h-5 ${themeClasses.placeholderBG} rounded`}></div>
          <div className={`w-full h-1/4 ${themeClasses.placeholderBG} rounded`}></div>
          <div className={`w-full h-1/4 ${themeClasses.placeholderBG} rounded`}></div>
          <div className={`w-full h-1/4 ${themeClasses.placeholderBG} rounded`}></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/**
 * 2. NEW Placeholder for "UI/UX Designing"
 */
const UiUxPlaceholder = ({ theme = 'pink' }) => {
  const themeClasses = colorThemes[theme] || colorThemes.pink;
  return (
    <motion.div
      className="relative w-full h-80 md:h-96 flex items-center justify-center p-4"
      initial={{ opacity: 0, x: -50 }} // Changed to x: -50 for alternating
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }} // REMOVED once: true
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Main Wireframe Board */}
      <motion.div
        className={`w-full h-full max-w-lg bg-transparent rounded-lg border-2 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} p-4 flex gap-4`}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.3 }} // REMOVED once: true
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Left Wireframe */}
        <motion.div 
          className={`w-1/2 h-full ${themeClasses.placeholderBG} rounded-lg p-3 space-y-3`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }} // REMOVED once: true
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="w-full h-8 bg-gray-800 rounded"></div>
          <div className="w-3/4 h-5 bg-gray-800 rounded"></div>
          <div className="w-full h-20 bg-gray-800 rounded"></div>
          <div className="flex gap-2">
            <div className="w-1/2 h-10 bg-gray-800 rounded"></div>
            <div className="w-1/2 h-10 bg-gray-800 rounded"></div>
          </div>
           <div className="w-full h-10 bg-gray-800 rounded"></div>
        </motion.div>
        {/* Right User Flow */}
        <motion.div 
          className="w-1/2 h-full flex flex-col items-center justify-center space-y-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }} // REMOVED once: true
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className={`w-24 h-16 ${themeClasses.placeholderBG} border-2 ${themeClasses.placeholderBorder} rounded-lg`}></div>
          <div className={`w-1 h-8 ${themeClasses.placeholderBG}`}></div>
          <div className={`w-24 h-16 ${themeClasses.placeholderBG} border-2 ${themeClasses.placeholderBorder} rounded-lg`}></div>
          <div className={`w-1 h-8 ${themeClasses.placeholderBG}`}></div>
          <div className={`w-24 h-16 ${themeClasses.placeholderBG} border-2 ${themeClasses.placeholderBorder} rounded-lg`}></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};


/**
 * 3. Placeholder for "Website Development"
 */
const BrowserPlaceholder = ({ theme = 'gradient' }) => {
  const themeClasses = colorThemes[theme] || colorThemes.gradient;
  return (
    <motion.div
      className="w-full h-64 md:h-80 flex items-center justify-center p-4"
      initial={{ opacity: 0, x: 50 }} // Changed to x: 50
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }} // REMOVED once: true
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className={`w-full h-full max-w-lg bg-transparent rounded-lg border-2 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} overflow-hidden`}>
        <div className="h-10 bg-gray-900 flex items-center p-3 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 flex-1 h-5 bg-gray-800 rounded flex items-center px-3">
            <span className="text-xs text-gray-500">https://your-website.com</span>
          </div>
        </div>
        <div className="p-4 bg-transparent h-full">
          <motion.div
            className="font-mono text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.3 }} // REMOVED once: true
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="mb-2"><span className="text-green-400">const</span> <span className="text-blue-400">App</span></p>
            <p><span className="text-yellow-400">=</span> () <span className="text-yellow-400">=&gt;</span> &#123;</p>
            <p className="ml-4"><span className="text-yellow-400">  return</span> (</p>
            <p className="ml-8 text-gray-400">&lt;<span className="text-blue-300">div</span>&gt;</p>
            <p className="ml-12 text-gray-400">&lt;<span className="text-blue-300">h1</span>&gt;Hello</p>
            <p className="ml-12 text-gray-400">World&lt;/<span className="text-blue-300">h1</span>&gt;</p>
            <p className="ml-8 text-gray-400">&lt;/<span className="text-blue-300">div</span>&gt;</p>
            <p className="ml-4"> );</p>
            <p>&#125;</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * 4. Placeholder for "Mobile App Development"
 */
const MobilePlaceholder = ({ theme = 'violet' }) => {
  const themeClasses = colorThemes[theme] || colorThemes.violet;
  return (
    <motion.div
      className="w-full h-64 md:h-96 flex items-center justify-center p-4"
      initial={{ opacity: 0, x: -50 }} // Changed to x: -50
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }} // REMOVED once: true
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className={`relative w-48 h-full max-h-96 bg-transparent rounded-3xl border-4 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} p-4`}>
        <div className={`absolute top-4 left-1/2 -translate-x-1/2 w-16 h-5 bg-transparent rounded-b-lg border-x-4 border-b-4 ${themeClasses.placeholderBorder}`}></div>
        <div className="w-full h-full bg-transparent rounded-lg mt-4 p-3 space-y-3">
          <div className="flex justify-between items-center text-xs font-semibold text-gray-300 px-1">
            <span>9:41</span>
            <div className="flex gap-1">
              <span className="w-4 h-2 bg-gray-700 rounded"></span>
              <span className="w-4 h-2 bg-gray-700 rounded"></span>
              <span className="w-4 h-2 bg-gray-700 rounded"></span>
            </div>
          </div>
          <div className={`w-3/4 h-8 ${themeClasses.placeholderBG} rounded-lg mx-auto mt-2`}></div>
          <div className="grid grid-cols-2 gap-3 pt-2">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-full h-16 ${themeClasses.placeholderBG} rounded-lg flex items-center justify-center text-purple-300 text-sm`}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.3 }} // REMOVED once: true
                transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
              >
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * 5. Placeholder for "CRM Development"
 */
const CrmPlaceholder = ({ theme = 'blue' }) => {
  const themeClasses = colorThemes[theme] || colorThemes.blue;
  const barHeights = ['h-2/5', 'h-3/5', 'h-4/5', 'h-2/5', 'h-3/4', 'h-3/5', 'h-2/3', 'h-5/6'];

  return (
    <motion.div
      className="w-full h-[400px] md:h-96 flex items-center justify-center p-4"
      initial={{ opacity: 0, x: 50 }} // Changed to x: 50
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }} // REMOVED once: true
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className={`w-full h-full max-w-lg bg-gray-900/40 rounded-lg border-2 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} p-4 space-y-4`}>
        {/* Header Stats - UPDATED to better match image */}
        <div className="flex gap-4 h-20">
          <div className={`flex-1 bg-blue-600 rounded-lg p-3 text-left`}>
            <p className="text-sm text-blue-100">Customers</p>
            <p className="text-2xl font-bold text-white">2,543</p>
          </div>
          <div className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-3 text-left">
            <p className="text-sm text-indigo-100">Conversion</p>
            <p className="text-2xl font-bold text-white">89%</p>
          </div>
          <div className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-3 text-left">
            <p className="text-sm text-purple-100">Revenue</p>
            <p className="text-2xl font-bold text-white">$45K</p>
          </div>
        </div>
        {/* Bar Chart - UPDATED to use solid blue */}
        <div className="h-40 w-full flex items-end justify-between px-2">
          {barHeights.map((height, i) => (
            <motion.div
              key={i}
              className={`w-[10%] ${height} bg-blue-500 rounded-t-sm`}
              initial={{ height: '0%' }}
              whileInView={{ height }}
              viewport={{ amount: 0.3 }} // REMOVED once: true
              transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
            ></motion.div>
          ))}
        </div>
        {/* Lead Tracking List */}
        <div className="space-y-3 pt-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-5 h-5 ${themeClasses.placeholderBG} rounded-full`}></div>
              <div className={`flex-1 h-3 ${themeClasses.placeholderBG} rounded-full`}></div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/**
 * 6. Placeholder for "AI Chatbots"
 */
const ChatbotPlaceholder = ({ theme = 'green' }) => {
  const themeClasses = colorThemes[theme] || colorThemes.green;
  return (
    <motion.div
      className="w-full h-[450px] md:h-[500px] flex items-center justify-center p-4"
      initial={{ opacity: 0, x: -50 }} // Changed to x: -50
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }} // REMOVED once: true
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className={`w-full h-full max-w-lg bg-gray-900/40 rounded-lg border-2 ${themeClasses.placeholderBorder} ${themeClasses.placeholderShadow} p-4 flex flex-col`}>
        {/* Header */}
        <div className={`w-full p-3 ${themeClasses.placeholderBG} rounded-lg flex items-center gap-3`}>
          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <BrainCircuit className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <p className="font-semibold text-white">AI Assistant</p>
            <p className="text-sm text-green-400">Online</p>
          </div>
        </div>
        
        {/* Chat Area */}
        <div className="flex-1 space-y-4 py-4 overflow-hidden">
          {/* Bubble Left */}
          <motion.div 
            className="flex justify-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }} // REMOVED once: true
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-3 bg-gray-800 rounded-lg rounded-bl-none max-w-xs text-sm">
              Hi! How can I help you today?
            </div>
          </motion.div>
          {/* Bubble Right */}
          <motion.div 
            className="flex justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }} // REMOVED once: true
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className={`p-3 ${themeClasses.placeholderBG} border ${themeClasses.placeholderBorder} rounded-lg rounded-br-none max-w-xs text-sm`}>
              I need information about your services
            </div>
          </motion.div>
          {/* Bubble Left with List */}
          <motion.div 
            className="flex justify-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }} // REMOVED once: true
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="p-3 bg-gray-800 rounded-lg rounded-bl-none max-w-xs text-sm space-y-2">
              <p>We offer comprehensive digital services including:</p>
              <ul className="list-disc list-inside text-gray-400 text-xs">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>AI Solutions</li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        {/* Input Bar */}
        <div className="h-12 bg-gray-800 rounded-lg flex items-center px-4 gap-3">
          <span className="text-gray-500 text-sm">Type a message...</span>
          <div className={`ml-auto w-8 h-8 rounded-full ${themeClasses.placeholderBG} border ${themeClasses.placeholderBorder} flex items-center justify-center`}>
            <SendIcon className="w-4 h-4 text-green-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
// Dummy SendIcon for the placeholder
const SendIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
  </svg>
);

// --- Service Data ---
// Added a `theme` key to each service object
const servicesData = [
  {
    id: 1,
    tag: 'Design Services',
    title: 'Web & Mobile Designing',
    subtitle: 'Stunning, user-centric designs that captivate and convert',
    theme: 'blue', // Added theme
    features: [
      {
        icon: Palette,
        title: 'Visual Design',
        description: 'Creating beautiful, modern interfaces.',
      },
      {
        icon: LayoutDashboard,
        title: 'Responsive Layouts',
        description: 'Seamless experiences across all devices',
      },
      {
        icon: Smartphone,
        title: 'Mobile-First',
        description: 'Optimized for touch and mobile interactions',
      },
      {
        icon: Award,
        title: 'Brand Identity',
        description: 'Cohesive visual systems that tell your story',
      },
    ],
    imageComponent: <WebDesignPlaceholder />,
    imagePosition: 'right',
  },
  // --- NEW SERVICE 2 ---
  {
    id: 2,
    tag: 'Design Services',
    title: 'UI/UX Research & Strategy',
    subtitle: 'Crafting intuitive experiences users love, backed by data',
    theme: 'pink',
    features: [
      {
        icon: MousePointer2,
        title: 'User Research',
        description: 'In-depth interviews, surveys, and analysis of user needs.',
      },
      {
        icon: PenTool,
        title: 'Wireframing & Prototyping',
        description: 'Interactive mockups that map out the user journey.',
      },
      {
        icon: Figma,
        title: 'High-Fidelity Design',
        description: 'Pixel-perfect visual designs ready for development.',
      },
      {
        icon: Accessibility,
        title: 'Accessibility Audits',
        description: 'Ensuring your product is usable by everyone.',
      },
    ],
    imageComponent: <UiUxPlaceholder />,
    imagePosition: 'left', // Alternating position
  },
  {
    id: 3,
    tag: 'Development Services',
    title: 'Website Development',
    subtitle: 'Powerful, scalable web applications built with modern technologies',
    theme: 'gradient', // Added theme
    features: [
      {
        icon: Code,
        title: 'Custom Development',
        description: 'Tailored solutions using React, Next.js, Node.js',
      },
      {
        icon: ShoppingCart,
        title: 'E-Commerce Solutions',
        description: 'Full-featured online stores with payment integration',
      },
      {
        icon: Database,
        title: 'CMS Integration',
        description: 'Easy content management with headless CMS',
      },
      {
        icon: Zap,
        title: 'Performance Optimized',
        description: 'Lightning-fast load times and SEO-ready',
      },
    ],
    imageComponent: <BrowserPlaceholder />,
    imagePosition: 'right', // Alternating position
  },
  {
    id: 4,
    tag: 'Mobile Solutions',
    title: 'Mobile App Development',
    subtitle: 'Native and cross-platform apps that users love',
    theme: 'violet', // Added theme
    features: [
      {
        icon: Apple,
        title: 'iOS Development',
        description: 'Swift & SwiftUI apps for iPhone and iPad',
      },
      {
        icon: Play,
        title: 'Android Development',
        description: 'Kotlin apps optimized for all Android devices',
      },
      {
        icon: Box,
        title: 'Cross-Platform',
        description: 'React Native & Flutter for multi-platform reach',
      },
      {
        icon: Rocket,
        title: 'App Store Ready',
        description: 'Complete deployment & optimization support',
      },
    ],
    imageComponent: <MobilePlaceholder />,
    imagePosition: 'left', // Alternating position
  },
  // --- NEW SERVICE 5 ---
  {
    id: 5,
    tag: 'CRM Solutions',
    title: 'CRM Development',
    subtitle: 'Powerful customer relationship management tailored to your workflow',
    theme: 'blue', // Re-using blue theme for text/icons
    features: [
      {
        icon: Users,
        title: 'Contact Management',
        description: 'Centralized customer database with complete history',
      },
      {
        icon: Workflow,
        title: 'Sales Automation',
        description: 'Streamlined workflows and pipeline management',
      },
      {
        icon: BarChart3,
        title: 'Analytics & Reports',
        description: 'Real-time insights and performance metrics',
      },
      {
        icon: TrendingUp,
        title: 'Lead Tracking',
        description: 'Automated lead scoring and nurturing',
      },
    ],
    imageComponent: <CrmPlaceholder />,
    imagePosition: 'right', // Alternating position
  },
  // --- NEW SERVICE 6 ---
  {
    id: 6,
    tag: 'AI Solutions',
    title: 'AI Chatbots / WhatsApp Bots',
    subtitle: 'Intelligent conversational AI that engages customers 24/7',
    theme: 'green', // Using new green theme
    features: [
      {
        icon: BrainCircuit,
        title: 'Natural Language AI',
        description: 'GPT-powered conversations that understand context',
      },
      {
        icon: MessageSquare,
        title: 'WhatsApp Integration',
        description: 'Seamless integration with WhatsApp Business API',
      },
      {
        icon: Zap,
        title: 'Instant Responses',
        description: '24/7 automated customer support and engagement',
      },
      {
        icon: Network,
        title: 'Multi-Channel',
        description: 'Deploy across web, mobile, and messaging platforms',
      },
    ],
    imageComponent: <ChatbotPlaceholder />,
    imagePosition: 'left', // Alternating position
  },
];

// --- Feature Item Component ---
// Now accepts a `theme` prop to style the icon
const FeatureItem = ({ icon: Icon, title, description, theme = 'violet' }) => {
  const themeClasses = colorThemes[theme] || colorThemes.violet;
  return (
    <div
      className="flex items-start gap-4 p-4 rounded-lg cursor-pointer"
    >
      {/* Icon with its own hover effect, styled by theme */}
      <motion.div
        className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${themeClasses.iconBase}`}
        whileHover={{
          scale: 1.15,
        }}
        
        transition={{ type: 'spring', stiffness: 300 }}
      >
      
        <motion.div 
          className={`w-full h-full flex items-center justify-center rounded-lg ${themeClasses.iconHover}`}
        >
          <Icon className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Text Content (no hover effect) */}
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

// --- Main Services Component ---
export default function ServicesApp() {
  return (
  <div id="services-section" className="min-h-screen bg-gray-950 text-gray-200 font-inter p-8 pt-32 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* UPDATED: Title changed to "Services" with new blue/violet gradient and hover effect */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
        >
          Services
        </motion.h1>

        <div className="space-y-24 md:space-y-32">
          {servicesData.map((service) => {
            // Get the theme classes for the current service
            const theme = colorThemes[service.theme] || colorThemes.violet;
            
            return (
              <motion.section
                key={service.id}
                className={`flex flex-col ${
                  service.imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-12 md:gap-16`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }} // REMOVED once: true
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                {/* FIX: This container has 'text-center' to center the tag,
                  title, and subtitle on all screen sizes, as you requested.
                  UPDATED: Width changed back to md:w-1/2
                */}
                <div className="w-full md:w-1/2 space-y-4 text-center">
                  <span className={`inline-block px-4 py-1 text-sm font-medium ${theme.tagBG} ${theme.tagText} ${theme.tagBorder} rounded-full`}>
                    {service.tag}
                  </span>
                  <h2 className={`text-3xl md:text-4xl font-bold ${theme.title}`}>
                    {service.title}
                  </h2>
                  <p className={`text-lg ${theme.subtitle}`}>
                    {service.subtitle}
                  </p>
                  
                  {/* Features List (remains left-aligned) */}
                  <div className="space-y-6 pt-6 text-left">
                    {service.features.map((feature) => (
                      <FeatureItem
                        key={feature.title}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        theme={service.theme} // Pass the theme
                      />
                    ))}
                  </div>
                </div>

                {/* Right Side (Image/Placeholder) 
                  UPDATED: Width changed back to md:w-1/2
                */}
                <div className="w-full md:w-1/2 min-h-[300px] md:min-h-[500px] flex items-center justify-center">
                  {/* We must use React.cloneElement to add props to an existing element */}
                  {React.cloneElement(service.imageComponent, { theme: service.theme })}
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </div>
  );
  
}

