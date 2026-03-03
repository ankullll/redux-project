import {  NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className=" flex  justify-between items-center px-7 py-4  w-full bg-gray-900 ">
      <h2 className=" font-medium text-xl">Media Search</h2>
      <div className="px-5 flex gap-7  ">
        <NavLink
          className="border rounded px-2 py-1 active:scale-95 bg-amber-50 text-gray-900 text-lg"
          to="/"
        >
          Search
        </NavLink>
        <NavLink
          className="border rounded px-2 py-1 active:scale-95 bg-amber-50 text-gray-900 text-lg"
          to="/collection"
        >
          Collection
        </NavLink>
      </div>
    </div>
  );
};


export default Navbar