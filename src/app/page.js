
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import ServicesApp from "./components/ServicesApp";
// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <ServicesApp />
//     </>
//   );
// }



"use client"; 

import React, { useState, useEffect, useRef } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesApp from "./components/ServicesApp";

export default function Home() {
  
  const [navTheme, setNavTheme] = useState("light");
  
  
  const servicesRef = useRef(null);

  
  useEffect(() => {
    const handleScroll = () => {
   
      const servicesTop = servicesRef.current?.offsetTop || 0;
      
      
      const scrollY = window.scrollY;

      
      if (scrollY > servicesTop - 100) {
        setNavTheme("dark");
      } else {
        setNavTheme("light");
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <>
     
      <Navbar theme={navTheme} />
      
      <Hero />
      
      <div ref={servicesRef}>
        <ServicesApp />
      </div>
    </>
  );
}
