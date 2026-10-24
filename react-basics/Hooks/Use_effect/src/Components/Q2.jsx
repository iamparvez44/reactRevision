
import React, { useEffect, useState } from 'react'

const Q2 = () => {

    const [count, setCount] = useState(0)


    useEffect(()=>{

       console.log("count change", count);

    }, [count])


  return (
    <div>

        <h1>Count: {count}</h1>
        <button onClick={()=>{
            setCount(count+1)
        }} >inc</button>
        <button onClick={()=>{
            setCount(count-1)
        }} >dec</button>

    </div>
  )
}

export default Q2