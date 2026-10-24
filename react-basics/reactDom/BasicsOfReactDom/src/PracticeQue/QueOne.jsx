import React from 'react'
import Home from "../Pages/Home"
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Contact from "../Pages/Contact"
import About from "../Pages/About"
import Products from "../Pages/Products"
import { useNavigate } from 'react-router-dom'

const QueOne = () => {

  const navigate = useNavigate()


  return (
    <div>

        <nav className='flex justify-between bg-fuchsia-500' >
            <h1>Logo</h1>
            <ul className='flex gap-3 text-black-600' >
                <NavLink to="/" ><li>Home</li></NavLink>
                <NavLink to="/contact" ><li>Contact</li></NavLink>
                <NavLink to="/about" ><li>About</li></NavLink>
                <NavLink to="/products" ><li>Products</li></NavLink>

            </ul>
        </nav>

        <Routes>

          <Route path='/' element= {<Home/>} />
          <Route path='/contact' element= {<Contact/>} />
          <Route path='/about' element= {<About/>} />
          <Route path='/products' element= {<Products/>} />

        </Routes>

        <button className='bg-blue-600 text-2xl border-2 ' onClick={()=>{
          navigate('/products')
        }} >Go to Products</button>

    </div>
  )
}

export default QueOne