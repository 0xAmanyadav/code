import { motion } from "framer-motion";

const tools = [
  { name: "Nmap", logo: "/public/Tools_logo/n.png" },
  { name: "Burp Suite", logo: "/public/Tools_logo/burp.png" },
  { name: "Wireshark", logo: "/public/Tools_logo/wire.png" },
  { name: "Metasploit", logo: "/public/Tools_logo/meta2.png" },
  { name: "Splunk", logo: "/public/Tools_logo/splank (2).png" },
  { name: "Sqlmap", logo: "/public/Tools_logo/sql.png" },
  { name: "Nikto", logo: "/public/Tools_logo/nik.png" },
  { name: "Kali Linux", logo: "/public/Tools_logo/kl.png" },
  { name: "Hydra", logo: "/public/Tools_logo/hyd.png" },
  { name: "Parrot OS", logo: "/public/Tools_logo/parrot.png" },
  { name: "Aircrack-ng", logo: "/public/Tools_logo/air.png" },
  { name: "John the Ripper", logo: "/public/Tools_logo/john.png" },
];

export default function Tools() {
  return (
    <section id="tools" className="py-28 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-20"
        >
          <motion.h2
            animate={{
              textShadow: [
                "0 0 8px rgba(34,197,94,0.3)",
                "0 0 16px rgba(34,197,94,0.8)",
                "0 0 8px rgba(34,197,94,0.3)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-4xl font-bold text-green-500"
          >
            Tools
          </motion.h2>

          <p className="mt-2 text-sm text-gray-400">
            Security tools and platforms used in real-world scenarios
          </p>
        </motion.div>

        {/* TOOL GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-14 text-center">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.001 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.3 }}   // 🔥 ZOOM IN
              className="flex flex-col items-center"
            >
              {/* LOGO */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-xl bg-green-500/20"></div>
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="relative h-14 opacity-95 transition-transform duration-300"
                />
              </div>

              {/* NAME */}
              <p className="mt-3 text-sm font-mono text-green-400">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
