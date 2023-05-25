import { Layout } from '@/components/Layout'
import React from 'react'
import authContext from '@/context/auth/authContext';
import { useContext, useEffect } from 'react';
import Login from './login';
const perfil = () => {


    const AuthContext = useContext(authContext);
    const { usuarioAutenticado, usuario } = AuthContext;

    useEffect(() => {
        usuarioAutenticado();
    }, [])



    return (  
        <>
        {usuario ?(  <>
        <Layout>
        
                 
                  
                        <div class=" flex flex-cols-2 glass rounded-xl m-auto mb-96  bg-transparent-100 shadow-lg w-5/12 ">
                            <img class="mb-20 max-w-auto m-10 w-80 mr-20 h-64 rounded-lg " src={usuario.foto} alt="" />
                            <div class="  text-center  p-4 w-98 rounded-lg  ">
                                <div className='mr-80 p-4 border border-sky-900 shadow-lg rounded-lg'>
                                    <div className='flex text-3xl  text-sky-900 font-medium mt-10 mb-20'>
                                <p >
                                        Bienvenido </p>
                                        <p className='w-64' >{usuario.nombre}</p>
                                        </div>
                               
                                <div className='flex text-3xl  text-sky-900 font-medium mb-20'>
                                    <p >
                                        Ubicacion: </p>
                                    <p className=' ml-5' >{usuario.ubicacion}</p>
                                </div>
                                </div>

                            </div>

                        </div> 
                        </Layout> 
                    </>
                ) : (
                    <>
                            <Login />
                    </>
                )
         

       
      }
      </>
    )
}


export default perfil;