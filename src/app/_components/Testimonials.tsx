"use client";
import React from "react";
import TitleParagraf from "./titleParagraf";
import { testimonials } from "../data";
import { cn } from "@/lib/utils";
function Testimonials() {
  const pictures = ["./profile.svg", "Kaca.png"];
  return (
    <div className="pb-20 mt-28 " id="testimonials">
      <TitleParagraf title="Testimonials" />
      <div className="flex flex-col items-center max-lg:mt-10 text-left pl-12">
        <div
          className={cn(
            "flex relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
          )}
        >
          <ul
            className={cn(
              " flex  flex-col min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap"
            )}
          >
            {testimonials.map((item, idx) => (
              <li
                className="w-[90vw] max-w-full relative rounded-2xl border border-b-0
                     flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                }}
                key={idx}
              >
                <blockquote>
                  <div
                    aria-hidden="true"
                    className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                  ></div>
                  <span className=" relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                    {item.quote}
                  </span>
                  <div className="relative z-20 mt-6 flex flex-row items-center">
                    <div className="me-3 w-16 h-16">
                      <img
                        src={pictures[idx]}
                        alt="profile"
                        className="rounded-full"
                      />
                    </div>
                    <span className="flex flex-col gap-1">
                      <span className="text-xl font-bold leading-[1.6] text-white">
                        {item.name}
                      </span>
                      <span className=" text-sm leading-[1.6] text-white-200 font-normal">
                        {item.title}
                      </span>
                    </span>
                  </div>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
