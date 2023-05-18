import { Layout } from "@/components/Layout";
import React, { useState, useContext } from "react";
import authContext from "@/context/auth/authContext";
import axios from "axios";
import Login from "../login";
import Spline from '../Spline.jsx'

const URI = "https://54.233.207.38:443/email"

const Cart = () => {

const AuthContext = useContext(authContext);
  const { cartItems, total, cartCount, usuario } = AuthContext;

    const [email, setEmail] = useState('');
const [showAlert, setShowAlert] = useState(false)
  

  const sendEmail = async (data) => {
    const res = await axios.post(URI, {
      email: data.email,
      cartItems: cartItems,
      total: total,
      cartCount: cartCount
    });
    console.log(res.data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: email,
      cartItems: cartItems,
      total: total,
      cartCount: cartCount
    };

    sendEmail(data);
  };

  const alertClick = () => {
    
     if(email){
      setShowAlert(true)
    }
    setTimeout(() => {
      setShowAlert(false)
    }, 3000);
  }

    return (
      <>
       
        {usuario ? (
      <Layout>
         {showAlert && (<div className="alert alert-success shadow-lg w-2/12 m-auto h-64">
          <div className="grid grid-cols-1 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-10 w-10 m-auto " fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          
            <span className="text-2xl text-center font-bold">¡Tu compra ha sido realizada con exito! </span>
                <span className="text-center mt-5">Verifica tu casilla de correo electronico. </span>
           
          </div>
        </div>)}
        {total == 0 ? (
        <div className="h-screen">
        <p className="text-center text-white text-4xl font-mono mb-10 mt-40">El carrito esta vacio </p>
            <div className="mt-5 flex items-center justify-center mt-40"><a href="/"> <button className="btn glass bg-sky-900 text-white hover:bg-sky-800 hover:scale-125 duration-300 delay-150 transition ">Ir a la tienda</button></a></div> 
        
            
        </div>) :(
        <div className='h-screen '>
          <div className='flex item-center justify-center  h-screen mt-10 '>
            <form onSubmit={handleSubmit} method="POST">
              <div className='form-control gap-10 bg-gray-800 p-8 rounded-lg'>
                <p className="text-center text-black text-2xl bg-white p-2 w-68 m-auto rounded"> <b>Precio total:</b> {total} USD</p>
                <label className='text-center text-2xl text-white mb-5' htmlFor='email'>Ingrese su gmail para confirmar su compra</label>
                <input type='email' placeholder="Email@gmail.com" value={email}  required className='m-auto input bg-white  text-black bordered w-80' onChange={(event) => setEmail(event.target.value)} />
              
                        <button className='btn w-64 m-auto text-white' type='submit' onClick={alertClick}>Comprar</button>
              </div>
            </form>
          </div>
        </div>
)}
        </Layout>

 ) : ( <Login/> )
        }
        </>
    );
};

export default Cart;