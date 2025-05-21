import Search from "./Search";
import Items from "./Items";

export default async function UserHome() {
  return (
    <div className="">
      <div className="relative flex flex-col justify-center items-center top-5 pb-100">
        <aside className="pb-20">
          <Search />
        </aside>
        <Items />
      </div>
    </div>
  );
}
