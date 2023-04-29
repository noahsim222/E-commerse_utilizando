import express from 'express';
const enlacesRouter = express.Router();
import { check } from 'express-validator'
import { nuevoEnlace, obtenerEnlace } from '../controller/enlaceController.js';
import auth from '../middleware/auth.js';
import { eliminarArchivo } from '../controller/archivoController.js';


enlacesRouter.post("/",
    [
        check("nombre", "Sube un archivo").notEmpty(),

        check("nombre_original", "escribe un nombre").notEmpty()
    ],
    nuevoEnlace
);


enlacesRouter.get("/:url",
    [
        // no hay middlewares adicionales
    ],
    obtenerEnlace
);

enlacesRouter.delete("/:url",
    [
        auth // middlewares pueden ser adicionados como quieras
    ],
    eliminarArchivo
);

export default enlacesRouter;