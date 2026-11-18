import React from 'react'
import Todo from './Component1/Todo'
import Todo2 from './Component1/Todo2'
import Counter from './Component1/Counter'
import Product from './Component2/Product'
import Cart from './Component2/Cart'

const App = () => {
  return (
    <div className='flex' >
      <Product/>
      <Cart/>
      
    </div>
  )
}

export default App