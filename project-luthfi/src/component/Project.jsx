import React from "react";
import Projek from '../assets/web.png';

const Project = () => {
    return (
        <section id="project" className="pt-20 pb-20 bg-slate-200">
        <div className="container">
            <div className="w-full px-4">
                <div className="max-w-xl mx-auto text-center mb-5">
                    <h4 className="font-semibold text-lg text-teal-500 mb-2">Portfolio</h4>
                    <h2 className="font-bold text-black text-2xl mb-4">Latest Project</h2>
                </div>
            </div>
            <div className="w-full px-4 flex flex-wrap justify-center">
                <div className="mb-12 md:w-1/2">
                    <div className="rounded-lg shadow-lg overflow-hidden">
                        <img src={Projek} alt="web" width="w-full" />
                    </div>
                    <h3 className="font-semibold text-xl text-black mt-3 mb-3">Portofolio Luthfi</h3>
                    <p className="font-medium text-base text-gray-500">This portfolio website, designed with a clean and modern design, includes various important sections such as a brief profile, projects and contact information to introduce myself.
                    </p>
                </div>
            </div>
        </div>
        </section>
    )
}
export default Project;