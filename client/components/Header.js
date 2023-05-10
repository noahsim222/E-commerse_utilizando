import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import authContext from '@/context/auth/authContext';


export const Header = () => {

    const AuthContext = useContext(authContext);
    const { usuarioAutenticado, usuario, cerrarSesion } = AuthContext;

    useEffect(() => {
        usuarioAutenticado();
    }, [])


    return (
        <div className="navbar sm:w-full glass bg-attachment z-50  shadow-xl">
            <div className="flex-1">
                <Link href='/' className="btn btn-ghost normal-case text-xl"> <img src='/jordan-logo.jpg' className='w-auto h-12 rounded-full' alt='logo' />  </Link>
            </div>
            <div />
            <div className="flex-none mr-56">
                <div className="form-control">
                 
                </div>
            </div >
            {usuario ? (
                <>

                    <div className='gap-4 text-black text-2xl '> {usuario.nombre}  </div>
                    <div className="dropdown  dropdown-end ml-10 ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-20 rounded-full">
                                <img src={usuario.foto} alt="foto" />
                            </div>
                        </label>
                        <ul className='menu menu-compact text-black dropdown-content bg-white w-52 rounded-box pb-1 pt-1 mt-2'>
                            <li > <Link href='/perfil'>Perfil</Link></li>
                            <li> <Link href='/chat/Chat'>Comentarios</Link> </li>
                            <li><button type='button' onClick={() => cerrarSesion()}>Cerrar sesion</button></li>
                        </ul>
                    </div>
                </>
            ) : (
                <>
                    <div className='mr-10  gap-4'>
                            <Link href='/login' className='btn sm:mr-20 sm:w-4 bg-sky-900 glass hover:bg-sky-600 text-white'>
                            Iniciar Sesion
                        </Link>
                        <Link href='/registrarse' className='btn bg-sky-900 glass hover:bg-sky-600 text-white'>
                            Registrarse
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}

