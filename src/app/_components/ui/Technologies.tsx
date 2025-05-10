"use client";
import React from "react";
import TitleParagraf from "../titleParagraf";
import { useEffect, useState } from "react";
function Technologies() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    console.log("Effect");
    showIcons(activeIndex);

    function showIcons(columnIndex: number) {
      let visibleRow: Element | null | undefined = null;
      const parentDiv = document.getElementById("techcontent");
      if (parentDiv) {
        visibleRow = Array.from(parentDiv.children).find((child) => {
          if (!child?.classList.contains("hidden")) {
            console.log(child);
            return child;
          }
        });
      }
      visibleRow?.classList.add("hidden");
      const newVisibleRow = parentDiv?.children[activeIndex];
      newVisibleRow?.classList.remove("hidden");
      //visibleRow = newVisibleRow;

      let activeButton: Element | null | undefined = null;
      const parent = document.getElementById("techButtonsId");
      if (parent) {
        activeButton = Array.from(parent.children).find((child) => {
          if (child.classList.contains("font-bold")) {
            return child;
          }
        });
      }
      activeButton?.classList.remove("font-bold");
      activeButton?.classList.remove("underline");
      const newactiveButton = parent?.children[activeIndex];
      newactiveButton?.classList.add("font-bold");
      newactiveButton?.classList.add("underline");
      //activeButton = newactiveButton;
    }
  }, [activeIndex]);

  return (
    <div id="techId" className="flex flex-col text-center justify-center">
      <TitleParagraf title="Technologies" />
      <section className="flex flex-col gap-4 justify-center text-center w-96  lg:w-1/2 mx-auto">
        <div id="techButtonsId" className="flex flex-wrap">
          <button
            onClick={() => setActiveIndex(0)}
            className=" text-emerald-100 font-bold underline bg-black-100 border-none text-lg p-4 cursor-pointer"
          >
            Languages
          </button>
          <button
            onClick={() => setActiveIndex(1)}
            className=" text-white bg-black-100 border-none text-lg p-4 cursor-pointer"
          >
            BackEnd
          </button>
          <button
            onClick={() => setActiveIndex(2)}
            className=" text-white bg-black-100 border-none text-lg p-4 cursor-pointer"
          >
            FrontEnd
          </button>
          <button
            onClick={() => setActiveIndex(3)}
            className=" text-white bg-black-100 border-none text-lg p-4 cursor-pointer"
          >
            Databases
          </button>
          <button
            onClick={() => setActiveIndex(4)}
            className=" text-white bg-black-100 border-none text-lg p-4 cursor-pointer"
          >
            Other
          </button>
        </div>
        <div id="techcontent" className="flex flex-wrap">
          <div className="flex flex-row flex-wrap gap-4 bg-opacity-100 relative transition-transform duration-300 ease-in-out justify-center">
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/csharp.svg"
                alt="C#"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">C#</p>
            </div>
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/C.svg"
                alt="C"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">C</p>
            </div>
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/java.svg"
                alt="java"
                className="border border-white/[0.2]  bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">Java</p>
            </div>
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/javascript.svg"
                alt="javascript"
                className="border border-white/[0.2]  bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">JavaScript</p>
            </div>
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/python.svg"
                alt="python"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">Python</p>
            </div>
          </div>
          <div className="flex hidden flex-row flex-wrap gap-4 bg-opacity-100 relative transition-transform duration-300 ease-in-out justify-center">
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/dotnet.svg"
                alt="dotnet"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">.NET</p>
            </div>
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/nodejs.svg"
                alt="nodejs"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">Node.js</p>
            </div>
          </div>
          <div className="flex hidden flex-row flex-wrap gap-4 bg-opacity-100 relative transition-transform duration-300 ease-in-out justify-center">
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/react.svg"
                alt="react"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">React</p>
            </div>
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/html.svg"
                alt="html"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">HTML</p>
            </div>
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/css3.svg"
                alt="css"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">CSS</p>
            </div>
          </div>
          <div className="flex hidden flex-row flex-wrap gap-4 bg-opacity-100 relative transition-transform duration-300 ease-in-out justify-center">
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/sql.svg"
                alt="sql"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">SQL</p>
            </div>
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/mongodb.svg"
                alt="mongodb"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">MongoDB</p>
            </div>
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/tidb.svg"
                alt="tidb"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">TiDB</p>
            </div>
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/cassandra.svg"
                alt="cassandra"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">Cassandra</p>
            </div>
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/neo4j.svg"
                alt="neo4j"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">Neo4j</p>
            </div>
          </div>
          <div className="flex hidden flex-row flex-wrap gap-4 bg-opacity-100 relative transition-transform duration-300 ease-in-out justify-center">
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/docker.svg"
                alt="docker"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">Docker</p>
            </div>
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/swagger.svg"
                alt="swagger"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">Swagger</p>
            </div>
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/github.svg"
                alt="github"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">GitHub</p>
            </div>
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/bitbucket.svg"
                alt="bitbucket"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">Bitbucket</p>
            </div>
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/mosquitto.svg"
                alt="mosquitto"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">Mosquitto</p>
            </div>
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/Kafka.svg"
                alt="kafka"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">Kafka</p>
            </div>
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/flink.svg"
                alt="Flink"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">Flink</p>
            </div>
            <div className="flex flex-row text-center justify-center gap-2 border-slate-200 p-4 rounded-2xl ">
              <img
                src="Resource/Images/Icons/Table/figma.svg"
                alt="Figma"
                className="border border-white/[0.2] bg-white-200 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center overflow-hidden"
              />
              <p className="mt-2.5">Figma</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technologies;
