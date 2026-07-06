import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Award, Calendar, Download, Eye, ShieldAlert, Compass, Terminal, Cpu } from "lucide-react";
import { InfiniteTypingHeader } from "./Ranks";
const certifications = [
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    status: "planned",
    link: "#",
  },
  {
    title: "Cyber Security Intern",
    issuer: "Code Alpha",
    status: "done",
    link: "/public/Certifications/intenship.jpeg",
  },
  {
    title: "Security+",
    issuer: "CompTIA",
    status: "planned",
    link: "#",
  },
  {
    title: "Hackathon Participation",
    issuer: "GLA University",
    status: "done",
    link: "/public/Certifications/hacka.png",
  },
  {
    title: "Python for Absolute Beginners",
    issuer: "EC-Council",
    status: "done",
    link: "/public/Certifications/ec-py.png",
  },
];

/* ================= OPTIMIZED SCROLL-TRIGGERED TYPING TITLE ================= */
function TypingTitle({ text }) {
  const chars = Array.from(text);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.04 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline" }
  };

  return (
    <motion.h2
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      className="text-3xl md:text-4xl font-black text-gray-950 font-mono text-center tracking-tight md:font-extrabold mt-8 uppercase min-h-[40px]"
    >
      {chars.map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
      <span className="text-[#3f51b5] animate-pulse ml-0.5">▍</span>
    </motion.h2>
  );
}

/* ================= MODERN BENTO CERTIFICATE CARD ================= */
function CertCard({ cert, index, onOpen }) {
  const isDone = cert.status === "done";

  return (
    <motion.div
      onClick={() => isDone && onOpen(cert.link)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05, 
        y: -4,
        transition: { duration: 0.2 }
      }}
      className={`relative border border-gray-100 bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(63,81,181,0.05)] transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
        isDone ? "cursor-pointer" : "cursor-not-allowed opacity-80"
      }`}
    >
      {/* Top Left Decorative Bar on Hover */}
      {isDone && (
        <div className="absolute top-0 left-0 w-1.5 h-0 bg-[#3f51b5] group-hover:h-full transition-all duration-300 rounded-r-md" />
      )}

      <div>
        {/* Card Header Badge Metadata Row */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-indigo-50/50 group-hover:border-indigo-100 transition-colors duration-200">
            {isDone ? (
              <Award className="w-5 h-5 text-[#3f51b5]" />
            ) : (
              <Compass className="w-5 h-5 text-amber-500" />
            )}
          </div>

          <span
            className={`text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded-full border uppercase ${
              isDone
                ? "bg-emerald-50 border-emerald-100 text-emerald-600"
                : "bg-amber-50 border-amber-100 text-amber-600"
            }`}
          >
            {isDone ? "VERIFIED" : "QUEUE"}
          </span>
        </div>

        {/* Credentials Identity Data */}
        <h3 className="text-lg font-bold text-gray-950 group-hover:text-[#3f51b5] transition-colors duration-200 leading-tight">
          {cert.title}
        </h3>
        <p className="mt-1.5 text-xs text-gray-400 font-medium tracking-wide">
          Authority: <span className="text-gray-600">{cert.issuer}</span>
        </p>
      </div>

      {/* Action Indicator Row Footer */}
      <div className="mt-8 pt-4 border-t border-gray-50 flex items-center justify-between">
        <span className="font-mono text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-gray-600 transition-colors">
          {isDone ? "sys_view // credentials" : "sys_wait // planned"}
        </span>
        {isDone ? (
          <Eye className="w-4 h-4 text-[#3f51b5] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
        ) : (
          <ShieldAlert className="w-4 h-4 text-amber-500/60" />
        )}
      </div>
    </motion.div>
  );
}

/* ================= MAIN INTERFACE WRAPPER ================= */
export default function Certifications() {
  const [openImg, setOpenImg] = useState(null);

  const done = certifications.filter((c) => c.status === "done");
  const planned = certifications.filter((c) => c.status === "planned");

  return (
    <section
      id="certifications"
      className="relative py-32 bg-[#fafafa] text-gray-900 font-sans border-b border-gray-100 overflow-hidden"
    >
      {/* Structural Geometry Coordinates Overlay Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.35] pointer-events-none bg-[linear-gradient(to_right,rgba(63,81,181,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(63,81,181,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* ================= HEADER SECTION WITH ACTIVE TYPING EFFECT ================= */}
        <div className="text-center mb-24 ">
          <InfiniteTypingHeader text="Professional Certifications" />
          {/* Sleek Underline Gradient Accent */}
          <div className="flex items-center justify-center gap-1.5 mt-2">
            <div className="w-10 h-[2px] bg-gradient-to-r from-emerald-500/80 to-indigo-500/40 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-[#3f51b5] animate-ping" />
            <div className="w-10 h-[2px] bg-gradient-to-r from-indigo-500/40 to-amber-500/80 rounded-full" />
          </div>
          <p className="mt-4 text-base text-gray-600 max-w-md mx-auto font-normal">
            Completed professional <span className="text-blue-800 font-bold">achievements</span> and structured path blueprints.
          </p>
        </div>

        {/* ================= VERIFIED ATTAINED CREDENTIALS ================= */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, scaleX: 0.9, originX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-3 mb-8 px-4 py-2.5 bg-white border border-emerald-100/70 rounded-xl shadow-[0_2px_10px_rgba(16,185,129,0.02)] relative overflow-hidden group"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-emerald-500" />
            <Terminal className="w-4 h-4 text-emerald-500 animate-pulse" />
            <h3 className="text-xs font-mono font-extrabold uppercase tracking-widest text-gray-500">
              Active <span className="text-emerald-600 font-mono shadow-emerald-100">Verified</span> Accreditations
            </h3>
            <span className="flex h-2 w-2 relative ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {done.map((cert, i) => (
              <CertCard key={i} cert={cert} index={i} onOpen={setOpenImg} />
            ))}
          </div>
        </div>

        {/* ================= UPCOMING BLUEPRINT CREDS ================= */}
        <div>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0.9, originX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="inline-flex items-center gap-3 mb-8 px-4 py-2.5 bg-white border border-amber-100/70 rounded-xl shadow-[0_2px_10px_rgba(245,158,11,0.02)] relative overflow-hidden group"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-amber-500" />
            <Cpu className="w-4 h-4 text-amber-500" />
            <h3 className="text-xs font-mono font-extrabold uppercase tracking-widest text-gray-500">
              Target <span className="text-amber-600 font-mono">Framework</span> Roadmap
            </h3>
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60 animate-bounce" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {planned.map((cert, i) => (
              <CertCard key={i} cert={cert} index={i} onOpen={setOpenImg} />
            ))}
          </div>
        </div>
      </div>

      {/* ================= HIGH FIDELITY MEDIA VIEWPORT DIALOG MODAL ================= */}
      <AnimatePresence>
        {openImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenImg(null)}
            className="fixed inset-0 bg-gray-950/40 backdrop-blur-md flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl max-h-[85vh] bg-white p-2 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={openImg} alt="Certification Preview" className="max-w-full max-h-[80vh] object-contain rounded-xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  ); 
}
