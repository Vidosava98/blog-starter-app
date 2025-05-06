import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/app/data/index";
function grid() {
  return (
    <section>
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            spareImg,
            titleClassName,
            imgClassName,
          }) => (
            <BentoGridItem
              key={id}
              id={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
}

export default grid;
