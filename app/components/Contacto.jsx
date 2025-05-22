import { ChevronDown, MessageCircleMore, PersonStanding } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Contacto() {
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
    <div className="relative">
      <button
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="relative flex items-center gap-2 px-2 sm:px-4 py-1 sm:py-2 font-bold md:text-base sm:text-sm text-xs rounded-md hover:bg-gray-500/5 border border-transparent hover:border-gray-500/10 transition-all duration-300"
      >
        <Link href="#">Contacto</Link>

        <ChevronDown
          className={`md:block sm:block hidden md:h-5 md:w-5 sm:h-4 sm:w-4 w-4 h-4 transform transition-transform duration-500 ${
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
          className="md:flex sm:flex hidden absolute mt-2 md:w-42 sm:w-40 w-32 flex-col font-semibold md:text-sm sm:text-xs text-xs md:gap-2 sm:gap-2 gap-1.5 md:px-4 md:py-2 sm:px-3 sm:py-1 px-2 py-1 z-10 rounded-md text-[#4b040b] border border-[#c90c1f] bg-[#ff9ca6]"
        >
          <Link
            href="#"
            className="flex flex-row justify-center items-center gap-2 hover:opacity-80 hover:scale-103 transform transition-all duration-200"
          >
            <PersonStanding className="md:block sm:block hidden w-5 h-5 text-red-950" />
            <p>Quiénes somos</p>
          </Link>
          <Link
            href="#"
            className="flex flex-row justify-center items-center gap-2 hover:opacity-80 hover:scale-103 transform transition-all duration-200"
          >
            <MessageCircleMore className="md:block sm:block hidden w-5 h-5 text-red-950" />
            <p>Escríbenos</p>
          </Link>
        </div>
      )}
    </div>
  );
}
