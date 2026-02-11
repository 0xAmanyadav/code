import { motion } from "framer-motion";
import { useState } from "react";

/* 👉 BADGES DATA */
const badgeData = {
  thm: [
    { img: "/public/thm_badges/linux.png", name: "Linux Fundamentals" },
    { img: "/public/thm_badges/ohsint.png", name: "OhSINT" },
    { img: "/public/thm_badges/streak3.png", name: "3 Day Streak" },
    { img: "/public/thm_badges/streak7.png", name: "7 Day Streak" },
    { img: "/public/thm_badges/streak30.png", name: "30 Day Streak" },
    { img: "/public/thm_badges/webbed.png", name: "Webbed" },
    { img: "/public/thm_badges/league_gold.png", name: "Gold League" },
    { img: "/public/thm_badges/careerready.png", name: "Career Ready" },
    { img: "/public/thm_badges/howthewebworks.png", name: "How The Web Works" },
  ],

  htb: [
    { img: "/public/htb_badges/starting_point.png", name: "Starting Point" },
    { img: "/public/htb_badges/linux.png", name: "Linux Fundamentals" },
    { img: "/public/htb_badges/web.png", name: "Web Challenges" },
    { img: "/public/htb_badges/academy.png", name: "HTB Academy" },
  ],
};

export default function BadgeCarousel() {
  const [platform, setPlatform] = useState("thm");
  const badges = badgeData[platform];

  return (
    <div className="mt-10">
      {/* 🔘 TOGGLE */}
      <div className="flex justify-center gap-4 mb-6 font-mono text-sm">
        <button
          onClick={() => setPlatform("thm")}
          className={`px-5 py-2 rounded-md border transition ${
            platform === "thm"
              ? "bg-green-500 text-black"
              : "border-green-500/40 text-green-400 hover:bg-green-500/10"
          }`}
        >
          TryHackMe
        </button>

        <button
          onClick={() => setPlatform("htb")}
          className={`px-5 py-2 rounded-md border transition ${
            platform === "htb"
              ? "bg-green-500 text-black"
              : "border-green-500/40 text-green-400 hover:bg-green-500/10"
          }`}
        >
          Hack The Box
        </button>
      </div>

      {/* 🎠 CAROUSEL */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-5"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        >
          {[...badges, ...badges].map((b, i) => (
            <div
              key={i}
              className="relative group min-w-[110px] text-center"
            >
              <img
                src={b.img}
                className="h-20 rounded-md border border-green-500/40 bg-black p-2 group-hover:scale-110 transition"
              />

              {/* 🏷️ BADGE NAME */}
              <p className="mt-2 text-xs font-mono text-green-400 opacity-0 group-hover:opacity-100 transition">
                {b.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
