import StateMood from "./StateMood";
import Items from "./Items";

export default async function UserHome() {
  return (
    <div className="">
      <div className="relative top-5 pb-100">
        <aside className="right-1/2 bottom-1/2 pb-20">
          <StateMood />
        </aside>
        <Items />
      </div>
    </div>
  );
}
