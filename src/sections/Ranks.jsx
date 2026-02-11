import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BadgeCarousel from "../components/BadgeCarousel";

/* ================================
   🧠 EDIT ONLY THIS DATA
================================ */
const platforms = [
  {
    name: "TryHackMe",
    rank: "Top 5%",
    points: "11,655",
    badges: "63",
    color: "from-green-500 to-emerald-600",
    link: "https://tryhackme.com/p/Hackercode",
    iframe:
      "https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3930489",
  },
  {
    name: "Hack The Box",
    rank: "Hacker",
    points: "3,420",
    badges: "21",
    color: "from-cyan-500 to-blue-600",
    link: "https://app.hackthebox.com/users/2745589?profile-top-tab=machines&ownership-period=1M&profile-bottom-tab=prolabs",
    iframe: "",
  },
];

/* ================================
   TERMINAL TEXT
================================ */
function TerminalText({ text }) {
  return (
    <p className="font-mono text-green-400 text-sm text-center mb-4">{text}</p>
  );
}

/* ================================
   MAIN COMPONENT
================================ */
export default function Ranks() {
  const [active, setActive] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <section
      id="ranks"
      className="py-28 bg-black text-white relative overflow-hidden"
    >
      {/* background grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#22c55e_1px,transparent_1px),linear-gradient(to_bottom,#22c55e_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-16">
          <p className="font-mono text-green-400">
            root@aman:~$ cat ranks_badges
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Ranks & Badges
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((item, i) => (
            <motion.div
              key={i}
              onClick={() => {
                setActive(item);
                setLoading(true);
              }}
              whileHover={{ scale: 1.06 }}
              className="cursor-pointer relative group rounded-xl border border-green-500/30 p-6 bg-black overflow-hidden"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-br ${item.color}`}
              />

              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-green-400">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm text-gray-300">
                  Rank:{" "}
                  <span className="text-white font-medium">{item.rank}</span>
                </p>

                <p className="text-sm text-gray-300">
                  Points:{" "}
                  <span className="text-white font-medium">{item.points}</span>
                </p>

                <p className="text-sm text-gray-300">
                  Badges:{" "}
                  <span className="text-white font-medium">{item.badges}</span>
                </p>

                <p className="mt-5 text-xs font-mono text-green-400">
                  click_to_view →
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= POPUP ================= */}
      <AnimatePresence>
        {active && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/90 z-40"
              onClick={() => setActive(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* TERMINAL POPUP */}
            <motion.div
              className="
              fixed z-50 inset-0
              md:inset-auto md:top-1/2 md:left-1/2
              md:-translate-x-1/2 md:-translate-y-1/2
              w-full md:w-[720px]
              h-full md:h-auto
              bg-black border border-green-500/40
              rounded-none md:rounded-xl
              "
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* HEADER */}
              <div className="flex justify-between items-center px-4 py-3 bg-zinc-900 border-b border-green-500/20">
                <span className="font-mono text-green-400">
                  aman@cyber:~/{active.name.toLowerCase()}
                </span>
                <button
                  onClick={() => setActive(null)}
                  className="text-red-400 text-lg"
                >
                  ✕
                </button>
              </div>

              {/* BODY */}
              <div className="p-6">
                <TerminalText text="connecting to live profile..." />

               

                {/* THM IFRAME */}
                <div className="flex justify-center">
                  <iframe
                    src={active.iframe}
                    className="w-full max-w-md h-[160px] bg-black rounded-lg border border-green-500/30"
                    style={{ border: "none" }}
                  />
                </div>

                {/* BADGE CAROUSEL */}
                <BadgeCarousel />

                {/* ACTION BUTTON */}
                <div className="mt-6 text-center">
                  <a
                    href={active.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
      inline-block px-6 py-2 font-mono
      text-green-400 border border-green-500/40
      rounded-md
      hover:bg-green-500 hover:text-black
      transition
    "
                  >
                    Open_Profile →
                  </a>
                </div>

               

        
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
