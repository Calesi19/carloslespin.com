'use client';

import { useTheme } from 'next-themes';


export default function Resume() {
    const { theme } = useTheme();
    return (
        <section className='py-32 w-full overflow-visible'>
            <div className='container'>
            <h2 className='tracking-tight inline font-semibold text-4xl lg:text-6xl z-50'>
                Get my <span className='tracking-tight inline font-semibold from-[#5EA2EF] to-[#0072F5] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b'> Resume</span> and <span className='tracking-tight inline font-semibold from-[#FF705B] to-[#FFB457] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b'>Cover Letter</span>.
            </h2>
            </div>
            <div className='flex container absolute overflow-visible'>
                <div className='absolute inset-0 overflow-visible inline-flex flex-row'>
                    <div className='bg-shape1 w-[400px] h-[400px] bg-orange-400 opacity-50 blur-[90px] rounded-full'>6jgh</div>
                    <div className='bg-shape3 w-[400px] h-[400px] bg-red-400 blur-[90px] rounded-full'>sgfg</div>
                    <div className='bg-shape1 w-[400px] h-[400px] bg-purple-400 opacity-50 blur-[90px] rounded-full'>sfgsg</div>
                </div>

            </div>
            <div className='container'>
            <div className="flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]" tabindex="-1"><div class="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0"><div class="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500"><svg aria-hidden="true" fill="none" focusable="false" height="24" role="presentation" viewBox="0 0 24 24" width="24" class="text-pink-500"><path d="M3.5 20.5c.83.83 2.17.83 3 0l13-13c.83-.83.83-2.17 0-3-.83-.83-2.17-.83-3 0l-13 13c-.83.83-.83 2.17 0 3ZM18.01 8.99l-3-3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M8.5 2.44 10 2l-.44 1.5L10 5l-1.5-.44L7 5l.44-1.5L7 2l1.5.44ZM4.5 8.44 6 8l-.44 1.5L6 11l-1.5-.44L3 11l.44-1.5L3 8l1.5.44ZM19.5 13.44 21 13l-.44 1.5L21 16l-1.5-.44L18 16l.44-1.5L18 13l1.5.44Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><p class="text-base font-semibold">Themeable</p></div><div class="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased"><p class="font-normal text-base text-default-500">Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.</p></div></div>
            </div>
        </section>
    );
}

