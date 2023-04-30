import Model from '../model/Model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator'
import dotenv from 'dotenv';
dotenv.config();


export const autenticarUser = async (req, res, next) => {

    //Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    //Buscar el usuario para ver si esta registrado
    const { email, password } = req.body;
    const usuario = await Model.findOne({ email });

    if (!usuario) {
        return res.status(401).json({ msg: "El usuario no existe" })

    }

    //Verificar el password y autenticar el usuario
    if (bcrypt.compareSync(password, usuario.password)) {
        //Crear JWT
        const token = jwt.sign({
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            ubicacion: usuario.ubicacion,
            edad: usuario.edad,
            foto: usuario.foto,
        }, process.env.JWT, {
            expiresIn: "1d"
        });
        res.json({ token });


    } else {
        res.status(401).json({ msg: "Contraseña incorrecta" });

    }
    return next();
}



export const userAutenticado = async (req, res) => {
    res.json({ usuario: req.usuario });

}


