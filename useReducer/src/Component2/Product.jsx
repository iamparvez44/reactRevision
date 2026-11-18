import React from 'react'
import { myCartContext } from '../utils/cartContext'
import { useContext } from 'react'

const products = [
    {
        id: 1,
        productName: "Laptop",
        price: 55000
    },
    {
        id: 2,
        productName: "Smartphone",
        price: 25000
    },
    {
        id: 3,
        productName: "Headphones",
        price: 2000
    },
    {
        id: 4,
        productName: "Smart Watch",
        price: 3500
    },
    {
        id: 5,
        productName: "Bluetooth Speaker",
        price: 1800
    },
    {
        id: 6,
        productName: "Keyboard",
        price: 1200
    },
    {
        id: 7,
        productName: "Mouse",
        price: 700
    },
    {
        id: 8,
        productName: "Monitor",
        price: 12000
    }
];

const Product = () => {

const {item, setItem} = useContext(myCartContext)
console.log(item);

function handleClick(product){
    setItem([...item, product])
}


  return (
    <div>

        {
    products.length > 0 && (
        <div >
            {
                products.map((product) => {
                    return (
                        <div key={product.id}>
                            <h1>{product.productName}</h1>
                            <h1>₹{product.price}</h1>
                            <button className='bg-red-400 p-4 m-4' onClick={()=>{handleClick(product)}} >Add to Cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

    </div>
  )
}

export default Product