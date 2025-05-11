"use client";
import React from "react";
import TitleParagraf from "./titleParagraf";
import { projects } from "@/app/data/index";
import { PinContainer } from "./ui/3d-pin";
const Projects = () => {
  return (
    <div className="pt-20">
      <TitleParagraf title="Projects" />
      <div
        id="projectsId"
        className="flex flex-wrap items-center p-4 md:gap-x-16 lg:gap-x-32 md:gap-y-16 lg:gap-y-24 gap-4 mt-10 justify-center"
      >
        {projects.map(({ title, id, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[15rem] h-[24rem] flex items-center justify-center sm:w-96 w-[80vw] mb-32"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex flex-col sm:w-96 w-[80vw] overflow-hidden text-white bg-black-100 border-none border-2 border-opacity-0  lg:h-[50vh] lg:w-[45vh] p-8">
                <h1 className="flex flex-wrapfont-bold lg:text-3xl md:text-2xl text-base line-clamp-1 mb-8 items-center justify-center">
                  {title}
                </h1>
                <p className="lg:text-xl md:text-l text-base line-clamp-2 flex flex-col flex-wrap text-left">
                  {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
                        // style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <img src={icon} alt={icon} className="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
