import { categories } from "./Hamburger";

const Menu = (props) => {
  const menuItems = categories.map((item) => (
    <li
      onClick={props.pageDisplay}
      className=" border-b-2 border-transparent hover:border-black font-serif font-medium cursor-pointer"
      key={item}
      data-page={item}
    >
      {item}
    </li>
  ));
  return (
    <div className=" border-b-2 border-gray-100 pb-2 w-full hidden justify-evenly items-center mb-5  lg:flex md:flex">
      <ul className="flex justify-between gap-10  ">{menuItems}</ul>
    </div>
  );
};

export default Menu;
