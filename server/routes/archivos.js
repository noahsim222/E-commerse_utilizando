import express from 'express';
const archivosRouter = express.Router();
import { check } from 'express-validator'
import auth from '../middleware/auth.js';
import { subirArchivo } from '../controller/archivoController.js';


archivosRouter.post("/",
    auth,
    subirArchivo
)


export default archivosRouter;