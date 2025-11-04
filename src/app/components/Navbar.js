// "use client";
// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 px-6 md:px-12 py-5 flex justify-between items-center shadow-sm">
//       {/* Logo */}
//       <div className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 cursor-pointer">
//         Vyomanexgen
//       </div>

//       {/* Desktop Nav */}
//       <ul className="hidden md:flex items-center gap-8 text-gray-700 font-semibold">
//         <li className="hover:text-cyan-600 transition-all cursor-pointer">About</li>
//         <li className="hover:text-cyan-600 transition-all cursor-pointer">Services</li>
//         <li className="hover:text-cyan-600 transition-all cursor-pointer">Portfolio</li>
//         <li className="hover:text-cyan-600 transition-all cursor-pointer">Testimonials</li>
//         <li className="hover:text-cyan-600 transition-all cursor-pointer">Contact</li>
//       </ul>

//       {/* Desktop Button */}
//       <motion.button
//         whileHover={{ scale: 1.08 }}
//         whileTap={{ scale: 0.95 }}
//         className="hidden md:block bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 rounded-md text-white font-semibold shadow-md hover:shadow-lg transition-all"
//       >
//         Get Started
//       </motion.button>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden">
//         <button onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <motion.div
//           variants={menuVariants}
//           initial="hidden"
//           animate="visible"
//           className="absolute top-0 left-0 w-full h-screen bg-white/95 flex flex-col items-center justify-center gap-8 text-lg font-semibold text-gray-700 md:hidden"
//         >
//           <button
//             onClick={() => setMenuOpen(false)}
//             className="absolute top-6 right-6 text-gray-700"
//           >
//             <X size={28} />
//           </button>

//           <Link href="#about" onClick={() => setMenuOpen(false)}>
//             About
//           </Link>
//           <Link href="#services" onClick={() => setMenuOpen(false)}>
//             Services
//           </Link>
//           <Link href="#portfolio" onClick={() => setMenuOpen(false)}>
//             Portfolio
//           </Link>
//           <Link href="#testimonials" onClick={() => setMenuOpen(false)}>
//             Testimonials
//           </Link>
//           <Link href="#contact" onClick={() => setMenuOpen(false)}>
//             Contact
//           </Link>

//           <motion.button
//             whileHover={{ scale: 1.08 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-md text-white font-semibold shadow-md hover:shadow-lg transition-all"
//           >
//             Get Started
//           </motion.button>
//         </motion.div>
//       )}
//     </nav>
//   );
// }


"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// MODIFICATION 1:
// Added `min-w-0` to allow the flex item to shrink
// Added `truncate` to add "..." if the text is too long for the container
const Logo = ({ className = "", theme = "light", logoStyles }) => (
    <div
        className={`text-2xl md:text-3xl font-extrabold cursor-pointer ${logoStyles[theme]} ${className} min-w-0 truncate`}
    >
        {/* MODIFICATION 6: Updated Logo text */}
        Vyomanexgen
    </div>
);

export default function Navbar({ theme = "light" }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const navStyles = {
        light: "bg-white/70 backdrop-blur-md border-gray-200 shadow-sm",
        dark: "bg-gray-950/80 backdrop-blur-md border-gray-700 shadow-lg",
    };

    const linkStyles = {
        light: "text-gray-700 hover:text-cyan-600",
        dark: "text-gray-300 hover:text-cyan-400",
    };

    const mobileIconColor = {
        light: "text-gray-900",
        dark: "text-white",
    };

    const logoStyles = {
        light: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500",
        dark: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400",
    };

    const mobileMenuStyles = {
        light: "bg-white shadow-2xl",
        dark: "bg-gray-950 shadow-2xl",
    };

    const mobileLinkStyles = {
        light: "text-gray-700 hover:text-cyan-600",
        dark: "text-gray-300 hover:text-cyan-400",
    };

    const mobileCloseIconColor = {
        light: "text-gray-700 hover:text-black",
        dark: "text-gray-400 hover:text-white",
    };

    const menuVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
        exit: { opacity: 0, x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <nav
            // MODIFICATION 2: Added `w-full`
            // MODIFICATION 7: Increased vertical padding from py-4 to py-5 for more height
            className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-5 flex items-center justify-between transition-all duration-300 ${navStyles[theme]}`}
        >
            {/* Left side: Logo */}
            <Logo theme={theme} logoStyles={logoStyles} />

            {/* Right side: Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
                <ul className={`flex items-center gap-8 font-semibold ${linkStyles[theme]}`}>
                    <li className="cursor-pointer transition-all">Services</li>
                    <li className="cursor-pointer transition-all">Portfolio</li>
                    <li className="cursor-pointer transition-all">Testimonials</li>
                    <li className="cursor-pointer transition-all">Contact</li>
                </ul>

                <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 rounded-md text-white font-semibold shadow-md hover:shadow-lg transition-all"
                >
                    Get Started
                </motion.button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center mr-4">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    // MODIFICATION 4: Added p-2 and rounded-md for a larger tap target
                    className={`${mobileIconColor[theme]} focus:outline-none p-2 rounded-md`}
                >
                    {/* MODIFICATION 5: Increased icon size slightly */}
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        // MODIFICATION 3: Removed `max-w-xs`
                        className={`fixed top-0 right-0 w-full h-screen flex flex-col items-center justify-start gap-12 p-8 md:hidden ${mobileMenuStyles[theme]}`}
                    >
                        {/* Header in menu */}
                        <div className="w-full flex justify-between items-center">
                            <Logo theme={theme} logoStyles={logoStyles} />
                            <button
                                // Also added padding here for consistency
                                onClick={() => setMenuOpen(false)}
                                className={`${mobileCloseIconColor[theme]} p-2 rounded-md`}
                            >
                                <X size={28} />
                            </button>
                        </div>

                        <motion.ul
                            className={`flex flex-col items-center justify-center gap-8 text-2xl font-semibold ${mobileLinkStyles[theme]}`}
                            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.li variants={itemVariants}>
                                {/* <a href="#about" onClick={() => setMenuOpen(false)} className={mobileLinkStyles[theme]}>
                                    About
                                </a> */}
                            </motion.li>
                            <motion.li variants={itemVariants}>
                                <a href="#services" onClick={() => setMenuOpen(false)} className={mobileLinkStyles[theme]}>
                                    Services
                                </a>
                            </motion.li>
                            <motion.li variants={itemVariants}>
                                <a href="#portfolio" onClick={() => setMenuOpen(false)} className={mobileLinkStyles[theme]}>
                                    Portfolio
                                </a>
                            </motion.li>
                            <motion.li variants={itemVariants}>
                                <a href="#testimonials" onClick={() => setMenuOpen(false)} className={mobileLinkStyles[theme]}>
                                    Testimonials
                                </a>
                            </motion.li>
                            <motion.li variants={itemVariants}>
                                <a href="#contact" onClick={() => setMenuOpen(false)} className={mobileLinkStyles[theme]}>
                                    Contact
                                </a>
                            </motion.li>
                        </motion.ul>

                        <motion.button
                            variants={itemVariants}
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

