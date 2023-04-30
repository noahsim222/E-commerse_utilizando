import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ItemCount from './ItemCount';



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

            <div className='flex h-98 gap-10  center-item justify-center'>
                {
                    product.map((product, index) => (
                        < figure class="  mb-40  rounded-xl p-8 dark:bg-slate-800" key={index}>
                            <img class="w-80 h-90 rounded-lg shadow-xl mx-auto" src={product.foto} alt="" width="384" height="512" />
                            <div class="pt-6 text-center space-y-4 ">
                                <blockquote className='text-4xl font-mono'>
                                    <b>{product.nombre}</b>
                                </blockquote>
                                <figcaption class="font-medium">
                                    <div class="text-sky-500 dark:text-sky-400">
                                        {product.precio} USD
                                    </div> <br />
                                    <div class="text-slate-700 dark:text-slate-500">
                                        <ItemCount initial={0} stock={10} onAdd />

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