import express from 'express';
import getAllUsers from '../controller/allUserController.js';


const allUserRouter = express.Router();


allUserRouter.get("/", getAllUsers);


export default allUserRouter;