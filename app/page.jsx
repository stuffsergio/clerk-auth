import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs/server";
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import WelcomeUser from "./components/WelcomeUser";
import NavBar from "./components/NavBar";
import UserHome from "./components/UserHome";

export default async function Home() {
  const { userId } = await auth();
  const user = await currentUser();

  return (
    <div>
      <SignedOut>
        <NavBar />
        <WelcomeUser />
      </SignedOut>

      <SignedIn>
        <NavBar />
        <UserHome />
      </SignedIn>
    </div>
  );
}
