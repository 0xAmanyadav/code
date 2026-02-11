import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute -inset-4 bg-green-500/20 rounded-3xl blur-2xl"></div>

          <img
            src="/public/Tools_logo/a.png"
            alt="Aman Cyber Security"
            className="relative w-72 md:w-80 rounded-2xl border border-green-500/30 shadow-xl"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-green-500/10 text-green-400 border border-green-500/30">
            About Me
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            Cyber Security Enthusiast <br />
            <span className="text-green-400">& Defensive Hacker</span>
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            I am a passionate cyber security learner focused on real-world
            security challenges. I actively practice on platforms like
            TryHackMe and Hack The Box, working on penetration testing and wep penetration,
            SOC analysis, and blue team defense techniques.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            My goal is to secure modern systems, identify vulnerabilities,
            and help organizations protect their digital assets.
          </p>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-green-400">10+</h3>
              <p className="text-sm text-gray-500">Certifications</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-400">65+</h3>
              <p className="text-sm text-gray-500">Labs Solved</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-400">CTF</h3>
              <p className="text-sm text-gray-500">Active Player</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
