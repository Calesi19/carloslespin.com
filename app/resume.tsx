/* eslint-disable @typescript-eslint/explicit-function-return-type */
"use client";

import React from "react";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { EvervaultCard, Icon } from "../components/ui/evervault-card";

export default function Resume(): React.JSX.Element {
  return (
    <section className="py-32 min-h-[800px] w-full">
      <div className="container">
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
      <BackgroundBlur />
      <div className="container mt-16 flex gap-2">
        <EvervaultCardDemo />
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
    <div className=" flex flex-col max-w-sm mx-auto relative h-[300px]">
      <EvervaultCard text="frontend" />
    </div>
  );
}
