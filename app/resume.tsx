'use client';

import { useTheme } from 'next-themes';
import "./mycomponent.css";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function Resume() {
    const { theme } = useTheme();
    return (
        <section className='py-32 min-h-[800px] overflow-x-hidden w-[100vw]'>
            <div className='container'>
            <h2 className='tracking-tight inline font-semibold text-4xl lg:text-6xl z-50'>
                Download my <span className='tracking-tight inline font-semibold from-[#5EA2EF] to-[#0072F5] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b'> Resume</span><br/> and <span className='tracking-tight inline font-semibold from-[#FF705B] to-[#FFB457] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b'>Cover Letter</span>.
            </h2>
            </div>
            <div className='flex absolute w-[100vw] justify-center'>
                <div className='inset-0 flex-row justify-center flex'>
                    <div className=' bg-shape1 w-[200px] h-[300px] bg-blue-400 opacity-50 blur-[90px] rounded-full'></div>
                    <div className=' bg-shape2 w-[100px] lg:w-[400px] h-[400px] bg-red-400 opacity-50 blur-[90px] rounded-full'></div>
                    <div className=' bg-shape3 w-[340px] h-[350px] bg-purple-400 opacity-50 blur-[90px] rounded-full'></div>
                </div>

            </div>
            <div className='container mt-16 flex gap-2'>
                <div className="flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"><div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
                    <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
                        <span className='text-2xl'><HiOutlineDocumentDownload /></span>
                    </div><p className="text-base font-semibold">Resume</p>
                </div>
                    <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
                        <p className="font-normal text-base text-default-500">Lorem ipsum.</p>
                    </div>
                </div>

                <div className="flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"><div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
                    <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
                        <svg aria-hidden="true" fill="none" focusable="false" height="24" role="presentation" viewBox="0 0 24 24" width="24" className="text-pink-500"><path d="M3.5 20.5c.83.83 2.17.83 3 0l13-13c.83-.83.83-2.17 0-3-.83-.83-2.17-.83-3 0l-13 13c-.83.83-.83 2.17 0 3ZM18.01 8.99l-3-3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M8.5 2.44 10 2l-.44 1.5L10 5l-1.5-.44L7 5l.44-1.5L7 2l1.5.44ZM4.5 8.44 6 8l-.44 1.5L6 11l-1.5-.44L3 11l.44-1.5L3 8l1.5.44ZM19.5 13.44 21 13l-.44 1.5L21 16l-1.5-.44L18 16l.44-1.5L18 13l1.5.44Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div><p className="text-base font-semibold">Cover Letter</p>
                </div>
                    <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
                        <p className="font-normal text-base text-default-500">Lorem ipsum.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

