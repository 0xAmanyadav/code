import { motion } from "framer-motion";

export default function BasicAbout() {
  const stats = [
    { title: "15+", subtitle: "Certifications", details: "Accredited (ISC)², Cisco, Comptia", icon: "🛡️" },
    { title: "75+", subtitle: "Labs Solved", details: "Complex Vulnerability Chains (CTF, THM)", icon: "📡" },
    { title: "Top 100", subtitle: "Active Player", details: "Global active metrics", icon: "🏆" },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-[#fafafa] text-gray-900 overflow-hidden font-sans border-b border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* ================= LEFT SIDE: PHOTO POP (NO BLUR) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // Triggers early on scroll
          className="flex justify-center items-center"
        >
          <div className="relative p-2 bg-white rounded-full shadow-lg border border-gray-100">
            <img
              src="/public/Tools_logo/a.png"
              alt="Aman Portfolio Portrait"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white grayscale"
            />
          </div>
        </motion.div>

        {/* ================= RIGHT SIDE: DETAILS SHOW (NO BLUR) ================= */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col justify-center"
        >
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#3f51b5] uppercase mb-3 block">
            SEC_DOSSIER // IDENTITY_VERIFIED
          </span>

          <h2 className="text-4xl font-black tracking-tight text-gray-950 leading-tight">
            ABOUT AMAN, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3f51b5] to-indigo-500">
              LEADER AT AMAN CYBER LAB
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-base leading-relaxed font-normal">
            I am a passionate cybersecurity professional with a defensive mindset. Specializing in threat intelligence, vulnerability assessment, and securing modern digital assets, my goal is to protect modern systems and resilient organizations in our digital world.
          </p>

          {/* METRIC CARDS */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-1 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
                    {stat.subtitle}
                  </span>
                  <span className="text-base">{stat.icon}</span>
                </div>
                <h3 className="text-xl font-black text-gray-950 mt-1">
                  {stat.title}
                </h3>
                <p className="text-[11px] text-gray-500 leading-tight mt-0.5">
                  {stat.details}
                </p>
              </div>
            ))}
          </div>

          {/* ACTIVE STATUS PANEL */}
          <div className="mt-6 p-4 bg-indigo-50/40 rounded-xl border border-indigo-100/50 flex items-start gap-3">
            <span className="text-xl mt-0.5">🌐</span>
            <div>
              <h4 className="text-xs font-bold text-gray-950 uppercase tracking-wider font-mono">
                Active Threat Intelligence Monitoring
              </h4>
              <p className="mt-0.5 text-xs text-gray-600 leading-relaxed">
                Engaged in real-time monitoring of emerging threat vectors and vulnerabilities across modern platforms (HackTheBox, TryHackMe).
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}