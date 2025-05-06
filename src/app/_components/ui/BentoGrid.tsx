import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
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
  return (
    <div
      className={cn(
        "relative group/bento shadow-input row-span-1 flex flex-col justify-between space-y-8 rounded-xl border border-neutral-200 bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none overflow-hidden",
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
                "object-cover object-center w-full h-full"
              )}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5
          } &&  'w-full opacity-80'`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover, object-center w-full h-full"}
            />
          )}
        </div>
        {id === 10 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-sm  text-[#c1c2d3] md:text-xs lg:text-base z-20">
            {description}
          </div>
          <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200 text-lg lg:text-3xl max-w-96 z-20">
            {title}
          </div>
        </div>
        {id == 2 && <GlobeDemo />}
      </div>
    </div>
  );
};
