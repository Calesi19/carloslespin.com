'use client';

import { Dispatch, SetStateAction, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const AccordionSolutions = () => {
  const [open, setOpen] = useState(solutions[0].id);
  const imgSrc = solutions.find((s) => s.id === open)?.imgSrc;
  return (
      <section className="overflow-x-hidden w-[100vw]">
          <div className='flex absolute w-[100vw] justify-center h-[500px]'>
                <div className='inset-0 flex-row justify-center flex w-[100vw]'>
                    <div className=' bg-shape1 w-[200px] h-[300px] bg-[#c0fdff] opacity-50 blur-[90px] rounded-full'>6jgh</div>
                    <div className=' bg-shape2 w-[100px] lg:w-[400px] h-[400px] bg-[#deaaff] opacity-50 blur-[90px] rounded-full'>sgfg</div>
                    <div className=' bg-shape3 w-[340px] h-[350px] bg-[#b8c0ff] opacity-50 blur-[90px] rounded-full'>sfgsg</div>
                </div>

            </div>
      <div className="w-full container max-w-5xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-[1fr_350px] z-50">
        <div>
          <h3 className="text-4xl font-bold mb-8">About Me</h3>
          <div className="flex flex-col gap-4">
            {solutions.map((q) => {
              return (
                <Solution {...q} key={q.id} open={open} setOpen={setOpen} index={q.id} />
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
            className="bg-slate-300 rounded-2xl aspect-[4/3] lg:aspect-auto z-50"
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
}) => {
  const isOpen = index === open;

  return (
    <div
      onClick={() => setOpen(index)}
      className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer"
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
            animate={{
              color: isOpen ? "white" : "white",
            }}
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
          <span>Learn more</span>
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute inset-0 z-10"
      />
      <div className="absolute inset-0 z-0 rounded-2xl box-border outline-none shadow-medium transition-transform-background motion-reduce:transition-none border-transparent dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]" />
    </div>
  );
};

export default AccordionSolutions;

const solutions = [
  {
    id: 1,
    title: "⚡️ Carlos Lespin",
    description:
      "Software Engineering grad, working in IT and a software engineering internship. I'm all about learning new stuff and keeping up with the tech world.",
    imgSrc:
      "/portrait.png",
  },
  {
    id: 2,
    title: "💻 I Code Everyday.",
    description:
      "I'm good at Frontend stuff, but I'm also diving into Backend and Cloud engineering. Oh, and I'm working on getting my AWS certs to level up my cloud game. I'm on the hunt for a permanent gig where I can really make a difference.",
    imgSrc:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXJqbHp4YnlreWYyYWJiam16ZDd5eGZyeGk4MXRzM2tiYzRheTZkMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JIX9t2j0ZTN9S/giphy.gif",
  },
  {
    id: 3,
    title: "👀  I want to join your team.",
    description:
      "I'm looking for a place where I can grow, take on some leadership, and help out the team. I'm all about contributing and not just being a bystander. I'm eager to find a role that challenges me and lets me keep learning and doing cool stuff.",
    imgSrc:
      "https://media1.giphy.com/media/VkMV9TldsPd28/giphy.gif?cid=ecf05e478ipd21u861g034loyqpc66eseytcl7lzjbk1wqrh&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  },
];