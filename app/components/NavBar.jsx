"use client";
import { useState } from "react";
import RegisterNav from "./RegisterNav";
import { ChevronDown } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId = null;

  const handleEnter = () => {
    clearTimeout(timeoutId); // se cancela el tiempo
    setIsOpen(true);
  };
  const handleLeave = () => {
    timeoutId = setTimeout(() => setIsOpen(false), 1000); // se establece el tiempo a 200 ms
  };

  return (
    <nav className="sticky top-0 z-99 bg-white/10 backdrop-blur-xl px-4 py-3 flex justify-evenly items-center">
      <span className="text-lg font-bold">Logo</span>
      <div className="relative">
        <button
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className="relative flex items-center gap-2 px-2 sm:px-4 py-1 sm:py-2 font-bold text-base sm:text-lg rounded-md hover:bg-gray-500/5 border border-transparent hover:border-gray-500/10 transition-all duration-300"
        >
          Menu
          <ChevronDown
            className={`h-4 w-4 sm:h-5 sm:w-5 transform transition-transform duration-500 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        {/* Hover bridge */}
        {isOpen && (
          <div
            className="absolute left-0 h-4 bg-transparent w-full"
            style={{ top: "100%" }}
          />
        )}
        {isOpen && (
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="absolute mt-2 w-32 sm:w-40 flex flex-col gap-2 sm:gap-3 p-4 sm:p-6 z-10 rounded-md font-semibold text-xs sm:text-sm text-[#4b040b] border border-[#c90c1f] bg-[#ff9ca6] backdrop-blur-xs"
          >
            <a href="#" className="hover:opacity-80 transition-opacity">
              Opción 1
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Opción 2
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Opción 3
            </a>
          </div>
        )}
      </div>
      <div>
        <RegisterNav />
      </div>
    </nav>
  );
}
