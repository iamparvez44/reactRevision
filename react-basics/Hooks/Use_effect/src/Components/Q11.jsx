
import React, { useEffect, useState } from 'react'

const Q11 = () => {


    const [inp, setInp] = useState("");
   
  


    useEffect(()=>{
        console.log(`you are searching for: ${inp}`)
    }, [inp])


  return (
    <div>

        <label htmlFor="">Search For: </label>
        <input type="text" onChange={(e)=>{setInp(e.target.value)}} />


        <h1>Character: {inp.length}</h1>



    </div>
  )
}

export default Q11