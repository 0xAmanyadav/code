import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ExternalLink, Github, FileText, Activity, ShieldCheck, Terminal, Layers } from "lucide-react";

/* ================= AMAN'S EXPLORATORY PROJECT MATRIX DATA ================= */
const projects = [
  {
    title: "Network Sniffing Platform",
    desc: "Engineered a low-level packet capturing utility capable of dissecting live IPv4 structure, parsing hardware MAC coordinates, and decoding transport layer protocol data payloads recursively.",
    tech: ["Python", "Scapy", "Sockets"],
    demo: "#",
    github: "https://github.com/0xAmanyadav/Codealpha_Network_Sniffing",
    writeup: "/public/prateek.pdf",
    status: "completed",
    category: "Network Forensic"
  },
  {
    title: "Vulnerability Scanner",
    desc: "Automated vulnerability mapping daemon that actively scrutinizes target end-points for Reflected XSS vulnerabilities, asynchronous SQL injection vulnerabilities, and open operational ports.",
    tech: ["Python", "Flask", "Nmap API"],
    demo: "#",
    github: "#",
    writeup: "/writeups/vulnscanner.pdf",
    status: "progress",
    progress: 65,
    category: "Offensive Security"
  },
  {
    title: "SOC Log Analyzer",
    desc: "An enterprise threat intelligence log parser and SIEM dashboard designed to correlate system authentication records and detect brute-force clusters in cloud sandboxes.",
    tech: ["ELK Stack", "SIEM", "Linux Core"],
    demo: "#",
    github: "#",
    writeup: "/writeups/soclog.pdf",
    status: "progress",
    progress: 40,
    category: "Defensive Operations"
  },
];

/* ================= EXACT SAME DYNAMIC TYPING LOGIC ================= */
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
      className="text-3xl md:text-4xl font-black text-gray-950 font-mono text-center tracking-tight"
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

/* ================= PREMIUM BENTO-STYLE PROJECT CARD (1.08x ZOOM) ================= */
function ProjectCard({ p, setOpenPdf }) {
  const isCompleted = p.status === "completed";
  
  return (
    <motion.div
      whileHover={{ 
        scale: 1.08, // 🛠️ ENHANCED TO EXACT 1.08x ARSENAL STANDARD
        y: -6,
        transition: { duration: 0.25, ease: "easeInOut" }
      }}
      className="relative w-full bg-white border border-gray-100 rounded-3xl p-7 flex flex-col justify-between h-full shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(63,81,181,0.06)] transition-all duration-300 group overflow-hidden"
    >
      {/* Structural Accent Top-Left Line Highlighting */}
      <div className="absolute top-0 left-0 w-1.5 h-0 bg-[#3f51b5] group-hover:h-full transition-all duration-300 rounded-r-md" />

      <div>
        {/* Category Label & Status Matrix Row */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-[10px] font-mono font-bold tracking-wider text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100 flex items-center gap-1.5 uppercase">
            <Layers className="w-3 h-3 text-indigo-400" /> {p.category}
          </span>
          
          {/* Status Badge */}
          {isCompleted ? (
            <span className="text-[10px] font-mono font-bold tracking-wide px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> SECURE
            </span>
          ) : (
            <span className="text-[10px] font-mono font-bold tracking-wide px-3 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-100 flex items-center gap-1">
              <Activity className="w-3 h-3 animate-spin" /> COMPILING
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-extrabold text-gray-950 tracking-tight transition-colors duration-200 group-hover:text-[#3f51b5]">
          {p.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed font-normal mt-3 mb-6">
          {p.desc}
        </p>

        {/* Technical Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {p.tech.map((techItem, i) => (
            <span
              key={i}
              className="text-[11px] font-mono font-semibold px-3 py-1 bg-gray-50/70 border border-gray-200/50 rounded-xl text-gray-600"
            >
              {techItem}
            </span>
          ))}
        </div>

        {/* Progress System Integration */}
        {p.status === "progress" && (
          <div className="mb-6 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
            <div className="flex justify-between text-xs font-mono font-bold text-gray-600 mb-2">
              <span className="flex items-center gap-1.5 text-amber-600">
                <Terminal className="w-3.5 h-3.5" /> environment_building...
              </span>
              <span className="text-gray-900">{p.progress}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200/60 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${p.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.3)]"
              />
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons Block */}
      <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-gray-50 mt-auto">
        <a 
          href={p.demo}
          className="text-xs font-mono font-bold border border-gray-100 rounded-xl py-3 flex items-center justify-center gap-1.5 text-gray-600 bg-gray-50/30 hover:bg-[#3f51b5] hover:text-white hover:border-[#3f51b5] transition-all duration-200"
        >
          <ExternalLink className="w-3.5 h-3.5" /> Live
        </a>
        <a 
          href={p.github}
          className="text-xs font-mono font-bold border border-gray-100 rounded-xl py-3 flex items-center justify-center gap-1.5 text-gray-600 bg-gray-50/30 hover:bg-[#3f51b5] hover:text-white hover:border-[#3f51b5] transition-all duration-200"
        >
          <Github className="w-3.5 h-3.5" /> Repo
        </a>
        <button
          onClick={() => setOpenPdf(p.writeup)}
          className="text-xs font-mono font-bold border border-gray-100 rounded-xl py-3 flex items-center justify-center gap-1.5 text-gray-600 bg-gray-50/30 hover:bg-[#3f51b5] hover:text-white hover:border-[#3f51b5] transition-all duration-200"
        >
          <FileText className="w-3.5 h-3.5" /> Writeup
        </button>
      </div>
    </motion.div>
  );
}

/* ================= MAIN INTERFACE WRAPPER ================= */
export default function Projects() {
  const [openPdf, setOpenPdf] = useState(null);

  const completed = projects.filter(p => p.status === "completed");
  const progress = projects.filter(p => p.status === "progress");

  return (
    <section 
      id="projects" 
      className="relative py-32 bg-[#fafafa] text-gray-900 font-sans border-b border-gray-100 overflow-hidden"
    >
      {/* Mesh Coordinates Grid Base Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.35] pointer-events-none bg-[linear-gradient(to_right,rgba(63,81,181,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(63,81,181,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* ================= HEADER SECTION WITH TRIGGER SCRIPT TYPING EFFECT ================= */}
        <div className="text-center mb-28">
          <p className="font-mono text-xs font-bold tracking-[0.25em] text-gray-400 uppercase mb-3 block">
            LAB_BUILD_OUTPUTS // CORE_DEPLOYMENTS
          </p>
          <TypingTitle text="Project Matrix Status" />
          <div className="w-12 h-1 bg-[#3f51b5] mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-base text-gray-500 max-w-sm mx-auto font-normal">
            Completed deployments and active defensive frameworks built in lab configurations.
          </p>
        </div>

        {/* ================= PRODUCTION DEPLOYED SYSTEMS ================= */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-gray-400">
              Verified Assemblies [Production]
            </h3>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {completed.map((p, i) => (
              <ProjectCard key={i} p={p} setOpenPdf={setOpenPdf} />
            ))}
          </div>
        </div>

        {/* ================= ACTIVE DEVELOPMENT PIPELINES ================= */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-gray-400">
              Active Pipelines [Development]
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {progress.map((p, i) => (
              <ProjectCard key={i} p={p} setOpenPdf={setOpenPdf} />
            ))}
          </div>
        </div>

      </div>

      {/* ================= HIGH-END MODAL VIEWPORTS (PDF SYSTEM WRAPPER) ================= */}
      <AnimatePresence>
        {openPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-950/30 backdrop-blur-md flex items-center justify-center z-50 p-4 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.97, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97, y: 20 }}
              className="w-full max-w-5xl h-[88vh] bg-white border border-gray-100 shadow-2xl rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="flex justify-between items-center px-6 py-4.5 border-b border-gray-100 bg-gray-50/50">
                <span className="font-mono font-bold text-gray-900 text-xs tracking-widest uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3f51b5] animate-ping" /> SECURE_DOCUMENT_VIEWER // WRITEOUP.SYS
                </span>
                <button
                  onClick={() => setOpenPdf(null)}
                  className="text-gray-400 hover:text-gray-900 font-extrabold bg-white border border-gray-200/60 w-8 h-8 flex items-center justify-center rounded-xl transition-all duration-150 shadow-xs hover:border-gray-300"
                >
                  ✕
                </button>
              </div>
              
              <div className="flex-1 bg-gray-50">
                <iframe 
                  src={openPdf} 
                  className="w-full h-full border-none" 
                  title="Aman's Security Lab Portfolio PDF Viewer" 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}