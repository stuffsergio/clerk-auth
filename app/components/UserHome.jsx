import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { SignedIn } from "@clerk/nextjs";
import StateMood from "./StateMood";

export default async function UserHome() {
  const { userId } = await auth();
  const user = await currentUser();
  return (
    <div>
      <div className="flex justify-between gap-3 items-center align-middle absolute right-5 bottom-5 px-4 py-2 font-semibold text-sm text-lime-950 bg-lime-300/50 border rounded-lg border-lime-700">
        <UserButton />
        <span className="cursor-default">Bienvenido, {user.firstName}</span>
      </div>
      <aside className="absolute right-1/2 top-1/2">
        <StateMood />
      </aside>
    </div>
  );
}
