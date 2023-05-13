import { Layout } from '@/components/Layout'
import React, { useEffect, useContext } from 'react'
import { useState } from 'react'
import Contacts from './Contacts'
import Login from '../login'
import authContext from '@/context/auth/authContext';
import axios from 'axios';

const URI = 'http://18.230.197.142:8080/messages'
const URI2 = 'http://18.230.197.142:8080/all/messages'
const Chat = () => {

    const AuthContext = useContext(authContext);
    const { usuarioAutenticado, usuario } = AuthContext;

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
        <>
        { usuario  ? ( <> 
        <Layout>
            <div className='h-9/12 grid grid-cols-2 tablet:gird-cols-2 grid-cols-1 gap-2 w-full m-auto mb-8'>
                <div className='bg-white shadow-xl shadow-gray-600 border-sky-900 border w-9/12 w-20 m-auto  text-2xl mt-24  p-4  bg-cover mb-20 rounded ' >
                    <p className='mb-5 text-center text-black text-2xl font-bold text-sky-900  '>Publicaciones : </p>
                    {
                        allMessages.map((item, index) => {
                            return (

                                <div key={index} className=' bg-white   p-2 w-96 m-auto rounded shadow-xl mb-2 p-8 '>
                                    <p className='text-black text-2xl'>{item.message}</p>

                                </div>
                            );
                        })
                                
                    }  
                    <p className='text-2xl text-sky-800 font-bold text-center mb-3 mt-14 '>Usuarios</p>
                    <Contacts />
                </div>
               
                  <form onSubmit={handleSubmit}>
                        
                        <div className='mt-20 flex   shadow-xl mr-10 rounded shadow-green-900 p-8 m'>
                         <p className='text-white text-2xl font-bold'>Haz una publicacion para que todos puedan verla</p>
                        <textarea id="message" placeholder='Publica algo..' className=' resize-none border rounded-md w-full bg-white  px-3 py-4 placeholder-gray-400 text-black font-mono text-2xl p-20 leading-5 focus:outline-none focus:ring-2  '  value={message} onChange={(e) => setMessage(e.target.value)}></textarea>  
                                 <button type="submit" className='btn mt-64 ml-2 text-white '>Publicar</button>
                        </div>
                
                    </form>
               
               
                    </div>
      
        
        </Layout > 
      </>
       ) 
        : (
            <>
        
        <Login/>
        </> )
    }
        </>
      
    )
              
}

export default Chat;



