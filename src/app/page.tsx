import Container from "@/app/_components/container";
import { Hero } from "@/app/_components/hero";
import { getAllPosts } from "@/lib/api";
import { Spotlight } from "./_components/ui/Spotlight";
import cn from "classnames";
export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main className="relative bg-black-100 flex justify-end items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Container>
          <Spotlight
            className="-top-20 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vh]"
            fill="purple"
          />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
          <div className="grid place-items-center overflow-hidden sm:px-10 px-5 h-full w-full items-center justify-center bg-white/[0.03] dark:bg-black-100 absolute z-0 top-0 left-0 bg-black-100 grid-cols-1 md:grid-cols-2 gap-8 min-h-screen mx-auto">
            <div
              className={cn(
                "absolute inset-0",
                "[background-size:100px_100px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
              )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
          </div>
          <Hero />
        </Container>
      </div>
    </main>
  );
}
