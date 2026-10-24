import axios from "axios";
import React, { useEffect, useState } from "react";

const Shoes = () => {
  const [shoes, setShoes] = useState([]);

  async function getShoes() {
    try {
      const response = await axios(
        "https://dummyjson.com/products/category/mens-shoes"
      );

      setShoes(response.data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getShoes();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">

      <h1 className="text-3xl font-bold text-center mb-8">
        Men's Shoes
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {shoes.map((shoe) => (
          <div
            key={shoe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >

            {/* Image */}
            <div className="h-56 bg-gray-50 flex items-center justify-center p-4">
              <img
                src={shoe.thumbnail}
                alt={shoe.title}
                className="w-full h-full object-contain hover:scale-105 transition duration-300"
              />
            </div>

            {/* Card Details */}
            <div className="p-5">

              <h2 className="text-lg font-bold truncate">
                {shoe.title}
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                {shoe.brand}
              </p>

              <div className="flex justify-between items-center mt-4">

                <p className="text-xl font-bold">
                  ${shoe.price}
                </p>

                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm">
                  ⭐ {shoe.rating}
                </span>

              </div>

              <button
                className="w-full bg-black text-white py-2 rounded-lg mt-5
                           hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Shoes;