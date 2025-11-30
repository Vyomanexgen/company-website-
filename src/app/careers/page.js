// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import Navbar from "../components/Navbar";

// // Blue icons
// import {
//   Lightbulb,
//   Users,
//   Shield,
//   DollarSign,
//   Heart,
//   Coffee,
//   Plane,
//   GraduationCap,
//   UsersRound,
//   MapPin,
//   Briefcase,
//   Clock,
// } from "lucide-react";

// export default function Careers() {
//   const router = useRouter();
//   const [tab, setTab] = useState("jobs");

//   const fadeUp = {
//     hidden: { opacity: 0, y: 60 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   // ✅ Helper component for the smooth sliding tab
//   const ActiveTabIndicator = () => (
//     <motion.span
//       layoutId="active-pill"
//       className="absolute inset-0 z-0 bg-white rounded-full shadow"
//       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//     />
//   );

//   const jobs = [
//     {
//       category: "Developer",
//       title: "App Developer",
//       description: "Develop the Mobile Applications.",
//       location: "Hybrid",
//       experience: "Fresher",
//       type: "full-time",
//       tags: ["Flutter", "React Native", "iOS", "Android"],
//     },
//     {
//       category: "Engineering",
//       title: "Senior Full-Stack Developer",
//       description: "Lead complex full-stack projects and guide junior developers.",
//       location: "Remote",
//       experience: "5+ years",
//       type: "Full-time",
//       tags: ["React", "Node.js", "AWS", "Microservices"],
//     },
//     {
//       category: "Design",
//       title: "UI/UX Designer",
//       description: "Design intuitive and modern product experiences.",
//       location: "Remote",
//       experience: "3+ years",
//       type: "Full-time",
//       tags: ["Figma", "Wireframing", "User Research"],
//     },
    
//   ];

//   const interns = [
//     {
//       category: "Internship",
//       title: "Frontend Developer Intern",
//       description: "Learn real-world React development.",
//       location: "Remote",
//       experience: "Fresher",
//       type: "Internship",
//       tags: ["React", "Tailwind", "HTML", "CSS"],
//     },
//     {
//       category: "Internship",
//       title: "UI/UX Intern",
//       description: "Assist product design team.",
//       location: "Hybrid",
//       experience: "Fresher",
//       type: "Internship",
//       tags: ["Figma", "Sketching", "Brand Design"],
//     },
    
//   ];

//   const benefits = [
//     { icon: DollarSign, title: "Competitive Salary", desc: "Industry-leading compensation packages." },
//     { icon: Heart, title: "Health Benefits", desc: "Comprehensive health insurance coverage." },
//     { icon: Coffee, title: "Flexible Hours", desc: "Work-life balance with flexible schedules." },
//     { icon: Plane, title: "Paid Time Off", desc: "Generous vacation and holiday policy." },
//     { icon: GraduationCap, title: "Learning Budget", desc: "Annual learning & growth budget." },
//     { icon: UsersRound, title: "Great Team Culture", desc: "Collaborative and supportive environment." },
//   ];

//   const values = [
//     { icon: Lightbulb, title: "Innovation", desc: "We embrace creativity and cutting-edge ideas." },
//     { icon: Users, title: "Collaboration", desc: "We work as one team with transparency." },
//     { icon: Shield, title: "Integrity", desc: "We uphold honesty and respect in everything." },
//   ];

//   const jobList = tab === "jobs" ? jobs : interns;

//   return (
//     // ✅ Added subtle gradient background to the whole page
//     <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
//       <Navbar />

//       {/* HERO */}
//       <section className="relative text-center px-6 py-28 bg-gradient-to-r from-[#3b1566] via-[#6b1bb4] to-[#d11eac] text-white">
//         <h1 className="text-5xl font-extrabold tracking-tight">Build the Future With Us</h1>
//         <p className="mt-4 max-w-3xl mx-auto text-gray-200 text-lg">
//           We’re looking for talented individuals who are passionate about technology and innovation.
//         </p>
//         <button
//           onClick={() => router.push("#openings")}
//           className="mt-8 px-8 py-3 bg-white text-[#6b1bb4] rounded-full font-semibold shadow hover:shadow-lg transition"
//         >
//           View Open Positions
//         </button>
//       </section>

//       {/* VALUES (Already glass) */}
//       <section className="py-24 px-6 max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-extrabold mb-14 text-gray-800">Our Values</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {values.map((v, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="p-10 rounded-2xl backdrop-blur-xl bg-white/70 border border-white/40 shadow-sm hover:shadow-xl transition"
//             >
//               <v.icon size={48} className="mx-auto text-blue-600 mb-4" />
//               <h3 className="text-2xl font-bold text-gray-700">{v.title}</h3>
//               <p className="text-gray-600 mt-3">{v.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* BENEFITS (Was bg-gray-50) */}
//       <section className="py-24 px-6 text-center">
//         <h2 className="text-4xl font-extrabold text-gray-800">Benefits & Perks</h2>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-14">
//           {benefits.map((b, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
             
//               className="p-8 rounded-xl backdrop-blur-xl bg-white/70 border border-white/40 shadow hover:shadow-xl transition text-left"
//             >
//               <b.icon size={48} className="text-blue-600 mb-4" />
//               <h3 className="text-xl font-bold text-gray-800">{b.title}</h3>
//               <p className="text-gray-600 mt-3">{b.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

      
//       <section id="openings" className="text-center pt-24 pb-6">
//         <h2 className="text-4xl font-extrabold text-gray-800">Open Positions</h2>

        
//         <div className="relative mt-8 inline-flex items-center backdrop-blur-xl bg-white/25 border border-white/40 rounded-full shadow-lg p-2 ">
//           <button
//             onClick={() => setTab("jobs")}
//             className="relative px-6 py-2 rounded-full font-medium"
//           >
//             {tab === "jobs" && <ActiveTabIndicator />}
//             <span className={`relative z-10 transition ${tab === 'jobs' ? 'text-blue-600' : 'text-gray-600'}`}>
//               Jobs
//             </span>
//           </button>
//           <button
//             onClick={() => setTab("interns")}
//             className="relative px-6 py-2 rounded-full font-medium"
//           >
//             {tab === "interns" && <ActiveTabIndicator />}
//             <span className={`relative z-10 transition ${tab === 'interns' ? 'text-blue-600' : 'text-gray-600'}`}>
//               Internships
//             </span>
//           </button>
//         </div>
//       </section>

 
//       <section className="pt-6 pb-32 px-6 max-w-5xl mx-auto space-y-10">
//         {jobList.map((job, i) => (
//           <motion.div
//             key={i}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
           
//             className="p-8 rounded-2xl backdrop-blur-xl bg-white/70 border border-white/40 shadow hover:shadow-xl transition"
//           >
//             <div className="flex justify-between flex-wrap gap-6">
//               <div>
//                 <div className="flex gap-3 mb-3">
//                   <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">{job.category}</span>
//                   <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">{job.type}</span>
//                 </div>

//                 <h3 className="text-2xl font-extrabold text-gray-800">{job.title}</h3>
//                 <p className="text-gray-600 mt-2">{job.description}</p>

//                 <div className="flex gap-6 text-gray-600 text-sm mt-5">
//                   <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
//                   <span className="flex items-center gap-1"><Briefcase size={16} /> {job.experience}</span>
//                   <span className="flex items-center gap-1"><Clock size={16} /> {job.type}</span>
//                 </div>

//                 <div className="flex flex-wrap gap-2 mt-4">
//                   {job.tags.map((t, j) => (
//                     <span key={j} className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">{t}</span>
//                   ))}
//                 </div>
//               </div>

//               <button
//                 onClick={() => router.push("/contact")}
//                 className="self-center px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow"
//               >
//                 Apply Now
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </section>

     
//       <section className="relative text-center px-6 py-24 bg-gradient-to-r from-[#3b1566] via-[#6b1bb4] to-[#d11eac] text-white">
//         <h3 className="text-xl font-semibold tracking-wide">
//           Don't See a Perfect Fit?
//         </h3>
//         <p className="mt-4 max-w-2xl mx-auto text-2xl font-bold">
//          We're always looking for talented people. Send us your resume to our mail id "<span className="text-violet-500  px-2 py-1 rounded font-bold">vyomanexgenservices@gmail.com</span>" and let's talk
//           about how you can contribute to our team.
//         </p>
//         <button
//           onClick={() => router.push("/contact")}
//           className="mt-8 px-8 py-3 bg-white text-[#6b1bb4] rounded-full font-semibold shadow hover:shadow-lg transition"
//         >
//           Get in Touch
//         </button>
//       </section>
      
//     </div>
//   );
// }


"use client";

  // Adjust path if needed
import Link from "next/link";
import { motion } from "framer-motion";
import Footers from "../components/Footer";

// Footer
function Footer() {
  return (
    <footer className="w-full py-6 text-center bg-black text-gray-400 text-sm border-t border-gray-800">
      © {new Date().getFullYear()} Vyomanexgen. All rights reserved.
    </footer>
  );
}

export default function CareersPlaceholder() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">

      {/* NAVBAR */}


      {/* MAIN CONTENT */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center gap-10 mt-16">

        {/* 🔥 3D Neon Animated Element */}
        <motion.div
          className="relative w-40 h-40 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Outer Rotating Neon Ring */}
          <motion.div
            className="absolute w-36 h-36 rounded-full border-4 border-cyan-500/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Middle Glow Ring */}
          <motion.div
            className="absolute w-28 h-28 rounded-full border-4 border-blue-500/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* Floating Inner Orb */}
          <motion.div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_25px_rgba(0,200,255,0.7)]"
            animate={{
              y: [0, -15, 0],
              x: [0, 8, -8, 0],
              rotateZ: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-cyan-400"
        >
          Careers Page Coming Soon
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-300 max-w-xl text-lg leading-relaxed"
        >
          We are building an exciting new Careers section where you’ll be able to
          explore roles, apply directly, and join the Vyomanexgen family.
          <br />
          This page is currently under construction please check back soon.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/"
            className="mt-6 inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-md text-white text-lg font-semibold shadow-lg transition"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
