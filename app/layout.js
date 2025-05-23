import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { CartProvider } from "./components/context/CartContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Clerk Auth",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark]
      }}
    >
      <CartProvider>
        <html lang="en">
            <body>
              <div className="z-0 min-h-screen bg-[radial-gradient(#0000001a_1px,#f8fafc_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(circle_80%_at_50%_50%,#000_70%,transparent_75%)]">
                {children}
                <Toaster 
                  position="top-right" 
                  toastOptions={{
                    duration: 3000, 
                    style: { 
                      background: '#000', 
                      color: '#fff', 
                    },
                  }} 
                />
              </div>
            </body>
        </html>
      </CartProvider>
    </ClerkProvider>
  );
}
