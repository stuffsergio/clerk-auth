import { UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function WelcomeUser() {
  const users = [
    {
      nombre: "Jose Alberto",
      rol: "Estudiante de Idiomas",
      copy: "Fix: validación en formulario de login",
      img: "jose",
    },
    {
      nombre: "Leandro",
      rol: "Formación en Barbería",
      copy: "Refactor: limpiado código en componente Header",
      img: "lenny",
    },
    {
      nombre: "Santi",
      rol: "Estudiante de Geografía",
      copy: "Feat: agregado botón de eliminar tarea",
      img: "santi",
    },
    {
      nombre: "Sofía",
      rol: "Estudiante de Primaria",
      copy: "Docs: actualización de README con instrucciones",
      img: "sofia",
    },
    {
      nombre: "Diego",
      rol: "Estudiante de Química",
      copy: "Chore: mejoras menores en estilos globales",
      img: "diego",
    },
  ];
  const company = [{ svg: "google" }, { svg: "github" }, { svg: "airbnb" }];

  return (
    <div className="pb-100 pt-15">
      <section className="flex flex-col gap-5 md:flex-row justify-center items-center px-5 pb-20">
        <div className="h-full flex flex-col w-full md:w-1/2 px-20 lg md:py-18 sm:py-10 py-5 justify-center md:gap-5 sm:gap-3 gap-2 rounded-xl bg-black">
          <aside className="flex flex-row items-center md:gap-3 sm:gap-2 gap-1">
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
          <h1 className="md:text-2xl sm:text-xl text-2xl text-white">
            Title/Heading
          </h1>
          <div className="flex flex-col">
            <p className="md:text-sm sm:text-xs text-xs text-white/80">
              Adéntrate en un mundo donde el diseño se encuentra con la
              innovación.
            </p>
            <p className="md:block sm:block hidden md:text-sm sm:text-xs text-xs text-white/80">
              Nuestro último proyecto combina una estética atemporal con
              tecnología de vanguardia para crear una experiencia única.
            </p>
          </div>
          <aside className="text-white text-sm flex flex-row items-center gap-4">
            <SignInButton
              mode="redirect"
              routing="path"
              className="cursor-pointer border rounded-xl px-2 py-1 flex items-center justify-center hover:bg-white/90 hover:text-black/90"
            >
              Iniciar sesión
            </SignInButton>
            <button>
              <a href="#">Newsletter</a>
            </button>
          </aside>
        </div>
        <div className="relative w-full md:w-1/2">
          <img
            src="/roomtonosClaros.png"
            alt="aesthetic room"
            className="rounded-xl"
          />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-bold text-[#360000] text-center md:text-xl sm:text-lg">
            New Timeless Project
          </h1>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center mx-4 md:mx-20">
        <div className="flex flex-col gap-3 w-full md:w-1/2 px-4 md:pl-20 mb-8 md:mb-0">
          <h3 className="text-md font-bold">Latests scripts</h3>
          <div className="flex flex-col gap-2">
            {users.map((usuario, index) => (
              <div
                key={index}
                className="w-full md:w-fit flex flex-row gap-2 pt-1 pr-4 pb-1 pl-2 items-center rounded-full group hover:bg-stone-500/15 hover:scale-101 hover:border hover:border-black transform transition-all"
              >
                <img
                  src={`/icons/avatar-${usuario.img}.svg`}
                  alt="user avatar"
                  className="w-8 h-8 p-1.5 rounded-full border"
                />
                <div className="flex flex-col">
                  <strong className="text-sm">
                    {usuario.nombre} - {usuario.rol}
                  </strong>
                  <p className="text-sm font-light">{usuario.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-1/2 px-4 md:pl-20">
          <h3 className="text-md font-bold">Best features</h3>
          {/* 1º */}
          <div className="flex flex-row gap-5 items-center">
            <div className="relative w-20 md:w-25 h-20 bg-[#EAEAEB] rounded-lg hover:scale-105 hover:translate-x-1 hover:translate-y-1 transform transition-all duration-250">
              <div className="relative w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500/80 rounded-lg">
                <img
                  src="/icons/icon-palette.svg"
                  alt="icon palette"
                  className="w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-sm">Diseña a tu estilo</p>
              <p className="text-sm font-light">
                Personaliza tu marca con un toque especial
              </p>
            </div>
          </div>
          {/* 2º */}
          <div className="flex flex-row gap-5 items-center">
            <div className="relative w-20 md:w-25 h-20 bg-[#EAEAEB] rounded-lg hover:scale-105 hover:translate-x-1 hover:translate-y-1 transform transition-all duration-250">
              <div className="relative w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500/80 rounded-lg">
                <img
                  src="/icons/icon-book1.svg"
                  alt="icon book"
                  className="w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-sm">Newsletters</p>
              <p className="text-sm font-light">
                Accede a las últimas noticias y reflexiones
              </p>
            </div>
          </div>
          {/* 3º */}
          <div className="flex flex-row gap-5 items-center">
            <div className="relative w-20 md:w-25 h-20 bg-[#EAEAEB] rounded-lg hover:scale-105 hover:translate-x-1 hover:translate-y-1 transform transition-all duration-250">
              <div className="relative w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-500/80 rounded-lg">
                <img
                  src="/icons/icon-music.svg"
                  alt="icon music"
                  className="w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-sm">Playlist</p>
              <p className="text-sm font-light">
                No puede faltar esa playlist con tus homies
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
