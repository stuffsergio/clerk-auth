"use client";
import { useState, useEffect } from "react";
import RegisterNav from "./RegisterNav";
import Features from "./Features";
import Pricing from "./Pricing";
import Contacto from "./Contacto";

export default function NavBar() {
  return (
    <nav className="sticky w-[95dvw] m-auto md:top-3 sm:top-2 top-2 z-99 rounded-xl bg-white/5 backdrop-blur-3xl md:px-20 sm:px-7 px-5 py-0 flex justify-around items-center">
      <div>
        <img
          src="/images/hourglass.webp"
          alt="reloj de arena"
          className="md:w-8 sm:w-6 w-5 md:h-8 sm:h-6 h-5"
        />
      </div>
      <div className="flex flex-row md:gap-10 sm:gap-5 gap-0 justify-between md:items-center sm:items-center items-baseline">
        <div>
          <Pricing />
        </div>
        <div>
          <RegisterNav />
        </div>
      </div>
    </nav>
  );
}
