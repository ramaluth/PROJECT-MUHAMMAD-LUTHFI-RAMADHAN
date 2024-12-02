import React from 'react';
import luthfii from '../assets/luthfii.png';
import Blob from '../assets/blob.svg';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id='home'>
        <div name='hero' className='hero w-full h-screen pt-8 bg-white'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto pt-10 px-20 flex flex-col justify-center h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-1 md:grid-cols-2'>
                    {/* Flex container for image and text */}
                    <div className='relative mb-4 pr-4 md:mb-0 md:mr-4'>
                        {/* Blob background */}
                        <img src={Blob} alt="lucu" className="absolute top-0 left-0 w-full h-full" />
                        {/* Main image */}
                        <img src={luthfii} alt="ganteng" className="relative max-w-xs mx-auto z-10" />
                    </div>
                    {/* Text content */}
                    <div>
                        <p className='text-teal-500 font-semibold'>Hello, I'm</p>
                        <h1 className='text-4xl font-bold mb-2 text-black'>Muhammad<br/>Luthfi Ramadhan</h1>
                        <h2 className='text-xl leading-relaxed font-bold text-black'>Front-End Developer</h2>
                        <p className='text-teal-500 py-2 max-w-[1000px]'>Information System Student</p>
                        <button className='text-white text-base font-semibold bg-teal-500 group border-2 px-6 py-3 my-3 flex items-center rounded-full hover:shadow-lg hover:opacity-80'>
                        <Link to='contact' smooth={true} duration={500}>Contact Me</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};
export default Hero;
