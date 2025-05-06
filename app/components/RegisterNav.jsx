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
        <User />
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
          className="absolute mt-2 w-40 flex flex-col gap-3 p-6 z-10 rounded-md font-semibold text-[#4b040b] border border-[#c90c1f] bg-[#ff9ca6] backdrop-blur-xs"
        >
          <SignInButton
            mode="redirect"
            routing="path"
            className="cursor-pointer"
          >
            Iniciar sesión
          </SignInButton>

          <SignUpButton className="bg-sky-200 border border-sky-500 rounded-md cursor-pointer">
            Registrar
          </SignUpButton>
        </div>
      )}
    </section>
  );
}
