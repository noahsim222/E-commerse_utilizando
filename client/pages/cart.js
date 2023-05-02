import { Layout } from '@/components/Layout';
import authContext from '@/context/auth/authContext'
import React, { useContext, useEffect } from 'react'







const cart = () => {



    const AuthContext = useContext(authContext);
    const { usuarioAutenticado } = AuthContext;

    useEffect(() => {
        usuarioAutenticado();
    }, [])




    return (
        <Layout>

            <div className='flex item-center justify-center h-screen mt-44 '>
                <form action='https://getform.io/f/82c66796-df04-4395-bc19-aecfd4b660c1' method='POST'>
                    <div className='form-control gap-10 '>
                        <label className='text-center text-2xl text-white mb-5' htmlFor='email'>Ingrese sus datos para confirmar su compra</label>
                        <input type='email' placeholder="Email" name='email' required className='m-auto input input-info bordered w-80' />
                        <input type='text' placeholder='Nombre' className='input input-info bordered w-80 m-auto' required />
                        <textarea className='w-80 m-auto textarea border-info' placeholder='Direcion del destinatario'></textarea>
                        <button className='btn w-64 m-auto' type='submit'>Comprar</button>
                    </div>
                </form>
            </div>





        </Layout >
    )
}


export default cart;
