"use client";

import React from "react";
import { HiOutlineDocumentDownload } from "react-icons/hi";

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
        <div className="flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
          <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
            <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
              <span className="text-2xl">
                <HiOutlineDocumentDownload />
              </span>
            </div>
            <p className="text-base font-semibold">Resume</p>
          </div>
          <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
            <p className="font-normal text-base text-default-500">
              Lorem ipsum.
            </p>
          </div>
        </div>

        <div className="flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
          <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
            <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
              {
                // icon
              }
            </div>
            <p className="text-base font-semibold">Cover Letter</p>
          </div>
          <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
            <p className="font-normal text-base text-default-500">
              Lorem ipsum.
            </p>
          </div>
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
