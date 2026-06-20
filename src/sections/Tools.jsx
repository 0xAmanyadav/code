import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ================= AMAN'S SECURITY TOOLS DATA WITH LOGO MAPPING ================= */
const toolsData = [
  {
    name: "Nmap",
    category: "Network Discovery",
    logoPath: "/Tools_logo/nmap.png",
    description: "Used for network discovery, packet mapping, and vulnerability port scans.",
  },
  {
    name: "Wireshark",
    category: "Packet Analysis",
    logoPath: "/logos/wireshark.png",
    description: "Deep inspection of live network packets and protocol dissection.",
  },
  {
    name: "Burp Suite",
    category: "Web App Pentesting",
    logoPath: "/logos/burpsuite.png",
    description: "Intercepting web traffic to identify OWASP Top 10 vulnerabilities.",
  },
  {
    name: "Metasploit",
    category: "Exploitation Framework",
    logoPath: "/Tools_logo/meta.png",
    description: "Developing, testing, and executing modular exploit payloads against targets.",
  },
  {
    name: "John the Ripper",
    category: "Password Cracking",
    logoPath: "/logos/john.png",
    description: "Fast, automated cryptographic password cracking and hash analysis.",
  },
  {
    name: "Linux Core / Bash",
    category: "System Administration",
    logoPath: "/logos/linux.png",
    description: "Writing complex deployment scripts, log parsers, and system automation.",
  },
];

/* ================= MAXIMUM BOLD TYPING HEADER LOGIC ================= */
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
      className="text-3xl md:text-5xl font-black text-gray-950 font-mono text-center tracking-tight md:font-extrabold uppercase"
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

/* ================= PREMIUM RESTRUCTURED BENTO CARD FOR TOOLS ================= */
function ToolCard({ tool, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.09, 
        y: -5,
        transition: { duration: 0.25, ease: "easeInOut" }
      }}
      className="relative w-full bg-white border border-gray-100 rounded-3xl p-6 flex flex-col justify-between h-full shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(63,81,181,0.06)] transition-all duration-300 group overflow-hidden"
    >
      {/* Top Left Premium Indicator Accent Stripe */}
      <div className="absolute top-0 left-0 w-1.5 h-0 bg-[#3f51b5] group-hover:h-full transition-all duration-300 rounded-r-md" />

      <div>
        <div className="flex items-center justify-between gap-4 mb-5">
          {/* 🛠️ LOGO CONTAINER (Grayscale and opacity conditions completely cleared) */}
          <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100/80 p-2.5 flex items-center justify-center transition-all duration-300 group-hover:bg-indigo-50/50 group-hover:border-indigo-100 overflow-hidden">
            <img 
              src={tool.logoPath} 
              alt={`${tool.name} Industrial Identity`} 
              className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Technical Data Fields */}
        <span className="text-[10px] font-mono font-bold tracking-wider text-indigo-500/80 block uppercase mb-1">
          {tool.category}
        </span>
        <h3 className="text-xl font-extrabold text-gray-950 tracking-tight transition-colors duration-200">
          {tool.name}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed font-normal mt-2">
          {tool.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ================= INTERFACE MAIN DISPATCH WRAPPER ================= */
export default function Tools() {
  return (
    <section 
      id="tools" 
      className="relative py-32 bg-[#fafafa] text-gray-900 font-sans border-b border-gray-100 overflow-hidden"
    >
      {/* Light Geometry Structural Layout Matrix Mesh Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.35] pointer-events-none bg-[linear-gradient(to_right,rgba(63,81,181,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(63,81,181,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* ================= HEADER SECTION WITH ACTIVE TYPING SCRIPT ================= */}
        <div className="text-center mb-24">
          <p className="font-mono text-xs font-bold tracking-[0.25em] text-gray-400 uppercase mb-3 block">
            LAB_ENVIRONMENT // SOFTWARE_SUITE
          </p>
          <TypingTitle text="Security Tools Arsenal" />
          <div className="w-16 h-1 bg-[#3f51b5] mx-auto mt-5 rounded-full" />
          <p className="mt-5 text-base text-gray-500 max-w-sm mx-auto font-normal">
            Operational frameworks and defensive monitoring systems configured in sandbox pipelines.
          </p>
        </div>

        {/* ================= TOOLS ADAPTIVE METRIC BENTO GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolsData.map((tool, i) => (
            <ToolCard key={i} tool={tool} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}