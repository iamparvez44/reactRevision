
import React from "react";

const ProductCard = ({ product, setCart, cart }) => {

    

  return (
    <div className="w-64 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md">

      <img
        src={product.image}
        alt={product.title}
        className="h-44 w-full object-contain"
      />

      <p className="mt-3 text-sm capitalize text-gray-500">
        {product.category}
      </p>

      <h3 className="mt-2 h-12 overflow-hidden text-base font-semibold">
        {product.title}
      </h3>

      <p className="mt-3 text-xl font-bold text-gray-900">
        ${product.price}
      </p>

      <button onClick={()=>{setCart([...cart, product])}}  className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;
