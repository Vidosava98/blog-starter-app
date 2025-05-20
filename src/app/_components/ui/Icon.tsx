import React from "react";
type IconProps = {
  name: string;
  styleIcon: string;
  iconImgSrc: string;
  styleIconImg: string;
  paragraf: boolean;
};

function Icon({
  name,
  styleIcon,
  iconImgSrc,
  styleIconImg,
  paragraf,
}: IconProps) {
  return (
    <div className={styleIcon}>
      <img src={iconImgSrc} alt={name} className={styleIconImg} />
      {paragraf && <p className="mt-2.5 font-bold">{name}</p>}
    </div>
  );
}

export default Icon;
