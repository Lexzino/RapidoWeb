import React from "react";
import { Link } from "react-router-dom";

const DownloadButton = ({
  imageSrc,
  primaryText,
  secondaryText,
  link,
  altText,
}) => {
  const ButtonContent = () => (
    <button className="w-fit h-auto border border-green rounded-[10px] cursor-pointer px-[9px] pt-[7px]">
      <ul className="inline-flex items-center space-x-2">
        <li>
          <img src={imageSrc} className="w-[30px] h-[26px]" alt={altText} />
        </li>
        <li className="">
          <div className="f-f-r text-[10px] text-white text-start -mb-2 -pb-2">
            {primaryText}
          </div>
          <span className="f-f-m text-[20px] text-white">{secondaryText}</span>
        </li>
      </ul>
    </button>
  );

  return link ? (
    <Link to={link}>
      <ButtonContent />
    </Link>
  ) : (
    <ButtonContent />
  );
};

export default DownloadButton;
