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
        <p className="text-gray-600">Tu carrito está vacío</p>
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
              <div className="w-full flex flex-row gap-3 px-3 justify-between items-center">
                <h4 className="text-gray-900 font-semibold">{item.nombre}</h4>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-sm border border-red-900 bg-red-300 px-2 py-1 rounded-lg text-red-700 hover:underline"
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
