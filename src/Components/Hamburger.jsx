import { motion } from "framer-motion";
export const categories = ["Home", "Projects", "Contact", "About Me"];

function Hamburger(props) {
  const open = props.open;
  const menuItems = categories.map((item) => (
    <li
      key={item}
      className=" font-serif text-white list-none mt-2  ml-4 hover:text-yellow-400 cursor-pointer"
      data-page={item}
      onClick={props.pageDisplay}
    >
      {item}
    </li>
  ));

  return (
    <>
      {open && (
        <motion.div
          animate={{ x: 10 }}
          initial={{ x: 200 }}
          transition={{ type: "tween", duration: 0.3 }}
          className=" bg-gray-900 z-20 fixed top-0 right-0 bottom-0 w-2/5"
        >
          <motion.i
            animate={{ rotate: -360, scale: 1 }}
            initial={{ scale: 0.5 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            onClick={props.callback}
            className="fixed z-20 right-7 top-4 fa-solid fa-x text-white active:text-gray-300 cursor-pointer hover:text-yellow-400"
          ></motion.i>
          <ul className="pl-1 list-none text-white text-2xl p-4 flex flex-col gap-2 justify-center items-end"></ul>
          {menuItems}
        </motion.div>
      )}
    </>
  );
}

export default Hamburger;
