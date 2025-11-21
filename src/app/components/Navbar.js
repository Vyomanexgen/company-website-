// "use client";
// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link"; 

// const Logo = ({ className = "", theme = "light", logoStyles }) => (
//   <Link
//     href="/"
//     className={`text-2xl md:text-3xl font-extrabold cursor-pointer ${logoStyles[theme]} ${className} min-w-0 truncate`}
//   >
//     Vyomanexgen
//   </Link>
// );

// export default function Navbar({ theme = "light" }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navStyles = {
//     light: "bg-white/70 backdrop-blur-md border-gray-200 shadow-sm",
//     dark: "bg-gray-950/80 backdrop-blur-md border-gray-700 shadow-lg",
//   };

//   const linkStyles = {
//     light: "text-gray-700 hover:text-cyan-600",
//     dark: "text-gray-300 hover:text-cyan-400",
//   };

//   const mobileIconColor = {
//     light: "text-gray-900",
//     dark: "text-white",
//   };

//   const logoStyles = {
//     light: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500",
//     dark: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400",
//   };

//   const mobileMenuStyles = {
//     light: "bg-white shadow-2xl",
//     dark: "bg-gray-950 shadow-2xl",
//   };

//   const mobileLinkStyles = {
//     light: "text-gray-700 hover:text-cyan-600",
//     dark: "text-gray-300 hover:text-cyan-400",
//   };

//   const mobileCloseIconColor = {
//     light: "text-gray-700 hover:text-black",
//     dark: "text-gray-400 hover:text-white",
//   };

//   const menuVariants = {
//     hidden: { opacity: 0, x: "100%" },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
//     exit: { opacity: 0, x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-5 flex items-center justify-between transition-all duration-300 ${navStyles[theme]}`}>
      
//       {/* ✅ Logo */}
//       <Logo theme={theme} logoStyles={logoStyles} />

//       {/* ✅ Desktop Menu */}
//       <div className="hidden md:flex items-center gap-10">
//         <ul className={`flex items-center gap-8 font-semibold ${linkStyles[theme]}`}>
//           <li><Link href="/services">Services</Link></li>
//           <li><Link href="/portfolio">Portfolio</Link></li>

//           {/* ✅ Careers added */}
//           <li><Link href="/careers">Careers</Link></li>

//           <li><Link href="/testimonials">Testimonials</Link></li>
//           <li><Link href="/contact">Contact</Link></li>
//         </ul>

//         <motion.button
//           whileHover={{ scale: 1.08 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 rounded-md text-white font-semibold shadow-md hover:shadow-lg transition-all"
//         >
//           Get Started
//         </motion.button>
//       </div>

//       {/* ✅ Mobile Menu Button */}
//       <div className="md:hidden flex items-center mr-4">
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className={`${mobileIconColor[theme]} focus:outline-none p-2 rounded-md`}
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* ✅ Mobile Slide Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className={`fixed top-0 right-0 w-full h-screen flex flex-col items-center justify-start gap-12 p-8 md:hidden ${mobileMenuStyles[theme]}`}
//           >
            
//             {/* Close + Logo */}
//             <div className="w-full flex justify-between items-center">
//               <Logo theme={theme} logoStyles={logoStyles} />
//               <button
//                 onClick={() => setMenuOpen(false)}
//                 className={`${mobileCloseIconColor[theme]} p-2 rounded-md`}
//               >
//                 <X size={28} />
//               </button>
//             </div>

//             {/* Mobile Links */}
//             <motion.ul
//               className={`flex flex-col items-center justify-center gap-8 text-2xl font-semibold`}
//               variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
//               initial="hidden"
//               animate="visible"
//             >
//               <motion.li variants={itemVariants}><Link href="/services" onClick={() => setMenuOpen(false)} className={mobileLinkStyles[theme]}>Services</Link></motion.li>
//               <motion.li variants={itemVariants}><Link href="/portfolio" onClick={() => setMenuOpen(false)} className={mobileLinkStyles[theme]}>Portfolio</Link></motion.li>

//               {/* ✅ Careers added */}
//               <motion.li variants={itemVariants}><Link href="/careers" onClick={() => setMenuOpen(false)} className={mobileLinkStyles[theme]}>Careers</Link></motion.li>

//               <motion.li variants={itemVariants}><Link href="/testimonials" onClick={() => setMenuOpen(false)} className={mobileLinkStyles[theme]}>Testimonials</Link></motion.li>
//               <motion.li variants={itemVariants}><Link href="/contact" onClick={() => setMenuOpen(false)} className={mobileLinkStyles[theme]}>Contact</Link></motion.li>
//             </motion.ul>

//             <motion.button
//               variants={itemVariants}
//               whileHover={{ scale: 1.08 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-md text-white font-semibold shadow-md hover:shadow-lg transition-all"
//             >
//               Get Started
//             </motion.button>

//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
//}



"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";


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
      <div className="flex items-center gap-4">
         {/* Call */}
  <motion.a
    href="tel:+917358105293"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-md text-white font-semibold shadow-md"
  >
    <FaPhoneAlt size={16} />
    Call
  </motion.a>

  {/* WhatsApp */}
  <motion.a
    href="https://wa.me/917358105293?text=Hello%20Vyomanexgen%2C%20I%20want%20to%20know%20more."
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-md text-white font-semibold shadow-md"
  >
    <FaWhatsapp size={18} />
    WhatsApp
  </motion.a>

 

</div>

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
           className={`fixed top-0 right-0 w-full h-screen overflow-y-auto flex flex-col p-6 pt-14 ${mobileMenuStyles[theme]} md:hidden`}


            //className={`fixed top-0 right-0 w-full h-screen flex flex-col items-center gap-10 p-10 ${mobileMenuStyles[theme]} md:hidden`}
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
          <ul className="flex flex-col items-center gap-6 text-2xl font-semibold mt-4 mb-6">

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
           <div className="flex flex-col items-center gap-4 mb-10 w-full">

  {/* WhatsApp Mobile */}
  <motion.a
    href="https://wa.me/917358105293?text=Hello%20Vyomanexgen%2C%20I%20want%20to%20know%20more."
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-md text-white font-semibold shadow-md justify-center w-[70%] max-w-[260px]"
  >
    <FaWhatsapp size={20} />
    WhatsApp
  </motion.a>

  {/* Call Mobile */}
  <motion.a
    href="tel:+917358105293"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-md text-white font-semibold shadow-md justify-center w-[70%] max-w-[260px]"
  >
    <FaPhoneAlt size={18} />
    Call
  </motion.a>

</div>


          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}