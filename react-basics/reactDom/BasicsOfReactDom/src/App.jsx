import React, { useState } from "react";

import { Route, Routes, Link } from "react-router-dom";
import Shoes from "./Components/Shoes";
import Cloths from "./Components/Cloths";
import Electronics from "./Components/Electronics";
import Products from "./Components/Products";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";


const App = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const [filterData, setFilterData] = useState(null)

  

  const navigate = useNavigate()
  return (
    <div>
      <nav className="flex justify-around bg-amber-500 cursor-alias ">
        <h1 onClick={()=>{
            navigate("/");
        }} >LOGO</h1>

        <ul className="flex gap-10 border-">
          <li>
            <Link to="/shoes">Shoes</Link>
          </li>
          <li>
            <Link to="/cloths">Cloths</Link>
          </li>
          <li>
            <Link to="/electronics" >Electronics</Link>
          </li>
         <li>
           <form className="flex gap-1">
            <li><input type="text" placeholder="search" className="bg-yellow-200 border-2 " /></li>
          <li><button className="bg-amber-900 text-amber-50 p-2" >GET</button></li>
           </form>
         </li>
        </ul>
      </nav>

      

      <Routes>


        {/* nesting of route */}

        <Route path="/" element={<Products/>} >

        <Route path="shoes" element={<Shoes />} />
        <Route path="cloths" element={<Cloths/>} />
        <Route path="electronics" element={<Electronics/>} />
        </Route>



        <Route path="/shoes" element={<Shoes />} />
        <Route path="/cloths" element={<Cloths/>} />
        <Route path="/electronics" element={<Electronics/>} />
      </Routes>
    </div>
  );
};

export default App;
