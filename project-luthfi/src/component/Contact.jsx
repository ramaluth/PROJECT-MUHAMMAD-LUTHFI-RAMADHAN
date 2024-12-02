import React, { useState } from "react";

const Contact = () => {
  // State untuk menyimpan data formulir
    const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
});

  // State untuk status pengiriman
    const [status, setStatus] = useState("");

  // Fungsi untuk menangani perubahan input
    const handleChange = (e) => {
    setFormData({
    ...formData,
    [e.target.name]: e.target.value,
    });
};

  // Fungsi untuk menangani pengiriman formulir
    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    if (response.ok) {
        setStatus("Pesan berhasil dikirim!");
        setFormData({ nama: "", email: "", pesan: "" });
    } else {
        setStatus("Gagal mengirim pesan.");
    }
    } catch (error) {
    setStatus("Terjadi kesalahan. Silakan coba lagi.");
    }
};

    return (
    <section id="contact" className="pt-20 pb-32">
    <div className="container">
        <div className="w-full px-4">
        <div className="max-w-xl mx-auto text-center mb-6">
            <h4 className="font-semibold text-lg text-teal-500 mb-2">Contact</h4>
            <h2 className="font-bold text-black text-2xl mb-2 sm:text-3xl lg:text-4xl">
            Hubungi Saya
            </h2>
        </div>
        </div>

        {/* Formulir Kontak */}
        <form onSubmit={handleSubmit}>
        <div className="w-full lg:w-1/2 lg:mx-auto">
            {/* Input Nama */}
            <div className="w-full px-4 mb-8">
            <label htmlFor="nama" className="text-base text-teal-500 font-bold">
                Nama
            </label>
            <input
                type="text"
                id="nama"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                className="w-full bg-slate-200 text-black p-3 rounded-lg focus:outline-none 
                focus:ring-teal-500 focus:ring-1 focus:border-teal-500"
                required
            />
            </div>

            {/* Input Email */}
            <div className="w-full px-4 mb-8">
            <label htmlFor="email" className="text-base text-teal-500 font-bold">
                Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-200 text-black p-3 rounded-lg focus:outline-none 
                focus:ring-teal-500 focus:ring-1 focus:border-teal-500"
                required
            />
            </div>

            {/* Input Pesan */}
            <div className="w-full px-4 mb-8">
            <label htmlFor="pesan" className="text-base text-teal-500 font-bold">
                Pesan
            </label>
            <textarea
                id="pesan"
                name="pesan"
                value={formData.pesan}
                onChange={handleChange}
                className="w-full bg-slate-200 text-black p-3 rounded-lg focus:outline-none
                focus:ring-teal-500 focus:ring-1 focus:border-teal-500 h-32"
                required
            />
            </div>

            {/* Tombol Kirim */}
            <div className="w-full px-4">
            <button
                type="submit"
                className="text-base font-semibold text-white bg-teal-500 py-3 px-9 rounded-full w-full
                hover:opacity-80 hover:shadow-lg transition duration-500"
            >
                Kirim
            </button>
            </div>

            {/* Pesan Status */}
            {status && (
            <div className="mt-4 text-center text-teal-600">
                <p>{status}</p>
            </div>
            )}
        </div>
        </form>
    </div>
    </section>
);
};

export default Contact;
