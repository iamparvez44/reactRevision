import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Products = () => {

    const navigate = useNavigate()
    console.log(navigate);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">
        All Products will be list here
      </h1>

        {/* this is our button div */}

        <div className="flex gap-5" >
            <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={()=>{navigate("shoes")}} >
        Shoes
      </button>
      <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={()=>{navigate("cloths")}}>
        Cloths
      </button>
      <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={()=>{navigate("electronics")}}>
        Electronics
      </button>
        </div>

        <Outlet/>

    </div>
  );
};

export default Products;
