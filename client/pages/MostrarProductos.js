import React, {  useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import authContext from '@/context/auth/authContext'


const URI = "http://localhost:8080/product"
const MostrarProductos = () => {

const AuthContext = useContext(authContext)
const {cartItems, addToCart, removeFromCart, cartCount, total} = AuthContext;
    
    const [product, setProduct] = useState([])


    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const res = await axios.get(URI)
        setProduct(res.data)
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <>
        <Layout>
            <div className='flex'>
            <div className='w-20 flex'>
                    
                    <div className="dropdown dropdown-start ml-10 w-20 ">
                        <label tabIndex={0} className=" btn-ghost rounded   flex">
                    <img className='p-2' src='carrito.png' />
                        {cartCount > 0 && <span className='text-white p-2 h-8   rounded '>{cartCount}</span>}
                        </label>
                        <ul className='menu text-white dropdown-content bg-white text-base-100 p-4 rounded border flex w-96'> 
                    {cartItems && <a href="/cart/Cart" ><button className='btn'>Ir al carrito</button>  </a> }
                            <p className='mb-5 text-black'><b>Total: {total} USD</b>  </p> <hr/>
                        {cartItems.map((item) => (
                        <>
                        <div className='grid grid-cols-3 gap-5 mb-2 text-black border border-2 rounded p-2 shadow-xl'>
                            <li className=' grid grid-cols 3 mr-5 w-10' key={item.id}>{item.nombre}:{item.precio}$</li>
                                    <div class=" text-white flex mr-2">
                                        <p className='text-black mr-2 mt-2'>Talle:</p>
                                        <select className="select  w-30 " >

                                            <option value={39}>39</option>
                                            <option value={40}>40</option>
                                            <option value={41}>41</option>
                                            <option value={42}>42</option>
                                            <option value={43}>43</option>
                                            <option value={44}>44</option>
                                            <option value={45}>45</option>
                                            <option value={46}>46</option>
                                            <option value={47}>47</option>
                                        </select>

                                    </div>
                                    <button className="btn btn-circle btn-outline ml-2" onClick={() => removeFromCart(item.id)} >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                    </div>
                              
                            </>
                        
                        ))} 
                        </ul>
                    </div>
                    </div>
                <div className='grid grid-cols-4 h-98 gap-10 w-10/12 m-auto mb-40'>
                    {product.map((product, index) => (
                        <figure class="rounded-xl p-3 w-11/12 backdrop-blur-md bg-gray/30 shadow-xl p-5" key={index}>
                            <img class="w-80 h-80 rounded-lg shadow-xl mx-auto" src={product.foto} alt="" width="384" height="512" />
                            <div class="pt-6 text-center ">
                                <blockquote className='text-4xl font-mono text-white'>
                                    <b>{product.nombre}</b>
                                </blockquote>
                                <figcaption class="font-medium">
                                    <br />
                                    <div className='flex item-center justify-center mb-4'>
                                        <div class=" text-white text-xl">
                                            <p>  {product.precio} USD</p>
                                        </div>
                                    </div>
                                 
                                </figcaption>
<button className='btn glass mt-5 text-white' onClick={() => addToCart(product)}>Agregar al carrito</button>
                              
                            </div>
                        </figure>
                    ))}
                </div>
            </div> </Layout>
        </>
       
    )
}

export default MostrarProductos;
