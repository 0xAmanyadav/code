import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Tools from "./sections/Tools";
import Hackathon from "./sections/Hackathons";
import Ranks from "./sections/Ranks";
import Certifications from "./sections/Certifications";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.replace("/", "") || "home";
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    // 🛠️ FIX 1: Pure portfolio ko global strict alignment grid, antialiased font setup aur flex configuration mein lock kiya
    <div className="w-full min-h-screen bg-[#fafafa] flex flex-col antialiased overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <ScrollToSection />

      {/* 🛠️ FIX 2: Wrapped in a fluid semantic main tag to prevent layouts from shifting on small heights */}
      <main className="w-full flex flex-col">
        {/* ⚠️ CRITICAL NOTE FOR AMAN:
          Aapke components (Hero, About, Ranks, Tools, etc.) ke andar pehle se hi id aur design built-in hain.
          Bahar se extra <section> tags hata diye hain taaki nested double-spacing ka bug poori tarah khatam ho jaye.
        */}
        <Hero />
        <About />
        <Ranks />
        <Skills />
        <Tools />
        <Projects />
        <Certifications />
        <Hackathon />
      </main>

      <Footer />
    </div>
  );
}

export default App;