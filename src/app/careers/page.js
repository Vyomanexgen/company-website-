// "use client";

// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";

// export default function Careers() {
//   const router = useRouter();

//   const fadeIn = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const loopPulse = {
//     animate: {
//       scale: [1, 1.05, 1],
//       transition: { duration: 2, repeat: Infinity },
//     },
//   };

//   const jobs = [
//     {
//       title: "Senior Full-Stack Developer",
//       type: "Full-time",
//       location: "San Francisco, CA / Remote",
//       experience: "5+ years",
//       tags: ["React", "Node.js", "TypeScript", "AWS"],
//     },
//     {
//       title: "UI/UX Designer",
//       type: "Full-time",
//       location: "Remote",
//       experience: "3+ years",
//       tags: ["Figma", "Adobe XD", "Wireframes", "Prototyping"],
//     },
//   ];

//   return (
//     <div className="w-full">
//       {/* HERO SECTION */}
//       <div className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-24 px-6 text-center">
//         <motion.h1
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           className="text-4xl font-bold"
//         >
//           Build the Future With Us
//         </motion.h1>
//         <p className="mt-4 max-w-2xl mx-auto text-gray-200">
//           We're looking for passionate individuals to join our team in creating innovative solutions.
//         </p>

//         <motion.button
//           {...loopPulse}
//           onClick={() => router.push("#openings")}
//           className="mt-6 px-6 py-3 rounded-full bg-white text-purple-700 font-semibold shadow-lg"
//         >
//           View Open Positions
//         </motion.button>
//       </div>

//       {/* VALUES SECTION */}
//       <div className="py-20 px-6 text-center">
//         <h2 className="text-3xl font-bold">Our Values</h2>
//         <p className="max-w-xl mx-auto mt-2 text-gray-600">The principles that guide everything we do</p>

//         <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
//           {["Innovation", "Collaboration", "Integrity"].map((value) => (
//             <motion.div
//               key={value}
//               whileHover={{ scale: 1.05 }}
//               className="p-8 bg-white rounded-xl shadow border"
//             >
//               <h3 className="text-xl font-semibold text-purple-600">{value}</h3>
//               <p className="text-gray-500 mt-2">
//                 We live this every day.
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* JOB LISTINGS */}
//       <div id="openings" className="py-20 px-6 bg-gray-50">
//         <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>

//         <div className="max-w-4xl mx-auto space-y-8">
//           {jobs.map((job, index) => (
//             <motion.div
//               key={index}
//               initial="hidden"
//               whileInView="visible"
//               variants={fadeIn}
//               className="bg-white rounded-xl shadow p-6 border"
//             >
//               <div className="flex justify-between items-center flex-wrap">
//                 <div>
//                   <h3 className="text-xl font-semibold">{job.title}</h3>
//                   <p className="text-gray-600 text-sm mt-1">{job.location} • {job.experience}</p>
//                   <div className="flex gap-2 mt-3 flex-wrap">
//                     {job.tags.map((tag, i) => (
//                       <span key={i} className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <motion.button
//                   {...loopPulse}
//                   onClick={() => router.push("/contact")}
//                   className="mt-3 md:mt-0 px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow"
//                 >
//                   Apply Now
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

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

//   const jobs = [
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
//     <div className="relative overflow-hidden">
//       <Navbar />

//       {/* HERO - Purple Like Screenshot */}
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

//       {/* VALUES */}
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

//       {/* BENEFITS */}
//       <section className="py-24 px-6 bg-gray-50 text-center">
//         <h2 className="text-4xl font-extrabold text-gray-800">Benefits & Perks</h2>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-14">
//           {benefits.map((b, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="p-8 bg-white rounded-xl border shadow hover:shadow-xl transition text-left"
//             >
//               <b.icon size={48} className="text-blue-600 mb-4" />
//               <h3 className="text-xl font-bold text-gray-800">{b.title}</h3>
//               <p className="text-gray-600 mt-3">{b.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* OPEN POSITIONS HEADING */}
//       <section id="openings" className="text-center pt-24 pb-6">
//         <h2 className="text-4xl font-extrabold text-gray-800">Open Positions</h2>

//         {/* Liquid Glass Switch */}
//         <div className="mt-8 inline-flex backdrop-blur-xl bg-white/25 border border-white/40 rounded-full shadow-lg p-2">
//           <button
//             onClick={() => setTab("jobs")}
//             className={`px-6 py-2 rounded-full font-medium transition ${
//               tab === "jobs"
//                 ? "bg-white text-blue-600 shadow"
//                 : "text-gray-600" // ✅ FIX
//             }`}
//           >
//             Jobs
//           </button>
//           <button
//             onClick={() => setTab("interns")}
//             className={`px-6 py-2 rounded-full font-medium transition ${
//               tab === "interns"
//                 ? "bg-white text-blue-600 shadow"
//                 : "text-gray-600" // ✅ FIX
//             }`}
//           >
//             Internships
//           </button>
//         </div>
//       </section>

//       {/* POSITION CARDS */}
//       <section className="pt-6 pb-32 px-6 max-w-5xl mx-auto space-y-10">
//         {jobList.map((job, i) => (
//           <motion.div
//             key={i}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="p-8 bg-white rounded-2xl border shadow hover:shadow-xl transition"
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
//                   <span classNameclassName="flex items-center gap-1"><Briefcase size={16} /> {job.experience}</span>
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
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

// Blue icons
import {
  Lightbulb,
  Users,
  Shield,
  DollarSign,
  Heart,
  Coffee,
  Plane,
  GraduationCap,
  UsersRound,
  MapPin,
  Briefcase,
  Clock,
} from "lucide-react";

export default function Careers() {
  const router = useRouter();
  const [tab, setTab] = useState("jobs");

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // ✅ Helper component for the smooth sliding tab
  const ActiveTabIndicator = () => (
    <motion.span
      layoutId="active-pill"
      className="absolute inset-0 z-0 bg-white rounded-full shadow"
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    />
  );

  const jobs = [
    {
      category: "Developer",
      title: "App Developer",
      description: "Develop the Mobile Applications.",
      location: "Hybrid",
      experience: "Fresher",
      type: "full-time",
      tags: ["Flutter", "React Native", "iOS", "Android"],
    },
    {
      category: "Engineering",
      title: "Senior Full-Stack Developer",
      description: "Lead complex full-stack projects and guide junior developers.",
      location: "Remote",
      experience: "5+ years",
      type: "Full-time",
      tags: ["React", "Node.js", "AWS", "Microservices"],
    },
    {
      category: "Design",
      title: "UI/UX Designer",
      description: "Design intuitive and modern product experiences.",
      location: "Remote",
      experience: "3+ years",
      type: "Full-time",
      tags: ["Figma", "Wireframing", "User Research"],
    },
    
  ];

  const interns = [
    {
      category: "Internship",
      title: "Frontend Developer Intern",
      description: "Learn real-world React development.",
      location: "Remote",
      experience: "Fresher",
      type: "Internship",
      tags: ["React", "Tailwind", "HTML", "CSS"],
    },
    {
      category: "Internship",
      title: "UI/UX Intern",
      description: "Assist product design team.",
      location: "Hybrid",
      experience: "Fresher",
      type: "Internship",
      tags: ["Figma", "Sketching", "Brand Design"],
    },
    
  ];

  const benefits = [
    { icon: DollarSign, title: "Competitive Salary", desc: "Industry-leading compensation packages." },
    { icon: Heart, title: "Health Benefits", desc: "Comprehensive health insurance coverage." },
    { icon: Coffee, title: "Flexible Hours", desc: "Work-life balance with flexible schedules." },
    { icon: Plane, title: "Paid Time Off", desc: "Generous vacation and holiday policy." },
    { icon: GraduationCap, title: "Learning Budget", desc: "Annual learning & growth budget." },
    { icon: UsersRound, title: "Great Team Culture", desc: "Collaborative and supportive environment." },
  ];

  const values = [
    { icon: Lightbulb, title: "Innovation", desc: "We embrace creativity and cutting-edge ideas." },
    { icon: Users, title: "Collaboration", desc: "We work as one team with transparency." },
    { icon: Shield, title: "Integrity", desc: "We uphold honesty and respect in everything." },
  ];

  const jobList = tab === "jobs" ? jobs : interns;

  return (
    // ✅ Added subtle gradient background to the whole page
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navbar />

      {/* HERO */}
      <section className="relative text-center px-6 py-28 bg-gradient-to-r from-[#3b1566] via-[#6b1bb4] to-[#d11eac] text-white">
        <h1 className="text-5xl font-extrabold tracking-tight">Build the Future With Us</h1>
        <p className="mt-4 max-w-3xl mx-auto text-gray-200 text-lg">
          We’re looking for talented individuals who are passionate about technology and innovation.
        </p>
        <button
          onClick={() => router.push("#openings")}
          className="mt-8 px-8 py-3 bg-white text-[#6b1bb4] rounded-full font-semibold shadow hover:shadow-lg transition"
        >
          View Open Positions
        </button>
      </section>

      {/* VALUES (Already glass) */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-14 text-gray-800">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-10 rounded-2xl backdrop-blur-xl bg-white/70 border border-white/40 shadow-sm hover:shadow-xl transition"
            >
              <v.icon size={48} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-700">{v.title}</h3>
              <p className="text-gray-600 mt-3">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS (Was bg-gray-50) */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">Benefits & Perks</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-14">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              // ✅ Changed to glass
              className="p-8 rounded-xl backdrop-blur-xl bg-white/70 border border-white/40 shadow hover:shadow-xl transition text-left"
            >
              <b.icon size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800">{b.title}</h3>
              <p className="text-gray-600 mt-3">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OPEN POSITIONS HEADING */}
      <section id="openings" className="text-center pt-24 pb-6">
        <h2 className="text-4xl font-extrabold text-gray-800">Open Positions</h2>

        {/* ✅ Rebuilt Liquid Glass Switch for smooth sliding animation */}
        <div className="relative mt-8 inline-flex items-center backdrop-blur-xl bg-white/25 border border-white/40 rounded-full shadow-lg p-2">
          <button
            onClick={() => setTab("jobs")}
            className="relative px-6 py-2 rounded-full font-medium"
          >
            {tab === "jobs" && <ActiveTabIndicator />}
            <span className={`relative z-10 transition ${tab === 'jobs' ? 'text-blue-600' : 'text-gray-600'}`}>
              Jobs
            </span>
          </button>
          <button
            onClick={() => setTab("interns")}
            className="relative px-6 py-2 rounded-full font-medium"
          >
            {tab === "interns" && <ActiveTabIndicator />}
            <span className={`relative z-10 transition ${tab === 'interns' ? 'text-blue-600' : 'text-gray-600'}`}>
              Internships
            </span>
          </button>
        </div>
      </section>

      {/* POSITION CARDS */}
      <section className="pt-6 pb-32 px-6 max-w-5xl mx-auto space-y-10">
        {jobList.map((job, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // ✅ Changed to glass
            className="p-8 rounded-2xl backdrop-blur-xl bg-white/70 border border-white/40 shadow hover:shadow-xl transition"
          >
            <div className="flex justify-between flex-wrap gap-6">
              <div>
                <div className="flex gap-3 mb-3">
                  <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">{job.category}</span>
                  <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">{job.type}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-gray-800">{job.title}</h3>
                <p className="text-gray-600 mt-2">{job.description}</p>

                <div className="flex gap-6 text-gray-600 text-sm mt-5">
                  <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                  <span className="flex items-center gap-1"><Briefcase size={16} /> {job.experience}</span>
                  <span className="flex items-center gap-1"><Clock size={16} /> {job.type}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {job.tags.map((t, j) => (
                    <span key={j} className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">{t}</span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => router.push("/contact")}
                className="self-center px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* DON'T SEE A PERFECT FIT? */}
      <section className="relative text-center px-6 py-24 bg-gradient-to-r from-[#3b1566] via-[#6b1bb4] to-[#d11eac] text-white">
        <h3 className="text-xl font-semibold tracking-wide">
          Don't See a Perfect Fit?
        </h3>
        <p className="mt-4 max-w-2xl mx-auto text-2xl font-bold">
          We're always looking for talented people. Send us your resume and let's talk
          about how you can contribute to our team.
        </p>
        <button
          onClick={() => router.push("/contact")}
          className="mt-8 px-8 py-3 bg-white text-[#6b1bb4] rounded-full font-semibold shadow hover:shadow-lg transition"
        >
          Get in Touch
        </button>
      </section>
      
    </div>
  );
}