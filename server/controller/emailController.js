import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config()

const emailController = async (req, res) => {

const {email} = req.body;

    // Configurar el transportador SMTP con las credenciales de la cuenta de prueba
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PWD,
        },
    });

    // Enviar un correo electrónico de prueba
    const info = await transporter.sendMail({
        from: 'Hola <luciosc1798@gmail.com>',
        to: email,
        subject: 'Compra exitosa!',
      
        html: '<p>Contenido del correo electrónico en HTML</p>',
    });
    console.log(info);
    res.send({ status: "success", message: "Correo enviado exitoso" });
};
export default emailController;