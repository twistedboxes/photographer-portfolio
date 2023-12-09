import { motion } from "framer-motion";

const Home = (props) => {
  const display = props.display;
  return (
    <>
      {display == "Home" && (
        <div className=" py-10 max-w-screen w-full h-full flex flex-col items-center justify-center p-2 ">
          <motion.h1
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -50, opacity: 0 }}
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0.2,
              delay: 0.25,
            }}
            className="select-none break-words lg:text-7xl md:text-7xl relative z-10 text-5xl font-serif mb-[-100px] lg:right-20 lg:top-14 tracking-widest"
          >
            Authentic
            <br />& Raw
          </motion.h1>
          <motion.img
            className="z-0 select-none"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{
              type: "spring",
              duration: 1.5,
              bounce: 0.2,
              delay: 0.1,
            }}
            src="../src/assets/hero/hero-transp-tri.png"
          />

          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -50, opacity: 0 }}
            transition={{
              type: "tween",
              duration: 0.3,
              delay: 0.25,
            }}
            className="w-1/2 text-center mt-1"
          >
            <h2 className="tracking-widest font-serif uppercase">
              Vision beyond the lens.
            </h2>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Home;
