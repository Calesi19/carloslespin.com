import { title } from "../components/primitives";
import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn, FaRegEnvelope } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";

export const FooterBar = (): React.JSX.Element => {
  return (
    <footer className=" w-full">
      <div className="flex h-0 w-full justify-center z-0 absolute bottom-[300px] lg:bottom-[200px] xl:bottom-[120px]">
        <div className="inset-0 flex-row justify-center flex w-full">
          <span className="dark:bg-shape4 w-1/6 lg:w-[150px] xl:w-[400px] h-[300px] lg:h-[200px] xl:h-[120px] bg-[#fafafa00] dark:bg-violet-900 blur-[120px] xl:blur-[160px] rounded-full"></span>
          <span className="dark:bg-shape5 w-1/6 lg:w-[50px]  xl:w-[400px] h-[300px] lg:h-[200px] xl:h-[120px] bg-[#fafafa00] dark:bg-violet-400 blur-[180px] xl:blur-[160px] rounded-full"></span>
          <span className="dark:bg-shape6 w-1/6 lg:w-[150px] xl:w-[300px] h-[300px] lg:h-[200px] xl:h-[120px] bg-[#fafafa00] dark:bg-purple-900 blur-[120px] xl:blur-[160px] rounded-full"></span>
        </div>
      </div>
      <div className="overflow-hidden rounded-t-2xl z-10 text-foreground box-border outline-none shadow-medium transition-transform-background motion-reduce:transition-none border-transparent dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
        <div className="container z-50 flex py-20 items-center justify-between flex-col gap-10 lg:flex-row lg:gap-0">
          <div>
            <h2 className={`text-5xl lg:text-6xl z-50 ${title()}`}>
              Let&apos;s chat.
              <br />{" "}
              <span className={`lg:text-6xl ${title({ color: "violet" })}`}>
                Connect
              </span>{" "}
              with me.
            </h2>
          </div>

          <div>
            <a className="md:hidden" href="tel:+17879889447">
              <button className="hover:scale-105 button-shadow1 active:text-white hover:text-[#56ff59] hover:border-[#56ff59] active:bg-[#56ff59] w-[300px] border-4 border-[#EAEAEA]  text-xl mt-4 py-3 px-10 rounded-full transition duration-300 active:duration-0  flex items-center gap-9">
                <AiOutlineMessage className="w-[32px] h-[32px]" />
                Text Me
              </button>
            </a>

            <a href="mailto:carlos.lespin.silva@gmail.com">
              <button className="hover:scale-105 button-shadow2 active:text-white hover:text-[#ffcc56] hover:border-[#ffcc56] active:bg-[#ffcc56] w-[300px] border-4 border-[#EAEAEA]  text-xl mt-4 py-3 px-10 rounded-full transition duration-300 active:duration-0  flex items-center gap-9">
                <FaRegEnvelope className="w-[32px] h-[32px]" />
                Email Me
              </button>
            </a>

            <a href="https://www.linkedin.com/in/calesi19/">
              <button className="hover:scale-105 button-shadow3 active:text-white hover:text-[#5f95eb] hover:border-[#5f95eb] active:bg-[#5f95eb] w-[300px] border-4 border-[#EAEAEA] text-xl mt-4 py-3 px-10 rounded-full transition duration-300 active:duration-0 flex items-center gap-9">
                <FaLinkedinIn className="w-[32px] h-[32px]" />
                Linkedin
              </button>
            </a>

            <a href="https://github.com/Calesi19">
              <button className="hover:scale-105 button-shadow4 active:text-white hover:text-[#a55feb] hover:border-[#a55feb] active:bg-[#a55feb] w-[300px] border-4 border-[#EAEAEA] text-xl mt-4 py-3 px-10 rounded-full transition duration-300 active:duration-0 flex items-center gap-9">
                <TbBrandGithubFilled className="w-[32px] h-[32px] light:text-default-300" />
                GitHub
              </button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
