function FullscreenImageModal(props) {
  const open = props.open;
  if (open) {
    return (
      <div className="fixed flex justify-center items-center top-0 bottom-0 left-0 right-0 p-1 w-full h-full bg-black/60">
        <img
          className="w-full h-full object-contain p-4 rounded backdrop-blur-md"
          src={props.img}
        />
      </div>
    );
  } else return null;
}

export default FullscreenImageModal;
