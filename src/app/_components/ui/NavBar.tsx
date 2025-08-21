"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { JSX } from "react/jsx-runtime";

export const NavBar = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
}) => {

  return (
   <div className="flex flex-row justify-center sticky top-0 z-50 bg-black-200 flex-wrap font-bold">
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex hover:text-[#88ade7] m-2 lg:m-4"
            )}
          >
            <span className=" text-xl lg:text-xl !cursor-pointer">
              {navItem.name}
            </span>
          </a>
        ))}
   </div>
  );
};
