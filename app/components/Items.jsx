"use client";
import { useCart } from "./context/CartContext";

export default function Items() {
  const { addToCart } = useCart();

  const productos = [
    {
      id: 1,
      nombre: "Puffy Inflatable",
      imagen: "/puffy-inflatable.webp",
    },
    {
      id: 2,
      nombre: "Glosse Brain",
      imagen: "/glossy-brain.webp",
    },
    {
      id: 3,
      nombre: "Textured Book",
      imagen: "/textured-book.webp",
    },
    {
      id: 4,
      nombre: "Abstract Liquid",
      imagen: "abstract-liquid.webp",
    },
    {
      id: 5,
      nombre: "Brócoli",
      imagen: "brocoli.webp",
    },
    {
      id: 6,
      nombre: "Leche",
      imagen: "leche.webp",
    },
    {
      id: 7,
      nombre: "Arroz",
      imagen: "arroz.webp",
    },
    {
      id: 8,
      nombre: "Smoothies",
      imagen: "smoothie.webp",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 grid-cols-3 md:gap-5 sm:gap-10 gap-7 px-10">
      {productos.map((producto) => (
        <section
          key={producto.id}
          className="flex flex-col items-baseline justify-center gap-2"
        >
          <div className="w-[22dvw] hover:border border-[#360000] rounded-xl flex items-center justify-center transform transition-all duration-150">
            <img
              src={`/images/${producto.imagen}`}
              alt={producto.nombre}
              className="md:w-[20dvw] sm:w-[26dvw] w-[30dvw] h-auto hover:scale-105 transform transition-all duration-300"
            />
          </div>
          <span className="flex flex-row justify-evenly items-center w-full">
            <p className="md:text-lg sm:text-sm text-xs font-bold">
              {producto.nombre}
            </p>
            <button onClick={() => addToCart(producto)}>
              <img
                src="/icons/carrito.png"
                alt="carrito"
                className="md:w-[3dvw] sm:w-[4dvw] w-[5dvw] h-auto hover:scale-110 hover:rotate-5 transform transition-all duration-200"
              />
            </button>
          </span>
        </section>
      ))}
    </div>
  );
}
