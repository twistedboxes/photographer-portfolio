import { motion } from "framer-motion";

const Stripe = (props) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className="invisible  lg:visible"
    >
      <div className=" fixed right-0 top-[35vh] left-[68vw] bottom-0 bg-black h-[800px] w-[10px] rotate-[45deg] opacity-[0.8%] "></div>
      <div className=" fixed right-0 bottom-[35vh] left-[77vw]  bg-black h-[800px] w-[10px] rotate-[45deg] opacity-[0.8%] "></div>
      <div className=" fixed right-0 top-[35vh] left-[22vw] bottom-0 bg-black h-[800px] w-[10px] rotate-[45deg] opacity-[0.8%] "></div>
      <div className=" fixed right-0 bottom-[35vh] left-[31vw]  bg-black h-[800px] w-[10px] rotate-[45deg] opacity-[0.8%] "></div>
    </motion.div>
  );
};

export default Stripe;
