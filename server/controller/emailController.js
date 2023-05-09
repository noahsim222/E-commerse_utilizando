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
        from: 'Hola <luciosc1798@gmail.com>',
        to: email,
        subject: 'Compra exitosa!',
        html: `
    <p>Gracias por confiar en Jordan Boots, su compra fue confirmada con exito!</p>
    <p>Tu pedido:</p>
    <ul>
    ${itemsHtml}
    </ul>
    <p>Total: $${total}</p>
    <p>Cantidad de items: ${cartCount}</p>
    `,
    });
    console.log(info);
    res.send({ status: "success", message: "Correo enviado exitoso" });
};


export default emailController;