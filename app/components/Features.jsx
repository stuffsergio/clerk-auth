import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Features() {
  const [isOpen2, setIsOpen2] = useState(false);
  let timeoutId = null;

  const handleEnter2 = () => {
    clearTimeout(timeoutId); // se cancela el tiempo
    setIsOpen2(true);
  };
  const handleLeave2 = () => {
    timeoutId = setTimeout(() => setIsOpen2(false), 500); // se establece el tiempo a 200 ms
  };
  return (
    <div className="relative">
      <button
        onMouseEnter={handleEnter2}
        onMouseLeave={handleLeave2}
        className="relative flex items-center gap-2 px-2 sm:px-4 py-1 sm:py-2 font-bold md:text-base sm:text-sm text-xs rounded-md hover:bg-gray-500/5 border border-transparent hover:border-gray-500/10 transition-all duration-300"
      >
        Features
        <ChevronDown
          className={`md:h-5 md:w-5 sm:h-4 sm:w-4 w-4 h-4 transform transition-transform duration-500 ${
            isOpen2 ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {/* Hover bridge */}
      {isOpen2 && (
        <div
          className="absolute left-0 h-4 bg-transparent w-full"
          style={{ top: "100%" }}
        />
      )}
      {isOpen2 && (
        <div
          onMouseEnter={handleEnter2}
          onMouseLeave={handleLeave2}
          className="absolute mt-2 md:w-35 sm:w-32 w-23 flex flex-col md:gap-3 sm:gap-2 gap-1.5 p-4 md:p-4 sm:p-6 z-10 rounded-md font-semibold text-xs sm:text-sm text-[#4b040b] border border-[#c90c1f] bg-[#ff9ca6] backdrop-blur-xs"
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
  );
}
