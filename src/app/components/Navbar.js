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
// }


"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";



const Logo = ({ className = "", theme = "light", logoStyles }) => (
  <Link
    href="/"
    className={`text-2xl md:text-3xl font-extrabold cursor-pointer ${logoStyles[theme]} ${className}`}
  >
    Vyomanexgen
  </Link>
);



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
  const section = document.getElementById("services-section");
  console.log("Found services-section:", section); // ✅ check if detected

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      console.log("Is services visible:", entry.isIntersecting); // ✅ check when switching
      setTheme(entry.isIntersecting ? "dark" : "light");
    },
    { threshold: 0.15 }
  );

  observer.observe(section);
  return () => observer.disconnect();
}, []);

useEffect(() => {
  const section = document.getElementById("services-section");
  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setTheme(entry.isIntersecting ? "dark" : "light");
    },
    {
      threshold: 0.05,          // Detect minimal visibility
      rootMargin: "-100px 0px -50% 0px" // Detect earlier (adjusts for navbar height)
    }
  );

  observer.observe(section);
  return () => observer.disconnect();
}, []);


  // ✅ Detect when Services section enters view
  useEffect(() => {
    const section = document.getElementById("services-section");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setTheme(entry.isIntersecting ? "dark" : "light");
      },
      { threshold: 0.25 } // change when 25% visible
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const navStyles = {
    light: "bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm",
    dark: "bg-gray-950/80 backdrop-blur-md border-b border-gray-700 shadow-lg",
  };

  const linkStyles = {
    light: "text-gray-700 hover:text-cyan-600",
    dark: "text-gray-300 hover:text-cyan-400",
  };

  const logoStyles = {
    light:
      "text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500",
    dark:
      "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400",
  };

  const mobileMenuStyles = {
    light: "bg-white shadow-2xl",
    dark: "bg-gray-950 shadow-2xl",
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-5 flex items-center justify-between transition-all duration-500 ${navStyles[theme]}`}
    >
      {/* Logo */}
      <Logo theme={theme} logoStyles={logoStyles} />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
  <ul className={`flex items-center gap-8 font-semibold ${linkStyles[theme]}`}>
    <li><Link href="/services">Services</Link></li>
    <li><Link href="/projects">Portfolio</Link></li>
    <li><Link href="/careers">Careers</Link></li>
    <li><Link href="/testimonials">Testimonials</Link></li>
    <li><Link href="/contact">Contact</Link></li>
  </ul>

<motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 rounded-md text-white font-semibold shadow-md hover:shadow-lg transition-all"
>
  Get Started
</motion.button>


      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2"
      >
        {menuOpen ? <X size={28} className={linkStyles[theme]} /> : <Menu size={28} className={linkStyles[theme]} />}
      </button>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 right-0 w-full h-screen flex flex-col items-center justify-start gap-12 p-8 md:hidden ${mobileMenuStyles[theme]}`}
          >
            {/* Close Button */}
            <div className="w-full flex justify-between items-center">
              <Logo theme={theme} logoStyles={logoStyles} />
              <button onClick={() => setMenuOpen(false)}>
                <X size={28} className={linkStyles[theme]} />
              </button>
            </div>

         <ul className="flex flex-col items-center gap-8 text-2xl font-semibold">
  <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
  <li><Link href="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
  <li><Link href="/careers" onClick={() => setMenuOpen(false)}>Careers</Link></li>
  <li><Link href="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
  <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
</ul>

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

