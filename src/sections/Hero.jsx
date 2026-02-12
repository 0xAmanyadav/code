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
      className="relative h-screen w-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      
  {/* <CyberAttackMap /> */}
    {/* <CyberGlobe /> */}

      {/* ================= CYBER 3D BACKGROUND ================= */}
      {/* <div className="absolute inset-0 z-0"> */}
        {/* Grid */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,150,0.12),transparent_65%)]" /> */}

        {/* Moving cyber lines */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,150,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,150,0.08)_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMove_20s_linear_infinite]" /> */}

        {/* Scanline overlay */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.4)_50%,transparent_100%)] opacity-30 animate-pulse" />
      </div> */}

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* whoami */}
        <p className="font-mono mb-4 text-lg text-green-400">
          {whoamiText}
          <span className="animate-pulse">▍</span>
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I'm <span className="text-green-400">Aman</span>
        </h1>

        {/* Role typing */}
        <h2 className="mt-4 text-xl md:text-2xl text-gray-300 font-mono h-8">
          {roleText}
          <span className="text-green-400 animate-pulse">|
            
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-400">
          Cyber Security professional focused on offensive and defensive
          security. Hands-on with labs,CTFs, and real-world tooling.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/resume.pdf"
            className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold shadow-lg shadow-green-500/30"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="border border-green-500 text-green-400 px-6 py-3 rounded hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>

        {/* Terminal footer */}
        <p className="mt-10 text-sm font-mono text-green-400">
          root@aman:~# access granted
        </p>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>
        {`
          @keyframes gridMove {
            from { background-position: 0 0; }
            to { background-position: 200px 200px; }
          }
        `}
      </style>
    </section>
  );
}

export default Hero;
