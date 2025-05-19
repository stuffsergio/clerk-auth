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
  ];

  return (
    <div className="w-fit mx-[5dvw] my-5 flex flex-row items-center gap-3">
      {productos.map((producto) => (
        <section
          key={producto.id}
          className="flex flex-col items-baseline justify-center gap-2"
        >
          <div className="w-[22dvw] hover:border border-[#360000] rounded-xl flex items-center justify-center transition-all transform duration-150">
            <img
              src={`/images/${producto.imagen}`}
              alt={producto.nombre}
              className="w-[20dvw] h-auto"
            />
          </div>
          <span className="flex flex-row justify-evenly items-center w-full">
            <p className="md:text-sm sm:text-xs text-xs">{producto.nombre}</p>
            <button onClick={() => addToCart(producto)}>
              <img
                src="/icons/carrito.png"
                alt="carrito"
                className="w-[2.5dvw] h-auto hover:scale-110 transition-transform"
              />
            </button>
          </span>
        </section>
      ))}
    </div>
  );
}
