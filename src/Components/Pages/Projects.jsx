import ProjectItem from "../ProjectItem";
const Projects = (props) => {
  const projList = [
    {
      category: "Wedding",
      img: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg",
    },
    {
      category: "Street",
      img: "https://images.pexels.com/photos/379419/pexels-photo-379419.jpeg",
    },
    {
      category: "Sport",
      img: "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg",
    },
    {
      category: "Portraits",
      img: "https://images.pexels.com/photos/4750165/pexels-photo-4750165.jpeg",
    },
    {
      category: "Portraits",
      img: "https://images.pexels.com/photos/4754648/pexels-photo-4754648.jpeg",
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
