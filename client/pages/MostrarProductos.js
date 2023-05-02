import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const URI = "http://localhost:8080/product"
const MostrarProductos = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        getProduct()
    }, [])


    const getProduct = async () => {
        const res = await axios.get(URI)
        setProduct(res.data)

    }

    return (
        <div >

            <div className='grid grid-cols-4 h-98 gap-10 w-10/12 m-auto mb-40'>
                {
                    product.map((product, index) => (
                        < figure class="rounded-xl p-3 w-11/12 backdrop-blur-md bg-gray/30 shadow-xl p-5" key={index}>
                            <img class="w-80 h-80 rounded-lg shadow-xl mx-auto" src={product.foto} alt="" width="384" height="512" />
                            <div class="pt-6 text-center ">
                                <blockquote className='text-4xl font-mono text-sky-500'>
                                    <b>{product.nombre}</b>
                                </blockquote>
                                <figcaption class="font-medium">
                                    <br />
                                    <div className='flex item-center justify-center mb-4'>
                                        <div class=" text-white text-xl">
                                            <p>  {product.precio} USD</p>
                                            <Link href='/cart'> <button className='btn gap-2 m-3 text-white'>Comprar <FontAwesomeIcon icon={faShoppingCart} /></button>
                                            </Link>
                                        </div></div>
                                    <div class=" text-sky-500 dark:text-sky-400">

                                        <select className="select w-30 ">
                                            <option disabled selected>Seleccione el talle</option>
                                            <option>40</option>
                                            <option>41</option>
                                            <option>42</option>
                                            <option>43</option>
                                            <option>44</option>
                                            <option>45</option>
                                            <option>46</option>
                                            <option>47</option>
                                        </select>
                                    </div>
                                </figcaption>

                            </div>
                        </figure>

                    ))
                }

            </div>
        </div>
    )

}

export default MostrarProductos;