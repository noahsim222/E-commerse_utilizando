import { Layout } from '@/components/Layout'
import React, { useEffect, useContext } from 'react'
import { useState } from 'react'
import Contacts from './Contacts'
import io from 'socket.io-client';
import authContext from '@/context/auth/authContext';



const socket = io("http://localhost:8080");

const Chat = () => {

    const AuthContext = useContext(authContext);
    const { usuarioAutenticado, usuario } = AuthContext;

    useEffect(() => {
        usuarioAutenticado();
    }, [])
    
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([{
        body: "...",
        from: usuario? usuario.nombre : "Me"
    }])

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('message', message);
        setMessage("");
        const newMessage = {
            body: message,
            from: usuario ? usuario.nombre : "Me"
        }
        setMessages([newMessage, ...messages])
    }

    useEffect(() => {
        const receiveMesagge = message => {
            setMessages([message, ...messages]);
        }
        socket.on("message", receiveMesagge);

        return () => {
            socket.off("message", receiveMesagge);

        }
    }, [messages]);
    return (
        <Layout>
            <div className='h-9/12 grid grid-cols-2  gap-2 w-9/12 m-auto mb-60'>
                <div className='grid grid-cols-1 bg-transparent shadow-xl  w-9/12 p-6 rounded-lg snap-y '>
                    <Contacts />
                </div>

        
                <div className='flex flex-col gap-4  p-4 w-9/12 rounded  bg-gray-800 shadow-xl  '>
                        <div className='flex flex-col  h-96 mt-5 overflow-y-scroll'>
                        <div className='p-4' >
                            {messages.map((message, index) => (
                                <div key={index} >
                                    <p className='bg-white  text-black p-4 rounded flex gap-1 mb-5'><p className='text-xl'>{message.from} :</p><p className='p-1 font-mono'>{message.body}</p>  </p>
                                </div>
                            ))}
                            </div>

                        
            </div>
                    <form onSubmit={handleSubmit} className='bottom-0'>
                    <input type='text' placeholder='Type a message' className='input input bordered w-96 mr-5 text-white' value={message} onChange={e => setMessage(e.target.value)} />
                    <button className='btn' type='submit'>Enviar</button>
                    </form>
                </div>
            </div>
        </Layout >
    )
}

export default Chat;