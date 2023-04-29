import express from 'express';
import { check } from 'express-validator';
import auth from '../middleware/auth.js';
import { autenticarUser, userAutenticado } from '../controller/authController.js';

const authRouter = express.Router();

authRouter.post('/', [
    check("email", "agrega email valido").isEmail(),
    check("password", "Debe contener 8 caracteres").isLength({ min: 8 })
], autenticarUser);

authRouter.get('/', auth, userAutenticado);

export default authRouter;