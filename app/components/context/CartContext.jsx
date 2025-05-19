"use client";
import { createContext, useContext, useState } from "react";

const CartContext =
  createContext(); /* Crea el 'contexto global del carrito', es como una caja 
                      donde se guarda y comparte información entre componentes */

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // [] el estado del carrito está vacío

  // Añade un producto al carrito
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]); // prev: conserva lo que ya estaba
  };

  // Elimina un producto del carrito
  const removeFromCart = (indexToRemove) => {
    setCart((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    ); /* filter: genera un nuevo array
          elimina un producto según su posición (índice) */
  };

  return (
    // Provee los datos a los componentes hijos
    // {children} = son los componentes envueltos por el CartProvider, que podrán usar el carrito
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
// permite usar el carrito desde cualquier componente, siempre que esté dentro del CartProvider
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }
  return context;
};
