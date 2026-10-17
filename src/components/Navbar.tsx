import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-black/10 bg-[#F5F1E9]/95 backdrop-blur-xl">
      {" "}
      <nav className="flex h-[76px] w-full items-center justify-between px-5 sm:px-8 lg:px-14 xl:px-20">
        {" "}
        {/* Brand */}{" "}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3"
        >
          {" "}
          <span className="flex h-10 w-10 items-center justify-center bg-[#244BFF] text-sm font-black text-white transition-transform duration-300 group-hover:rotate-[-8deg]">
            {" "}
            AP{" "}
          </span>{" "}
          <span>
            {" "}
            <span className="block text-sm font-extrabold tracking-tight text-[#171717]">
              {" "}
              ASHIRBAD PRADHAN{" "}
            </span>{" "}
            <span className="mt-1 block text-[9px] uppercase tracking-[0.22em] text-black/50">
              {" "}
               Portfolio{" "}
            </span>{" "}
          </span>{" "}
        </a>{" "}
        {/* Desktop links */}{" "}
        <div className="hidden items-center gap-8 lg:flex xl:gap-10">
          {" "}
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative py-2 text-sm font-medium text-black/60 transition-colors duration-300 hover:text-[#244BFF]"
            >
              {" "}
              <span className="mr-1.5 text-[9px] text-[#244BFF]/70">
                {" "}
                0{index + 1}{" "}
              </span>{" "}
              {item.name}{" "}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#244BFF] transition-all duration-300 group-hover:w-full" />{" "}
            </a>
          ))}{" "}
        </div>{" "}
        {/* Contact */}{" "}
        <a
          href="#contact"
          className="group hidden items-center gap-3 bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#244BFF] sm:flex"
        >
          {" "}
          Let's Talk{" "}
          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />{" "}
        </a>{" "}
        {/* Mobile toggle */}{" "}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center border border-black/15 text-[#171717] transition-colors hover:bg-[#244BFF] hover:text-white sm:hidden"
        >
          {" "}
          {menuOpen ? <X size={21} /> : <Menu size={21} />}{" "}
        </button>{" "}
      </nav>{" "}
      {/* Mobile menu */}{" "}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out sm:hidden ${menuOpen ? "grid-rows-[1fr] border-t border-black/10 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        {" "}
        <div className="min-h-0 overflow-hidden">
          {" "}
          <div className="bg-[#F5F1E9] px-5 pb-6 pt-3">
            {" "}
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/40">
              {" "}
              Navigation{" "}
            </p>{" "}
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-black/10 py-4 text-base font-medium text-[#171717] transition-colors hover:text-[#244BFF]"
              >
                {" "}
                <span className="flex items-center gap-4">
                  {" "}
                  <span className="text-xs text-[#244BFF]">
                    {" "}
                    0{index + 1}{" "}
                  </span>{" "}
                  {item.name}{" "}
                </span>{" "}
                <ArrowUpRight size={17} className="text-black/40" />{" "}
              </a>
            ))}{" "}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-5 flex w-full items-center justify-center gap-3 bg-[#244BFF] px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1738D8]"
            >
              {" "}
              Let's Talk <ArrowUpRight size={17} />{" "}
            </a>{" "}
            <p className="mt-5 text-center text-[9px] uppercase tracking-[0.2em] text-black/40">
              {" "}
              Creative Thinking · Digital Experiences{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
}
