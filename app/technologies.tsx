"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
  SiMongodb,
  SiAmazonaws,
  SiWordpress,
  SiGo,
  SiDjango,
  SiGit,
  SiFirebase,
  SiLinux,
  SiMarkdown,
  SiJavascript,
  SiSvelte,
  SiVim,
  SiReact,
  SiPython,
  SiPrisma,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiTailwindcss,
  SiCplusplus,
  SiFlutter,
  SiPostgresql,
} from "react-icons/si";
import { type IconType } from "react-icons";

const DoubleScrollingLogos = (): React.JSX.Element => {
  return (
    <section className="py-4 overflow-hidden">
      <div className="flex">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="flex mt-4">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}): React.JSX.Element => {
  return (
    <motion.div
      initial={{ translateX: reverse ?? false ? "-100%" : "0%" }}
      animate={{ translateX: reverse ?? false ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }: { Icon: IconType }): React.JSX.Element => {
  const { theme } = useTheme();
  return (
    <a
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center text-white transition-colors"
      style={{ color: theme === "light" ? "black" : "white" }} // Change the color based on the theme
    >
      <span className="absolute w-16 md:w-24 h-16 md:h-24 flex justify-center items-center rounded-full blur-3xl opacity-90 hover:bg-violet-500 text-white transition-colors" />
      <Icon className="text-4xl md:text-5xl" />
    </a>
  );
};

const LogoItemsTop = (): React.JSX.Element => (
  <>
    <LogoItem Icon={SiFirebase} />
    <LogoItem Icon={SiWordpress} />
    <LogoItem Icon={SiDjango} />
    <LogoItem Icon={SiGit} />
    <LogoItem Icon={SiGo} />
    <LogoItem Icon={SiJavascript} />
    <LogoItem Icon={SiLinux} />
    <LogoItem Icon={SiMarkdown} />
    <LogoItem Icon={SiNodedotjs} />
    <LogoItem Icon={SiPython} />
    <LogoItem Icon={SiMongodb} />
  </>
);

const LogoItemsBottom = (): React.JSX.Element => (
  <>
    <LogoItem Icon={SiPostgresql} />
    <LogoItem Icon={SiReact} />
    <LogoItem Icon={SiVim} />
    <LogoItem Icon={SiExpress} />
    <LogoItem Icon={SiAmazonaws} />
    <LogoItem Icon={SiTailwindcss} />
    <LogoItem Icon={SiCplusplus} />
    <LogoItem Icon={SiFlutter} />
    <LogoItem Icon={SiDocker} />
    <LogoItem Icon={SiPrisma} />
    <LogoItem Icon={SiSvelte} />
  </>
);

export default DoubleScrollingLogos;
