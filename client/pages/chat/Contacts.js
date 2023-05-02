import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const URI = "http://localhost:8080/allUser"

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
            {
                users.map((user, index) => (
                    < div className='grid grid-cols-2 hover:bg-gray-700 rounded w-full p-2 h-16 ' key={index} >

                        <img className='w-12 h-12  rounded-full ring ring-sky-800 ring-offset-base-100 ring-offset-2' src={user.foto} alt='user' />
                        <p className=' rounded text-white flex gap-5 flex-1 text-md '>
                            
                            <p className=''>{user.nombre}</p> </p>

                    </div>
                )
                )
            }
        </>
    )
}

export default Contacts;