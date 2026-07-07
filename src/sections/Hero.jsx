import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Shield, Terminal, Zap, FileText } from "lucide-react";

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

  /* ---------------- Modal States ---------------- */
  const [isPitchOpen, setIsPitchOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  /* ---------------- Scroll Lock Effect ---------------- */
  useEffect(() => {
    if (isPitchOpen || isResumeOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [isPitchOpen, isResumeOpen]);

  return (
    <section
      id="home"
      // 🛠️ FIX 1: Explicit h-screen ko min-h-screen aur width ko w-full lock par badla taaki automatic sizing identical ho
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#fafafa] text-gray-900 overflow-hidden font-sans py-[clamp(4rem,10vh,12rem)] border-b border-gray-100"
    >
      {/* ================= PREMIUM LIGHT CYBER BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(63,81,181,0.06),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:40px_40px] animate-[gridMove_40s_linear_infinite]" />
        
        {/* Responsive Corner Brackets */}
        <div className="absolute top-28 left-8 w-6 h-6 border-l border-t border-gray-200/80 hidden sm:block" />
        <div className="absolute top-28 right-8 w-6 h-6 border-r border-t border-gray-200/80 hidden sm:block" />
        <div className="absolute bottom-16 left-8 w-6 h-6 border-l border-b border-gray-200/80 hidden sm:block" />
        <div className="absolute bottom-16 right-8 w-6 h-6 border-r border-b border-gray-200/80 hidden sm:block" />
      </div>
 
      {/* ================= CONTENT STRUCTURE CONTAINER ================= */}
      {/* 🛠️ FIX 2: Wrapped layout components into a clean, auto-scaling flex frame wrapper */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center flex-1">
        
       

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-950 leading-none">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-[#3f51b5] to-indigo-500">Aman</span>
        </h1>

        {/* 🛠️ FIX 3: Dynamic height tracking anchor to prevent cards below from dancing on string update */}
        <div className="h-[50px] flex items-center justify-center mt-4">
          <h2 className="text-xl md:text-3xl text-gray-700 font-mono tracking-wide flex items-center gap-1.5 font-medium">
            {roleText}
            <span className="text-[#3f51b5] animate-pulse font-extrabold">▍</span>
          </h2>
        </div>

        <p className="mt-5 text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-normal">
          Cyber Security professional focused on offensive and defensive security. Hands-on with labs, CTFs, and real-world tooling.
        </p>

        {/* CTA Interaction Controls */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => setIsResumeOpen(true)}
            className="w-full sm:w-auto bg-[#3f51b5] hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-indigo-600/15 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View Resume
          </button>
          
          <button
            onClick={() => setIsPitchOpen(true)}
            className="w-full sm:w-auto bg-white border border-gray-200 text-gray-800 px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide hover:bg-gray-50 hover:border-[#3f51b5] hover:text-[#3f51b5] transition-all duration-300 shadow-xs"
          >
            Why Hire me
          </button>
        </div>
      </div>

      {/* ================= PITCH MODAL OVERLAY ================= */}
      <AnimatePresence>
        {isPitchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/30 backdrop-blur-md"
            onClick={() => setIsPitchOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.97, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex justify-between items-center">
                <h3 className="font-mono text-xs tracking-widest uppercase font-bold text-gray-400 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#3f51b5]" />
                  value_proposition.md
                </h3>
                <button 
                  onClick={() => setIsPitchOpen(false)}
                  className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-xl text-gray-400 hover:text-gray-900 transition-all shadow-xs"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  I don't just find vulnerabilities; I build systems that prevent them. Here is what I bring to your team:
                </p>

                <div className="space-y-5">
                  <div className="flex gap-4 items-start">
                    <div className="p-2.5 bg-emerald-50 rounded-xl shrink-0 border border-emerald-100 text-emerald-600">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-gray-900 tracking-tight">Offensive & Defensive Hybrid</h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">Proficient in MERN stack development alongside network sniffing and vulnerability scanning. I secure code because I know how to write it.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="p-2.5 bg-amber-50 rounded-xl shrink-0 border border-amber-100 text-amber-600">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-gray-900 tracking-tight">Proven Under Pressure</h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">Lead Integrator at National Smart India Hackathon, deploying a robust MVP with real-time anti-cheating mechanisms.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="p-2.5 bg-indigo-50 rounded-xl shrink-0 border border-indigo-100 text-[#3f51b5]">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-gray-900 tracking-tight">Continuous CTF Competitor</h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">Actively solving labs on HackTheBox and TryHackMe, staying updated with the latest CVEs and exploitation techniques.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-end">
                <button 
                  onClick={() => setIsPitchOpen(false)}
                  className="px-5 py-2.5 bg-[#3f51b5] text-white text-xs font-mono font-bold tracking-wide rounded-xl hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  Close Terminal
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= RESUME PDF MODAL OVERLAY ================= */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/30 backdrop-blur-md"
            onClick={() => setIsResumeOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.97, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97, y: 20 }}
              className="relative w-full max-w-5xl h-[88vh] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-50/50 border-b border-gray-100 px-6 py-4 flex justify-between items-center shrink-0">
                <h3 className="font-mono text-xs tracking-widest uppercase font-bold text-gray-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#3f51b5]" />
                  Aman_Yadav_Resume.pdf
                </h3>
                <div className="flex items-center gap-4">
                  <a 
                    href="/Aman.pdf" 
                    download
                    className="text-xs font-mono font-bold text-[#3f51b5] hover:text-indigo-700 transition-colors"
                  >
                    Download PDF
                  </a>
                  <button 
                    onClick={() => setIsResumeOpen(false)}
                    className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-xl text-gray-400 hover:text-gray-900 transition-all shadow-xs"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-gray-50 relative w-full h-full">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 z-0">
                  <FileText className="w-12 h-12 mb-2 opacity-40 animate-pulse" />
                  <p className="text-xs font-mono">Loading Security Portfolio Document...</p>
                </div>
                <iframe 
                  src="/Aman.pdf" 
                  className="relative z-10 w-full h-full border-none"
                  title="Aman Yadav Resume Ledger"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
          @keyframes gridMove {
            from { background-position: 0 0; }
            to { background-position: 40px 40px; }
          }
        `}
      </style>
    </section>
  );
}

export default Hero;