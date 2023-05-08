import React, { useReducer, useState } from "react";
import authContext from './authContext'
import authReducer from "./authReducer";
import { REGISTRO_EXITOSO, REGISTRO_ERROR, LIMPIAR_ALERTA, LOGIN_ERROR, LOGIN_EXITOSO, USUARIO_AUTENTICADO, CERRAR_SESION, EMAIL_ENVIADO, EMAIL_ERROR } from "../../types/index.js";

import clienteAxios from "../../config/axios.js";
import tokenAuth from "../../config/token.js";

//Usamos el useReducer para actualizar los estados de la aplicacion en funcion a las acciones que se envian en este caso, datos generados por el usuario 

const AuthState = ({ children }) => {

    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
        autenticado: null,
        usuario: null,
        mensaje: null,
        ubicacion: null,
        edad: null,
        foto: null,
    }
    //Reducer
    const [state, dispatch] = useReducer(authReducer, initialState);
    const [cartProduct, setCartProduct] = useState([])
    //Registrar nuevos usuarios
    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/user', datos);
            dispatch({
                type: REGISTRO_EXITOSO, //Cuando ejecutamos el dispatch nuestro reducer va a ejecutar lo que hay en el type en este caso ejecuta el mensaje del REGISTRO_EXITOSO
                //el dispatch manda acciones a los reducers para actualizar el estado de la aplicacion por ej. si el usuario mando datos en un formulario y le da click a enviar el dispatch va a enviar esa accion al reducer y se va a actulizar el estado de la aplicacion
                payload: respuesta.data.msg
            });

        } catch (error) {
            dispatch({
                type: REGISTRO_ERROR,
                payload: error.response.data.msg
            })
        }
        //Limpiar alerta a los 3 segundos 
        setTimeout(() => {
            dispatch({
                type: LIMPIAR_ALERTA

            })
        }, 3000);
        window.location.reload();
    }

    //Autenticar Usuarios 
    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/auth', datos);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data.token
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }
        //Limpiar alerta a los 3 segundos 
        setTimeout(() => {
            dispatch({
                type: LIMPIAR_ALERTA

            })
        }, 3000);
    }


    //user autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token)
        }
        try {
            const respuesta = await clienteAxios.get('/auth');
            
            dispatch({
                type: USUARIO_AUTENTICADO,
                payload: respuesta.data.usuario
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const cerrarSesion = () => {

        dispatch({
            type: CERRAR_SESION

        })
        window.location.reload();
    }


    // const enviarEmail = async (datos) => {
    //     try {
    //         const respuesta = await clienteAxios.get('/email', datos);
            
    //         dispatch({
    //             type: EMAIL_ENVIADO,
    //             payload: respuesta.data.usuario
    //         })
    //     } catch (error) {
    //         dispatch({
    //             type: EMAIL_ERROR,
    //             payload: error.response.data.msg
    //         })
    //     }
    // }

 
    
    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                ubicacion: state.ubicacion,
                edad: state.edad,
                foto: state.foto,
                registrarUsuario,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion,
               
             

            }}>

            {children}

        </authContext.Provider>
    )
}

export default AuthState;