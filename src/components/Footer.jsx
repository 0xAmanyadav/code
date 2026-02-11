import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 overflow-hidden">
      {/* subtle grid background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#22c55e_1px,transparent_1px),linear-gradient(to_bottom,#22c55e_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* TOP TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center"
        >
          <p className="font-mono text-green-400 mb-2">
            root@aman:~$ exit
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-green-400">
            Thanks for Visiting
          </h3>

          <p className="mt-3 text-sm">
            Building secure systems, breaking insecure ones.
          </p>
        </motion.div>

        {/* SOCIAL LINKS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: false }}
          className="flex justify-center gap-6 mt-10"
        >
          <a
            href="https://github.com/0xAmanyadav"
            target="_blank"
            rel="noreferrer"
            className="group border border-green-500/30 p-4 rounded-xl hover:bg-green-500/10 transition"
          >
            <Github className="text-gray-300 group-hover:text-green-400 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/aman-yadav-243a5333a/"
            target="_blank"
            rel="noreferrer"
            className="group border border-green-500/30 p-4 rounded-xl hover:bg-green-500/10 transition"
          >
            <Linkedin className="text-gray-300 group-hover:text-green-400 transition" />
          </a>

          <a
            href="mailto:amanyadav41569@gmail.com"
            className="group border border-green-500/30 p-4 rounded-xl hover:bg-green-500/10 transition"
          >
            <Mail className="text-gray-300 group-hover:text-green-400 transition" />
          </a>
        </motion.div>

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: false }}
          className="mt-12 border-t border-green-500/20 pt-6 text-center text-xs font-mono"
        >
          <p>
            © {new Date().getFullYear()} Aman | Cyber Security Portfolio
          </p>
          <p className="mt-1 text-green-400/80">Stay Ethical • Stay Curious</p>
        </motion.div>
      </div>
    </footer>
  );
}
