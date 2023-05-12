import express from 'express';
import allMessages from '../controller/allMessagesController.js';


const allMessagesRouter = express.Router();

allMessagesRouter.get("/", allMessages);


export default allMessagesRouter;