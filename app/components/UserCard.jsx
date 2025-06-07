import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function UserCard() {
  const user = await currentUser();

  return (
    <div className="sticky md:w-[12dvw] sm:w-fit w-fit bottom-5 left-full mr-5 flex justify-between md:gap-2 sm:gap-1.5 gap-1 items-center align-middle md:px-3 px-2 py-2 font-semibold md:text-xs sm:text-xs text-xs text-lime-950 bg-lime-300/50 border rounded-lg border-lime-700">
      <UserButton />
      <p className="md:block sm:block hidden cursor-default">
        {/* Si el usuario ha puesto el fistName, se mostrará,
              si no, mostrará el username, y
              si no, mostrará 'usuario'
          */}
        Bienvenido, {user.firstName || user.username || "usuario"}
      </p>
    </div>
  );
}
