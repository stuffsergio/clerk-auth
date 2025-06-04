"use client";
import { useCart } from "../components/context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="px-[5dvw] py-10">
      <section className="flex flex-row gap-12 mb-6 px-12 justify-between items-center">
        <h1 className="text-2xl font-bold">Tu Carrito</h1>
        <p className="text-sm font-normal">Elementos: {cart.length}</p>
      </section>

      {cart.length === 0 ? (
        <p className="text-gray-600 pl-10 pt-5">Tu carrito está vacío</p>
      ) : (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-4 rounded-lg border border-white bg-white shadow-md"
            >
              <img
                src={`/images/${item.imagen}`}
                alt={item.nombre}
                className="w-34 h-34 object-contain"
              />
              <div className="flex flex-row md:gap-7 sm:gap-3 gap-5 px-3 justify-between items-center">
                <h4 className="md:text-md text-sm text-gray-900 font-semibold">
                  {item.nombre}
                </h4>
                <button
                  onClick={() => removeFromCart(index)}
                  className="md:text-sm text-xs border border-red-900 bg-red-300 px-2 py-1 rounded-lg text-red-700 hover:underline"
                >
                  Quitar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
