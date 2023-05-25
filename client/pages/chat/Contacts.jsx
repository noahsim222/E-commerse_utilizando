import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const URI = "http://54.94.136.133:8080/allUser"

const Contacts = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = async () => {
        const res = await axios.get(URI);
        setUsers(res.data)
    }

    return (
        <>
        <div className='glass rounded-lg'>
            {
                users.map((user, index) => (
                    < div className='grid grid-cols-2 hover:bg-sky-300 dela-150 duration-300 transition border shadow-lg rounded w-full p-2 h-16 ' key={index} >

                        <img className='w-12 h-12  rounded-full ' src={user.foto} alt='user' />
                        <p className=' rounded text-black  flex gap-5 flex-1 '>
                            
                            <p className='hover:text-white'>{user.nombre}</p> </p>

                    </div>
                )
                )
            }
            </div>
        </>
    )
}

export default Contacts;