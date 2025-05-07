import React from "react";
import TitleParagraf from "./titleParagraf";
import { projects } from "@/app/data/index";
import { PinContainer } from "./ui/3d-pin";
const Projects = () => {
  return (
    <div className="py-20">
      <TitleParagraf title="Projects" />
      <div
        id="projectsId"
        className="flex flex-wrap items-center p-4 md:gap-16 sm:gap-1 mt-10"
      >
        {projects.map(({ title, id, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[30.5rem] h-[15rem] flex items-center justify-center sm:w-96 w-[80vw] border-solid"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[90vw] overflow-hidden h-[20vw]">
                {title}
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
