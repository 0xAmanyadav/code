import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* -------- TYPING TITLE (retype on every scroll) -------- */
function TypingTitle({ text }) {
  const [out, setOut] = useState("");
  const [start, setStart] = useState(false);

  // jab bhi start true hoga, typing firse chalegi
  useEffect(() => {
    if (!start) return;

    setOut("");
    let i = 0;

    const id = setInterval(() => {
      setOut(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(id);
    }, 80);

    return () => clearInterval(id);
  }, [start, text]);

  return (
    <motion.h2
      className="text-3xl md:text-4xl font-bold text-center text-green-400 font-mono"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }} // 👈 important: har scroll par trigger hoga
      onViewportEnter={() => setStart((prev) => !prev)} // toggle = re-run typing
    >
      {out}
      <span className="animate-pulse">▍</span>
    </motion.h2>
  );
}

/* -------- WRITEUP CARD TEMPLATE --------
   👇 YAHI TEMPLATE COPY KARKE NAYA WRITEUP ADD KARNA
   {
     title: "",
     desc: "",
     link: "#",
   }
----------------------------------------- */

const data = {
  thm: [
    {
      title: "Basic Pentesting",
      desc: "Enumeration, brute-force and privilege escalation on THM lab.",
      link: "#",
    },

    {
      title: "Basic Pentesting",
      desc: "Enumeration, brute-force and privilege escalation on THM lab.",
      link: "#",
    },
  ],
  htb: [
    {
      title: "HTB Lame Walkthrough",
      desc: "SMB exploit using Metasploit to gain root access.",
      link: "#",
    },

    {
      title: "HTB Lame Walkthrough",
      desc: "SMB exploit using Metasploit to gain root access.",
      link: "#",
    },
  ],
  web: [
    {
      title: "Stored XSS to Account Takeover",
      desc: "Chaining stored XSS to hijack admin session.",
      link: "#",
    },
  ],
  other: [
    {
      title: "Blue Team Log Analysis",
      desc: "Detecting attacks using SIEM and log correlation.",
      link: "#",
    },
  ],
};
function Row({ title, items }) {
  return (
    <div className="mt-14">
      <h3 className="text-xl font-semibold text-green-400 mb-6 font-mono">
        {title}
      </h3>

      {/* horizontal scroll but no scrollbar */}
      <div className="flex gap-6  snap-x snap-mandatory no-scrollbar">
        {items.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            /* 👇 only once on mount */
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.0, delay: i * 0.01 }}
            whileHover={{ scale: 1.05 }}
            className="min-w-[320px] max-w-[320px] flex-shrink-0 snap-start
                       relative border border-green-500/30 rounded-xl p-6
                       hover:bg-green-500/10 transition group"
          >
            {/* glow */}
            <div className="absolute -inset-1 bg-green-500/10 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition" />

            <div className="relative z-10">
              <h4 className="text-lg font-semibold group-hover:text-green-400 transition">
                {item.title}
              </h4>

              <p className="mt-3 text-sm text-gray-400">{item.desc}</p>

              <p className="mt-6 text-sm font-mono text-yellow-400">
                read_more →
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default function Writeups() {
  return (
    <section
      id="write-up"
      className="py-28 bg-black text-white relative overflow-hidden"
    >
      {/* grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]
        bg-[linear-gradient(to_right,#22c55e_1px,transparent_1px),
        linear-gradient(to_bottom,#22c55e_1px,transparent_1px)]
        bg-[size:60px_60px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <p className="font-mono text-green-400 mb-2 text-center">
          root@aman:~$ ls projects
        </p>
        {/* typing title */}
        <TypingTitle text="Writeups" />

        <p className="text-center text-gray-400 mt-3">
          Category wise security lab and CTF walkthroughs
        </p>

        {/* 4 categories */}
        <Row title="TryHackMe" items={data.thm} />
        <Row title="HackTheBox" items={data.htb} />
        <Row title="Web Security" items={data.web} />
        <Row title="Other" items={data.other} />
      </div>

      {/* hide scrollbar css */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
