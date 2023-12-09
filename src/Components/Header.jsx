import { useState } from "react";
import Hamburger from "./Hamburger";

function Header(props) {
  const [open, setOpen] = useState(false);

  function handleModal(ev) {
    setOpen(!open);
  }

  return (
    <div className="flex justify-between text-xl p-3">
      <h1
        onClick={props.pageDisplay}
        data-page="Home"
        className="text-black font-serif cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-black"
      >
        <span data-page="Home" className="font-bold">
          Jenna
        </span>
        <span data-page="Home" className=" text-gray-600">
          Doe
        </span>
      </h1>

      <div className="lg:hidden md:hidden">
        <i
          onClick={handleModal}
          className="fa-solid fa-bars text-black active:text-gray-300 cursor-pointer  hover:text-yellow-400"
        ></i>
        <Hamburger
          open={open}
          callback={handleModal}
          pageDisplay={props.pageDisplay}
        />
      </div>
    </div>
  );
}

export default Header;
