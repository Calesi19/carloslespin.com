"use client";

import React from "react";
import { type Dispatch, type SetStateAction, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const AccordionSolutions = (): React.JSX.Element => {
  const [open, setOpen] = useState(solutions[0].id);
  const imgSrc = solutions.find((s) => s.id === open)?.imgSrc;
  return (
    <section className="w-full my-20 lg:my-16">
      <BackgroundBlur />
      <div className="w-full container grid gap-8 grid-cols-1 lg:grid-cols-[1fr_350px] z-50">
        <div>
          <h3 className="text-4xl font-bold mb-8">About Me</h3>
          <div className="flex flex-col gap-4">
            {solutions.map((q) => {
              return (
                <Solution
                  {...q}
                  key={q.id}
                  open={open}
                  setOpen={setOpen}
                  index={q.id}
                />
              );
            })}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={imgSrc}
            className="bg-slate-300 rounded-2xl aspect-[4/3] lg:aspect-auto z-20"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

const Solution = ({
  title,
  description,
  index,
  open,
  setOpen,
}: {
  title: string;
  description: string;
  index: number;
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
}): React.JSX.Element => {
  const isOpen = index === open;

  return (
    <div
      onClick={() => {
        setOpen(index);
      }}
      className="p-0.5 rounded-lg relative cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "240px" : "72px",
        }}
        className="p-6 rounded-[7px] flex flex-col justify-between relative z-20"
      >
        <div>
          <motion.p
            initial={false}
            className="text-xl font-medium w-fit bg-clip-text"
          >
            {title}
          </motion.p>
          <motion.p
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            className="mt-4 bg-gradient-to-r bg-clip-text"
          >
            {description}
          </motion.p>
        </div>
        <motion.button
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
          }}
          className="-ml-6 -mr-6 -mb-6 mt-4 py-2 rounded-b-md flex items-center justify-center gap-1 group transition-[gap]"
        >
          {
            // If id is 1, show link to my resume. if id is 2, show a gif. If id is 3, show a gif.
            index === 1 ? (
              <a href="/resume" target="_blank">
                Resume
              </a>
            ) : index === 2 ? (
              <a href="/projects" target="_blank">
                See Projects
              </a>
            ) : index === 3 ? (
              <a className="hidden" href="/resume">
                Contact Me
              </a>
            ) : null
          }
          {index === 3 ? null : (
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          )}
        </motion.button>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute inset-0 z-10"
      />
      <div className="absolute inset-0 z-0 rounded-2xl box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 bg-white/5 backdrop-saturate-[1.8] shadow-medium transition-transform-background motion-reduce:transition-none border-transparent dark:bg-default-400/10 backdrop-blur-lg" />
    </div>
  );
};

function BackgroundBlur(): React.JSX.Element {
  const style = "opacity-50 blur-[90px] rounded-full";

  return (
    <div className="flex justify-center absolute w-full ">
      <div className="flex-row justify-center w-full flex">
        <span
          className={`bg-shape1 w-1/4 xl:w-[200px] h-[300px] bg-[#fafafa00] dark:bg-[#c0fdff] ${style}`}
        ></span>
        <span
          className={`bg-shape2 w-1/4 xl:w-[400px] h-[400px] bg-[#fafafa00] dark:bg-[#deaaff] ${style}`}
        ></span>
        <span
          className={`bg-shape3 w-1/5 xl:w-[340px] h-[350px] bg-[#fafafa00] dark:bg-[#b8c0ff] ${style}`}
        ></span>
      </div>
    </div>
  );
}

export default AccordionSolutions;

const solutions = [
  {
    id: 1,
    title: "⚡️ Carlos Lespin",
    description:
      "I'm a Software Engineer, born and raised in Puerto Rico. I have a bachelor's degree in Software Engineering and I'm aspiring to become a worthy professional in the field.",
    imgSrc: "/portrait.webp",
  },
  {
    id: 2,
    title: "💻 I Code Everyday.",
    description:
      "From front to back, I'm a big fan of programming. I've been coding for years and I love learning everything I can about it. I'm looking forward to new projects and challenges.",
    imgSrc:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXJqbHp4YnlreWYyYWJiam16ZDd5eGZyeGk4MXRzM2tiYzRheTZkMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JIX9t2j0ZTN9S/giphy.gif",
  },
  {
    id: 3,
    title: "👀  I want to join your team.",
    description:
      "I'm looking for a permanent position where I can take on some leadership, and help out the team. I'm all about contributing and not just being a bystander. I'm eager to find a role that challenges me and lets me keep learning and doing cool stuff.",
    imgSrc:
      "https://media1.giphy.com/media/VkMV9TldsPd28/giphy.gif?cid=ecf05e478ipd21u861g034loyqpc66eseytcl7lzjbk1wqrh&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  },
];
