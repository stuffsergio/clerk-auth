"use client";
import { useState } from "react";
import Features from "./Features";
import Pricing from "./Pricing";
import Link from "next/link";
import { useCart } from "./context/CartContext";

export default function NavBarSignedIn() {
  const { cart } = useCart();

  return (
    <nav className="sticky w-[95dvw] m-auto md:top-3 sm:top-2 top-2 z-99 rounded-xl bg-white/5 backdrop-blur-xl md:px-20 sm:px-7 px-5 py-0 flex justify-between items-center">
      <div>
        <img
          src="/images/hourglass.webp"
          alt="reloj de arena"
          className="md:w-8 sm:w-6 w-5 md:h-8 sm:h-6 h-5"
        />
      </div>
      <div className="flex flex-row md:gap-10 sm:gap-5 gap-0 justify-between items-center">
        <Features />
        <div>
          <Pricing />
        </div>
      </div>
      <div>
        <Link
          href="/cart"
          className={`md:text-sm sm:text-sm text-xs ${
            cart.length > 0 ? "text-blue-600" : "text-black"
          }`}
        >
          Carrito ( {cart.length} )
        </Link>
      </div>
    </nav>
  );
}
