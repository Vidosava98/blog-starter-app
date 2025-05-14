"use client";
import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center">
          <h3 className="text-3xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 text-black-100">
            Built with React and Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <footer
              id="footerId"
              className="mt-auto flex flex-col justify-center text-center"
            >
              <div className="flex flex-row justify-center mt-4">
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
            </footer>
          </div>
        </div>
        <p className="font-bold text-center text-black-100 pb-4">
          @2025, Vidosava Arsic.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
