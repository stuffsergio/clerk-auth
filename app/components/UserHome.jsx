"use client";
import Items from "./Items";
import { useState } from "react";

export default function UserHome() {
  const [searchItem, setSearchItem] = useState("");

  return (
    <div className="">
      <div className="relative flex flex-col justify-center items-center top-5 pb-100">
        <aside className="md:pb-10 pb-6">
          <div className="w-[90dvw] flex flex-row items-center px-4 py-5 rounded-xl bg-white shadow-lg">
            <h3 className="md:px-6 sm:px-5 px-3 md:py-2 py-1 md:text-xl sm:text-lg text-xs font-bold text-black">
              Añade tus productos al carrito
            </h3>
            <input
              type="text"
              value={searchItem} /* Guarda el valor que escribe el user */
              onChange={(e) =>
                setSearchItem(e.target.value)
              } /* Actualiza setSearchItem cada vez que cambia el value y lo guarda */
              placeholder="Buscar productos"
              className="px-2 py-1 text-sm rounded-lg border border-sky-500 focus:outline-none hover:bg-sky-500/10 transform transition-all duration-300"
            />
          </div>
        </aside>
        <Items
          searchItem={
            searchItem
          } /* Pasa como prop a Items el valor que tiene el estado que tiene searchItem */
        />
      </div>
    </div>
  );
}
