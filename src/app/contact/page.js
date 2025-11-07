// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaWhatsapp,
//   FaLinkedin,
//   FaGithub,
//   FaTwitter,
//   FaFacebook,
// } from "react-icons/fa";
// import Navbar from "../components/Navbar";

// // Animations
// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
// };
// const staggerContainer = {
//   visible: { transition: { staggerChildren: 0.18 } },
// };

// const services = [
//   "Web Development",
//   "UI/UX Design",
//   "CRM Solutions",
//   "AI Integration",
//   "Mobile App Development",
//   "AI Chatbots / WhatsApp Bots",
// ];

// export default function Contact() {
//   const [selectedService, setSelectedService] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col font-sans relative">
//       {/* ✅ Navbar */}
//       <Navbar theme="light" />
//       <div className="h-24 sm:h-28"></div>

//       {/* ✅ Contact Section */}
//       <motion.div
//         className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-8 lg:px-12 pb-20"
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//       >
//         {/* Left: Info */}
//         <motion.div className="flex flex-col gap-8" variants={fadeUp}>
//           <motion.h1
//             className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] leading-tight"
//             variants={fadeUp}
//           >
//             <motion.span
//               initial={{ backgroundPosition: "200% 0" }}
//               animate={{ backgroundPosition: "-200% 0" }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 6,
//                 ease: "linear",
//               }}
//               className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent"
//             >
//               Get in Touch
//             </motion.span>
//           </motion.h1>

//           <motion.p className="text-gray-500" variants={fadeUp}>
//             We’re here to answer any questions you may have about our services.
//             Reach out to us and we’ll respond as soon as we can.
//           </motion.p>

//           <motion.div className="flex flex-col gap-5" variants={staggerContainer}>
//             {[
//               { icon: <FaEnvelope />, title: "Email", detail: "vyomanexgenservices@gmail.com" },
//               { icon: <FaPhoneAlt />, title: "Phone", detail: "+91 7358105293" },
//               { icon: <FaMapMarkerAlt />, title: "Office", detail: "Hyderabad, Telangana" },
//             ].map((info, i) => (
//               <motion.div
//                 key={i}
//                 className="bg-white/70 backdrop-blur-md border border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center gap-5 rounded-xl p-5 hover:shadow-lg transition-all"
//                 variants={fadeUp}
//               >
//                 <span className="bg-gradient-to-tr from-purple-400 to-pink-500 p-4 rounded-lg text-white text-2xl">
//                   {info.icon}
//                 </span>
//                 <div>
//                   <h3 className="font-semibold text-gray-800">{info.title}</h3>
//                   <p className="text-sm text-gray-600">{info.detail}</p>
//                 </div>
//               </motion.div>
//             ))}

//             {/* ✅ WhatsApp Card */}
//             <motion.div variants={fadeUp} className="mt-2">
//               <a
//                 href="https://wa.me/yourwhatsapplink"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center bg-green-600 rounded-xl px-6 py-5 gap-4 shadow-lg hover:shadow-xl transition-all"
//               >
//                 <span className="bg-white p-3 rounded-lg text-green-600">
//                   <FaWhatsapp size={24} />
//                 </span>
//                 <div>
//                   <h3 className="font-semibold text-white">Chat on WhatsApp</h3>
//                   <p className="text-sm text-white/80">Get instant support via WhatsApp</p>
//                 </div>
//                 <button className="ml-auto bg-pink-500 hover:bg-pink-600 text-white rounded-lg px-5 py-2 font-semibold">
//                   Start Chat
//                 </button>
//               </a>
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         {/* ✅ Right: Enhanced Form */}
//         <motion.form
//           className="bg-white/70 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_rgba(31,38,135,0.1)] 
//                      rounded-2xl p-8 flex flex-col gap-6 relative overflow-visible hover:shadow-2xl 
//                      transition-all duration-500"
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//         >
//           <motion.h2
//             className="font-semibold text-gray-800 text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
//             variants={fadeUp}
//           >
//             Send us a Message
//           </motion.h2>
//           <motion.p className="text-sm text-gray-500" variants={fadeUp}>
//             Fill out the form below and we’ll get back to you within 24 hours.
//           </motion.p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {["Full Name *", "Email *", "Phone", "Company Name"].map((placeholder, i) => (
//               <motion.input
//                 key={i}
//                 variants={fadeUp}
//                 type={placeholder.includes("Email") ? "email" : "text"}
//                 placeholder={placeholder}
//                 required={placeholder.includes("*")}
//                 className="border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 placeholder-gray-500 bg-white/50"
//               />
//             ))}
//           </div>

//           {/* ✅ Service Dropdown (Glassmorphic) */}
//           <motion.div className="relative z-50" variants={fadeUp}>
//             <button
//               type="button"
//               onClick={toggleDropdown}
//               className="w-full flex justify-between items-center px-4 py-3 rounded-lg 
//                          bg-white/60 backdrop-blur-md border border-gray-200 shadow-inner 
//                          hover:shadow-lg transition-all focus:outline-none"
//             >
//               <span className="text-gray-700 font-medium">
//                 {selectedService || "Select a service"}
//               </span>
//               <motion.span
//                 animate={{ rotate: dropdownOpen ? 180 : 0 }}
//                 transition={{ duration: 0.25 }}
//                 className="text-purple-500 font-semibold text-xl"
//               >
//                 ▼
//               </motion.span>
//             </button>

//             <AnimatePresence>
//               {dropdownOpen && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -8, scale: 0.97 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: -8, scale: 0.97 }}
//                   transition={{ duration: 0.25 }}
//                   className="absolute left-0 right-0 mt-2 
//                              bg-white/80 backdrop-blur-xl border border-white/40 
//                              rounded-2xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] 
//                              overflow-hidden ring-1 ring-white/30"
//                 >
//                   {services.map((service, i) => (
//                     <motion.button
//                       key={i}
//                       type="button"
//                       onClick={() => {
//                         setSelectedService(service);
//                         setDropdownOpen(false);
//                       }}
//                       whileHover={{ scale: 1.02, backgroundColor: "rgba(236,230,255,0.6)" }}
//                       className={`block w-full text-left px-5 py-3 text-gray-800 text-sm font-medium 
//                         hover:text-purple-600 transition-all 
//                         ${
//                           selectedService === service
//                             ? "bg-purple-50 text-purple-600"
//                             : "bg-transparent"
//                         }`}
//                     >
//                       {service}
//                     </motion.button>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>

//           {/* Message Box */}
//           <motion.textarea
//             variants={fadeUp}
//             className="border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 placeholder-gray-500 bg-white/50"
//             placeholder="Tell us about your project..."
//             rows={4}
//             required
//           />

//           {/* Submit */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="w-full bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
//             type="submit"
//             variants={fadeUp}
//           >
//             Send Message 
//           </motion.button>
//         </motion.form>
//       </motion.div>

//    { /* ✅ Business Hours - Glassmorphic */}
//         <motion.section
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="max-w-4xl mx-auto mb-16 p-8 rounded-2xl relative overflow-hidden 
//                  bg-gray-100/30 backdrop-blur-lg border border-transparent 
//                  before:absolute before:inset-0 before:rounded-2xl 
//                  before:p-[2px] before:bg-gradient-to-r from-gray-600 
//                  before:-z-10 before:content-['']"
//         >
//           <h3 className="text-lg font-bold text-purple-900 mb-2">Business Hours</h3>
//           <p className="text-purple-400 mb-6">We're available during these hours</p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="bg-gray-50/70 rounded-xl p-4 flex justify-between items-center">
//             <span>Monday - Friday</span>
//             <span>9:00 AM - 6:00 PM</span>
//             </div>
//             <div className="bg-gray-50/70 rounded-xl p-4 flex justify-between items-center">
//             <span>Saturday</span>
//             <span>10:00 AM - 4:00 PM</span>
//             </div>
//             <div className="bg-gray-50/70 rounded-xl p-4 flex justify-between items-center md:col-span-2">
//             <span>Sunday</span>
//             <span>Closed</span>
//             </div>
//           </div>
//         </motion.section>

//       <footer className="relative overflow-hidden mt-auto text-white">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient opacity-90"></div>
//         <div className="relative z-10 backdrop-blur-xl py-12 px-6 md:px-16">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//             {/* Company Info */}
//             <div>
//               <h3 className="text-lg font-semibold">VYOMANEXGEN</h3>
//               <p className="text-sm text-white/80 mt-2">
//                 Pioneering cutting-edge technology solutions for tomorrow’s challenges.
//               </p>

//               <div className="flex gap-4 mt-5">
//                 {[
//                   { icon: <FaLinkedin />, link: "https://linkedin.com" },
//                   { icon: <FaTwitter />, link: "https://twitter.com" },
//                   { icon: <FaGithub />, link: "https://github.com" },
//                   { icon: <FaFacebook />, link: "https://facebook.com" },
//                 ].map((social, i) => (
//                   <motion.a
//                     key={i}
//                     href={social.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.2 }}
//                     className="p-3 rounded-full bg-white/20 hover:bg-white/40 text-white shadow-md backdrop-blur-lg transition-all"
//                   >
//                     {social.icon}
//                   </motion.a>
//                 ))}
//               </div>
//             </div>

//             {/* Services */}
//             <div>
//               <h4 className="font-semibold text-white mb-3">Services</h4>
//               {["UI/UX Design", "Web Development", "Mobile Apps", "CRM Solutions", "AI Chatbots"].map(
//                 (service, i) => (
//                   <p
//                     key={i}
//                     className="text-white/80 text-sm mb-1 hover:text-white transition-all cursor-pointer"
//                   >
//                     {service}
//                   </p>
//                 )
//               )}
//             </div>

//             {/* Company */}
//             <div>
//               <h4 className="font-semibold text-white mb-3">Company</h4>
//               {["About Us", "Careers", "Portfolio", "Blog", "Contact"].map((link, i) => (
//                 <p
//                   key={i}
//                   className="text-white/80 text-sm mb-1 hover:text-white transition-all cursor-pointer"
//                 >
//                   {link}
//                 </p>
//               ))}
//             </div>

//             {/* Contact Info */}
//             <div>
//               <h4 className="font-semibold text-white mb-3">Contact Us</h4>
//               <p className="text-sm text-white/80 flex items-center gap-2">
//                 <FaMapMarkerAlt /> Hyderabad, Telangana
//               </p>
//               <p className="text-sm text-white/80 flex items-center gap-2 mt-2">
//                 <FaPhoneAlt /> +91 7358105293
//               </p>
//               <p className="text-sm text-white/80 flex items-center gap-2 mt-2">
//                 <FaEnvelope /> vyomanexgenservices@gmail.com
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


// "use client";

// import Navbar from "../components/Navbar";
// import { useForm } from "react-hook-form";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

// // ✅ Validation Rules
// const schema = Yup.object().shape({
//   fullName: Yup.string().required("Full name is required"),
//   email: Yup.string().email("Enter a valid email").required("Email is required"),
//   phone: Yup.string(),
//   service: Yup.string().required("Please select a service"),
//   message: Yup.string().required("Message is required").min(10, "Minimum 10 characters"),
// });

// export default function Contact() {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//     alert("✅ Message Sent Successfully!");
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#F6F4FF] text-gray-800">
//       <Navbar />

//       {/* 🌈 Hero Section */}
//       {/* <section className="h-[45vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-[#140C33] via-[#2B0A52] to-[#480042]" />
//         <div className="absolute inset-0 opacity-20 bg-[url('https://i.ibb.co/4Y9q2YP/grid.png')] bg-cover bg-center" />

//         <button className="px-7 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-blue-400 to-pink-500 shadow-lg">
//           Get in Touch
//         </button>

//         <p className="text-white mt-3 text-lg">Contact Us</p>
//         <h3 className="text-white mt-2 text-xl max-w-2xl px-4">
//           Have a project in mind? Let's discuss how we can help bring your vision to life.
//         </h3>
//       </section> */}
// {/* 🌈 Hero Section (Exact Match) */}
// <section className="relative h-[45vh] w-full flex flex-col justify-center items-center text-center overflow-hidden">
  
//   {/* Gradient Background */}
//   <div className="absolute inset-0 bg-gradient-to-b from-[#140C33] via-[#2B0A52] to-[#480042]" />

//   {/* Subtle Grid Overlay */}
//   <div className="absolute inset-0 opacity-[0.10] bg-[url('https://i.ibb.co/4Y9q2YP/grid.png')] bg-cover bg-center" />

//   <button className="px-7 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-blue-400 to-pink-500 shadow-lg">
//     Get in Touch
//   </button>

//   <p className="text-white mt-3 text-lg">Contact Us</p>

//   <h3 className="text-white mt-2 text-xl max-w-2xl px-4 leading-relaxed">
//     Have a project in mind? Let's discuss how we can help bring your vision to life.
//   </h3>
// </section>

//       {/* Contact + Form */}
//       <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-20 px-6">

//         {/* 📞 Contact Info Cards */}
//         <div className="space-y-5">

//           {/* Email */}
//           <Card icon={<FaEnvelope />} title="Email" value="hello@sgtratup.com" />

//           {/* Phone */}
//           <Card icon={<FaPhone />} title="Phone" value="+1 (555) 123-4567" />

//           {/* Office */}
//           <Card icon={<FaMapMarkerAlt />} title="Office" value="123 Tech Street, Innovation District, CA 94025" />

//           {/* ✅ WhatsApp CTA Card */}
//           <a
//             href="https://wa.me/15551234567"
//             target="_blank"
//             className="block bg-[#1DBF31] rounded-2xl p-6 text-white shadow-xl border border-[#0c731a] hover:scale-[1.02] transition flex flex-col"
//           >
//             <div className="flex items-center gap-3">
//               <FaWhatsapp size={26} />
//               <h4 className="text-lg font-semibold">Chat on WhatsApp</h4>
//             </div>
//             <p className="text-sm mt-1 opacity-90">Get instant support via WhatsApp</p>

//             <button className="mt-4 bg-white text-[#1DBF31] px-5 py-2 rounded-lg text-sm font-medium shadow hover:bg-gray-200 transition">
//               Start Chat
//             </button>
//           </a>

//         </div>

//         {/* 📝 Message Form */}
//         <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 space-y-4">

//           {/* Row 1 */}
//           <div className="flex gap-4">
//             <Field placeholder="Full Name *" error={errors.fullName} register={register("fullName")} />
//             <Field placeholder="Email *" error={errors.email} register={register("email")} />
//           </div>

//           {/* Row 2 */}
//           <div className="flex gap-4">
//             <Field placeholder="Phone" register={register("phone")} />
//             <Field placeholder="Company" register={register("company")} />
//           </div>

//           {/* Service Dropdown */}
//           <div>
//             <select {...register("service")} className="inputbox">
//               <option value="">Select a service</option>
//               <option>Web Development</option>
//               <option>Mobile Apps</option>
//               <option>UI/UX Design</option>
//               <option>AI / Automation</option>
//             </select>
//             {errors.service && <Error>{errors.service.message}</Error>}
//           </div>

//           {/* Message */}
//           <div>
//             <textarea {...register("message")} rows={4} placeholder="Message *" className="inputbox"></textarea>
//             {errors.message && <Error>{errors.message.message}</Error>}
//           </div>

//           <button className="w-full py-3 rounded-xl text-white text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition flex items-center justify-center gap-2">
//             Send Message ✈️
//           </button>
//         </form>
//       </section>

//       {/* 🕒 Business Hours */}
//       {/* 🕒 Business Hours (Exact Match: White + Gray Rows) */}
// <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#E5E7EB] p-10 my-20 text-center">

//   <h3 className="font-semibold text-lg text-[#1A1A1A]">Business Hours</h3>
//   <p className="text-gray-500 mb-8 text-sm">We're available during these hours</p>

//   {/* Row 1 (Monday - Friday & Saturday side by side) */}
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//     <div className="flex justify-between bg-[#EEF2F6] p-4 rounded-lg text-sm font-medium text-[#1A1A1A]">
//       <span>Monday - Friday</span>
//       <span>9:00 AM - 6:00 PM</span>
//     </div>

//     <div className="flex justify-between bg-[#EEF2F6] p-4 rounded-lg text-sm font-medium text-[#1A1A1A]">
//       <span>Saturday</span>
//       <span>10:00 AM - 4:00 PM</span>
//     </div>
//   </div>

//   {/* Row 2 (Sunday on its own row) */}
//   <div className="flex justify-between bg-[#EEF2F6] p-4 rounded-lg text-sm font-medium text-[#1A1A1A]">
//     <span>Sunday</span>
//     <span>Closed</span>
//   </div>

// </section>

//     </div>
//   );
// }

// /* ✅ Reusable Components */
// function Card({ icon, title, value }) {
//   return (
//     <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 flex gap-4 items-start">
//       <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg">
//         {icon}
//       </div>
//       <div>
//         <h4 className="font-semibold">{title}</h4>
//         <p className="text-gray-600 text-sm">{value}</p>
//       </div>
//     </div>
//   );
// }

// function Field({ register, placeholder, error }) {
//   return (
//     <div className="flex-1">
//       <input {...register} placeholder={placeholder} className="inputbox" />
//       {error && <Error>{error.message}</Error>}
//     </div>
//   );
// }

// function Hours({ day, time }) {
//   return (
//     <div className="flex justify-between bg-gray-100 p-3 rounded-lg text-sm mb-2">
//       <span>{day}</span>
//       <span>{time}</span>
//     </div>
//   );
// }

// function Error({ children }) {
//   return <p className="text-red-500 text-sm mt-1">{children}</p>;
// }


"use client";

import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";


// ✅ Validation Schema
const schema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  phone: Yup.string(),
  service: Yup.string().required("Please select a service"),
  message: Yup.string().required("Message is required").min(10, "Minimum 10 characters"),
});

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("✅ Message Sent Successfully!");
  };

  return (
    <div className="min-h-screen bg-[#F6F4FF] text-gray-800">
      <Navbar />

      {/* 🌈 HERO SECTION (content visible now) */}
  {/* 🌈 HERO SECTION — Bigger & Fully Visible */}
<section className="relative h-[60vh] w-full flex flex-col justify-center items-center text-center overflow-hidden pt-28">

  {/* Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#140C33] via-[#2B0A52] to-[#480042] z-0" />

  {/* Grid Overlay */}
  <div className="absolute inset-0 z-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />


  {/* ✅ CONTENT (Visible & Centered Now) */}
  <div className="relative z-10 flex flex-col items-center">

    <button className="px-7 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-blue-400 to-pink-500 shadow-lg">
      Get in Touch
    </button>

    <p className="text-white mt-3 text-lg">Contact Us</p>

    <h3 className="text-white mt-4 text-2xl md:text-[26px] max-w-3xl leading-relaxed px-6">
      Have a project in mind? Let&apos;s discuss how we can help bring your vision to life.
    </h3>

  </div>
</section>


      {/* 📨 CONTACT FORM + CARDS (Now pulled upward) */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-20 -mt-14 relative z-[5]">

        {/* Left Side Contact Cards */}
        <div className="space-y-5">

          <ContactCard icon={<FaEnvelope size={22} />} title="Email" value="hello@sgtratup.com" />
          <ContactCard icon={<FaPhone size={22} />} title="Phone" value="+1 (555) 123-4567" />
          <ContactCard icon={<FaMapMarkerAlt size={22} />} title="Office" value="123 Tech Street, Innovation District, CA 94025" />

          {/* ✅ WhatsApp Support Card */}
         {/* ✅ WhatsApp Support Card (Icon + Start Chat in same line) */}
<a
  href="https://wa.me/15551234567"
  target="_blank"
  className="block bg-[#1DBF31] rounded-2xl p-6 text-white shadow-xl border border-[#0c731a] hover:scale-[1.02] transition"
>
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <FaWhatsapp size={26} />
      <h4 className="text-lg font-semibold">Chat on WhatsApp</h4>
    </div>

    <button className="bg-white text-[#1DBF31] px-5 py-2 rounded-lg text-sm font-medium shadow hover:bg-gray-200 transition">
      Start Chat
    </button>
  </div>

  <p className="text-sm mt-3 opacity-90">
    Get instant support via WhatsApp
  </p>
</a>

        </div>

        {/* ✅ Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 space-y-4">

          <div className="flex flex-col md:flex-row gap-4">
            <Field label="Full Name *" register={register("fullName")} error={errors.fullName} />
            <Field label="Email *" register={register("email")} error={errors.email} />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <Field label="Phone" register={register("phone")} />
            <Field label="Company" register={register("company")} />
          </div>

          <div>
            <select {...register("service")} className="inputbox">
              <option value="">Select a service</option>
              <option>Web Development</option>
              <option>Mobile Apps</option>
              <option>UI/UX Design</option>
              <option>AI / Automation</option>
            </select>
            {errors.service && <Error>{errors.service.message}</Error>}
          </div>

          <div>
            <textarea {...register("message")} placeholder="Message *" rows="4" className="inputbox"></textarea>
            {errors.message && <Error>{errors.message.message}</Error>}
          </div>

          <button className="w-full py-3 rounded-xl text-white text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition flex items-center justify-center gap-2">
            Send Message 
          </button>
        </form>
      </section>

      {/* 🕒 BUSINESS HOURS (Fade-Up Animation) */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-10 text-center mb-20">

        <h3 className="font-semibold text-lg text-[#1A1A1A]">Business Hours</h3>
        <p className="text-gray-500 mb-8 text-sm">We're available during these hours</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Hours day="Monday - Friday" time="9:00 AM - 6:00 PM" />
          <Hours day="Saturday" time="10:00 AM - 4:00 PM" />
        </div>

        <Hours day="Sunday" time="Closed" />
      </motion.section>

      <Footer />

    </div>
  );
}

/* 🔁 Reusable UI Components */
function ContactCard({ icon, title, value }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 flex gap-4 items-start">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600 text-sm">{value}</p>
      </div>
    </div>
  );
}

function Field({ label, register, error }) {
  return (
    <div className="flex-1">
      <input placeholder={label} {...register} className="inputbox" />
      {error && <Error>{error.message}</Error>}
    </div>
  );
}

function Hours({ day, time }) {
  return (
    <div className="flex justify-between bg-[#EEF2F6] p-4 rounded-lg text-sm font-medium text-[#1A1A1A]">
      <span>{day}</span>
      <span>{time}</span>
    </div>
  );
}

function Error({ children }) {
  return <p className="text-red-500 text-sm mt-1">{children}</p>;
}
