import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Shield,
  Folder,
  Wrench,
  SquareStar,
  Mail,
  NotebookPen
} from "lucide-react";

const sections = [
  { id: "home", label: "Overview", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Threat Intel", icon: Shield },
  { id: "tools", label: "Toolbox", icon: Wrench },
  { id: "ranks", label: "Labs Solved", icon: SquareStar },
  { id: "projects", label: "Projects", icon: Folder },
  { id: "write-up", label: "Writeups", icon: NotebookPen },
  { id: "contact", label: "Engage", icon: Mail },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  /* 🔹 SCROLL SPY */
  useEffect(() => {
    const onScroll = () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(sec.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // 🛠️ FIX: Clean base color background with a heavier backdrop-blur to prevent content merging on scroll
   <nav className="fixed top-0 w-full z-50 bg-[#edf0f5]/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO - 🛠️ FIX: Removed clashing text classes. "yadav" is now styled with a clean brand indigo color */}
        <a href="#home" className="text-2xl font-black tracking-tight text-gray-950 font-sans select-none">
          Aman <span className="text-2xl font-black tracking-tight text-[#3f51b5]">yadav</span>
        </a>

        {/* DESKTOP MENU - Dark-slate floating capsule design */}
        <div className="hidden lg:flex items-center bg-[#2d3139] px-4 py-1.5 rounded-full shadow-md border border-gray-700/50">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-200 ${
                active === id
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* MOBILE ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-900 p-2 hover:bg-gray-100 rounded-xl transition animate-none"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl px-6 py-6 flex flex-col gap-2">
          {sections.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition ${
                active === id
                  ? "bg-indigo-50 text-[#3f51b5]"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Icon size={20} className={active === id ? "text-[#3f51b5]" : "text-gray-400"} />
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;