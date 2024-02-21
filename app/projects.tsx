"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const CardCarousel = (): React.JSX.Element => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const shiftLeft = (): void => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = (): void => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section ref={ref}>
      <div className="relative overflow-hidden my-16">
        {/* CARDS */}
        <div className="mx-auto container">
          <div className="tracking-tight inline font-semibold text-4xl z-50">
            Projects. <span className="">Find them on GitHub.</span>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex mt-8"
          >
            {items.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </motion.div>
        </div>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </section>
  );
};

const Card = ({
  url,
  category,
  title,
  description,
  link,
}: ItemType): React.JSX.Element => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div
        className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
        style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          marginRight: MARGIN,
          backgroundImage: `url(${url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
          <span className="text-xs font-semibold uppercase text-violet-300">
            {category}
          </span>
          <p className="my-2 text-3xl font-bold">{title}</p>
          <p className="text-lg text-slate-300">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default CardCarousel;

interface ItemType {
  id: number;
  url: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

const items: ItemType[] = [
  {
    id: 1,
    url: "https://github.com/Calesi19/Timeshare-Pro-App/blob/main/docs/5.png?raw=true",
    category: "Mobile",
    title: "Timeshare Pro",
    description:
      "Presentation tool for timeshare salesmen. Built with Flutter.",
    link: "https://github.com/Calesi19/Timeshare-Pro-App",
  },
  {
    id: 2,
    url: "https://github.com/Calesi19/Temples/blob/main/docs/square.png?raw=true",
    category: "Backend",
    title: "Temples API",
    description:
      "A Django API for information of temples worldwide. Containerized using Docker.",
    link: "https://github.com/Calesi19/Timeshare-Pro-App",
  },
  {
    id: 3,
    url: "https://github.com/Calesi19/SQLibrarySystem/blob/main/docs/square.png?raw=true",
    category: "Database",
    title: "Library System",
    description: "SQL model of a library system with schema and data.",
    link: "https://github.com/Calesi19/Timeshare-Pro-App",
  },
  {
    id: 4,
    url: "https://github.com/Calesi19/TypeSwift/blob/main/docs/square.jpg?raw=true",
    category: "Desktop",
    title: "TypeSwift",
    description:
      "A compact text-expander for creating shortcuts to reduce typing time.",
    link: "https://github.com/Calesi19/Timeshare-Pro-App",
  },
  {
    id: 5,
    url: "https://github.com/Calesi19/LockerHub/blob/main/doc/square.png?raw=true",
    category: "Mobile",
    title: "LockerHub",
    description:
      "Allows for locker rental transactions and also enables users to securely access their rented lockers. Built with Flutter.",
    link: "https://github.com/Calesi19/Timeshare-Pro-App",
  },
  {
    id: 6,
    url: "https://github.com/Calesi19/TypeSpace/blob/main/docs/square.gif?raw=true",
    category: "Game",
    title: "TypeSpace",
    description: "Typing game written in vanilla JavaScript.",
    link: "https://github.com/Calesi19/Timeshare-Pro-App",
  },
  {
    id: 7,
    url: "https://github.com/Calesi19/Chess/blob/main/docs/banner.gif?raw=true",
    category: "Game",
    title: "Chess",
    description: "Chess game written in C++.",
    link: "https://github.com/Calesi19/Timeshare-Pro-App",
  },
  {
    id: 8,
    url: "/resume.png",
    category: "Website",
    title: "Svelte Portfolio",
    description: "My first portfolio website. Built with SvelteKit.",
    link: "https://carloslespin.com",
  },
  {
    id: 9,
    url: "https://github.com/Calesi19/carloslespin.com/blob/main/docs/banner.png?raw=true",
    category: "Website",
    title: "Portfolio",
    description: "This portfolio website. Built with React.",
    link: "/5.png",
  },
];
