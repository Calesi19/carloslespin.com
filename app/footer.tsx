import { title, subtitle } from "@/components/primitives";


export const FooterBar = () => {
    return (
        <footer className="overflow-hidden">
        <div className="mt-10 rounded-t-2xl z-20 text-foreground box-border outline-none shadow-medium transition-transform-background motion-reduce:transition-none border-transparent dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
            <div className='flex absolute mt-[200px] w-[100vw] justify-center z-10'>
                <div className='inset-0 container flex-row justify-center flex'>
                    <div className='bg-shape4 w-[700px] h-[400px] bg-violet-900 blur-[160px] rounded-full'></div>
                    <div className='bg-shape5 w-[700px] lg:w-[400px] h-[400px] bg-violet-400 blur-[160px] rounded-full'>sgfg</div>
                    <div className='bg-shape6 w-[700px] h-[400px] bg-purple-900 blur-[160px] rounded-full'></div>
                </div>
                </div>

                <div className="container z-50 flex py-[100px] items-center justify-between flex-col gap-10 lg:flex-row lg:gap-0">

<div>


<h2 className={`lg:text-6xl ${title()}`}>
        Let's chat.<br /> <span className={`lg:text-6xl ${title({color: "violet"})}`}>Connect</span> with me.
    </h2>
</div>


<div >

<a className="md:hidden" href="tel:+17879889447">
<button className="hover:scale-105 hover:border-[#56ff59] active:bg-[#56ff59] w-[300px] border-4 border-[#EAEAEA]  text-xl mt-4 py-3 px-10 rounded-full text-white transition duration-300 active:duration-0  flex items-center gap-4">
    <svg className="w-[32px] h-[32px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Message"><g data-name="Layer 2" fill="#ffffff" className="color000000 svgShape"><g data-name="message-circle" fill="#ffffff" className="color000000 svgShape"><circle cx="12" cy="12" r="1" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="16" cy="12" r="1" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="8" cy="12" r="1" fill="#ffffff" className="color000000 svgShape"></circle><path d="M19.07 4.93a10 10 0 0 0-16.28 11 1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09 10 10 0 0 0 11-16.28zm.83 8.36a8 8 0 0 1-11 6.08 3.26 3.26 0 0 0-1.25-.26 3.43 3.43 0 0 0-.56.05l-2.82.57.57-2.82a3.09 3.09 0 0 0-.21-1.81 8 8 0 0 1 6.08-11 8 8 0 0 1 9.19 9.19z" fill="#ffffff" className="color000000 svgShape"></path></g></g></svg>                    Text Me
</button>
</a>

<a href="mailto:carlos.lespin.silva@gmail.com">
<button className="hover:scale-105 hover:border-[#ffcc56] active:bg-[#ffcc56] w-[300px] border-4 border-[#EAEAEA]  text-xl mt-4 py-3 px-10 rounded-full text-white transition duration-300 active:duration-0  flex items-center gap-4">
<svg className="w-[32px] h-[32px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Email"><g data-name="Layer 2" fill="#ffffff" className="color000000 svgShape"><path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z" data-name="email" fill="#ffffff" className="color000000 svgShape"></path></g></svg>
Email Me
</button>
</a>

<a href="https://www.linkedin.com/in/calesi19/">
<button className="hover:scale-105 hover:border-[#5f95eb] active:bg-[#5f95eb] w-[300px] border-4 border-[#EAEAEA]  text-xl mt-4 py-3 px-10 rounded-full text-white transition duration-300 active:duration-0  flex items-center gap-4">
<svg className="w-[32px] h-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 5 1036 990" id="Linkedin"><path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z" fill="#ffffff" className="color000000 svgShape"></path></svg>                
Linkedin
</button>
</a>

<a href="https://github.com/Calesi19">
<button className="hover:scale-105 hover:border-[#a55feb] active:bg-[#a55feb] w-[300px] border-4 border-[#EAEAEA]  text-xl mt-4 py-3 px-10 rounded-full text-white transition duration-300 active:duration-0 flex items-center gap-4">
<svg className="w-[32px] h-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Github"><path fill="#ffffff" d="M20.116 5.901a3.883 3.883 0 0 0-.26-.31 4.413 4.413 0 0 0 .21-.76 5.284 5.284 0 0 0-.35-2.8s-1.12-.35-3.69 1.38a12.477 12.477 0 0 0-3.35-.45 12.604 12.604 0 0 0-3.36.45c-2.57-1.75-3.69-1.38-3.69-1.38a5.263 5.263 0 0 0-.35 2.77 4.21 4.21 0 0 0 .22.79c-.09.1-.18.21-.26.31a5.14 5.14 0 0 0-1.12 3.3 7.686 7.686 0 0 0 .04.85c.32 4.43 3.27 5.46 6.08 5.78a2.558 2.558 0 0 0-.77 1.39 4.022 4.022 0 0 0-.13 1.09v1.31c-1.119.1-2.267-.063-2.623-1.061a5.695 5.695 0 0 0-1.834-2.413 1.179 1.179 0 0 1-.17-.112 1.001 1.001 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.003.812.81 1.337 1.143 1.515a4.466 4.466 0 0 1 .923 1.359c.364 1.023 1.429 2.578 4.466 2.376l.002.098.004.268a1 1 0 0 0 1 1H15.026a1 1 0 0 0 1-1s.008-3.16.008-3.69a4.024 4.024 0 0 0-.13-1.09l-.002-.006.004.006c-.009-.035-.022-.063-.032-.097a2.532 2.532 0 0 0-.74-1.293l.012.021-.02-.02c2.81-.32 5.74-1.37 6.06-5.78a7.687 7.687 0 0 0 .04-.85 5.23 5.23 0 0 0-1.11-3.3Z" data-name="Brand Logos" className="color6563ff svgShape"></path></svg>                
GitHub
</button>
</a>

</div>


</div>





                </div>
            
            

                    
                    
                    
        
            
            
            </footer>
	);
};

export default FooterBar;