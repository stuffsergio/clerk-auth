"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId = null;

  const handleEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };
  const handleLeave = () => {
    timeoutId = setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <nav className="sticky bg-white/10 backdrop-blur-2xl px-4 py-3 flex justify-evenly items-center">
      <span className="text-lg font-bold">Logo</span>
      <div className="">
        <button
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className="relative flex items-center gap-2 px-4 py-2 font-bold text-lg rounded-md hover:bg-gray-500/5 border border-transparent hover:border-gray-500/10 transition-all duration-300"
        >
          Menu
          <ChevronDown
            className={`h-5 w-5 transform transition-transform duration-500 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        {/* Hover bridge */}
        {isOpen && (
          <div
            className="absolute left-0 h-4 bg-transparent"
            style={{ top: "100%" }}
          />
        )}
        {isOpen && (
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="absolute mt-2 w-40 flex flex-col gap-3 px-6 py-6 z-10 rounded-md font-semibold text-[#4b040b] border border-[#c90c1f] bg-[#ff9ca6] backdrop-blur-xs"
          >
            <a href="#" className="">
              Opción 1
            </a>
            <a href="#" className="">
              Opción 2
            </a>
            <a href="#" className="">
              Opción 3
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
