import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const certifications = [
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    status: "planned",
    link: "#",
  },
  {
    title: "Cyber Security Intern",
    issuer: "Code Alpha",
    status: "done",
    link: "/public/Certifications/intenship.jpeg", // certificate image path
  },
  {
    title: "Security+",
    issuer: "CompTIA",
    status: "planned",
    link: "#",
  },
  {
    title: "Hackaton Participation Certificate",
    issuer: "GLA University",
    status: "done",
    link: "/public/Certifications/hacka.png",
  },
  {
    title: "Python for absolute beginners",
    issuer: "EC-Council",
    status: "done",
    link: "/public/Certifications/ec-py.png",
  },
];

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
      className="text-3xl md:text-4xl font-bold text-green-400 font-mono text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      onViewportEnter={() => setStart((p) => !p)}
    >
      {out}
      <span className="animate-pulse">▍</span>
    </motion.h2>
  );
}

function CertCard({ cert, index, onOpen }) {
  const isDone = cert.status === "done";

  return (
    <motion.div
      onClick={() => isDone && onOpen(cert.link)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12 }}
      viewport={{ once: false }}
      whileHover={{ scale: isDone ? 1.05 : 1 }}
      className="cursor-pointer relative border border-green-500/30 rounded-xl p-7 hover:bg-green-500/10 transition group"
    >
      <div className="absolute -inset-1 bg-green-500/10 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition" />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold group-hover:text-green-400 transition">
            {cert.title}
          </h3>

          <span
            className={`text-xs font-mono px-2 py-1 rounded-md border ${
              isDone
                ? "border-green-500/50 text-green-400"
                : "border-yellow-500/50 text-yellow-400"
            }`}
          >
            {isDone ? "DONE" : "PLANNED"}
          </span>
        </div>

        <p className="mt-2 text-sm text-gray-400">Issued by {cert.issuer}</p>

        <p className="mt-6 text-sm font-mono text-green-400">
          {isDone ? "view_certificate →" : "in_progress →"}
        </p>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const [openImg, setOpenImg] = useState(null);

  const done = certifications.filter((c) => c.status === "done");
  const planned = certifications.filter((c) => c.status === "planned");

  return (
    <section
  id="certifications"
  className="relative py-28 text-white overflow-hidden 
  bg-gradient-to-b from-[#020617] via-[#020a1f] to-[#020617]"
>

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#22c55e_1px,transparent_1px),linear-gradient(to_bottom,#22c55e_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-green-400 mb-2">
            root@aman:~$ show certifications
          </p>
          <TypingTitle text="Ethical Hacking Certifications" />
          <p className="mt-3 text-gray-400">
            Completed and upcoming professional credentials
          </p>
        </div>

        {/* Completed */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-green-400 font-mono mb-6">
            Completed
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {done.map((cert, i) => (
              <CertCard key={i} cert={cert} index={i} onOpen={setOpenImg} />
            ))}
          </div>
        </div>

        {/* Planned */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 font-mono mb-6">
            Planned
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {planned.map((cert, i) => (
              <CertCard key={i} cert={cert} index={i} onOpen={setOpenImg} />
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {openImg && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50 p-6">
          <div className="relative bg-gray-900 rounded-xl max-w-4xl w-full p-4">
            {/* close */}
            <button
              onClick={() => setOpenImg(null)}
              className="absolute top-3 right-3 text-white text-xl"
            >
              ✕
            </button>

            <img
              src={openImg}
              alt="certificate"
              className="w-full rounded-lg max-h-[75vh] object-contain"
            />

            <div className="text-center mt-4">
              <a
                href={openImg}
                download
                className="inline-block px-6 py-2 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition"
              >
                Download Certificate
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
