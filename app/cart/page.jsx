"use client";
import { useCart } from "../components/context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="px-[5dvw] py-10">
      <h1 className="text-2xl font-bold mb-6">Tu Carrito</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-4 p-4 rounded-lg border border-gray-300 bg-white shadow-sm"
            >
              <img
                src={`/images/${item.imagen}`}
                alt={item.nombre}
                className="w-24 h-24 object-contain"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.nombre}</h2>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="text-sm text-red-600 hover:underline"
              >
                Quitar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
