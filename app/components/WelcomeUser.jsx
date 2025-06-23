"use client";
import { UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import { ArrowRight, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function WelcomeUser() {
  return (
    <div className="">
      <section className="relative h-[80vh] mb-[20vh] flex flex-col gap-8 items-center justify-center px-4 md:px-10 text-center">
        <div className="flex flex-col items-center md:items-start justify-center gap-5 max-w-xl">
          <div className="flex flex-col items-center md:items-start justify-center">
            <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              ListShop
            </h1>
            <p className="text-black/80 text-base sm:text-lg md:text-xl font-light -translate-y-1.5 mt-2">
              Tu{" "}
              <i className="text-[#0f52ba] tracking-wide font-bold">compra</i>{" "}
              🛒 en tu mano
            </p>
          </div>

          <div className="md:absolute md:top-15 md:left-20 md:flex md:flex-row md:items-center md:justify-center">
            <div className="md:flex md:flex-row md:items-center md:justify-center md:animate-rotate-border md:transition-all md:duration-500 md:ease-out md:rounded-full md:bg-conic/[from_var(--border-angle)] md:from-black md:via-green-500 md:to-black md:from-80% md:via-90% md:to-100% md:p-[1.5px]">
              <div className="md:flex md:flex-row md:items-center md:justify-center md:gap-1 md:px-2 md:py-1 md:rounded-full md:text-white/80 md:bg-neutral-900 md:border md:border-neutral-800 md:text-center md:text-xs">
                <img
                  src="/icons/user-tag-02.svg"
                  alt="User Tag"
                  className="w-5 h-5"
                  fill="#FFE156"
                />
                <p>
                  Añade tus productos a la lista de la compra con un solo click.
                </p>
              </div>
            </div>
          </div>
          <div className="md:absolute md:bottom-15 md:right-20 md:flex md:flex-row md:items-center md:justify-center">
            <div className="md:flex md:flex-row md:items-center md:justify-center md:animate-rotate-border md:transition-all md:duration-500 md:ease-out md:rounded-full md:bg-conic/[from_var(--border-angle)] md:from-black md:via-green-500 md:to-black md:from-80% md:via-90% md:to-100% md:p-[1.5px]">
              <div className="md:flex md:flex-row md:items-center md:justify-center md:gap-1 md:px-2 md:py-1 md:rounded-full md:text-white/80 md:bg-neutral-900 md:border md:border-neutral-800 md:text-center md:text-xs">
                <img
                  src="/icons/user-tag-02.svg"
                  alt="User Tag"
                  className="w-5 h-5"
                  fill="#FFE156"
                />
                <p>No necesitas ni boli ni papel, ni siquiera pensar.</p>
              </div>
            </div>
          </div>
        </div>
        <SignUpButton className="mt-0 cursor-pointer hover:scale-105 hover:-translate-y-0.5 transform transition-all shadow-blue-400/80 shadow-lg rounded-full px-6 py-2 tracking-wide text-lg sm:text-xl font-bold bg-blue-600 text-white">
          <h3>Empezar</h3>
        </SignUpButton>
      </section>

      <section className="flex flex-col md:flex-row justify-between items-start gap-10 px-8 md:px-25 py-10">
        {/* Primer bloque (a la izq en md+) */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <h3 className="md:text-xl text-md font-bold">
            Lo último en <i>features</i>
          </h3>

          {/* Feature */}
          {[
            {
              icon: "/icons/icon-palette.svg",
              bg: "bg-red-500/80",
              title: "Supermercados cerca de ti",
              desc: "Encuentra los mejores supermercados sin salir de tu zona.",
            },
            {
              icon: "/icons/icon-book1.svg",
              bg: "bg-teal-500/80",
              title: "Filtra y encuentra rápido",
              desc: "Busca productos fácilmente simplemente escribiendo.",
            },
            {
              icon: "/icons/icon-music.svg",
              bg: "bg-indigo-500/80",
              title: "Tus favoritos, siempre a mano",
              desc: "Guarda lo que más usas y accede en segundos.",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-20 h-20 bg-[#EAEAEB] rounded-lg flex items-center justify-center hover:scale-105 hover:translate-x-1 hover:translate-y-1 transform transition-all duration-250">
                <div
                  className={`w-8 h-8 ${item.bg} rounded-lg flex items-center justify-center`}
                >
                  <img src={item.icon} alt="" className="w-5 h-5" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-sm">{item.title}</p>
                <p className="text-sm font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Segundo bloque (a la dcha en md+) */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h3 className="md:text-xl text-md font-bold">Próximamente</h3>

          <div className="flex flex-col gap-3">
            <div className="flex md:flex-row text-sm md:space-x-0.5 flex-col space-y-0.5">
              <p>En ShopList no dejamos de innovar.</p>
              <p>Mira lo que estamos preparando para ti.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Planes flexibles",
                  desc: "Escoge el plan perfecto para ti y aprovecha todo lo que te ofrecemos.",
                },
                {
                  title: "Acceso rápido a tus favoritos",
                  desc: "Guarda tus productos esenciales y accede a ellos en un click.",
                },
                {
                  title: "Modo claro u oscuro",
                  desc: "Personaliza tu experiencia según tu estilo o momento del día.",
                },
                {
                  title: "Dudas & Soporte",
                  desc: "Consulta nuestra FAQ o contáctanos para colaborar y mejorar juntos.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-gray-300 shadow-lg bg-white hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-200 ease-in-out"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-800">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
