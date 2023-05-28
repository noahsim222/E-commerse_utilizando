import { Layout } from '@/components/Layout'
import React, { useEffect, useContext } from 'react'
import { useState } from 'react'
import Contacts from './Contacts'
import Login from '../login'
import authContext from '@/context/auth/authContext';
import axios from 'axios';

const URI = 'https://server-two-ochre.vercel.app/messages'
const URI2 = 'https://server-two-ochre.vercel.app/all/messages'
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
            <div className='h-screen'>
            <div className=' grid grid-cols-2  tablet:gird-cols-2 grid-cols-1 gap-2 w-full m-auto mb-8'>
                <div className='glass shadow-xl shadow-gray-600 border-sky-900 border w-10/12  m-auto  text-2xl mt-24  p-8 bg-cover mb-20 rounded' >
                    <p className='mb-5 text-center text-black text-2xl font-bold text-sky-900  '>Publicaciones : </p>
<div className='grid grid-cols-3 gap-2 '>
                    {
                        
                        allMessages.map((item, index) => {
                            return (
<div className='h-auto'>
                                <div key={index} className=' bg-white w-64 h-auto  m-auto rounded shadow-xl mb-2 p-6 '>
                                    <p className='text-black text-2xl'>{item.message}</p>

                                </div>
                               </div>
                            );
                        })
                                
                    }  
                    </div>
              
                </div>
               
                  <form onSubmit={handleSubmit}>
                        
                        <div className='mt-20 flex   shadow-xl mr-10 rounded shadow-green-900 p-8 '>
                         <p className='text-white text-2xl font-mono'>Haz una publicacion: </p>
                                <textarea id="message" placeholder='Publica algo..' className='h-40 resize-none border rounded-md w-full bg-white p-4   placeholder-gray-400 text-black font-mono text-2xl input m-auto '  value={message} onChange={(e) => setMessage(e.target.value)}> </textarea>
                                 <button type="submit" className='px-3 rounded py-1 h-10  mt-28 ml-2 glass bg-sky-900 text-white hover:bg-white hover:text-black  '>Publicar</button>
                        </div>
                
                    </form>
               
               
                    </div>
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



