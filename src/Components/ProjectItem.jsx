const ProjectItem = (props) => {
  return (
    <div
      style={{
        background: `center / cover no-repeat url(${props.img})`,
      }}
      className=" group grow m-0.5 w-96 h-96"
    >
      <div className="invisible group-hover:bg-black/20 cursor-pointer group-hover:backdrop-blur-[4px] group-hover:visible h-full flex justify-center items-center  w-full">
        <h2 className="text-white text-center">{props.category}</h2>
      </div>
    </div>
  );
};

export default ProjectItem;
