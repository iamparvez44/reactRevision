
import React, { useState } from 'react'
import ChildQ5 from './ChildQ5'

const Q5 = () => {


    const [name, setName] = useState("")

  return (
    <div>
        <input type="text" value={name} onChange={(e)=>{
            setName(e.target.value)
        }} />

        <ChildQ5 data={name} />

    </div>
  )
}

export default Q5