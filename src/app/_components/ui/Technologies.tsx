"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import TitleParagraf from "../titleParagraf";
import Icon from "./Icon";
import { techGroups } from "@/app/data/index";
const Technologies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = useCallback((el: HTMLDivElement | null, index: number) => {
    if (el) {
      contentRefs.current[index] = el;
    }
  }, []);

  useEffect(() => {
    // Sakrij sve prethodne elemente
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (index === activeIndex) {
          ref.classList.remove("hidden");
        } else {
          ref.classList.add("hidden");
        }
      }
    });
  }, [activeIndex]);
  return (
    <div
      id="techId"
      className="flex flex-col items-center justify-center mt-20 w-96 lg:w-full mx-auto"
    >
      <TitleParagraf title="Technologies" />
      <section className="flex flex-col justify-center text-center mt-5 gap-16  items-center">
        <div
          id="techButtonsId"
          className="flex flex-wrap w-96 lg:w-full justify-center"
        >
          {["Languages", "BackEnd", "FrontEnd", "Databases", "Other"].map(
            (label, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`${
                  activeIndex === index ? "font-bold underline" : ""
                } text-white border-none text-lg px-4 cursor-pointer hover:font-bold`}
              >
                {label}
              </button>
            )
          )}
        </div>
        <div id="techcontent" className="flex flex-wrap lg:px-36 ">
          {techGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              ref={(el) => setRef(el, groupIndex)} // Koristimo callback ref
              className={`flex flex-row flex-wrap gap-4 bg-opacity-100 relative transition-transform duration-300 ease-in-out justify-center ${
                groupIndex !== activeIndex ? "hidden" : ""
              }`}
            >
              {group.map((tech, techIndex) => (
                <Icon
                  key={techIndex}
                  name={tech.name}
                  styleIcon="flex flex-col text-center justify-center items-center gap-2 border-slate-200 p-4 rounded-2xl "
                  iconImgSrc={tech.imgSrc}
                  styleIconImg="border border-white/[0.2] bg-white rounded-full lg:w-12 lg:h-12 w-10 h-10 flex overflow-hidden"
                  paragraf={true}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Technologies;
