'use client';
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

export const BouncyCardsFeatures = () => {
  return (
      <section className="mx-auto max-w-7xl px-4 py-12">
           <div className='flex absolute container w-[100vw] justify-center'>
                <div className='inset-0 flex-row justify-center flex'>
                    <div className=' bg-shape1 w-[200px] h-[300px] bg-orange-400 opacity-50 blur-[90px] rounded-full'>6jgh</div>
                    <div className=' bg-shape2 w-[100px] lg:w-[400px] h-[400px] bg-blue-400 opacity-50 blur-[90px] rounded-full'>sgfg</div>
                    <div className=' bg-shape3 w-[340px] h-[350px] bg-green-400 opacity-50 blur-[90px] rounded-full'>sfgsg</div>
                </div>
            </div>
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
        Let&apos;s Build Something Together.
          <span className="text-slate-400"> Contact Me</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
        >
          Learn more
        </motion.button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Call Me</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-indigo-900 text-3xl">
              787-988-9447
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Email Me</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-900 text-3xl">
              carlos.lespin.silva@gmail.com
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Connect With Me</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Follow Me On GitHub</CardTitle>
          <div className="absolute overflow-hidden bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[#0D1118] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                      <SiGithub className="text-[150px] text-white absolute top-[-5px] left-[150px]" />
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl p-8  height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium transition-transform-background motion-reduce:transition-none border-transparent dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};