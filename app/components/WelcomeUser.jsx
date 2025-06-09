import { UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import { ArrowRight, User } from "lucide-react";

export default function WelcomeUser() {
  const company = [{ svg: "google" }, { svg: "github" }, { svg: "airbnb" }];

  return (
    <div className="pb-50 md:pt-8 sm:pt-7 pt-5">
      <section className="flex flex-col gap-5 md:flex-row justify-center items-center px-5 pb-15">
        <div className="h-full flex flex-col w-full md:w-1/2 px-20 lg md:py-18 sm:py-10 py-5 justify-center md:gap-5 sm:gap-3 gap-2 rounded-xl bg-black">
          <aside className="flex flex-row items-center md:gap-4 sm:gap-2 gap-1">
            <div className="flex flex-row md:gap-1 gap-0.5">
              {company.map((company, index) => (
                <div
                  className="relative border border-white rounded-full bg-white md:p-1 p-0.5"
                  key={index}
                >
                  <img
                    src={`/icons/icon-${company.svg}.svg`}
                    alt="company Icon"
                    className="w-4 h-4 rounded-xl"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-white/80">1200+ users</p>
          </aside>
          <h1 className="md:text-2xl sm:text-xl text-2xl text-blue-200">
            LIST SHOP
          </h1>
          <div className="flex flex-col">
            <p className="md:text-sm sm:text-xs text-xs text-white/80">
              No compliques la compra, hazlo sencillo y rápido con{" "}
              <i className="text-blue-200 font-bold tracking-wider">ListShop</i>
              .
            </p>
            <p className="md:block sm:block hidden md:text-sm sm:text-xs text-xs text-white/80">
              Tus alimentos y recursos favoritos al alcance de tu mano, puedes
              hacerlo ahora mismo.
            </p>
          </div>
          <aside className="text-white text-sm flex flex-row items-center gap-4">
            <SignUpButton
              mode="redirect"
              routing="path"
              className="group cursor-pointer rounded-xl px-3 py-1 flex flex-row gap-1.5 items-center justify-center text-[#4b040b] border border-[#c90c1f] bg-[#ff9ca6]"
            >
              <aside>
                <strong className="group-hover:opacity-85">Probar</strong>
                <ArrowRight className="group-hover:translate-x-1.5 transition-all transform duration-200 md:w-5 md:h-5 sm:w-4 sm:h-4 w-3 h-3" />
              </aside>
            </SignUpButton>
          </aside>
        </div>
        <div className="relative w-full md:w-1/2">
          <img
            src="/images/roomtonosClaros.webp"
            alt="aesthetic room"
            className="rounded-xl"
          />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-bold text-[#360000] text-center md:text-xl sm:text-lg">
            New Timeless Project
          </h1>
        </div>
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
