import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* ================= PROJECT DATA ================= */
const projects = [
  {
    title: "Network Sniffing",
    desc: "Capture live network packets, IPv4, MAC & protocols.",
    tech: ["Python", "Scapy"],
    demo: "#",
    github: "https://github.com/0xAmanyadav/Codealpha_Network_Sniffing",
    writeup: "/public/prateek.pdf",
    status: "completed",
  },
  {
    title: "Vulnerability Scanner",
    desc: "Automated scanner for XSS, SQLi & open ports.",
    tech: ["Python", "Flask", "Nmap"],
    demo: "#",
    github: "#",
    writeup: "/writeups/vulnscanner.pdf",
    status: "progress",
    progress: 65,
  },
  {
    title: "SOC Log Analyzer",
    desc: "Threat detection dashboard for blue team.",
    tech: ["ELK", "SIEM", "Linux"],
    demo: "#",
    github: "#",
    writeup: "/writeups/soclog.pdf",
    status: "progress",
    progress: 40,
  },
];

/* ================= TYPING TITLE (ON SCROLL) ================= */
function TypingTitleOnScroll({ text }) {
  const [out, setOut] = useState("");
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) return;

    let i = 0;
    setOut("");
    const id = setInterval(() => {
      setOut(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(id);
    }, 70);

    return () => clearInterval(id);
  }, [start, text]);

  return (
    <motion.h2
      onViewportEnter={() => setStart(true)}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-green-400 font-mono"
    >
      {out}
      <span className="animate-pulse">▍</span>
    </motion.h2>
  );
}

/* ================= PROJECT CARD ================= */
function ProjectCard({ p, setOpenPdf }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="relative w-full max-w-md border border-green-500/30 rounded-xl p-6 hover:bg-green-500/10 transition group"
    >
      <div className="absolute -inset-1 bg-green-500/10 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition" />

      <div className="relative z-10">
        <h3 className="text-lg font-semibold group-hover:text-green-400">
          {p.title}
        </h3>

        <p className="mt-3 text-sm text-gray-400">{p.desc}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs font-mono px-2 py-1 border border-green-500/30 rounded-md text-green-400"
            >
              {t}
            </span>
          ))}
        </div>

        {/* PROGRESS BAR */}
        {p.status === "progress" && (
          <div className="mt-6">
            <div className="flex justify-between text-xs font-mono text-yellow-400 mb-1">
              <span>Progress</span>
              <span>{p.progress}%</span>
            </div>

            <div className="w-full h-2 bg-yellow-900/30 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${p.progress}%` }}
                transition={{ duration: 1.2 }}
                className="h-full bg-yellow-400 shadow-[0_0_12px_#facc15]"
              />
            </div>
          </div>
        )}

        <div className="mt-8 grid grid-cols-3 gap-3">
          <a className="text-xs font-mono border border-green-500/30 rounded-md py-3 text-center hover:bg-green-500 hover:text-black transition">
            Live
          </a>
          <a className="text-xs font-mono border border-green-500/30 rounded-md py-3 text-center hover:bg-green-500 hover:text-black transition">
            GitHub
          </a>
          <button
            onClick={() => setOpenPdf(p.writeup)}
            className="text-xs font-mono border border-green-500/30 rounded-md py-3 hover:bg-green-500 hover:text-black transition"
          >
            Writeup
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ================= MAIN ================= */
export default function Projects() {
  const [openPdf, setOpenPdf] = useState(null);

  const completed = projects.filter(p => p.status === "completed");
  const progress = projects.filter(p => p.status === "progress");

  return (
    <section id="projects" className="relative py-28 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#22c55e_1px,transparent_1px),linear-gradient(to_bottom,#22c55e_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* MAIN TITLE (TYPING ON SCROLL) */}
        <div className="text-center mb-20">
          <p className="font-mono text-green-400 mb-2">
            root@aman:~$ ls projects
          </p>
          <TypingTitleOnScroll text="Projects Status" />

          
          <p className="mt-3 text-gray-400">Completed & ongoing builds</p>
        </div>

        {/* COMPLETED */}
        <div className="mb-28">
          <h2 className="text-3xl font-bold text-green-400 font-mono">
            Completed Projects
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-8 place-items-center">
            {completed.map((p, i) => (
              <ProjectCard key={i} p={p} setOpenPdf={setOpenPdf} />
            ))}
          </div>
        </div>

        {/* IN PROGRESS */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400 font-mono">
            Projects In Progress
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-8 place-items-center">
            {progress.map((p, i) => (
              <ProjectCard key={i} p={p} setOpenPdf={setOpenPdf} />
            ))}
          </div>
        </div>
      </div>

      {/* PDF MODAL */}
      <AnimatePresence>
        {openPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-[95%] h-[90%] bg-[#0b1220] border border-green-500/30 rounded-xl overflow-hidden"
            >
              <div className="flex justify-between px-4 py-2 border-b border-green-500/20">
                <span className="font-mono text-green-400 text-sm">
                  Project Writeup
                </span>
                <button
                  onClick={() => setOpenPdf(null)}
                  className="text-red-400 hover:text-red-300"
                >
                  ✕
                </button>
              </div>
              <iframe src={openPdf} className="w-full h-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
