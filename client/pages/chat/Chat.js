import { Layout } from '@/components/Layout'
import React, { useEffect, useContext } from 'react'
import { useState } from 'react'
import Contacts from './Contacts'

import authContext from '@/context/auth/authContext';
import axios from 'axios';

const URI = 'http://localhost:8080/messages'
const URI2 = 'http://localhost:8080/all/messages'
const Chat = () => {

    const AuthContext = useContext(authContext);
    const { usuarioAutenticado } = AuthContext;

    const [message, setMessage] = useState(" ")
const [allMessages, setAllMessages] = useState([])

    useEffect(() => {
        getMessages()
    }, [])

    const getMessages = async () => {
        const res = await axios.get(URI2)
        setAllMessages(res.data)
    }


const sendMessage = async (data) => {
    const res = await axios.post(URI, {message:data.message})
    console.log(res.data)
   
}



    const handleSubmit = (e) => {
        e.preventDefault();

        window.location.reload();
        try {
          

            const data = {
               message: message
            };
      sendMessage(data) 
        } catch (error) {
            console.log(error)
        }
       
    }


    useEffect(() => {
        usuarioAutenticado();
    }, [])

  
    return (
        <Layout>
            <div className='h-9/12 grid grid-cols-2  gap-2 w-9/12 m-auto mb-8'>
                <div className='grid grid-cols-1 bg-transparent shadow-xl  w-9/12 p-6 rounded-lg snap-y '>
                    <Contacts />
                </div>
               
                  <form onSubmit={handleSubmit}>
                        
                        <div className='mt-20 flex bg-white p-2 rounded'>
                            <label htmlFor="message" className='text-black text-2xl ml-10'>Has un comentario:</label>
                            <textarea id="message" className='w-96 h-64 ml-10 bg-isolate-300 text-white p-2 border-black shadow-xl rounded '  value={message} onChange={(e) => setMessage(e.target.value)}></textarea>  
                                 <button type="submit" className='btn mt-64 ml-2 text-white '>Publicar</button>
                        </div>
                 
                    </form>
         
                  
                    </div>
            <div className='bg-transparent w-4/12 m-auto  text-2xl bg-white p-4 rounded ' >
                <p className='mb-5 text-center text-black'>Publicaciones : </p>
            {
                allMessages.map((item, index) => {
                    return (
                        
                        <div key={index} className='border p-2 w-96 m-auto rounded shadow-xl mb-2 p-8'>
                            <p className='text-black'>{item.message}</p>
                            <p className='text-black text-sm ml-40'>{item.createdAt}</p>
                        </div>
                    );
                })
            }
  </div>
        
        </Layout >
    )
}

export default Chat;



