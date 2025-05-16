import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import { useState } from "react";

export default function RegisterNav() {
  const [isOpen, setIsOpen] = useState(false);
  let timeOutId = null;

  const handleEnter = () => {
    clearTimeout(timeOutId);
    setIsOpen(true);
  };
  const handleLeave = () => {
    timeOutId = setTimeout(() => setIsOpen(false), 1000);
  };

  return (
    <section className="">
      <button
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="relative flex items-center gap-2 px-4 py-2 font-bold text-lg rounded-md hover:bg-gray-500/5 border border-transparent hover:border-gray-500/10 transition-all duration-300"
      >
        <User className="md:w-6 sm:w-6 w-5 md:h-6 sm:h-6 h-5" />
      </button>
      {/* Hover bridge */}
      {isOpen && (
        <div
          className="absolute right-0 h-4 bg-transparent"
          style={{ top: "100%" }}
        />
      )}
      {isOpen && (
        <div
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className="absolute mt-2 w-fit -translate-x-4 flex flex-col items-baseline gap-3 px-2 py-2 z-10 rounded-md font-semibold md:text-sm sm:text-xs text-xs text-[#4b040b] border border-[#c90c1f] bg-[#ff9ca6]"
        >
          <SignInButton
            mode="redirect"
            routing="path"
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            <p>Iniciar sesión</p>
          </SignInButton>

          <SignUpButton className="cursor-pointer hover:opacity-80 transition-opacity">
            <p>Registrar</p>
          </SignUpButton>
        </div>
      )}
    </section>
  );
}
