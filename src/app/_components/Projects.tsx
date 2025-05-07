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
        className="flex flex-wrap items-center p-4 md:gap-16 sm:gap-1 lg:gap-24 mt-10 justify-center"
      >
        {projects.map(({ title, id, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[15rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex flex-col sm:w-96 w-[80vw] overflow-hidden text-white bg-black-100 border-none border-2 border-opacity-0  lg:h-[45vh] lg:w-[45vh] p-8">
                <h1 className="flex flex-wrapfont-bold lg:text-2xl md:text-xl text-base line-clamp-1 mb-8 items-center justify-center">
                  {title}
                </h1>
                <p className="lg:text-xl md:text-l text-base line-clamp-2 flex flex-col flex-wrap text-left">
                  {des}
                </p>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
