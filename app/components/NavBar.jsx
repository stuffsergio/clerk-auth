"use client";
import { useState } from "react";
import RegisterNav from "./RegisterNav";
import Features from "./Features";
import FAQ from "./FAQ";
import { ChevronDown } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId = null;

  const handleEnter = () => {
    clearTimeout(timeoutId); // se cancela el tiempo
    setIsOpen(true);
  };
  const handleLeave = () => {
    timeoutId = setTimeout(() => setIsOpen(false), 500); // se establece el tiempo a 200 ms
  };

  return (
    <nav className="sticky w-[95dvw] m-auto md:top-5 top-2 z-99 rounded-xl bg-white/5 backdrop-blur-xl md:px-20 sm:px-7 px-5 py-0 flex justify-between items-center">
      <div>
        <img
          src="/hourglass.webp"
          alt="reloj de arena"
          className="md:w-8 sm:w-6 w-5 md:h-8 sm:h-6 h-5"
        />
      </div>
      <div className="flex flex-row md:gap-20 sm:gap-7 justify-between items-center">
        <div className="relative">
          <button
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="relative flex items-center gap-2 px-2 sm:px-4 py-1 sm:py-2 font-bold md:text-base sm:text-sm text-xs rounded-md hover:bg-gray-500/5 border border-transparent hover:border-gray-500/10 transition-all duration-300"
          >
            Menu
            <ChevronDown
              className={`md:h-5 md:w-5 sm:h-4 sm:w-4 w-4 h-4 transform transition-transform duration-500 ${
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
              className="absolute mt-2 w-fit sm:w-40 flex flex-col gap-2 sm:gap-3 p-4 sm:p-6 z-10 rounded-md font-semibold text-xs sm:text-sm text-[#4b040b] border border-[#c90c1f] bg-[#ff9ca6] backdrop-blur-xs"
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
          <Features />
        </div>
        <div>
          <FAQ />
        </div>
      </div>
      <div>
        <RegisterNav />
      </div>
    </nav>
  );
}
