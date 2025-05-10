"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";

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

  const techGroups = [
    [
      { name: "C#", imgSrc: "Resource/Images/Icons/Table/csharp.svg" },
      { name: "C", imgSrc: "Resource/Images/Icons/Table/C.svg" },
      { name: "Java", imgSrc: "Resource/Images/Icons/Table/java.svg" },
      {
        name: "JavaScript",
        imgSrc: "Resource/Images/Icons/Table/javascript.svg",
      },
      { name: "Python", imgSrc: "Resource/Images/Icons/Table/python.svg" },
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
    <div id="techId" className="flex flex-col text-center justify-center">
      <h2>Technologies</h2>
      <section className="flex flex-col gap-4 justify-center text-center w-96 lg:w-1/2 mx-auto">
        <div id="techButtonsId" className="flex flex-wrap">
          {["Languages", "BackEnd", "FrontEnd", "Databases", "Other"].map(
            (label, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`${
                  activeIndex === index ? "font-bold underline" : ""
                } text-white bg-black-100 border-none text-lg p-4 cursor-pointer`}
              >
                {label}
              </button>
            )
          )}
        </div>
        <div id="techcontent" className="flex flex-wrap">
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
                  className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl"
                >
                  <img
                    src={tech.imgSrc}
                    alt={tech.name}
                    className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
                  />
                  <p className="mt-2.5">{tech.name}</p>
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
