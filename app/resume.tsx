/* eslint-disable @typescript-eslint/explicit-function-return-type */
"use client";

import React from "react";
import { HiDownload } from "react-icons/hi";
import { FaStar, FaCode, FaSitemap } from "react-icons/fa6";
import { downloadCoverLetter, downloadResume } from "../utils/downloadFiles";
import { EvervaultCard } from "../components/ui/evervault-card";
import { Button, ButtonGroup, Link } from "@nextui-org/react";

export default function Resume(): React.JSX.Element {
  return (
    <section className="py-16 min-h-[400px] w-full">
      <div className="container flex flex-col md:flex-row justify-between">
        <div>
          <h2 className="tracking-tight inline font-semibold text-4xl lg:text-6xl z-50">
            Download my{" "}
            <span className="tracking-tight inline font-semibold from-[#5EA2EF] to-[#0072F5] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
              {" "}
              Resume
            </span>
            <br /> and{" "}
            <span className="tracking-tight inline font-semibold from-[#FF705B] to-[#FFB457] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
              Cover Letter
            </span>
            .
          </h2>
        </div>
        <div className="flex items-end gap-4">
          <ButtonGroup
            fullWidth
            className="w-full md:w-auto mt-8"
            radius="full"
            variant="flat"
          >
            <Button
              onPress={() => {
                downloadResume();
              }}
            >
              <HiDownload className="mr-2" />
              Resume
            </Button>
            <Button
              onPress={(): void => {
                downloadCoverLetter();
              }}
            >
              <HiDownload className="mr-2" />
              Cover Letter
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <BackgroundBlur />
      <div className="container mt-8 md:mt-16 flex flex-col lg:flex-row gap-4 justify-between">
        <EvervaultCard className="h-[300px] w-full">
          <div className="p-8 h-full w-full aspect-auto">
            <div className="text-4xl mb-4">Experience</div>
            <div>Software Engineer</div>{" "}
            <div className="mb-4">
              <div className="text-default-500">DMSi Software</div>
              <div className="text-default-500">March 2024 - Present</div>
            </div>
            <div>Software Engineering Intern</div>{" "}
            <div className="mb-4">
              <div className="text-default-500">4Human Co.</div>
              <div className="text-default-500">December 2023 - Jun 2024</div>
            </div>
          </div>
        </EvervaultCard>
        <EvervaultCard className="h-[300px] w-full">
          <div className="p-8 h-full w-full">
            <div className="text-4xl mb-4">Education</div>
            <div className="mb-4">
              Bachelor&apos;s Degree in Software Engineering
            </div>
            <ul>
              <li className="mb-4 flex items-center">
                <FaSitemap className="mr-4 lg:w-8" />
                Software Design: Algorithms, Data Structures, OOP, &
                Architecture.
              </li>
              <li className=" flex items-center">
                <FaCode className="mr-4 w-4" />
                Self-taught Web Development.
              </li>
            </ul>
          </div>
        </EvervaultCard>
        <EvervaultCard className="h-[300px] w-full aspect-auto">
          <div className="p-8 h-full w-full aspect-">
            <div className="text-4xl mb-4">Skills</div>
            <div className="flex gap-4 w-full">
              <div className="w-full ">
                <CustomList
                  items={[
                    "React",
                    "TypeScript",
                    "Node.js",
                    "GraphQL",
                    "Tailwind CSS",
                    "Google Cloud",
                  ]}
                />
              </div>

              <div className="w-full">
                <CustomList
                  items={["Python", "AWS", "SQL & NoSQL", "Docker", "Express"]}
                />
              </div>
            </div>
          </div>
        </EvervaultCard>
      </div>
      <div className="container mt-4 flex justify-end">
        <Link href="/resume" showAnchorIcon isExternal>
          See Resume
        </Link>
      </div>
    </section>
  );
}

function BackgroundBlur(): React.JSX.Element {
  const style = "opacity-50 blur-[90px] rounded-full";

  return (
    <div className="flex justify-center absolute w-full">
      <div className="inset-0 flex-row justify-center container flex">
        <span
          className={`bg-shape1 w-1/4 h-[300px] bg-[#fafafa00] dark:bg-blue-400 ${style}`}
        ></span>
        <span
          className={`bg-shape2 w-1/4 h-[400px] bg-[#fafafa00] dark:bg-red-400 ${style}`}
        ></span>
        <span
          className={`bg-shape3 w-1/4 h-[350px] bg-[#fafafa00] dark:bg-purple-400 ${style}`}
        ></span>
      </div>
    </div>
  );
}

const CustomList = ({ items }: { items: string[] }) => {
  return (
    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
      {items.map((item: string, index: number) => (
        <li key={index} style={{ display: "flex", alignItems: "center" }}>
          <FaStar style={{ marginRight: "8px" }} />
          {item}
        </li>
      ))}
    </ul>
  );
};
