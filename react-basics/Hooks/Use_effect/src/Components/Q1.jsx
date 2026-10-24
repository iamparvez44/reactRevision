

import React, { useEffect } from 'react'

export const Q1 = () => {

    useEffect(()=>{
        console.log("component Mounted")
    }, [])

    return (
      <div>
        <h1>Hello react</h1>
      </div>
  )
  
}

export default Q1
