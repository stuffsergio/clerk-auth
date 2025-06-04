import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { useState } from "react";
import Link from "next/link";

export default function Pricing() {
  const [isOpen, setIsOpen] = useState(false);
  let timeOutId = null;

  const handleEnter = () => {
    clearTimeout(timeOutId);
    setIsOpen(true);
  };
  const handleLeave = () => {
    timeOutId = setTimeout(() => setIsOpen(false), 500);
  };

  return (
    <section className="">
      <button
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="relative flex items-center gap-2 px-4 py-2 font-bold md:text-base sm:text-sm text-xs rounded-md hover:bg-gray-500/5 border border-transparent hover:border-gray-500/10 transition-all duration-300"
      >
        <Link href="/pricing">Pricing</Link>
      </button>

      <div>
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
            className="md:flex sm:flex hidden absolute mt-2 w-fit -translate-x-0 flex-col items-baseline gap-3 px-2 py-2 z-10 rounded-md font-semibold md:text-sm sm:text-xs text-xs text-[#4b040b] border border-[#c90c1f] bg-[#ff9ca6]"
          >
            <p>Próximamente</p>
          </div>
        )}
      </div>
    </section>
  );
}
