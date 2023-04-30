import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'



const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial)

    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial])


    return (
        <div className='flex item-center justify-center gap-4'>

            <button className='btn' disabled={count <= 0} onClick={() => setCount(count - 1)} >-</button>
            <p className='text-center'>{count}</p>
            <button className='btn ' disabled={count >= stock} onClick={() => { setCount(count + 1) }}>+</button>
            <Link href='/cart' className=' btn' disabled={count <= 0} onClick={() => onAdd(count)}>Comprar</Link>
        </div>
    )
}

export default ItemCount;