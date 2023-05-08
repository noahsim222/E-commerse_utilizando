import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config()

const emailController = async (req, res) => {


    let testAccount = await nodemailer.createTestAccount();
    
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        }
    });
const email = req.body
    let info = await transporter.sendMail({
        from: 'luciosc1798@gmail.com',
        to: email,
        subject: 'Compra exitosa',
        text: 'Su compra fue realizada con exito, su paquete llegara entre 5-10 dias habiles.',
        html: "<div>Hola mundo</div>"
    });

    console.log(`Mensaje enviado: ${info.messageId}`);
};
export default emailController;