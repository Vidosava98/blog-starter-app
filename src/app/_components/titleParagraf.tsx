import React from "react";
type Props = {
  title: string;
};
const TitleParagraf = ({ title }: Props) => {
  return (
    <div className="text-[1.9rem] font-medium max-w-[60%] mb-[3rem] text-center mx-auto my-16">
      {title}
    </div>
  );
};

export default TitleParagraf;
