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
  const [activeSection, setActiveSection] = useState("home");


  // IDs we watch anywhere (home or standalone pages)
  const watchedSections = useMemo(
    () => [
      { id: "services-section", theme: "dark" },
      { id: "portfolio-section", theme: "light" },
      { id: "testimonials-section", theme: "dark" },
      { id: "contact-section", theme: "light" },
    ],
    []
  );

  // Helper: set initial theme if something is already in view on load
  const setInitialThemeIfAnyVisible = () => {
    const threshold = 0.2;
    for (const s of watchedSections) {
      const el = document.getElementById(s.id);
      if (!el) continue;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const visiblePx =
        Math.min(r.bottom, vh) - Math.max(r.top, 0); // overlap with viewport
      if (visiblePx / Math.min(vh, r.height || 1) >= threshold) {
        setTheme(s.theme);
        return true;
      }
    }
    return false;
  };

  // ID-based color transitions (works on mobile + desktop)
 useEffect(() => {
  const anySet = setInitialThemeIfAnyVisible();

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        // ✅ Theme swap (your existing logic)
        const match = watchedSections.find((w) => w.id === entry.target.id);
        if (match) setTheme(match.theme);

        // ✅ Section highlight update (NEW)
        setActiveSection(entry.target.id);
      });
    },
    {
      threshold: 0.35,
      rootMargin: "-80px 0px -35% 0px",
    }
  );

  watchedSections.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  });

if (!anySet) {
  if (pathname === "/contact") {
    setActiveSection("contact-section");
  } else if (pathname === "/careers") {
    setActiveSection("careers-page"); // Set the active ID for the careers page
  } else if (pathname === "/") {
    // Only set to home if we are ACTUALLY on the homepage
    setActiveSection("home-section");
  } else {
    // This clears the active link on all other pages (like /services/[slug])
    setActiveSection(null);
  }
}

  return () => io.disconnect();
}, [pathname, watchedSections]);


  // Styles
  const navStyles = {
    light: "bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm",
    dark: "bg-black/80 backdrop-blur-md border-b border-gray-800 shadow-lg",
  };

  const linkStyles = {
    light: "text-gray-700 hover:text-cyan-600",
    dark: "text-gray-300 hover:text-cyan-400",
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
  { name: "Careers", href: "/careers", id: "careers-page" }, // A new, unique ID for this page
  { name: "Testimonials", href: "/#testimonials-section", id: "testimonials-section" },
  { name: "Contact", href: "/contact", id: "contact-section" }, // Matches your existing logic
];

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
      activeSection === item.id // <-- SIMPLIFIED LOGIC
        ? "text-cyan-500 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]"
        : linkStyles[theme]
    }`}
  >
    {item.name}

    <span
      className={`
        absolute left-0 -bottom-1 h-[2px] w-full bg-cyan-500 rounded-full transition-all
        ${
          activeSection === item.id // <-- SIMPLIFIED LOGIC
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

      {/* Mobile trigger — Option 3: Glass “Menu” button */}
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
            <ul className="flex flex-col items-center gap-8 text-2xl font-semibold">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.name}
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
