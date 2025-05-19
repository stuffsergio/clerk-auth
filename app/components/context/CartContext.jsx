"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const CartContext =
  createContext(); /* Crea el 'contexto global del carrito', es como una caja 
                      donde se guarda y comparte información entre componentes */

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // [] el estado del carrito está vacío

  // ⬇ Cargar carrito desde localStorage al montar el componente
  // - solo se ejecuta una vez al principio
  // - lee el carrito desde localStorage
  // - si encuentra algo, lo convierte de texto (JSON.parse) a array y lo carga
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // ⬆ Guardar carrito en localStorage cada vez que cambie
  // - se ejecuta cada vez que el carrito cambia (se hace gracias a esto -> [cart], ya que lee el cambio de estado useState)
  // - guarda el array como texto en localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Añade un producto al carrito
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]); // prev: conserva lo que ya estaba
    toast.success(`${product.nombre} añadido al carrito 🛒`, {
      style: {
        borderRadius: "100px",
        background: "#000",
        color: "#fff",
        fontSize: "12px",
        fontFamily: "sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    });
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
