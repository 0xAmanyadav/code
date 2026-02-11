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
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Shield },
  { id: "tools", label: "Tools", icon: Wrench },
  { id: "ranks", label: "Ranks", icon: SquareStar },
  { id: "projects", label: "Projects", icon: Folder },
  { id: "write-up", label: "writeup", icon: NotebookPen },
  { id: "contact", label: "Contact", icon: Mail },
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
    <nav className="fixed top-0 w-full bg-black border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <a href="#home" className="text-green-400 font-mono">
          root@aman
        </a>

        {/* DESKTOP */}
        <div className="hidden md:flex space-x-6">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-3 py-2 transition ${
                active === id
                  ? "text-green-400 border-b border-green-400"
                  : "text-gray-300 hover:text-green-400"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* MOBILE ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-green-400"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-4">
          {sections.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 transition ${
                active === id
                  ? "text-green-400"
                  : "text-gray-300 hover:text-green-400"
              }`}
            >
              <Icon size={18} />
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
