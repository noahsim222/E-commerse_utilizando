import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const auth = (req, res, next) => {

    const authHeader = req.get('Authorization');

    if (authHeader) {
        //Separa el token
        const token = authHeader.split(' ')[1];

        //Verificamos si esta bien

        try {
            const usuario = jwt.verify(token, process.env.JWT);
            req.usuario = usuario;
        } catch (error) {
            console.log(error)
            console.log("Error en el JWT");
        }

    }
    return next();


}

export default auth;