import { SignedIn, SignedOut } from "@clerk/nextjs";
import WelcomeUser from "./components/WelcomeUser";
import NavBar from "./components/NavBar";
import UserHome from "./components/UserHome";

export default async function Home() {
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
