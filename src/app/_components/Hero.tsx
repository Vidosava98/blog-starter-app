"use client";
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
          { name: "Contact", link: "#footerId" },
          { name: "Testimonials", link: "#testimonials" },
          { name: "Resume", link: "Resource/Vidosava Arsic CV.pdf" },
        ]}
      />
      <div id="content-1" className="flex justify-center text-center">
        <div id="aboutMeId">
          <div>
            <Profile src="Resource/Images/vida.jpg" alt="Vidosava Arsic" />
            <TextGenerateEffect
              className="lg:text-6xl md:text-5xl sm:text-4xl"
              words="Hey there, I'm Vida!"
            />
            <TextGenerateEffect
              className="md:tracking-wider mb-6 lg:text-4xl md:text-3xl sm:text-3xl"
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
      <footer
        id="footerId"
        className="mt-auto flex flex-col justify-center text-center"
      >
        <div className="flex flex-row justify-center m-8">
          <a href="mailto:arsic.vida@gmail.com">
            <img
              src="/gmail.svg"
              alt="gmail"
              className="h-[3.81rem] w:[3.81rem] m-4"
            />
          </a>
          <a href="https://www.linkedin.com/in/vidosava-arsić-7019b9228">
            <img
              src="/linkedin.svg"
              alt="linkedin"
              className="h-[3.81rem] w:[3.81rem] m-4"
            />
          </a>
          <a href="https://github.com/Vidosava98">
            <img
              src="/github.svg"
              alt="Git"
              className="h-[3.81rem] w:[3.81rem] m-4"
            />
          </a>
          <a href="https://www.instagram.com/arsic.vida98/">
            <img
              src="/instagram.svg"
              alt="Instagram"
              className="h-[3.81rem] w:[3.81rem]  m-4"
            />
          </a>
        </div>
        <p className="mb-8">@2025, Vidosava Arsic.</p>
      </footer>
    </div>
  );
}
