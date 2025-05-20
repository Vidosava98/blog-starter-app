import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { FloatingNav } from "../_components/ui/FloatingNav";
export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main className="relative bg-black-100 flex justify-end items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 text-white">
      <div className="max-w-7xl w-full">
        <Container>
          <FloatingNav
            navItems={[
              { name: "Portfolio", link: "/" },
              { name: "Author", link: "#authorId" },
              { name: "Stories", link: "#storiesId" },
            ]}
          />
          <Intro />
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </div>
    </main>
  );
}
