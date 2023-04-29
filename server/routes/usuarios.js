import express from 'express';
import { check, validationResult } from 'express-validator';
import newUser from '../controller/userController.js';
import upload from '../middleware/upload.js';

const userRouter = express.Router();

userRouter.post("/", upload.single("foto"), [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email debe ser valido").isEmail(),
    check("password", "El campo es obligatorio").isLength({ min: 8 })
], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errores: errors.array() });
    }

    newUser(req, res);
});

export default userRouter;