"use client";
import { useCart } from "./context/CartContext";

export default function Items({
  searchItem /* Recibe el estado de searchItem, es decir, lo que ha escrito el user en el input */,
}) {
  const { addToCart } = useCart();

  const productos = [
    {
      id: 1,
      nombre: "Brócoli",
      imagen: "brocoli.webp",
    },
    {
      id: 1,
      nombre: "Leche",
      imagen: "leche.webp",
    },
    {
      id: 3,
      nombre: "Arroz",
      imagen: "arroz.webp",
    },
    {
      id: 4,
      nombre: "Smoothies",
      imagen: "smoothie.webp",
    },
    {
      id: 5,
      nombre: "Plátanos",
      imagen: "banana.webp",
    },
    {
      id: 6,
      nombre: "Naranjas",
      imagen: "naranjas.webp",
    },
    {
      id: 7,
      nombre: "Salmón",
      imagen: "salmon.webp",
    },
    {
      id: 8,
      nombre: "Yogurt",
      imagen: "yogurt.webp",
    },
    {
      id: 9,
      nombre: "Aguacates",
      imagen: "aguacates.webp",
    },
    {
      id: 10,
      nombre: "Cereales",
      imagen: "cereales.webp",
    },
    {
      id: 11,
      nombre: "Filete de ternera",
      imagen: "ternera.webp",
    },
    {
      id: 12,
      nombre: "Huevos",
      imagen: "huevos.webp",
    },
    {
      id: 13,
      nombre: "Aceite de oliva",
      imagen: "aceite-oliva.webp",
    },
    {
      id: 14,
      nombre: "Barra de pan",
      imagen: "barra-pan.webp",
    },
    {
      id: 15,
      nombre: "Mangos",
      imagen: "mangos.webp",
    },
    {
      id: 16,
      nombre: "Avena",
      imagen: "avena.webp",
    },
    {
      id: 17,
      nombre: "Tomates",
      imagen: "tomates.webp",
    },
  ];

  const productosFiltrados = productos.filter(
    (item) => item.nombre.toLowerCase().includes(searchItem.toLowerCase())
    /* Filtra los productos, el nuevo array generado contiene el nombre del item
    includes() --> devuelve true si searchItem.toLowerCase() es parte de item.nombre.toLowerCase()
    */
  );

  return (
    <div className="grid md:grid-cols-4 grid-cols-3 md:gap-5 sm:gap-10 gap-7 px-10">
      {productosFiltrados.map((producto) => (
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
                className="md:w-[3dvw] sm:w-[4dvw] w-[6dvw] h-auto hover:scale-110 hover:rotate-5 transform transition-all duration-200"
              />
            </button>
          </span>
        </section>
      ))}
    </div>
  );
}
