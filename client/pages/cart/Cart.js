import { Layout } from "@/components/Layout";
import React, { useState } from "react";

import axios from "axios";

const URI = "http://localhost:8080/email"

const Cart = () => {

    const [email, setEmail] = useState('');

  const getEmail = async () => {
    const res = await axios.post(URI)
    setEmail(res.data)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getEmail(email);
  };

    return (
      <Layout>
        <div className='h-screen'>
          <div className='flex item-center justify-center h-screen mt-44 '>
            <form onSubmit={handleSubmit}>
              <div className='form-control gap-10 '>
                <label className='text-center text-2xl text-white mb-5' htmlFor='email'>Ingrese sus datos para confirmar su compra</label>
                <input type='email' placeholder="Email"  value={email} required className='m-auto input text-white bordered w-80' onChange={(event) => setEmail(event.target.value)} />

             
                <button className='btn w-64 m-auto' type='submit'>Comprar</button>
              </div>
            </form>
          </div>
        </div>
        </Layout>
    );
};

export default Cart;