import { Send, Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "0799a17e-4340-4b67-ab72-261b7ad046ca");
    formData.append("subject", "New Portfolio Message");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setStatus("Message sent successfully ✔");
      e.target.reset();
    } else {
      setStatus("Something went wrong ✖");
    }
  }

  return (
    <section
      id="contact"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#22c55e_1px,transparent_1px),linear-gradient(to_bottom,#22c55e_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <p className="font-mono text-green-400 text-center mb-2">
          root@aman:~$ drop_message
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-400">
          Contact Me
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Have a role, project, or opportunity? Drop a message below.
        </p>

        {/* CONTENT GRID */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          {/* LEFT – FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-green-500/40 rounded-xl p-8 hover:bg-green-500/5 transition"
          >
            <h3 className="text-green-400 font-mono text-lg mb-6">
              Drop a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <div>
                <label className="text-sm font-mono text-green-400">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-green-500/30 focus:border-green-400 outline-none py-2 text-gray-200"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm font-mono text-green-400">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-green-500/30 focus:border-green-400 outline-none py-2 text-gray-200"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm font-mono text-green-400">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full bg-transparent border-b border-green-500/30 focus:border-green-400 outline-none py-2 text-gray-200 resize-none"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-black py-4 rounded-lg font-semibold transition"
              >
                <Send size={18} />
                Send Message
              </button>

              {/* STATUS */}
              {status && (
                <p className="text-sm text-green-400 font-mono text-center">
                  {status}
                </p>
              )}
            </form>
          </motion.div>

          {/* RIGHT – SOCIAL CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {/* EMAIL CARD */}
            <a
              href="mailto:amanyadav41569@gmail.com"
              className="border border-green-500/40 p-6 rounded-lg hover:bg-green-500/10 transition"
            >
              <Mail className="text-green-400 mb-2" />
              <p className="font-mono text-green-400">Email</p>
              <p className="text-sm text-gray-400">amanyadav41569@gmail.com</p>
            </a>

            {/* LINKEDIN CARD */}
            <a
              href="https://www.linkedin.com/in/aman-yadav-243a5333a/"
              target="_blank"
              rel="noreferrer"
              className="border border-green-500/40 p-6 rounded-lg hover:bg-green-500/10 transition"
            >
              <Linkedin className="text-green-400 mb-2" />
              <p className="font-mono text-green-400">LinkedIn</p>
              <p className="text-sm text-gray-400">Professional profile</p>
            </a>

            {/* GITHUB CARD */}
            <a
              href="https://github.com/0xAmanyadav"
              target="_blank"
              rel="noreferrer"
              className="border border-green-500/40 p-6 rounded-lg hover:bg-green-500/10 transition"
            >
              <Github className="text-green-400 mb-2" />
              <p className="font-mono text-green-400">GitHub</p>
              <p className="text-sm text-gray-400">Projects & tools</p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
