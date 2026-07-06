import { motion } from "framer-motion";
import { Terminal, Award, Users, Calendar, Layout, Activity } from "lucide-react";

const hackathonLogs = [
  {
    name: "National Smart India Hackathon",
    project: "Examly (ProctorX)",
    timeline: "April 2026",
    role: "Lead Full-Stack & Security Integrator",
    achievement: "Hackathon-Ready MVP Deployed",
    desc: "Engineered a smart examination system featuring robust browser-based anti-cheating controls, automated proctoring configurations, and real-time environment analysis dashboards.",
    tech: ["MERN Stack", "Firebase Auth", "Zustand", "Tailwind CSS"],
    status: "evaluated"
  },
  {
    name: "Cyber Security & Defensive Dev Hackathon",
    project: "CyberSuraksha Platform",
    timeline: "Early 2026",
    role: "Security Researcher / Core Developer",
    achievement: "Best Defensive Architecture Runner-up",
    desc: "Designed and developed a comprehensive dashboard integrating critical offensive and defensive modules including live network port scanners, URL safety checkers, and cryptographic file encryption suites.",
    tech: ["React.js", "Node.js", "Express", "Network APIs"],
    status: "verified"
  }
];

export default function Hackathons() {
  const titleText = "Hackathons";
  const titleChars = Array.from(titleText);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } }
  };

  const letterVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline" }
  };

  return (
    <main id="hackathons" className="min-h-screen bg-[#fcfcfc] text-gray-900 font-sans py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none bg-[linear-gradient(to_right,rgba(63,81,181,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(63,81,181,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="border-b border-gray-100 pb-10 mb-12 flex flex-col items-center text-center">
          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-mono min-h-[40px]"
          >
            {titleChars.map((char, index) => (
              <motion.span key={index} variants={letterVariants}>{char}</motion.span>
            ))}
            <motion.span className="text-[#3f51b5] inline-block animate-pulse">▍</motion.span>
          </motion.h1>

          <p className="mt-3 text-sm text-gray-400 max-w-xl font-normal leading-relaxed">
            A chronological ledger of collaborative builds, fast-paced MVPs, and defensive security frameworks compiled during national and local hackathons.
          </p>

          <div className="flex flex-wrap justify-center gap-4 font-mono text-[11px] mt-6">
            <div className="px-3 py-1 bg-white border border-gray-200/60 rounded-lg text-gray-500 shadow-2xs flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-indigo-500" /> TOTAL_ATTENDED: <span className="text-gray-900 font-bold">{hackathonLogs.length}</span>
            </div>
            <div className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100/60 rounded-lg shadow-2xs flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-600" /> STATUS: <span className="font-bold">ALL_DEPLOYED</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {hackathonLogs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group grid md:grid-cols-4 gap-6 p-6 bg-white border border-gray-100 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.005)] hover:border-indigo-500/30 hover:shadow-[0_12px_30px_rgba(63,81,181,0.04)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-1 w-0 bg-[#3f51b5] group-hover:w-full transition-all duration-500" />

              <div className="md:col-span-1 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-4">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-gray-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" /> {log.timeline}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 tracking-tight font-sans leading-snug group-hover:text-[#3f51b5] transition-colors">
                    {log.name}
                  </h3>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <span className={`inline-flex items-center gap-1 text-[9px] font-mono font-bold px-2.5 py-0.5 rounded border uppercase tracking-wider ${
                    log.status === "verified" 
                      ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
                      : "bg-indigo-50 text-indigo-600 border-indigo-100"
                  }`}>
                    {log.status}
                  </span>
                </div>
              </div>

              <div className="md:col-span-3 flex flex-col justify-between space-y-4 pl-0 md:pl-2">
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono">
                    <p className="flex items-center gap-1 text-gray-500">
                      <Layout className="w-3.5 h-3.5 text-gray-400" /> 
                      <span className="text-gray-400">Build:</span> <span className="text-gray-900 font-bold">{log.project}</span>
                    </p>
                    <span className="text-gray-200 hidden sm:inline">|</span>
                    <p className="flex items-center gap-1 text-gray-500">
                      <Users className="w-3.5 h-3.5 text-gray-400" /> 
                      <span className="text-gray-400">Role:</span> <span className="text-gray-800 font-medium">{log.role}</span>
                    </p>
                  </div>

                  <p className="text-xs text-gray-500 font-normal leading-relaxed">
                    {log.desc}
                  </p>

                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50/60 border border-emerald-100/50 px-2.5 py-1 rounded-lg">
                    <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-semibold">{log.achievement}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-gray-50">
                  <Terminal className="w-3.5 h-3.5 text-gray-400 mr-1" />
                  {log.tech.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 bg-gray-50 border border-gray-200/60 rounded text-gray-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  ); 
}