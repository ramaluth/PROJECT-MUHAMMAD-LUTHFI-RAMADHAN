import React from "react";
import Ig from '../assets/instagram.svg';
import Git from '../assets/github.svg';
import Wa from '../assets/whatsapp.svg';
import X from '../assets/x.svg';

const About = () => {
    return (
        <section id="about" className="pt-48 bg-slate-700">
            <div name='about' className='container about w-full pb-48'>
                <div className='max-w-[1000px] mx-auto pt-10 px-20 flex flex-wrap'>
                    <div className="w-full px-4 mb-10 lg:w-1/2">
                    <h4 className="text-lg uppercase text-teal-500 font-bold mb-3">About Me</h4>
                    <h2 className="font-bold text-black text-xl mb-3 max-w-md lg:text-2xl">Get to know myself</h2>
                        <p className="text-base font-medium text-gray-500 mb-2 max-lg:text-lg">
                            Hi, I'm <strong>Muhammad Luthfi Ramadhan</strong>, a Front-End Developer and Information System student. I specialize in building responsive and interactive web applications using modern technologies.
                        </p>
                    </div> 
                    <div className="w-full px-4 lg:w-1/2">
                        <h2 className="font-semibold text-black text-xl mb-3 lg:text-2xl lg:pt-10">Let's get to know each other</h2>
                        <p className="font-medium text-base text-gray-500 mb-4 max-lg:text-lg">Find me on my social media and let's make a connection
                        </p>
                        <div className="flex items-center">
                            {/* instagram */}
                            <a href="https://www.instagram.com/ramaluth_" target="_blank" 
                            className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-black
                            hover:border-teal-500 hover:bg-teal-500 hover:text-white">
                            <img src={Ig} className="hover:filter hover:invert hover:brightness-0" alt="Instagram"/></a>
                            {/* github */}
                            <a href="https://github.com/ramaluth" target="_blank" 
                            className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-black
                            hover:border-teal-500 hover:bg-teal-500 hover:text-white">
                            <img src={Git} className="hover:filter hover:invert hover:brightness-0" alt="Github"/></a>
                            {/* whatsapp */}
                            <a href="https://wa.me/6281219114996" target="_blank" 
                            className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-black
                            hover:border-teal-500 hover:bg-teal-500 hover:text-white">
                            <img src={Wa} className="hover:filter hover:invert hover:brightness-0" alt="Whatsapp"/></a>
                            {/* twitter */}
                            <a href="https://x.com/ramaluth_" target="_blank" 
                            className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-black
                            hover:border-teal-500 hover:bg-teal-500 hover:text-white">
                            <img src={X} className="hover:filter hover:invert hover:brightness-0" alt="Twitter"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;