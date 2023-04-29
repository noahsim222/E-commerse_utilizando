import Enlaces from "../model/Enlace.js";
import shortid from "shortid";
import bcrypt from 'bcrypt';

export const nuevoEnlace = async (req, res, next) => {

    const { nombre_original, password } = req.boy;
    const enlace = new Enlaces();
    enlace.url = shortid.generate();
    enlace.nombre = shortid.generate();

    enlace.nombre_original = nombre_original;
    enlace.password = password;
    console.log(enlace);

    if (req.usuario) {

        const { password, descargas } = req.body;

        if (descargas) {
            enlace.descargas = descargas;
        }

        if (password) {

            const salt = await bcrypt.genSalt(10);
            enlace.password = await bcrypt.hash(password, salt);

        }

        enlace.autor = req.usuario.id;

    }

    try {
        await enlace.save();
        return res.json({ msg: `${enlace.url}` });
        next();
    } catch (error) {
        console.log(error);
    }
}


export const obtenerEnlace = async (req, res, next) => {

    const { url } = req.params;

    const enlace = await Enlaces.findeOne({ url });

    if (!enlace) {
        res.status(404).json({ msg: "Ese enlace no existe" });
        return next();
    }

    res.json({ archivo: enlace.nombre });

    const { descargas } = enlace;

    if (descargas === 1) {


        req.archivo = nombre;

        await Enlaces.findOneAndRemove(req.params.url);
        next()


    } else {
        //si las descargas son > a 1 - restar 1
        enlace.descargas--;
        await enlace.save();
    }


}