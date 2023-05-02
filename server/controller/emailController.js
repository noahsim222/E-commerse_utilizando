import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config()

const transporter = nodemailer.createTransport({
    host: 'localhost',
    service: 'gmail',
    port: 2525,

    auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.PWD, // generated ethereal password
    },
});



const emailController = async (req, res) => {
    // create reusable transporter object using the default SMTP transport
    const respuesta = await transporter.sendMail({
        from: '<luciosc1798@gmail.com>',
        to: "luciosc1798@gmail.com",
        subject: 'Compra Boots App',
        html: '<div><h1>Se confirmo una compra </h1></div>',

    })

    console.log(respuesta);
    res.send({ status: "success", message: "Correo enviado exitosamente" })




}

export default emailController;