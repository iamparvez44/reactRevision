import React, { useState } from 'react'
import Apple from './Apple';

const ConditionalRendering = () => {


const [show, setShow] = useState(true);

  return (
    <div>

        

        <button onClick={()=>{
            setShow(!show)
        }} >Toggle</button>

        {show && <Apple/>}


    </div>
  )
}

export default ConditionalRendering