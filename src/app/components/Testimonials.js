"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const testimonials = [
  {
    name: "David Jones",
    text: "Amazing service! The team was professional and delivered beyond expectations. Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sophia Lewis",
    text: "The support and dedication throughout the project were incredible. I am truly impressed.",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Chris Walker",
    text: "Clean work, timely delivery and a friendly approach. A great experience overall.",
    image: "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    name: "Emily Carter",
    text: "Their design and attention to detail gave my business a new professional look. Fantastic!",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Daniel White",
    text: "Very responsive and easy to communicate with. Would definitely work with them again.",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    name: "Ava Brooks",
    text: "They understood exactly what I wanted and executed it perfectly. Great work!",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visible = testimonials.slice(index, index + 2);

  // Parallax Background
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 160]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      
      {/* Parallax Layer */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 bg-black"
      />

      <div className="relative z-10">
        <Navbar />

        <div className="max-w-6xl mx-auto text-center py-24 px-6">

          {/* Heading */}
          <motion.h2
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-5xl font-extrabold mb-4 
            bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          >
            Testimonials
          </motion.h2>

          {/* Quote */}
          <motion.p
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-gray-300 max-w-2xl mx-auto mb-14 text-xl italic"
          >
            &ldquo;Your satisfaction is our greatest achievement — every experience tells a story.&rdquo;
          </motion.p>

          {/* Slide Cards */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-10"
              >
                {visible.map((t, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0 0 25px #2596be",
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="bg-[#0d1c26] border border-[#2596be] p-8 rounded-2xl shadow-xl"
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-24 h-24 mx-auto rounded-full border-4 border-[#2596be] mb-4 object-cover"
                    />

                    <p className="text-sm leading-relaxed italic mb-4">
                      "{t.text}"
                    </p>

                    <h4 className="font-semibold text-lg">{t.name}</h4>

                    <div className="flex justify-center gap-1 mt-3">
                      {[1,2,3,4,5].map((star) => (
                        <img
                          key={star}
                          src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                          className="w-5 h-5"
                          alt="star"
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  index / 2 === i ? "bg-[#2596be] scale-125" : "bg-gray-600"
                }`}
              ></div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
