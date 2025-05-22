import { User } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";

export default function SignIn() {
  return (
    <div>
      <User className="md:block sm:block hidden md:w-6 sm:w-6 w-5 md:h-6 sm:h-6 h-5" />
      <aside className="md:hidden sm:hidden block">
        <SignInButton>
          <User className="md:w-6 sm:w-6 w-5 md:h-6 sm:h-6 h-5" />
        </SignInButton>
      </aside>
    </div>
  );
}
