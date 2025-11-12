"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = ({ theme, logoStyles }) => (
  <Link
    href="/"
    className={`text-xl md:text-3xl font-extrabold cursor-pointer ${logoStyles[theme]}`}
  >
    Vyomanexgen
  </Link>
);

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light"); // "light" | "dark"
  const [activeSection, setActiveSection] = useState("home-section"); // Default to home

  // *** IMPORTANT ***
  // Ensure your Hero section component has id="home-section"
  const watchedSections = useMemo(
    () => [
      { id: "home-section", theme: "light" },
      { id: "services-section", theme: "dark" },
      { id: "portfolio-section", theme: "light" },
      { id: "testimonials-section", theme: "dark" },
    ],
    []
  );

  // Styles (No change here)
  const navStyles = {
    light: "bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm",
    dark: "bg-black/80 backdrop-blur-md border-b border-gray-800 shadow-lg",
  };
 const linkStyles = {
    light: "text-gray-700 hover:text-cyan-600",
    dark: "text-gray-100 hover:text-cyan-300", // <-- MUCH BRIGHTER (was gray-300)
  };
  const logoStyles = {
    light:
      "text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500",
    dark:
      "text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300",
  };
  const mobileMenuStyles = {
    light: "bg-white",
    dark: "bg-black",
  };

  const navLinks = [
    { name: "Home", href: "/", id: "home-section" },
    { name: "Services", href: "/#services-section", id: "services-section" },
    { name: "Portfolio", href: "/#portfolio-section", id: "portfolio-section" },
    { name: "Careers", href: "/careers", id: "careers-page" },
    { name: "Testimonials", href: "/#testimonials-section", id: "testimonials-section" },
    { name: "Contact", href: "/contact", id: "contact-section" },
  ];

  // --- START OF NEW LOGIC ---

  const NAVBAR_HEIGHT = 80; // Estimated px height of your nav. Adjust if needed.

  // HOOK 1: Handles standalone pages (Careers, Contact, etc.)
  useEffect(() => {
    let newActive = null;
    let newTheme = "light"; // Default theme for standalone pages

    if (pathname === "/contact") {
      newActive = "contact-section";
      newTheme = "light";
    } else if (pathname === "/careers") {
      newActive = "careers-page";
      newTheme = "light"; // Or "dark" if you prefer
    } else if (pathname.startsWith("/services/")) {
      // Example for sub-pages
      newActive = "services-section";
      newTheme = "dark";
    } else if (pathname === "/") {
      // We are on the homepage
      newActive = "home-section";
      newTheme = "light";
    }

    setActiveSection(newActive);
    setTheme(newTheme);
  }, [pathname]);

  // HOOK 2: Handles scroll-spy for homepage sections
  useEffect(() => {
    // Only run this scroll-spy logic on the homepage
    if (pathname !== "/") return;

    // Set default for homepage load
    setActiveSection("home-section");
    setTheme("light");

    const io = new IntersectionObserver(
      (entries) => {
        // Find all sections that are currently visible (intersecting)
        const visibleEntries = entries.filter((e) => e.isIntersecting);

        if (visibleEntries.length === 0) {
          // If nothing is visible (e.g., in a gap), don't change anything
          return;
        }

        // --- This is the new, robust logic ---
        // Find the entry that is CLOSEST to the navbar's bottom edge
        const [bestMatch] = visibleEntries.sort(
          (a, b) =>
            Math.abs(a.boundingClientRect.y - NAVBAR_HEIGHT) -
            Math.abs(b.boundingClientRect.y - NAVBAR_HEIGHT)
        );

        // Find the matching theme/ID from our watchedSections array
        const match = watchedSections.find(
          (w) => w.id === bestMatch.target.id
        );

        if (match) {
          setActiveSection(match.id);
          setTheme(match.theme);
        }
      },
      {
        // A sensitive margin to create a "trigger window"
        // It watches the top 60% of the screen, starting from below the navbar
        rootMargin: `-${NAVBAR_HEIGHT}px 0px -40% 0px`,
        // Fire as soon as any part of it enters this window
        threshold: 0,
      }
    );

    // Observe all the sections from our array
    watchedSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    // Cleanup
    return () => io.disconnect();
  }, [pathname, watchedSections]); // Re-run only if path or sections change

  // --- END OF NEW LOGIC ---

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-5 flex items-center justify-between transition-all duration-500 ${navStyles[theme]}`}
    >
      {/* Logo */}
      <Logo theme={theme} logoStyles={logoStyles} />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <ul className="flex items-center gap-8 font-semibold">
          {navLinks.map((item) => (
            <li key={item.href} className="group">
              <Link
                href={item.href}
                className={`relative pb-1 transition-all ${
                  activeSection === item.id // <-- This logic is correct
                    ? "text-cyan-500 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]"
                    : linkStyles[theme]
                }`}
              >
                {item.name}

                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] w-full bg-cyan-500 rounded-full transition-all
                    ${
                      activeSection === item.id // <-- This logic is correct
                        ? "scale-x-100 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]"
                        : "scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Get Started (desktop) */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 rounded-md text-white font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Get Started
        </motion.button>
      </div>

      {/* Mobile trigger */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden px-4 py-2 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 text-cyan-400 hover:bg-white/20 transition"
      >
        Menu
      </button>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className={`fixed top-0 right-0 w-full h-screen flex flex-col items-center gap-10 p-10 ${mobileMenuStyles[theme]} md:hidden`}
          >
            {/* Top bar */}
            <div className="w-full flex justify-between items-center">
              <Logo theme={theme} logoStyles={logoStyles} />
              <button
                onClick={() => setMenuOpen(false)}
                className="text-cyan-400 text-lg px-4 py-2"
              >
                ✕
              </button>
            </div>

            {/* Links */}
           {/* Links */}
          <ul className="flex flex-col items-center gap-8 text-2xl font-semibold">
            {navLinks.map((item) => (
              <li key={item.href} className="group">
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`relative transition-all ${
                    activeSection === item.id
                      ? theme === "light"
                        ? "text-cyan-500" // Active light
                        : "text-cyan-300" // Active dark
                      : linkStyles[theme] // Inactive (uses text-gray-100 on dark)
                  }`}
                >
                  {item.name}
                  {/* Optional: Add underline for mobile active link */}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px] w-full
                      ${theme === 'light' ? 'bg-cyan-500' : 'bg-cyan-300'}
                      ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0'}
                    `}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

            {/* Get Started (mobile) */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-md text-white font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
