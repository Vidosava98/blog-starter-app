import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { FloatingNav } from "./ui/FloatingNav";
import Grid from "./grid";
import TitleParagraf from "./titleParagraf";
import Profile from "./profile";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Technologies from "./ui/Technologies";
export function Hero() {
  return (
    <div className="relative z-10">
      <FloatingNav
        navItems={[
          { name: "About Me", link: "#aboutMeId" },
          { name: "Technologies", link: "#techId" },
          { name: "Projects", link: "#projectsId" },
          { name: "Testimonials", link: "#testimonials" },
          { name: "Contact", link: "#footerId" },
          { name: "Resume", link: "Resource/Vidosava Arsic CV.pdf" },
        ]}
      />
      <div id="content-1" className="flex justify-center text-center">
        <div id="aboutMeId">
          <div>
            <Profile src="Resource/Images/vida.jpg" alt="Vidosava Arsic" />
            <TextGenerateEffect
              className="lg:text-6xl md:text-5xl text-4xl"
              words="Hey there, I'm Vida!"
            />
            <TextGenerateEffect
              className="flex md:tracking-wider mb-6 lg:text-4xl md:text-3xl text-3xl w-96 lg:w-fit md:w-fit mx-auto px-4"
              words=" I'm self-driven full stack developer with strong database
              knowledge and a fast-learning mindset — ready to grow with modern
              tech stacks."
            />
            <a href="#projectsId">
              <MagicButton title={"Show my work"} icon={<FaLocationArrow />} />
            </a>
          </div>
          <Grid />
          <Technologies />
          <Projects />
          <Testimonials />
        </div>
      </div>
    </div>
  );
}
