import { Layout } from '@/components/Layout';
import authContext from '@/context/auth/authContext'
import React, { useContext, useEffect } from 'react'







const cart = () => {



    const AuthContext = useContext(authContext);
    const { usuarioAutenticado, usuario } = AuthContext;

    useEffect(() => {
        usuarioAutenticado();
    }, [])




    return (
        <Layout>
            <div className='h-screen'>

                {usuario ? (
                    <div className='flex item-center justify-center   '>
                        <div className='text-center text-3xl mt-20 border border-sky-700 w-80 p-10'><p className='mb-5'>{usuario.nombre} </p>Completa tu compra <br /><button className="btn mt-10">Confirmar</button> </div>
                    </div>

                ) : (
                    <div className='flex item-center justify-center'>
                        <form className='text-center text-small mt-20  border border-sky-700  w-80 p-10'>
                            <div className='form-control gap-10'>
                                <label className='text-center' htmlFor='email'>Ingrese su email para enviarle su codigo de compra</label>
                                <input type="email" placeholder="Email" className='input ' />
                                <button className='btn' type='submit' >Confirmar compra</button>
                            </div>
                        </form>
                    </div>

                )}

            </div>

        </Layout>
    )
}


export default cart;
