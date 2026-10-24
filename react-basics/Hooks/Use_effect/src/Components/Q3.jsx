import React, { useEffect, useState } from 'react'

const Q3 = () => {


    let [text, setText] = useState("");

    useEffect(()=>{

        console.log("Input Changed: ", text)

    }, [text])


  return (
    <div>
        <input type="text" placeholder='type here' value={text} onInput={(e)=>{
            setText(e.target.value)
        }} />

        <h1>{text}</h1>
    </div>
  )
}

export default Q3