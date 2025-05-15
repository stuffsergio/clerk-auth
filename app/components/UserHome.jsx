import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { SignedIn } from "@clerk/nextjs";
import StateMood from "./StateMood";

export default async function UserHome() {
  const { userId } = await auth();
  const user = await currentUser();
  return (
    <div className="border">
      <div className="flex justify-between gap-3 items-center align-middle absolute right-5 bottom-5 px-4 py-2 font-semibold text-sm text-lime-950 bg-lime-300/50 border rounded-lg border-lime-700">
        <UserButton />
        <span className="cursor-default">
          {/* Si el usuario ha puesto el fistName, se mostrará,
              si no, mostrará el username, y
              si no, mostrará 'usuario'
          */}
          Bienvenido, {user.firstName || user.username || "usuario"}
        </span>
      </div>
      <aside className="right-1/2 bottom-1/2">
        <StateMood />
      </aside>
    </div>
  );
}
