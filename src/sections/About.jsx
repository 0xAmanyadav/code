import { motion } from "framer-motion";

export default function BasicAbout() {
  const stats = [
    { title: "15+", subtitle: "Certifications", details: "Accredited (ISC)², Cisco, Comptia", icon: "🛡️" },
    { title: "75+", subtitle: "Labs Solved", details: "Complex Vulnerability Chains (CTF, THM)", icon: "📡" },
    { title: "Top 100", subtitle: "Active Player", details: "Global active metrics", icon: "🏆" },
  ];

  // ================= ANIMATION VARIANTS =================
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
        delayChildren: 0.1,
      },
    },
  };

  const itemLeft = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const itemUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-[#fafafa] text-gray-900 overflow-hidden font-sans border-b border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* ================= LEFT SIDE: PHOTO POP ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          // 🛠️ FIX: once: false kar diya taaki har baar animate ho
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center items-center"
        >
          <div className="relative p-2 bg-white rounded-full shadow-lg border border-gray-100">
            <img
              src="2.png" 
              // src="Tools_logo/a.png" 
              alt="Aman Portfolio Portrait"
              className="w-70 h-64 md:w-85 md:h-90 object-cover rounded-full border-4 border-white grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

        {/* ================= RIGHT SIDE: STAGGERED REVEAL ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // 🛠️ FIX: yahan bhi once: false kar diya
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col justify-center"
        >
          

          <motion.h2 variants={itemLeft} className="text-4xl font-black tracking-tight text-gray-950 leading-tight">
            ABOUT AMAN, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3f51b5] to-indigo-500">
              LEADER AT AMAN CYBER LAB
            </span>
          </motion.h2>

          <motion.p variants={itemLeft} className="mt-4 text-gray-600 text-base leading-relaxed font-normal">
            I am a passionate cybersecurity professional with a defensive mindset. Specializing in threat intelligence, vulnerability assessment, and securing modern digital assets, my goal is to protect modern systems and resilient organizations in our digital world.
          </motion.p>

          {/* METRIC CARDS */}
          <motion.div variants={itemUp} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-1 transition-all duration-300 hover:shadow-md hover:border-indigo-100"
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
              </motion.div>
            ))}
          </motion.div>

          {/* ACTIVE STATUS PANEL */}
          <motion.div variants={itemUp} className="mt-6 p-4 bg-indigo-50/40 rounded-xl border border-indigo-100/50 flex items-start gap-3">
            <span className="text-xl mt-0.5">🌐</span>
            <div>
              <h4 className="text-xs font-bold text-gray-950 uppercase tracking-wider font-mono">
                Active Threat Intelligence Monitoring
              </h4>
              <p className="mt-0.5 text-xs text-gray-600 leading-relaxed">
                Engaged in real-time monitoring of emerging threat vectors and vulnerabilities across modern platforms (HackTheBox, TryHackMe).
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}