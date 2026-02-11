import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Writeups from "./sections/Writeups";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";
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
    <>
      <Navbar />
      <ScrollToSection />

      {/* ALL SECTIONS ON SAME PAGE */}
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>

      <section id="tools">
        <Tools />
        <section id="ranks">
          <Ranks/>
        </section>
        {/* <section id="livebadges">
          <LiveBadges/>
        </section> */}
        <section id="projects">
          <Projects />
        </section>
        <section id="writeups">
          <Writeups />
        </section>
       <section id="certification">
          <Certifications />
        </section>
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
