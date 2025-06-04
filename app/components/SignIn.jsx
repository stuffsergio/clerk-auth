import { User } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";

export default function SignIn() {
  return (
    <div className="flex flex-row justify-center items-center">
      <User className="md:block sm:block hidden md:w-6 sm:w-6 w-5 md:h-6 sm:h-6 h-5 hover:opacity-70 transform transition-all duration-150" />
      <aside className="md:hidden sm:hidden block">
        <SignInButton className="md:text-md sm:text-sm text-xs hover:opacity-70 transform transition-all duration-150">
          Iniciar sesión
        </SignInButton>
      </aside>
    </div>
  );
}
