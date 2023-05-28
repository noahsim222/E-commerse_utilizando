import Model from '../model/Model.js';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config()

const newUser = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ msg: "No se a enviado ningun archivo" })
    }
    const file = req.file;
    //Mostrar mensaje de error de express validator
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }

    const { email, password } = req.body;
    //Verificamos si existe el email
    let user = await Model.findOne({ email });

    if (user) {
        return res.status(400).json({ msg: "El usuario ya existe" })
    }

    //de lo contrario : 
    //Si no existe creamos el user
    user = new Model(req.body);
    //y tambien
    //Hasheamos la password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    
    //Subir foto con AWS S3
    AWS.config.update({
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        region: 'sa-east-1',
    });

    const s3 = new AWS.S3();
    const uploadParams = {
        Bucket: 'jordanboots',
        Key: `foto/${file.filename}`,
        Body: req.file.buffer, 
    };

    s3.putObject(uploadParams, (err, data) => {
        if (err) {
            console.log(err);
    
        } else {
        
            const imageUrl = `https://jordanboots.s3.sa-east-1.amazonaws.com/${uploadParams.Key}`;
            user.foto = imageUrl;

        
        }
    });

    



    try {
        await user.save();
        res.json({ msg: "Usuario creado correctamente!" });
    } catch (error) {
        console.log(error);
    }

}

export default newUser;