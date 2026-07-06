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
  NotebookPen
} from "lucide-react";

const sections = [
  { id: "home", label: "Overview", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "ranks", label: "Labs Solved", icon: SquareStar },
  { id: "skills", label: " Skills", icon: Shield },
  { id: "tools", label: "Tools", icon: Wrench },
  { id: "projects", label: "Projects", icon: Folder },
  { id: "hackathons", label: "Hackathons", icon: NotebookPen },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // 🔹 CLICK SEAMLESS SMOOTH SCROLL FUNCTION
  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      // Navbar height (80px) ka offset dekar perfect align karega
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActive(id);
    }
  };

  /* 🔹 BULLETPROOF SCROLL DETECTOR WITH EDGE-CASE PROTECTION */
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. CRITICAL EXTRA CHECK: Agar user page ke footer/bottom end par touch ho gaya hai
      // (Jaise image_aee8be.png me scroller bilkul bottom par tha)
      if (scrollPosition + windowHeight >= documentHeight - 60) {
        setActive("hackathons");
        return;
      }

      // 2. Standard mid-page traversal detection
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop - 120; // safe padding gap offset
          const bottom = top + el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActive(sections[i].id);
            break;
          }
        }
      }
    };

    // Passive listener injection for micro-interaction performance
    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    // Initial runtime execution loop
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#edf0f5]/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#home" onClick={(e) => handleScrollToSection(e, "home")} className="text-2xl font-black tracking-tight text-gray-950 font-sans select-none">
          Aman <span className="text-2xl font-black tracking-tight text-[#3f51b5]">yadav</span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center bg-[#2d3139] px-4 py-1.5 rounded-full shadow-md border border-gray-700/50">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleScrollToSection(e, id)}
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
              onClick={(e) => handleScrollToSection(e, id)}
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