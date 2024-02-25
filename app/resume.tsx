/* eslint-disable @typescript-eslint/explicit-function-return-type */
"use client";

import React from "react";
import { HiDownload } from "react-icons/hi";
import { EvervaultCard } from "../components/ui/evervault-card";
import { Button, ButtonGroup } from "@nextui-org/react";

export default function Resume(): React.JSX.Element {
  return (
    <section className="py-32 min-h-[800px] w-full">
      <div className="container flex justify-between">
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
        <div className="flex items-end gap-4 ">
          <ButtonGroup radius="full" variant="flat">
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
      <div className="container mt-16 flex flex-row justify-between">
        <EvervaultCard text="Frontend" />
        <EvervaultCard />
        <EvervaultCard />
        <div className="h-[300px] flex flex-col relative overflow-hidden text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
          View Resume
        </div>
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
          className={`bg-shape1 w-1/4 h-[300px] bg-blue-400 ${style}`}
        ></span>
        <span
          className={`bg-shape2 w-1/4 h-[400px] bg-red-400 ${style}`}
        ></span>
        <span
          className={`bg-shape3 w-1/4 h-[350px] bg-purple-400 ${style}`}
        ></span>
      </div>
    </div>
  );
}

export function EvervaultCardDemo() {
  return (
    <div className=" flex flex-col max-w-sm relative">
      <EvervaultCard text="See More" />
    </div>
  );
}
