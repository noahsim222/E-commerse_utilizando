import { Layout } from "@/components/Layout";
import React, { useState, useContext } from "react";
import authContext from "@/context/auth/authContext";
import axios from "axios";

const URI = "http://localhost:8080/email"

const Cart = () => {

const AuthContext = useContext(authContext);
  const { cartItems, total, cartCount } = AuthContext;

    const [email, setEmail] = useState('');

  

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

    return (
      <Layout>
        {total == 0 ? (
        <div className="h-screen">
        <p className="text-center text-white text-4xl font-mono mb-10 mt-40">El carrito esta vacio </p>
            <div className="mt-5 flex items-center justify-center mt-40"><a href="/"> <button className="btn ">Ir a la tienda</button></a></div>   
        </div>) :(
        <div className='h-screen '>
          <div className='flex item-center justify-center  h-screen mt-44 '>
            <form onSubmit={handleSubmit} method="POST">
              <div className='form-control gap-10 bg-gray-800 p-8 rounded-lg'>
                <p className="text-center text-black text-2xl bg-white p-2 w-68 m-auto rounded"> <b>Precio total:</b> {total} USD</p>
                <label className='text-center text-2xl text-white mb-5' htmlFor='email'>Ingrese su gmail para confirmar su compra</label>
                <input type='email' placeholder="Email@gmail.com" value={email}  required className='m-auto input bg-white  text-black bordered w-80' onChange={(event) => setEmail(event.target.value)} />
              
                <button className='btn w-64 m-auto text-white' type='submit'>Comprar</button>
              </div>
            </form>
          </div>
        </div>
)}
        </Layout>
    );
};

export default Cart;