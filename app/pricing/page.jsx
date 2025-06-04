"use client";
import { useState } from "react";
import NavBarSignedIn from "../components/NavBarSignedIn";

export default function Precios() {
  const [active, setActive] = useState("uno");

  return (
    <div className="pb-50">
      <NavBarSignedIn />
      <div className="flex flex-col justify-center items-center gap-15">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="font-bold text-6xl text-center pt-15">
            Acceso limit-less
          </h1>
          <p className="text-black/70 text-lg">
            Obtén acceso a toda las funcionalidades - Cancela cuando quieras
          </p>
        </div>
        <div className="relative w-fit mx-auto mt-10">
          <div className="relative flex gap-2 p-1 bg-gray-200 rounded-full w-[200px] overflow-hidden">
            {/* Fondo deslizante encima */}
            <div
              className={`absolute top-1 left-1.5 h-[calc(100%-0.5rem)] w-[calc(50%-0.5rem)] bg-blue-600 rounded-full transition-transform duration-300 ease-in-out z-20 ${
                active === "dos" ? "translate-x-full" : ""
              }`}
            />

            {/* Botón 1 */}
            <button
              onClick={() => setActive("uno")}
              className={`relative flex-1 px-4 py-2 rounded-full z-30 transition-colors duration-300 ${
                active === "uno" ? "text-white" : "text-black"
              }`}
            >
              Mensual
            </button>

            {/* Botón 2 */}
            <button
              onClick={() => setActive("dos")}
              className={`relative flex-1 px-4 py-2 rounded-full z-30 transition-colors duration-300 ${
                active === "dos" ? "text-white" : "text-black"
              }`}
            >
              Anual
            </button>
          </div>
        </div>

        <section className="flex flex-row gap-10">
          <div className="w-[28dvw] flex flex-col gap-3 p-5 rounded-2xl bg-blue-100">
            <aside className="flex flex-row gap-2 items-center">
              <h1>Pro</h1>
              <span></span>
              <div className="w-fit flex flex-row gap-1.5 rounded-full p-2 justify-center items-center bg-blue-200">
                <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                <p className="text-xs text-blue-950">Popular</p>
              </div>
            </aside>
          </div>
          <div className="w-[28dvw] flex flex-col gap-3 p-5 border rounded-2xl border-black/10">
            <h1>LifeTime</h1>
            <p>Acceso ilimitado & support</p>
          </div>
        </section>
      </div>
    </div>
  );
}
