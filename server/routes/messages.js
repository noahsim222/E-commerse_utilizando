import express from 'express';
import newMessage from '../controller/messageController.js';

const messagesRouter = express.Router();


messagesRouter.post("/", newMessage);



export default messagesRouter; 