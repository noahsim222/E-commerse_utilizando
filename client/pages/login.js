import { Layout } from '@/components/Layout';
import React, { useContext, useEffect } from 'react';
import authContext from '../context/auth/authContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Alerta from './Alerta';
import { useRouter } from 'next/router';
import Spline from './Spline';
import { Link } from 'react-router-dom';


const login = () => {

    const AuthContext = useContext(authContext);
    const { mensaje, iniciarSesion, autenticado } = AuthContext;  //traemos la funcion usuarioAutenticado que esta en authState gracias a nuestro authContext que creamos utilizando el hook useContext.

    const router = useRouter()

    useEffect(() => {
        if (autenticado) {
            router.push("/")
            window.location.reload();
        }
    }, [autenticado]);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Campo Obligatorio").email("Debe ser un email Valido"),
            password: Yup.string().required("Campo Obligatorio").min(8, 'El password debe contener al menos 8 caracteres')
        }),
        onSubmit: valores => {
            iniciarSesion(valores)
        }


    })
    return (
        <>
            <Layout>
            <div className='m-auto h-screen mb-64 w-96 py-20   '>
                 <p className='text-3xl text-white mb-10'>Iniciar sesion</p>
                    <div className='shadow-lg glass p-10 rounded'>
                        {mensaje && <Alerta mensaje={mensaje} tipo="alerta" />}
                       
                                <form onSubmit={formik.handleSubmit}  method='POST' >
                            <div className='form-control mb-4 shadow-xl'>
                                        <label className='block text-xl font-mono mb-2 text-black' htmlFor='email'>Email</label>
                                        <input type="text"
                                            className='input input bordered w-full max-w-xs w-96 text-white '
                                            id='email'
                                            placeholder='Email de Usuario'
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}

                                        />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className='text-white'>

                                                <p className='text-white'>{formik.errors.email}.</p>
                                            </div>
                                        ) : null}

                                    </div>

                                    <div className='form-control mb-4'>
                                        <label className=' text-black text-xl font-mono mb-2' htmlFor='password'>Contraseña</label>
                                        <input type="password"
                                            className='input text-white input bordered w-full max-w-xs '
                                            id='password'
                                            placeholder='Contraseña'
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.password && formik.errors.password ? (
                                            <div className='mb-4'>

                                                <p>{formik.errors.password}.</p>
                                            </div>
                                        ) : null}
                                    </div>
                            <input type='submit' className='btn px-16 text-white mt-10 bg-sky-900 glass hover:bg-sky-600 mobile:w-40 shadow-lg' value="Ingresar" />

                                </form>  <div className='flex items-center mt-20 justify-center'>
                            <p className='text-center text-white underline decoration-sky-500'>Eres nuevo?</p>
                    <a href="/registrarse"> <button className='btn bg-sky-900 ml-5 h-5 w-24 border-sky-900 px-4   hover:bg-sky-600'>Registrate</button></a>
                                </div>
                                </div>
                              
                </div>
            </Layout>
        </>

    )
}
export default login;