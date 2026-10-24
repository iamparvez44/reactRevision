
import React, { useEffect, useState } from 'react'

const Q17 = () => {

    const [product, setProduct] = useState(null);
    const [productId, setProductId] = useState(1);


    useEffect(()=>{

        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setProduct(data)
        })
        .catch((error)=>{
            console.log(error)
        })

    }, [productId])

  return (
    <div>

        {product && <h1>{product.title}</h1>}
        <button onClick={()=>{setProductId(1)}} >1</button>
        <button onClick={()=>{setProductId(2)}} >2</button>
        <button onClick={()=>{setProductId(3)}} >3</button>

    </div>
  )
}

export default Q17