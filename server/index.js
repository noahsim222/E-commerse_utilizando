import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import __dirname from './utils.js';
import {Server as SocketServer} from 'socket.io';
import http from 'http';


//importar rutas
import userRouter from './routes/usuarios.js'
import authRouter from './routes/auth.js'
import productRouter from './routes/products.js';
import emailRouter from './routes/email.js';
import allUserRouter from './routes/allUser.js';
import messagesRouter from './routes/messages.js'

import dotenv from 'dotenv';
dotenv.config();


const app = express()
const server = http.createServer(app);

const io = new SocketServer(server, {
    cors: {
        origin: "http://localhost:8080",
    }
});

const opcionesCors = {
    origin: process.env.FRONTEND_URL

}

io.on("connection", (socket) => {
    console.log(socket.id)

    socket.on("message", (message) => {
        socket.broadcast.emit("message", {
            body: message,
            from: "Usuario",
        })
    })
})

const PORT = process.env.PORT || 8080;



//Leer valores del body
app.use(cors(opcionesCors));
app.use(express.static(`${__dirname}/uploads`))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//routes
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/email", emailRouter);
app.use("/allUser", allUserRouter);
app.use("/messages", messagesRouter);





app.listen(PORT, () => {
    console.log('Servidor en ejecución en http://localhost:8080')
})