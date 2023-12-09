import { motion } from "framer-motion";
import { useState } from "react";

const Contact = (props) => {
  const [submitted, setSubmitted] = useState(false);

  const display = props.display;
  function handleSubmit(ev) {
    ev.preventDefault();
    console.log("form submitted");
    setSubmitted(true);
    console.log(ev.target.children);
    ev.target.reset();
    setTimeout(() => {
      let confirmModal = document.getElementById("submitConfirm");
      confirmModal.classList.add("hidden");
      location.reload();
    }, 2500);
  }

  return (
    <>
      {display == "Contact" && (
        <div className="w-full flex justify-center items-center">
          <div className=" lg:max-w-[30vw] md:max-w-[50vw] min-2-[300px] max-w-[80vw] p-2">
            <h1 className="text-center text-black font-serif text-3xl tracking-wide mb-4">
              Contact Me
            </h1>
            <p className="p-2 break-words font-serif tracking-wide">
              Got a project?
              <span className="font-bold"> Let's work together</span>.
            </p>
            <motion.form
              onSubmit={handleSubmit}
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 50, opacity: 0 }}
              transition={{
                type: "spring",
                duration: 1,
                bounce: 0.1,
                delay: 0.25,
              }}
              className="max-w-1/2 p-2 flex flex-col justify-center items-center font-serif  "
              id="contactForm"
            >
              <input
                required
                placeholder="Email address"
                className="px-2 border-[2px] border-slate-600 w-full  outline-none  m-0.5 p-1 placeholder:text-gray-300"
                type="email"
              />
              <input
                required
                placeholder="Your Name"
                className="px-2 border-[2px] border-slate-600 w-full  outline-none  m-0.5 p-1 placeholder:text-gray-300"
                type="name"
              />
              <textarea
                required
                className="border-[2px] border-slate-600 w-full outline-none m-0.5 p-2"
                name="textArea"
                id="textArea"
                cols="30"
                rows="10"
              ></textarea>
              <button
                className="border-[2px] border-slate-600 m-0.5 w-full hover:text-white hover:bg-slate-900"
                type="submit"
              >
                Submit
              </button>
            </motion.form>
            {submitted == true && (
              <motion.div
                id="submitConfirm"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="bg-white/80 w-full fixed top-0 bottom-0 left-0 right-0 text-center h-full flex justify-center items-center"
              >
                <div className="font-serif shadow-lg bg-green-500 text-white rounded-lg p-2 w-1/3">
                  <h1 className=" font-bold">Thank you</h1>
                  <p>I'll be in touch as soon as possible!</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
