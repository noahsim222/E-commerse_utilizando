import express from 'express';
import { getAllMessages, addMessage } from '../controller/messageController.js';

const messagesRouter = express.Router();


messagesRouter.post("/add", addMessage);
messagesRouter.post("/get", getAllMessages);


export default messagesRouter; 