import { SignedIn, SignedOut } from "@clerk/nextjs";
import WelcomeUser from "./components/WelcomeUser";
import NavBar from "./components/NavBar";
import UserHome from "./components/UserHome";
import HabitTracker from "./components/C";

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
        <HabitTracker />
      </SignedIn>
    </div>
  );
}
