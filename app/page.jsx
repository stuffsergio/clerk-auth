import { SignedIn, SignedOut } from "@clerk/nextjs";
import WelcomeUser from "./components/WelcomeUser";
import NavBar from "./components/NavBar";
import NavBarSignedIn from "./components/NavBarSignedIn";
import UserHome from "./components/UserHome";
import UserCard from "./components/UserCard";
import { CartProvider } from "./components/context/CartContext";

export default async function Home() {
  return (
    <div>
      <SignedOut>
        <NavBar />
        <WelcomeUser />
      </SignedOut>

      <SignedIn>
        <NavBarSignedIn />
        <UserHome />
        <UserCard />
      </SignedIn>
    </div>
  );
}
