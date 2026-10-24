
import React, { useEffect, useState } from 'react'

const Q15 = () => {


    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(()=>{

        console.log("Count Effect: ", count)

        return ()=>{
            console.log("Previous Count CleanUp")
        }

    }, [count])


  return (
    <div>

        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <h1>{name}</h1>

        <h1>{count}</h1>
        <button onClick={()=>{setCount(prev=>prev+1)}} >inc</button>
        <button onClick={()=>{setCount(prev=>prev-1)}} >dec</button>


    </div>
  )
}

export default Q15