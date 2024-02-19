import { Link } from "@nextui-org/link";
import Image from "next/image";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "../config/site";
import { title, subtitle } from "../components/primitives";
import { GithubIcon } from "../components/icons";
import CardCarousel from "./projects";
import DoubleScrollingLogos from "./technologies";
import Resume from "./resume";
// import { TabsFAQ } from "./faq";
// import { BouncyCardsFeatures } from "./contact";
import FooterBar from "./footer";
// import AccordionSolutions from "./about";
import React from "react";

export default function Home(): React.JSX.Element {
  return (
    <div>
      <Hero />
      <DoubleScrollingLogos />

      <CardCarousel />
      <Resume />
      <FooterBar />
    </div>
  );
}

function Hero(): React.JSX.Element {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 overflow-hidden">
      <div className="overflow-hidden">
        <div className="w-full overflow-hidden">
          <span className="absolute -top-[250px] left-[50%] z-0 h-[500px] w-[600px] max-w-[100vw] -translate-x-[50%] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl" />
          <span className="absolute -top-[250px] left-[50%] z-0 h-[500px] w-[600px] max-w-[100vw] -translate-x-[50%] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl" />
        </div>
      </div>
      <div className="inline-block max-w-lg text-center justify-center">
        <div className=" flex items-center justify-center">
          <Image
            className="mb-4 z-10"
            height={150}
            width={150}
            alt="NextUI hero Image"
            src="/memoji-coding.png"
          />
        </div>

        <h1 className={title()}>I&apos;m a&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Software Engineer&nbsp;</h1>
        <br />
        <h1 className={title()}>available for internships.</h1>

        <h2 className={subtitle({ class: "mt-4" })}>
          Crafting Beautiful, Fast, and Modern Applications.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Contact Me
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="https://github.com/Calesi19"
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
}
