import { Layout } from '@/components/Layout'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-dom'
import axios from 'axios'

const Chat = () => {

    const [contacts, setContacts] = useState([])
    const [currentUser, setCurrentUser] = useState(undefined)


    return (
        <Layout>
            <div className='h-9/12 grid grid-cols-2 w-9/12 m-auto h-11/12 mb-60'>
                <div className='h'> <div className='h-96 w-80 bg-base-100 p-8  text-white text-xl'><p className='hover:bg-gray-700 p-2 rounded'>Contactos</p></div></div>

                <div className='flex flex-col h-11/12 p-2 w-9/12 rounded  bg-gray-200 '>
                    <form>
                        <div className='flex-grow mb-80 m-5'>
                            <p className='p-2 bg-[url(https://tailwindcss.com/_next/static/media/blog-post-form-dark@90.5b274bea.jpg)] text-white h-10 rounded w-9/12 text-medium '>Chat...</p>
                        </div>
                        <div className=' mb-auto'>
                            <input type='text' className='bordered input-info rounded w-10/12 ml-3 h-10 ' />
                            <button className='w-auto text-white p-2 ml-4 rounded bg-black'>Enviar</button></div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Chat;