import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ================= AMAN'S SECURITY TOOLS DATA WITH LOGO MAPPING ================= */
const toolsData = [
  {
    name: "Nmap",
    category: "Network Discovery",
    logoPath: "/Tools_logo/nmap.png",
    description: "Used for network discovery, packet mapping, and vulnerability port scans.",
  },
  {
    name: "Wireshark",
    category: "Packet Analysis",
    logoPath: "/Tools_logo/wire.png",
    description: "Deep inspection of live network packets and protocol dissection.",
  },
  {
    name: "Burp Suite",
    category: "Web App Pentesting",
    logoPath: "/Tools_logo/burp.png",
    description: "Intercepting web traffic to identify OWASP Top 10 vulnerabilities.",
  },
  {
    name: "Metasploit",
    category: "Exploitation Framework",
    logoPath: "/Tools_logo/meta.png",
    description: "Developing, testing, and executing modular exploit payloads against targets.",
  },
  {
    name: "John the Ripper",
    category: "Password Cracking",
    logoPath: "/Tools_logo/john.png",
    description: "Fast, automated cryptographic password cracking and hash analysis.",
  },
  {
    name: "Linux Core / Bash",
    category: "System Administration",
    logoPath: "/Tools_logo/kl.png",
    description: "Writing complex deployment scripts, log parsers, and system automation.",
  },
];

/* ================= PRESERVED MAXIMUM BOLD TYPING HEADER LOGIC ================= */
function TypingTitle({ text }) {
  const [out, setOut] = useState("");
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) return;
    setOut("");
    let i = 0;

    const id = setInterval(() => {
      setOut(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(id);
    }, 70);

    return () => clearInterval(id);
  }, [start, text]);

  return (
    <motion.h2
      className="text-3xl md:text-5xl font-black text-gray-950 font-mono text-center tracking-tight uppercase"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      onViewportEnter={() => setStart((p) => !p)}
    >
      {out}
      <span className="text-[#3f51b5] animate-pulse ml-0.5">▍</span>
    </motion.h2>
  );
}

/* =================⌨️ HERO STYLE INFINITE TYPING & DELETING LOOP ================= */
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
          : text.slice(0, charIndex + 1),
      );
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      if (!isDeleting && charIndex === text.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      }
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, text]);

  return (
    <h2 className="text-4xl md:text-4xl font-black tracking-tight text-gray-950 inline-block min-h-[60px] font-sans uppercase">
      {headerText}
      <span className="text-[#3f51b5] animate-pulse ml-1 font-extrabold">▍</span>
    </h2>
  );
}

/* ================= PREMIUM RESTRUCTURED BENTO CARD FOR TOOLS ================= */
function ToolCard({ tool, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.08, // 🛠️ FIXED: Standardized to match uniform system layout architecture
        y: -5,
        transition: { duration: 0.25, ease: "easeInOut" },
      }}
      className="relative w-full bg-white border border-gray-100 rounded-3xl p-6 flex flex-col justify-between h-full shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(63,81,181,0.06)] transition-all duration-300 group overflow-hidden"
    >
      {/* Top Left Indicator Accent Stripe */}
      <div className="absolute top-0 left-0 w-1.5 h-0 bg-[#3f51b5] group-hover:h-full transition-all duration-300 rounded-r-md" />

      <div>
        <div className="flex items-center justify-between gap-4 mb-5">
          {/* Logo Viewport Canvas Frame */}
          <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100/80 p-2.5 flex items-center justify-center transition-all duration-300 group-hover:bg-indigo-50/50 group-hover:border-indigo-100 overflow-hidden">
            <img
              src={tool.logoPath}
              alt={`${tool.name} Mark`}
              className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>

        {/* Technical Specification Rows */}
        <span className="text-[10px] font-mono font-bold tracking-wider text-indigo-500/80 block uppercase mb-1">
          {tool.category}
        </span>
        <h3 className="text-xl font-extrabold text-gray-950 tracking-tight transition-colors duration-200">
          {tool.name}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed font-normal mt-2">
          {tool.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ================= CORE SYSTEM INTERFACE MAIN ENTRY ================= */
export default function Tools() {
  return (
    <section
      id="tools"
      className="relative py-32 bg-[#fafafa] text-gray-900 font-sans border-b border-gray-100 overflow-hidden"
    >
      {/* Geometry Structural Layout Mesh Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.35] pointer-events-none bg-[linear-gradient(to_right,rgba(63,81,181,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(63,81,181,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* ================= HEADER DISPATCH STRIP ================= */}
        <div className="text-center mb-24 flex flex-col items-center justify-center">
         
          
          {/* Centered Loop Framework Header wrapper */}
          <div className="flex justify-center w-full">
            <InfiniteTypingHeader text="Security Tools" />
          </div>

          {/* 🛠️ FIXED: Centered Pulse Interactive Accent Divider Layout */}
          <div className="flex items-center justify-center gap-1.5 mt-2">
            <div className="w-10 h-[2px] bg-gradient-to-r from-emerald-500/80 to-indigo-500/40 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-[#3f51b5] animate-ping" />
            <div className="w-10 h-[2px] bg-gradient-to-r from-indigo-500/40 to-amber-500/80 rounded-full" />
          </div>

          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Operational frameworks and  <span className="text-red-500 font-semibold">Defensive monitoring systems</span>configured in sandbox pipelines.
          </p>
        </div>

        {/* ================= TOOLS ADAPTIVE METRIC BENTO GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolsData.map((tool, i) => (
            <ToolCard key={i} tool={tool} index={i} />
          ))}
        </div>
        
      </div>
    </section>
  );
}