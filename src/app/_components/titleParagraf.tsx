import React from "react";
type Props = {
  title: string;
};
const TitleParagraf = ({ title }: Props) => {
  return (
    <div className="lg:text-4xl md:text-4xl text-3xl max-w-[60%] md:mb-[3rem] sm:mb-[1rem] lg:mb-[5rem] text-center mx-auto font-bold text-white">
      {title}
    </div>
  );
};

export default TitleParagraf;
