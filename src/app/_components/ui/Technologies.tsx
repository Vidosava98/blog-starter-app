"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import TitleParagraf from "../titleParagraf";
const Technologies = () => {
  const [activeIndex, setActiveIndex] = useState(2);
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

  const techGroups = [
    [
      { name: "C#", imgSrc: "Resource/Images/Icons/Table/csharp.svg" },
      {
        name: "JavaScript",
        imgSrc: "Resource/Images/Icons/Table/javascript.svg",
      },
      { name: "Python", imgSrc: "Resource/Images/Icons/Table/python.svg" },
      { name: "C", imgSrc: "Resource/Images/Icons/Table/C.svg" },
      { name: "Java", imgSrc: "Resource/Images/Icons/Table/java.svg" },
    ],
    [
      { name: ".NET", imgSrc: "Resource/Images/Icons/Table/dotnet.svg" },
      { name: "Node.js", imgSrc: "Resource/Images/Icons/Table/nodejs.svg" },
    ],
    [
      { name: "React", imgSrc: "Resource/Images/Icons/Table/react.svg" },
      { name: "HTML", imgSrc: "Resource/Images/Icons/Table/html.svg" },
      { name: "CSS", imgSrc: "Resource/Images/Icons/Table/css3.svg" },
    ],
    [
      { name: "SQL", imgSrc: "Resource/Images/Icons/Table/sql.svg" },
      { name: "MongoDB", imgSrc: "Resource/Images/Icons/Table/mongodb.svg" },
      { name: "TiDB", imgSrc: "Resource/Images/Icons/Table/tidb.svg" },
      {
        name: "Cassandra",
        imgSrc: "Resource/Images/Icons/Table/cassandra.svg",
      },
      { name: "Neo4j", imgSrc: "Resource/Images/Icons/Table/neo4j.svg" },
    ],
    [
      { name: "Docker", imgSrc: "Resource/Images/Icons/Table/docker.svg" },
      { name: "Swagger", imgSrc: "Resource/Images/Icons/Table/swagger.svg" },
      { name: "GitHub", imgSrc: "Resource/Images/Icons/Table/github.svg" },
      {
        name: "Bitbucket",
        imgSrc: "Resource/Images/Icons/Table/bitbucket.svg",
      },
      {
        name: "Mosquitto",
        imgSrc: "Resource/Images/Icons/Table/mosquitto.svg",
      },
      { name: "Kafka", imgSrc: "Resource/Images/Icons/Table/Kafka.svg" },
      { name: "Flink", imgSrc: "Resource/Images/Icons/Table/flink.svg" },
      { name: "Figma", imgSrc: "Resource/Images/Icons/Table/figma.svg" },
    ],
  ];

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
                <div
                  key={techIndex}
                  className="flex flex-col text-center justify-center items-center gap-2 border-slate-200 p-4 rounded-2xl"
                >
                  <img
                    src={tech.imgSrc}
                    alt={tech.name}
                    className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex overflow-hidden"
                  />
                  <p className="mt-2.5 font-bold">{tech.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Technologies;
