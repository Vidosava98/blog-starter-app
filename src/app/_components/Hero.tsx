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
export function Hero() {
  return (
    <div className="relative z-10">
      <FloatingNav
        navItems={[
          { name: "About Me", link: "#aboutMeId" },
          { name: "Technologies", link: "#techId" },
          { name: "Projects", link: "#projectsId" },
          { name: "Contact", link: "#footerId" },
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
          <Projects />
          <Testimonials />
        </div>
      </div>
      <footer id="footerId">
        <div>
          <a href="mailto:arsic.vida@gmail.com">
            <img src="Resource/Images/Icons/email.svg" alt="@" />
          </a>
          <a href="https://www.linkedin.com/in/vidosava-arsić-7019b9228">
            <img src="Resource/Images/Icons/in.svg" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Vidosava98">
            <img src="Resource/Images/Icons/github.svg" alt="Git" />
          </a>
          <a href="https://www.instagram.com/arsic.vida98/">
            <img src="Resource/Images/Icons/insta.svg" alt="Insta" />
          </a>
        </div>
        <p>@2025, Vidosava Arsic.</p>
      </footer>
    </div>
  );
}
