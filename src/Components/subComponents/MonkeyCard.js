import React from "react";
import ImageViewer from "./ImageViewer";

const MonkeyCard = (props) => {
  const { name, imageUrl } = props.data;
  const index = props.index;

  return (
    <div className="relative">
      <ImageViewer
        src={imageUrl}
        className={`text-white  p-0 h-fit w-fit  ${
          index === 1 || index === 4 || index === 7
            ? "mt-10 left-0 absolute"
            : "mt-0"
        }`}
      />
    </div>
  );
};

export default MonkeyCard;
