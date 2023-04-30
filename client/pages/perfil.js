import { Layout } from '@/components/Layout'
import React from 'react'
import authContext from '@/context/auth/authContext';
import { useContext, useEffect } from 'react';

const perfil = () => {


    const AuthContext = useContext(authContext);
    const { usuarioAutenticado, usuario } = AuthContext;

    useEffect(() => {
        usuarioAutenticado();
    }, [])



    return (
        <Layout>
            {
                usuario ? <div className='text-center h-screen'>
                    <p> Hola! {usuario.nombre}</p>
                    <p>Como estan las cosas por {usuario.ubicacion}</p>
                    <div className='w-20'>  <img src={usuario.foto} /></div>

                </div> :

                    <div className='h-screen text-center'>


                        <p>No tienes cuenta?</p>
                        <p>Registrate</p></div>
            }

        </Layout>
    )
}


export default perfil;