import React, { useEffect, useState } from 'react'

const Q4 = () => {


    const [count, setCount]= useState(0);

    useEffect(()=>{
        document.title = `Count: ${count}`;
    }, [count])

    console.log(document.title);

  return (
    <div>
        <h1>Count {count}</h1>
        <button onClick={()=>{
            setCount(prev => prev+1)
        }} >inc</button>
        <button onClick={()=>{
            setCount(prev => prev-1)
        }} >dec</button>
    </div>
  )
}

export default Q4