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
            <div className='h-9/12 grid grid-cols-2  gap-2 w-full m-auto mb-8'>
                <div className='bg-transparent w-9/12 m-auto  text-2xl mt-24  p-4  bg-cover mb-20 rounded ' >
                    <p className='mb-5 text-center text-black text-2xl font-bold '>Publicaciones : </p>
                    {
                        allMessages.map((item, index) => {
                            return (

                                <div key={index} className=' bg-white mb-20  p-2 w-96 m-auto rounded shadow-xl mb-2 p-8 '>
                                    <p className='text-black text-2xl'>{item.message}</p>

                                </div>
                            );
                        })
                    }
                </div>
               
                  <form onSubmit={handleSubmit}>
                        
                        <div className='mt-20 flex   shadow-lg mr-10 rounded p-8 m'>
                         
                        <textarea id="message" placeholder='Publica algo..' className=' resize-none border rounded-md w-full bg-white  px-3 py-4 placeholder-gray-400 text-black font-mono text-2xl p-20 leading-5 focus:outline-none focus:ring-2  '  value={message} onChange={(e) => setMessage(e.target.value)}></textarea>  
                                 <button type="submit" className='btn mt-64 ml-2 text-white '>Publicar</button>
                        </div>
                
                    </form>
               
               
                    </div>
          <div div className='grid grid-cols-1 bg-transparent shadow-lg m-auto w-9/12 p-6 rounded-lg snap-y mb-40' > 
                    <p className='text-2xl text-white mb-2 font-bold font-mono text-center'>Usuarios</p>
                    <Contacts />
                    </div>
        
        </Layout > 
      
    )
              
}

export default Chat;



