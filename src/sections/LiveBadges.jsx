import { motion } from "framer-motion";

export default function LiveBadges() {
  return (
    <section
      id="live-badges"
      className="relative py-28 bg-black text-white overflow-hidden"
    >
      {/* Hacker grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]
      bg-[linear-gradient(to_right,#22c55e_1px,transparent_1px),
      linear-gradient(to_bottom,#22c55e_1px,transparent_1px)]
      bg-[size:60px_60px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <p className="font-mono text-green-400 mb-2">
            root@aman:~$ fetch live-badges
          </p>

          <h2 className="text-3xl md:text-4xl font-bold font-mono text-green-400">
            Live Ranks & Badges
          </h2>

          <p className="mt-3 text-gray-400">
            Auto-updated cyber security platforms
          </p>
        </motion.div>

        {/* ================= BADGE CARDS ================= */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* ================= TRYHACKME ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05 }}
            className="relative border border-green-500/30
            rounded-xl p-6 hover:bg-green-500/10 transition group"
          >
            {/* glow */}
            <div
              className="absolute -inset-1 bg-green-500/10
            blur-xl rounded-xl opacity-0
            group-hover:opacity-100 transition"
            />

            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-green-400 mb-4">
                TryHackMe
              </h3>

              {/* LIVE THM BADGE */}
              <iframe
                src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3930489"
                title="TryHackMe Badge"
                className="w-full h-[180px] rounded-lg border border-green-500/30"
                style={{ border: "none" }}
              />

              <p className="mt-4 text-sm font-mono text-green-400">
                status → synced_live
              </p>
            </div>
          </motion.div>

          {/* ================= HACK THE BOX ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05 }}
            className="relative border border-green-500/30
            rounded-xl p-6 hover:bg-green-500/10 transition group"
          >
            {/* glow */}
            <div
              className="absolute -inset-1 bg-green-500/10
            blur-xl rounded-xl opacity-0
            group-hover:opacity-100 transition"
            />

            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-green-400 mb-4">
                Hack The Box
              </h3>

              {/* LIVE HTB BADGE IMAGE */}
              <img
                src="https://www.hackthebox.com/badge/image/YOUR_HTB_USER_ID"
                alt="Hack The Box Badge"
                className="mx-auto rounded-lg border border-green-500/30"
              />

              <p className="mt-4 text-sm font-mono text-green-400">
                status → synced_live
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
