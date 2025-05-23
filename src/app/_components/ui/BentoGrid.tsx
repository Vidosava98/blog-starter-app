"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import LottieAnimation from "./LottieAnimation";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto my-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id: number;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("arsic.vida@gmail.com");
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "relative group/bento shadow-input flex flex-col justify-between rounded-xl border border-neutral-200 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none overflow-hidden mx-4",
        className
      )}
      style={{
        background: "#020024",
        backgroundColor:
          "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(59, 59, 68, 1) 26%, rgba(93, 108, 111, 1) 100%)",
      }}
    >
      <div
        className={`${id === 1} && 'relative flex justify-center items-center'`}
      >
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "object-cover object-center -full h-fullw"
              )}
            />
          )}
        </div>

        <div className={`absolute`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover, object-center w-full h-full opacity-50"}
            />
          )}
        </div>
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-bold text-lg text-white md:text-xs lg:text-base z-20">
            {description}
          </div>
          <div className="mt-2 mb-2 font-sans font-bold text-white dark:text-neutral-200 text-lg lg:text-3xl max-w-96 z-20">
            {title}
          </div>
          {id === 5 && (
            <div>
              <div className={`absolute -bottom-5 right-0 `}>
                <LottieAnimation copied={copied} />
              </div>
              <MagicButton
                title={copied ? "Email copied!" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
          {id === 2 && (
            <a href="/Vidosava Arsic CV.pdf" className="m-auto">
              <MagicButton title="OPEN RESUME" otherClasses="!bg-[#161a31]" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
