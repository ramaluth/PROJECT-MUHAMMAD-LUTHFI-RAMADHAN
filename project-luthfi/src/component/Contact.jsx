import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="pt-20 pb-32">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-6">
                        <h4 className="font-semibold text-lg text-teal-500 mb-2">Contact
                        </h4>
                        <h2 className="font-bold text-black text-2xl mb-2 sm:text-3xl lg:text-4xl">Hubungi Saya
                        </h2>
                    </div>
                </div>
                <form>
                <div className="w-full lg:w-1/2 lg:mx-auto">
                    <div className="w-full px-4 mb-8">
                        <label for="name" className="text-base text-teal-500 font-bold">Nama</label>
                        <input type="text" id="name" className="w-full bg-slate-200 text-black p-3 rounded-lg focus:outline-none 
                        focus:ring-teal-500 focus:ring-1 focus:border-teal-500" />
                    </div>
                    <div className="w-full px-4 mb-8">
                        <label for="email" className="text-base text-teal-500 font-bold">Email</label>
                        <input type="email" id="email" className="w-full bg-slate-200 text-black p-3 rounded-lg focus:outline-none 
                        focus:ring-teal-500 focus:ring-1 focus:border-teal-500" />
                    </div>
                    <div className="w-full px-4 mb-8">
                        <label for="message" className="text-base text-teal-500 font-bold">Pesan</label>
                        <textarea type="email" id="email" className="w-full bg-slate-200 text-black p-3 rounded-lg focus:outline-none
                        focus:ring-teal-500 focus:ring-1 focus:border-teal-500 h-32" />
                    </div>
                    <div className="w-full px-4">
                        <button className="text-base font-semibold text-white bg-teal-500 py-3 px-9 rounded-full w-full
                        hover:opacity-80 hover:shadow-lg transition duration-500">Kirim</button>
                    </div>
                </div>
                </form>
            </div>
        </section>
    );
};
export default Contact;