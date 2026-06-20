import { useEffect, useState } from "react";

const roles = ["SOC Analyst", "Penetration Tester", "Blue Team Enthusiast"];

function Hero() {
  /* ---------------- whoami typing ---------------- */
  const [whoamiText, setWhoamiText] = useState("");
  const fullWhoami = "root@aman:~$ whoami";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setWhoamiText(fullWhoami.slice(0, i));
      i++;
      if (i > fullWhoami.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, []);

  /* ---------------- role typing ---------------- */
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      setRoleText(
        isDeleting
          ? currentRole.slice(0, charIndex - 1)
          : currentRole.slice(0, charIndex + 1),
      );
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      }
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative h-screen w-screen flex items-center justify-center bg-[#fafafa] text-gray-900 overflow-hidden font-sans"
    >
      {/* ================= PREMIUM LIGHT CYBER BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        {/* Soft centered ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(63,81,181,0.06),transparent_70%)]" />

        {/* Clean, lightweight gray network grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] animate-[gridMove_40s_linear_infinite]" />
        
        {/* Architectural corner crosshair details to keep the precise tech feel */}
        <div className="absolute top-24 left-12 w-6 h-6 border-l border-t border-gray-200/80" />
        <div className="absolute top-24 right-12 w-6 h-6 border-r border-t border-gray-200/80" />
        <div className="absolute bottom-12 left-12 w-6 h-6 border-l border-b border-gray-200/80" />
        <div className="absolute bottom-12 right-12 w-6 h-6 border-r border-b border-gray-200/80" />
      </div>
 
      {/* ================= CONTENT STRUCTURE MATCHING image_cd2767.png ================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* whoami typing prompt - styled as clean tech-accent */}
        {/* <p className="font-mono mb-4 text-sm md:text-base text-[#3f51b5] font-semibold tracking-tight bg-indigo-50/60 inline-block px-3 py-1 rounded-md border border-indigo-100/50 shadow-sm">
          {whoamiText}
          <span className="animate-pulse bg-[#3f51b5] inline-block w-1.5 h-3.5 ml-0.5 align-middle"></span>
        </p> */}

        {/* Main Header Name */}
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-950">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-[#3f51b5] to-indigo-500">Aman</span>
        </h1>

        {/* Dynamic cycling role text */}
        <h2 className="mt-5 text-xl md:text-3xl text-gray-700 font-mono h-10 tracking-wide flex items-center justify-center gap-1">
          <span className="font-medium">{roleText}</span>
          <span className="text-[#3f51b5] animate-pulse font-extrabold">|</span>
        </h2>

        {/* Secondary description text */}
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base leading-relaxed tracking-wide font-normal">
          Cyber Security professional focused on offensive and defensive
          security. Hands-on with labs, CTFs, and real-world tooling.
        </p>

        {/* Action Button layout - Polished for Light Mode */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="/resume.pdf"
            className="w-full sm:w-auto bg-[#3f51b5] hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-semibold tracking-wide shadow-lg shadow-indigo-600/15 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Download Resume
          </a>
          <a
            href="#hire"
            className="w-full sm:w-auto bg-white border border-gray-200 text-gray-800 px-8 py-3.5 rounded-xl font-semibold tracking-wide hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-sm"
          >
            Why Hire me
          </a>
        </div>

        {/* Process baseline notification */}
        {/* <p className="mt-14 text-[11px] font-mono text-gray-400 tracking-[0.25em] uppercase">
          root@aman:~# access_granted
        </p> */}
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>
        {`
          @keyframes gridMove {
            from { background-position: 0 0; }
            to { background-position: 160px 160px; }
          }
        `}
      </style>
    </section>
  );
}

export default Hero;