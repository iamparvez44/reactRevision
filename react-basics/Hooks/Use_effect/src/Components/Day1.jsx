// use Effect basics

import React, { useEffect, useState } from "react";

const Day1 = () => {
  const [product, setProducts] = useState({});

  console.log(product);

 useEffect(()=>{
     fetch("https://fakestoreapi.com/products/1")
    .then((res) => {
      return res.json();
    })
    .then((d) => {
      setProducts(d);
    });
 });

  return (
    <div>
      <img src={product.image} alt="" />
    </div>
  );
};

export default Day1;
