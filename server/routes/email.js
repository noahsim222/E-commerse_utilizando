import express from 'express';
import emailController from '../controller/emailController.js';

const emailRouter = express.Router()


emailRouter.get("/", emailController)



export default emailRouter;