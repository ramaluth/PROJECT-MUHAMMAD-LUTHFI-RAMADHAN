import React from 'react'
import Luthfi from '../assets/luthfii.png'
import Blob from '../assets/blob.svg'


const Hero = () => {
    return (
        <section id="home" className='pt-36'>
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4 lg:w-1/2">
                        <h1 className="text-base font-semibold text-teal-500">Hello, I'm 
                        <span className="block font-bold text-slate-900 text-2xl">Muhammad Luthfi Ramadhan</span></h1>
                        <h2 className="font-medium text-slate-500 text-lg mb-5">Information System 
                        <span className="text-slate-900"> Student</span></h2>
                        <p className="font-medium text-slate-400 mb-10 leading-relaxed">
                        Belajar pemograman web itu menyenangkan bukan? <span className="font-bold text-slate-900">
                        bukan, sangat menyenangkan!</span></p>
                        <a href="#" className="text-base font-semibold text-white bg-teal-500 py-3 px-8 rounded-full hover:shadow-lg 
                        hover:opacity-80 transition duration-300 ease-in-out">Contact Me</a>
                    </div>
                    <div className="w-full self-end px-4 lg:w-1/2">
                        <div className="relative mt-10">
                            <img src={Luthfi} alt="ganteng" className="max-w-xs mx-auto" />
                            <span className="absolute bottom-32 -z-10 left-1/2 -translate-x-1/2 "> <img src={Blob} alt="lucu" className="px-14"/></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
    );
};
export default Hero