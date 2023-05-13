import { useState } from "react";

function NavItems() {
  return (
    <>
      <li className="uppercase px-4 py-4 font-color-2 text-center select-none">
        home
      </li>
      <li className="uppercase px-4 py-4 font-color-2 text-center select-none">
        about
      </li>
      <li className="uppercase px-4 py-4 font-color-2 text-center select-none">
        menu
      </li>
      <li className="uppercase px-4 py-4 font-color-2 text-center select-none">
        offers
      </li>
      <li className="uppercase px-4 py-4 font-color-2 text-center select-none">
        contact
      </li>
    </>
  );
}

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-color-1 flex flex-col justify-center items-center">
      <div
        className="space-y-2 md:hidden p-4"
        onClick={() => setOpen(state => !state)}
      >
        <div className="w-8 h-0.5 bg-color-2"></div>
        <div className="w-8 h-0.5 bg-color-2"></div>
        <div className="w-8 h-0.5 bg-color-2"></div>
      </div>
      {open && (
        <ul>
          <NavItems />
        </ul>
      )}

      <ul className="hidden md:flex justify-center items-center">
        <NavItems />
      </ul>
    </nav>
  );
};

export default Nav;
