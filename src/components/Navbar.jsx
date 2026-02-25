import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "View Resume", href: "/resume.pdf", external: true },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed w-full top-0 z-50 bg-slate-900/70 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wide">
            <span className="text-cyan-400 uppercase">Abhinav M</span>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 uppercase">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : ""}
                className="text-slate-300 text-sm hover:text-cyan-400 transition font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-slate-900 border-l border-slate-800 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-800">
          <h2 className="text-lg font-semibold text-cyan-400">Menu</h2>
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col gap-6 p-6 uppercase">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-cyan-400 text-lg transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
