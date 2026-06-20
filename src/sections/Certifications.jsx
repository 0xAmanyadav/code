import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Award, Calendar, Download, Eye, ShieldAlert, Compass } from "lucide-react";

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

/* ================= CUSTOM TYPING TITLE (EXACT SAME MECHANISM) ================= */
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
      className="text-3xl md:text-4xl font-black text-gray-950 font-mono text-center tracking-tight md:font-extrabold mt-8 uppercase"
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
        scale: 1.08, // 🛠️ DYNAMIC HOVER ZOOM EFFECT
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
          <p className="font-mono text-xs font-bold tracking-[0.25em] text-gray-400 uppercase mb-3 block">
            CREDENTIAL_REGISTRY // SECURITY_PROFILES
          </p>
          <TypingTitle text="Professional Certifications" />
          <div className="w-12 h-1 bg-[#3f51b5] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-gray-500 max-w-md mx-auto font-normal">
            Completed professional achievements and structured path blueprints.
          </p>
        </div>

        {/* ================= VERIFIED ATTAINED CREDENTIALS ================= */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 mb-8"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-gray-400">
              Active Verified Accreditations
            </h3>
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
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 mb-8"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-gray-400">
              Target Framework Roadmap
            </h3>
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
            className="fixed inset-0 bg-gray-950/40 backdrop-blur-md flex items-center justify-center z-50 p-4 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.97, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97, y: 15 }}
              className="relative bg-white border border-gray-100 shadow-2xl rounded-3xl max-w-3xl w-full p-5 flex flex-col items-center overflow-hidden"
            >
              {/* Modal Window Top Header Bar Control */}
              <div className="w-full flex justify-between items-center pb-3 border-b border-gray-100 mb-4 bg-white">
                <span className="font-mono font-bold text-gray-900 text-xs tracking-wider uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3f51b5] animate-ping" /> VALIDATED_CREDENTIAL_IMAGE
                </span>
                <button
                  onClick={() => setOpenImg(null)}
                  className="text-gray-400 hover:text-gray-900 font-extrabold bg-gray-50 border border-gray-100 w-8 h-8 flex items-center justify-center rounded-xl transition shadow-2xs"
                >
                  ✕
                </button>
              </div>

              {/* Secure Media Rendering Area */}
              <div className="w-full bg-gray-50 rounded-2xl p-2 border border-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={openImg}
                  alt="Security Verification Ledger"
                  className="w-full rounded-xl max-h-[60vh] object-contain shadow-xs"
                />
              </div>

              {/* Structural Footer Controls */}
              <div className="w-full flex items-center justify-end gap-3 mt-4 pt-3 border-t border-gray-100">
                <a
                  href={openImg}
                  download
                  className="px-5 py-2.5 bg-[#3f51b5] text-white text-xs font-mono font-bold rounded-xl hover:bg-indigo-700 transition flex items-center gap-2 shadow-md shadow-indigo-600/10"
                >
                  <Download className="w-4 h-4" /> Download Certificate
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}