
import React, { useEffect, useState } from 'react'

const Q14 = () => {

    const [text, setText] = useState("");


    useEffect(()=>{

        console.log("saving:", text)

        return ()=>{
            console.log("previous save cancel")
        }

    },[text])



  return (
    <div>

        <label htmlFor="name">Type somthing.. </label>
        <input type="text" name="name" id="" onChange={(e)=>{ setText(e.target.value)}} />

    </div>
  )
}

export default Q14