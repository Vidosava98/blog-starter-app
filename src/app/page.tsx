import Container from "@/app/_components/container";
import { Hero } from "@/app/_components/hero";
import { getAllPosts } from "@/lib/api";
import { Spotlight } from "./_components/ui/Spotlight";
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
          <Hero />
        </Container>
      </div>
    </main>
  );
}
