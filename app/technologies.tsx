'use client';

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
  SiNike,
  Si3M,
  SiAbstract,
  SiAdobe,
  SiAirtable,
  SiAmazon,
  SiBox,
  SiBytedance,
  SiChase,
  SiCloudbees,
  SiBurton,
  SiBmw,
  SiHeroku,
  SiBuildkite,
  SiCouchbase,
  SiDailymotion,
  SiDeliveroo,
  SiEpicgames,
  SiGenius,
  SiGodaddy,
} from "react-icons/si";
import {
    DiBootstrap,
    DiCss3,
    DiDjango,
    DiGit,
    DiHtml5,
    DiJavascript1,
    DiLinux,
    DiMarkdown,
    DiNodejsSmall,
    DiPython,
    DiPostgresql,
    DiReact,
    DiVim,
    DiDocker
} from 'react-icons/di'

import { IconType } from "react-icons";



const DoubleScrollingLogos = () => {
  return (
    <section className="py-4">
      <div className="flex  overflow-hidden">
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
      <div className="flex overflow-hidden mt-4">
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
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }: { Icon: IconType }) => {
    const { theme } = useTheme();
  return (
    <a
      rel="nofollow"
      target="_blank"
          className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-200 text-white transition-colors"
          style={{ color: theme === "dark" ? "white" : "black" }} // Change the color based on the theme
    >
      <Icon className="text-4xl md:text-5xl" />
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={DiBootstrap} />
    <LogoItem Icon={DiCss3} />
    <LogoItem Icon={DiDjango} />
    <LogoItem Icon={DiGit} />
    <LogoItem Icon={DiHtml5} />
    <LogoItem Icon={DiJavascript1} />
    <LogoItem Icon={DiLinux} />
    <LogoItem Icon={DiMarkdown} />
    <LogoItem Icon={DiNodejsSmall} />
    <LogoItem Icon={DiPython} />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={DiPostgresql} />
    <LogoItem Icon={DiReact} />
    <LogoItem Icon={DiVim} />
    <LogoItem Icon={DiDocker} />
    
    <LogoItem Icon={SiDeliveroo} />
    <LogoItem Icon={SiEpicgames} />
    <LogoItem Icon={SiGenius} />
    <LogoItem Icon={SiGodaddy} />
    <LogoItem Icon={SiHeroku} />
  </>
);

export default DoubleScrollingLogos;