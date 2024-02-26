/* eslint-disable @typescript-eslint/explicit-function-return-type */
"use client";

import React from "react";
import { HiDownload } from "react-icons/hi";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { EvervaultCard } from "../components/ui/evervault-card";
import { Button, ButtonGroup } from "@nextui-org/react";

export default function Resume(): React.JSX.Element {
  return (
    <section className="py-32 min-h-[800px] w-full">
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
            className="w-full md:w-auto mt-8"
            radius="full"
            variant="flat"
          >
            <Button>
              <HiDownload className="mr-2" />
              Resume
            </Button>
            <Button>
              <HiDownload className="mr-2" />
              Cover Letter
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <BackgroundBlur />
      <div className="container mt-16 flex flex-col lg:flex-row gap-4 justify-between">
        <EvervaultCard className="h-[300px] w-full">
          <div className="p-8">
            <div className="text-4xl mb-4">Experience</div>
            <div>Software Engineering Intern</div>
          </div>
        </EvervaultCard>
        <EvervaultCard className="h-[300px] w-full">
          <div className="p-8">
            <span className="text-4xl mb-4">Education</span>
            <p>Software Engineer Intern</p>
            <p>4Human Co.</p>
          </div>
        </EvervaultCard>
        <EvervaultCard className="h-[300px] w-full">
          <div className="p-8">
            <span className="text-4xl mt-4">Skills</span>
            <p>Software Engineer Intern</p>
            <p>4Human Co.</p>
          </div>
        </EvervaultCard>
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


