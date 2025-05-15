import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { useState } from "react";

export default function FAQ() {
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
        FAQ
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
          className="absolute md:block sm:hidden hidden mt-2 px-2 py-0.5 w-fit z-10 rounded-md md:text-sm sm:text-xs text-xs font-semibold text-[#09360b] border border-[#699d99] bg-[#e5f6ec] backdrop-blur-xs"
        >
          <p>Preguntas frecuentes</p>
        </div>
      )}
    </section>
  );
}
