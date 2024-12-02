require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
    const { nama, email, pesan } = req.body;

    const transporter = nodemailer.createTransport({
    service: "gmail", // Atau SMTP lainnya
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,   
    },
});

    const mailOptions = {
    from: email, // Email pengguna
    to: process.env.EMAIL_USER, // Email tujuan Anda
    subject: `Pesan dari ${nama}`,
    text: `Pesan: ${pesan}\nDari: ${email}`,
};

    try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Pesan berhasil dikirim!");
    } catch (error) {
    console.error(error);
    res.status(500).send("Gagal mengirim pesan.");
}
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
