import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ================================
   🧠 EDIT ONLY THESE ARRAYS
================================ */

// 🔴 RED TEAM SKILLS
const redTeamSkills = [
  "Web Application Exploitation",
  "SQL Injection & XSS",
  "Privilege Escalation",
  "Network Penetration Testing",
  "Burp Suite & Nmap",
];

// 🔵 BLUE TEAM SKILLS
const blueTeamSkills = [
  "SOC Analysis",
  "Incident Response",
  "Threat Hunting",
  "SIEM & Log Analysis",
  "Network Defense",
];

/* ================================
   ⌨️ TERMINAL TYPING COMPONENT
================================ */
function TypingSkill({ text }) {
  const [out, setOut] = useState("");

  useEffect(() => {
    let i = 0;
    setOut("");
    const id = setInterval(() => {
      setOut(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(id);
    }, 40);

    return () => clearInterval(id);
  }, [text]);

  return (
    <span className="font-mono text-sm tracking-wide">
      {out}
      <span className="animate-pulse text-green-400">▍</span>
    </span>
  );
}

export default function Skills() {
  const [mode, setMode] = useState("blue"); // blue | red

  const skills = mode === "red" ? redTeamSkills : blueTeamSkills;
  const glowColor =
    mode === "red"
      ? "from-red-500/30 via-red-400/20 to-red-500/30"
      : "from-green-500/30 via-emerald-400/20 to-green-500/30";

  const borderColor =
    mode === "red" ? "border-red-500/30" : "border-green-500/30";

  const textColor = mode === "red" ? "text-red-400" : "text-green-400";

  return (
    <section
  id="skills"
  className={`relative py-28 text-white overflow-hidden ${
    mode === "red"
      ? "bg-gradient-to-b from-[#050000] via-red-950/40 to-[#050000]"
      : "bg-gradient-to-b from-[#050000] via-green-950/40 to-[#050000]"
  }`}
>

      {/* cyber grid */}
     {/* <div
  className={`absolute inset-0 opacity-[0.05] ${
    mode === "red"
      ? "bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)]"
      : "bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)]"
  } bg-[size:80px_80px]`}
/> */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />



      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-10">
          <h2
  className={`text-3xl md:text-4xl font-bold drop-shadow-[0_0_16px] ${
    mode === "red"
      ? "text-red-400 drop-shadow-[0_0_16px_rgba(239,68,68,0.8)]"
      : "text-green-400 drop-shadow-[0_0_16px_rgba(34,197,94,0.8)]"
  }`}
>

            Skills
          </h2>
          <p className="mt-3 text-gray-400">
            Offensive & Defensive cybersecurity expertise
          </p>
        </div>

        {/* 🔄 TOGGLE */}
        <div className="flex justify-center mb-14 gap-4 font-mono text-sm">
          <button
            onClick={() => setMode("blue")}
            className={`px-6 py-2 rounded-md border transition ${
              mode === "blue"
                ? "bg-green-500 text-black"
                : "border-green-500/40 text-green-400 hover:bg-green-500/10"
            }`}
          >
            🔵 Blue Team
          </button>

          <button
            onClick={() => setMode("red")}
            className={`px-6 py-2 rounded-md border transition ${
              mode === "red"
                ? "bg-red-500 text-black"
                : "border-red-500/40 text-red-400 hover:bg-red-500/10"
            }`}
          >
            🔴 Red Team
          </button>
        </div>

        {/* SKILLS GRID */}
        <div className="grid sm:grid-cols-2 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative group rounded-xl border ${borderColor} bg-black px-8 py-6 overflow-hidden`}
            >
              {/* glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r ${glowColor} blur-xl`}
              />

              {/* content */}
              <div className="relative z-10 flex items-center gap-4">
                <span className={`font-mono ${textColor}`}>▸</span>

                <TypingSkill text={skill} />
              </div>

              {/* bottom neon */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] w-0 ${
                  mode === "red" ? "bg-red-400" : "bg-green-400"
                } group-hover:w-full transition-all duration-500`}
              />
            </motion.div>
          ))}
        </div>

        {/* TERMINAL FOOTER */}
        <p className="mt-16 text-center font-mono text-green-400 text-sm">
          root@aman:~$ loading {mode}-team skills...
        </p>
      </div>
    </section>
  );
}
