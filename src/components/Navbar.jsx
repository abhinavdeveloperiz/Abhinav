import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-900/70 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-cyan-400 uppercase">Abhinav m</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 uppercase">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-slate-300 text-sm hover:text-cyan-400 transition font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="flex flex-col items-center py-6 gap-6 uppercase">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-cyan-400 text-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
