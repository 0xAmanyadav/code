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

/* ================= DYNAMIC TYPING TITLE ================= */
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
    }, 60);

    return () => clearInterval(id);
  }, [start, text]);

  return (
    <motion.h2
      className="text-3xl md:text-4xl font-extrabold text-gray-900 font-mono text-center tracking-tight"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setStart(true)}
    >
      {out}
      <span className="text-[#3f51b5] animate-pulse ml-0.5">▍</span>
    </motion.h2>
  );
}



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
    <h2 className="text-4xl md:text-4xl font-black tracking-tight text-gray-950 inline-block min-h-[60px]">
      {headerText}
      <span className="text-[#3f51b5] animate-pulse ml-1 font-extrabold">|</span>
    </h2>
  );
}




/* ================= ENHANCED DYNAMIC PROJECT CARD ================= */
function ProjectCard({ p, setOpenPdf }) {
  const isCompleted = p.status === "completed";
  
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02, 
        y: -6,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className={`relative w-full border-2 rounded-2xl p-6 flex flex-col justify-between h-full transition-all duration-300 group overflow-hidden bg-white shadow-md hover:shadow-2xl ${
        isCompleted 
          ? "border-emerald-500/20 hover:border-emerald-500" 
          : "border-indigo-500/20 hover:border-[#3f51b5]"
      }`}
    >
      {/* Side Decorative Accent Line inside Card */}
      <div className={`absolute top-0 left-0 w-1.5 h-0 transition-all duration-300 group-hover:h-full ${isCompleted ? 'bg-emerald-500' : 'bg-[#3f51b5]'}`} />

      <div>
        {/* Badges Matrix */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono font-medium tracking-wider text-gray-400 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-200 flex items-center gap-1 uppercase">
            <Layers className="w-3 h-3 text-gray-400" /> {p.category}
          </span>
          
          {isCompleted ? (
            <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 shadow-xs">
              <ShieldCheck className="w-3 h-3" /> SECURE
            </span>
          ) : (
            <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-indigo-50 text-[#3f51b5] border border-indigo-200 flex items-center gap-1 shadow-xs">
              <Activity className="w-3 h-3 animate-spin" /> COMPILING
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`text-lg font-extrabold text-gray-900 tracking-tight transition-colors duration-200 ${isCompleted ? 'group-hover:text-emerald-600' : 'group-hover:text-[#3f51b5]'}`}>
          {p.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-600 leading-relaxed font-normal mt-2.5 mb-5">
          {p.desc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tech.map((techItem, i) => (
            <span
              key={i}
              className="text-[10px] font-mono px-2 py-0.5 bg-gray-50 border border-gray-200 rounded text-gray-600 font-medium"
            >
              {techItem}
            </span>
          ))}
        </div>

        {/* Progress System Integration */}
        {p.status === "progress" && (
          <div className="mb-4 bg-gray-50/80 p-3 rounded-xl border border-indigo-100">
            <div className="flex justify-between text-[10px] font-mono text-indigo-500 mb-1.5">
              <span className="flex items-center gap-1 font-semibold">
                <Terminal className="w-3 h-3" /> build_environment...
              </span>
              <span className="font-bold text-indigo-700">{p.progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-indigo-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${p.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full bg-[#3f51b5] rounded-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* Action Links */}
      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100 mt-auto">
        <a 
          href={p.demo}
          className={`text-[11px] font-mono font-medium border border-gray-200 rounded-lg py-2 flex items-center justify-center gap-1 text-gray-600 bg-white shadow-xs transition-all duration-150 ${isCompleted ? 'hover:bg-emerald-600 hover:text-white hover:border-emerald-600' : 'hover:bg-[#3f51b5] hover:text-white hover:border-[#3f51b5]'}`}
        >
          <ExternalLink className="w-3 h-3" /> Live
        </a>
        <a 
          href={p.github}
          className={`text-[11px] font-mono font-medium border border-gray-200 rounded-lg py-2 flex items-center justify-center gap-1 text-gray-600 bg-white shadow-xs transition-all duration-150 ${isCompleted ? 'hover:bg-emerald-600 hover:text-white hover:border-emerald-600' : 'hover:bg-[#3f51b5] hover:text-white hover:border-[#3f51b5]'}`}
        >
          <Github className="w-3 h-3" /> Repo
        </a>
        <button
          onClick={() => setOpenPdf(p.writeup)}
          className={`text-[11px] font-mono font-medium border border-gray-200 rounded-lg py-2 flex items-center justify-center gap-1 text-gray-600 bg-white shadow-xs transition-all duration-150 ${isCompleted ? 'hover:bg-emerald-600 hover:text-white hover:border-emerald-600' : 'hover:bg-[#3f51b5] hover:text-white hover:border-[#3f51b5]'}`}
        >
          <FileText className="w-3 h-3" /> Writeup
        </button>
      </div>
    </motion.div>
  );
}

/* ================= MAIN INTERFACE COMPONENT ================= */
export default function Projects() {
  const [openPdf, setOpenPdf] = useState(null);

  const completed = projects.filter(p => p.status === "completed");
  const progress = projects.filter(p => p.status === "progress");

  return (
    <section id="projects" className="relative py-24 bg-[#fafafa] text-gray-900 overflow-hidden">
      {/* Soft Tech Background Overlay Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none bg-[linear-gradient(to_right,rgba(63,81,181,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(63,81,181,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* ================= MODERN MAIN SECTION HEADER ================= */}
        <div className="text-center mb-24 flex flex-col items-center justify-center">
         
          
          
          {/* Dynamic Typing Title Wrapper */}
          <div className="relative inline-block px-4">
            <InfiniteTypingHeader text="Project Status" />
          </div>
          
          {/* Sleek Underline Gradient Accent */}
          <div className="flex items-center gap-1.5 mt-4">
            <div className="w-8 h-[3px] bg-gradient-to-r from-emerald-500 to-[#3f51b5] rounded-full" />
            <div className="w-2 h-2 rounded-full bg-[#3f51b5] animate-ping" />
            <div className="w-8 h-[3px] bg-gradient-to-r from-[#3f51b5] to-emerald-500 rounded-full" />
          </div>

          {/* Sub-text Descriptor */}
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
           <span className="text-red-500 font-semibold"> Live deployment, </span> active vulnerability pipelines, and operational <span className="text-blue-500 font-semibold"> Cyber Defense</span> registries.
          </p>
        </div>

        {/* ================= SECTION 1: VERIFIED DEPLOYMENTS ================= */}
        <div className="mb-24">
          {/* Capsule Box Header inspired by image_ad96aa.png */}
          <div className="inline-flex items-center gap-3 mb-8 bg-white border border-emerald-100 rounded-full px-5 py-2.5 shadow-sm relative overflow-hidden pl-7">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500" />
            <span className="text-gray-500 font-mono text-xs font-bold tracking-wider flex items-center gap-1">
              &gt;_ ACTIVE <span className="text-emerald-600 font-extrabold">VERIFIED</span> ASSEMBLIES / PRODUCTION
            </span>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)] ml-1" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {completed.map((p, i) => (
              <ProjectCard key={i} p={p} setOpenPdf={setOpenPdf} />
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: ACTIVE PIPELINES ================= */}
        <div>
          {/* Capsule Box Header inspired by image_ad96aa.png */}
          <div className="inline-flex items-center gap-3 mb-8 bg-white border border-indigo-100 rounded-full px-5 py-2.5 shadow-sm relative overflow-hidden pl-7">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-indigo-500" />
            <span className="text-gray-500 font-mono text-xs font-bold tracking-wider flex items-center gap-1">
              &gt;_ ACTIVE <span className="text-[#3f51b5] font-extrabold">PIPELINES</span> / IN DEVELOPMENT
            </span>
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(63,81,181,0.6)] ml-1" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {progress.map((p, i) => (
              <ProjectCard key={i} p={p} setOpenPdf={setOpenPdf} />
            ))}
          </div>
        </div>

      </div>

      {/* PDF Viewport Overlay Modal */}
      <AnimatePresence>
        {openPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.98, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 10 }}
              className="w-full max-w-4xl h-[84vh] bg-white border border-gray-200 shadow-2xl rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="flex justify-between items-center px-5 py-3 border-b border-gray-200 bg-gray-50">
                <span className="font-mono font-bold text-gray-500 text-[10px] tracking-widest uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" /> DOCUMENT_VIEWER // {openPdf.split('/').pop()}
                </span>
                <button
                  onClick={() => setOpenPdf(null)}
                  className="text-gray-400 hover:text-gray-900 text-xs bg-white border border-gray-200 w-6 h-6 flex items-center justify-center rounded-md transition-all"
                >
                  ✕
                </button>
              </div>
              <div className="flex-1 bg-gray-50">
                <iframe src={openPdf} className="w-full h-full border-none" title="PDF Security Lab Workspace" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}