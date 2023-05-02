import { Layout } from '@/components/Layout'
import React from 'react'
import authContext from '@/context/auth/authContext';
import { useContext, useEffect } from 'react';

const perfil = () => {


    const AuthContext = useContext(authContext);
    const { usuarioAutenticado, usuario, cerrarSesion } = AuthContext;

    useEffect(() => {
        usuarioAutenticado();
    }, [])



    return (
        <Layout>
            {
                usuario ? (
                    <>
                        <div class=" bg-slate-100 rounded-xl w-80 m-auto mb-96 p-8 dark:bg-slate-800">
                            <img class="mb-20 mx-auto w-60 rounded" src={usuario.foto} alt="" />
                            <div class="pt-6 text-center  space-y-4">
                                <blockquote>
                                    <p class="text-lg text-sky-500 font-medium mb-20">
                                        Hola {usuario.nombre}!
                                    </p>
                                </blockquote>

                            </div>

                        </div>
                    </>
                ) : (
                    <>
                        <div>Hola</div>
                    </>
                )
            }

        </Layout>
    )
}


export default perfil;