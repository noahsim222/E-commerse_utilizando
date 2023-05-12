import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config()

const emailController = async (req, res) => {
    const { email, cartItems, total, cartCount } = req.body;

    const itemsHtml = cartItems.map(item => `<li>${item.nombre} - $${item.precio}</li>`).join('');

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        auth: {
            user: 'luciosc1798@gmail.com',
            pass: 'zahubfklebiypkgm',
        },
    });

    const info = await transporter.sendMail({
        from: 'Jordan Boots',
        to: email,
        subject: 'Confirmacion de Compra!',
        html: `
    <p>Su compra fue realizada con exito!, su pedido llegara entre 5 y 10 dias habiles</p>
    <p>Tu pedido:</p>
    <ul>
    ${itemsHtml}
    </ul>
    <p>Total: $${total}</p>
   
    `, attachments: [
            {
                filename: 'foto.jpg', //nombre de la foto que se muestra (para mostrar un nombre mas formal y no el nombre que tiene la foto original)
                path: './uploads/foto/favicon.ico'  //importamos la foto
            }
        ]
    });
    console.log(info);
    res.send({ status: "success", message: "Correo enviado exitoso" });
};


export default emailController;