import { useState } from "react";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      url: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  function handleClick(ev) {
    console.log(ev.target.dataset);
    ev.target.dataset.val == "Next"
      ? currentIndex < slides.length - 1 && setCurrentIndex(currentIndex + 1)
      : ev.target.dataset.val == "Prev" &&
        currentIndex > 0 &&
        setCurrentIndex(currentIndex - 1);
  }

  return (
    <div className=" h-full w-full flex flex-col items-center group justify-center">
      <h1 className=" text-black font-serif text-3xl tracking-wide mb-4">
        Latest
      </h1>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="shadow-2xl bg-no-repeat max-w-[900px] bg-center w-full h-[500px] text-center bg-red-100 rounded-2xl mb-5 box-border"
      ></div>
      <div
        data-val="Prev"
        onClick={handleClick}
        className="hidden group-hover:block active:text-yellow-400 p-4 m-2 text-sm bg-black/20 cursor-pointer hover:bg-black/50 rounded-full text-white absolute top-[50%] left-5 translate-x-0 "
      >
        <h3 className="fa-solid fa-caret-left text-xl" data-val="Prev"></h3>
      </div>
      <div
        data-val="Next"
        onClick={handleClick}
        className="hidden group-hover:block active:text-yellow-400 p-4 m-2 text-sm bg-black/20 cursor-pointer hover:bg-black/50 rounded-full text-white absolute top-[50%] right-5 translate-x-0 "
      >
        <h3 className="fa-solid fa-caret-right text-xl" data-val="Next"></h3>
      </div>
    </div>
  );
}

export default ImageSlider;
