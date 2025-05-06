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

  return (
    <div className="pb-100">
      <div className="relative inline-block mb-15">
        <img
          src="/roomtonosClaros.png"
          alt="aesthetic room"
          className="w-full h-auto"
        />
        <h1
          id="ntp"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-bold text-[#360000] text-center md:text-6xl sm:text-2xl px-4 py-2"
        >
          New Timeless Project
        </h1>
      </div>
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
