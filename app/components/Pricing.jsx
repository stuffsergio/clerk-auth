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
        <Link href="#">Pricing</Link>
      </button>
    </section>
  );
}
