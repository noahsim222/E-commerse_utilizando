import { Layout } from '@/components/Layout';
import React, { useContext, useEffect } from 'react';
import authContext from '../context/auth/authContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Alerta from './Alerta';
import { useRouter } from 'next/router';
import Spline from './Spline';


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
                <div className='grid grid-cols-2 '>
                    <div className=' m-2 p-4 rounded-lg  ml-8'>
                        <div className='h-96 w-9/12 ml-56 rounded-xl border border-transparent shadow-xl mt-20 hover:scale-125 transition  delay-150 duration-300'>
                            <Spline />
                        </div>
                    </div>
                    <div className='md:w4/5 xl: w-3/5 mx-auto mb-32 bg-white mt-0 m-8 p-4 h-screen mt-20'>
                        <h2 className='text-4xl font-sans font-bold  text-center my-4 font-mono'>Iniciar sesion</h2>
                        {mensaje && <Alerta />}
                        <div className='flex justify-center mt-5'>
                            <div className='w-9/12'>
                                <form onSubmit={formik.handleSubmit} className='bg-transparent rounded shadow-xl px-8 pt-6 pb-8 mb-4' method='POST' >
                                    <div className='mb-4'>
                                        <label className='block text-xl font-mono mb-2 text-black' htmlFor='email'>Email</label>
                                        <input type="text"
                                            className='input input bordered w-full max-w-xs text-white'
                                            id='email'
                                            placeholder='Email de Usuario'
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}

                                        />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className=''>

                                                <p>{formik.errors.email}.</p>
                                            </div>
                                        ) : null}

                                    </div>

                                    <div className='mb-4'>
                                        <label className='block text-black text-xl font-mono mb-2' htmlFor='password'>Contraseña</label>
                                        <input type="password"
                                            className='input text-white input bordered w-full max-w-xs'
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
                                    <input type='submit' className='btn hover:bg-whi hover:text-black px-16' value="Ingresar" />

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>
        </>

    )
}
export default login;