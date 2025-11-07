"use client";

// 1. Remove useAnimation and useEffect
import { motion } from "framer-motion";
// No longer need: import { useEffect } from "react";

export default function Hero() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const floating = {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // 2. Remove controls and useEffect logic
  // const controls = useAnimation();
  // useEffect(() => {
  //   controls.start("visible");
  // }, [controls]);

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-44 px-5">
        <motion.h1
          variants={fadeInLeft}
          initial="hidden"
          // 3. Change animate to whileInView
          whileInView="visible"
          // 4. Add viewport to trigger every time
          viewport={{ amount: 0.3 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-2 font-[Poppins]"
        >
          <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-md">
            Transform Your Vision
          </span>
        </motion.h1>

        <motion.h1
          variants={fadeInRight}
          initial="hidden"
          // 3. Change animate to whileInView
          whileInView="visible"
          // 4. Add viewport to trigger every time
          viewport={{ amount: 0.3 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 font-[Poppins]"
        >
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent drop-shadow-md">
            Into Digital Reality
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          // 3. Change animate to whileInView
          whileInView={{ opacity: 1, y: 0 }}
          // 4. Add viewport to trigger every time
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 max-w-2xl text-lg md:text-xl mb-10"
        >
          We craft stunning, innovative digital experiences that empower your business to grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          // 3. Change animate to whileInView
          whileInView={{ opacity: 1, y: 0 }}
          // 4. Add viewport to trigger every time
          viewport={{ amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap gap-6 justify-center"
        >
          <motion.button href="/services"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            // This is an infinite loop, so 'animate' is correct here
            animate={{ scale: [1, 1.05, 1] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg text-lg font-semibold text-white shadow-md"
          >
            Explore Services
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            // This is an infinite loop, so 'animate' is correct here
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="border border-cyan-500 px-8 py-3 rounded-lg text-lg font-semibold text-cyan-600 hover:bg-cyan-50"
          >
            Let’s Talk 💬
          </motion.button>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="mt-32 pb-20 flex flex-wrap justify-center gap-8 px-8">
        {[
          { title: "98%", subtitle: "Client Satisfaction", dir: "left" },
          { title: "50+", subtitle: "Expert Team", dir: "left" },
          { title: "24/7", subtitle: "Support", dir: "right" },
          { title: "100+", subtitle: "Projects Delivered", dir: "right" },
        ].map((card, index) => (
          <motion.div
            key={index}
            variants={card.dir === "left" ? fadeInLeft : fadeInRight}
            initial="hidden"
            // 3. Change animate to whileInView
            whileInView="visible"
            // 4. Add viewport to trigger every time
            viewport={{ amount: 0.3 }}
            whileHover={{ scale: 1.08, boxShadow: "0px 0px 20px rgba(56,189,248,0.5)" }}
            transition={{ duration: 0.6 }}
            className="w-48 h-32 bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center shadow-lg"
          >
            {/* This is an infinite loop, so 'animate' is correct here */}
            <motion.div animate={floating}>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600">
                {card.title}
              </h3>
              <p className="text-gray-600 mt-1 font-semibold text-sm text-center">
                {card.subtitle}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
