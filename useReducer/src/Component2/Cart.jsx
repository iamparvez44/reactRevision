import React from 'react'
import { useContext } from 'react'
import { myCartContext } from '../utils/cartContext'

const Cart = () => {

    const {item} = useContext(myCartContext)

    console.log("From Cart Component", item)

  return (
    <div>
        <h1>Cart Component</h1>

        {item.map((product) => (
            <h3 key={product.id}>
                {product.productName} - ₹{product.price}
            </h3>
        ))}
    </div>
  )
}

export default Cart