import { useState } from "react";
import FullscreenImageModal from "./FullscreenImageModal";

function ProjectItem(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setmodalImg] = useState(false);

  function enlargePicture(ev) {
    let bg = ev.target.parentNode.style.backgroundImage;
    let pattern = /url|[()]/g;
    let pureString = bg.replace(pattern, "");
    let noMarks = pureString.replaceAll(`"`, "");
    let cleaned = noMarks.replace(`thumbnails`, "pictures-lg");
    let largeImageUrl = cleaned.replace(`jpg`, "jpeg");

    console.log(largeImageUrl);

    setModalOpen(!modalOpen);
    setmodalImg(largeImageUrl);
  }

  return (
    <div
      onClick={enlargePicture}
      style={{
        background: `center / cover no-repeat url(${props.img})`,
      }}
      className=" group grow m-0.5 w-96 h-96"
    >
      <div className="invisible group-hover:bg-black/20 cursor-pointer group-hover:backdrop-blur-[4px] group-hover:visible h-full flex justify-center items-center  w-full">
        <h2 className="text-white text-center">{props.category}</h2>
      </div>
      <FullscreenImageModal open={modalOpen} img={modalImg} />
    </div>
  );
}

export default ProjectItem;
