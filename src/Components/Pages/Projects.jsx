import ProjectItem from "../ProjectItem";
const Projects = (props) => {
  const projList = [
    {
      category: "Wedding",
      img: "./assets/thumbnails/wedding.jpg",
    },
    {
      category: "Street",
      img: "./assets/thumbnails/street.jpg",
    },
    {
      category: "Sport",
      img: "./assets/thumbnails/sport.jpg",
    },
    {
      category: "Portraits",
      img: "./assets/thumbnails/portrait.jpg",
    },
    {
      category: "Portraits",
      img: "./assets/thumbnails/portrait-2.jpg",
    },
  ];

  const galleryItems = projList.map((item, i) => (
    <ProjectItem category={item.category} img={item.img} key={i} />
  ));

  const display = props.display;

  return (
    <>
      {display == "Projects" && (
        <div>
          <h1 className="text-center text-black font-serif text-3xl tracking-wide mb-4">
            My Projects
          </h1>
          <div className=" my-4 flex flex-wrap justify-evenly items-center w-full max-w-screen m-0 p-0 ">
            {galleryItems}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
