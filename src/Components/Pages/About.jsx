const About = (props) => {
  const display = props.display;
  return (
    <>
      {display == "About Me" && (
        <div className="w-full flex items-center justify-center h-full ">
          <div className=" lg:max-w-[30vw] md:max-w-[50vw] min-2-[300px] max-w-[80vw] p-2 flex flex-col items-center">
            <img
              className="w-1/4 aspect-square object-cover rounded-full shadow-lg m-2 p-1 filter grayscale"
              src="/assets/thumbnails/propic.jpg"
              alt="propic"
            />
            <h1 className="text-center text-black font-serif text-3xl tracking-wide mb-4">
              About Me
            </h1>
            <p className="font-serif tracking-wide text-justify">
              Hello, I'm
              <span className="font-semibold italic"> Jenna</span>, a
              professional photographer passionate about capturing life's
              moments. With a keen eye for detail and a love for creative
              expression, I specialize in turning ordinary scenes into
              extraordinary memories. Let's create timeless images together.
            </p>
            <button
              data-page="Contact"
              onClick={props.pageDisplay}
              className="p-2 my-4 lg:w-full w-1/2 active:bg-slate-950 shadow-md cursor-pointer bg-slate-800 text-white rounded-lg"
            >
              Let's get in touch!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
