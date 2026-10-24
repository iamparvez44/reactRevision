import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Profile from './Pages/Profile'
import Cart from './Pages/Cart'
import { Route, Routes } from 'react-router-dom'


const App = () => {


  const [cart, setCart] = useState([])

  console.log(cart);

  return (
    <div>

      <Navbar/>
      
      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products setCart={setCart} cart = {cart} />} />
      <Route path='/cart'  element={<Cart data={cart}  />} />
      <Route path='/Profile' element={<Profile/>} />

      </Routes>


    </div>
  )
}

export default App