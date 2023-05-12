
import { Inter } from '@next/font/google'

import { Layout } from '@/components/Layout'
import authContext from '@/context/auth/authContext'
import Login from './login.jsx'

import MostrarProductos from './MostrarProductos.jsx'
import { useContext } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

const AuthContext = useContext(authContext)
const {usuario} = AuthContext;

  return (
    <>  

{usuario ?  <MostrarProductos /> : <Login/>}
    
       


    </>
  )
}
