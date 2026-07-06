import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Target, Crosshair, ShieldAlert, Trophy, Zap, ExternalLink } from "lucide-react";

/* ================= CYBER LABS METRICS DATA ================= */
const hackerStats = [
  {
    platform: "HackTheBox",
    username: "0xAmanyadav",
    rank: "Pro Hacker",
    metricLabel: "Global Percentile",
    metricValue: "Top 2%",
    subMetricLabel: "Points Ecosystem",
    subMetricValue: "1,240 Pts",
    styles: {
      border: "hover:border-emerald-500 border-gray-100",
      glow: "group-hover:bg-emerald-500/10 bg-emerald-500/5",
      iconBg: "bg-emerald-50 border-emerald-100 text-emerald-600",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      accentText: "text-emerald-600"
    },
    icon: <Target className="w-6 h-6" />,
    url: "https://app.hackthebox.com/profile/YOUR_ID" // 🛠️ Paste your HTB profile ID link here
  },
  {
    platform: "TryHackMe",
    username: "0xAmanyadav",
    rank: "Omniscient",
    metricLabel: "Rank Percentile",
    metricValue: "Top 1%",
    subMetricLabel: "Rooms Solved",
    subMetricValue: "150+ Labs",
    styles: {
      border: "hover:border-red-500 border-gray-100",
      glow: "group-hover:bg-red-500/10 bg-red-500/5",
      iconBg: "bg-red-50 border-red-100 text-red-600",
      badge: "bg-red-50 text-red-700 border-red-200",
      accentText: "text-red-600"
    },
    icon: <Crosshair className="w-6 h-6" />,
    url: "https://tryhackme.com/p/YOUR_ID" // 🛠️ Paste your THM profile link here
  },
  {
    platform: "PortSwigger Academy",
    username: "0xAmanyadav",
    rank: "Practitioner",
    metricLabel: "Lab Matrix Status",
    metricValue: "Expert Certified",
    subMetricLabel: "Exploits Solved",
    subMetricValue: "85+ Labs",
    styles: {
      border: "hover:border-amber-500 border-gray-100",
      glow: "group-hover:bg-amber-500/10 bg-amber-500/5",
      iconBg: "bg-amber-50 border-amber-100 text-amber-600",
      badge: "bg-amber-50 text-amber-700 border-amber-200",
      accentText: "text-amber-600" // 🛠️ FIXED: Text class clash mapping
    },
    icon: <ShieldAlert className="w-6 h-6" />,
    url: "https://portswigger.net/web-security"
  }
];

/* ================= ⌨️ HERO STYLE INFINITE TYPING & DELETING LOOP ================= */
 export function InfiniteTypingHeader({ text }) {
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

/* ================= CORE INTERFACE EXPORT SYSTEM ================= */
export default function Ranks() {
  return (
    <section id="ranks" className="relative py-32 bg-[#fafafa] text-gray-900 font-sans border-b border-gray-100 overflow-hidden">
      {/* Background Matrix Mesh Layout Base */}
      <div className="absolute inset-0 z-0 opacity-[0.35] pointer-events-none bg-[linear-gradient(to_right,rgba(63,81,181,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(63,81,181,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center mb-24 flex flex-col items-center justify-center">
          
          
          {/* Centered Loop Framework Header wrapper */}
          <div className="flex justify-center w-full">
            {/* 🛠️ FIXED: Text variable updated to sync with section data structure */}
            <InfiniteTypingHeader text="Cyber Labs Solved" />
          </div>

          {/* Centered Pulse Interactive Accent Divider Layout */}
          <div className="flex items-center justify-center gap-1.5 mt-2">
            <div className="w-10 h-[2px] bg-gradient-to-r from-emerald-500/80 to-indigo-500/40 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-[#3f51b5] animate-ping" />
            <div className="w-10 h-[2px] bg-gradient-to-r from-indigo-500/40 to-amber-500/80 rounded-full" />
          </div>

          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world <span className="text-red-500 font-semibold">Laboratory</span> execution scores, verified tracking <span className="text-green-500 font-semibold">Credentials,</span> and vulnerability extraction metrics.
          </p>
        </div>

        {/* ================= CAPSULE BOX RUNTIME INDICATOR ================= */}
        <div className="mb-10 flex justify-start">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.01)] relative overflow-hidden pl-7">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#3f51b5]" />
            <span className="text-gray-400 font-mono text-xs font-bold tracking-wider flex items-center gap-1">
              &gt;_ RUNTIME <span className="text-gray-900 font-extrabold">VERIFIED</span> LAB DATA BLOCKS
            </span>
            <Trophy className="w-3.5 h-3.5 text-yellow-500 ml-1" />
          </div>
        </div>

        {/* ================= METRICS BENTO GRID (1.08x HOVER ZOOM SYNC) ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackerStats.map((stat, i) => (
            <motion.a
              href={stat.url}
              target="_blank"
              rel="noreferrer"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              whileHover={{ 
                scale: 1.08, // 🛠️ FIXED: Synchronized with your Projects & Tools standard zoom level
                y: -6,
                transition: { duration: 0.25, ease: "easeInOut" }
              }}
              className={`relative block bg-white border rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(63,81,181,0.06)] transition-all duration-300 overflow-hidden group ${stat.styles.border}`}
            >
              {/* Top Dynamic Embedded Color Accent Stripe */}
              <div className="absolute top-0 left-0 w-1.5 h-0 bg-[#3f51b5] group-hover:h-full transition-all duration-300 rounded-r-md" />
              
              {/* Adaptive Cyber Glow Area */}
              <div className={`absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 ${stat.styles.glow}`} />

              {/* Card Header Layer */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl border transition-transform duration-300 group-hover:scale-110 ${stat.styles.iconBg}`}>
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-extrabold text-gray-950 tracking-tight leading-tight">
                      {stat.platform}
                    </h4>
                    <p className="text-[11px] font-mono text-gray-400 mt-0.5">@{stat.username}</p>
                  </div>
                </div>
              </div>

              {/* Stats Matrix Integration Container */}
              <div className="space-y-3 pt-4 border-t border-gray-50">
                {/* Score block 1 */}
                <div className="flex justify-between items-center bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                  <span className="text-[10px] text-gray-600 font-mono uppercase tracking-wider">{stat.metricLabel}</span>
                  <span className={`text-xs font-mono font-black flex items-center gap-1 ${stat.styles.accentText}`}>
                    <Zap className="w-3 h-3 animate-pulse" /> {stat.metricValue}
                  </span>
                </div>

                {/* Score block 2 */}
                <div className="flex justify-between items-center bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                  <span className="text-[10px] text-gray-600 font-mono uppercase tracking-wider">{stat.subMetricLabel}</span>
                  <span className="text-xs font-mono font-bold text-gray-800">{stat.subMetricValue}</span>
                </div>

                {/* Footer Validation Actions */}
                <div className="flex justify-between items-center pt-3 mt-1">
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border uppercase ${stat.styles.badge}`}>
                    {stat.rank}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-gray-400 flex items-center gap-1 group-hover:text-[#3f51b5] transition-colors duration-150">
                    Verify Profile <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}