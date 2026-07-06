import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowUpCircle, Check, Copy } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  // लाइव डिजिटल क्लॉक टर्मिनल वाइब के लिए
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toTimeString().split(" ")[0]); // HH:MM:SS फॉर्मेट
    };
    updateClock();
    const id = setInterval(updateClock, 1000);
    return () => clearInterval(id);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("amanyadav41569@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#fdfdfd] to-gray-50 text-gray-500 border-t border-gray-100 overflow-hidden">
      {/* Subtle Mesh Background Grid */}
      <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(63,81,181,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(63,81,181,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-8 py-5">
        
        {/* ================= TOP BLOCK: TERMINAL OUTPUT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Cyber Status & Live Time Matrix */}
          <div className="inline-flex items-center gap-3 font-mono text-[11px] font-bold text-indigo-500 bg-indigo-50/40 px-3 py-1 rounded-full border border-indigo-100/30 mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>root@aman:~$ exit_session --success</span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500 font-medium">SYS_TIME: {time || "00:00:00"}</span>
          </div>

          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Thanks for Visiting
          </h3>

          <p className="mt-2 text-xs text-gray-400 font-normal max-w-xs mx-auto leading-relaxed">
            Building secure enterprise networks, dissecting advanced software frameworks.
          </p>
        </motion.div>

        {/* ================= CENTER BLOCK: SOCIAL & INTERACTIVE SOCIALS ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 mt-8"
        >
          {/* Quick Connect & Interactive Copy Button */}
          <button
            onClick={handleCopyEmail}
            className="group flex items-center gap-2.5 px-4 py-2 border border-gray-200/80 bg-white/60 hover:bg-white rounded-xl text-xs font-mono text-gray-600 transition-all duration-200 hover:border-emerald-500/40 hover:shadow-[0_4px_15px_rgba(16,185,129,0.04)]"
          >
            <Mail className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-500 transition-colors" />
            <span>amanyadav41569@gmail.com</span>
            <div className="w-[1px] h-3 bg-gray-200" />
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span key="copied" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="text-emerald-600 font-bold flex items-center gap-1">
                  <Check className="w-3 h-3" /> Copied
                </motion.span>
              ) : (
                <Copy className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
              )}
            </AnimatePresence>
          </button>

          {/* Social Profiles Grid */}
          <div className="flex gap-3">
            <a
              href="https://github.com/0xAmanyadav"
              target="_blank"
              rel="noreferrer"
              className="group border border-gray-200/70 p-3 rounded-xl bg-white/50 hover:bg-white hover:border-gray-900 hover:shadow-[0_8px_20px_rgba(0,0,0,0.03)] transition-all duration-200"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/aman-yadav-243a5333a/"
              target="_blank"
              rel="noreferrer"
              className="group border border-gray-200/70 p-3 rounded-xl bg-white/50 hover:bg-white hover:border-[#3f51b5] hover:shadow-[0_8px_20px_rgba(63,81,181,0.04)] transition-all duration-200"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-[#3f51b5] transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* ================= BOTTOM BLOCK: STATUS & LEGAL METRICS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="relative mt-12 border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-gray-400"
        >
          <p className="font-medium">
            © {new Date().getFullYear()} Aman <span className="text-gray-200">|</span> Cyber Security Portfolio
          </p>
          
          
          {/* Minimalist Scroll-To-Top Trigger */}
          <button
            onClick={scrollToTop}
            className="absolute -top-3.5 left-1/2 -translate-x-1/2 sm:static sm:translate-x-0 bg-white border border-gray-200/70 p-1 rounded-full text-gray-400 hover:text-gray-900 transition-all duration-150 shadow-xs hover:border-gray-300"
            title="Scroll to Top"
          >
            <ArrowUpCircle className="w-4 h-4 stroke-[1.5]" />
          </button>
        </motion.div>

      </div>
    </footer>
  );
}