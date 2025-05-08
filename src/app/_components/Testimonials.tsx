import React from "react";
import TitleParagraf from "./titleParagraf";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "../data";
function Testimonials() {
  return (
    <div className="pb-20" id="testimonials">
      <TitleParagraf title="Testimonials" />
      <div className="flex flex-col items-center max-lg:mt-10 text-left">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default Testimonials;
