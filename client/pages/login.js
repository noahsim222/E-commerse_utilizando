import { Layout } from '@/components/Layout';
import React, { useContext, useEffect } from 'react';
import authContext from '../context/auth/authContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Alerta from './Alerta';
import { useRouter } from 'next/router';


const login = () => {

    const AuthContext = useContext(authContext);
    const { mensaje, iniciarSesion, autenticado } = AuthContext;  //traemos la funcion usuarioAutenticado que esta en authState gracias a nuestro authContext que creamos utilizando el hook useContext.

    const router = useRouter()

    useEffect(() => {
        if (autenticado) {
            router.push("/")
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
                <div className='md:w4/5 xl: w-3/5 mx-auto mb-32'>
                    <h2 className='text-4xl font-sans font-bold text-center my-4 font-mono'>Iniciar sesion</h2>
                    {mensaje && <Alerta />}
                    <div className='flex justify-center mt-5'>
                        <div className='w-full max-w-lg'>
                            <form onSubmit={formik.handleSubmit} className='bg-transparent rounded shadow-xl px-8 pt-6 pb-8 mb-4' method='POST' >
                                <div className='mb-4'>
                                    <label className='block text-sky-500 text-sm font-bold mb-2' htmlFor='email'>Email</label>
                                    <input type="text"
                                        className='shadow bg-slate-800 border rounded w-full py-2 px-3 focus:out leading-tight text-white'
                                        id='email'
                                        placeholder='Email de Usuario'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}

                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className='bg-gray-200 border-l-4 border-red-500 p-2  text-red-700'>
                                            <p className='font-bold '>Error</p>
                                            <p>{formik.errors.email}.</p>
                                        </div>
                                    ) : null}

                                </div>

                                <div className='mb-4'>
                                    <label className='block text-sky-500 text-sm font-bold mb-2' htmlFor='password'>Contraseña</label>
                                    <input type="password"
                                        className='shadow bg-slate-800 appearance-none border rounded w-full py-2 px-3 focus:out leading-tight text-white'
                                        id='password'
                                        placeholder='Contraseña'
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div className='bg-gray-200 border-l-4 border-red-500 p-2  text-red-700'>
                                            <p className='font-bold '>Error</p>
                                            <p>{formik.errors.password}.</p>
                                        </div>
                                    ) : null}
                                </div>
                                <input type='submit' className='btn hover:bg-sky-700 hover:text-black px-16' value="Ingresar" />

                            </form>
                        </div>
                    </div>

                </div>

            </Layout>
        </>

    )
}
export default login;