import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Lock, FileWarning, Search, Bot, Database, Zap, Binary, Bug, CloudCheck, Network } from "lucide-react";

const redTeamSkills = [
  { name: "Web Application Exploitation", icon: Bug, desc: "Advanced logic & structure injection." },
  { name: "SQL Injection & XSS", icon: Database, desc: "Bypassing WAFs & data extraction." },
  { name: "Network Penetration Testing", icon: Zap, desc: "Full-stack active scanning & analysis." },
  { name: "Cloud & Container Exploitation", icon: CloudCheck, desc: "Container escape & misconfig discovery." },
  { name: "OSINT & Social Engineering", icon: Search, desc: "Open-source recon & human element." },
];

const blueTeamSkills = [
  { name: "SOC Analysis & Security Ops", icon: Bot, desc: "Real-time threat monitoring & triage." },
  { name: "SIEM & Log Correlation", icon: FileWarning, desc: "Splunk/Elastic pipeline management." },
  { name: "Honeypots & Active Defense", icon: Lock, desc: "Hacker misdirection & pattern capture." },
  { name: "Binary Analysis & Reverse Eng", icon: Binary, desc: "Malware behavior inspection." },
  { name: "Incident Response", icon: Network, desc: "Rapid breach isolation & post-mortem." },
];

/* =========================================================================
   ⌨️ INFINITE TYPING & DELETING LOOP H2 COMPONENT (Hero Style)
   ========================================================================= */
function InfiniteTypingHeader({ text }) {
  const [headerText, setHeaderText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 40 : 100;

    const timeout = setTimeout(() => {
      setHeaderText(
        isDeleting 
          ? text.slice(0, charIndex - 1) 
          : text.slice(0, charIndex + 1)
      );
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      // Once finished typing, pause then start deleting
      if (!isDeleting && charIndex === text.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      }
      // Once finished deleting, pause then restart typing
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, text]);

  return (
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-950 inline-block min-h-[60px]">
      {headerText}
      <span className="text-[#3f51b5] animate-pulse ml-1 font-extrabold">|</span>
    </h2>
  );
}

/* =========================================================================
   🛡️ LIGHT-THEME 3D EXPERTISE CARD COMPONENT
   ========================================================================= */
function SkillCard3D({ skill, mode }) {
  const Icon = skill.icon;
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (event) => {
    const rect = cardRef.current.getBoundingClientRect();
    setRotateX((event.clientY - rect.top - rect.height / 2) / 12); 
    setRotateY((event.clientX - rect.left - rect.width / 2) / 14);
  };

  const config = mode === "red" ? {
    border: "border-red-100 group-hover:border-red-400",
    iconBg: "bg-red-50/60 text-red-600", line: "bg-red-500", shadow: "group-hover:shadow-red-500/10",
  } : {
    border: "border-indigo-100 group-hover:border-[ #3f51b5]",
    iconBg: "bg-indigo-50/60 text-[#3f51b5]", line: "bg-[#3f51b5]", shadow: "group-hover:shadow-indigo-500/10",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setRotateX(0); setRotateY(0); }}
      style={{ transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`, transition: "transform 0.1s ease-out" }}
      className={`relative group rounded-2xl border ${config.border} bg-white px-8 py-7 overflow-hidden transition-all duration-300 hover:shadow-xl ${config.shadow}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.005)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.005)_1px,transparent_1px)] bg-[size:16px_16px]" />
      <div className="relative z-10 flex items-start gap-6">
        <div className={`p-4 ${config.iconBg} rounded-xl group-hover:scale-110 transition duration-300 shadow-sm`}>
          <Icon className="w-7 h-7" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-lg text-gray-950">{skill.name}</h4>
          <p className="mt-1 text-sm text-gray-500 font-mono tracking-tight leading-relaxed">{skill.desc}</p>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 h-[3px] ${config.line} transition-all duration-500 w-0 group-hover:w-full`} />
    </div>
  );
}

/* =========================================================================
   🌐 MAIN SKILLS SECTION COMPONEN
   ========================================================================= */
export default function Skills() {
  const [mode, setMode] = useState("blue");
  const skills = mode === "red" ? redTeamSkills : blueTeamSkills;

  return (
    <section
      id="skills"
      className="relative min-h-screen py-28 bg-[#fafafa] text-gray-900 overflow-hidden font-sans border-b border-gray-100"
    >
      {/* Background Matrix Mesh Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(63,81,181,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(63,81,181,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,250,250,0)_0%,#fafafa_80%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* ================= HEADLINE HEADER WITH HERO LOOP TYPING ================= */}
        <div className="text-center mb-16">
          <InfiniteTypingHeader text="Skills & Expertise" />
          
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Deep technical capability mapping across both <span className="text-red-500 font-semibold">Offensive Engineering</span> and <span className="text-[#3f51b5] font-semibold">Defensive Cyber Operations</span>.
          </p>
        </div>

        {/* ================= TOGGLE INTERFACE SWITCHES ================= */}
        <div className="flex justify-center mb-16">
          <div className="relative bg-white rounded-xl p-1.5 border border-gray-200/80 flex items-center gap-2 shadow-sm z-10">
            <button
              onClick={() => setMode("blue")}
              className={`px-8 py-2.5 rounded-lg font-mono text-xs md:text-sm font-bold transition-all ${
                mode === "blue" ? "bg-[#3f51b5] text-white shadow-md shadow-indigo-600/10" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              🛡️ Blue Team Operations
            </button>
            <button
              onClick={() => setMode("red")}
              className={`px-8 py-2.5 rounded-lg font-mono text-xs md:text-sm font-bold transition-all ${
                mode === "red" ? "bg-red-600 text-white shadow-md shadow-red-600/10" : "text-gray-500 hover:text-red-600"
              }`}
            >
              💥 Red Team Penetration
            </button>
          </div>
        </div>

        {/* ================= STAGGERED REVEAL SKILLS GRID ================= */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {skills.map((skill) => (
              <motion.div
                key={skill.name + mode} // Smooth animation switch on grid toggle
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.15 } }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <SkillCard3D skill={skill} mode={mode} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}