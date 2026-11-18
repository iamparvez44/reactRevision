import React, { useContext } from 'react'
import { CountContext, useCountContext } from './Utils/CountContext'

const App = () => {

const {count, setCount} = useCountContext()


  return (
    <div>
      <h1>App component</h1>

      <h1>{count}</h1>
      <button onClick={()=>{setCount(prev=>prev+1)}} >inc</button>

    </div>
  )
}

export default App