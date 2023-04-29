import Enlaces from "../model/Enlace.js";
import shortid from "shortid";
import multer from "multer";

import fs from 'fs'




export const subirArchivo = async (req, res, next) => {

    const configuracionMulter = {
        //limite
        limits: { fileSize: req.usuario ? 1024 * 1024 * 10 : 1024 * 1024 },
        //se guarda en el storage con cb
        storage: fileStorage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, __dirname + '/../uploads');
            },

            filename: (req, file, cb) => {
                const extension = file.originalname.substring(file.originalname.lastIndexOf("."), file.originalname.length);
                cb(null, `${shortid.generate()}.${extension} `);
            }

        })
    }

    const upload = multer(configuracionMulter).single("archivo");
    upload(req, res, async (error) => {
        console.log(req.file);

        if (!error) {
            res.json({ archivo: req.file.filename })
        } else {
            console.log(error)
            return next()
        }
    })

}




export const eliminarArchivo = async (req, res, next) => {

    try {
        fs.unlinkSync(__dirname + `/../uploads/${req.archivo}`)
        console.log("Archivo eliminado")
    } catch (error) {
        console.log(error)
    }
}