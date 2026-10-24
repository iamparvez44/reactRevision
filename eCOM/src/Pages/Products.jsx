import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

const Products = ({setCart, cart}) => {
  

  const [data, setData] = useState([]);

  async function getProducts() {
    const response = await axios.get("https://fakestoreapi.com/products");
    setData(response.data)
  }

  useEffect(() => {
    getProducts();
  }, []);

  return <div className="flex flex-wrap justify-center gap-6 p-6" >

  { data.length==0 ? <h1 className="text-8xl p-3 m-3 bg-red-600 " >LOADING....</h1> : data.map((item) => (
    <ProductCard setCart= {setCart} cart = {cart}  key={item.id} product={item} />
  ))}


  </div>;
};

export default Products;
