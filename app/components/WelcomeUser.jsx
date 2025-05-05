import { UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import UserHome from "./UserHome";

export default function WelcomeUser() {
  return (
    <div>
      <section className="w-fit absolute bottom-5 right-5 flex flex-col gap-4">
        <SignInButton mode="redirect" routing="path" className="cursor-pointer">
          Iniciar sesión aquí
        </SignInButton>
        to see view this page
        <SignUpButton className="bg-sky-200 border border-sky-500 rounded-md cursor-pointer">
          Registrarse aquí
        </SignUpButton>
      </section>
      <main className="min-h-[30dvh] mx-5 flex flex-col justify-center items-center border">
        <h1 className="text-3xl font-bold">New Timeless Project</h1>
      </main>
    </div>
  );
}
